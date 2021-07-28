import React from "react";
import './CardComponent.css'; 
import CardComponent from "../components/CardComponent";

function ImgGallery({actors}){

    let actorsHtml = actors.map(act=><CardComponent key={act.firstName+"1"} actor={act}/>)


return(
<div className="gallery">{actorsHtml}</div>

)

}

export default ImgGallery;