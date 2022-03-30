import React from 'react';
import ReactDOM from "react-dom";

import Top from '../../components/Top'
import ProductList from '../../components/ProductList';
import Product from '../../components/Product';

function Home(){

    return <React.Fragment>
        <Top />
        <div className="slider">
        </div>
        <div className="container-principal container-produtos">
            <ProductList />
        </div>

    </React.Fragment>;
}

export default Home;