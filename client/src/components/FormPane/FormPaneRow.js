import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { dispatchStateContext, globalStateContext } from "../../services/GlobalStateProvider";
import { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import FormPaneExample from './FormPaneExample';
import FormPaneOption from './FormPaneOption';

const useGlobalState = () => [
    useContext(globalStateContext),
    useContext(dispatchStateContext)
];

export default function FormPaneRow({index, dataType, propName, handleFormRowChange, removeFormPaneRow}) {
    const [state, dispatch] = useGlobalState(useGlobalState);
    
    return (
        <Row>
            <Col>
                <Form.Group className="FormPane__formGroup mb-3">
                    <Form.Select onChange={(e) => handleFormRowChange(e, index)} value={dataType || ""} name="dataType">
                         <option>Select...</option>
                        {
                            state.dataType.map((e, index) => <option value={e.propertyName} key={index}>{e.title}</option>)
                        }
                    </Form.Select>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group className="FormPane__formGroup mb-3">
                    <Form.Control type="text" value={propName || ""} name="propName" onChange={(e) => handleFormRowChange(e, index)} />
                </Form.Group>
            </Col>
            <Col>
                <FormPaneExample dataType={dataType} />
            </Col>
            <Col>
                <FormPaneOption dataType={dataType} />
            </Col>
            <Col>
                <Button variant="danger" onClick={() => removeFormPaneRow(index)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
            </Col>
        </Row>
    )
}