import React from 'react';
// import Home from "./components/Home.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <div>
      hello
      <Router> 
      {/* <Route exact path="/"  render={props => (
        <Home { ...props } />
      )} />   */}
      </Router>    
    </div>
  );
}

export default App;
