import React from "react";

function SortComponent({actors}){

    function sortBy(e){
        alert();
    }

    return(

<select name="sortBy" onSelect={sortBy} id="sortBy">
  <option value="down">&#8595;</option>
  <option value="up">&#8593;</option>
</select> 

)}