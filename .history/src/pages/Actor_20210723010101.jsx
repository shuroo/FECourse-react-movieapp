function Actor({actor}){

    return ( 

<div className="card actor" style="width: 18rem;">
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
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