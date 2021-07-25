import React, { useState } from 'react';
import ActorModel from '../../model/ActorModel';

function CarsPage() {

    const [actors, setActors] = useState([
        new ActorModel
    ])

    const [filterText, setfilterText] = useState("")
    const [sortBy, setSortBy] = useState("")
    

    return (
        <div>
            <h2>Actors Page</h2>
        </div>
    );
}

export default ActorsPage;