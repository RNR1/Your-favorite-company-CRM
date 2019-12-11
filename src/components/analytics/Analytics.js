import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChartLine,
	faEnvelope,
	faUserCircle,
	faGlobeAmericas
} from '@fortawesome/free-solid-svg-icons'
import {
	LineChart,
	Line,
	ResponsiveContainer,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend
} from 'recharts'
@inject('clients')
@observer
class Analytics extends Component {
	componentDidMount() {
		this.props.clients.getClientsFromDB()
	}

	render() {
		return (
			<div>
				<div>
					<FontAwesomeIcon icon={faChartLine} />
					New Clients
				</div>
				<div>
					<FontAwesomeIcon icon={faEnvelope} />
					Emails Sent
				</div>
				<div>
					<FontAwesomeIcon icon={faUserCircle} />
					Outstanding Clients
				</div>
				<div>
					<FontAwesomeIcon icon={faGlobeAmericas} />
					Hottest Country
				</div>

				<div>
					<h4>Top Employees</h4>
					<LineChart
						// layout='vertical'
						width={730}
						height={250}
						data={this.props.clients.clients}
						margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='sold' />
						<YAxis dataKey='owner' />
						<Tooltip />
						<Legend />
						<Line type='monotone' dataKey='owner' stroke='#8884d8' />
						<Line type='monotone' dataKey='sold' stroke='#82ca9d' />
					</LineChart>
				</div>
			</div>
		)
	}
}

export default Analytics
