import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import Moment from 'react-moment'

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
                    <td><Moment date={c.first_contact} format="LL"/></td>
                    <td>{c.email_type !== "null"? c.email_type : "-"}</td>
                    <td>{c.sold ? <FontAwesomeIcon icon={faCheck}/> : "-" }</td>
                    <td>{c.owner}</td>
                </tr>)}
            </tbody>
        </table>)
    }
}

export default Clients