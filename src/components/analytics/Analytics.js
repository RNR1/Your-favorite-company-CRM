import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import './Analytics.css'
import Badges from './Badges'
import Charts from './Charts'
@inject('clients')
@observer
class Analytics extends Component {
	componentDidMount() {
		this.props.clients.getClientsFromDB()
		this.props.clients.getTopEmployees()
		this.props.clients.getSalesByCountry()
	}

	render() {
		return (
			<div>
				<Badges />
				<Charts />
			</div>
		)
	}
}

export default Analytics
