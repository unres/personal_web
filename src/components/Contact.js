import React from "react";
import axios from "axios";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    sent: false,
    buttonText: "Send Message"
  };

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  formSubmit = e => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending"
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    console.log(this.state);
    axios
      .post("API_URI", data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent"
    });
  };

  render() {
    return (
      <Grid centered columns={2} stackable style={{ marginTop: "20vh" }}>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Fill Out the Form Below:
          </Header>
          <Segment>
            <Form size="large">
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <Form.TextArea
                placeholder="Message"
                value={this.state.message}
                onChange={e => this.setState({ message: e.target.value })}
              />

              <Button
                color="blue"
                fluid
                size="large"
                onClick={e => this.formSubmit(e)}
                value="Submit"
              >
                Send Email
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Contact;
