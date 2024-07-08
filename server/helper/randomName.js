var { faker } = require("@faker-js/faker");

const _fullName = () => {
    return faker.person.fullName();
}

const _firstname = () => {
    return faker.person.firstName();
}

const _lastname = () => {
    return faker.person.lastName();
}

const randomName = (examples, options) => {
    switch (options) {
        case "firstname":
            return _firstname(examples);
        case "lastname":
            return _lastname(examples);
        case "fullname":
            return _fullName(examples);
        default:
            return _fullName(examples);
    }
}

module.exports = randomName;