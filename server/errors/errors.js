const Errortype = {
    AUTHENTICATION_INCORRECT_PASSWORD: 'AUTHENTICATION_INCORRECT_PASSWORD',
    AUTHENTICATION_INCORRECT_IDENTIFIER: 'AUTHENTICATION_INCORRECT_IDENTIFIER',
    INPUT_INVALID_EMAIL_FORMAT: 'INPUT_INVALID_EMAIL_FORMAT',
    INPUT_EMAIL_TAKEN: 'INPUT_EMAIL_TAKEN',
    INPUT_PASSWORD_SIZE: 'INPUT_PASSWORD_SIZE',
    INPUT_PASSWORD_NO_UPPERCASE: 'INPUT_PASSWORD_UPPERCASE',
    INPUT_PASSWORD_NO_LOWERCASE: 'INPUT_PASSWORD_LOWERCASE',
    INPUT_PASSWORD_NO_DIGIT: 'INPUT_PASSWORD_DIGIT',
    INPUT_PASSWORD_VERIFY_FAILED: 'INPUT_PASSWORD_VERIFY_FAILED',
    AUTHORIZATION_DELETE_ACCOUNT: 'AUTHORIZATION_DELETE_ACCOUNT',
}

const Errortypes = {
    AUTHENTICATION_INCORRECT_PASSWORD: {
        message: "Looks like you entered the wrong password :/",
    },
    AUTHENTICATION_INCORRECT_IDENTIFIER: {
        message: "Account doesn't exist. Why not sign up for one?",
    },
    INPUT_INVALID_EMAIL_FORMAT: {
        message: "The format of the email isn't right.",
    },
    INPUT_EMAIL_TAKEN: {
        message: "Account already exists with this email.",
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
        message: "Regular and verify password fields do not match.",
    },
    AUTHORIZATION_DELETE_ACCOUNT: {
        message: "There was attempt to delete your account even though you're not logged in!",
    }
}

module.exports = {
    Errortype,
    Errortypes
}