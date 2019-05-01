import React from "react";

import "../css/App.css";
import Header from "../components/Header.js";
import Img from "../components/Img.js";
import About from "../components/About.js";
import Footer from "../components/Footer.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Img />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
