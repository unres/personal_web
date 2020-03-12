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
  textQuote: {
    marginLeft: '50vh',
    color: 'White'
  },
  textAuthor: {
    color: 'White'
  },
  section: {
    marginTop: '6px',
    width: '100%',
    height: '20vh',
    backgroundColor: 'grey',
    padding: "40px 40px 40px 40px"
  }
};

/// ///////////////////////////////////////////////////////////
// C L A S S   D E F I N I T I O N
/// ///////////////////////////////////////////////////////////

class Quote extends React.Component {
  render() {
    return (
        <Grid>
            <Grid.Row style={styles.section}>
                <h2 style={styles.textQuote}>"This is an Awesome Quote that is deep and legendary"</h2>
                
                <h3 style={styles.textAuthor}> - A Legend</h3>
            </Grid.Row>
        </Grid>
    );
  }
}

export default Quote;
