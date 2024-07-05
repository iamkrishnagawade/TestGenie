import axios from "axios";

const client = axios.create({
    baseURL: "/api/v1"
});

const generateJson = async () => {
    const res = await client.post("/generate/json");
    return res.data;
}

export {
    generateJson
}