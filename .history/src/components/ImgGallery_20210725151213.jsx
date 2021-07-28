import React from "react";
import './CardComponent.css'; 
import CardComponent from "../components/CardComponent";

function ImgGallery({actors}){

    let actorsHtml = actors.map(act=><CardComponent key={act.firstName+"1"} actor={act}/>)
    /** <SortComponent actors={actors} setSortCriteria={setSortCriteria} sortCriteria={sortCriteria} setActors={setActors} />**/
 

return(
<div>{actorsHtml}</div>

)

}

export default ImgGallery;