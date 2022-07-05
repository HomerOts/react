import React, { useState } from "react";
import './ItemCount.css';

export const MiCarrito = () => {

    const [contador, setContador] = useState(0);

    const sumarProducto = () => {
        setContador(contador + 1);
    }

    const restarProducto = () => {
        setContador(contador - 1);
    }


    const resetProductos = () => {
        setContador(0);
    }


    return (
        <section class="carrito">
            <h3> Mi Carrito </h3>
            <div class="botones">
            <div> <button onClick={restarProducto}> - </button> </div>
               
                <p>
                    {contador}
                </p>
                <div> <button onClick={sumarProducto}> + </button></div>

            </div>
            <div>  <button onClick={resetProductos}> Agregar productos </button></div>

        </section>
    )

}



