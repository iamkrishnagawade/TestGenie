import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FormPaneHeader() {
    return (
        <Row className="FormPane__header mb-3">
            <Col>Data Type</Col>
            <Col>Property Name</Col>
            <Col>Example</Col>
            <Col>Options</Col>
            <Col>Actions</Col>
        </Row>
    )
}