import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Table from '@material-ui/core/Table'
import Head from './TableHead'
import Body from './TableBody'
import {
	TableContainer,
	Paper,
	TablePagination,
	TableFooter,
	TableRow
} from '@material-ui/core'

@inject('clients')
@observer
class ClientsTable extends Component {
	constructor() {
		super()
		this.state = {
			page: 0,
			rowsPerPage: 25
		}
	}
	
	handleChangePage = (event, newPage) => {
		this.setState({page: newPage});
	  };
	
	
	
	render() {
		return (
			<TableContainer component={Paper}>
				<Table>
					<Head />
					<Body page={this.state.page} rowsPerPage={this.state.rowsPerPage} />
					<TableFooter>
					<TableRow>

					<TablePagination
						count={this.props.clients.clients.length}
						rowsPerPage={this.state.rowsPerPage}
						page={this.state.page}
						onChangePage={this.handleChangePage}
						
					/>
					</TableRow>
					</TableFooter>
				</Table>
			</TableContainer>
		)
	}
}

export default ClientsTable
