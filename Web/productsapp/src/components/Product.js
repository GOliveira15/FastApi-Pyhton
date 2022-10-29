import axios from 'axios';
import React from 'react';

function ProductItem(props) {
    const deleteProductHandler = (id) => {
    axios.delete(`http://localhost:8000/api/Products/${id}`)
        .then(res => console.log(res.data)) }
  
    return (
        <div>
            <p>
                <span style={{ fontWeight: 'bold, underline' }}>{props.product.Id} : </span> {props.product.Name}
                <button onClick={() => deleteProductHandler(props.product.Id)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}>X</button>
                <hr></hr>
            </p>
        </div>
    )
}

export default ProductItem;