const randomName = require("./randomName");
const randomPhoneNumber = require("./randomPhoneNumber");
const randomEmail = require("./randomEmail");
const randomAddress = require("./randomAddress");

const generateData = (fields) => {
    const data = {};

    fields.forEach(field => {
        switch (field.dataType) {
            case "name":
                data[field.propName] = randomName(field.examples, field.options);
                break;

            case "phone":
                data[field.propName] = randomPhoneNumber();
                break;

            case "email":
                data[field.propName] = randomEmail(field.examples);
                break;

            case "address":
                data[field.propName] = randomAddress();
                break;

            default:
                break;
        }
    });

    return data;
}

module.exports = generateData;