import axios from 'axios';
import React from 'react';

function ProductItem(props) {
    const deleteProductHandler = (id) => {
        axios.delete(`http://localhost:8000/api/Products/${id}`)
            .then(res => console.log(res.data))
    }

    return (
        <div>
            <span style={{ fontWeight: 'bold, underline' }}> {props.product.Id} | {props.product.Name}, {props.product.Category}, {props.product.Brand}, R${props.product.Price}</span>
            <button onClick={() => deleteProductHandler(props.product.Id)} className="btn btn-outline-danger Button" style={{ 'borderRadius': '50px', }}>Excluir</button>
            <hr></hr>
        </div>
    )
}

export default ProductItem;