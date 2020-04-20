require('dotenv').config({
    path: '.env.test'
});

const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

const credentials = require('./utils').credentials;

describe('Logout user test', () => {
    let agent;
    beforeEach(() => {
        agent = chai.request.agent(app);
    })

    afterEach(() => {
        agent.close();
    })
    it('should successfully obtain currently logged in user\'s details', () => {
        return agent.post('/graphql')
            .send({
                query: `mutation { login(email:"${credentials.user.email}" password: "${credentials.user.password}"){ first_name }}`
            })
            .then((res) => {
                expect(res.body.errors).to.be.undefined;
                return agent.post('/graphql')
                    .send({
                        query: `{ me { first_name last_name email}}`
                    })
                    .then((res) => {
                        expect(res.body.errors).to.be.undefined;
                        expect(res.body.data.me.first_name).to.be.equal(credentials.user.first_name);
                        expect(res.body.data.me.last_name).to.be.equal(credentials.user.last_name);
                        expect(res.body.data.me.email).to.be.equal(credentials.user.email);
                    })
                    .catch((err) => {
                        throw err
                    })
            })
            .catch((err) => {
                throw err
            });
    });
});