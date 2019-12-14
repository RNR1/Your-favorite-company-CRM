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
		<div style={{ width: '40%', height: 200 }}>
			<h4>{props.title || "Title"}</h4>
			<ResponsiveContainer>
				<ComposedChart
					layout='vertical'
					width={700}
					height={200}
					data={props.data}
					margin={{
						top: 20,
						right: 40,
						left: 40,
						bottom: 20
					}}>
					<XAxis dataKey='sold'>
						<Label value='Sales' offset={0} position='insideBottom' />
					</XAxis>
					<YAxis dataKey='employee' type='category' />
					<Tooltip />

					<Bar dataKey='sold' barSize={20} fill='#003F5C' />
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	)
}
