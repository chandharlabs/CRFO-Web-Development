import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

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
        <a href="https://crfo.org/" target="_blank" rel="noopener noreferrer">
          <img
            className={cx('logo')}
            src="./crfoLogo.svg"
            alt="CRFO Logo"
            height={80}
          />
        </a>
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
