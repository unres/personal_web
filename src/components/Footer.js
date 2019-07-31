/// ///////////////////////////////////////////////////////////
// R E Q U I R E S  /  I M P O R T S
/// ///////////////////////////////////////////////////////////

// Import Required Libraries
import React from "react";
import { Grid, List } from "semantic-ui-react";

// Import Custom Files
import "../css/Footer.css";

/// ///////////////////////////////////////////////////////////
// C L A S S   D E F I N I T I O N
/// ///////////////////////////////////////////////////////////

class Footer extends React.Component {
  render() {
    return (
    <Grid >
      <Grid.Row color={'black'}>
      <Grid.Column width={10} style={{marginLeft: "48vw"}}>
              <List horizontal inverted size={'massive'} >
                <List.Item href="https://www.facebook.com/tj.bell.7" target="_blank" >
                  <List.Icon name="facebook" inverted />
                </List.Item>

                <List.Item href="https://www.instagram.com/unreserved_/" target="_blank" >
                  <List.Icon name="instagram" />
                </List.Item>

                <List.Item href="https://twitter.com/unreserved97" target="_blank">
                  <List.Icon name="twitter" />
                </List.Item>
              </List>
      </Grid.Column >
      </Grid.Row>
    </Grid>
    );
  }
}

export default Footer;
