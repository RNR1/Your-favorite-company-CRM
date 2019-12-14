import { observable, computed, action } from 'mobx'

class Client {

    @observable name
    @observable surname
    @observable email
    @observable country
    @observable owner

    @observable client = ''
    @observable transfer = ''
    @observable emailtype = ''

    @computed get fullName() {
        return `${this.name} ${this.surname}`
    }

    @action handleInput = (name, value) => {
        this[name] = value
    }
}

export const client = new Client()