import React from "react";
import { Image, Responsive } from "semantic-ui-react";


import image from "../assets/mountain.jpeg";

const styles = {
  image: {
    height: "100vh",
    width: "100vw",
  },
  phoneImage: {
    height: "50vh"
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.7)'
  }
};

const NavBarMobile = () => (
  <div>
    <Image src={image} style={styles.phoneImage} fluid />
    <div style={{position: 'absolute', bottom: 0, width: '100%', height: '50vh',backgroundColor: 'rgba(0,0,0,0.7)'}} />
    <div className="hero-text-mobile">
      <font size="10">Developer.</font>
    </div>
  </div>
);

const NavBarDesktop = props => (
  <div>
    <img src={image} style={styles.image} />
    <div style={styles.overlay} />
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
