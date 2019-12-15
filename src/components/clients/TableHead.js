import React from 'react'
import { TableHead, TableRow, TableCell } from '@material-ui/core'

export default function Head(props) {
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
					<TableCell key={i}>{c}</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}
