import React from "react";
import './CardComponent.css'; 
import Card from 'react-bootstrap/Card'

function CardComponent({actor}) {
	
	return (
 
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={actor.image} alt={actor.firstName+" "+actor.lastName} />
<Card.Body>
  <Card.Title>{actor.firstName} {actor.lastName}</Card.Title>
  <Card.Text>
  {actor.age()}
    </Card.Text>
  
</Card.Body>
</Card>
	)
}

export default CardComponent;
