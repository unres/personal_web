import React from "react";
import {
  Grid,
  Header,
  Segment,
  Divider,
  List,
  Icon,
  Image,
  Responsive
} from "semantic-ui-react";

import NavBar from "../components/navBar.js";
import image from "../assets/fuji.jpeg";

const NavBarMobile = () => (
  <div>
    <NavBar />
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
  </div>
);

const NavBarDesktop = () => (
  <div>
    <NavBar />
    <Image src={image} style={styles.image} fluid />
    <Grid centered columns={4} stackable style={styles.form}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          You Can Reach Me At:
        </Header>
        <Segment>
          <Header as="h3" textAlign="center" style={{ marginTop: "5%" }}>
            <a href="mailto:timothy.bell@ttu.edu" >Timothy.bell@ttu.edu</a>
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
  </div>
);

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
class Contact extends React.Component {
  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop />
        </Responsive>
      </div>
    );
  }
}

export default Contact;
