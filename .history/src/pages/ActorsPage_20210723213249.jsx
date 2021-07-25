import React, { useState } from 'react';
import ActorModel from '../../model/ActorModel';

function ActorsPage() {

    const [actors, setActors] = useState([
        new ActorModel
    ])

    const [filterText, setfilterText] = useState("")
    const [sortBy, setSortBy] = useState("")

    function filterBy(){

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