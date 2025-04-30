
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/home' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
