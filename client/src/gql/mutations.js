import {gql} from 'apollo-boost';

const loginMutation = gql`
mutation Login($email: String!, $password: String!){
    login(email: $email password: $password) {
        first_name
        last_name
    }     
}`

export {loginMutation};