import React from 'react'
import { TableHead, TableRow, TableCell } from '@material-ui/core'

export default function Head() {
    const headCategories = [
        'Name',
        'Surname',
        'Country',
        'First Contact',
        'Email',
        'Sold',
        'Owner'
    ]
    
    return (
		<TableHead>
			<TableRow selected={true}>
				{headCategories.map((c, i) => (
					<TableCell variant="head" size="medium" key={i}>{c}</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}
