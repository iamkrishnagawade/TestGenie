var { faker } = require("@faker-js/faker");

const randomUsername = () => {
    return faker.internet.userName();
}

module.exports = randomUsername;