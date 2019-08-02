// https://www.npmjs.com/package/react-circular-progressbar
// https://github.com/AramRafeq/semantic-ui-carousel-react#readme

/// ///////////////////////////////////////////////////////////
// R E Q U I R E S  /  I M P O R T S
/// ///////////////////////////////////////////////////////////

// Import Required Libraries
import React from "react";
import { Grid } from 'semantic-ui-react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

// Import Custom Files
import Data from '../../data/skills-data.js'

//animation imports
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider.js";
import 'react-circular-progressbar/dist/styles.css';

/// ///////////////////////////////////////////////////////////
// G L O B A L   D E F I T I N O N
/// ///////////////////////////////////////////////////////////


/// ///////////////////////////////////////////////////////////
// C L A S S   D E F I N I T I O N
/// ///////////////////////////////////////////////////////////

class Skills extends React.Component {
    render() {
        return (
            <Grid style={{ marginLeft: "88px" }}>
                <h2>Skills</h2>
                <Grid.Row columns={4} >
                    {Data.map((data) => 
                        <Grid.Column verticalAlign="middle" textAlign="center" width={3} stretched >
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={data.valueEnd}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                        >
                            {value => {
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={data.text}
                                        circleRatio={0.75}
                                        styles={buildStyles({
                                            rotation: 1 / 2 + 1 / 8,
                                            strokeLinecap: "butt",
                                            trailColor: "#eee",
                                            pathColor: "red",
                                            textColor: "red"
                                        })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                    </Grid.Column>
                    )}
                </Grid.Row>
            </Grid>
        );
    }
}

export default Skills;

/*                         
<Carousel
elements={elements}
animation='slide right'
showNextPrev={true}
style={{width: "100%"}}
/>
*/