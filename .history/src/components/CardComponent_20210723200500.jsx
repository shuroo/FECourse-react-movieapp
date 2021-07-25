import React from "react";
import './ImgComponent.css';
//import myImg from './image.png'

function CardComponent({actor}) {
	
	return (
		<div>
			<img src={actor.myImg}/>
			<h4>{actor.firstName} {actor.lastName}</h4>
</div>
	)
}

export default CardComponent;
