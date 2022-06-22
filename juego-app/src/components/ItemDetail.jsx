import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";

function ItemDetail ({producto}) {
  const {image, title, description, price}= producto
  const [add, setAdd] = useState(false)
  const onAdd = () =>{
    setAdd(!add)
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
              <div className='meta'>Se agrego tu articulo!</div>
              :
              <ItemCount producto={producto} stock={10} initial={1} onAdd={onAdd} />
            }
          </div>
          <br/>
          <Button className='ui bottom button green'>
            Finalizar compra
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemDetail;