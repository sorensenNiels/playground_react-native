/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppContainer from './src/AppContainer';

import ReactNativeForegroundService from '@supersami/rn-foreground-service';
import 'react-native-gesture-handler';

ReactNativeForegroundService.register();

AppRegistry.registerComponent(appName, () => AppContainer);
