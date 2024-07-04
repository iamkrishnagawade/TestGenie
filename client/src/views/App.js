import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Controlled as CodeMirror } from 'react-codemirror2';
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";

export default function App() {
    return (
        <div className="App">
            <div className="App__content">
                <div style={{
                    "height": "100%"
                }}>
                    <div style={{
                        "height": "100%",
                        "position": "relative"
                    }}>
                        <div className="Pane Pane1">
                            <Container fluid>
                                <Form className="FormPane">
                                    <Row className="FormPane__header mb-3">
                                        <Col>Data Type</Col>
                                        <Col>Property Name</Col>
                                        <Col>Example</Col>
                                        <Col>Options</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="FormPane__formGroup mb-3">
                                                <Form.Select>
                                                    <option>Select...</option>
                                                    <option>Name</option>
                                                    <option>Phone</option>
                                                    <option>Email</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="FormPane__formGroup mb-3">
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="FormPane__formGroup mb-3">
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="FormPane__formGroup mb-3">
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="FormPane__formGroup mb-3">
                                                <Form.Select>
                                                    <option>Select...</option>
                                                    <option>Name</option>
                                                    <option>Phone</option>
                                                    <option>Email</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="FormPane__formGroup mb-3">
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="FormPane__formGroup mb-3">
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="FormPane__formGroup mb-3">
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button variant="primary">ROW</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Container>
                        </div>
                        <div className="Pane Pane2">
                            <div className="PreviewPane">
                                <div className="PreviewPane__content">
                                    <div className="PreviewPane__topRow">
                                        <Button variant="outline-light">JSON</Button>
                                        <div className="PreviewPane__control">
                                            <span>
                                                <FontAwesomeIcon icon={faRotateRight} />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon icon={faXmark} />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="PreviewPanel__preview">
                                        <CodeMirror
                                            value={JSON.stringify([
                                                {
                                                    "name": "Yvette Carlson",
                                                    "phone": "(304) 528-3379",
                                                    "email": "orci.donec.nibh@protonmail.com"
                                                }
                                            ])}
                                            options={{
                                                mode: 'javascript',
                                                theme: 'material',
                                                lineNumbers: true
                                            }}
                                            onChange={(editor, data, value) => {
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}