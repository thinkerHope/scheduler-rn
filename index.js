/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Navigation} from 'react-native-navigation';
import App, {ButtonComponent} from './src/App.tsx';
import SettingsScreen from './src/SettingsScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

const setRoot = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'timeTable',
            },
          },
        ],
      },
    },
  });
};

Navigation.registerComponent(appName, () => App);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('ButtonComponent', () => ButtonComponent);

Navigation.events().registerAppLaunchedListener(async () => {
  setRoot();
});
