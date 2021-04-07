const Pokemon = require('../Database/models/Pokemon');
const Trainer = require('../Database/models/Trainer');

const PokemonResolver = {
    Query: {
        pokemons(_,{generation , is_legendary, type1, type2, abilities}){
            const params = {};
            if(generation){
                params.generation = generation;
            }
            if(is_legendary){
                params.is_legendary = is_legendary;
            }
            if(type1){
                params.type1 = type1;
            }
            if(type2){
                params.type2 = type2;
            }
            if(abilities){
                params.abilities = abilities;
            }
            return Pokemon.find(params).limit(10);
        },
        trainer(_,{name}){
            const params = {};
            params.name = name;
            return Trainer.findOne(params).populate('pokemons');
        }
    },
    Mutation: {
        createTrainer(_, {trainer}){
            const newTrainer = new Trainer(trainer);
            return newTrainer.save();
        }
    }
}
module.exports = PokemonResolver;