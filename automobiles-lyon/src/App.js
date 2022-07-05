import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { MiCarrito } from './Components/ItemCount';

const App = () => {
  return (
    <div>
    <Navbar />
    <MiCarrito/>
    <ItemListContainer/>

    </div>
  );
}

export default App;
