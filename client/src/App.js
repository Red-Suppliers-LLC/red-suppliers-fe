import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home.js"; 

function App() {
  return (
    <> 
    <Router> 
    <Route exact path="/" render={props => (
      <Home { ...props } />
    )} /> 
    </Router>
    </>
  );
}

export default App;