import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductView from './components/ProductsListView';

function App() {
  const [productsList, setProductsList] = useState([{}])
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState('')
  const [isAvailable, setIsAvailable] = useState('')
  const [quantity, setQuantity] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/api/Products')
      .then(res => {
        setProductsList(res.data)
      })
  });

  const addProductHandler = () => {
    axios.post('http://localhost:8000/api/Products/', { 'Id': id, 'Name': name, "Category": category, "Brand": brand, "Price": price })
      .then(res => console.log(res))
  };

  const resetProductHandler = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    this.setProductsList({
      productsList: [{}]
    });
  };

  return (
    <div className="App">
      <div className="Nav">
        <div className="container">
          <p><b>Tropicana,</b> Perfumaria do Brasil</p>
        </div>
      </div>

      <div className="container Main">
        <div className="row">
          <div className="col-sm">
            <h4 className="mb-4">Adicionar</h4>
            <input className="mb-2 form-control" onChange={event => setId(event.target.value)} placeholder="Código" />
            <input className="mb-2 form-control" onChange={event => setName(event.target.value)} placeholder="Nome" />
            <input className="mb-2 form-control" onChange={event => setCategory(event.target.value)} placeholder="Categoria" />
            <input className="mb-2 form-control" onChange={event => setBrand(event.target.value)} placeholder="Marca" />
            <input className="mb-2 form-control" onChange={event => setPrice(event.target.value)} placeholder="Preço" />

            <button className="btn btn-outline-success mt-2 mb-5" style={{ 'borderRadius': '50px', "font-weight": "bold" }} onClick={addProductHandler}>Salvar</button>
            <button className="btn btn-outline-primary mt-2 mb-5 Button" style={{ 'borderRadius': '50px', "font-weight": "bold" }} onClick={resetProductHandler}>Limpar</button>
          </div>
          <div className="col-sm">
            <h4 className="mb-4">Produtos</h4>
            <ProductView productsList={productsList} />
          </div>
        </div>
      </div>

      <div className="text-center Footer">
        CRUD feito com FastAPI, React e MongoDB.
      </div>
    </div>
  );
}

export default App;
