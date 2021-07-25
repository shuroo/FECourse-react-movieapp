import React from "react";

function SortComponent({sortCriteria, actors, setActors,setSortCriteria}){

    function sortBy(){
 
        if(sortCriteria === "firstName"){
            actors.sort(function(a,b){return actors.sort(a.firstName,b.firstName)})
        }else{
            actors.sort(function(a,b){return actors.sort(a.lastName,b.lastName)})
        }
       
        alert(actors.map(ac=>ac.lastName));
        setActors(actors);
        setSortCriteria(sortCriteria);
    }

    return(

<select name="sortBy" value={sortCriteria} onChange={sortBy}  >
  <option value="firstName">FName &#8595;</option>
  <option value="lastName">LName &#8593;</option>
</select> 

)}

export default SortComponent;