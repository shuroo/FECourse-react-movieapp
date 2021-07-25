import React from "react";
import './ImgComponent.css';
//import myImg from './image.png'

function CardComponent({actor}) {
	
	return (
		<div className="col">
			<img className="actorImg" src={actor.myImg}/>
			<h4>{actor.firstName} {actor.lastName}</h4>
			<div>{actor.age}</div>
</div>
	)
}

export default CardComponent;
