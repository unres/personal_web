/// ///////////////////////////////////////////////////////////
// R E Q U I R E S  /  I M P O R T S
/// ///////////////////////////////////////////////////////////

// Import Required Libraries
import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

// Import Custom Files
import "../css/App.css";
import Resume from "../assets/Resume2018.pdf";

/// ///////////////////////////////////////////////////////////
// C L A S S   D E F I N I T I O N
/// ///////////////////////////////////////////////////////////

class navBar extends React.Component {
  render() {
    return (
      <div className="ui fixed inverted stackable icon menu secondary vertical">
      <Menu.Item name="Resume" href={Resume} target="_blank">
        <Icon name="file" />
        Resume
      </Menu.Item>
      <Menu.Item name="Github" href="https://github.com/unres" target="_blank">
        <Icon name="github square" />
        Github
      </Menu.Item>
      <Menu.Item
        name="LinkedIn"
        href="https://www.linkedin.com/in/timothy-bell97/"
        target="_blank"
      >
        <Icon name="linkedin" />
        LinkedIn
      </Menu.Item>
  
      <Link to={"/Contact"}>
        <Menu.Item name="Contact Me" position="right">
          <Icon name="envelope square" />
          Contact Me
        </Menu.Item>
      </Link>
    </div>
    );
  }
}

export default navBar;
