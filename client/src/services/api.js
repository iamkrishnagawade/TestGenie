import axios from "axios";

const client = axios.create({
    baseURL: "/api/v1"
});

const generateJson = async (body) => {    
    const res = await client.post("/generate/json", body);
    return res.data;
}

export {
    generateJson
}