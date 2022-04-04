import React from 'react';
import "./footer.css";

function Footer(){
    return <div className="footer">
        <div className="container-principal content">
            <div>
                <img src="http://localhost:3000/logo.png" />
            </div> 
            
            <div className="navigation">
                <nav>Quem somos nós</nav>
                <nav>Política de privacidade</nav>
                <nav>Programa fidelidade</nav>
                <nav>Nossas lojas</nav>
                <nav>Quero ser franqueado</nav>
                <nav>Anuncie aqui</nav>
            </div>
            <div class="contact-us">
                <form>
                    <div>
                        <label>Fale conosco</label>
                    </div>
                    <div>
                        <input type="text" name="name"/>
                    </div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Enviar mensagem"/>
                    </div>

                </form>
            </div>
        </div>
        <div className='developed-by'>
            Desenvolvido por Gilberto Junior
            <div>2022</div>
        </div>
    </div>
}

export default Footer;
