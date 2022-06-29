import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [producto, setproducto] = useState([]);

    const AddToCart = (producto, cantidad) =>{
      if (IsInCart(producto.id)){
        alert("El producto ya esta en el carrito");
      }else{
        setproducto([...setproducto, {producto, cantidad}]);
        alert("se agrego el producto");
      }
    }

    const IsInCart = (id) => {
      return producto && producto.some((i) => i.producto.id === id);
    };

  return (
    <CartContext.Provider value = {{AddToCart, producto}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider