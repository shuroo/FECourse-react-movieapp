import React from "react";

function SortComponent({sortCriteria, actors, setActors,setSortCriteria}){

    function sortBy(e){

        alert();
        var criteria = e.target[e.target.selectedIndex].value;
        if(criteria === "firstName"){
            actors.sort(function(a,b){return a.firstName > b.firstName})
        }else{
            actors.sort(function(a,b){return a.lastName > b.lastName})
        }
       
        setActors(actors);
        setSortCriteria(criteria);
    }

    return(

<select name="sortBy" value={sortCriteria} onSelect={sortBy}  >
  <option value="firstName">FName &#8595;</option>
  <option value="lastName">LName &#8593;</option>
</select> 

)}

export default SortComponent;