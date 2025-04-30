import { createContext, useContext, useState, useEffect } from "react";
const CartContext = createContext([])

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) =>{
    

    const [cart,setCart] = useState([]);
    useEffect(() => {
        console.log("Cart updated:", cart);
    }, [cart]);
    const addToCart = (items) => {
        setCart((prev) => [...prev, items]);
        console.log(cart)
    }
    return(
        <CartContext.Provider value={{cart,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}