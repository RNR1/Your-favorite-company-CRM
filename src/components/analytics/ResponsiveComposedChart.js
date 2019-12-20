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
				<ComposedChart barSize={50} 
					data={props.data}
					>
					<XAxis dataKey='country' type='category' />
					<YAxis dataKey='sales' type='number' />
					<Tooltip />
					<Bar dataKey='sales' a fill='#955196' />
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	)
}
