import 'airbnb-js-shims';
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from './App/App';
import configureStore from './store/configureStore';
import { history } from './utils';

const store = configureStore({}, history);

  const AppContainer = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
    </Provider>
  );
  ReactDOM.render(<AppContainer />, MOUNT_NODE);
