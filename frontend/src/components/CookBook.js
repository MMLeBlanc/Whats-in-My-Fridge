import React, { Component } from "react";
import { Container } from "reactstrap";

import RecipeCard from "./RecipeCard";

export class CookBook extends Component {
  render() {
    return (
      <Container>
        <RecipeCard />
      </Container>
    );
  }
}

export default CookBook;
