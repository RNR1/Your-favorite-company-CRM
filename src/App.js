import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import Analytics from './components/analytics/Analytics'
import Clients from './components/clients/Clients'
import Actions from './components/actions/Actions'

@observer
class App extends Component {
	render() {
		return (
			<Router>
				<div className='App'>
				<div id='navbar'>
					<Link to='/clients'>Clients </Link>
					<Link to='/actions'>Actions </Link>
					<Link to='/analytics'>Analytics</Link>
				</div>
					<Route exact path='/clients' component={Clients}/>
					<Route exact path='/actions' component={Actions}/>
					<Route exact path='/analytics' component={Analytics}/>
				</div>
			</Router>
		)
	}
}

export default App
