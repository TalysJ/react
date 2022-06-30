import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [productos, setproductos] = useState([]);

    const AddToCart = (producto, cantidad) =>{
      if (IsInCart(producto.id)){
        const index = productos.map(e => e.id).indexOf(producto.id);
        productos[index].cantidad+=cantidad
        setproductos(productos)
        alert("El producto ya esta en el carrito");
      }else{
        setproductos([...productos, {...producto, cantidad}]);
        alert("se agrego el producto");
      }
    }
    console.log(productos);

    const IsInCart = (id) => {
      console.log(id)
      return productos.some((producto) => producto.id === id);
    };
    const clearItems = () => {
      setproductos([]);
      alert("Se vacio tu carrito");
    };

  return (
    <CartContext.Provider value = {{AddToCart, clearItems, productos}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider