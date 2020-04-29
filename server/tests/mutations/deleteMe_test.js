require('dotenv').config({
    path: '.env.test'
});

const app = require('../../app');
const expect = require('chai').expect;

const {
    TestAccount
} = require('./../utils');

const Errortype = require('./../../errors/errors').Errortype;

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

    describe('Miscellanous tests for deleting an account', () => {
        let account;
        beforeEach(async () => {
            account = new TestAccount(app);
        });
        afterEach(async () => {
            account.closeAgent();
        });

        it('should give us the correct error upon deleting without logging in', async () => {
            await account.delete((res) => {
                const errors = res.body.errors;
                expect(errors).to.not.be.undefined;
                expect(errors[0]).to.not.be.undefined;
                expect(errors[0].type).to.be.equal(Errortype.AUTHENTICATION_DELETE_ACCOUNT);
            })
        });

    });
});