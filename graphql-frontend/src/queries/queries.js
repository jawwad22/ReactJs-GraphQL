import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorid: ID!){
        addBook(name: $name, genre: $genre, authorid: $authorid){
            name
            id
        }
    }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation };