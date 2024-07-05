import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FormPaneRow() {
    return (
        <Row>
            <Col>
                <Form.Group className="FormPane__formGroup mb-3">
                    <Form.Select>
                        <option>Select...</option>
                        <option>Name</option>
                        <option>Phone</option>
                        <option>Username</option>
                        <option>Password</option>
                        <option>Birthdate</option>
                        <option>Date</option>
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
    )
}