import React from "react";
import logo from '../../imgs/Recurso 1.png'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import './Navbar.css'

const Navbar = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <h1> Automobiles Lyon</h1>
            <nav>
                <a href="">Usados</a>
                <a href="">Convencionales</a>
                <a href="">Plan de Ahorro</a>
        
            </nav>
            <div class="phone" >
            <ContactPhoneIcon fontSize="large" />
            </div>
        </header>
    );
}

export default Navbar; 