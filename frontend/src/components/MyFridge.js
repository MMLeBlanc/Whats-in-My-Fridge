import React, { Component } from "react";
import { Container } from "reactstrap";

import FoodItem from "./FoodItem";

export class MyFridge extends Component {
  render() {
    return (
      <Container>
        <FoodItem />
      </Container>
    );
  }
}

export default MyFridge;
