import {useContext} from 'react'
import { CartContext } from './CartContext'
import CartItem from './CartItem'

const Cart = () => {

    const {productos} = useContext (CartContext)
    console.log(productos)

  return (
    <div>
        {productos.length<1?(<p>Carrito Vacio</p>) : (
        productos.map((i) => <CartItem key= {i.producto.id} producto={i.producto}/> )
    )}
    </div>
  );
};

export default Cart