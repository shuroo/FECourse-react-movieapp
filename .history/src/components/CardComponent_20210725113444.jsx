import React from "react";
import './CardComponent.css'; 

function CardComponent({actor}) {
	
	return (
 

<div class="card">
<div class="card-body">
<div onClick={(e)=>(window.open(actor.imdbLink, '_blank'))}>
  <img className="actorImg" src={actor.image} alt={actor.firstName+" "+actor.lastName}/>
  <div className="card-body">
    <h5 className="card-title">{actor.firstName} {actor.lastName}</h5>
    <p className="card-text">{actor.age()}
  </p></div>
  </div>

</div>
</div>
	)
}

export default CardComponent;
