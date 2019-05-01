import React from "react";
import { Image } from "semantic-ui-react";

import "../css/App.css";
import image from "../assets/mountain.jpeg";

const styles = {
  image: {
    height: "100vh",
    width: "100vw"
  }
};
class Img extends React.Component {
  render() {
    return (
      <div>
        <Image src={image} style={styles.image} fluid />
        <div className="hero-text">
          <font size="10">Developer.</font>
        </div>
      </div>
    );
  }
}

export default Img;
