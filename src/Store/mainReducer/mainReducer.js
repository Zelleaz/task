import {SET_HOUSE, SET_HOUSE_FLAT, SET_STREET} from "./types";

const initialState = {
    street: {
        id: 0,
        name: ''
    },
    house: {
        id: 0,
        name: ''
    },
    flat: {
        id: 0,
        name: ''
    },
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STREET:
            return {
                ...state,
                street: action.payload
            }
        case SET_HOUSE:
            return {
                ...state,
                house: action.payload
            }
        case SET_HOUSE_FLAT:
            return {
                ...state,
                flat: action.payload
            }
        default: return state
    }
}