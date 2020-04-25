require('dotenv').config({
    path: '.env.test'
});

const app = require('../../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const Fakerator = require('fakerator');
const fakerator = Fakerator();

chai.use(chaiHttp);
const expect = chai.expect;

// to be skipped for now
describe.skip('Tests for "signupUser" mutation', () => {
    it('should successfully sign up with a new account details', () => {
        const test = {
            first_name: fakerator.names.firstName(),
            last_name: fakerator.names.lastName(),
            email: fakerator.internet.email(),
            password: fakerator.internet.password(14),
            dob: "1990-09-19"
        }
        const query = `mutation {
                            signup(first_name: "${test.first_name}"
                                last_name: "${test.last_name}"
                                email: "${test.email}"
                                password: "${test.password}"
                                dob: "${test.dob}") {
                                first_name
                            }
                        }`;
        return chai.request(app)
            .post('/graphql')
            .send({
                query: query
            })
            .then((res) => {
                expect(res.body.errors).to.be.undefined;
                expect(res.body.data.signup.first_name).to.be.equal(test.first_name);
            })
            .catch((err) => {
                throw err
            })
    });
});