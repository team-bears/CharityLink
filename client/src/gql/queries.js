import {gql} from 'apollo-boost';


const getMeQuery = gql`{
    me {
        first_name
        last_name
    }
}`
 

export {getMeQuery};