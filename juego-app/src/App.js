import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import {  BrowserRouter, Route, Routes  } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
    <div className="container">
    <BrowserRouter>
    <NavBar/>
    <Routes>
          <Route path='/' element={<ItemListContainer/>} ></Route>
          <Route path='/category/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
    
}

export default App;