import React, {useState,useEffect} from "react";
import './ItemListContainer.css';
import ItemList from "../ItemList";
import xseries from '../imgs/XSERIES.png';
import aircross from '../imgs/c5.png';
import berlingo from '../imgs/berlingo multispace.png';
import jumper from '../imgs/JUMPER.png';


export const products = [
    {name:'C4 Cactus', id:0, color:'grey and golden', price: 3200000, "img": xseries},
    {name:'C5 Aircross', id:1, color:'grey', price: 3500000, "img":aircross},
    {name:'Berlingo' , id:2, color:'white', price: 3450000, "img": berlingo},
    {name:'Jumper', id:3, color:'red', price: 3800000, "img": jumper},
]




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
        console.log ('No hay vehículos disponibles')
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