import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export class FoodItem extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>Milk</ListGroupItem>
        <ListGroupItem>Eggs</ListGroupItem>
      </ListGroup>
    );
  }
}

export default FoodItem;
