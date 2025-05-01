import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const items = [
        {id:1,image: "https://i.pinimg.com/736x/d6/19/85/d61985c4d31ef6aa76655f17a047f245.jpg", name: "Laptop", price: 200},
        {id:2,image: "https://i.pinimg.com/736x/2f/ce/ea/2fceeab54b351dff012dfc8ea1dab1bd.jpg", name: "Phone", price: 100},
        {id:3,image: "https://i.pinimg.com/736x/65/78/ed/6578ede4cffa779a7bda0635a61d89fc.jpg", name: "Tablet", price: 150}
    ];

    return (
        <div>
            <h1 className='text-center p-10 text-3xl font-semibold'>Shopping Section</h1>
            <div className='flex justify-center flex-wrap'>
                {items.map((item) => (
                    <div key={item.id} className='w-[400px] h-[550px] rounded-md bg-gray-200 m-2 p-3'>
                        <div className='flex justify-center pt-3'>
                            <img src={item.image} alt={item.name} className='w-[350px] h-[350px] rounded-md object-cover'/>
                        </div>
                        <h1 className='pl-5 text-xl font-bold pt-3'>{item.name}</h1>
                        <p className='pl-5 text-xl text-green-500'>${item.price}</p>
                        <div className='flex justify-center'>
                            <Link
                                to={`/items/${item.id}`}
                                className='w-[350px] h-10 m-3 rounded-lg bg-blue-500 text-white font-bold flex items-center justify-center'
                            >
                                See Detail
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
