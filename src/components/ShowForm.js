import React, { Component } from "react";
import { Button, Form, Container,Row, Col } from "react-bootstrap";

class ShowForm extends Component {
  state = {
    name: "",
    email: "",
    mobile: "",
    city: "",
    errors: {
      name: "",
      email: "",
      mobile: "",
      city: "",
    },
    regEmail: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g,
    regName: /\d+/g,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobile, city, regName, regEmail } = this.state;
    const errors = {};

    // Name validation
    if (!name) {
      errors.name = "Name is required";
    } else if (regName.test(name)) {
      errors.name = "Please enter a valid name";
    }

    // Email validation
    if (!email) {
      errors.email = "Email is required";
    } else if (!regEmail.test(email)) {
      errors.email = "Enter a valid email";
    }

    // Mobile validation
    if (!mobile) {
      errors.mobile = "Mobile number is required";
    } else if (isNaN(mobile) || mobile.length !== 10) {
      errors.mobile = "Enter a valid mobile number";
    }

    // City validation
    if (!city) {
      errors.city = "Please select a city";
    }

    if (Object.keys(errors).length === 0) {
      this.props.onSubmit({ name, email, mobile, city });
      this.setState({
        name: "",
        email: "",
        mobile: "",
        city: "",
        errors: {
          name: "",
          email: "",
          mobile: "",
          city: "",
        },
      });
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { name, email, mobile, city, errors } = this.state;

    return (
        <Container className="conForm">
        <h1>Registration Form</h1>
        <Form onSubmit={this.handleSubmit}>
          {/* Name field */}
          <Form.Group as={Row} controlId="formGridName">
            <Form.Label>Name:</Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Enter Full Name.."
                name="name"
                value={name}
                onChange={this.handleInputChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </Col>
          </Form.Group>

          {/* Email field */}
          <Form.Group as={Row} controlId="formGridEmail">
            <Form.Label>Email:</Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                placeholder="Enter email.."
                name="email"
                value={email}
                onChange={this.handleInputChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </Col>
          </Form.Group>

          {/* Mobile field */}
          <Form.Group as={Row} controlId="formGridPhone">
            <Form.Label>Mobile No. :</Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Phone Number.."
                name="mobile"
                value={mobile}
                onChange={this.handleInputChange}
              />
              {errors.mobile && <p className="error">{errors.mobile}</p>}
            </Col>
          </Form.Group>

          {/* City field */}
          <Form.Group as={Row} controlId="formGridCity">
            <Form.Label>City:</Form.Label>
            <Col sm={10}>
              <Form.Control
                as="select"
                name="city"
                value={city}
                onChange={this.handleInputChange}
              >
                <option value="">Select your city</option>
                <option value="Indore">Indore</option>
                <option value="Jabalpur">Jabalpur</option>
                <option value="Gwalior">Gwalior</option>
              </Form.Control>
              {errors.city && <p className="error">{errors.city}</p>}
            </Col>
          </Form.Group>
          <br></br>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default ShowForm;
