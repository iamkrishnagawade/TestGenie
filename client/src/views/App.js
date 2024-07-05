import { generateJson } from "../services/api";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { PreviewPane, FormPane } from "../components";

export default function App() {
    const [data, setData] = useState("");
    const generateJsonApi = useQuery("data", generateJson);

    useEffect(() => {
        if (generateJsonApi.status === "success") {
            setData(JSON.stringify(generateJsonApi.data, null, 2));
        }
    }, [generateJsonApi.status]);

    return (
        <div className="App">
            <div className="App__content">
                <div style={{
                    "height": "100%"
                }}>
                    <div style={{
                        "height": "100%",
                        "position": "relative"
                    }}>
                        <div className="Pane Pane1">
                            <FormPane />
                        </div>
                        <div className="Pane Pane2">
                            <PreviewPane data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}