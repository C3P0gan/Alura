from typing import Self, Any, Optional
from collections.abc import Callable
from kafka import KafkaConsumer
from uuid import uuid4


class KafkaService:
    def __init__(
        self,
        group_id: str,
        topic: str,
        callback: Callable,
        override_properties: Optional[dict[str, Any]] = {}
    ) -> None:
        self.callback = callback
        self.consumer = KafkaConsumer(
            **self._get_properties(group_id, override_properties))
        self.consumer.subscribe(pattern=topic)

    def _get_properties(
        self,
        group_id: str,
        override_properties: dict[str, Any]
    ) -> dict[str, Any]:
        properties = {
            'bootstrap_servers': '127.0.0.1:9092',
            'key_deserializer': lambda k: k.decode('utf-8') if k else None,
            'value_deserializer': lambda v: v.decode('utf-8'),
            'group_id': group_id,
            'client_id': str(uuid4()),
            'auto_offset_reset': 'earliest'  # latest
        }
        properties.update(override_properties)
        return properties

    def run(self) -> None:
        try:
            while True:
                records = self.consumer.poll(timeout_ms=100)
                for _, messages in records.items():
                    if messages:
                        print(f"Found {len(messages)} records")
                        for message in messages:
                            self.callback(message)
        except KeyboardInterrupt:
            pass

    def close(self) -> None:
        print('Closing consumer...')
        self.consumer.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(self, *args, **kwargs) -> None:
        self.close()
