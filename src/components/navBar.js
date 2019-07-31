/// ///////////////////////////////////////////////////////////
// R E Q U I R E S  /  I M P O R T S
/// ///////////////////////////////////////////////////////////

// Import Required Libraries
import React from "react";
import { Menu, Icon, Divider } from "semantic-ui-react";
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
        <Link>
          <Menu.Item name="Resume" href={Resume} target="_blank">
            <Icon name="angle double up" size="large"/>
            Top
          </Menu.Item>
        </Link>
        <Link>
          <Menu.Item name="Resume" href={Resume} target="_blank">
            <Icon name="address card outline" size="large" />
            About Me
          </Menu.Item>
        </Link>
        <Link>
          <Menu.Item name="Resume" href={Resume} target="_blank">
            <Icon name="chart line" size="large" />
            Skills
          </Menu.Item>
        </Link>
        <Link>
          <Menu.Item name="Resume" href={Resume} target="_blank">
            <Icon name="archive" size="large" />
            Projects
          </Menu.Item>
        </Link>

        <Divider />
        
        <Menu.Item name="Resume" href={Resume} target="_blank">
          <Icon name="file" size="large" />
          Resume
      </Menu.Item>
        <Menu.Item name="Github" href="https://github.com/unres" target="_blank">
          <Icon name="github square" size="large" />
          Github
      </Menu.Item>
        <Menu.Item
          name="LinkedIn"
          href="https://www.linkedin.com/in/timothy-bell97/"
          target="_blank"
        >
          <Icon name="linkedin" size="large" />
          LinkedIn
      </Menu.Item>

        <Menu.Item
          name="Email Me"
          href="mailto:timothy.bell@ttu.edu"
        >
          <Icon name="envelope square" size="large" />
          Email Me
        </Menu.Item>
      </div>
    );
  }
}

export default navBar;
