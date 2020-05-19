import React from "react";
import { ThemeProvider } from "@chakra-ui/core";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home.js";
import AboutUs from "./components/AboutUs.js";
import Services from "./components/Services.js";
import Contact from "./components/Contact.js";
import customTheme from "./components/themes/customTheme.js";

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Router>
          {/* Route Paths */}
          <Route exact path="/" render={(props) => <Home {...props} />} />

          <Route path="/about" component={AboutUs} />

          <Route path="/services" component={Services} />

          <Route path="/contact" component={Contact} />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

// Services, About, and Contact Us routes are commented out because the components aren't built yet. As you build those components out, uncomment these
