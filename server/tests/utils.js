const Fakerator = require('fakerator');
const fakerator = Fakerator();

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const accountinfo = {
    user: {
        "_id": "5ea44b2b196b5e741c456d42",
        "followsIds": [],
        "followingIds": [],
        "first_name": "Tester",
        "last_name": "Userman",
        "uid": "Usermannn",
        "profile_picture": "thing.jpeg",
        "email": "TestUser123@gmail.com",
        "dob": "2000-01-28",
        "gender": "Male",
        "password": "TestUser123!",
        "__v": 0
    },
    charity: {
        "_id": "5ea44c7d196b5e741c456d43",
        "followersId": [],
        "followsId": [],
        "uid": "CTA",
        "name": "CharityTestAccount",
        "profile_picture": "profile.jpeg",
        "email": "Charity123@gmail.com",
        "phone": "+441231231231",
        "password": "Charity123!",
        "__v": 0

    }
};

class TestAccount {

    constructor(app, info) {
        this.agent = chai.request.agent(app);
        this.info = info || {}
    }

    async signupCharity(callback, options = {}) {
        this.info = {
            uid: options.uid || fakerator.names.firstName(),
            name: options.name || fakerator.company.name(),
            profile_picture: options.profile_picture || "profile.jpeg",
            email: options.email || fakerator.internet.email(),
            phone: options.phone || fakerator.phone.number(),
            password: options.password || (fakerator.internet.password(8) + "Ab123!"),
            __typename: "Charity"
        }

        const query = `mutation{
            signupCharity(
              uid: "${this.info.uid}"
              name: "${this.info.name}"
              profile_picture: "${this.info.profile_picture}"
              email: "${this.info.email}"
              phone: "${this.info.phone}"
              password: "${this.info.password}"
              confirm_password: "${this.info.password}"
            ){
              _id
              email
            }
        }`;

        await this.graphql(query, callback)
    }

    async signupUser(callback, options = {}) {
        this.info = {
            uid: options.uid || fakerator.names.firstName(),
            name: options.name || fakerator.company.name(),
            profile_picture: options.profile_picture || "profile.jpeg",
            email: options.email || fakerator.internet.email(),
            phone: options.phone || fakerator.phone.number(),
            password: options.password || (fakerator.internet.password(8) + "Ab123!"),
            __typename: "User"
        }
        const query = `mutation{
            signupUser(
              first_name: "${this.info.first_name}"
              last_name: "${this.info.last_name}"
              uid: "${this.info.uid}"
              profile_picture: "${this.info.profile_picture}"
              email: "${this.info.email}"
              password: "${this.info.password}"
              confirm_password: "${this.info.password}"
              dob: "${this.info.dob}"
              gender: "${this.info.gender}"
            ){
              _id
              email
            }
          }`;

        await this.graphql(query, callback)
    }

    async login(callback, identifier = this.info.email, password = this.info.password) {
        const query = `mutation {
            login(
                identifier: "${identifier}"
                password: "${password}"
            ){
                _id
                email
                uid
            }
        }`;
        await this.graphql(query, callback);
    }
    async graphql(query, callback) {
        await this.agent.post('/graphql')
            .send({
                query: query
            })
            .then((res) => {
                if (callback) {
                    callback(res);
                }
            })
            .catch((err) => {
                throw err;
            });
    }

    async delete(callback) {
        const query = `mutation { deleteMe }`
        await this.graphql(query, callback);
    }

    async logout(callback) {
        const query = `mutation { logout }`;
        await this.graphql(query, callback);
    }

    async closeAgent() {
        this.agent.close();
    }
}

module.exports = {
    TestAccount,
    accountinfo
}