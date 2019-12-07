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

        <Route path="/about" component={AboutUs} />

        <Route path="/services" component={Services} />

        <Route path="/contact" component={Contact} />
      </Router>
    </>
  )
}

export default App

// Services, About, and Contact Us routes are commented out because the components aren't built yet. As you build those components out, uncomment these
