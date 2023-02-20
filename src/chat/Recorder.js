// import AudioRecorderPlayer, {
//     AVEncoderAudioQualityIOSType,
//     AVEncodingOption,
//     AudioEncoderAndroidType,
//     AudioSet,
//     AudioSourceAndroidType,
//     PlayBackType,
//     RecordBackType,
//   } from 'react-native-audio-recorder-player';
//   import {
//     Dimensions,
//     PermissionsAndroid,
//     Platform,
//     SafeAreaView,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     Pressable,
//     View,
//   } from 'react-native';
//   import IconV from 'react-native-vector-icons/MaterialIcons';
//   import { connect } from "react-redux"
//   import { newRecord } from '../redux/slices/TimeSlice'
//   import {
//     request,
//     check,
//     PERMISSIONS,
//     checkMultiple,
//     RESULTS,
//     requestMultiple,
//     openSettings,
//   } from 'react-native-permissions';
//   const ScreenWidth = Dimensions.get('screen').width;
//   import React, { Component } from 'react';
  
//   // State = {
//   //   isLoggingIn: false,
//   //   recordSecs: 0,
//   //   recordTime: '',
//   //   currentPositionSec: 0,
//   //   currentDurationSec: 0,
//   //   playTime: '',
//   //   duration: ''
//   // }
  
//   // const screenWidth = Dimensions.get('screen').width;
  
//   class Recorder extends React.Component {
  
//     constructor(props) {
//       super(props);
//       this.state = {
//         isLoggingIn: false,
//         recordSecs: 0,
//         recordTime: '',
//         currentPositionSec: 0,
//         currentDurationSec: 0,
//         playTime: '00:00:00',
//         duration: '00:00:00',
//         size: 45,
//         radius: 23,
//         RecordTime:null
//       };
  
//       this.audioRecorderPlayer = new AudioRecorderPlayer();
//       this.audioRecorderPlayer.setSubscriptionDuration(0.1); // optional. Default is 0.5
//     }
  
//     render() {
  
//       return (
  
//         <View style={{ flexDirection: 'row', alignItems: 'center',position:'absolute',width:'100%'}}>
//           {
//             this.state.recordTime.length > 0 &&
//             <View style={{ position: 'absolute',bottom: 12,flex:1,left:14 }}>
//               <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold',alignSelf:'flex-end' }}>{this.state.recordTime}</Text>
//             </View>
  
//           }
         
//           <Pressable style={{ position: 'absolute', right: -50, bottom: 0, backgroundColor: 'red', height: this.state.size, width: this.state.size, borderRadius: this.state.radius, alignItems: 'center', justifyContent: 'center' }}
//             onPressIn={() => { this.onStartRecord() }} onPressOut={() => { this.onStopRecord() }}>
//             <IconV name="keyboard-voice" size={28} color='white' />
  
//           </Pressable>
//         </View>
//       )
//     }
  
  
  
//     onStartRecord = async () => {
//       this.setState({ size: 55, radius: 28 })
//       if (Platform.OS === 'android') {
//         try {
//           const grants = await PermissionsAndroid.requestMultiple([
//             PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//             PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//             PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//           ]);
  
//           console.log('write external stroage', grants);
  
//           if (
//             grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
//             PermissionsAndroid.RESULTS.GRANTED &&
//             grants['android.permission.READ_EXTERNAL_STORAGE'] ===
//             PermissionsAndroid.RESULTS.GRANTED &&
//             grants['android.permission.RECORD_AUDIO'] ===
//             PermissionsAndroid.RESULTS.GRANTED
//           ) {
//             this.onhandleStartRecording()
//             console.log('permissions granted');
//           } else {
//             console.log('All required permissions not granted');
//             return;
//           }
//         } catch (err) {
//           console.warn(err);
//           return;
//         }
//       }
//       else {
//         this.onhandleStartRecording()
//       }
  
  
  
//     };
  
//     onhandleStartRecording = async () => {
//       const audioSet = {
//         AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
//         AudioSourceAndroid: AudioSourceAndroidType.MIC,
//         AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
//         AVNumberOfChannelsKeyIOS: 2,
//         AVFormatIDKeyIOS: AVEncodingOption.aac,
//       };
  
//       console.log('audioSet', audioSet);
//       const uri = await this.audioRecorderPlayer.startRecorder(
//         undefined,
//         audioSet,
//       );
  
//       this.audioRecorderPlayer.addRecordBackListener((e) => {
//          this.setState({recordTime: this.audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)) });
//          this.setState({RecordTime:this.audioRecorderPlayer.mmssss(Math.floor(e.currentPosition))})
//         this.props.onUpdate(e.currentPosition / 1000)
//       });
//       console.log(`uri: ${uri}`);
//     }
//     onPauseRecord = async () => {
//       try {
//         const r = await this.audioRecorderPlayer.pauseRecorder();
//         console.log(r);
//       } catch (err) {
//         console.log('pauseRecord', err);
//       }
//     };
  
//     onResumeRecord = async () => {
//       await this.audioRecorderPlayer.resumeRecorder();
//     };
  
//     onStopRecord = async () => {
//       const result = await this.audioRecorderPlayer.stopRecorder();
//       this.audioRecorderPlayer.removeRecordBackListener();
//       this.setState({
//         recordSecs: 0,
//         size: 45, radius: 23,
//         recordTime: ''
//       });
//       this.props.onPressOut(result,this.state.RecordTime)
//     };
  
//   }
  
  
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       addTime: (value) => { dispatch(newRecord({ type: 'NEWJOBS', payload: value })) },
  
//     }
  
//   }
  
//   export default connect(null, mapDispatchToProps)(Recorder)
  
  
//   const styles = StyleSheet.create({
  
//     titleTxt: {
//       marginTop: 100,
//       color: 'white',
//       fontSize: 28,
//     },
//     viewRecorder: {
//       marginTop: 40,
//       width: '100%',
//       alignItems: 'center',
//     },
//     recordBtnWrapper: {
//       flexDirection: 'row',
//     },
//     viewPlayer: {
//       marginTop: 60,
//       alignSelf: 'stretch',
//       alignItems: 'center',
//     },
//     viewBarWrapper: {
//       marginTop: 28,
//       marginHorizontal: 28,
//       alignSelf: 'stretch',
//     },
//     viewBar: {
//       backgroundColor: '#ccc',
//       height: 4,
//       alignSelf: 'stretch',
//     },
//     viewBarPlay: {
//       backgroundColor: 'white',
//       height: 4,
//       width: 0,
//     },
//     playStatusTxt: {
//       marginTop: 8,
//       color: '#ccc',
//     },
//     playBtnWrapper: {
//       flexDirection: 'row',
//       marginTop: 40,
//     },
//     btn: {
//       borderColor: 'white',
//       borderWidth: 1,
//     },
//     txt: {
//       color: 'white',
//       fontSize: 14,
//       marginHorizontal: 8,
//       marginVertical: 4,
//     },
//     txtRecordCounter: {
//       marginTop: 32,
//       color: 'white',
//       fontSize: 20,
//       textAlignVertical: 'center',
//       fontWeight: '200',
//       fontFamily: 'Helvetica Neue',
//       letterSpacing: 3,
//     },
//     txtCounter: {
//       marginTop: 12,
//       color: 'white',
//       fontSize: 20,
//       textAlignVertical: 'center',
//       fontWeight: '200',
//       fontFamily: 'Helvetica Neue',
//       letterSpacing: 3,
//     },
//   });