import React from "react";
import axios from "axios";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

const API_PATH =
  "http://localhost:1992/react-contact-form/api/contact/index.php";

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

    console.log(this.state);

    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        this.setState(
          {
            mailSent: result.data.sent
          },
          this.resetForm()
        );
        console.log(this.state);
      })
      .catch(error => this.setState({ error: error.message }));
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
            Fill Out The Form Below:
          </Header>
          <Segment>
            <Form size="large" action="../ap/action_page.php">
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
              <div>
                {this.state.mailSent && (
                  <div className="success">Thank you for contcting me.</div>
                )}
                {this.state.error && (
                  <div className="error">Sorry we had some problems.</div>
                )}
              </div>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Contact;
