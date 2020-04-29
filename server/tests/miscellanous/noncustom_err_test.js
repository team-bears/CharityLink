require('dotenv').config({
    path: '.env.test'
});

const app = require('../../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

it('should obtain non-custom GQL errors thrown without being formatted', async () => {

    // An empty query, should be invalid
    const invalidquery = `{}'; `

    const res = await chai.request(app)
        .post('/graphql')
        .send({
            query: invalidquery
        });
    const errors = res.body.errors;
    expect(errors).not.to.be.undefined;

    // now to ensure that the error isn't a custom error
    expect(errors[0].type).to.be.undefined;
    expect(errors[0].message.startsWith("Syntax Error")).to.be.true;
});