import {
    GET_ALL_POKEMON_LOADING,
    GET_ALL_POKEMON_SUCCESS,
    GET_ALL_POKEMON_FAIL,
    GET_MORE_POKEMON_LOADING,
    GET_MORE_POKEMON_SUCCESS,
    GET_MORE_POKEMON_FAIL,
    GET_POKEMON_DETAILS_LOADING,
    GET_POKEMON_DETAILS_SUCCESS,
    GET_POKEMON_DETAILS_FAIL,
} from "store/actions/pokemonAction";

const initState = {
    getAll: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    },
    getMore: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    },
    getDetails: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    }
}

const PokemonReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMON_LOADING: return {
            ...state,
            getAll: {
                ...state.getAll,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case GET_ALL_POKEMON_SUCCESS: return {
            ...state,
            getAll: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload.result,
            }
        }
        case GET_ALL_POKEMON_FAIL: return {
            ...state,
            getAll: {
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload.result,
            }
        }

        case GET_MORE_POKEMON_LOADING: return {
            ...state,
            getMore: {
                ...state.getAll,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case GET_MORE_POKEMON_SUCCESS: return {
            ...state,
            getMore: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload.result,
            }
        }
        case GET_MORE_POKEMON_FAIL: return {
            ...state,
            getMore: {
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload.result,
            }
        }

        case GET_POKEMON_DETAILS_LOADING: return {
            ...state,
            getDetails: {
                ...state.getAll,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case GET_POKEMON_DETAILS_SUCCESS: return {
            ...state,
            getDetails: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload.result,
            }
        }
        case GET_POKEMON_DETAILS_FAIL: return {
            ...state,
            getDetails: {
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload.result,
            }
        }
        default: return state;
    }
};

export default PokemonReducer;