import React from "react";
import Footer from "../componentes/estaticos/Footer";
import Header from "../componentes/estaticos/Header";
import ProductList from "../componentes/ProductList";
import loading from '../assets/loading.gif';

const Home = ({ cart, productos, cargando, agregarCarrito, eliminarDelCarrito }) => {
    return (
        <>
            <Header cartItems={cart}/>
            <main>
                <h1>Bienvenidos a mi tienda</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nisi repellat cumque nam ipsum.
                Eum temporibus dolores molestiae labore iure. Corporis nulla nemo enim. 
                Suscipit veniam molestias incidunt cum doloremque?</p>
                
                {
                    cargando ? <img src={loading} alt='loading'/> : 
                    <ProductList agregarCarrito={agregarCarrito} eliminarDelCarrito={eliminarDelCarrito} productos={productos}/>
                }

            </main>
            <Footer/>
        </>
    )
}

export default Home