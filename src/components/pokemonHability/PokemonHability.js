import React from 'react';

function PokemonHability({ pokemonData, hability }){

    let pokemonAbilityData = 0; // Count the abilities of the pokemon for select the first ability because need show a ability unique

    const setAbility = () => {
        pokemonAbilityData++; // Add to accountant
    }

    return(
        <div className="card-abilities">
            { pokemonData && pokemonData.abilities.map((pokemonAbility, index) => ( //Mapping the abilities of the pokemon
                ((pokemonAbilityData===0 && !pokemonAbility.is_hidden) || pokemonAbility.is_hidden) &&
                <h4 className="card-ability" key={index} id={index}>
                    <span className="card-label"> { pokemonAbility.is_hidden ? "Hidden Ability" : "Ability" } </span>
                    <div>{ pokemonAbility.ability.name.replace(/\b\w/g, l => l.toUpperCase()).replace("-", " ")  }</div>
                    {hability && pokemonAbility.is_hidden ===false && setAbility()}
                </h4>
            ))}
        </div>
    );
}

export default PokemonHability;