import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Input from './Input'
import DataListInput from './DataListInput'
import { Button } from '@material-ui/core'
import { toast as popup } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

@inject('clients', 'client')
@observer
class AddClient extends Component {
	handleInput = event => {
		const target = event.target
		let value = target.value
		const name = target.name
		this.props.client.handleInput(name, value)
	}

	invalidInput = client => Object.keys(client).some(i => !client[i])

	client = () => {
		return {
			name: this.props.client.fullName,
			firstContact: new Date(),
			email: this.props.client.email,
			owner: this.props.client.owner,
			country: this.props.client.country
		}
	}

	addClient = () => {
		let client = this.client()
		if (this.invalidInput(client)) {
			return popup.error('All fields are required')
		}
		this.props.clients.postClient(client)
		return popup.success(`Client ${client.name} succesfully added`)
	}

	render() {
		return (
			<div className='add-client'>
				<h3>ADD CLIENT</h3>
				{this.props.client.inputData.map(i => (
					<Input key={i.name}
						label={i.label}
						name={i.name}
						value={this.props.client[i.name]}
						type={i.type || null}
					/>
				))}

				<DataListInput
					listData={this.props.clients.owners}
					label='Owner'
					name='owner'
					value={this.props.client.owner}
				/>

				<Button variant='contained' color='primary' onClick={this.addClient}>
					Add New Client
				</Button>
			</div>
		)
	}
}

export default AddClient
