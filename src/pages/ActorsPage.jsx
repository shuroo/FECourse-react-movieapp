import React, { useState,useEffect } from 'react';
import ActorModel from '../model/ActorModel';
import ImgGallery from "../components/ImgGallery";
import {Button,Row,Container,InputGroup} from 'react-bootstrap';
import InputGroupText  from 'react-bootstrap/InputGroup';
import SortComponent from '../components/SortComponent';

function ActorsPage() {

    const [filterText, setFilterText] = useState("")
    const [sortCriteria, setSortCriteria] = useState("")
    const [actors, setActors] = useState(
        []
    );
 
    function filterByFirstName(){
        let actorsFiltered = [...actors].filter(a=>a.firstName.startsWith(filterText));
        setActors(actorsFiltered);
    }

    function filterByLastName(){
         setActors(actors.filter(a=>a.lastName.startsWith(filterText)));
    }

    // Use async read to fetch json data
   // useEffect(async () => {
    // await axios.get('/actors.json').then((data)=>{data.map(response=>{var actor = new ActorModel(response.firstName,response.lastName,response.birthday,response.image,response.imdbLink);
    //     allActors.push(actor);})});
    // setActors(allActors); 

    useEffect(()=>{
        fetch('./actors.json').then(response => response.json()).then(data => {
        const a = data.map(jsonActor => 
            new ActorModel(jsonActor.firstName,jsonActor.lastName,
                jsonActor.birthday,jsonActor.image,jsonActor.imdbLink));
        setActors(a);
        },[])});

        const allActors = actors;


             function filterTextByEvent(e){
                let text = e.target.value;
                setFilterText(text);
                if(text === ""){
                    setActors(allActors);
                }
            }  
           
    return (
        <div >
            <h2>Actors Page</h2>
            <Container>

            <SortComponent setSortCriteria={setSortCriteria} sortCriteria={sortCriteria} actors={actors} setActors={setActors} />
            <InputGroupText>
                <input value={filterText} onChange={(e)=>filterTextByEvent(e)}   placeholder="Filter Actors!"></input>

            </InputGroupText>
            <Button variant="secondary" onClick={filterByFirstName}>Filter By First Name</Button>   

            <Button variant="secondary" onClick={filterByLastName}>Filter By Last Name</Button> 
            { <Row> <ImgGallery actors={actors}/> </Row> }
            </Container>
 
        </div>
    );
}
export default ActorsPage;