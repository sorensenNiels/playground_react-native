/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppContainer from './src/AppContainer';

import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => AppContainer);
