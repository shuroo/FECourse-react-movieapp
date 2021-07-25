function Actor({actor}){

    return ( 
<div className="actor">
<img src={actor.imgSrc} alt={actor.name}/>
<label>Select a user name</label><input onChange={(e) => callBack(e)} />
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