import axios from "axios";

import { getPokemon, getDetail } from "services/paths";

export const GET_ALL_POKEMON_LOADING = "GET_ALL_POKEMON_LOADING";
export const GET_ALL_POKEMON_SUCCESS = "GET_ALL_POKEMON_SUCCESS";
export const GET_ALL_POKEMON_FAIL = "GET_ALL_POKEMON_FAIL";

export const GET_MORE_POKEMON_LOADING = "GET_MORE_POKEMON_LOADING";
export const GET_MORE_POKEMON_SUCCESS = "GET_MORE_POKEMON_SUCCESS";
export const GET_MORE_POKEMON_FAIL = "GET_MORE_POKEMON_FAIL";

export const GET_POKEMON_DETAILS_LOADING = 'GET_POKEMON_DETAILS_LOADING';
export const GET_POKEMON_DETAILS_SUCCESS = 'GET_POKEMON_DETAILS_SUCCESS';
export const GET_POKEMON_DETAILS_FAIL = 'GET_POKEMON_DETAILS_FAIL';

const getAllPokemonLoading = () => ({ type: GET_ALL_POKEMON_LOADING });
const getAllPokemonSuccess = (payload) => ({ type: GET_ALL_POKEMON_SUCCESS, payload });
const getAllPokemonFail = (payload) => ({ type: GET_ALL_POKEMON_FAIL, payload });

const getMorePokemonLoading = () => ({ type: GET_MORE_POKEMON_LOADING });
const getMorePokemonSuccess = (payload) => ({ type: GET_MORE_POKEMON_SUCCESS, payload });
const getMorePokemonFail = (payload) => ({ type: GET_MORE_POKEMON_FAIL, payload });

const getPokemonDetailsLoading = () => ({ type: GET_POKEMON_DETAILS_LOADING });
const getPokemonDetailsSuccess = (payload) => ({ type: GET_POKEMON_DETAILS_SUCCESS, payload });
const getPokemonDetailsFail = (payload) => ({ type: GET_POKEMON_DETAILS_FAIL, payload });

const getAllData = (response) => async (dispatch) => {
  try {
    if(response){
      const originalData = response.data;
      const saveData = response.data.results;
      let data = [];
      const ids = [];

      response.data.results &&
        response.data.results.length > 0 &&
        response.data.results.forEach((itemData) => {
          ids.push(itemData.url);
        });
      
      if (Array.isArray(ids)) {
        const list = new Set(ids);
        for (const id of [...list]) {
          response = await axios.get(id);
          data.push(response.data);
        }
      }
      const original = [];
      data &&
        data.length > 0 &&
        data.forEach((itemData, index) => {
          original.push({ ...saveData[index], ...itemData });
        });
      const newData = {
        result: {
            ...originalData,
            results: original,
        }
      };
      return newData;
    }
  } catch(error){
    console.log('error in getAllData', error);
  }
}

const getAllPokemon = () => async (dispatch) => {
  dispatch(getAllPokemonLoading());
  try {
    let response = await axios.get(getPokemon());
    let data = [];
    if (response.status === 200) {
      const newData = await dispatch(getAllData(response));
      await dispatch(getAllPokemonSuccess(newData));
    } else {
      data = {
        status: null,
        message: "Error",
        result: [],
      };
      dispatch(getAllPokemonFail(data));
    }
  } catch (error) {
    console.log("error actionAction getAllPokemon", error ? error : error);
    const data = {
      status: null,
      message: "Error",
      result: [],
    };
    dispatch(getAllPokemonFail(data));
  }
  return Promise.resolve();
};

const getMorePokemon = (morePokemon) => async (dispatch) => {
  dispatch(getMorePokemonLoading());
  try {
    let response = await axios.get(morePokemon);
    let data = [];

    if (response.status === 200) {
      const newData = await dispatch(getAllData(response));
      await dispatch(getMorePokemonSuccess(newData));
    } else {
      data = {
        status: null,
        message: "Error",
        result: [],
      };
      dispatch(getMorePokemonFail(data));
    }
  } catch (error) {
    console.log("error actionAction getAllPokemon", error ? error : error);
    const data = {
      status: null,
      message: "Error",
      result: [],
    };
    dispatch(getMorePokemonFail(data));
  }
  return Promise.resolve();
};

const getPokemonDetails = (name) => async (dispatch) => {
  dispatch(getPokemonDetailsLoading());
  try {
    let response = await axios.get(getDetail(name));
    let data = [];
    if (response.status === 200) {
      data = {
        result: {
          ...response.data
        }
      };
      await dispatch(getPokemonDetailsSuccess(data));
    } else {
      data = {
        status: null,
        message: "Error",
        result: [],
      };
      dispatch(getPokemonDetailsFail(data));
    }
  } catch (error) {
    console.log("error actionAction getAllPokemon", error ? error : error);
    const data = {
      status: null,
      message: "Error",
      result: [],
    };
    dispatch(getPokemonDetailsFail(data));
  }
  return Promise.resolve();
};

export {
  getAllPokemon,
  getMorePokemon,
  getPokemonDetails
};
