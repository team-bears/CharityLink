require('dotenv').config({
    path: '.env.test'
});

const app = require('../../app');
const expect = require('chai').expect;

const {
    TestAccount
} = require('./../utils');

describe('Tests for "deleteMe" mutation', () => {

    describe('Tests with a charity account', () => {
        let account;
        beforeEach(async () => {
            account = new TestAccount(app);
            await account.signupCharity();
            await account.login();
        });
        afterEach(async () => {
            account.closeAgent();
        });

        it('should successfully delete a charity', async () => {
            await account.delete((res) => {
                expect(res.body.errors).to.be.undefined;
                expect(res.body.data.deleteMe).to.be.true;
            });
        });
    });

    describe('Tests with a user account', () => {
        let account;
        beforeEach(async () => {
            account = new TestAccount(app);
            await account.signupUser();
            await account.login();
        });
        afterEach(async () => {
            account.closeAgent();
        });

        it('should successfully delete a user', async () => {
            await account.delete((res) => {
                expect(res.body.errors).to.be.undefined;
                expect(res.body.data.deleteMe).to.be.true;
            });
        });
    });

});