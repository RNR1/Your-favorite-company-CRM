import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Update from './Update'
import AddClient from './AddClient'
import { ToastContainer } from 'react-toastify'
import './Actions.css'

@inject('clients')
@observer
class Actions extends Component {
	render() {
		return (
			<div className='actions'>
				<Update />
				<AddClient />
				<ToastContainer position='bottom-left' />
			</div>
		)
	}
}

export default Actions
