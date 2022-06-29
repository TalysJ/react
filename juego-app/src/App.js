import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import {  BrowserRouter, Route, Routes  } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import CartContextProvider from './components/CartContext';
import Cart from './components/Cart';

function App() {

  return (
    <>
    <div className="container">
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
          <Route path='/' element={<ItemListContainer/> } ></Route>
          <Route path='/category/:id' element={<ItemListContainer/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </div>
    </>
  );
    
}

export default App;