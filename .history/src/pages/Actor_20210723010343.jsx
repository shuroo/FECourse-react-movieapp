function Actor({actor}){
    var styleProp = {"width": "18rem"};

    return ( 

//         <div className="actor">
//         <img src={actor.imgSrc} alt={actor.name}/>
//         <div className="col"><h2>{actor.name}</h2><h4>{actor.age}</h4></div>
// </div>


<div className="card actor" style={styleProp}>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-secondary">Go somewhere</a>
  </div>
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