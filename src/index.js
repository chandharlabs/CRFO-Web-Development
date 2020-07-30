import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Auth0Provider
    domain="juliusalph.auth0.com"
    clientId="Ow9O4bdp2c1wa7A0QaUDy76RWzEG2NQr"
    redirectUri={window.location.href}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
