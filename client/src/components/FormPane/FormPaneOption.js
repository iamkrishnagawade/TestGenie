import Form from 'react-bootstrap/Form';

export default function FormPaneOption({ dataType }) {
    switch (dataType) {
        case "phone":
            return (
                <Form.Group className="FormPane__formGroup mb-3">
                    <Form.Select>
                        <option>Select...</option>
                    </Form.Select>
                </Form.Group>
            );
        default:
            return (
                <Form.Text className="text-muted">
                    No options available.
                </Form.Text>
            )
    }
}