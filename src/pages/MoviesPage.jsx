import React, { useState,useEffect } from 'react';
import MovieModel from '../model/MovieModel';
import MoviesImgGallery from "../components/MoviesImgGallery";
import {Button,Row,Container,InputGroup} from 'react-bootstrap';
import InputGroupText  from 'react-bootstrap/InputGroup'; 
import UpperBar from "../components/UpperBar";

function MoviesPage() {
 
    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState(
        []
    );
 
    function searchForMovies(e){
        var searchQuery = e.target.value;
        setQuery(searchQuery);
       
        //let moviesCopied = [...movies];
    }

    // movieName, lengthInMins, poster, director, stars
    useEffect(()=>{
        let fetchStr = "https://api.themoviedb.org/3/search/movie?api_key=a3bdb2c9e9aed83db8461d2e25dc2ca0&language=en-US&page=1&include_adult=false&query='"+query+"'";
        let imagePrefix = "https://image.tmdb.org/t/p/w500/"

        console.log("fetchStr:"+fetchStr);
        fetch(fetchStr).then(response => response.json())
        .then(data => {
            console.log("data.results:"+data.results);
            // Results
        const movRes = data.results.map(jsonMovie => {
            return new MovieModel(jsonMovie.title,"lengthInMinutes???",
            imagePrefix+jsonMovie.poster_path,"director?","stars");
        })
        console.log(movRes);
        setMovies(movRes);
 })},[query]);

        const allMovies = movies;


    return (
        <div >
            <h2>Movies Page</h2>
            <Container>
<UpperBar />
            <InputGroupText>
                <input value={query} onChange={(e)=>searchForMovies(e)}   placeholder="find movies!"></input>

            </InputGroupText> 

   
            <Row> <MoviesImgGallery movies={movies}/> </Row> 
            </Container>
 
        </div>
    );
}
export default MoviesPage;