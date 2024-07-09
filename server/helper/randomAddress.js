var { faker } = require("@faker-js/faker");

const randomAddress = () => {
    return faker.location.streetAddress({useFullAddress: true});
}

module.exports = randomAddress;