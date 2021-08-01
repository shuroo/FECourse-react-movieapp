import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActorsPage from './pages/ActorsPage';
import MoviesPage from './pages/MoviesPage';
import HomePage from './pages/HomePage';
// using ES6 modules
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";


function App() {


    return <Router >

        <
        Switch >
        <
        Route exact path = "/" >
        <
        HomePage /
        >
        < /
    Route > <
        Route exact path = "/movies" >
        <
        MoviesPage / > < /Route> <
    Route exact path = "/actors" >
        <
        ActorsPage / >
        <
        /Route>  < /
    Switch > <
        /Router>
};

export default App;