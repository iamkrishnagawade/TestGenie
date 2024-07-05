import { Controlled as CodeMirror } from 'react-codemirror2';
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";

export default function PreviewPanelPreview({data}) {
    return (
        <div className="PreviewPanel__preview">
            <CodeMirror
                value={data}
                options={{
                    mode: 'application/json',
                    theme: 'material',
                    lineNumbers: true
                }}
                onChange={(editor, data, value) => {
                }}
            />
        </div>
    )
}