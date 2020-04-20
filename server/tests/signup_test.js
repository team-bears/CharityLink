require('dotenv').config();

const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

// to be skipped for now
describe.skip('User signup test', () => {
    it('should successfully sign up with a new account details', () => {
        return chai.request(app)
            .post('/graphql')
            .send({
                query: 'mutation { signup(email:"bond@gmail.com" password: "FlippityFloop"){ id first_name }}'
            })
            .then((res) => {
                expect(res.body.errors).to.be.undefined;
            })
            .catch((err) => {
                throw err
            })
    });
});