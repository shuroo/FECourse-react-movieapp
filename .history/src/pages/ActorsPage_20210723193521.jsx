import React, { useState } from 'react';
import ActorModel from '../../model/ActorModel';

function CarsPage() {
    const [cars, setCars] = useState([
        new CarModel
    ])

    const [actors, setActors] = useState([
        new ActorModel
    ])

    const [filterText, setfilterText] = useState([
    ])
    const [sortBy, setSortBy] = useState([
    ])
    

    return (
        <div>
            Actors Page
        </div>
    );
}

export default ActorsPage;