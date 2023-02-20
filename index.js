/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";


PushNotification.configure({
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);
  }
}) 

// When App is Running in BackGround then this Method Called
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
AppRegistry.registerComponent(appName, () => App);
