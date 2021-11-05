import {SET_HOUSE, SET_HOUSE_FLAT, SET_STREET} from "./types";

export const ActionCreators = {
    setStreet: ({ id, name }) => {
        return {
            type: SET_STREET,
            payload: { id, name }
        }
    },

    setHouse: ({ id, name }) => {
        return {
            type: SET_HOUSE,
            payload: { id, name }
        }
    },

    setHouseFlat: ({ id, name, flat }) => {
        return {
            type: SET_HOUSE_FLAT,
            payload: { id, name, flat }
        }
    },
}