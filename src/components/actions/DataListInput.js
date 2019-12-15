import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import TextField from '@material-ui/core/TextField'
import {Autocomplete} from '@material-ui/lab'

@inject('client')
@observer
class DataListInput extends Component {
	handleInput = event => {
		const target = event.target
		let value = target.value
		const name = target.name
		this.props.client.handleInput(name, value)
	}

	dataList = (data) => {
		return data.map(c => {
				return {option: c}
		})
	}

	render() {
		let list = this.dataList(this.props.listData)
		return (
				<div className="datalist-input">
				<Autocomplete options={list}
					getOptionLabel={list => list.option}
					renderInput={params => 
				<TextField {...params}
					value={this.props.client[this.props.name]}
					label={this.props.label}
                    name={this.props.name}
					onChange={this.handleInput}
					onSelectCapture={this.handleInput}
					fullWidth
                    variant="outlined"
				/>} />
				</div>
		)
	}
}

export default DataListInput
