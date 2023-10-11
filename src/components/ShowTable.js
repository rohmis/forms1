import React, { Component } from "react";
import { Table ,Container} from "react-bootstrap";

export default class ShowTable extends Component {
  render() {
    return (
      <Container className="conTable">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobiel</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
          {this.props.data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
            <td>{item.city}</td>

          </tr>
        ))}
          </tbody>
        </Table>
        </Container>
    );
  }
}
