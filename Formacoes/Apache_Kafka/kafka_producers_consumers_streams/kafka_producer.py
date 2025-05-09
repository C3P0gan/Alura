from kafka import KafkaProducer
import json


def main() -> None:
    producer = KafkaProducer(
        bootstrap_servers='localhost:9092',
        value_serializer=lambda v: json.dumps(v).encode('utf-8')
    )

    data = {'1': 'Test'}

    producer.send('ECOMMERCE_NEW_ORDER', value=data)

    producer.flush()
    producer.close()


if __name__ == '__main__':
    main()
