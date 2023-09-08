const graphiql = require('graphql');
const _ = require('lodash');
const MongooseSignUpSchema = require('../model/mongoSchemas');
const { Logins } = require('../model/mongoSchemas');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } = graphiql;

//Dummy Data
// let Users = [
//     {name: 'Olalekan', email: 'yayeni77@gmail.com', username: 'talooo', password: 'a03jkkj1rj', id: '01'},
//     {name: 'Elalean', email: 'ayeni77@gmail.com', username: 'zalooo', password: '@hgds23jrj', id: '02'},
//     {name: 'lalekan', email: 'oyeni77@gmail.com', username: 'yalooo', password: '@Oauyrjrj', id: '03'},
//     {name: 'yelekan', email: 'gooyeni77@gmail.com', username: 'palooo', password: '@Oa0113jrj', id: '04'},
//     {name: 'Oalekan', email: 'oayeni77@gmail.com', username: 'balooo', password: '@03jnb3jrj', id: '05'},
// ]

const SignUpType = new GraphQLObjectType({
    name: 'UserSignUp',
    fields: () => ({
        id: { type: GraphQLString},
        name: { type: GraphQLString},
        email: { type: GraphQLString},
        username: { type: GraphQLString},
        password: { type: GraphQLString}
    })
});
const Login = new GraphQLObjectType({
    name: 'UserLogin',
    fields: () => ({
        id: { type: GraphQLString},
        username: { type: GraphQLString},
        password: { type: GraphQLString}

    })
});

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        usersignup: {
            type: SignUpType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                //code here
            //    return _.find(Users, { id: args.id })
            }
        },
        userlogin: {
            type: Login,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                //code here
            //    return _.find(Users, { id: args.id })
            }
        },
        Users: {
            type: new graphiql.GraphQLList(SignUpType),
            resolve(parent, args){
                return Users;
            }
        }
    }
});


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: SignUpType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString},
                username: { type: GraphQLString},
                password: { type: GraphQLString},
            },
            resolve(parent, args){
                let signUp = new MongooseSignUpSchema({
                    name: args.name,
                    email: args.email,
                    username: args.username,
                    password: args.password
                });
                return signUp.save(); 
            }
        }
    }
})

module.exports= new GraphQLSchema({
    query: RootQueryType,
    mutation: Mutation
})