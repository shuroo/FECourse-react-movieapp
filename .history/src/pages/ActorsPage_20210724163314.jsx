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

    const [filterText, setFilterText] = useState("")
    const [sortCriteria, setSortCriteria] = useState("")

    function filterByFirstName(e){
        const criteria = e.target.value;
        setFilterText(criteria);
        setActors(actors.filter(a=>a.firstName.startsWith(criteria)))
    }

    function filterByLastName(e){
        const criteria = e.target.value;
        setFilterText(criteria);
        setActors(actors.filter(a=>a.lastName.startsWith(criteria)))
    }

    function sortBy(e){
        const criteria = e.target.value;
    }
    let actorsHtml = actors.map(act=> <CardComponent actor={act}/>)
 
    return (
        <div>
            <h2>Actors Page</h2>
            <div><label>filter by first and last name</label>
            <input type="text"  placeholder="Filter Actors!"></input>
            <button onClick={(e)=>filterByFirstName(e)}>Filter By First Name</button>
            <button onClick={(e)=>filterByLastName(e)}>Filter By Last Name</button>
            <div className="gallery">{actorsHtml}</div>
            </div>

        </div>
    );
}

export default ActorsPage;