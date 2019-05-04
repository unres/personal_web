import React from "react";
import { Menu, Icon, Responsive, Sidebar } from "semantic-ui-react";
import "../css/App.css";
import Resume from "../assets/Resume2018.pdf";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBarMobile = ({ onPusherClick, onToggle, visible }) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="push"
      icon="labeled"
      inverted
      direction="top"
      vertical
      visible={visible}
    >
      <Link to="/">
        <Menu.Item name="Home">
          <Icon name="home" />
          Home
        </Menu.Item>
      </Link>

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

      <Link to="/Contact">
        <Menu.Item name="Contact Me" position="right">
          <Icon name="envelope square" />
          Contact Me
        </Menu.Item>
      </Link>
    </Sidebar>
    <Sidebar.Pusher dimmed={visible} onClick={onPusherClick}>
      <Menu>
        <Menu.Item onClick={onToggle}>
          <Icon name="bars" />
        </Menu.Item>
      </Menu>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = props => (
  <div className="ui huge fixed stackable icon menu secondary  main">
    <Menu.Item>Timothy Bell</Menu.Item>

    <Link to="/">
      <Menu.Item name="Home">
        <Icon name="home" />
        Home
      </Menu.Item>
    </Link>

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

    <Link to="/Contact">
      <Menu.Item name="Contact Me" position="right">
        <Icon name="envelope square" />
        Contact Me
      </Menu.Item>
    </Link>
  </div>
);

class navBar extends React.Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
          />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop />
        </Responsive>
      </div>
    );
  }
}

export default navBar;
