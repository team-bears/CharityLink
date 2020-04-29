require('dotenv').config({
    path: '.env.test'
});

const app = require('../../app');
const expect = require('chai').expect;

const {
    TestAccount
} = require('./../utils');

describe('Tests for "me" query', () => {

    describe('Tests with a charity account', () => {
        let account;
        beforeEach(async () => {
            account = new TestAccount(app);
            await account.signupCharity();
            await account.login();
        });
        afterEach(async () => {
            await account.delete();
            account.closeAgent();
        });

        it('should successfully get email, uid about currently logged in charity', async () => {
            const query = `{ me { email uid } }`
            await account.graphql(query, (res) => {
                expect(res.body.errors).to.be.undefined;
                expect(res.body.data.me.email).to.equal(account.info.email);
                expect(res.body.data.me.uid).to.equal(account.info.uid);
            })
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
            await account.delete();
            account.closeAgent();
        });

        it('should successfully fetch email, uid about currently logged in user', async () => {
            const query = `{ me { email uid } }`;
            await account.graphql(query, (res) => {
                expect(res.body.errors).to.be.undefined;
                expect(res.body.data.me.email).to.equal(account.info.email);
                expect(res.body.data.me.uid).to.equal(account.info.uid);
            })
        });

        it('should successfully fetch the name of the currently logged in user', async () => {
            const query = '{ me { name } }';
            await account.graphql(query, (res) => {
                expect(res.body.errors).to.be.undefined;
                const me = res.body.data.me;
                expect(me.name).to.be.equal(account.info.first_name + " " + account.info.last_name);
            })
        })
    });

});