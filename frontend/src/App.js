import React from "react";
import { Provider } from "react-redux";
import { Row, Col, Container } from "reactstrap";
import AppNavbar from "./components/AppNavbar";
import Dashboard from "./components/Dashboard";
import MyFridge from "./components/MyFridge";
import CookBook from "./components/CookBook";

import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
