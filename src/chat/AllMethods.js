// import AudioRecorderPlayer, {
//     AVEncoderAudioQualityIOSType,
//     AVEncodingOption,
//     AudioEncoderAndroidType,
//     AudioSet,
//     AudioSourceAndroidType,
//     PlayBackType,
//     RecordBackType,
// } from 'react-native-audio-recorder-player';
// export default class AllMethods {
//     constructor() {

//         this.audioRecorderPlayer = new AudioRecorderPlayer();
//         this.audioRecorderPlayer.setSubscriptionDuration(0.1); // optional. Default is 0.5
//     }
//     onDataReturn=()=>{
//         return this.audioRecorderPlayer
//     }
//     onStartPlay = async (id,url, success) => {

//         // alert(this.props.data.currentMessage._id)
//         this.audioRecorderPlayer.stopPlayer();
//         this.audioRecorderPlayer.removePlayBackListener();
//         const msg = await this.audioRecorderPlayer.startPlayer(url);
//         const volume = await this.audioRecorderPlayer.setVolume(1.0);
//         console.log(`${url}`);
//         console.log(`${id}`);

//         this.audioRecorderPlayer.addPlayBackListener((e) => {
//             success(e,id)
//             // this.setState({
//             //     // voiceID: this.props.data.currentMessage._id,
//             //     currentPositionSec: e.currentPosition,
//             //     currentDurationSec: e.duration,
//             //     playTime: Math.floor(e.currentPosition),
//             //     duration: Math.floor(e.duration)
//             // });
//         });
//     };

//     onPausePlay = async () => {
//         await this.audioRecorderPlayer.pausePlayer();
//     };

//     onStopPlay = async () => {
//         console.log('onStopPlay');
//         this.audioRecorderPlayer.stopPlayer();
//         this.audioRecorderPlayer.removePlayBackListener();
//       }
// }