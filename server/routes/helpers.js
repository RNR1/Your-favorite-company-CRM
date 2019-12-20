
const Sequelize = require('sequelize')
const db = new Sequelize('mysql://root:@localhost/crm_project')

class Helpers {
    queryErrorHandler (query, errMessage) {
        if (!query[0].length) {
            throw new Error(errMessage)
        }
    }

    async queryClientByName (clientName) {
        return await db.query(`SELECT id FROM client WHERE name = "${clientName}"`)
    }

    async checkClientExistence(clientName) {
        let exists = await this.queryClientByName(clientName)
        this.queryErrorHandler(exists, 'User not found')
    }
    
}

module.exports = new Helpers()