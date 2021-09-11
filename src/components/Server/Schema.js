const graphql = require('graphql')
const _ = require('lodash')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLSchema,
    GraphQLInt,
    GraphQLList
} = graphql

var books = [
    { name: 'Narnia', id: '1', genre: 'Fantasy', authorId: '1' },
    { name: 'Harry Potter', id: '2', genre: 'fantasy', authorId: '2' },
    { name: 'A brave new world', id: '3', genre: 'Sci Fi', authorId: '3' },
    { name: 'Some psychedilic scene', id: '4', genre: 'Sci Fi', authorId: '1' },
    { name: 'Order of the phoenix', id: '5', genre: 'Sci Fi', authorId: '2' }
]

var authors = [
    { name: 'JK Rowling', id: '2', book: 'Harry Potter', age: 42 },
    { name: 'Aldous Huxley', id: '3', book: 'A brave new world', age: 56 },
    { name: 'Terry Practhet', id: '1', book: 'Good Omens', age: 66 }
]



const AuthorType = new GraphQLObjectType({

    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        book: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return _.filter(books, { authorId: parent.id })
            }
        }
    })
})

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                console.log(parent)
                return _.find(authors, { id: parent.id })
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({

    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // Code to get data 
                return _.find(books, { id: args.id })
            }
        },


        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(authors, { id: args.id })
            }


        },

        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return books
            }
        },

        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return authors
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})