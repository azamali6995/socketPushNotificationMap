import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LocalNotification, localNotificationSchedule } from '../notification/NotifService';
import * as RootNavigation from './RootNavigation';


export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken()
  }
}
const getFcmToken = async()=>{
    let fcmToken = await AsyncStorage.getItem('fcmToken') 
    console.log('fcmToken',fcmToken)  
    if(!fcmToken){
        try{
         const fcmToken = await messaging().getToken()  
         if(fcmToken){
         await AsyncStorage.setItem('fcmToken', fcmToken) 
         }
        }catch(error){
            console.log("showError", error)
        }
    }
}

export const notificationListner =()=>{
    messaging().onNotificationOpenedApp(remoteMessage => 
        {
          RootNavigation.navigate('ExampleFile');
            console.log("AAAAA", remoteMessage)
      });
        messaging().onMessage(async remoteMessage => {
            console.log("BBBBB", remoteMessage)
            LocalNotification(remoteMessage)
            localNotificationSchedule(remoteMessage)
            
      } )
      messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
            console.log("CCCCC", remoteMessage)
        }
        RootNavigation.navigate('ExampleFile');
      });  

    }

 
 