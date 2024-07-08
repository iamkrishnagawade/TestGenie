import PreviewPanelPreview from "./PreviewPanelPreview";
import PreviewPaneTopRow from "./PreviewPaneTopRow";

export default function PreviewPane({data, mode, count}) {
    return (
        <div className="PreviewPane">
            <div className="PreviewPane__content">
                <PreviewPaneTopRow mode={mode} count={count} />
                <PreviewPanelPreview data={data} mode={mode}  />
            </div>
        </div>
    )
}