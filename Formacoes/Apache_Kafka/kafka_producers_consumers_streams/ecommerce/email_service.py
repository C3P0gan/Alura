from kafka.consumer.fetcher import ConsumerRecord
from kafka_service import KafkaService


class EmailService(KafkaService):
    def __init__(self) -> None:
        super().__init__(
            group_id=EmailService.__class__.__name__,
            topic='ECOMMERCE_SEND_EMAIL',
            callback=self.parse
        )

    def parse(self, record: ConsumerRecord) -> None:
        print('-' * 60)
        print(f"LOG: {record.topic}\n"
              f"Key: {record.key}\n"
              f"Value: {record.value}\n"
              f"Partition: {record.partition}\n"
              f"Offset: {record.offset}")


if __name__ == '__main__':
    with EmailService() as service:
        service.run()
