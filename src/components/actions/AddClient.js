import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Input from './Input'
import DataListInput from './DataListInput'
import { Button, Paper } from '@material-ui/core'
import { toast as popup } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import isEmail from 'validator/lib/isEmail';

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

	handleError = input => {
		if (this.invalidInput(input)) {
			throw new Error('All fields are required')
		}
		if (!isEmail(input.email)) {
			throw new Error('Must provide a valid email')
		}
	}

	client = () => {
		return {
			name: this.props.client.fullName,
			firstContact: new Date(),
			email: this.props.client.email,
			owner: this.props.client.owner,
			country: this.props.client.country
		}
	}

	addClient = async () => {
		let client = this.client()
		try {
			this.handleError(client)
			let add = await this.props.clients.postClient(client)
			popup.success(add)
		} catch (err) {
			popup.error(err.message)
		}
	}

	render() {
		return (
			<Paper
				className='add-client'
				style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
				<h3>ADD CLIENT</h3>
				{this.props.client.inputData.map(i => (
					<Input
						key={i.name}
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
			</Paper>
		)
	}
}

export default AddClient
