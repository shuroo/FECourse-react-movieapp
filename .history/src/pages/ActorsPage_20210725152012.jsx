import React, { useState } from 'react';
import ActorModel from '../model/ActorModel';
//import SortComponent from "../components/SortComponent";
import ImgGallery from "../components/ImgGallery";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function ActorsPage() {

    const allActors = [ new ActorModel("Angelina", "Jolie", new Date("04/06/1975"), "./angeline.jpg", "https://www.imdb.com/name/nm0001401/"),
    new ActorModel("Brad", "Pitt", new Date("04/06/1975"), "./brad_pitt.jpg", "https://www.imdb.com/name/nm0000093/"),
    new ActorModel("Mattew", "Mecconohew", new Date("04/06/1975"), "./mattehew_mecc.jpeg","https://www.imdb.com/name/nm0000190/"),
    new ActorModel("Sandra", "Bullock", new Date("04/06/1975"), "./sandra_bullock.jpg", "https://www.imdb.com/name/nm0000113/"),
    new ActorModel("Gal", "Gadot", new Date("04/06/1975"), "./gal_gadot.jpg", "https://www.imdb.com/name/nm0000113/")];
    
    const [actors, setActors] = useState(
        allActors
        )


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
            <Container>
            <Form.text  type="text" value={filterText} onChange={(e)=>filterTextByEvent(e)}   placeholder="Filter Actors!"></Form.text>
            <Button variant="secondary" onClick={filterByFirstName}>Filter By First Name</Button>
            <Button variant="secondary" onClick={filterByLastName}>Filter By Last Name</Button> 
            <Row> <ImgGallery actors={actors}/> </Row>
            </Container>
 
        </div>
    );
}

export default ActorsPage;