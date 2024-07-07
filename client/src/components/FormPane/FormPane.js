import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormPaneHeader from './FormPaneHeader';
import FormPaneRow from './FormPaneRow';
import FormPaneAddRow from './FormPaneAddRow';

export default function FormPane({formRow, addFormPaneRow, handleFormRowChange, removeFormPaneRow}) {
    return (
        <Container>
            <Form className="FormPane">
                <FormPaneHeader />
                {
                    formRow.map((e, index) => <FormPaneRow
                        key={index}
                        index={index}
                        dataType={e.dataType}
                        propName={e.propName}
                        handleFormRowChange={(e) => handleFormRowChange(e, index)}
                        removeFormPaneRow={removeFormPaneRow}
                    />
                    )
                }
                <FormPaneAddRow addFormPaneRow={addFormPaneRow} />
            </Form>
        </Container>
    )
}