from kafka_service import KafkaService


class FraudDetectorService(KafkaService):
    def __init__(self) -> None:
        super().__init__(
            group_id=FraudDetectorService.__class__.__name__,
            topic='ECOMMERCE_NEW_ORDER',
            callback=self.parse
        )

    def parse(self, record):
        print('-' * 60)
        print("Processing new order, checking for fraud\n"
              f"LOG: {record.topic}\n"
              f"Key: {record.key}\n"
              f"Value: {record.value}\n"
              f"Partition: {record.partition}\n"
              f"Offset: {record.offset}")


if __name__ == '__main__':
    with FraudDetectorService() as service:
        service.run()
