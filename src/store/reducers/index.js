import { combineReducers } from 'redux';

import pokemonReducer from 'store/reducers/pokemonReducer';
const rootReducer = combineReducers({
  pokemonReducer,
});

export default rootReducer;
