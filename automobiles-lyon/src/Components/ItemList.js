import React, {useState,useEffect} from "react";
import {products}  from './Item';




const ItemList = () => {
    return(
        <>
        <h2> Nuestros vehículos</h2>
        {products.map((products)=> <div key={products.id}>
        <p> {products.name} </p> 
        <p> {products.img} </p> 
        <p> {products.color} </p> 
        <p> {products.price} </p> 
        </div> )}
        </>
    )
}



export default ItemList;