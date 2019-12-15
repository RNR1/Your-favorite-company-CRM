import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import ClientsTable from './ClientsTable'

@inject('clients')
@observer
class Clients extends Component {
    
    componentDidMount() {
        this.props.clients.getClientsFromDB()
    }
    
    render() {
        return (
        <div>
            <ClientsTable />
        </div>)
    }
}

export default Clients