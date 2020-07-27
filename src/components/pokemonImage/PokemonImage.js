import React from 'react';
import SetIdNumber from '../../functions/setIdNumber/SetIdNumber';

function PokemonImage({ pokemonData, heightData }){
    return(
        <img style={{ height: heightData }} loading="lazy"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${ SetIdNumber(pokemonData.id) }.png`}
            alt={pokemonData.name}
        />
    )
}

export default PokemonImage;