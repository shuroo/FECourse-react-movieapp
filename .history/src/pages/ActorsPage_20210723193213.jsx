import React, { useState } from 'react';
import ActorModel from '../../model/ActorModel';

function CarsPage() {
    const [cars, setCars] = useState([
        new CarModel
    ])

    const [actors, setActors] = useState([
        new ActorModel
    ])

    return (
        <div>
            Actors Page
        </div>
    );
}

export default ActorsPage;