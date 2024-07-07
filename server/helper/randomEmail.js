var { faker } = require("@faker-js/faker");

const randomEmail = (examples, options) => {
    return faker.internet.email(examples);
}

module.exports = randomEmail;