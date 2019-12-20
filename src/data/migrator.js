const clients = require('./data.json')
const Sequelize = require('sequelize')
const moment = require('moment')
const db = new Sequelize('mysql://root:@localhost/crm_project')

const checkExistence = async (table, uniqueField, fieldValue) => {
	const query = `SELECT id FROM ${table} WHERE ${uniqueField} = "${fieldValue}"`
	try {
		let results = await db.query(query)
		return results[0][0]
	} catch (err) {
		return false
	}
}

const addEmployee = async name => {
    let exists = await checkExistence("employee", "name", name)
	if (exists) {
		console.log(`employee "${name}" already exists, id: ${exists.id}`)
		return exists.id
    }
    try {
		const query = `INSERT INTO employee VALUES(null, "${name}")`
		let result = await db.query(query)
		console.log(`employee "${name}" created successfuly with id ${result[0]}`)
		return result[0]
	} catch (err) {
		console.log(err)
		console.log(`error creating employee ${name}`)
	}
}

const addClient = async (client) => {
    let exists = await checkExistence("client", "email", client.email)
    if (exists) {
		console.log(`client "${client.name}" already exists, id: ${exists.id}`)
		return exists.id
    }
    try {
		let date = moment(client.firstContact).format("YYYY-MM-DD")
		let sold = client.sold? 1 : 0
		const query = `INSERT INTO client VALUES(null, "${client.name}", "${client.email}", "${date}", "${client.emailType}", "${sold}", "${client.owner}", "${client.country}")`
		let result = await db.query(query)
		console.log(`client "${client.name}" created successfuly with id ${result[0]}`)
		return result[0]
	} catch (err) {
		console.log(err)
		console.log(`error creating client ${client.name}`)
	}
    
}

const addEntries = async clients => {
    for (let client of clients) {
        let employeeName = client.owner
        await addEmployee(employeeName)
        await addClient(client)
    }
}

addEntries(clients)

