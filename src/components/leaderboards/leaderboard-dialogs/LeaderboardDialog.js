import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function LeaderboardDialog(props) {

	const {open, handleClose, title, content} = props;

	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{content}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button variant={'contained'} onClick={handleClose} color="primary" autoFocus disableElevation>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
