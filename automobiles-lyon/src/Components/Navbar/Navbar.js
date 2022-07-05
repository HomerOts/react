import React from "react";
import logo from '../imgs/Recurso 1.png';
import './Navbar.css';
import './CartWidget';
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <header>
            <a href="index.html"> <img src={logo} alt="logo" /></a>
            <h1> Automobiles Lyon</h1>
            <nav>
                <a href="">Usados</a>
                <a href="">Convencionales</a>
                <a href="">Plan de Ahorro</a>
            </nav>
          <a href="#!"> <CartWidget/>
          </a>
        </header>
    );
}

export default Navbar; 