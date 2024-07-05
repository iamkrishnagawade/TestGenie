import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormPaneHeader from './FormPaneHeader';
import FormPaneRow from './FormPaneRow';
import FormPaneAddRow from './FormPaneAddRow';

export default function FormPane() {
    return (
        <Container>
            <Form className="FormPane">
                <FormPaneHeader />
                <FormPaneRow />
                <FormPaneAddRow />
            </Form>
        </Container>
    )
}