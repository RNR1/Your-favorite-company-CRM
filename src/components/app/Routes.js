import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Analytics from '../analytics/Analytics'
import Clients from '../clients/Clients'
import Actions from '../actions/Actions'

export default function Routes() {
    return (
        <div>
        <Route exact path='/'><Redirect to='/analytics'/></Route>
        <Route exact path='/analytics' component={Analytics} />
		<Route exact path='/clients' component={Clients} />
		<Route exact path='/actions' component={Actions} />
        </div>
    )
}