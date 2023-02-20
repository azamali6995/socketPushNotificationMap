// import React, {useRef, useState,Component} from 'react';
// import {ActivityIndicator, Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';
// import { Slider } from '@miblanchard/react-native-slider';
// const PauseImage=require('../assets/images/icons/Pause.png')
// const PlayImage=require('../assets/images/icons/Play.png')
// export default class VoiceMessageAttachment extends Component{
//   constructor(props) {
//     super(props)
//    this.audioRecorderPlayer = new AudioRecorderPlayer();
// }
// componentDidMount()
// {
//   console.log(">>>>>>>>>",this.props?.data?.audio?.duration)
// }
//     state={
//         currentPositionSec:0,
//         loadingAudio:false,
//         paused:false,
//         currentDurationSec:this.props?.data?.audio?.duration,
//         playTime:0,
//         durations:this.props?.data?.audio.duration,
//         voiceID:'',
//         playTime1:0,
//         duration1:0,
//         isPlaying:false,
//         singleplayer:true
//     }

//    onStartPlay =  () => 
//    {
    

//       this.setState({paused:false,loadingAudio:true,voiceID:this.props?.data?._id,isPlaying:true, singleplayer:false})
//       this.audioRecorderPlayer.startPlayer(this.props?.data?.audio?.uri);
//       this.setState({loadingAudio:false})
//       this.audioRecorderPlayer.addPlayBackListener(e => {
//         if (e.currentPosition < 0) {
//           return;
//         }
//         this.setState({duration1:Math.floor(e.duration),playTime1:Math.floor(e.currentPosition),
//           currentPositionSec:e.currentPosition,durations:e.duration,
//           playTime:this.audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
//           durations:this.audioRecorderPlayer.mmssss(Math.floor(e.duration))})
//         if (e.currentPosition === e.duration) {
//           this.onStopPlay();
//         }
//         return;
//       });
  
//   };
//    onPausePlay = async () => {
//     this.setState({paused:true,voiceID:this.props?.data?._id})
//     await this.audioRecorderPlayer.pausePlayer();
//   };
//    onStopPlay = async () => {
//     this.setState({paused:false,currentPositionSec:0,playTime:0,isPlaying:false,voiceID:'', singleplayer:true})
//     this.setState({isPlaying:false,loadingAudio:false})
//     this.audioRecorderPlayer.stopPlayer();
//    this.audioRecorderPlayer.removePlayBackListener();
//   };

//   render()
//   {

//   return (
//     <View style={styles.container}>
//       {console.log('thisStateeeeeee', this.state)}
//       <View style={styles.audioPlayerContainer}>
//         {this.state.loadingAudio ? (
//           <View style={styles.loadingIndicatorContainer}>
//             <ActivityIndicator size="small" />
//           </View>
//         ) : this.state.currentPositionSec > 0 && !this.state.paused ? (
//           <TouchableOpacity onPress={this.onPausePlay} >
//             <Image source={PauseImage} style={{ height: 20, width: 20, marginRight: 10 }} />
//           </TouchableOpacity>
         
//         ) : (
//           <TouchableOpacity onPress={this.state.singleplayer== false ? null : this.onStartPlay} >
//             <Image source={PlayImage} style={{ height: 20, width: 20, marginRight: 10 }} />
//           </TouchableOpacity>
         
//         )}
//         <View style={styles.progressIndicatorContainer}>
//         <Slider
//                     containerStyle={{ width: '90%' }}
//                     value={this.props?.data?._id == this.state.voiceID ? this.state.playTime1:0}
//                     minimumValue={0}
//                     maximumValue={this.props?.data?._id == this.state.voiceID ? parseFloat(this.state.duration1) :0}
//                     thumbTintColor={'#00B4D8'}
//                     minimumTrackTintColor={'#90E0EF'}
//                     maximumTrackTintColor={'grey'}
//                     thumbStyle={{ height: 13, width: 13 }}
//                     onSlidingComplete={async value => {}}
//                 />
//           <View
//           />
//         </View>
//       </View>
//       <View style={styles.progressDetailsContainer}>
//         <Text style={styles.progressDetailsText}>{this.state.playTime}</Text>
//         <Text style={styles.progressDetailsText}>{this.state.durations}</Text>
//       </View>
//     </View>
//   )}
// };


// const styles = StyleSheet.create({
//     loadingIndicatorContainer: {
//       padding: 7,
//     },
//     container: {
//       padding: 5,
//       width: 250,
//     },
//     audioPlayerContainer: {flexDirection: 'row', alignItems: 'center'},
//     progressDetailsContainer: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//     },
//     progressDetailsText: {
//       paddingHorizontal: 5,
//       color: 'grey',
//       fontSize: 10,
//     },
//     progressIndicatorContainer: {
//       flex: 1,
//       backgroundColor: '#E2E2E2',
//     },
//     progressLine: {
//       borderWidth: 1,
//       borderColor: 'black',
//     },
//   });