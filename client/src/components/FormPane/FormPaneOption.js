import Form from 'react-bootstrap/Form';

export default function FormPaneOption({ dataType, index, handleFormRowOptionChange }) {
    switch (dataType) {
        case "name":
            return (
                <Form.Group className="FormPane__formGroup mb-3">
                    <Form.Select onChange={(e) => handleFormRowOptionChange(e, index)}>
                        <option value="">Options...</option>
                        <option value="fullname">Full Name</option>
                        <option value="firstname">First Name</option>
                        <option value="lastname">Last Name</option>
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