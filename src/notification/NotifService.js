import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import PushNotification from "react-native-push-notification";
import * as RootNavigation from '../utils/RootNavigation';

// For Local Notification
    PushNotification.configure({
        onNotification: function (notification) {
          console.log("NOTIFICATION:", notification);
          if(!notification){
            return
          }
          onOpenNotification(notification)
        },
        popInitialNotification: true,
        requestPermissions: true,
      });   

      PushNotification.createChannel (
        {
          channelId :"test-channel",
          channelName :"Test channel",
          message:"Hi this is Local Notification",
        },
        () => console.log(`channel Created `)
      )
  
     export const LocalNotification =()=>{
      PushNotification.localNotification({
        channelId :"test-channel",
        id: '123',
        channelName :"Test channel",
        message:"Hi this is Change Local Notification",
        autoCancel:true
      })
     }   

     export const localNotificationSchedule =()=>{
      PushNotification.localNotificationSchedule({
        channelId :"test-channel",
        channelName :"Test channel",
        message: "this is sechudle notification", // (required)
        date: new Date(Date.now() + (20 * 1000)), // in 60 secs
        actions: ["ReplyInput"],
        reply_placeholder_text: "Write your response...", // (required)
        reply_button_text: "Reply" // (required)
      });
     }
     
     const onOpenNotification =(notification)=>{
      console.log("Azamali", notification)
      RootNavigation.navigate("ExampleFile")
     }

      
export default function NotifService({navigation}) {
  return (
    <View style={{flex:1 , backgroundColor:"skyblue"}}>
     
      <Text >
        The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
      </Text>
      <TouchableOpacity
     
        onPress={() => navigation.navigate('PushNavigation')}
    ><Text>Helo</Text>
    </TouchableOpacity>
    </View>
  )
}


// Must be outside of any component LifeCycle (such as `componentDidMount`).
