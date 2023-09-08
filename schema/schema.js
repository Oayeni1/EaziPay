const graphiql = require('graphql');
const _ = require('lodash')

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } = graphiql;

//Dummy Data
let Users = [
    {name: 'Olalekan', email: 'yayeni77@gmail.com', username: 'talooo', password: 'a03jkkj1rj', id: '01'},
    {name: 'Elalean', email: 'ayeni77@gmail.com', username: 'zalooo', password: '@hgds23jrj', id: '02'},
    {name: 'lalekan', email: 'oyeni77@gmail.com', username: 'yalooo', password: '@Oauyrjrj', id: '03'},
    {name: 'yelekan', email: 'gooyeni77@gmail.com', username: 'palooo', password: '@Oa0113jrj', id: '04'},
    {name: 'Oalekan', email: 'oayeni77@gmail.com', username: 'balooo', password: '@03jnb3jrj', id: '05'},
]

const SignUp = new GraphQLObjectType({
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
            type: SignUp,
            args: {id: {type: GraphQLString}},
            resolve(parents, args){
                //code here
               return _.find(Users, { id: args.id })
            }
        },
        userlogin: {
            type: Login,
            args: {id: {type: GraphQLString}},
            resolve(parents, args){
                //code here
               return _.find(Users, { id: args.id })
            }
        }
        // Users: {
        //     type: new graphiql.GraphQLList(SignUp),
        //     resolve(parents, args){
        //         return Users;
        //     }
        // }
    }
});

module.exports= new GraphQLSchema({
    query: RootQueryType
})