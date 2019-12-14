import React from 'react'
import Moment from 'react-moment'
import {
	ResponsiveContainer,
	ComposedChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend
} from 'recharts'

export default function SimpleLineChart(props) {
	return (
		<div style={{ width: '50%', height: 200 }}>
            <h4>Sales Since <Moment format={'MMM-DD'} subtract={{days: 30}} /></h4>
			<ResponsiveContainer>
				<ComposedChart
					width={500}
					height={400}
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
					<Legend /> 
					<Line type='natural' dataKey='sales' stroke='#FF6D54' strokeWidth="5" />
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	)
}
