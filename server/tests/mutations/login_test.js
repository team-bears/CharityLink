require('dotenv').config({
    path: '.env.test'
});

const app = require('../../app');
const expect = require('chai').expect;

const {
    TestAccount
} = require('./../utils');

const Errortype = require('./../../errors/errors').Errortype;

describe('Tests for "login" mutation', () => {

    describe('tests with charity accounts', () => {
        let account;
        beforeEach(async () => {
            account = new TestAccount(app);
            await account.signupCharity();
        });
        afterEach(async () => {
            await account.delete();
            account.closeAgent();
        });

        it('should successfully login with correct (email, password)', async () => {
            await account.login((res) => {
                expect(res.body.errors).to.be.undefined;
                expect(res.body.data.login.uid).to.equal(account.info.uid);
                expect(res.body.data.login.email).to.equal(account.info.email);
            }, account.info.email);
        });

        it('should successfully login with (uid, password)', async () => {
            await account.login((res) => {
                console.log(res.body.errors);
                expect(res.body.errors).to.be.undefined;
                expect(res.body.data.login.uid).to.equal(account.info.uid);
                expect(res.body.data.login.email).to.equal(account.info.email);
            }, account.info.uid);
        })

        it('should fail to login with right email but incorrect password', async () => {
            await account.login((res) => {
                expect(res.body.errors).to.not.be.undefined;
                expect(res.body.errors[0].type).to.be.equal(Errortype.AUTHENTICATION_INCORRECT_PASSWORD);
            }, account.info.email, "incorrectpassword");
        });

        it('should fail to login with right uid but incorrect password', async () => {
            await account.login((res) => {
                expect(res.body.errors).to.not.be.undefined;
                expect(res.body.errors[0].type).to.be.equal(Errortype.AUTHENTICATION_INCORRECT_PASSWORD);
            }, account.info.uid, "incorrectpassword");
        });

        it('should fail to login with non-existent identifier', async () => {
            await account.login((res) => {
                expect(res.body.errors).to.not.be.undefined;
                expect(res.body.errors[0].type).to.be.equal(Errortype.AUTHENTICATION_INCORRECT_IDENTIFIER);
            }, "abcabc", "passwordButShouldntMatter");
        });
    });

    describe('tests with user accounts', () => {
        let account;
        beforeEach(async () => {
            account = new TestAccount(app);
            await account.signupUser();
        });
        afterEach(async () => {
            await account.delete();
            account.closeAgent();
        });

        it('should successfully login with correct (email, password)', async () => {
            await account.login((res) => {
                expect(res.body.errors).to.be.undefined;
                expect(res.body.data.login.uid).to.equal(account.info.uid);
                expect(res.body.data.login.email).to.equal(account.info.email);
            }, account.info.email);
        });

        it('should successfully login with (uid, password)', async () => {
            await account.login((res) => {
                console.log(res.body.errors);
                expect(res.body.errors).to.be.undefined;
                expect(res.body.data.login.uid).to.equal(account.info.uid);
                expect(res.body.data.login.email).to.equal(account.info.email);
            }, account.info.uid);
        })

        it('should fail to login with right email but incorrect password', async () => {
            await account.login((res) => {
                expect(res.body.errors).to.not.be.undefined;
                expect(res.body.errors[0].type).to.be.equal(Errortype.AUTHENTICATION_INCORRECT_PASSWORD);
            }, account.info.email, "incorrectpassword");
        });

        it('should fail to login with right uid but incorrect password', async () => {
            await account.login((res) => {
                expect(res.body.errors).to.not.be.undefined;
                expect(res.body.errors[0].type).to.be.equal(Errortype.AUTHENTICATION_INCORRECT_PASSWORD);
            }, account.info.uid, "incorrectpassword");
        });

        it('should fail to login with non-existent identifier', async () => {
            await account.login((res) => {
                expect(res.body.errors).to.not.be.undefined;
                expect(res.body.errors[0].type).to.be.equal(Errortype.AUTHENTICATION_INCORRECT_IDENTIFIER);
            }, "abcabc", "passwordButShouldntMatter");
        });
    });

});