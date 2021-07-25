import React, { useState } from 'react';
import ActorModel from '../model/ActorModel';
//import angelinaImg from "pages/angeline.jpg";
import CardComponent from "../components/CardComponent";

function ActorsPage() {

    // var arr = [ new ActorModel("Angelina", "Jolie", new Date("04/06/1975"), "../public/images/angeline", "https://www.imdb.com/name/nm0001401/"),
    // new ActorModel("Brad", "Pitt", new Date("04/06/1975"), "../public/images/brad_pitt", "https://www.imdb.com/name/nm0000093/"),
    // new ActorModel("Angelina", "Jolie", new Date("04/06/1975"), "../public/images/angeline", "https://www.imdb.com/name/nm0001401/"),
    // new ActorModel("Brad", "Pitt", new Date("04/06/1975"), "../public/images/brad_pitt", "https://www.imdb.com/name/nm0000093/"),
    // ]

    const [actors, setActors] = useState([ new ActorModel("Angelina", "Jolie", new Date("04/06/1975"), "./angeline.jpg", "https://www.imdb.com/name/nm0001401/"),
     new ActorModel("Brad", "Pitt", new Date("04/06/1975"), "./brad_pitt.jpg", "https://www.imdb.com/name/nm0000093/"),
     new ActorModel("Mattew", "Mecconohew", new Date("04/06/1975"), "./mattehew_mecc.jpeg","https://www.imdb.com/name/nm0000190/"),
     new ActorModel("Brad", "Pitt", new Date("04/06/1975"), "./brad_pitt.jpg", "https://www.imdb.com/name/nm0000093/"),
     ])

    // firstName, lastName, birthday, image, imdbLink

    const [filterText, setfilterText] = useState("")
    const [sortCriteria, setSortCriteria] = useState("")

    function filterBy(e){
        const criteria = e.target.value;
    }

    function sortBy(e){
        const criteria = e.target.value;
    }
    let actorsHtml = actors.map(act=> <CardComponent actor={act}/>)
 
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