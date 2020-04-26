require('dotenv').config({
    path: '.env.test'
});

const app = require('../../app');
const expect = require('chai').expect;

const {
    TestAccount
} = require('./../utils');

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

        it('should successfully login with (email, password)', async () => {

            await account.login((res) => {
                expect(res.body.errors).to.be.undefined;
                expect(res.body.data.login.uid).to.equal(account.info.uid);
                expect(res.body.data.login.email).to.equal(account.info.email);
            }, account.info.email, account.info.password);
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

        it('should successfully login with (email, password)', async () => {
            await account.login((res) => {
                expect(res.body.errors).to.be.undefined;
                expect(res.body.data.login.uid).to.equal(account.info.uid);
                expect(res.body.data.login.email).to.equal(account.info.email);
            }, account.info.email, account.info.password);
        });
    });

});