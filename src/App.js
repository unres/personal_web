/// ///////////////////////////////////////////////////////////
// R E Q U I R E S  /  I M P O R T S
/// ///////////////////////////////////////////////////////////

// Import Required Libraries
import React from "react";
import { BrowserRouter } from 'react-router-dom'

// Import Custom Files
import "./css/App.css";
import NavBar from "./components/navBar.js";
import Home from "./components/home-page/home-page.js"
import Footer from "./components/Footer.js";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Home />
            <Footer />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
