const User = require('./../models/user');
const Charity = require('./../models/charity');

async function findAccount(identifier) {

    var account = (await User.find({
        email: identifier
    }))[0];
    if (account) {
        account = account.toObject();
        account.__typename = "User";
        return account;
    }
    account = (await User.find({
        uid: identifier
    }))[0];
    if (account) {
        account = account.toObject();
        account.__typename = "User";
        return account;
    }

    account = (await Charity.find({
        email: identifier
    }))[0];
    if (account) {
        account = account.toObject();
        account.__typename = "Charity";
        return account;
    }

    account = (await Charity.find({
        uid: identifier
    }))[0];

    if (account) {
        account = account.toObject();
        account.__typename = "Charity";
        return account;
    }

    // no account was found 
    return null;
}

async function validateEmail(email) {
    const isValidFormat = null != email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)

    if (!isValidFormat) {
        throw new Error("Invalid email format");
    }

    const useraccount = (await User.find({
        email: email
    }))[0];

    if (useraccount) {
        throw new Error("Email address already taken");
    }

    const emailaccount = (await Charity.find({
        email: email
    }))[0];

    if (emailaccount) {
        throw new Error("Email address already taken");
    }

    // no errors
    return null;
}

function validatePassword(password, verify_password) {
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
    if (password != verify_password) {
        throw new Error("Passwords do not match.")
    }
    return null;
}

module.exports = {
    findAccount,
    validateEmail,
    validatePassword
};