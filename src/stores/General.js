import { observable, computed, action } from 'mobx'

class General {
    @observable firstName
    @observable surName
    
    @observable send

    @computed get fullName() {
        return `${this.firstName} ${this.surName}`
    }
}

export const general = new General() 