import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import "../css/App.css";
import Resume from "../assets/Resume2018.pdf";

class Header extends React.Component {
  render() {
    return (
      <div className="ui huge fixed icon menu secondary  main">
        <Menu.Item>Timothy Bell</Menu.Item>
        <Menu.Item name="Home" href="" target="_blank">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item name="Resume" href={Resume} target="_blank">
          <Icon name="file" />
          Resume
        </Menu.Item>
        <Menu.Item
          name="Github"
          href="https://github.com/unres"
          target="_blank"
        >
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
        <Menu.Item name="Contact Me" position="right">
          <Icon name="envelope square" />
          Contact Me
        </Menu.Item>
      </div>
    );
  }
}

export default Header;
