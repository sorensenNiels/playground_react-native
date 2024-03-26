import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import AppContainer from './src/AppContainer';

AppRegistry.registerComponent(appName, () => AppContainer);
