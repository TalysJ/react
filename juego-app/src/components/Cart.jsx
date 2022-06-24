import {useContext} from 'react'
import { CartContext } from './CartContext'
import CartItem from './CartItem'

const Cart = () => {

    const {producto} = useContext {CartContext};

  return (
    <div>
        {producto.length<1?(<p>Carrito Vacio</p>) : (
        producto.map((i) => <CartItem key= {i.producto.id} producto={i.producto}/> )
    )}
    </div>
  );
};

export default Cart