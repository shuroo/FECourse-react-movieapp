import React from "react";
import './CardComponent.css'; 

function CardComponent({actor}) {
	
	return (
 
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={actor.image} alt={actor.firstName+" "+actor.lastName} />
<Card.Body>
  <Card.Title>{actor.firstName} {actor.lastName}</Card.Title>
  <Card.Text>
  {actor.age()}
    </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
	)
}

export default CardComponent;
