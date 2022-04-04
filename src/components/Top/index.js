import React from 'react';
import "./top.css";



function Top(){
    return(
        <div className="ac-topo">
            <div className="container-principal ">
                <div>
                    <input type="search" className="busca" name="busca" placeholder='O que deseja encontrar?'/>
                </div>

                <button class="login">Login</button>
            </div>
        </div>
    )
}

export default Top;