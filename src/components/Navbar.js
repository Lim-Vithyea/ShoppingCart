import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; // Optional: For cart count

const Navbar = () => {
    const { cart } = useCart(); // Optional: Show item count
    
    return (
        <nav className='text-center font-bold text-2xl text-blue-500'>
            <Link to="/home">Shop | </Link>
            <Link to="/cart"> Cart ({cart.length})</Link>
        </nav>
    );
};

export default Navbar;