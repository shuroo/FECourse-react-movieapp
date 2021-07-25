import React from "react";

function SortComponent({sortCriteria, actors, setActors,setSortCriteria}){

    return(

<select name="sortBy" value={sortCriteria} onChange={setSortCriteria}  >
  <option value="firstName">FName &#8595;</option>
  <option value="lastName">LName &#8593;</option>
</select> 

)}

export default SortComponent;