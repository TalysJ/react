import React from "react";
import { Button, Card } from "react-bootstrap";

const Item = ({personaje}) => {

    const {name, image, species, status} = personaje

    return  (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
        Especie: {species}
        Estado {status}
    </Card.Text>
    <Button variant="primary">Ver mas</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Item