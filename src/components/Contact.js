import React from "react";
import {
  Grid,
  Header,
  Segment,
  Divider,
  List,
  Icon,
  Image
} from "semantic-ui-react";

import image from "../assets/fuji.jpeg";

const styles = {
  image: {
    height: "100vh",
    width: "100vw"
  },
  form: { marginTop: "-80vh" },
  list: { marginLeft: "10vh" }
};
class Contact extends React.Component {
  render() {
    return (
      <div>
        <Image src={image} style={styles.image} fluid />
        <Grid centered columns={4} stackable style={styles.form}>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              You Can Reach Me At:
            </Header>
            <Segment>
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
                <List.Item
                  href="https://twitter.com/unreserved97"
                  target="_blank"
                >
                  <List.Icon name="twitter" />
                  <List.Content>Twitter</List.Content>
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Contact;
