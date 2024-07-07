const { generateData } = require("../helper");

// json responce
exports.json = async (req, res) => {
    try {
        const { fields, count } = req.body;
        const data = [];
        
        for (let i = 0; i < count; i++) {
            data.push(generateData(fields));
        }
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retriving data."
        });
    }
}

// sql responce
exports.sql = async (req, res) => {
    try {
        // code here ...
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retriving data."
        });
    }
}

// xml responce
exports.xml = async (req, res) => {
    try {
        // code here ...
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retriving data."
        });
    }
}

// csv responce
exports.csv = async (req, res) => {
    try {
        // code here ...
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retriving data."
        });
    }
}