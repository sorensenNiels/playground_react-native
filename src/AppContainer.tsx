import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import {store} from './store';

const AppContainer = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </Provider>
    </React.StrictMode>
  );
};

export default AppContainer;
