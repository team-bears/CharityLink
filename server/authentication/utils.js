const User = require('../models/user');
const Charity = require('../models/charity');
const Errorname = require('./../errors/errors').Errorname;
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
        throw new Error(Errorname.INPUT_INVALID_EMAIL_FORMAT);
    }

    const useraccount = (await User.find({
        email: email
    }))[0];

    if (useraccount) {
        throw new Error(Errorname.INPUT_EMAIL_TAKEN);
    }

    const emailaccount = (await Charity.find({
        email: email
    }))[0];

    if (emailaccount) {
        throw new Error(Errorname.INPUT_EMAIL_TAKEN);
    }

    // no errors
    return null;
}

function validatePassword(password, verify_password) {
    if (!(password.length >= 8 && password.length <= 30)) {
        throw new Error(Errorname.INPUT_PASSWORD_SIZE);
    }
    if (password.match((/[a-z]+/g)) == null) {
        throw new Error(Errorname.INPUT_PASSWORD_NO_LOWERCASE);
    }
    if (password.match((/[A-Z]+/g)) == null) {
        throw new Error(Errorname.INPUT_PASSWORD_NO_UPPERCASE);
    };
    if (password.match((/[\d]+/g)) == null) {
        throw new Error(Errorname.INPUT_PASSWORD_NO_DIGIT);
    }
    if (password != verify_password) {
        throw new Error(Errorname.INPUT_PASSWORD_VERIFY_FAILED);
    }
    return null;
}

module.exports = {
    findAccount,
    validateEmail,
    validatePassword
};