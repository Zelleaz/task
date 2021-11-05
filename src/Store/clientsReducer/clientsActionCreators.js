import {SET_CLIENTS, SET_CLIENTS_LOADING} from "./types";
import ApiHousingStock from "../../api/ApiHousingStock";

export const ClientsActionCreators = {
    fetchClients(flatId) {
        return async (dispatch) => {
            dispatch(this.setLoading(true))
            const clients = await ApiHousingStock.getClients(flatId)
            if (Array.isArray(clients)) {
                dispatch(this.setClients(clients?.reverse()))
            }
            dispatch(this.setLoading(false))
        }
    },

    setClients(clients) {
        return {
            type: SET_CLIENTS,
            payload: clients
        }
    },

    setLoading(loading) {
        return {
            type: SET_CLIENTS_LOADING,
            payload: loading
        }
    }
}