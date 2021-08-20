import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
	tableContainer: {
		background: '#ffffff87',
		boxShadow: 'none'
	},
	table: {
		minWidth: 450,
	}
});


const LeaderboardCriteria = () => {

	const classes = useStyles();
	const rows = [
		{
			name: 'Click on Links and Videos',
			value: 100
		},
		{
			name: 'Completing a Booth to earn bonus points by clicking all links',
			value: 1000
		},
		{
			name: 'Complete Forevermark Zone',
			value: 10000
		},
		{
			name: 'Log In Daily',
			value: 1000
		},
		{
			name: 'Watching the entire keynote session once',
			value: 500
		},
	]


	return <>
		<TableContainer component={Paper} className={classes.tableContainer}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>User</TableCell>
						<TableCell align="right">Points Earned</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name} key={Math.random()}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">{row.value}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	</>
}

export default LeaderboardCriteria;