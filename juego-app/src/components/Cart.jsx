import {useContext} from 'react'
import { CartContext } from './CartContext'
import { Button, Card } from 'react-bootstrap';
import CartItem from './CartItem'


const Cart = () => {

    const {productos} = useContext (CartContext)
    console.log(productos)
    const {clearItems} = useContext(CartContext);

  return (
    <div>
                <Button className="btn btn-red"variant="primary" 
          onClick={() => clearItems()}>Vaciar Carrito
          </Button>
    </div>
  );
};

export default Cart