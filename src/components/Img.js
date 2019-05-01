import React from "react";
import { Image, Segment, Dimmer } from "semantic-ui-react";

import "../css/App.css";
import image from "../assets/mountain.jpeg";

const styles = {
  image: {
    height: "75vh",
    width: "100vw"
  }
};
class Img extends React.Component {
  render() {
    return (
      <Segment>
        <Dimmer active />
        <Image src={image} style={styles.image} fluid />
      </Segment>
    );
  }
}

export default Img;
