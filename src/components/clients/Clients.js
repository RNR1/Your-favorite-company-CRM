import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './Clients.css'
import ClientsTable from './ClientsTable'
import SearchInput from './SearchInput'

@inject('clients')
@observer
class Clients extends Component {
	componentDidMount() {
		this.props.clients.getClientsFromDB()
	}

	render() {
		return (
			<div>
				<SearchInput />
				<ClientsTable />
			</div>
		)
	}
}

export default Clients
