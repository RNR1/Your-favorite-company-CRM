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
		<div style={{ width: '100%', height: 400 }}>
			<h4>Client Acquisition</h4>
			<ResponsiveContainer>
				<PieChart width={400} height={400}>
					<Pie
						data={data}
						cx={200}
						cy={200}
						outerRadius={80}
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
