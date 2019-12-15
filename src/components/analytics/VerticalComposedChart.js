import React from 'react'
import {
	ComposedChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Label
} from 'recharts'

export default function VerticalComposedChart(props) {
	return (
		<div className="vertical-chart">
			<h4>{props.title || "Title"}</h4>
			<ResponsiveContainer>
				<ComposedChart
					layout='vertical'
					data={props.data}
					margin={{
						top: 40,
						right: 10,
						left: 10,
						bottom: 40
					}}>
					<XAxis dataKey='sold'>
						<Label value='Sales' position='insideBottom' />
					</XAxis>
					<YAxis dataKey='employee' type='category' />
					<Tooltip />
					<Bar dataKey='sold' barSize={20} fill='#003F5C' />
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	)
}
