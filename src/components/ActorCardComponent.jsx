import React from "react";
import './CardComponent.css'; 
import Card from 'react-bootstrap/Card'

function ActorCardComponent({actor}) {
	
	return (
 
<Card>
<Card.Img variant="top actorImg" src={actor.image} alt={actor.firstName+" "+actor.lastName} />
<Card.Body>
  <Card.Title>{actor.firstName} {actor.lastName}</Card.Title>
  <Card.Text>
  {actor.age()}
    </Card.Text>
  
</Card.Body>
</Card>
	)
}

export default ActorCardComponent;
