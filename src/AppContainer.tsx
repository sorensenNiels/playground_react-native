import App from './App';
import {store} from './app/store';
import {Provider} from 'react-redux';
import React from 'react';

const AppContainer = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

export default AppContainer;
