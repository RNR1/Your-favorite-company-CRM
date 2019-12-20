import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Logo from './components/app/Logo'
import Navbar from './components/app/Navbar'
import Routes from './components/app/Routes'
import './App.css'

export default function App() {
	return (
		<Router>
			<Logo />
			<Navbar />
			<Routes />
		</Router>
	)
}
