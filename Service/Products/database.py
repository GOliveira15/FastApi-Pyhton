import motor.motor_asyncio
from model import Product

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
database = client.ProductList
collection = database.Product

async def GetProduct(Id):
    document = await collection.find_one({"Id": int(Id)})
    return document

async def GetAllProducts():
    Products = []
    cursor = collection.find({})
    async for document in cursor:
        Products.append(Product(**document))
    return Products

async def AddItem(Product):
    document = Product
    result = await collection.insert_one(document)
    return document

async def UpdateItem(Id, product: Product):
    await collection.update_one(
        {"Id": int(Id)}, {"$set": dict(product)}
    )
    document = await collection.find_one({"Id": int(Id)})
    return document

async def DeleteItem(Id):
    await collection.delete_one({"Id": int(Id)})
    return True