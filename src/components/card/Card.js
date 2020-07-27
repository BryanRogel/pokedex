import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import useModal from "../../functions/modal/Modal.js";
import PokemonDetail from '../pokemonDetail/PokemonDetail';
import PokemonImage from '../pokemonImage/PokemonImage';
import PokemonType from '../pokemonType/PokemonType';
import PokemonStats from '../pokemonStats/PokemonStats';
import PokemonHability from '../pokemonHability/PokemonHability';
import { getPokemonDetails } from '../../store/actions/pokemonAction';



const Card = ({ pokemonData, getDetails }) => {
    const { showModal, hideModal, visible } = useModal();
    const [ pokemonModalData, setPokemonModalData ] = useState(null);

    const openModal = (pokemon) => {
        setPokemonModalData(pokemon)
        showModal();
        pokemon && pokemon.name && getDetails(pokemon.name);
    }

    return (
        <Style>
        {/* Pokemon Modal */}
            <PokemonDetail pokemonData={pokemonModalData} visible={visible} hideModal={hideModal} />
                {/* Cards map */}
                {pokemonData && pokemonData.results.map((pokemon, index) => (
                <figure
                    onClick={() => openModal(pokemon)}
                    key={index}
                    id={index}
                    style={{ display: !pokemon.sprites.front_default && 'none' }}
                    className={`card ${ pokemon.types[0].type.name }-type`}
                >
                    <div className="card-image-container">
                        <PokemonImage pokemonData={pokemon} heightData="150px"/>
                    </div>
                    <figcaption className="card-caption">
                        {/* Mapping the types of the pokemon */}
                        <PokemonType pokemonData={pokemon} />
                        <h1 className="card-name">{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
                        <table className="card-stats">
                            <PokemonStats pokemonData={pokemon} />
                        </table>
                        <PokemonHability pokemonData={pokemon} hability={true} />
                    </figcaption>
                </figure>
            ))}
        </Style>
    )
}

const Style = styled.div`
max-width: 1366px;
text-align: center;
display: inline-block;
body {
    text-align: center;
    margin: 20px;
}
.card-image {
    max-height: 150px;
    margin: auto;
    display: inline-block;
}
.card-image[src=""] {
    figure {
        display: none;
    }
}
h1, h2, h3, h4, h5 {
    margin: 0;
    font-weight: 400;
}
.card {
    font-family: 'Open Sans', sans-serif;
    border: 3px solid black;
    display: inline-block;
    width: 300px;
    border-radius: 15px;
    margin: 10px;
    background: #ddd;
    text-align: left;
    box-shadow: 0px 5px 20px -10px #111111;
    position: relative;
    transition: 0.4s;
}
.card-caption {
    border-top: 2px solid black;
    background-color: ghostwhite;
    padding: 1em;
    position: relative;
    border-radius: 0px 0px 12px 12px;
}
.card-image-container {
    text-align: center;
    padding: 1em 1em 0;
}
.card-type {
    border: 2px solid black;
    float: right;
    margin: -0.95em 0px 0px 7px;
    top: 0;
    right: 1em;
    transform: translateY(-50%);
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.15em 0.35em;
    line-height: 1;
    border-radius: 21px;
    background: #bbbbbb;
}
.card-label {
    font-size: 10px;
    text-transform: uppercase;
    display: block;
    margin-bottom: 3px;
}
.card-name {
    margin-top: 14px;
    text-align: center;
    font-size: 1.5em;
    font-weight: 700;
    letter-spacing: 0.02em;
}
.card-stats {
    margin: 1em 0;
    width: 100%;
}
.card-stats th {
    font-weight: 200;
}
.card-stats th, .card-stats td {
    width: 65%;
    padding: 0.25em 0.5em 0;
}
.card-abilities {
    display: flex;
    justify-content: space-between;
}
.card-ability {
    margin: 1em 0 0 1em;
    flex: 1 0;
    div {
        font-size: 8px;
    }
}
.card:hover {
    z-index: 5;
    box-shadow: 0px 13px 30px -15px #000000;
    transform: translateY(-10px);
    cursor: pointer;
}

/* // Colors for cards and types of pokemon */
.normal-type {
    background: linear-gradient(110deg, #A8A878 0%, #5c5c3e 100%);
    box-shadow: 0px 5px 20px -10px #3A1C71;
}
.card-normal-type {
    background-color: #A8A878;
}
.water-type {
    background: linear-gradient(120deg, #1CB5E0 0%, #000851 100%);
    box-shadow: 0px 5px 20px -10px #000851;
}
.card-water-type {
    background-color: #6890F0;
}
.electric-type {
    background: linear-gradient(90deg, #e8ff99 34%, #ffde00 83%);
}
.card-electric-type {
    background-color: #F8D030;
}
.fire-type {
    background: linear-gradient(0deg, #c71800 10%, #fcc245 100%);
}
.card-fire-type {
    background-color: #F08030;
}
.fighting-type {
    background: linear-gradient(120deg, #c03028 0%, #aa362f 56%, #580808 100% );
}
.card-fighting-type {
    background-color: #C03028;
}
.flying-type {
    background: linear-gradient(120deg, #a890f0 0%, #8367d6 48%, #351a87 95%);
}
.card-flying-type {
    background-color: #A890F0;
}
.poison-type {
    background: linear-gradient(120deg, #a040a0 0%, #8a298a 48%, #6b0a6b 95%);
}
.card-poison-type {
    background-color: #A040A0;
}
.ground-type {
    background: linear-gradient(120deg, #e0c068 0%, #83681c 95%);
}
.card-ground-type {
    background-color: #E0C068;
}
.rock-type {
    background: linear-gradient(120deg, #B8A038 0%, #5e4f0e 95%);
}
.card-rock-type {
    background-color: #B8A038;
}
.bug-type {
    background: linear-gradient(120deg, #A8B820 0%, #5d6706 95%);
}
.card-bug-type {
    background-color: #A8B820;
}
.ghost-type {
    background: linear-gradient(120deg, #705898 0%, #1c0541 95%);
}
.card-ghost-type {
    background-color: #705898;
}
.dragon-type {
    background: linear-gradient(120deg, #7038F8 0%, #2a0f6c 95%);
}
.card-dragon-type {
    background-color: #7038F8;
}
.steel-type {
    background: linear-gradient(120deg, #B8B8D0 0%, #424261 95%);
}
.card-steel-type {
    background-color: #B8B8D0;
}
.psychic-type {
    background: linear-gradient(140deg, #ffa7f9 0%, #ff2cc3 39%, #ffe3a7 100%);
}
.card-psychic-type {
    background: #F85888;
}
.dark-type {
    background: linear-gradient(20deg, #191919 0%, #100b32 33%, #5c0249 100%);
}
.card-dark-type {
    background: #705848;
}
.grass-type {
    background: linear-gradient(140deg, #78C850 0%, #509c2b 69%, #2a6c09 100%);
}
.card-grass-type {
    background: #4E8234;
}
.ice-type {
    background: linear-gradient(230deg, #caeaf6 0%, #a0eaf1 46%, #6fb8eb 100%);
}
.card-ice-type {
    background: #98D8D8;
}
.fairy-type {
    background: linear-gradient(45deg, #ffe6f0 0%, #ffc5e0 34%, #ffa6b9 71%, #ff8a95 100%);
}
.card-fairy-type {
    background: #EE99AC;
}
`

const mapDispatchToProps = (dispatch) => ({
    getDetails: (name) => dispatch(getPokemonDetails(name))
})

export default connect( mapDispatchToProps, mapDispatchToProps )(Card);