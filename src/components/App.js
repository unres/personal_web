import React from "react";

import "../css/App.css";
import Header from "../components/Header.js";
import Img from "../components/Img.js";
import About from "../components/About.js";
import Footer from "../components/Footer.js";
import Contact from "../components/Contact.js";

class App extends React.Component {
  state = { home: true };

  handleChange = input => event => {
    this.setState({ home: input });
  };

  renderContent() {
    if (this.state.home) {
      return (
        <div className="App">
          <Header handleChange={this.handleChange} />
          <Img />
          <About />
          <Footer />
        </div>
      );
    }
    return (
      <div>
        <Header handleChange={this.handleChange} />
        <Contact />
      </div>
    );
  }

  render() {
    return <div className="App">{this.renderContent()}</div>;
  }
}

export default App;
