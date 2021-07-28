import React from "react";
import FormSelect from 'react-bootstrap/Form'

function SortComponent({sortCriteria, actors, setActors,setSortCriteria}){

    function sortBy(e){
        sortCriteria(e.target.value)
        alert("sortCriteria:"+sortCriteria);
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

<FormSelect style={{border:"1px solid black"}} name="sortBy"    >
 <select onChange={(e)=>sortBy(e)}>
  <option  value="firstName">FName &#8595;</option>
  <option   value="lastName">LName &#8593;</option>
  </select>
</FormSelect> 

)}

export default SortComponent;