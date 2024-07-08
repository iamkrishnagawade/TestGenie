import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faDownload, faRotateRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { dispatchStateContext, globalStateContext } from "../../services/GlobalStateProvider";
import { useContext } from 'react';

const useGlobalState = () => [
    useContext(globalStateContext),
    useContext(dispatchStateContext)
];

export default function PreviewPaneTopRow({mode, count}) {
    const [state] = useGlobalState(useGlobalState);

    return (
        <div className="PreviewPane__topRow">
            <Form.Group className="PreviewPane__formGroup mb-3">
                <Form.Select value={mode || "json"} onChange={(e) => console.log(e)}>
                    {
                        state.previewMode.map((e, index) => <option value={e.value} key={index}>{e.name}</option>)
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group className="PreviewPane__formGroup mb-3">
                <Form.Control type="number" name="count" placeholder="Count" value={count || 10} onChange={(e) => console.log(e)} />
            </Form.Group>
            <div className="PreviewPane__control">
                <span title="Download">
                    <FontAwesomeIcon icon={faDownload} />
                </span>
                <span title="Copy">
                    <FontAwesomeIcon icon={faCopy} />
                </span>
                <span title="Refresh">
                    <FontAwesomeIcon icon={faRotateRight} />
                </span>
                <span title="Close preview">
                    <FontAwesomeIcon icon={faXmark} />
                </span>
            </div>
        </div>
    )
}