import React, {useState,useEffect} from "react";





const ItemList = () => {
    return(
        <>
        <h2> Nuestros vehículos</h2>
        {products.map((product)=> <div key={product.id}> <p> {product.name} </p> 
        <p> {product.img} </p> 
        <p> {product.model} </p> 
        <p> {product.price} </p> 
        </div> )}
        </>
    )
}



export default ItemList;