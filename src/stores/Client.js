import { observable } from 'mobx'

class Client {

    @observable id
    @observable name
    @observable email
    @observable firstContact
    @observable emailType
    @observable sold = false
    @observable owner
    @observable country
}

export default Client