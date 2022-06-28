import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import ItemList from './Components/ItemListContainer/ItemListContainer';
import { MiCarrito } from './Components/ItemCount';

const App = () => {
  return (
    <div>
    <Navbar />
    <ItemList/>
    <MiCarrito/>
    </div>
  );
}

export default App;
