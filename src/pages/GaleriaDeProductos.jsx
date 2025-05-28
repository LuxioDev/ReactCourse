import React from "react";
import Header from "../componentes/estaticos/Header";
import Footer from "../componentes/estaticos/Footer";
import ProductList from "../componentes/ProductList";
import loading from '../assets/loading.gif';

const GaleriaDeProductos = ({ cart, productos, cargando, agregarCarrito, eliminarDelCarrito}) => {
    return (
        <>
            <Header cartItems={cart} eliminarDelCarrito={eliminarDelCarrito}/>
            <h1>Galeria de productos</h1>
            {
                cargando ? <img src={loading} alt='loading' /> :
                <ProductList agregarCarrito={agregarCarrito} eliminarDelCarrito={eliminarDelCarrito} productos={productos} />
            }
            <Footer />
        </>
    );
};

export default GaleriaDeProductos;
