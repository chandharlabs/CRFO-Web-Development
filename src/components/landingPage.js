import React from 'react';
import { Card, Box, makeStyles } from '@material-ui/core';
// import { Button } from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  login: {
    display: 'grid',
    placeItems: 'center',
    height: '15em',
    width: '20em',
  },
});
function LandingPage(props) {
  const { loginWithRedirect } = props;
  const classes = useStyles();
  return (
    <div className={classes.login}>
      <Card wid>
        <Box height="15em">
          <img src="./crfoLogo.svg" alt="CRFO Logo" height={80} />
          <h1>Welcome to CRFO </h1>
          <Button onClick={loginWithRedirect} variant="outlined" size="medium">
            Log In
          </Button>{' '}
        </Box>
      </Card>
    </div>
  );
}

export default LandingPage;
