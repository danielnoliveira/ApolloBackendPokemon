const {gql} = require('apollo-server');

const mutation = gql`
    type Mutation {
        createTrainer(trainer: TrainerInput): Trainer
    }

    input TrainerInput {
        name: String
        pokemons: [PokemonInput]
    }
    input PokemonInput {
        name: String
    }
`;

module.exports = mutation;