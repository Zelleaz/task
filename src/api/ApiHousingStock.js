import {Api} from "./api";
import axios from "axios";

export class ApiHousingStock extends Api {
    url = this.baseUrl + '/HousingStock'

    async createClient({ Name, Phone, Email, BindId }) {
        const { data } = await axios.post(`${this.url}/client`, {
            Name,
            Phone,
            Email,
            BindId
        })
        return data
    }

    async getClients(addressId) {
        const { data } = await axios.get(`${this.url}/clients`, {
            params: { addressId }
        })
        return data
    }

    async bindClient({ AddressId, ClientId }) {
        const { data } = await axios.put(`${this.url}/bind_client`, {
            AddressId,
            ClientId
        })
        return data
    }

    async unBindClient(id) {
        const { data } = await axios.delete(`${this.url}/bind_client/id`)
        return data
    }
}

export default new ApiHousingStock()