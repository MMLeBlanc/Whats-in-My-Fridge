import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

export class RecipeCard extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>
            <h5>Grilled Cheese Sandwich</h5>
          </CardTitle>
          <CardImg
            width="20%"
            src="./components/GrilledCheese.jpeg"
            alt="Recipe Image"
          />
          <CardSubtitle>
            This is the steps to make a Grilled Cheese Sandwich
          </CardSubtitle>
          <CardText>
            Hello This is from the recipe portion of the card.
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default RecipeCard;
