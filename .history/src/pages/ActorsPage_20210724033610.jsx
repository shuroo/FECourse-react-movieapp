import React, { useState } from 'react';
import ActorModel from '../../model/ActorModel';

function ActorsPage() {

    const [actors, setActors] = useState([
        new ActorModel("Angelina", "Jolie", new Date("04/06/1975"), "../public/images/angeline", "https://www.imdb.com/name/nm0001401/"),
        new ActorModel("Brad", "Pitt", new Date("04/06/1975"), "../public/images/brad_pitt", "https://www.imdb.com/name/nm0000093/"),
        new ActorModel("Angelina", "Jolie", new Date("04/06/1975"), "../public/images/angeline", "https://www.imdb.com/name/nm0001401/"),
        new ActorModel("Brad", "Pitt", new Date("04/06/1975"), "../public/images/brad_pitt", "https://www.imdb.com/name/nm0000093/"),
        
    ])

    const [filterText, setfilterText] = useState("")
    const [sortBy, setSortBy] = useState("")

    function filterBy(e){
        const criteria = e.target.value;
    }

    function sortBy(e){
        const criteria = e.target.value;
    }
    return (
        <div>
            <h2>Actors Page</h2>
            <div><label>filter by first and last name</label>
            <input type="text" onClick={filterBy} placeholder="Filter Actors!"></input>
            </div>
        </div>
    );
}

export default ActorsPage;