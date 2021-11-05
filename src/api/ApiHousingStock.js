import {Api} from "./api";
import axios from "axios";

class ApiHousingStock extends Api {
    url = this.baseUrl + '/HousingStock'

    async createClient({ Name, Phone, Email }) {
        const { data } = await axios.post(`${this.url}/client`, {
            Name,
            Phone,
            Email,
        })
        return data
    }

    async get({streetId, houseId}) {
        const { data } = await axios.get(`${this.url}`, {
            params: { streetId, houseId }
        })
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
        const response = await axios.delete(`${this.url}/bind_client/${id}`)
        return response.data
    }

    async createAndBindClient({ Name, Phone, Email, AddressId }) {
        const { id } = await this.createClient({Name, Phone, Email})
        const res = await this.bindClient({ AddressId, ClientId: id })
        return res
    }
}

export default new ApiHousingStock()