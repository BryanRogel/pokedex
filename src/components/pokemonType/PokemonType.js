import React from 'react';

function PokemonType({ pokemonData }){
    return(
        <>
            { pokemonData.types.map((pokemonType, index) => (
                <h3
                    className={`card-type card-${ pokemonType.type.name.toLowerCase()}-type`}
                    key={index}
                    id={index}
                >
                    {pokemonType.type.name.toUpperCase()}
                </h3>
            ))}
        </>
    );
}

export default PokemonType;