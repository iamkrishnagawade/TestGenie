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
import { generateJson } from "../services/api";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";

export default function App() {
    const [data, setData] = useState("");
    const generateJsonApi = useQuery("data", generateJson);

    useEffect(() => {
        if (generateJsonApi.status === "success") {
            setData(JSON.stringify(generateJsonApi.data, null, 2));
        }
    })

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
                            <Container>
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
                                        <Form.Group className="PreviewPane__formGroup mb-3">
                                            <Form.Select>
                                                <option>JSON</option>
                                                <option>CSV</option>
                                                <option>SQL</option>
                                                <option>XML</option>
                                            </Form.Select>
                                        </Form.Group>
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
                                            value={data}
                                            options={{
                                                mode: 'application/json',
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