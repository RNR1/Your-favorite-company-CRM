import { observable, computed, action } from 'mobx'
import axios from 'axios'
const data = require('../data/data.json')
const API_URL = 'http://localhost:8020/api'

class Clients {

    @observable _clients = []
    @computed get clients() {
        return this._clients
    }

    @computed get emailTypes() {
        return [...new Set(this._clients.map(c => c.emailType))]
    }

    @computed get owners() {
        return [...new Set(this._clients.map(c => c.owner))]
    }

    @action getClientsFromDB = async () => {
        try {
            let clients = await axios.get(`${API_URL}/clients`)
            console.log(data.data)
            this._clients = clients.data 
        } catch(err) {
            console.log(err)
        }
    }
}

export const clients = new Clients()