from kafka import KafkaConsumer
import json


def main() -> None:
    consumer = KafkaConsumer(
        'ECOMMERCE_NEW_ORDER',
        bootstrap_servers='localhost:9092',
        auto_offset_reset='earliest',
        enable_auto_commit=True,
        group_id=KafkaConsumer.__name__,
        value_deserializer=lambda v: json.loads(v.decode('utf-8'))
    )

    try:
        for message in consumer:
            print(f"Received message: {message.value}")
    except KeyboardInterrupt:
        pass


if __name__ == '__main__':
    main()
