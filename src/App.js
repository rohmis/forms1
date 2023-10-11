import React, { Component } from "react";
import ShowForm from "./components/ShowForm";
import ShowTable from "./components/ShowTable";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: [],
      showForm: false,
      showTable: false,
    };
  }

  handleFormSubmit = (data) => {
    this.setState((prevState) => ({
      formData: [...prevState.formData, data],
    }));
  };

  signUpForm = () => {
    this.setState({ showForm: true, showTable: false });
  };

  showDetails = () => {
    this.setState({ showTable: true, showForm: false });
  };

  render() {
    const { showForm, showTable } = this.state;

    return (
      <Container className="ch">
        <Row>
          <Col>
            <Button variant="primary" onClick={this.signUpForm}>
              Sign Up
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={this.showDetails}>
              Show Details
            </Button>
          </Col>
        </Row>

        {showForm && <ShowForm onSubmit={this.handleFormSubmit} />}

        {showTable && <ShowTable data={this.state.formData} />}
      </Container>
    );
  }
}

export default App;
