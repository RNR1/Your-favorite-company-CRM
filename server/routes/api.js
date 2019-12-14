const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const moment = require('moment')
const db = new Sequelize('mysql://root:@localhost/crm_project')


router.get(`/clients`, async (req, res) => {
    try {
        let customers = await db.query(`SELECT * FROM client ORDER BY name ASC, owner ASC`)
        res.send(customers[0])
    } catch(err) {
        console.log(err)
    }
})

router.get(`/employees/top3`, async (req, res) => {
    try {
        let employees = await db.query(`SELECT owner AS employee, COUNT(sold) AS sold FROM client GROUP BY owner ORDER BY sold DESC LIMIT 3`)
        console.log(employees[0])
        res.send(employees[0])
    } catch(err) {
        console.log(err)
    }
})

router.get(`/sales/country`, async (req, res) => {
    try {
        let results = await db.query(`SELECT country, COUNT(sold) AS sales FROM client GROUP BY country`)
        console.log(results[0])
        res.send(results[0])
    } catch(err) {
        console.log(err)
    }
})

router.post(`/client`, async (req, res) => {
    try {
        let client = req.body
        let date = moment().format('YYYY-MM-DD')
        await db.query(`INSERT INTO client VALUES (null, "${client.name}", "${client.email}", "${date}", null, 0, "${client.owner}", "${client.country}")`)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
    res.send("OK!")
})

router.put(`/update/transfer`, async (req, res) => {
    try {
        let clientName = req.body.client
        let newOwner = req.body.futureOwner
        let exists = await db.query(`SELECT id FROM client WHERE name = "${clientName}"`)
        if (!exists[0].length) {
            throw new Error(`Bad request: user/owner not found`)
        }
        await db.query(`UPDATE client SET owner = "${newOwner}" WHERE name = "${clientName}"`)
        res.send('OK!')
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})

router.put(`/update/send-email`, async (req, res) => {
    try {
        let clientName = req.body.client
        let emailType = req.body.emailType
        let exists = await db.query(`SELECT id FROM client WHERE name = "${clientName}"`)
        if (!exists[0].length) {
            throw new Error(`Bad request: user not found`)
        }
        await db.query(`UPDATE client SET email_type = "${emailType}" WHERE name = "${clientName}"`)
        res.send('OK!')
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})

router.put(`/update/sold`, async (req, res) => {
    try {
        let clientName = req.body.client
        let exists = await db.query(`SELECT id, sold FROM client WHERE name = "${clientName}"`)
        if (!exists[0].length) {
            throw new Error(`Bad request: user not found`)
        }
        await db.query(`UPDATE client SET sold = 1 WHERE name = "${clientName}"`)
        res.send(`OK!`)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})

module.exports = router