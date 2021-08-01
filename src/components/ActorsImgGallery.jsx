import React from "react";
import './CardComponent.css'; 
import ActorCardComponent from "./ActorCardComponent";

function ActorsImgGallery({actors}){


    let actorsHtml = actors.map(actor=><ActorCardComponent key={actor.key+"1"} actor={actor}/>)


return(
<div className="gallery">{actorsHtml}</div>

)

}

export default ActorsImgGallery;