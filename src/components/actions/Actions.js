import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('clients', 'client')
@observer
class Actions extends Component {
	handleInput = event => {
		const target = event.target
		let value = target.value
		const name = target.name
		this.props.client.handleInput(name, value)
	}

	invalidInput = client =>
		Object.keys(client).some(i => !client[i])

	client = () => {
		return {
			name: this.props.client.fullName,
			firstContact: new Date(),
			email: this.props.client.email,
			owner: this.props.client.owner,
			country: this.props.client.country
		}
	}

	transferOwnership = () => {
		let client = this.props.client.client
		let futureOwner = this.props.client.transfer
		if (!client || !futureOwner) {return}
		this.props.clients.transferOwnership(client, futureOwner)
	}

	sendEmail = () => {
		let client = this.props.client.client
		let type = this.props.client.emailtype
		if (!type || !client) {return}
		this.props.clients.sendEmail(client, type)
	}

	declareSale = () => {
		let client = this.props.client.client
		if (!client) {return}
		this.props.clients.declareSale(client
			)
	}

	addClient = () => {
		let client = this.client()
		if (this.invalidInput(client)) {return}
		this.props.clients.postClient(client)
	}

	render() {
		return (
			<div>
				<h3>UPDATE</h3>
				<label>Client: </label>
				<input list='clientNames' name='client' placeholder='Client Name' onChange={this.handleInput} value={this.props.client.client} />

				<datalist id='clientNames'>
					{this.props.clients.clientNames.map(c => (
						<option key={c} value={c}></option>
					))}
				</datalist>

				<datalist id='owners'>
					{this.props.clients.owners.map(o => (
						<option key={o} value={o}>
							{o}
						</option>
					))}
				</datalist>
				<br/>
				<label>Transfer Ownership to: </label>
				<select name='transfer' onChange={this.handleInput} value={this.props.client.transfer}>
					<option key='' value='' disabled>
						Choose
					</option>
					{this.props.clients.owners.map(o => (
						<option key={o} value={o}>
							{o}
						</option>
					))}
				</select>
				<button onClick={this.transferOwnership}>TRANSFER</button>
				<br/>
				<label>Send email: </label>
				<select name='emailtype' onChange={this.handleInput} value={this.props.client.emailtype}>
					<option disabled value=''>
						--
					</option>
					{['A', 'B', 'C', 'D'].map(e => (
						<option key={e} value={e}>
							{e}
						</option>
					))}
				</select>
				<button onClick={this.sendEmail}>SEND</button>
				<br/>
				<label>Declare Sale!</label>
				<button onClick={this.declareSale}>DECLARE</button>

				<h3>ADD CLIENT</h3>
				<label>First Name: </label>
				<input type='text' name='name' onChange={this.handleInput} value={this.props.client.name} />

				<label>Surname: </label>
				<input type='text' name='surname' onChange={this.handleInput} value={this.props.client.surname} />

				<label>Email: </label>
				<input type='email' name='email' onChange={this.handleInput} value={this.props.client.email}/>

				<label>Country: </label>
				<input type='text' name='country' onChange={this.handleInput} value={this.props.client.country}/>

				<label>Owner: </label>
				<input list='owners' type='text' name='owner' onChange={this.handleInput} value={this.props.client.owner}/>

				<button onClick={this.addClient}>Add New Client</button>
			</div>
		)
	}
}

export default Actions
