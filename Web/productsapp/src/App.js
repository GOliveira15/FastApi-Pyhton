import './App.css';
import React, {useState, useEffect} from 'react';
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
    axios.post('http://localhost:8000/api/Products/', { 'Id': id, 'Name': name, "Category": category, "Brand": brand, "Price": price, "IsAvailable": isAvailable, "Quantity": quantity })
      .then(res => console.log(res))
  };

  return (
    <div className="App list-group-item justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}}>
      <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">Produtos</h1>

      <div className="card-body">
        <h5 className="card text-white bg-dark mb-3">Adicionar produto</h5>
        <span className="card-text">
          <input className="mb-2 form-control titleIn" onChange={event => setId(event.target.value)} placeholder="Id"/>
          <input className="mb-2 form-control titleIn" onChange={event => setName(event.target.value)} placeholder="Nome"/>
          <input className="mb-2 form-control titleIn" onChange={event => setCategory(event.target.value)} placeholder="Categoria"/>
          <input className="mb-2 form-control titleIn" onChange={event => setBrand(event.target.value)} placeholder="Marca"/>
          <input className="mb-2 form-control titleIn" onChange={event => setPrice(event.target.value)} placeholder="Preço"/>
          <input className="mb-2 form-control titleIn" onChange={event => setIsAvailable(event.target.value)} placeholder="Disponibilidade"/>
          <input className="mb-2 form-control titleIn" onChange={event => setQuantity(event.target.value)} placeholder="Quantidade"/>
          <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}} onClick={addProductHandler}>Adicionar</button>
        </span>
        <h5 className="card text-white bg-dark mb-3">Seus produtos</h5>
        <div >
          <ProductView productsList={productsList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
