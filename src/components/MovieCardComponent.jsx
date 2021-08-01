import React from "react";
import './CardComponent.css'; 
import Card from 'react-bootstrap/Card'

function MovieCardComponent({movie}) {
	
	return (
 
<Card>
<Card.Img variant="top actorImg" src={movie.poster} alt={movie.key} />
<Card.Body>
  <Card.Title>{movie.movieName} </Card.Title>
  <Card.Text>
  {movie.director}   {movie.stars}
    </Card.Text>
  
</Card.Body>
</Card>
	)
}

export default MovieCardComponent;
