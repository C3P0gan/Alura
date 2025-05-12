from kafka import KafkaProducer
from typing import Self


class KafkaDispatcher:
    def __init__(self) -> None:
        self.producer = KafkaProducer(
            bootstrap_servers='127.0.0.1:9092',
            key_serializer=lambda k: k.encode('utf-8') if k else None,
            value_serializer=lambda v: v.encode('utf-8')
        )

    def send(self, topic: str, key: str, value: str) -> None:
        future = self.producer.send(topic, key, value)
        future.get(timeout=10)

    def close(self) -> None:
        self.producer.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(self, *args, **kwargs) -> None:
        self.close()
