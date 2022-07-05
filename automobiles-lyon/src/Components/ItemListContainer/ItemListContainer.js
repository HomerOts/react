import React, {useState,useEffect} from "react";
import './ItemListContainer.css';
import '../ItemList';
import '../Item';


const ItemListContainer = ()=> {

const promesa = new Promise ((result,reject) =>{

setTimeout(()=>{
    result(products)
}, 4000);

const [productos,setProductos] = useState ([]);
useEffect(()=>{
    promesa.then((data)=>{
        setProductos(data)
    })
})

})

}




export default ItemListContainer;