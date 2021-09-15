import dotenv from 'dotenv'
import express from 'express';
import {join} from 'path';
import {ApolloServer, makeExecutableSchema} from 'apollo-server-express';
import {importSchema} from 'graphql-import';
import resolvers from './resolvers/resolver';
dotenv.config();

const typeDefs = importSchema(join(__dirname, './types/schema.graphql'));
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const config = {
    schema, engine: {
        reportSchema: false ,
            graphVariant: "current"
    }};

const app = express();
const server = new ApolloServer(config);
server.applyMiddleware({app, path: '/graphql'});

app.listen({port: 4500}, () => {
    console.log('Apollo Server on http://localhost:4500/graphql');
});
