/// ///////////////////////////////////////////////////////////
// R E Q U I R E S  /  I M P O R T S
/// ///////////////////////////////////////////////////////////

// Import Required Libraries
import React from "react";
import { Grid, Image } from "semantic-ui-react";

// Import Custom Files
import image from "../assets/logo.PNG";

/// ///////////////////////////////////////////////////////////
// C L A S S   D E F I N I T I O N
/// ///////////////////////////////////////////////////////////

class About extends React.Component {
  render() {
    return (
      <Grid columns={2} relaxed="very" style={{ height: "20vh" }} stackable>
        <Grid.Column
          verticalAlign="middle"
          textAlign="center"
          width={5}
          style={{ marginTop: "-5%" }}
        >
          <Grid.Row>
            <Image src={image} circular size="small" centered />
          </Grid.Row>
          <Grid.Row>
            <h2> About Me </h2>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column verticalAlign="middle" textAlign="left" width={11}>
          <font size="4">
            My name is Timothy Bell and I am 22 years old. I am currently a
            junior at Texas Tech University working towards my bachelor’s in
            computer science and a minor in Mathematics. I was born in Seattle,
            Washington and currently reside in Lubbock, Texas for school.
          </font>
        </Grid.Column>
      </Grid>
    );
  }
}

export default About;
