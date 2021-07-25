function Actor({actor}){

    return ( 
<div className="actor">
<img src={actor.imgSrc} alt={actor.name}/>
<div className="col"><h2>{actor.name}</h2><h4>{actor.age}</h4></div>
</div>
    )
} 

// function ActorsGallery(){

//   const [usrName, setUsrName] = React.useState();

//   function updateLabel(e){
//     setUsrName(e.target.value);
//   }
//     return ( 
// <div >
// <ChildComponent callBack={updateLabel} />
//  <span>{usrName} </span>
// </div>
//     )
// } 



export default Actor;