import React from "react";

function SortComponent({sortCriteria, actors, setActors}){

    function sortBy(criteria){
        if(criteria === "firstName"){

        }else{
            actors.sort(function(a,b){return a.firstName > b.firstName})
        }
       
        setActors(actors);
    }

    return(

<select name="sortBy" onSelect={sortBy} id="sortBy">
  <option value="firstName">FName &#8595;</option>
  <option value="lastName">LName &#8593;</option>
</select> 

)}