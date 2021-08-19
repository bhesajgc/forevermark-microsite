import React from "react";
import {
  Container,
  CircularProgress,
  withStyles,
  Grid,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import LoadingScreenStyles from "../../Styles/LoadingScreenStyles";
import foreverMarkLogo from "./assets/forevermark_logo.png";

const LinearProgressWithLabel = (props) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};

class LoadingScreen extends React.Component {
  render() {
    const { classes, show, loadedPercent } = this.props;

    return (
      <div>
        {show && (
          <Container
            maxWidth="xl"
            className={`d-flex justify-content-center align-items-center ${classes.root}`}
          >
            <Grid
              container
              className={`justify-content-center ${classes.loading}`}
            >
              <Grid item xs={12} md={12} className="text-center mb-2">
                <img
                  className={classes.logo}
                  src={foreverMarkLogo}
                  alt="Viatris logo"
                />
              </Grid>
              <Grid item style={{ marginTop: "8vh" }}>
                <LinearProgressWithLabel value={Number(loadedPercent)} />
              </Grid>
            </Grid>
          </Container>
        )}
      </div>
    );
  }
}

export default withStyles(LoadingScreenStyles)(LoadingScreen);
