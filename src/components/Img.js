import React from "react";
import { Image, Responsive } from "semantic-ui-react";

import "../css/App.css";
import image from "../assets/mountain.jpeg";

const styles = {
  image: {
    height: "100vh",
    width: "100vw"
  },
  phoneImage: {
    height: "50vh"
  }
};

const NavBarMobile = () => (
  <div>
    <Image src={image} style={styles.phoneImage} fluid />
    <div className="hero-text-mobile">
      <font size="10">Developer.</font>
    </div>
  </div>
);

const NavBarDesktop = props => (
  <div>
    <Image src={image} style={styles.image} fluid />
    <div className="hero-text">
      <font size="10">Developer.</font>
    </div>
  </div>
);

class Img extends React.Component {
  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop />
        </Responsive>
      </div>
    );
  }
}

export default Img;
