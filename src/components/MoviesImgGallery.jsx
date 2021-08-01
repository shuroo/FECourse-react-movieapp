import React from "react";
import './CardComponent.css'; 
import MovieCardComponent from "./MovieCardComponent";

function MoviesImgGallery({movies}){


    let moviesHtml = movies.map(movie=><MovieCardComponent key={movie.key+"1"} movie={movie}/>)


return(
<div className="gallery">{moviesHtml}</div>

)

}

export default MoviesImgGallery;