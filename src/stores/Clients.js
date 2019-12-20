import { observable, computed, action } from 'mobx'
import axios from 'axios'
import moment from 'moment'
const API_URL = 'http://localhost:8020/api'

class Clients {
	@observable _clients = []
	@observable _topEmployees = []
	@observable _salesByCountry = []
	@observable searchInput = ''

	@action handleSearch = value => {
		this.searchInput = value
	}

	@computed get searchResults() {
		return this._clients.filter(c =>
			c.name.toLowerCase().includes(this.searchInput.toLowerCase())
		)
	}

	@computed get clients() {
		return this.searchInput ? this.searchResults : this._clients
	}

	@computed get clientNames() {
		return this._clients.map(c => c.name)
	}

	@computed get owners() {
		return [...new Set(this._clients.map(c => c.owner))]
	}

	@computed get newMonthlyClients() {
		return this._clients.filter(
			c => moment(c.first_contact).format('MM') === moment().format('MM')
		).length
	}

	@computed get emailsSent() {
		return this._clients.filter(c => c.email_type !== 'null').length
	}

	@computed get outstandingClients() {
		return this._clients.filter(c => !c.sold).length
	}

	@computed get hottestCountry() {
		let countries = this._salesByCountry
		let hottestCountry
		let maxValue = 0

		for (let country in countries) {
			if (countries[country].sales > maxValue) {
				maxValue = countries[country].sales
				hottestCountry = countries[country].country
			}
		}
		return hottestCountry
	}

	@computed get thirtyDaysSalesBreakdown() {
		let breakdown = []
		for (let i = 30; i >= 0; i--) {
			let day = moment()
				.subtract(i, 'days')
				.format('MMM-DD')
			breakdown.push({ day, sales: Math.floor(Math.random() * 10) })
		}
		return breakdown
	}

	@action getClientsFromDB = async () => {
		try {
			let clients = await axios.get(`${API_URL}/clients`)
			this._clients = clients.data
		} catch (err) {
			console.log(err)
		}
	}

	@action getTopEmployees = async () => {
		try {
			let topEmployees = await axios.get(`${API_URL}/employees/top3`)
			this._topEmployees = topEmployees.data
		} catch (err) {
			console.log(err)
			return err
		}
	}

	@action getSalesByCountry = async () => {
		try {
			let salesByCountry = await axios.get(`${API_URL}/sales/country`)
			this._salesByCountry = salesByCountry.data
		} catch (err) {
			console.log(err)
			return err
		}
	}

	@action postClient = async client => {
		try {
			await axios.post(`${API_URL}/client`, client)
		} catch (err) {
			console.log(err)
		}
		this.getClientsFromDB()
	}

	@action transferOwnership = async (client, futureOwner) => {
		try {
			let transfer = await axios.put(`${API_URL}/update/transfer`, {
				client,
				futureOwner
			})
			return transfer.data
		} catch (err) {
			throw new Error(err.response.data.message)
		}
	}

	@action sendEmail = async (client, emailType) => {
		try {
			let send = await axios.put(`${API_URL}/update/send-email`, {
				client,
				emailType
			})
			return send.data
		} catch (err) {
			throw new Error(err.response.data.message)
		}
	}

	@action declareSale = async client => {
		try {
			let sale = await axios.put(`${API_URL}/update/sold`, { client })
			return sale.data
		} catch (err) {
			throw new Error(err.response.data.message)
		}
	}
}

export const clients = new Clients()
