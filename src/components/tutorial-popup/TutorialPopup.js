import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TutorialImage from './assets/Tutorial Panel.png';

export default function TutorialPopup({ open, setOpen }) {
  const handleClose = () => {
    setOpen();
  };
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const maxWidth = mobile ? 'sm' : 'lg';
  return (
    <div>
      <Dialog
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={TutorialImage} alt='Tutorial image' style={{ width: '100%' }} />
          </DialogContentText>
        </DialogContent>
        <DialogActions className='justify-content-center mb-2'>
          <Button variant='contained' onClick={handleClose} color="primary" disableElevation>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
