// https://www.npmjs.com/package/react-circular-progressbar
// https://github.com/AramRafeq/semantic-ui-carousel-react#readme

/// ///////////////////////////////////////////////////////////
// R E Q U I R E S  /  I M P O R T S
/// ///////////////////////////////////////////////////////////

// Import Required Libraries
import React from "react";
import { Grid } from 'semantic-ui-react'

// Import Custom Files

/// ///////////////////////////////////////////////////////////
// G L O B A L   D E F I T I N O N
/// ///////////////////////////////////////////////////////////


/// ///////////////////////////////////////////////////////////
// C L A S S   D E F I N I T I O N
/// ///////////////////////////////////////////////////////////
 
class Projects extends React.Component {
    render() {
        return (
            <Grid style={{ marginLeft: "88px" }}>
                <h2>Projects</h2>
                <Grid.Row columns={4} >

                </Grid.Row>
            </Grid>
        );
    }
}

export default Projects;

/*                         
<Carousel
elements={elements}
animation='slide right'
showNextPrev={true}
style={{width: "100%"}}
/>
*/