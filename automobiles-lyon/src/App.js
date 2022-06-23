import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import ItemList from './Components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div>
    <Navbar />
    <ItemList/>
    </div>
  );
}

export default App;
