import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function FormPaneAddRow({addFormPaneRow}) {
    return (
        <Row>
            <Col>
                <Button variant="primary" onClick={addFormPaneRow}>ROW</Button>
            </Col>
        </Row>
    )
}