import React, {useState,useEffect} from "react";
import {products} from './ItemListContainer/ItemListContainer'
import './ItemList.css'



const ItemList = () => {
    return(
        <>
        <h2> Nuestros vehículos</h2>
        <div class="productos">
        {products.map((products)=> <div class="cuadros" key={products.id}>
        <p> {products.name} </p> 
        <img class="autos" src={products.img}/> 
        <p> {products.color} </p> 
        <p> {products.price} </p> 
        <button>Agregar</button>
        </div> )}
        </div>
        </>
    )
}



export default ItemList;