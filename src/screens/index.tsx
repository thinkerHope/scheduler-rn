import React from 'react';
// import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import Screens from './Screens';

function registerScreens() {
  Navigation.registerComponent(
    Screens.HomeScreen,
    () => require('./home').default,
  );
}

export {registerScreens};
