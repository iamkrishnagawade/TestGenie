module.exports = app => {
    const generateController = require("../controllers/generate.controller");
    var router = require("express").Router();

    router.post("/json", generateController.json);  // find json res
    router.post("/sql", generateController.json);  // find sql res
    router.post("/xml", generateController.json);  // find xml res
    router.post("/csv", generateController.json);  // find csv res

    app.use("/api/v1/generate", router);
}