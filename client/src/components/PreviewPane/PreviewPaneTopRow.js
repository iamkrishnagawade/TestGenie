import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function PreviewPaneTopRow() {
    return (
        <div className="PreviewPane__topRow">
            <Form.Group className="PreviewPane__formGroup mb-3">
                <Form.Select>
                    <option>JSON</option>
                    <option>CSV</option>
                    <option>SQL</option>
                    <option>XML</option>
                </Form.Select>
            </Form.Group>
            <div className="PreviewPane__control">
                <span>
                    <FontAwesomeIcon icon={faRotateRight} />
                </span>
                <span>
                    <FontAwesomeIcon icon={faXmark} />
                </span>
            </div>
        </div>
    )
}