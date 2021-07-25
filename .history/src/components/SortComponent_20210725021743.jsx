import React from "react";

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
        setSortCriteria(sortCriteria);
    }

    return(

<select name="sortBy" value={sortCriteria} onChange={setSortCriteria}  >
  <option value="firstName">FName &#8595;</option>
  <option value="lastName">LName &#8593;</option>
</select> 

)}

export default SortComponent;