import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container, Grid, Paper, Typography } from '@material-ui/core';

import './Home.css'
import MastHead from '../../components/masthead/Masthead';
import AuthStyles from '../../styles/AuthStyles';
import BottomStreak from '../../components/bottom-streak/BottomStreak';

class Home extends Component {

  render() {

    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <Container maxWidth='md' className='mt-5'>
          <Grid container>
            <Grid item xs={12}>
              <Paper elevation={2}>
                <MastHead/>
                <Paper square='true' className={classes.stripe}>
                  <Typography variant='h5' align='center'>
                    <strong>Welcome to Viatris Booth</strong>
                  </Typography>
                </Paper>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <Paper elevation={0} square className={classes.paper}>
                      <Link to='/register'>
                        <Button
                          variant="contained"
                          color="primary"
                          classname='px-3'
                          onClick={this.submitForm}
                          disableElevation
                        >
                          Register
                        </Button>
                      </Link>
                      <Typography color='textPrimary' className='mt-3'>
                        For first time user
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper elevation={0} square className={classes.paper}>
                      <Link to='/login'>
                        <Button
                          variant="contained"
                          color="primary"
                          classname='px-3'
                          onClick={this.submitForm}
                          disableElevation
                        >
                          Login
                        </Button>
                      </Link>
                      <Typography color='textPrimary' className='mt-3'>
                        If already registered
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
                <BottomStreak/>
              </Paper>
            </Grid>
          </Grid>
      </Container>
      </div>
    );
  }
}

export default withStyles(AuthStyles)(Home);