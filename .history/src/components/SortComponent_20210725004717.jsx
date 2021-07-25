import React from "react";

function SortComponent({actors}){

    function sortBy(){
        alert();
    }

    return(

<select name="sortBy" onSelect={sortBy} id="sortBy">
  <option value="down">FName &#8595;</option>
  <option value="up">LName &#8593;</option>
</select> 

)}