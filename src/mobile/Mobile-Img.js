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

/// ///////////////////////////////////////////////////////////
// C L A S S   D E F I N I T I O N
/// ///////////////////////////////////////////////////////////

class Img extends React.Component {
  render() {
    return (
        <div>
        <Image src={image} style={styles.phoneImage} fluid />
        <div style={{position: 'absolute', bottom: 0, width: '100%', height: '50vh',backgroundColor: 'rgba(0,0,0,0.7)'}} />
        <div className="hero-text-mobile">
          <font size="10">Developer.</font>
        </div>
      </div>
    );
  }
}

export default Img;
