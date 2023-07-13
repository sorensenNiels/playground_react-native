import App from './App';
import {store} from './store';
import {Provider} from 'react-redux';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const AppContainer = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default AppContainer;
