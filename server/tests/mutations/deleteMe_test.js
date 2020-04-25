require('dotenv').config({
    path: '.env.test'
});

const app = require('../../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

const credentials = require('./../utils').credentials;

describe.skip('Tests for deleting an account', () => {});