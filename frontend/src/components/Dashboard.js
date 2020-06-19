import React, { Component } from "react";
import { Jumbotron, Button, Container } from "reactstrap";

export class Dashboard extends Component {
  onClickSignUp = () => {
    console.log("Signing up");
  };

  onClickLogin = () => {
    console.log("Logging in User");
  };

  render() {
    return (
      <div>
        <Jumbotron style={{ textAlign: "center" }}>
          <h1>Welcome</h1>
          <p className="lead">
            Welcome to What's in My Fridge, An application that allows you to
            keep track of your food and recipes all in one!
          </p>
          <p className="lead">
            If you haven't made an account yet, you can do so by clicking the
            link below.
          </p>
          <Container style={{ padding: 1 }}>
            <Button color="link" onClick={this.onClickSignUp}>
              Sign Up
            </Button>
            <Button color="link" onClick={this.onClickLogin}>
              Login
            </Button>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Dashboard;
