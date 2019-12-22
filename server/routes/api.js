const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
// const db = new Sequelize(process.env.DATABASE_URL || 'mysql://root:@localhost/crm_project')
const db = new Sequelize(process.env.DATABASE_URL, {
	dialect:  'postgres',
	protocol: 'postgres'
  })
const moment = require('moment')
const H = require('./helpers')

router.get(`/clients`, async (req, res) => {
	try {
		let customers = await db.query(
			`SELECT * FROM client ORDER BY name ASC, owner ASC`
		)
		res.send(customers[0])
	} catch (err) {
		console.log(err)
	}
})

router.get(`/employees/top3`, async (req, res) => {
	try {
		let employees = await db.query(
			`SELECT owner AS employee, COUNT(sold) AS sold FROM client GROUP BY owner ORDER BY sold DESC LIMIT 3`
		)
		res.send(employees[0])
	} catch (err) {
		console.log(err)
	}
})

router.get(`/sales/country`, async (req, res) => {
	try {
		let results = await db.query(
			`SELECT country, COUNT(sold) AS sales FROM client GROUP BY country`
		)
		res.send(results[0])
	} catch (err) {
		console.log(err)
	}
})

router.post(`/client`, async (req, res) => {
	try {
		let client = req.body
		let date = moment().format('YYYY-MM-DD')
		await db.query(
			`INSERT INTO client VALUES (null, "${client.name}", "${client.email}", "${date}", null, 0, "${client.owner}", "${client.country}")`
		)
	} catch (err) {
		console.log(err)
		res.send(err)
	}
	res.send('OK!')
})

router.put(`/update/transfer`, async (req, res) => {
	let clientName = req.body.client
	let newOwner = req.body.futureOwner
	try {
		await H.checkClientExistence(clientName)
		await db.query(
			`UPDATE client SET owner = "${newOwner}" WHERE name = "${clientName}"`
		)
		res.send(`${clientName}'s new owner is ${newOwner}`)
	} catch (err) {
		res.status(400).json({
			message: err.message
		})
	}
})

router.put(`/update/send-email`, async (req, res) => {
	let clientName = req.body.client
	let emailType = req.body.emailType
	try {
		await H.checkClientExistence(clientName)
		await db.query(
			`UPDATE client SET email_type = "${emailType}" WHERE name = "${clientName}"`
		)
		res.send(`Email ${emailType} succesfully sent to ${clientName}`)
	} catch (err) {
		res.status(400).json({
			message: err.message
		})
	}
})

router.put(`/update/sold`, async (req, res) => {
	try {
		let clientName = req.body.client
		await H.checkClientExistence(clientName)
		await db.query(`UPDATE client SET sold = 1 WHERE name = "${clientName}"`)
		res.send(`New sale for ${clientName}!`)
	} catch (err) {
		res.status(400).json({
			message: err.message
		})
	}
})

module.exports = router
