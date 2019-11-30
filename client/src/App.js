import React from "react"

// import "./styling/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home.js"

function App() {
  return (
    <>
      <Router>
        {/* Route Paths */}
        <Route exact path="/" render={props => <Home {...props} />} />

        {/* <Route path="/about" render={props => <About {...props} />} /> */}

        {/* <Route path="/services" render={props => <Services {...props} />} /> */}

        {/* <Route path="/contact" render={props => <Contact {...props} />} /> */}
      </Router>
    </>
  )
}

export default App

// Services, About, and Contact Us routes are commented out because the components aren't built yet. As you build those components out, uncomment these
