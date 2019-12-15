import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from 'recharts'

const data = [
	{ name: 'Last Month', value: 22 },
	{ name: '6-12 Months', value: 131 },
	{ name: '12 Months', value: 302 }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']



export default function PieResponsiveContainer() {
	return (
		<div className="pie-chart">
			<h4>Client Acquisition</h4>
			<ResponsiveContainer>
				<PieChart width={200} height={250}>
					<Pie
						data={data}
                        label="name"
						fill='#8884d8'
						dataKey='value'>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
                    <Legend />
				</PieChart>
			</ResponsiveContainer>
		</div>
	)
}
