import React from "react";
import './CardComponent.css';
import angie from './angeline.jpg'

function CardComponent({actor}) {
	
	return (
 
<div className=" card col col-md-4 col-lg-4 col-sm-4" onClick={()=>(alert())}>
 {actor.image}
  <img className="actorImg card-img-top" src={actor.image} alt={actor.firstName+" "+actor.lastName}/>
  <div className="card-body">
    <h5 className="card-title">{actor.firstName} {actor.lastName}</h5>
    <p className="card-text">{actor.age}
  </p></div>
  </div>
	)
}

export default CardComponent;
