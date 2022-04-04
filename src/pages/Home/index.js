import React from 'react';
import ReactDOM from "react-dom";

import Top from '../../components/Top'
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer';

function Home(){

    return <React.Fragment>
        <Top />
        <div className="slider">
        </div>
        <div className="container-principal container-produtos">
            <ProductList />

        </div>
        <Footer />


    </React.Fragment>;
}

export default Home;