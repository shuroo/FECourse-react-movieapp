import React from "react";
import './CardComponent.css';

function CardComponent({actor}) {

  import myImg from actor.image

	return (
 

 
<div className=" card col col-md-4 col-lg-4 col-sm-4" onClick={()=>(alert())}>
{actor.image}
  <img className="actorImg card-img-top" src={myImg} alt={actor.firstName+" "+actor.lastName}/>
  <div className="card-body">
    <h5 className="card-title">{actor.firstName} {actor.lastName}</h5>
    <p className="card-text">{actor.age}
  </p></div>
  </div>
	)
}

export default CardComponent;
