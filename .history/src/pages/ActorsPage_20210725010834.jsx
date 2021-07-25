import React, { useState } from 'react';
import ActorModel from '../model/ActorModel';
import CardComponent from "../components/CardComponent";
import SortComponent from "../components/SortComponent";
import ImgGallery from "../components/ImgGallery";

function ActorsPage() {

    const allActors = [ new ActorModel("Angelina", "Jolie", new Date("04/06/1975"), "./angeline.jpg", "https://www.imdb.com/name/nm0001401/"),
    new ActorModel("Brad", "Pitt", new Date("04/06/1975"), "./brad_pitt.jpg", "https://www.imdb.com/name/nm0000093/"),
    new ActorModel("Mattew", "Mecconohew", new Date("04/06/1975"), "./mattehew_mecc.jpeg","https://www.imdb.com/name/nm0000190/")];

    const [actors, setActors] = useState(
        allActors
        //new ActorModel("Brad", "Pitt", new Date("04/06/1975"), "./brad_pitt.jpg", "https://www.imdb.com/name/nm0000093/"),
     )

     let actorsHtml = actors.map(act=><CardComponent key={act.firstName+"1"} actor={act}/>)
 
    // firstName, lastName, birthday, image, imdbLink

    const [filterText, setFilterText] = useState("")
    const [sortCriteria, setSortCriteria] = useState("")

    function filterTextByEvent(e){
        let text = e.target.value;
        setFilterText(text);
        if(text === ""){
            setActors(allActors);
        }
    }
    function filterByFirstName(){
        let actorsFiltered = [...actors].filter(a=>a.firstName.startsWith(filterText));
        setActors(actorsFiltered);
    }

    function filterByLastName(){
         setActors(actors.filter(a=>a.lastName.startsWith(filterText)));
    }

     

    return (
        <div >
            <h2>Actors Page</h2>
            <div className="content">
            <input type="text" value={filterText} onChange={(e)=>filterTextByEvent(e)}   placeholder="Filter Actors!"></input>
            <SortComponent actors={actors} sortCriteria={sortCriteria} setActors={setActors} />
            <button onClick={filterByFirstName}>Filter By First Name</button>
            <button onClick={filterByLastName}>Filter By Last Name</button>
            <div className="row"><ImgGallery actorsHtml={actorsHtml}/></div>
            </div>

        </div>
    );
}

export default ActorsPage;