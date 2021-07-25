import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Actor from './components/Actor.jsx';

//import CarModel from '../../model/CarModel';
//import CarsPage from './pages/CarsPage/CarsPage';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const actor1 = { name: "bPitt", age: 50, imdbLink: "https://www.imdb.com/name/nm0000093/", imgSrc: "https://www.imdb.com/name/nm0000093/mediaviewer/rm864335360/" }

function App() {
    return <Actor actor = { actor1 }
    />
};

export default App;