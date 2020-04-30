require('dotenv').config({
    path: '.env.test'
});

const app = require('../../app');
const expect = require('chai').expect;

const {
    TestAccount
} = require('./../utils');

const Errortype = require('./../../errors/errors').Errortype;

describe('Tests for "signupCharity" mutation', () => {

    let account;
    beforeEach(() => {
        account = new TestAccount(app);
    });
    afterEach(async () => {
        await account.delete();
        account.closeAgent();
    });

    it('should successfully sign up with a new account details', async () => {
        await account.signupCharity((res) => {
            expect(res.body.errors).to.be.undefined;
            expect(res.body.data.signupCharity.email).to.be.equal(account.info.email);
        });
    });

    it('signup should fail if email is of wrong format', async () => {
        await account.signupCharity((res) => {
            expect(res.body.errors).to.not.be.undefined;
            expect(res.body.errors[0].type).to.be.equal(Errortype.INPUT_INVALID_EMAIL_FORMAT);
        }, {
            email: "invalid"
        });
    });

    it('signup should fail if email is already taken', async () => {
        otheraccount = new TestAccount(app);
        await otheraccount.signupCharity();

        await account.signupCharity((res) => {
            expect(res.body.errors).to.not.be.undefined;
            expect(res.body.errors[0].type).to.be.equal(Errortype.INPUT_EMAIL_TAKEN);
        }, {
            email: otheraccount.info.email
        });
    });

    it('signup should fail if the password is too small', async () => {
        await account.signupCharity((res) => {
            expect(res.body.errors).to.not.be.undefined;
            expect(res.body.errors[0].type).to.be.equal(Errortype.INPUT_PASSWORD_BAD_SIZE);
        }, {
            password: "Abc1!"
        });
    });

    it('signup should fail if the password is too huge', async () => {
        await account.signupCharity((res) => {
            expect(res.body.errors).to.not.be.undefined;
            expect(res.body.errors[0].type).to.be.equal(Errortype.INPUT_PASSWORD_BAD_SIZE);
        }, {
            password: "Ab1!".repeat(40)
        });
    });

    it('signup should fail if the password is exactly 7 characters', async () => {
        await account.signupCharity((res) => {
            expect(res.body.errors).to.not.be.undefined;
            expect(res.body.errors[0].type).to.be.equal(Errortype.INPUT_PASSWORD_BAD_SIZE);
        }, {
            password: "Abc123!"
        });
    });

    it('signup should fail if the password is exactly 31 characters', async () => {
        await account.signupCharity((res) => {
            expect(res.body.errors).to.not.be.undefined;
            expect(res.body.errors[0].type).to.be.equal(Errortype.INPUT_PASSWORD_BAD_SIZE);
        }, {
            password: "Ab1!" + "a".repeat(28)
        });
    });

    it('signup should fail if the password does not contain an uppercase letter', async () => {
        await account.signupCharity((res) => {
            expect(res.body.errors).to.not.be.undefined;
            expect(res.body.errors[0].type).to.be.equal(Errortype.INPUT_PASSWORD_NO_UPPERCASE);
        }, {
            password: "aa1!" + "a".repeat(10)
        });
    });

    it('signup should fail if the password does not contain a lowercase letter', async () => {
        await account.signupCharity((res) => {
            expect(res.body.errors).to.not.be.undefined;
            expect(res.body.errors[0].type).to.be.equal(Errortype.INPUT_PASSWORD_NO_LOWERCASE);
        }, {
            password: "AB1!" + "B".repeat(10)
        });
    });

    it('signup should fail if the password does not contain a digit', async () => {
        await account.signupCharity((res) => {
            expect(res.body.errors).to.not.be.undefined;
            expect(res.body.errors[0].type).to.be.equal(Errortype.INPUT_PASSWORD_NO_DIGIT);
        }, {
            password: "Ab!" + "a".repeat(10)
        });
    });

    it('signup should fail if the password does not match confirm password', async () => {
        await account.signupCharity((res) => {
            expect(res.body.errors).to.not.be.undefined;
            expect(res.body.errors[0].type).to.be.equal(Errortype.INPUT_PASSWORD_CONFIRMATION_FAILED);
        }, {
            confirm_password: "Ab123123!"
        });
    });
});