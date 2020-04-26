require('dotenv').config({
    path: '.env.test'
});

const app = require('../../app');
const expect = require('chai').expect;

const {
    TestAccount
} = require('./../utils');

describe('Tests for "logout" mutation', () => {

    describe('Tests with a charity account', () => {
        let account;
        beforeEach(async () => {
            account = new TestAccount(app);
            await account.signupCharity();
        });
        afterEach(async () => {
            await account.login();
            await account.delete();
            account.closeAgent();
        });

        it('should successfully logout a charity', async () => {
            await account.logout((res) => {
                expect(res.body.errors).to.be.undefined;
                expect(res.body.data.logout).to.be.true;
            });
        });

    });

    describe('Tests with a user account', () => {
        let account;
        beforeEach(async () => {
            account = new TestAccount(app);
            await account.signupUser();
        });
        afterEach(async () => {
            await account.login();
            await account.delete();
            account.closeAgent();
        });

        it('should successfully logout a charity', async () => {
            await account.logout((res) => {
                expect(res.body.errors).to.be.undefined;
                expect(res.body.data.logout).to.be.true;
            });
        });
    });
});