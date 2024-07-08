import { Controlled as CodeMirror } from 'react-codemirror2';
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import { dispatchStateContext, globalStateContext } from "../../services/GlobalStateProvider";
import { useContext } from 'react';

const useGlobalState = () => [
    useContext(globalStateContext),
    useContext(dispatchStateContext)
];

export default function PreviewPanelPreview({data, mode}) {
    const [state] = useGlobalState(useGlobalState);
    const findMode = state.previewMode.filter((_, i) => _.value === mode)[0];

    return (
        <div className="PreviewPanel__preview">
            <CodeMirror
                value={data}
                options={{
                    mode: findMode.mode,
                    theme: 'material',
                    lineNumbers: true
                }}
                onChange={(editor, data, value) => {
                }}
            />
        </div>
    )
}