import React, { useState } from 'react';
import ActorModel from '../model/ActorModel';
//import angelinaImg from "pages/angeline.jpg";
import CardComponent from "../components/CardComponent";

import ImgGallery from "../components/ImgGallery";

function ActorsPage() {

    const [actors, setActors] = useState([ new ActorModel("Angelina", "Jolie", new Date("04/06/1975"), "./angeline.jpg", "https://www.imdb.com/name/nm0001401/"),
     new ActorModel("Brad", "Pitt", new Date("04/06/1975"), "./brad_pitt.jpg", "https://www.imdb.com/name/nm0000093/"),
     new ActorModel("Mattew", "Mecconohew", new Date("04/06/1975"), "./mattehew_mecc.jpeg","https://www.imdb.com/name/nm0000190/")//,
     //new ActorModel("Brad", "Pitt", new Date("04/06/1975"), "./brad_pitt.jpg", "https://www.imdb.com/name/nm0000093/"),
     ])

     let actorsHtml = actors.map(act=> <CardComponent key={act.firstName+"1"} actor={act}/>)
 
    // firstName, lastName, birthday, image, imdbLink

    const [filterText, setFilterText] = useState("")
    const [sortCriteria, setSortCriteria] = useState("")

    function filterByFirstName(){
        const actorsFiltered = [...actors].filter(a=>a.firstName.startsWith(filterText));
        setActors(actorsFiltered);
    }

    function filterByLastName(){
         setActors(actors.filter(a=>a.lastName.startsWith(filterText)));
    }

    function sortBy(e){
        const criteria = e.target.value;
    }

    return (
        <div>
            <h2>Actors Page</h2>
            <div><label>filter by first and last name</label>
            <input type="text" value={filterText} onChange={(e)=>setFilterText(e)}   placeholder="Filter Actors!"></input>
            <button onClick={filterByFirstName()}>Filter By First Name</button>
            <button onClick={filterByLastName()}>Filter By Last Name</button>
            <ImgGallery actorsHtml={actorsHtml}/>
            </div>

        </div>
    );
}

export default ActorsPage;