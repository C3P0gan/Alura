from kafka import KafkaConsumer


class LogService:
    def __init__(self) -> None:
        self.consumer = KafkaConsumer(
            bootstrap_servers='localhost:9092',
            auto_offset_reset='earliest',
            enable_auto_commit=True,
            group_id='log_service',
            value_deserializer=lambda v: v.decode('utf-8')
        )

    def run(self) -> None:
        consumer = self.consumer
        consumer.subscribe(pattern=r'ECOMMERCE.*')

        try:
            while True:
                records = self.consumer.poll(timeout_ms=100)
                for topic_partition, messages in records.items():
                    if messages:
                        print(f"Found {len(messages)} records")
                        for message in messages:
                            print('-' * 60)
                            print(f"LOG: {message.topic}\n"
                                  f"key: {message.key}\n"
                                  f"value: {message.value}\n"
                                  f"offset: {message.offset}")
        except KeyboardInterrupt:
            pass


if __name__ == '__main__':
    LogService().run()
