import Form from 'react-bootstrap/Form';

export default function FormPaneExample({ dataType }) {
    switch (dataType) {
        case "email":
            return (
                <Form.Group className="FormPane__formGroup mb-3">
                    <Form.Control type="text" placeholder='Domain' />
                </Form.Group>
            );
        default:
            return (
                <Form.Text className="text-muted">
                    No examples available.
                </Form.Text>
            )
    }
}