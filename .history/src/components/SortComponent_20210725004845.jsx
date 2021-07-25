import React from "react";

function SortComponent({sortCriteria}){

    function sortBy(){
        alert();
    }

    return(

<select name="sortBy" onSelect={sortBy} id="sortBy">
  <option value="firstName">FName &#8595;</option>
  <option value="lastName">LName &#8593;</option>
</select> 

)}