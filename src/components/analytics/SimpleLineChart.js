import React from 'react'
import Moment from 'react-moment'
import {
	ResponsiveContainer,
	ComposedChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
} from 'recharts'

export default function SimpleLineChart(props) {
	return (
		<div className="line-chart">
            <h4>Sales Since <Moment format={'MMM-DD'} subtract={{days: 30}} /></h4>
			<ResponsiveContainer>
				<ComposedChart
					data={props.data}
					margin={{
						top: 20,
						right: 20,
						bottom: 20,
						left: 20
					}}>
					<XAxis dataKey='day' />
					<YAxis />
					<Tooltip />
					<Line type='natural' dataKey='sales' stroke='#FF6D54' strokeWidth="5" />
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	)
}
