from collections.abc import Callable
from kafka import KafkaConsumer
from typing import Self
from uuid import uuid4


class KafkaService:
    def __init__(self, group_id: str, topic: str, callback: Callable) -> None:
        self.callback = callback
        self.consumer = KafkaConsumer(
            topic,
            bootstrap_servers='127.0.0.1:9092',
            key_deserializer=lambda k: k.decode('utf-8') if k else None,
            value_deserializer=lambda v: v.decode('utf-8'),
            group_id=group_id,
            client_id=str(uuid4()),
            auto_offset_reset='latest'
        )

    def run(self):
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

    def close(self):
        print('Closing consumer...')
        self.consumer.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(self, *args, **kwargs) -> None:
        self.close()
