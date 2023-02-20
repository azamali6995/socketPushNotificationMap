import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect} from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


export default function SocialMediaLogin() {

   const GoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("userInfo", userInfo)
    alert(userInfo)

    } catch (error) { 
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log("2", error)
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log("3", error)
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log("4", error)
        // play services not available or outdated
      } else {
      console.log("4", error)
      // some other error happened 
      }
    }
  };

  return (
    <View style={{flex:1, backgroundColor:"gold", alignItems:"center", justifyContent:"center"}}>
      <View style={{backgroundColor:"red", height:40, width :"50%", alignItems:"center", justifyContent:"center"}}>
        <TouchableOpacity onPress={()=>{GoogleLogin()}}>
        <Text>Google</Text>
        
      </TouchableOpacity>
      </View>
      

    </View>
  )
}

const styles = StyleSheet.create({})