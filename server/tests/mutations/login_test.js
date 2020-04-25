require('dotenv').config({
    path: '.env.test'
});

const app = require('../../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

const credentials = require('./../utils').credentials;

describe.skip('Tests for "login" mutation', () => {
    it('should successfully login with test user account details', () => {
        return chai.request(app)
            .post('/graphql')
            .send({
                query: `mutation { login(email:"${credentials.user.email}" password: "${credentials.user.password}"){ first_name }}`
            })
            .then((res) => {
                expect(res.body.errors).to.be.undefined;
                expect(res.body.data.login.first_name).to.be.equal(credentials.user.first_name);
            })
            .catch((err) => {
                throw err
            })
    });

    it('should fail to login with non-existent email', () => {
        return chai.request(app)
            .post('/graphql')
            .send({
                query: 'mutation { login(email:"invalidemail" password: "invalidpassword"){ id first_name }}'
            })
            .then((res) => {
                expect(res.body.errors).not.to.be.undefined;
                expect(res.body.errors[0].message).to.be.equal('no matching user');
            })
            .catch((err) => {
                return err;
            });

    });
    it('should fail to login with existent email but wrong password', () => {
        return chai.request(app)
            .post('/graphql')
            .send({
                query: `mutation { login(email:"${credentials.user.email}" password: "invalidpassword"){ id first_name }}`
            })
            .then((res) => {
                expect(res.body.errors).not.to.be.undefined;
                expect(res.body.errors[0].message).to.be.equal('no matching user');
            })
            .catch((err) => {
                throw err;
            });
    });
})