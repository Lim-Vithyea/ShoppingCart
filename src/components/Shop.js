
import React from 'react'
import { useCart } from './CartContext';


const Shop = () => {
    const { addToCart } = useCart();
    const items = [
        {id:1,image: "https://i.pinimg.com/736x/d6/19/85/d61985c4d31ef6aa76655f17a047f245.jpg", name: "laptop", price: 200},
        {id:2,image: "https://i.pinimg.com/736x/2f/ce/ea/2fceeab54b351dff012dfc8ea1dab1bd.jpg", name: "Phone", price: 100},
        {id:3,image: "https://i.pinimg.com/736x/65/78/ed/6578ede4cffa779a7bda0635a61d89fc.jpg", name: "Tablet", price: 150}
    ]
    
    return (
        <div >
            <h1 className='text-center p-10'>Shopping section</h1>
            <div className='flex justify-center flex-wrap'>
            {items.map((item) => (
                <div className='w-[400px] h-[500px] rounded-md bg-gray-200 m-1'>
                <div key={item.id} className='p-1'>
                    <div className='flex justify-center pt-5'>
                        <img src={item.image} className='w-[350px] h-[350px] rounded-md'/>
                    </div>
                    <h1 className='pl-5 text-xl font-bold'>{item.name}</h1>
                    <p className='pl-5 text-xl text-green-500'>${item.price}</p>
                    <div className='flex justify-center'>
                    <button onClick={() => addToCart(item)} className='w-[350px] h-10 m-3 rounded-lg bg-blue-500'><span className='text-white font-bold'>Add to cart</span></button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Shop