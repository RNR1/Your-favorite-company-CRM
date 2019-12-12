import { observable, computed, action } from 'mobx'
import Client from './Client'
const data = require('../data/data.json')
const API_URL = 'http://localhost:8020'

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

    @action getClientsFromDB = () => {
        this._clients = data
    }
}

export const clients = new Clients()