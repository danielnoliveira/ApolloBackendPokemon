const {gql} = require('apollo-server');

const types = gql`
    type Pokemon {
        abilities: [String],
        against_bug: String
        against_dark: String
        against_dragon: String
        against_electric: String
        against_fairy: String
        against_fight: String
        against_fire: String
        against_flying: String
        against_ghost: String
        against_grass: String
        against_ground: String
        against_ice: String
        against_normal: String
        against_poison: String
        against_psychic: String
        against_rock: String
        against_steel: String
        against_water: String
        attack: String
        base_egg_steps: String
        base_happiness: String
        base_total: String
        capture_rate: String
        classfication: String
        defense: String
        experience_growth:String
        height_m: String
        hp: String
        japanese_name:String
        name: String
        percentage_male: String
        pokedex_number: String
        sp_attack: String
        sp_defense:String
        speed: String
        type1: String
        type2: String
        weight_kg: String
        generation: String
        is_legendary: String
    }

    type Trainer {
        name: String
        pokemons: [Pokemon]
    }
`;

module.exports = types;