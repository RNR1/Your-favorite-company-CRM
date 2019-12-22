const Sequelize = require('sequelize')
const db = new Sequelize(process.env.JAWSDB_URL, {
	dialect: 'mysql'
})
const validator = require('validator')
class Helpers {
	queryErrorHandler(query, errMessage) {
		if (!query[0].length) {
			throw new Error(errMessage)
		}
	}

	invalidInput(client) {
		let requiredFields = ['name', 'email', 'owner', 'country']
		return requiredFields.some(i => !client[i])	
	}

	handleInvalidInput(inputs) {
		if (this.invalidInput(inputs)) {
			throw new Error('All fields are required')
		} 
		if (!validator.isEmail(inputs.email)) {
			throw new Error('must provide a valid email')
		}
	}

	async queryClientByName(clientName) {
		return await db.query(`SELECT id FROM client WHERE name = "${clientName}"`)
	}

	async checkClientExistence(clientName) {
		let exists = await this.queryClientByName(clientName)
		this.queryErrorHandler(exists, 'User not found')
	}

	async validateEmailDuplications(query, email) {}
}

module.exports = new Helpers()
