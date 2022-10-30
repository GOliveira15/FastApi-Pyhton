import motor.motor_asyncio
from Models.Product import Product

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://productsdb:8jiEIYOM9qKSCHUdqksIcG6ggNAQhGAcSQzvWx6HTwdt2vdU5p6zbbRHk1JhlPqghToT9qGO6dZ3ACDbjkn7pg==@productsdb.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@productsdb@')
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