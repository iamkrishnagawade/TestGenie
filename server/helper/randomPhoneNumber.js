var { faker } = require("@faker-js/faker");

const randomPhoneNumber = () => {
    return faker.phone.number();
}

module.exports = randomPhoneNumber;