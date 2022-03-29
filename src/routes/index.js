import React from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home"


export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
        
    )
}
    