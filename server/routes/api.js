const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const db = new Sequelize('mysql://root:@localhost/crm_project')


router.get(`/Clients`, async (req, res) => {
    let customers = await db.query('SELECT * FROM clients')
    console.log(customers)
})

router.post(`/Client`, async (req, res) => {
    let customer = req.body
    console.log(customer)
})

router.put(`/Client`, async (req, res) => {
    let customer = req.body
    console.log(customer)
})

module.exports = router