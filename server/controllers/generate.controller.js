
// json responce
exports.json = async (req, res) => {
    try {
        // code here ...
        res.send([
            {
                name: "Yvette Carlson",
                phone: "(304) 528-3379",
                email: "orci.donec.nibh@protonmail.com"
            },
            {
                name: "Hilda Richardson",
                phone: "(201) 528-3179",
                email: "leo.cras.vehicula@icloud.ca"
            },
            {
                name: "Colt Sosa",
                phone: "(555) 528-4421",
                email: "iaculis.quis.pede@aol.org"
            }
        ]);
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