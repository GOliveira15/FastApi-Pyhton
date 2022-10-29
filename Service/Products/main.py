from fastapi import FastAPI, HTTPException
from Models.Product import Product
from Config.Database import (
    GetProduct,
    GetAllProducts,
    AddItem,
    UpdateItem,
    DeleteItem
)
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/Products")
async def GetProducts():
    response = await GetAllProducts()
    return response

@app.get("/api/Products/{Id}", response_model=Product)
async def GetProductsById(Id):
    response = await GetProduct(Id)
    if response:
        return response
    raise HTTPException(404, f"There is no product with the Id {Id}")

@app.post("/api/Products/", response_model=Product)
async def AddProduct(product: Product):
    response = await AddItem(product.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@app.put("/api/Products/{Id}/", response_model=Product)
async def UpdateProduct(Id, product: Product):
    response = await UpdateItem(Id, product)
    if response:
        return response
    raise HTTPException(404, f"There is no product with the Id {Id}")

@app.delete("/api/Products/{Id}")
async def DeleteProduct(Id):
    response = await DeleteItem(Id)
    if response:
        return "Successfully deleted product"
    raise HTTPException(404, f"There is no product with the Id {Id}")