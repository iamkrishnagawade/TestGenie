import PreviewPanelPreview from "./PreviewPanelPreview";
import PreviewPaneTopRow from "./PreviewPaneTopRow";

export default function PreviewPane({data}) {
    return (
        <div className="PreviewPane">
            <div className="PreviewPane__content">
                <PreviewPaneTopRow />
                <PreviewPanelPreview data={data} />
            </div>
        </div>
    )
}