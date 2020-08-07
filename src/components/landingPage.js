import React from 'react';
import { Card, Box, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  login: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
});

function LandingPage(props) {
  const { loginWithRedirect } = props;
  const classes = useStyles();
  return (
    <div className={classes.login}>
      <Card wid>
        <Box height="15em">
          <img
            src="https://i.ibb.co/znRpb7Q/crfoLogo.png"
            alt="CRFO Logo"
            height={80}
          />
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
