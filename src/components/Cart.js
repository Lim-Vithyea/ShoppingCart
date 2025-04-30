

import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom'; 

const Cart = () => {
    const { cart } = useCart();

    return (
        <div>
            <h1 className='text-center font-bold text-2xl p-5'>Your Cart</h1>
            <div className='text-center'>
            <Link to="/home" className='text-green-500 font-semibold'>Continue Shopping???</Link>
            </div>
            <div className='flex justify-center flex-wrap'>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((item, index) => (
                    <div className='w-[400px] h-[500px] rounded-md bg-gray-200 m-1' key={index}>
                     <div key={item.id} className='p-1'>
                    <div className='flex justify-center pt-5'>
                        <img src={item.image} className='w-[350px] h-[350px] rounded-md'/>
                    </div>
                    <h1 className='pl-5 text-xl font-bold pt-5'>{item.name}</h1>
                    <p className='pl-5 text-xl text-green-500'>${item.price}</p>
                </div>
                </div>
                ))
            )}
            </div>
        </div>
    );
};

export default Cart;