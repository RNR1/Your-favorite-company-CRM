import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import './Actions.css'
import Update from './Update'
import AddClient from './AddClient'

@inject('clients', 'client')
@observer
class Actions extends Component {
	
	render() {
		return (
			<div>
				<Update />
				<AddClient />
			</div>
		)
	}
}

export default Actions
