import { gql } from 'apollo-boost';


const getMeQuery = gql`{
    me {
        name
    }
}`


export { getMeQuery };