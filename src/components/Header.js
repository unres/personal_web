import React from "react";
import { Menu } from "semantic-ui-react";
import "../css/App.css";
import Resume from "../assets/Resume2018.pdf";

class Header extends React.Component {
  render() {
    return (
      <div className="ui fixed inverted icon menu secondary  main">
        <Menu.Item>Timothy Bell</Menu.Item>
        <Menu.Item name="Home" href="" target="_blank" />
        <Menu.Item name="Resume" href={Resume} target="_blank" />
        <Menu.Item
          name="Github"
          href="https://github.com/unres"
          target="_blank"
        />
        <Menu.Item
          name="LinkedIn"
          href="https://www.linkedin.com/in/timothy-bell97/"
          target="_blank"
        />
        <Menu.Item name="Contact Me" position="right" />
      </div>
    );
  }
}

export default Header;
