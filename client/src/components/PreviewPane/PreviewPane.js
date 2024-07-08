import PreviewPanelPreview from "./PreviewPanelPreview";
import PreviewPaneTopRow from "./PreviewPaneTopRow";

export default function PreviewPane({data, mode, count, handleCountChange, handleChangeMode, refetchQueryData}) {
    return (
        <div className="PreviewPane">
            <div className="PreviewPane__content">
                <PreviewPaneTopRow 
                    mode={mode} 
                    count={count} 
                    handleCountChange={handleCountChange} 
                    handleChangeMode={handleChangeMode}
                    refetchQueryData={refetchQueryData}
                />
                <PreviewPanelPreview data={data} mode={mode}  />
            </div>
        </div>
    )
}