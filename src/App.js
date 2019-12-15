import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/app/Navbar'
import Analytics from './components/analytics/Analytics'
import Clients from './components/clients/Clients'
import Actions from './components/actions/Actions'

@observer
class App extends Component {
	render() {
		return (
			<Router>
				<div className='App'>
					<div className='logo'></div>
					<Navbar />
					<Route exact path='/clients' component={Clients} />
					<Route exact path='/actions' component={Actions} />
					<Route exact path='/analytics' component={Analytics} />
				</div>
			</Router>
		)
	}
}

export default App
