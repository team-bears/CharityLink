const User = require('./../models/user');

async function validateEmail(email) {
    const isValidFormat = null != email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)

    if (isValidFormat) {
        const user = await User.find({
            email: email
        });
        if (user.length != 0) {
            throw new Error("Email address already taken");
        } else {
            return null;
        }
    } else {
        throw new Error("Invalid email format");
    }
}

function validatePassword(password) {
    if (!(password.length >= 8 && password.length <= 30)) {
        throw new Error("Password must contain 8-30 characters");
    }
    if (password.match((/[a-z]+/g)) == null) {
        throw new Error("Password must contain at least one lowercase letter");
    }
    if (password.match((/[A-Z]+/g)) == null) {
        throw new Error("Password must contain at least one uppercase latter");
    };
    if (password.match((/[\d]+/g)) == null) {
        throw new Error("Password must contain at least one numerical digit");
    }
    return null;
}

module.exports = {
    validateEmail,
    validatePassword
};