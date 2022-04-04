import React from 'react';
import ReactDOM from "react-dom";
import "./home.css";

import Top from '../../components/Top'
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer';

function Home(){

    return <React.Fragment>
        <Top />
        <div className="slider">
            <div className="container-principal container-title"> 
                <h1>Dezembro Promocional</h1>
                <h2>Produtos selecionados com 33% de desconto</h2>
                <button>Ver Consoles</button>
            </div>
        </div>
        <div className="container-principal container-produtos">
            <ProductList />

        </div>
        <Footer />


    </React.Fragment>;
}

export default Home;