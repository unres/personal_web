/// ///////////////////////////////////////////////////////////
// R E Q U I R E S  /  I M P O R T S
/// ///////////////////////////////////////////////////////////

// Import Required Libraries
import React from "react";
import { Image } from "semantic-ui-react";


// Import Custom Files
import image from "../assets/mountain.jpeg";

/// ///////////////////////////////////////////////////////////
// G L O B A L   D E F I T I N O N
/// ///////////////////////////////////////////////////////////

const styles = {
  image: {
    height: "100vh",
    width: "100vw",
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.7)'
  }
};

/// ///////////////////////////////////////////////////////////
// C L A S S   D E F I N I T I O N
/// ///////////////////////////////////////////////////////////

class Img extends React.Component {
  render() {
    return (
      <div>
      <Image src={image} style={styles.image} />
      <div style={styles.overlay} />
      <div className="hero-text">
        <font size="10">Developer.</font>
      </div>
    </div>
    );
  }
}

export default Img;
