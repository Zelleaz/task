import {Api} from "./api";
import axios from "axios";

class ApiRequest extends Api {
    url = this.baseUrl + '/Request'

    async getStreets() {
        const { data } = await axios.get(`${this.url}/streets`)
        return data
    }

    async getHouses(streetId) {
        const { data } = await axios.get(`${this.url}/houses/${streetId}`)
        return data
    }

    async getHouseFlats(houseId) {
        const { data } = await axios.get(`${this.url}/house_flats/${houseId}`)
        return data
    }
}

export default new ApiRequest()

