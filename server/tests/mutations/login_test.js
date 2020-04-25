require('dotenv').config({
    path: '.env.test'
});

const app = require('../../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

const accountinfo = require('./../utils').accountinfo;

describe.only('Tests for "login" mutation', () => {

    describe('Tests with charity account credentials', () => {
        it('should be able to login with credentials (email, password)', () => {
            chai.request(app)
                .post('/graphql')
                .send({
                    query: `mutation { login(identifier:"${accountinfo.charity.email}" password: "${accountinfo.charity.password}"){ _id }}`
                })
                .then((res) => {
                    expect(res.body.errors).to.be.undefined;
                    expect(res.body.data.login._id).to.be.equal(accountinfo.charity._id);
                })
                .catch((err) => {
                    throw err
                });
        });
        it('should be able to login with credentials (uid, password)', () => {
            return chai.request(app)
                .post('/graphql')
                .send({
                    query: `mutation { login(identifier:"${accountinfo.charity.uid}" password: "${accountinfo.charity.password}"){ _id }}`
                })
                .then((res) => {
                    expect(res.body.errors).to.be.undefined;
                    expect(res.body.data.login._id).to.be.equal(accountinfo.charity._id);
                })
                .catch((err) => {
                    throw err
                });
        });
    });
    describe('Tests with user account credentials', () => {
        it('should be able to login with credentials (email, password)', () => {
            return chai.request(app)
                .post('/graphql')
                .send({
                    query: `mutation { login(identifier:"${accountinfo.user.email}" password: "${accountinfo.user.password}"){ _id }}`
                })
                .then((res) => {
                    expect(res.body.errors).to.be.undefined;
                    expect(res.body.data.login._id).to.be.equal(accountinfo.user._id);
                })
                .catch((err) => {
                    throw err
                });
        });
        it('should be able to login with credentials (uid, password)', () => {
            return chai.request(app)
                .post('/graphql')
                .send({
                    query: `mutation { login(identifier:"${accountinfo.user.uid}" password: "${accountinfo.user.password}"){ _id }}`
                })
                .then((res) => {
                    expect(res.body.errors).to.be.undefined;
                    expect(res.body.data.login._id).to.be.equal(accountinfo.user._id);
                })
                .catch((err) => {
                    throw err
                });
        });
    });

    it('should fail to login with non-existent identifier', () => {
        return chai.request(app)
            .post('/graphql')
            .send({
                query: 'mutation { login(identifier:"aklemdlkasmdksmd" password: "invalidpassword"){ _id }}'
            })
            .then((res) => {
                expect(res.body.errors).not.to.be.undefined;
                expect(res.body.errors[0].message).to.be.equal("Account doesn't exist. Why not sign up for one?");
            })
            .catch((err) => {
                return err;
            });
    });
    it('should fail to login with existent email but wrong password', () => {
        return chai.request(app)
            .post('/graphql')
            .send({
                query: `mutation { login(identifier:"${accountinfo.user.email}" password: "invalidpassword"){ _id }}`
            })
            .then((res) => {
                expect(res.body.errors).not.to.be.undefined;
                expect(res.body.errors[0].message).to.be.equal("You've entered the wrong password");
            })
            .catch((err) => {
                throw err;
            });
    });
})