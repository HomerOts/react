import React, {useState,useEffect} from "react";
import './ItemListContainer.css';
import ItemList from "../ItemList";
import {products} from '../Item';





const promesa = new Promise ((result,reject) =>{
    setInterval(()=>{
        result(products)
    }, 2000);

})

const ItemListContainer = ()=> {
   
    const [productos,setProductos] = useState([])

useEffect(()=>{
    promesa.then((data)=>{
        setProductos(data)
    })
    .catch(() =>{
        console.log ('No hay veh{iculos disponibles')
    }
    )
}, []);


return(
    <>
    <ItemList/>
    </>
)
}


export default ItemListContainer;