import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('clients')
@observer
class Actions extends Component {
	render() {
		return (
			<div>
				<h3>UPDATE</h3>
				<label>Client: </label>
				<input type='text' name='client' placeholder='Client Name' />

				<label>Transfer Ownership to: </label>
				<select name='owner' defaultValue=''>
					<option key='' value='' disabled>
						Choose
					</option>
					{this.props.clients.owners.map(o => (
						<option key={o} value={o}>
							{o}
						</option>
					))}
				</select>
				<button>TRANSFER</button>

				<label>Send email: </label>
				<select name='email' defaultValue=''>
					<option value='' disabled defaultValue>
						--
					</option>
					{['A', 'B', 'C', 'D'].map(e => (
						<option key={e} value={e}>
							{e}
						</option>
					))}
				</select>
				<button>SEND</button>

				<label>Declare Sale!</label>
				<button>DECLARE</button>

				<h3>ADD CLIENT</h3>
				<label>First Name: </label>
				<input type='text' name='client' />

				<label>Surname: </label>
				<input type='text' name='surname' />

				<label>Country: </label>
				<input type='text' name='country' />

				<label>Owner: </label>
				<input type='text' name='owner' />

				<button>Add New Client</button>
			</div>
		)
	}
}

export default Actions
