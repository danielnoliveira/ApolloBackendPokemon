require('dotenv').config();
const mongoose = require('mongoose');
const {ApolloServer} = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers/PokemonResolver');

const {dbUri, dbOptions} = require('../src/Database/config');

mongoose
    .connect(dbUri, dbOptions)
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Databased failed: ", error));

const server = new ApolloServer({typeDefs, resolvers});

server
    .listen()
    .then(({url}) => console.log(`Servidor pronto em ${url}`))
    .catch( err => console.log(err));

