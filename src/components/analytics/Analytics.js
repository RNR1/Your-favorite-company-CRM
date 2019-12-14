import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChartLine,
	faEnvelope,
	faUserCircle,
	faGlobeAmericas
} from '@fortawesome/free-solid-svg-icons'
import VerticalComposedChart from './VerticalComposedChart'
import ResponsiveComposedChart from './ResponsiveComposedChart'
import PieResponsiveContainer from './PieResponsiveContainer'
import Moment from 'react-moment'
import SimpleLineChart from './SimpleLineChart'
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
				<div>
					<FontAwesomeIcon icon={faChartLine} />
					{this.props.clients.newMonthlyClients} New <Moment format='MMMM' />{' '}
					Clients
				</div>
				<div>
					<FontAwesomeIcon icon={faEnvelope} />
					{this.props.clients.emailsSent} Emails Sent
				</div>
				<div>
					<FontAwesomeIcon icon={faUserCircle} />
					{this.props.clients.outstandingClients} Outstanding Clients
				</div>
				<div>
					<FontAwesomeIcon icon={faGlobeAmericas} />
					Hottest Country: {this.props.clients.hottestCountry}
				</div>

				<div>
					
					<VerticalComposedChart data={this.props.clients._topEmployees} title="Top Employees" />
				</div>
				<div>
					
					<ResponsiveComposedChart data={this.props.clients._salesByCountry} title="Sales By Country" />
				</div>
				
				<SimpleLineChart data={this.props.clients.thirtyDaysSalesBreakdown} />

				<PieResponsiveContainer />
			</div>
		)
	}
}

export default Analytics
