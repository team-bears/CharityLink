require('dotenv').config({
    path: '.env.test'
});

const app = require('../../app');
const expect = require('chai').expect;

const {
    TestAccount
} = require('./../utils');

describe('Tests for "signupUser" mutation', () => {

    let account;
    beforeEach(() => {
        account = new TestAccount(app);
    });
    afterEach(async () => {
        await account.delete();
        account.closeAgent();
    });

    it('should successfully sign up with a new account details', async () => {
        await account.signupUser((res) => {
            expect(res.body.errors, res.body.errors).to.be.undefined;
            expect(res.body.data.signupUser.email).to.be.equal(account.info.email);
        });
    });
});