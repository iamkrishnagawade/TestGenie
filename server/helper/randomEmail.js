var { faker } = require("@faker-js/faker");

const randomEmail = (examples) => {
    return faker.internet.email(examples);
}

module.exports = randomEmail;