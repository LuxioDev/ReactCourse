import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styleEstatico.css'
import Cart from '../Cart'


const Header = ({cartItems, eliminarDelCarrito}) => {
    
const [isCartOpen, setCartOpen] = useState(false);
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/Home' className='link'>Inicio</Link></li>
                    <li><Link to='/AcercaDe' className='link'>Sobre nosotros</Link></li>
                    <li><Link to='/GaleriaDeProductos' className='link'>Productos</Link></li>
                    <li><Link to='/Contacto' className='link'>Contacto</Link></li>
                    <li className='cartnav'>
                        <button className='btnCart' onClick={() => setCartOpen(true)}>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <Cart cartItems = {cartItems} isOpen={isCartOpen} onClose={() =>
                        setCartOpen(false)} eliminarDelCarrito={eliminarDelCarrito} />
                    </li>
                </ul>
            </nav>
        </header>
        )
}

export default Header