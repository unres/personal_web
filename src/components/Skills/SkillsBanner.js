/// ///////////////////////////////////////////////////////////
// R E Q U I R E S  /  I M P O R T S
/// ///////////////////////////////////////////////////////////

// Import Required Libraries
import React from "react";
import { Grid } from "semantic-ui-react";


// Import Custom Files


/// ///////////////////////////////////////////////////////////
// G L O B A L   D E F I T I N O N
/// ///////////////////////////////////////////////////////////

const styles = {
  text: {
    fontSize: '70px',
    marginTop: '30px',
    marginLeft: '47%',
    color: 'White'
  },
  section: {
    marginTop: '6px',
    width: '100%',
    height: '30vh',
    backgroundColor: 'black',
    padding: "40px 40px 40px 40px"
  }
};

/// ///////////////////////////////////////////////////////////
// C L A S S   D E F I N I T I O N
/// ///////////////////////////////////////////////////////////

class SkillsBanner extends React.Component {
  render() {
    return (
            <Grid.Row style={styles.section}>
                <h2 style={styles.text}>Skills</h2>
            </Grid.Row>
    );
  }
}

export default SkillsBanner;
