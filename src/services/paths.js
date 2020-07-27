const getAll = process.env.REACT_APP_BASE_CONTEXT;

const getDetails = process.env.REACT_APP_SPECIE_CONTEXT;

export const getPokemon = () => `${getAll}?limit=8`;

export const getDetail = (name) => `${getDetails}/${name}`;



