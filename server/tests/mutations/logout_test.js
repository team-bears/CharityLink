require('dotenv').config({
    path: '.env.test'
});

const app = require('../../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

const credentials = require('./../utils').credentials;

describe.skip('Tests for "logout" mutation', () => {
    let agent;
    beforeEach(() => {
        agent = chai.request.agent(app);
    })

    afterEach(() => {
        agent.close();
    })
    it('should successfully logout with test user account details', () => {
        return agent.post('/graphql')
            .send({
                query: `mutation { login(email:"${credentials.user.email}" password: "${credentials.user.password}"){ first_name }}`
            })
            .then((res) => {
                expect(res.body.errors).to.be.undefined;
                return agent.post('/graphql')
                    .send({
                        query: `mutation { logout }`
                    })
                    .then((res) => {
                        expect(res.body.errors).to.be.undefined;
                        expect(res.body.data.logout).to.be.true;
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