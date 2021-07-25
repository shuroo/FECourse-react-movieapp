import React, { useState } from 'react';
import ActorModel from '../model/ActorModel';
import angelinaImg from "angeline.jpg";
import CardComponent from "../components/CardComponent";

function ActorsPage() {

    // var arr = [ new ActorModel("Angelina", "Jolie", new Date("04/06/1975"), "../public/images/angeline", "https://www.imdb.com/name/nm0001401/"),
    // new ActorModel("Brad", "Pitt", new Date("04/06/1975"), "../public/images/brad_pitt", "https://www.imdb.com/name/nm0000093/"),
    // new ActorModel("Angelina", "Jolie", new Date("04/06/1975"), "../public/images/angeline", "https://www.imdb.com/name/nm0001401/"),
    // new ActorModel("Brad", "Pitt", new Date("04/06/1975"), "../public/images/brad_pitt", "https://www.imdb.com/name/nm0000093/"),
    // ]

    const [actors, setActors] = useState([])

    // firstName, lastName, birthday, image, imdbLink

    let angelina = new ActorModel("Angelina", "Jolie", new Date("04/06/1975"), angelinaImg, "https://www.imdb.com/name/nm0001401/");
   //  let brad =  new ActorModel("Brad", "Pitt", new Date("04/06/1975"), "../public/images/brad_pitt", "https://www.imdb.com/name/nm0000093/");
  
    setActors(actors.concat([angelina,angelina]));

    const [filterText, setfilterText] = useState("")
    const [sortCriteria, setSortCriteria] = useState("")

    function filterBy(e){
        const criteria = e.target.value;
    }

    function sortBy(e){
        const criteria = e.target.value;
    }
    let actorsHtml = null;
    for(var actor of actors){
        actorsHtml+=<CardComponent actor={actor}/>
    }
    return (
        <div>
            <h2>Actors Page</h2>
            <div><label>filter by first and last name</label>
            <input type="text" onClick={filterBy} placeholder="Filter Actors!"></input>
            <div className="gallery">{actorsHtml}</div>
            </div>

        </div>
    );
}

export default ActorsPage;