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
        <Box height="10em" width="20em">
          <img
            src="https://image.flaticon.com/icons/svg/3029/3029124.svg"//"https://i.ibb.co/znRpb7Q/crfoLogo.png"
            alt="CRFO Logo"
            height={45}
          />
          <h2>Welcome to CRFO Map</h2>
          <Button onClick={loginWithRedirect} variant="outlined" size="medium">
            Log In
          </Button>{' '}
        </Box>
      </Card>
    </div>
  );
}

export default LandingPage;
