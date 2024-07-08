var { faker } = require("@faker-js/faker");

const randomName = (examples, options) => {    
    switch (options) {
        case "firstname":
            return faker.person.firstName(examples);
        case "lastname":
            return faker.person.lastName(examples);
        case "fullname":
            return faker.person.fullName(examples);
        default:
            return faker.person.fullName(examples);
    }
}

module.exports = randomName;