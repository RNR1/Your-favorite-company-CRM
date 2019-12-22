import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import VerticalComposedChart from './VerticalComposedChart'
import ResponsiveComposedChart from './ResponsiveComposedChart'
import PieResponsiveContainer from './PieResponsiveContainer'
import SimpleLineChart from './SimpleLineChart'
import {Paper} from '@material-ui/core'

@inject('clients')
@observer
class Charts extends Component {
    render() {
        return (
            <Paper className="charts">
                <VerticalComposedChart
					data={this.props.clients._topEmployees}
					title='Top Employees'
				/>
				<ResponsiveComposedChart
					data={this.props.clients._salesByCountry}
					title='Sales By Country'
				/>
				<SimpleLineChart data={this.props.clients.thirtyDaysSalesBreakdown} />
				<PieResponsiveContainer />
			</Paper>
        )
    }
}

export default Charts