function Actor({actor}){

    return ( 
<div className="actor">
<img src={actor.imgSrc} alt={actor.name}/>
<div><h2>{actor.name}</h2></div><div><h2>{actor.age}</h2></div>
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
   
ReactDOM.render(
  <ParentComponent/>,
  document.getElementById("root")
);


export default Actor;