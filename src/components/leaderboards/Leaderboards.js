import { Modal } from "react-bootstrap";
import React from "react";
import {Button, Grid, makeStyles} from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LeaderboardDialog from './leaderboard-dialogs/LeaderboardDialog';
import MyLeaderboardPoints from './leaderboard-dialogs/MyLeaderboardPoints';
import LeaderboardCriteria from './leaderboard-dialogs/LeaderboardCriteria';


const useStyles = makeStyles({
	root: {
		boxShadow: "none",
	},
	leaderboardHeader: {
		padding: '1rem'
	},
	criteriaBtn: {
		textAlign: 'center'
	},
	leaderboardContainer: {
		padding: '2rem'
	},
	tableContainer: {
		background: '#ffffff87',
		boxShadow: 'none'
	},
	table: {
		minWidth: 450,
	}
});

function createData(name, calories, fat, carbs, protein) {
	return { name, calories };
}

const rows = [
	createData('John Doe', 159),
	createData('John Doe', 159),
	createData('John Doe', 159),
	createData('John Doe', 159),
	createData('John Doe', 159),
	createData('John Doe', 159),
];


const LeaderBoards = (props) => {

	const classes = useStyles();

	const { open, handleClose } = props;

	const [dialogOpen, setDialogOpen] = React.useState(false);
	const [dialogContext, setDialogContext] = React.useState(false);

	const handleDialogClose = () => setDialogOpen(false);

	const handleDialogOpen = (context) => {
		setDialogOpen(true);
		setDialogContext(context);
	}

	return (
		<>
		<Modal
			show={open}
			onHide={handleClose}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton />
			<Modal.Body style={{background: 'rgb(255 255 255 / 50%)'}}>
					<Grid container className={classes.leaderboardHeader}>
						<Grid item xs={9}>
							<h3>Top 20 users</h3>
						</Grid>
						<Grid item xs={1}>
							<Button variant={'contained'} color={'primary'} disableElevation onClick={() => handleDialogOpen(<MyLeaderboardPoints/>)}>
								My Points
							</Button>
						</Grid>
						<Grid item xs={2} className={classes.criteriaBtn}>
							<Button variant={'contained'} color={'primary'} disableElevation onClick={() => handleDialogOpen(<LeaderboardCriteria/>)}>
								Points Criteria
							</Button>
						</Grid>
					</Grid>

				<div className={classes.leaderboardContainer}>
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
										<TableCell align="right">{row.calories}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			</Modal.Body>
		</Modal>
			<LeaderboardDialog open={dialogOpen} handleClose={handleDialogClose} content={dialogContext}/>
			</>
	);
};
export default LeaderBoards;
