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


const MyLeaderboardPoints = () => {

	const classes = useStyles();

	const [linksScore, setLinksScore] = React.useState(0);
	const [boothScore, setBoothScore] = React.useState(0);
	const [zoneScore, setZoneScore] = React.useState(0);
	const [loginScore, setLoginScore] = React.useState(0);
	const [keyNoteScore, setKeynoteScore] = React.useState(0);

	const rows = [
		{
			name: 'Links and Videos',
			value: linksScore
		},
		{
			name: 'Completing a Booth',
			value: boothScore
		},
		{
			name: 'Forevermark Zone',
			value: zoneScore
		},
		{
			name: 'Daily Log In',
			value: loginScore
		},
		{
			name: 'Watching the keynote',
			value: keyNoteScore
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

export default MyLeaderboardPoints;