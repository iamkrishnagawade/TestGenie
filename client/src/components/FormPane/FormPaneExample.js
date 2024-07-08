import Form from 'react-bootstrap/Form';

export default function FormPaneExample({ dataType, index, handleFormRowExampleChange }) {
    switch (dataType) {
        case "name":
            return (
                <Form.Group className="FormPane__formGroup mb-3">
                    <Form.Select name="sex" onChange={(e) => handleFormRowExampleChange(e, index)}>
                        <option value="">Gender...</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Form.Select>
                </Form.Group>
            );
        case "email":
            return (
                <Form.Group className="FormPane__formGroup mb-3"  onChange={(e) => handleFormRowExampleChange(e, index)}>
                    <Form.Control type="text" name="provider" placeholder='Provider' />
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