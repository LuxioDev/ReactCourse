import React from 'react'
import Header from '../componentes/estaticos/Header'
import Footer from '../componentes/estaticos/Footer'

const Contacto = ({ cart, eliminarDelCarrito }) => {
    return (
        <>
        <Header eliminarDelCarrito={eliminarDelCarrito} cartItems={cart}/>
            <h1>Contactos</h1>
        <Footer/>
        </>
        )
}

export default Contacto