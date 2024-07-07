import { generateJson } from "../services/api";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { PreviewPane, FormPane } from "../components";

export default function App() {
    const [data, setData] = useState("");
    const [formRow, setFormRow] = useState([{}]);
    const generateJsonApi = useQuery("data", generateJson);
    useEffect(() => {
        if (generateJsonApi.status === "success") {
            setData(JSON.stringify(generateJsonApi.data, null, 2));
        }
    }, [generateJsonApi.status]);

    const addFormPaneRow = () => {
        setFormRow([...formRow, {}]);
    }

    const handleFormRowChange = (e, index) => {
       const {name, value} = e.target;
       let newFromRow = [...formRow];
       
       newFromRow[index] = {
        ...newFromRow[index], 
        [name]: value
       }

       if(name === "dataType") {
            newFromRow[index] = {
                ...newFromRow[index], 
                propName: value
           }
       }

       setFormRow(newFromRow);
    }

    const removeFormPaneRow = (index) => {
        console.log(index);
        setFormRow(prevState => {
            return prevState.filter((_, i) => i !== index);
        });
    }

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
                            <FormPane 
                                formRow={formRow} 
                                addFormPaneRow={addFormPaneRow}
                                handleFormRowChange={handleFormRowChange}
                                removeFormPaneRow={removeFormPaneRow}
                            />
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