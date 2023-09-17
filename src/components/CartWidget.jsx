import { useContext } from 'react';
import { Link } from "react-router-dom"

import carrito from '../imagenes/carrito.jpg'
import { CartContext } from '../contexts/CartContext';

export const CartWidget = () => {
    const { totalWidget } = useContext(CartContext)

    return (
        <Link to="/cart">
            <img src={carrito} alt="carrito de supermecado con fuego" />
            <span> {totalWidget} </span> 
        </Link>
    )

}
