from kafka_service import KafkaService


class LogService(KafkaService):
    def __init__(self) -> None:
        super().__init__(
            group_id=LogService.__class__.__name__,
            topic=r'ECOMMERCE.*',
            callback=self.parse
        )

    def parse(self, record) -> None:
        print('-' * 60)
        print(f"LOG: {record.topic}\n"
              f"key: {record.key}\n"
              f"value: {record.value}\n"
              f"offset: {record.offset}")


if __name__ == '__main__':
    with LogService() as service:
        service.run()
