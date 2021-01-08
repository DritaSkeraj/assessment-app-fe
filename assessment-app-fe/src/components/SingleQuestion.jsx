import React, { Component } from "react";
import "../styles/Question.css";
import { Row, Col } from "react-bootstrap";

class SingleQuestion extends Component {
  render() {
    return (
      <div className='singleQuestion'>
        <Row className='ml-3'>
          <h4>Node.js is a:</h4>
        </Row>
        <Row>
            <Col xs={11} md={5}>
                <div className='option'>
                  <p>library</p>
                </div>
            </Col>
            <Col xs={11} md={5}>
                <div className='option'>
                  <p>framework</p>
                </div>
            </Col>
            <Col xs={11} md={5}>
                <div className='option'>
                  <p>programming language</p>
                </div>
            </Col>
            <Col xs={11} md={5}>
                <div className='option'>
                  <p>javaScript runtime</p>
                </div>
            </Col>
        </Row>
      </div>
    );
  }
}

export default SingleQuestion;
