import React from 'react';
import { ReactDOM } from 'react';
import Product from '../Product';
import "./productList.css";

var list = [

    {
        name : "Star Wars",
        products : [
            {
                image: "1.png",
                name: "Produto XYZ",
                price:"60,00"
            },
            {
                image: "2.png",
                name: "Produto XYZ",
                price:"60,00"
            },
            {
                image: "3.png",
                name: "Produto XYZ",
                price:"60,00"
            },
            {
                image: "4.png",
                name: "Produto XYZ",
                price:"60,00"
            },
            {
                image: "5.png",
                name: "Produto XYZ",
                price:"60,00"
            },
            {
                image: "6.png",
                name: "Produto XYZ",
                price:"60,00"
            },
        ]
    },
    {
        name : "Consoles",
        products : [
            {
                image: "7.png",
                name: "Produto XYZ",
                price:"60,00"
            },
            {
                image: "8.png",
                name: "Produto XYZ",
                price:"60,00"
            },
            {
                image: "9.png",
                name: "Produto XYZ",
                price:"60,00"
            },
            {
                image: "10.png",
                name: "Produto XYZ",
                price:"60,00"
            },
            {
                image: "11.png",
                name: "Produto XYZ",
                price:"60,00"
            },
            {
                image: "12.png",
                name: "Produto XYZ",
                price:"60,00"
            },
        ]
    },
    {
        name : "Diversos",
        products : [
            {
                image: "13.png",
                name: "Produto XYZ",
                price:"60,00"
            },
            {
                image: "14.png",
                name: "Produto XYZ",
                price:"60,00"
            },
            {
                image: "15.png",
                name: "Produto XYZ",
                price:"60,00"
            },
            {
                image: "16.png",
                name: "Produto XYZ",
                price:"60,00"
            },
            {
                image: "17.png",
                name: "Produto XYZ",
                price:"60,00"
            },
            {
                image: "18.png",
                name: "Produto XYZ",
                price:"60,00"
            }
        ]
    }

    
    
    

]



function ProductList(){
    return <div className="product-list">
        {
            list.map((section) => {
                
                return <div className="product-section">
                    <div className='top-section'>
                        <label className="section-name">{section.name}</label>
                        <a className="section-link">Ver tudo</a>
                    </div>
                    <div className='list'>
                        {
                            section.products.map((product) =>{
                            return <Product
                                    name    = {product.name}
                                    image   = {product.image}
                                    price   = {product.price}
                                />;
                            })
                        }
                    </div>
                </div>
            })
        }
    </div>
}

export default ProductList;