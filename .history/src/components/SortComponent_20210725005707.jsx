import React from "react";

function SortComponent({sortCriteria, actors, setActors}){

    function sortBy(criteria){
        if(criteria === "firstName"){
            actors.sort(function(a,b){return a.firstName > b.firstName})
        }else{
            actors.sort(function(a,b){return a.lastName > b.lastName})
        }
       
        setActors(actors);
    }

    return(

<select name="sortBy" onSelect={sortBy} id="sortBy">
  <option value="firstName">FName &#8595;</option>
  <option value="lastName">LName &#8593;</option>
</select> 

)}