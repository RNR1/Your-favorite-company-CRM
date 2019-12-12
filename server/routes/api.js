const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const db = new Sequelize('mysql://root:@localhost/crm_project')


router.get(`/clients`, async (req, res) => {
    try{
        let customers = await db.query(`SELECT * FROM client`)
        res.send(customers[0])
    } catch(err) {
        console.log(err)
    }
})

router.post(`/client`, async (req, res) => {
    let customer = req.body
    console.log(customer)
})

router.put(`/client`, async (req, res) => {
    let customer = req.body
    console.log(customer)
})

module.exports = router