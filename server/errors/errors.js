const Errortype = {
    AUTHENTICATION_INCORRECT_PASSWORD: 'AUTHENTICATION_INCORRECT_PASSWORD',
    AUTHENTICATION_INCORRECT_IDENTIFIER: 'AUTHENTICATION_INCORRECT_IDENTIFIER',
    INPUT_INVALID_EMAIL_FORMAT: 'INPUT_INVALID_EMAIL_FORMAT',
    INPUT_EMAIL_TAKEN: 'INPUT_EMAIL_TAKEN',
    INPUT_PASSWORD_SIZE: 'INPUT_PASSWORD_SIZE',
    INPUT_PASSWORD_NO_UPPERCASE: 'INPUT_PASSWORD_NO_UPPERCASE',
    INPUT_PASSWORD_NO_LOWERCASE: 'INPUT_PASSWORD_NO_LOWERCASE',
    INPUT_PASSWORD_NO_DIGIT: 'INPUT_PASSWORD_NO_DIGIT',
    INPUT_PASSWORD_VERIFY_FAILED: 'INPUT_PASSWORD_VERIFY_FAILED',
    AUTHENTICATION_DELETE_ACCOUNT: 'AUTHENTICATION_DELETE_ACCOUNT',
}

const Errortypes = {
    AUTHENTICATION_INCORRECT_PASSWORD: {
        message: "Incorrect password entered for existent account.",
    },
    AUTHENTICATION_INCORRECT_IDENTIFIER: {
        message: "Attempt to login into non-existent account.",
    },
    INPUT_INVALID_EMAIL_FORMAT: {
        message: "The format of the email is of incorrect format.",
    },
    INPUT_EMAIL_TAKEN: {
        message: "Account already registered with this email.",
    },
    INPUT_PASSWORD_SIZE: {
        message: "Password must contain 8-30 characters",
    },
    INPUT_PASSWORD_NO_UPPERCASE: {
        message: "Password must contain at least one uppercase letter.",
    },
    INPUT_PASSWORD_NO_LOWERCASE: {
        message: "Password must contain at least one lowercase letter.",
    },
    INPUT_PASSWORD_NO_DIGIT: {
        message: "Password must contain at least one digit.",
    },
    INPUT_PASSWORD_VERIFY_FAILED: {
        message: "Regular and verify password fields aren't equal to each other.",
    },
    AUTHENTICATION_DELETE_ACCOUNT: {
        message: "Attempt to delete password while logged out.",
    }
}

module.exports = {
    Errortype,
    Errortypes
}