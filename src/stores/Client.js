import { observable, computed, action } from 'mobx'

class Client {
	@observable name = ''
	@observable surname = ''
	@observable email = ''
	@observable country = ''
	@observable owner = ''

	@observable client = ''
	@observable transfer = ''
	@observable emailtype = ''

	@observable inputData = [
		{ label: 'First Name', name: 'name' },
		{ label: 'Surname', name: 'surname' },
		{ label: 'Email', name: 'email', type: 'email' },
		{ label: 'Country', name: 'country' }
	]

	@computed get fullName() {
		if (!this.name || !this.surname) {
			return null
		}
		return `${this.name} ${this.surname}`
	}

	@action handleInput = (name, value) => {
		this[name] = value
	}
}

export const client = new Client()
