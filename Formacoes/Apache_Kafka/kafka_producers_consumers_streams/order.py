from dataclasses import dataclass


@dataclass
class Order:
    user_id: str
    order_id: str
    amount: float
