const graphql = require('graphql');
const _ = require('lodash')

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//dummy Data
var books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'Name of the Wind2', genre: 'Fantasy2', id: '2' },
    { name: 'Name of the Wind3', genre: 'Fantasy3', id: '3' },
]

// book(id:"123"){
//     name,
//     genre
// }
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                //code to get data from db ohher soruces
                return _.find(books, { id: args.id });
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})