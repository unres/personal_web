/// ///////////////////////////////////////////////////////////
// R E Q U I R E S  /  I M P O R T S
/// ///////////////////////////////////////////////////////////

// Import Required Libraries
import React from "react";
import { Grid, Header, Segment, Divider, List, Icon, Image } from "semantic-ui-react";

// Import Custom Files
import image from "../assets/fuji.jpeg";

/// ///////////////////////////////////////////////////////////
// G L O B A L   D E F I T I N O N
/// ///////////////////////////////////////////////////////////

const styles = {
    image: {
        height: "100vh",
        width: "100vw"
    },
    imageMobile: { height: "50vh", width: "100vw" },
    form: { marginTop: "-80vh" },
    formMobile: { marginTop: "0vh", backgroundColor: "Black" },
    list: { marginLeft: "5%" }
};

/// ///////////////////////////////////////////////////////////
// C L A S S   D E F I N I T I O N
/// ///////////////////////////////////////////////////////////

class Contact extends React.Component {
    render() {
        return (
                <Grid centered columns={4} stackable style={styles.formMobile}>
                    <Grid.Column>
                        <Header as="h2" textAlign="center" style={{ color: "white" }}>
                            You Can Reach Me At:
                        </Header>
                        <Segment>
                            <Image src={image} style={styles.imageMobile} fluid />
                            <Divider section />
                            <Header as="h3" textAlign="center" style={{ marginTop: "5%" }}>
                                <Icon name="mail" /> Timothy.bell@ttu.edu
                            </Header>

                            <Divider section />

                            <List size={"huge"} style={styles.list}>
                                <List.Item
                                    href="https://www.facebook.com/tj.bell.7"
                                    target="_blank"
                                >
                                    <List.Icon name="facebook" />
                                    <List.Content>Facebook</List.Content>
                                </List.Item>
                                <List.Item
                                    href="https://www.instagram.com/unreserved_/"
                                    target="_blank"
                                >
                                    <List.Icon name="instagram" />
                                    <List.Content>Instagram</List.Content>
                                </List.Item>
                                <List.Item href="https://twitter.com/unreserved97" target="_blank">
                                    <List.Icon name="twitter" />
                                    <List.Content>Twitter</List.Content>
                                </List.Item>
                            </List>
                        </Segment>
                    </Grid.Column>
                </Grid>
        );
    }
}

export default Contact;
