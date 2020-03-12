/// ///////////////////////////////////////////////////////////
// R E Q U I R E S  /  I M P O R T S
/// ///////////////////////////////////////////////////////////

// Import Required Libraries
import React from "react";
import { Menu, Icon, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";

// Import Custom Files
import "../../css/App.css";
import Resume from "../../assets/Resume2018.pdf";

/// ///////////////////////////////////////////////////////////
// C L A S S   D E F I N I T I O N
/// ///////////////////////////////////////////////////////////

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
                    <Link to={"/"}>
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

                    <Link to={"/Contact"}>
                        <Menu.Item name="Contact Me" position="right">
                            <Icon name="envelope square" />
                            Contact Me
                        </Menu.Item>
                    </Link>
                </Sidebar>
                <Sidebar.Pusher dimmed={visible} onClick={onPusherClick}>
                    <Menu>
                        <Menu.Item style={{ fontSize: "16px" }}>Timothy Bell</Menu.Item>
                        <Menu.Item onClick={onToggle} position="right">
                            <Icon name="bars" />
                        </Menu.Item>
                    </Menu>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}

export default navBar;