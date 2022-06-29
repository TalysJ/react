import { React, useState, useEffect, useContext } from 'react'
import { Button, Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { NavLink } from "react-router-dom";
import { CartContext } from './CartContext';

function ItemDetail ({producto}) {
  const {image, title, description, price}= producto;
  const [add, setAdd] = useState(false);
  const {AddToCart} = useContext(CartContext);
  
  const onAdd = (cantidad) =>{
    setAdd(true)
    AddToCart(producto, cantidad)
  }
  

  return (
    <>
      <Card className="Card">
        <Card.Img className="cardImg" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text className="text">$ {price}</Card.Text>
          <div className="button">
              <Button className="btn btn-dark" variant="primary">
                ver detalles
              </Button>
          </div>
          <div className='extra-content'>
            {
              add ?
              <NavLink to={`/cart`}>
              <Button className="btn btn-dark" variant="primary">
                Finalizar compra
              </Button>
            </NavLink>
              :
              <ItemCount stock={10} initial={1} onAdd={onAdd} />
            }
          </div>
          <br/>

        </Card.Body>
      </Card>
    </>
  );
};

export default ItemDetail;