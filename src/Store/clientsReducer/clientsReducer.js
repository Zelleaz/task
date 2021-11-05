import {SET_CLIENTS, SET_CLIENTS_LOADING} from "./types";

const initialState = {
    clients: [],
    isLoading: false
}

export const clientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLIENTS:
            return {
                ...state,
                clients: action.payload
            }
        case SET_CLIENTS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default: return state
    }
}