/// ///////////////////////////////////////////////////////////
// R E Q U I R E S  /  I M P O R T S
/// ///////////////////////////////////////////////////////////

// Import Required Libraries
import React from "react";
import { Responsive } from 'semantic-ui-react'

// Import Custom Files
import "../../css/App.css";
import Img from "../../components/Img.js";
import About from "../../components/About.js";
import Skills from '../Skills/Skills.js'
import Projects from '../Projects/Projects.js'

// Import Mobile Custom Files
import MobileImg from "../../mobile/Mobile-Img.js"
import MobileAbout from "../../mobile/Mobile-About.js"

/// ///////////////////////////////////////////////////////////
// G L O B A L   D E F I T I N O N
/// ///////////////////////////////////////////////////////////

const HomeMobile = props => (
  <div className="App">
    <MobileImg />
    <MobileAbout />
  </div>
);

const HomeDesktop = props => (
  <div className="App">
    <Img />
    <About />
    <Skills />
    <Projects />
  </div>
);

/// ///////////////////////////////////////////////////////////
// C L A S S   D E F I N I T I O N
/// ///////////////////////////////////////////////////////////

class Home extends React.Component {
  render() {
    return (
      <div>
       <Responsive {...Responsive.onlyMobile}>
          <HomeMobile />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <HomeDesktop />
        </Responsive>
      </div>
    );
  }
}

export default Home;
