import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import { connect } from 'react-redux';

import PokemonImage from '../pokemonImage/PokemonImage';
import PokemonType from '../pokemonType/PokemonType';

function PokemonDetail ({ pokemonData, data }) {

  const [ showValue, setShowValue ] = useState(false);

  useEffect(() => {
    setTimeout(function() {
      setShowValue(true);
  }, 125);
  }, []);

  const nameStat = [];

  const statsData = [];

  pokemonData && pokemonData.stats && pokemonData.stats.forEach((item) => {
    statsData.push(item.base_stat)
    nameStat.push(item.stat.name === "hp"
    ? item.stat.name.toUpperCase()
    : item.stat.name.replace(/\b\w/g, l => l.toUpperCase()).replace("-", " "))
  })

  const series = [{
    name: 'Stats',
    data: statsData,
  }]
  const options = {
    chart: {
      toolbar: {
        show: false
      },
      type: 'radar',
    },
    xaxis: {
      categories: nameStat,
      labels: {
        show: true,
        style: {
          colors: "#000000",
          fontSize: "11px",
          fontWeight: 'bold',
          fontFamily: 'Arial'
        }
      }
    }
  }

  const oneDescription = (descriptionData) => {
    let oneDes = true;
    let description = '';
    descriptionData && descriptionData.flavor_text_entries && descriptionData.flavor_text_entries.length > 0
    && descriptionData.flavor_text_entries.forEach(item => {
      while (item.language.name === "en" && oneDes){
        oneDes = false;
        return (description = item.flavor_text.replace(/\n/g, " ").replace(/\f/g, " "))
      }
    })
    return description;
  }

  const calcWeight = (value) => {
    return (value/10);
  }

  const calcHeight = (value) => {
    return (value*10);
  }

  return(
    <Style>
      {showValue &&
        <div className="center">
          <section className="pokemon-image">
            <PokemonImage pokemonData={pokemonData} heightData="250px" />
          </section>
          <div className="pokemon-data">
            <h1 className="card-name">{pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1)}</h1>
            <div className="pokemon-type">
              <PokemonType pokemonData={pokemonData} />
            </div>
            <section>
              <title>Description:</title>
              <div className="description">{ oneDescription(data) }</div>
              <div className="info">
                <div className="info-data">
                  <title> Height: </title>
                  <div>{calcHeight(pokemonData.height && pokemonData.height)} cm</div>
                </div>
                <h4 className="info-data">
                  <title> Weight: </title>
                  <div>{calcWeight(pokemonData.weight && pokemonData.weight)} kg</div>
                </h4>
              </div>
              <title>Stats:</title>
                <ReactApexChart options={options} series={series} type="radar" height={250} style={{ margin: '-30px 0' }}/>
            </section>
          </div>
        </div> 
      }
    </Style> 
  );
}

const Style = styled.div`
min-height: 485px;
title {
  display: block;
  font-weight: 700;
  font-size: 22px;
}
.pokemon-image{
  width: auto;
  display: flex;
  align-items: center;
}
.pokemon-data{
  width: 75%;
}
.description {
  margin-bottom: 10px;
  font-size: 14px;
}
.more-data{
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
}
.info {
    display: flex;
    justify-content: space-between;
}
.info-data {
  margin: 1em 0 0 1em;
  flex: 1 0;
    div {
    font-size: 14px;
  }
}
.pokemon-type{
  display: inline-block;
  margin-top: 40px;
}
.card-type{
  margin: -10px 10px !important;
}
.center {
  justify-content: center;
  align-items: center;
  display: flex;
}
@media (max-width: 575px){
  .card-type {
    margin: 0px 3px !important;
  }
}
@media (max-width: 550px) {
  .center {
    display: block; 
  }
  .pokemon-image, .pokemon-data {
    display: contents;
  }
}
`;

const mapStateToProps = (state) => ({
  data: state.pokemonReducer.getDetails.data,
  isLoading: state.pokemonReducer.getDetails.isLoading,
  isSuccess: state.pokemonReducer.getDetails.isSuccess,
  isError: state.pokemonReducer.getDetails.isError,
})


export default connect( mapStateToProps, null )(PokemonDetail);