import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faDownload, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { dispatchStateContext, globalStateContext } from "../../services/GlobalStateProvider";
import { useContext } from 'react';

const useGlobalState = () => [
    useContext(globalStateContext),
    useContext(dispatchStateContext)
];

export default function PreviewPaneTopRow({mode, count, handleCountChange, handleChangeMode, refetchQueryData}) {
    const [state] = useGlobalState(useGlobalState);

    return (
        <div className="PreviewPane__topRow">
            <Form.Group className="PreviewPane__formGroup mb-3">
                <Form.Select value={mode || "json"} onChange={(e) => handleChangeMode(e)}>
                    {
                        state.previewMode.map((e, index) => <option value={e.value} key={index}>{e.name}</option>)
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group className="PreviewPane__formGroup mb-3">
                <Form.Control type="number" placeholder="Count" value={count} onChange={(e) => handleCountChange(e)} />
            </Form.Group>
            <div className="PreviewPane__control">
                <span title="Download">
                    <FontAwesomeIcon icon={faDownload} />
                </span>
                <span title="Copy">
                    <FontAwesomeIcon icon={faCopy} />
                </span>
                <span title="Refresh" onClick={() => refetchQueryData()}>
                    <FontAwesomeIcon icon={faRotateRight} />
                </span>
            </div>
        </div>
    )
}