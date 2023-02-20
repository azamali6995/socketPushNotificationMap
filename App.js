
import React,{useEffect, useState} from 'react';
import {View , Text} from 'react-native'
import InboxDetail from './src/chat/InboxDetail';
import NewMap from './src/map/NewMap';
import NotifService from './src/notification/NotifService';
import PushNavigation from './src/notification/PushNavigation';
import SocialMediaLogin from './src/notification/SocialMediaLogin';
import {requestUserPermission, notificationListner} from './src/utils/NotificationService'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PushNotification from 'react-native-push-notification';
import navigationRef from './src/utils/RootNavigation'
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const Stack = createNativeStackNavigator();
const App=() => {
  
  useEffect(()=>{
    GoogleSignin.configure();
    requestUserPermission()
    notificationListner()
  },) 

  return (
      <NavigationContainer ref={navigationRef}>
       <Stack.Navigator>
       <Stack.Screen name="SocialMediaLogin" component={SocialMediaLogin} />
       <Stack.Screen name="PushNavigation" component={PushNavigation} />
         <Stack.Screen name="NotifService" component={NotifService} />

       </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
