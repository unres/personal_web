import React from "react";

import "../css/App.css";
import NavBar from "../components/navBar.js";
import Img from "../components/Img.js";
import About from "../components/About.js";
import Footer from "../components/Footer.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Img />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
