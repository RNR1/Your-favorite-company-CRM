import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import {
	faChartLine,
	faEnvelope,
	faUserCircle,
	faGlobeAmericas
} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import Badge from './Badge'

@inject('clients')
@observer
class Badges extends Component {
	render() {
        let currentMonth = moment().format('MMMM')
        let clients = this.props.clients
        return (
			<div className='badges'>
				<Badge
					icon={faChartLine}
					data={clients.newMonthlyClients}
					caption={`New ${currentMonth} Clients`}
					color="#2CCC71"
				/>
				<Badge
					icon={faEnvelope}
					data={clients.emailsSent}
					caption='Emails Sent'
					color="#3398DB"
				/>
				<Badge
					icon={faUserCircle}
					data={clients.outstandingClients}
					caption='Outstanding Clients'
					color="#E74C3C"
				/>
				<Badge
					icon={faGlobeAmericas}
					data={clients.hottestCountry}
					caption='Hottest Country'
					color="#F1C410"
				/>
			</div>
		)
	}
}

export default Badges