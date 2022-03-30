import React from 'react';
import "./product.css";
// var produtos = [

// ]


function Product(props){
    return <div className="card product">
        <img src={"http://localhost:3000/produtos/" + props.image} />
        <div className="labels">
            <label>{props.name}</label>
            <span className="price">R$ {props.price}</span>
            <a className="product-link">Ver produto</a>
        </div>

    </div>
}

export default Product;