import React from 'react'
import {
	ResponsiveContainer,
	ComposedChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip
} from 'recharts'

export default function ResponsiveComposedChart(props) {
	return (
		<div className='composed-chart'>
			<h4>{props.title || 'Title'}</h4>
			<ResponsiveContainer>
				<ComposedChart
					// width={300}
					// height={400}
					data={props.data}
					>
					<XAxis dataKey='country' />
					<YAxis />
					<Tooltip />
					<Bar dataKey='sales' barSize={60} fill='#955196' />
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	)
}
