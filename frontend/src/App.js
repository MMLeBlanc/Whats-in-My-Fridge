import React from "react";
import { Row, Col, Container } from "reactstrap";
import AppNavbar from "./components/AppNavbar";
import Dashboard from "./components/Dashboard";
import MyFridge from "./components/MyFridge";
import CookBook from "./components/CookBook";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Dashboard />
      <Container>
        <Row>
          <Col xs="6">
            <MyFridge />
          </Col>
          <Col xs="6">
            <CookBook />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
