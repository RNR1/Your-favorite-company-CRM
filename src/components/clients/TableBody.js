import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Client from './Client'
import TableBody from '@material-ui/core/TableBody'

@inject('clients')
@observer
class Body extends Component {
	render() {
		let page = this.props.page
        let rowsPerPage = this.props.rowsPerPage
		return (
			<TableBody>
				{this.props.clients.clients
					.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
					.map(c => (
						<Client key={c.id} client={c} />
					))}
			</TableBody>
		)
	}
}

export default Body
