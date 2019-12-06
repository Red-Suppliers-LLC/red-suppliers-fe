import React from "react"

import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home.js"
import AboutUs from "./components/AboutUs.js";
import Services from "./components/Services.js";
import Contact from "./components/Contact.js"

function App() {
  return (
    <>
      <Router>
        {/* Route Paths */}
        <Route exact path="/" render={props => <Home {...props} />} />

        <Route path="/about" render={props => <AboutUs {...props} />} />

        <Route path="/services" render={props => <Services {...props} />} />

        <Route path="/contact" render={props => <Contact {...props} />} />
      </Router>
    </>
  )
}

export default App

// Services, About, and Contact Us routes are commented out because the components aren't built yet. As you build those components out, uncomment these
