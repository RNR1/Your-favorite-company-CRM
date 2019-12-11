import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('clients')
@observer
class Clients extends Component {
    
    componentDidMount() {
        this.props.clients.getClientsFromDB()
    }
    
    render() {
        const headCategories = ['Name', 'Surname', 'Country', 'First Contact', 'Email', 'Sold', 'Owner']
        return (<table>
            <thead>
                <tr>
                    {headCategories.map((c, i) => <td key={i}>{c}</td>)}
                </tr>
            </thead>
            <tbody>
                {this.props.clients.clients.map(c => <tr key={c.id} >
                    <td>{c.name.split(" ")[0]}</td>
                    <td>{c.name.split(" ")[1]}</td>
                    <td>{c.country}</td>
                    <td>{c.firstContact}</td>
                    <td>{c.emailType}</td>
                    <td>{c.sold ? "true" : "false"}</td>
                    <td>{c.owner}</td>
                </tr>)}
            </tbody>
        </table>)
    }
}

export default Clients