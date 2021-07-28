import React from "react";
import FormSelect from 'react-bootstrap/Form'

function SortComponent({sortCriteria, actors, setActors,setSortCriteria}){

    function sortBy(){
 
        if(sortCriteria === "firstName"){
            actors.sort((a,b)=>
            {
                if(a.firstName < b.firstName) { return -1; }
                if(a.firstName > b.firstName) { return 1; }
                return 0;
            })
        }else{
            actors.sort (
                (a,b)=>
            {
                if(a.lastName < b.lastName) { return -1; }
                if(a.lastName > b.lastName) { return 1; }
                return 0;
            })
        }
       
        console.log(actors);
        setActors(actors);
    }

    return(

<FormSelect style={{border:"1px solid black"}} name="sortBy" value={sortCriteria} onChange={sortBy}  >
 cdsacsdc
  <option onSelect={setSortCriteria} value="firstName">FName &#8595;</option>
  <option onSelect={setSortCriteria} value="lastName">LName &#8593;</option>
</FormSelect> 

)}

export default SortComponent;