import { generateJson } from "../services/api";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { PreviewPane, FormPane } from "../components";

export default function App() {
    const [data, setData] = useState("");
    const [formRow, setFormRow] = useState([{}]);
    const [mode, setMode] = useState("json");
    const [count, setCount] = useState(10);
    const {data: queryData, status, refetch } = useQuery("data", () => generateJson({
        fields: formRow,
        count: count
    }));

    useEffect(() => {
        if (status === "success") {
            setData(JSON.stringify(queryData, null, 2));
        }
    }, [status, queryData]);

    useEffect(() => {
        refetch();
      }, [formRow, refetch]);

    const addFormPaneRow = () => {
        setFormRow([...formRow, {}]);
    }

    const handleFormRowChange = (e, index) => {
        const { name, value } = e.target;
        let newFromRow = [...formRow];

        newFromRow[index] = {
            ...newFromRow[index],
            [name]: value
        }

        if (name === "dataType") {
            newFromRow[index] = {
                ...newFromRow[index],
                propName: value
            }
        }

        setFormRow(newFromRow);
    }

    const handleFormRowExampleChange = (e, index) => {
        const { name, value } = e.target;
        let newFromRow = [...formRow];

        newFromRow[index] = {
            ...newFromRow[index],
            examples: {
                ...newFromRow[index].examples,
                [name]: value
            }
        }

        newFromRow[index] = {
            ...newFromRow[index],
        }

        setFormRow(newFromRow);
    }

    const handleFormRowOptionChange = (e, index) => {
        const { value } = e.target;
        let newFromRow = [...formRow];

        newFromRow[index] = {
            ...newFromRow[index],
            options: value
        }

        newFromRow[index] = {
            ...newFromRow[index],
        }

        setFormRow(newFromRow);
    }

    const removeFormPaneRow = (index) => {
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
                                handleFormRowExampleChange={handleFormRowExampleChange}
                                handleFormRowOptionChange={handleFormRowOptionChange}
                            />
                        </div>
                        <div className="Pane Pane2">
                            <PreviewPane data={data} mode={mode} count={count} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}