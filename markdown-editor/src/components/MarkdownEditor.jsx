import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { ThemeContext } from "./../contexts/ThemeContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';


function MarkdownEditor() {
    const { colClass, setColClass } = useContext(ThemeContext);

  // update the state
  const topDown = (isChecked) => {
    return isChecked ? setColClass(`col-12`) : setColClass(`col-6`);
  };

  // Task 3: Add Layout code below

  return (
    <div>
      <Form className="d-flex justify-content-end gap-2 mb-3">
        <label htmlFor="">top-down</label>
        <Form.Check
          type="switch"
          id="custom-switch"
          onClick={(e) => topDown(e.target.checked)}
        />
      </Form>
      <Row className="mb-5">
        <Col className={`mb-4 ${colClass}`}>
          <Badge
            style={{ fontSize: 25 }}
            className="bg-success text-white active text-nowrap fw-bold"
          >
            Enter Markdown
          </Badge>

          <textarea className="markdown-editor form-control rounded-bottom "></textarea>
        </Col>
        <Col className={`mb-4 ${colClass}`}>
          <Badge
            style={{ fontSize: 25 }}
            className="bg-success text-white active text-nowrap fw-bold"
          >
            Preview
          </Badge>

          <div className="markdown-editor form-control rounded-bottom"></div>
        </Col>
      </Row>
    </div>
  );
}

export default MarkdownEditor;
