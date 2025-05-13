from kafka_dispatcher import KafkaDispatcher
from random import random, randint
from dataclasses import asdict
from order import Order
from uuid import uuid4
import json


class NewOrderService:
    def run(self) -> None:
        with KafkaDispatcher() as dispatcher:
            try:
                for i in range(10):
                    user_id = str(uuid4())
                    order_id = randint(1_000, 10_000)
                    amount = random() * 5_000 + 1

                    order = json.dumps(
                        asdict(Order(user_id, order_id, amount)))
                    dispatcher.send('ECOMMERCE_NEW_ORDER',
                                    key=user_id, value=order)

                    email = 'Thank you for your order! We are processing your order'
                    dispatcher.send('ECOMMERCE_SEND_EMAIL',
                                    key=user_id, value=email)
            except Exception as e:
                print(f"Failed sending orders: {e}")


if __name__ == '__main__':
    NewOrderService().run()
