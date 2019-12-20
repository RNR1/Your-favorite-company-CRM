import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

@inject('clients')
@observer
class SearchInput extends Component {
	handleSearch = event => {
		let value = event.target.value
		this.props.clients.handleSearch(value)
	}

	dataList = data => {
		return data.map(c => {
			return { option: c }
		})
	}

	render() {
		let list = this.dataList(this.props.clients.clientNames)
		return (
			<Autocomplete
				options={list}
				getOptionLabel={list => list.option}
				disableClearable={true}
				freeSolo={true}
				disableListWrap={true}
				size='small'
				renderInput={params => (
					<TextField
						{...params}
						value={this.props.clients.SearchInput}
						label='Search'
						type='search'
						onChange={this.handleSearch}
						onSelectCapture={this.handleSearch}
						fullWidth
						variant='outlined'
					/>
				)}
			/>
		)
	}
}

export default SearchInput
