var { faker } = require("@faker-js/faker");

const _phoneNumber = () => {
    return faker.phone.number();
}

const _phoneImei = () => {
    return faker.phone.imei();
}

const randomPhoneNumber = (options) => {
    switch (options) {
        case "phone_number":
            return _phoneNumber();
        case "phone-imei":
            return _phoneImei();
        default:
            return;
    }
}

module.exports = randomPhoneNumber;