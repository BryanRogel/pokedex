import React from 'react';

function PokemonStats({ pokemonData }){
    return(
        <tbody>
            { pokemonData.stats.map((pokemonStats, index) => (
                <tr key={index} id={index}>
                    <th>
                        {
                            pokemonStats.stat.name === "hp" ?
                            pokemonStats.stat.name.toUpperCase() :
                            pokemonStats.stat.name.replace(/\b\w/g, l => l.toUpperCase()).replace("-", " ") 
                        }
                    </th>
                    <td>{ pokemonStats.base_stat }</td>
                </tr>
            ))}
        </tbody>
    );
}

export default PokemonStats;