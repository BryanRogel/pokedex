import React from 'react';

function PokemonType({ pokemonData }){
    return(
        <div>
            { pokemonData && pokemonData.types.map((pokemonType, index) => ( //Mapping the tipe of the pokemon
                <h3
                    className={`card-type card-${ pokemonType.type.name.toLowerCase()}-type`}
                    key={index}
                    id={index}
                >
                    {pokemonType.type.name.toUpperCase()}
                </h3>
            ))}
        </div>
    );
}

export default PokemonType;