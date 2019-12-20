import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import SelectList from './SelectList'
import DataListInput from './DataListInput'
import LabeledButton from './LabeledButton'
import { toast as popup } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

@inject('clients', 'client')
@observer
class Update extends Component {
	handleInput = event => {
		const target = event.target
		let value = target.value
		const name = target.name
		this.props.client.handleInput(name, value)
	}

	inputErrorHandler = (input, errMessage) => {
		if (!input) {
			throw new Error(errMessage)
		}
	}

	transferOwnership = async () => {
		let client = this.props.client.client
		let futureOwner = this.props.client.transfer
		try {
			this.inputErrorHandler(client, 'You must provide client name')
			this.inputErrorHandler(futureOwner, 'You must provide new owner')
			let transfer = await this.props.clients.transferOwnership(
				client,
				futureOwner
			)
			popup.success(transfer)
		} catch (err) {
			return popup.error(err.message)
		}
	}

	sendEmail = async () => {
		let client = this.props.client.client
		let type = this.props.client.emailtype
		try {
			this.inputErrorHandler(client, 'You must provide client name')
			this.inputErrorHandler(type, 'You must provide email type')
			let send = await this.props.clients.sendEmail(client, type)
			popup.success(send)
		} catch (err) {
			return popup.error(err.message)
		}
	}

	declareSale = async () => {
		let client = this.props.client.client
		try {
			this.inputErrorHandler(client, 'You must provide client name')
			let sale = await this.props.clients.declareSale(client)
			popup.success(sale)
			} catch(err) {
			return popup.error(err.message)
		}
	}

	emailTypes = () => ['A', 'B', 'C', 'D']

	render = () => {
		return (
			<div className='update'>
				<h3 className="title">UPDATE</h3>
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
