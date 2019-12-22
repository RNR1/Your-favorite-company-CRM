const Sequelize = require('sequelize')
const db = new Sequelize(process.env.JAWSDB_URL, {
	dialect: 'mysql'
})
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

	handleInvalidInput(input) {
		if (this.invalidInput(input)) {
			throw new Error('All fields are required')
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
