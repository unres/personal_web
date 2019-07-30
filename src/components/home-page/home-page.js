/// ///////////////////////////////////////////////////////////
// R E Q U I R E S  /  I M P O R T S
/// ///////////////////////////////////////////////////////////

// Import Required Libraries
import React from "react";

// Import Custom Files
import "../../css/App.css";
import Img from "../../components/Img.js";
import About from "../../components/About.js";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Img />
        <About />
      </div>
    );
  }
}

export default Home;
