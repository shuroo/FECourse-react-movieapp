import React from "react";
import './ImgComponent.css';
//import myImg from './image.png'

function CardComponent({actor}) {
	
	return (
 

 
<div className=" card col col-md-4 col-lg-4 col-sm-4" style={styleProp} onClick={()=>(alert())}>
 
  <img className="actorImg card-img-top" src={actor.myImg}/>
  <div className="card-body">
    <h5 className="card-title">	<h4>{actor.firstName} {actor.lastName}</h4></h5>
    <p className="card-text">{actor.age} <p/>
  </p></div>
  </div>
	)
}

export default CardComponent;
