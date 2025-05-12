from kafka_dispatcher import KafkaDispatcher
from random import randint
from uuid import uuid4


def main() -> None:
    with KafkaDispatcher() as dispatcher:
        try:
            for i in range(10):
                key = str(uuid4())
                value = f"{key}, {randint(1_000, 10_000)}, {
                    randint(10_000, 100_000)}"
                dispatcher.send('ECOMMERCE_NEW_ORDER', key=key, value=value)

                email = 'Thank you for your order! We are processing your order'
                dispatcher.send('ECOMMERCE_SEND_EMAIL', key=key, value=email)
        except Exception as e:
            print(f"Failed sending orders: {e}")


if __name__ == '__main__':
    main()
