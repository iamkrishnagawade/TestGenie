import axios from "axios";

const client = axios.create({
    baseURL: "/api/v1"
});

const generateJson = async () => {
    const res = await client.post("/generate/json", {
        "fields": [
            {
                "dataType": "name",
                "propName": "name",
                "examples": [],
                "options": []
            },
            {
                "dataType": "phone",
                "propName": "phone",
            },
            {
                "dataType": "email",
                "propName": "email",
                "examples": {
                    "provider": "google.com"
                }
            }
        ],
        "count": 10
    });
    return res.data;
}

export {
    generateJson
}