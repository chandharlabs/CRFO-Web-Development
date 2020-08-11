import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { Card, Box, makeStyles } from '@material-ui/core';

const cx = classNames.bind(require('./appHeader.module.css'));

const AppHeader = (props) => {
  const { logout } = props;

  return (
    <>
      <AppBar
        position="relative"
        className={cx('app-header')}
        color="primary"
        style={{ backgroundColor: '#efefef' }}
      >
        <a href="https://map.crfo.org/" target="_blank" rel="noopener noreferrer">
          <img
            className={cx('logo')}
            src="https://image.flaticon.com/icons/svg/3029/3029124.svg"//"./crfoLogo.svg"
            alt="CRFO Logo"
            height={30}
          />
        </a>
        {/* <h3>Welcome to CRFO Map</h3> */}
        <Button variant="outlined" onClick={logout}>
          Log Out
        </Button>
        <p />
      </AppBar>
    </>
  );
};
AppHeader.propTypes = {
  logout: PropTypes.func.isRequired,
};
export default AppHeader;
