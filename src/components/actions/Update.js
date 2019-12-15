import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import SelectList from './SelectList'
import DataListInput from './DataListInput'
import LabeledButton from './LabeledButton'

@inject('clients', 'client')
@observer
class Update extends Component {
	handleInput = event => {
		const target = event.target
		let value = target.value
		const name = target.name
		this.props.client.handleInput(name, value)
	}

	transferOwnership = () => {
		let client = this.props.client.client
		let futureOwner = this.props.client.transfer
		console.log(client, futureOwner)
		if (!client || !futureOwner) {
			return
		}
		this.props.clients.transferOwnership(client, futureOwner)
	}

	sendEmail = () => {
		let client = this.props.client.client
		let type = this.props.client.emailtype
		if (!type || !client) {
			return
		}
		this.props.clients.sendEmail(client, type)
	}

	declareSale = () => {
		let client = this.props.client.client
		if (!client) {
			return
		}
		this.props.clients.declareSale(client)
	}

	emailTypes = () => ['A', 'B', 'C', 'D']

	render = () => {
		return (
			<div className='update'>
				<h3>UPDATE</h3>
				<DataListInput
					listData={this.props.clients.clientNames}
					label='Client'
					name='client'
					value={this.props.client.client}
				/>
				<SelectList
					label='Transfer Ownership to'
					name='transfer'
					value={this.props.client.transfer}
					data={this.props.clients.owners}
					onClick={this.transferOwnership}
					action='TRANSFER'
				/>
				<SelectList
					label='Send email'
					name='emailtype'
					value={this.props.client.emailtype}
					data={this.emailTypes()}
					onClick={this.sendEmail}
					action='SEND'
				/>
				<LabeledButton
					label='Declare Sale!'
					action={this.declareSale}
					buttonLabel='DECLARE'
				/>
			</div>
		)
	}
}

export default Update
