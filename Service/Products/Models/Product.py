from pydantic import BaseModel

class Product(BaseModel):
    Id: int
    Name: str
    Category: str
    Brand: str
    Price: float