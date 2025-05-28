import React from 'react';
import './styleCart.css';

const Cart = ({cartItems, isOpen, onClose, eliminarDelCarrito}) => {
    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2>Carrito de compras</h2>
                <button onClick={onClose} className='close-button'>X</button>
            </div>
            <div className='cart-content'>
                {cartItems.length === 0 ? 
                <p style={{color: 'red'}}>No hay productos en el carrito</p> : 
                <>
                <p>Productos en el carrito: {cartItems.length}</p> 
                <ul className='cart-item-list'>
                    {cartItems.map((item) => (
                        <li key={item.id} className='cart-item'>
                            {item.quantity} x {item.nombre} - ${item.precio}
                            <button onClick={() => eliminarDelCarrito(item)} style={{marginLeft: '20px'}}><i className='fa-solid fa-trash'></i></button>
                        </li>
                    ))}    
                </ul>
                </>}
            </div>

        </div>
    );
}

export default Cart;
