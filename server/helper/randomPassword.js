var { faker } = require("@faker-js/faker");

const randomPassword = (examples) => {
    return faker.internet.password(examples);
}

module.exports = randomPassword;