import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

function MarkdownEditor() {
  // Task 4: Define your state here

  // Task 3: Add Layout code below
  return (
    <div>
      <Row className="mb-5">
        <Col className={`mb-4 col-md-6`}>
          <Badge
            style={{ fontSize: 25 }}
            className="bg-success text-white active text-nowrap fw-bold"
          >
            Enter Markdown
          </Badge>

          <textarea className="markdown-editor form-control rounded-bottom "></textarea>
        </Col>
        <Col className={`mb-4 col-md-6`}>
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
