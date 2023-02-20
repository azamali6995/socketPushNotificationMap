// import React, { useState, useCallback, useEffect, useMemo } from 'react'
// import { GiftedChat, InputToolbar, Send, Actions, Bubble, ActionsProps } from 'react-native-gifted-chat'
// import { View, Dimensions, StyleSheet, TouchableOpacity, Text, StatusBar, PermissionsAndroid, Image, ImageBackground, Linking, Platform, Modal, FlatList, Pressable } from 'react-native'
// import MapView from 'react-native-maps';
// import { IconButton, Appbar } from 'react-native-paper';
// import IconV from 'react-native-vector-icons/MaterialIcons';
// import VideoPlayer from 'react-native-video-player';
// // import customtInputToolbar from './customInputToolbar'
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import Recorder from './Recorder';
// import { Slider } from '@miblanchard/react-native-slider';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import DocumentPicker from 'react-native-document-picker'
// import { RNS3 } from 'react-native-aws3'
// import socketServcies from '../utils/socketService'
// import { getUserSession } from '../data/local/PrefManager';
// import { Icons } from '../utils/Icons'
// import { Colors } from '../utils/Styles';
// import { FontSize } from '../utils/Diemensions';
// import UUIDGenerator from 'react-native-uuid-generator';
// import Video from 'react-native-video';
// const windowWidth = Dimensions.get('window').width;
// import PdfThumbnail from "react-native-pdf-thumbnail";
// import CircularProgress from 'react-native-circular-progress-indicator';
// import { ChatSelector, chatSorageData } from '../redux/slices/ChatSlice'
// import  VoiceMessageAttachment from './VoiceMessage';
// import { useSelector, useDispatch } from "react-redux";
// import {
//     request,
//     check,
//     PERMISSIONS,
//     checkMultiple,
//     RESULTS,
//     requestMultiple,
//     openSettings,
// } from 'react-native-permissions';
// import AllMethods from './AllMethods';
// import { Isios } from '../utils/Helpers';
// let all = new AllMethods();
// export default function inboxDetail(props) {
//     const [uploadedphoto, setUploadedPhoto] = useState(null)
//     const [messages, setMessages] = useState([]);
//     const [imagePath, setImagePath] = useState([]);
//     const [filePath, setFilePath] = useState([]);
//     const [userId, setUserId] = useState('');
//     const [playTime, setPlayTime] = useState(0);
//     const [duration, setDuration] = useState(0);
//     const [voiceID, setVoiceID] = useState('');
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [playingVoiceId, setPlayingVoiceId] = useState('');
//     const [isFullScreen, setIsFullScreen] = useState(false);
//     const [selectedImage, setSelectedImage] = useState('');
//     const [thumb, setThumb] = useState('');
//     const [total, setTotal] = useState(0.0)
//     const [prog, setProg] = useState(0.0)
//     const [messageID, setMessageId] = useState('')
//     const [thumbIcon, setThumbIcon] = useState('')
//     const [recordTime, setRecordTime] = useState('')
//     const [roomID, setRoomId] = useState(props?.route?.params?.item?.id);
//     const [modalVisible, setModalVisible] = useState(false);
//     const [showTime, setShowTime] = useState(false);
//     const [modalProps, setModalProps] = useState(null);
//     const [receiverId, setReceiverId] = useState('');
//     const [startTime, setStartTime] = useState(0)
//     const [currentVoiceMessage, setCurrentVoiceMessage] = useState({})
//     const PauseImage=require('../assets/images/icons/Pause.png')
//     const PlayImage=require('../assets/images/icons/Play.png')
  

//     let timeData=0
//     const [muteOptions, setMuteOptions] = useState([
//         { option: 'Document', color: '#745DE9', icon: require('../assets/images/icons/document.png') },
//         { option: 'Camera', color: '#E82B6D', icon: require('../assets/images/icons/camera1.png') },
//         { option: 'Gallary', color: '#C660FF', icon: require('../assets/images/icons/gallary.png') },
//         { option: 'Audio', color: '#F86732', icon: require('../assets/images/icons/headset.png') },
//         { option: 'Location', color: '#13AE52', icon: require('../assets/images/icons/marker.png') },
//         { option: 'Contact', color: '#009DE2', icon: require('../assets/images/icons/user1.png') },
//     ])
//     const dispatch = useDispatch();
//     // const {chat} = useSelector(ChatSelector)
//     const chat = useSelector(state => state.ChatSlice)
//     const { Time } = useSelector(state => state?.TimeSlice)
//     const { navigation } = props
//     useEffect(()=>{
//        // alert(JSON.stringify(props?.route?.params?.item?.createdByUserId))
//     },[])
//     useEffect(() => {
//         // alert(JSON.stringify(chat.chat))
//         //  alert(JSON.stringify(props?.route?.params?.item.make))
//         console.log("Local Messagees", messages)
//         Icon.getImageSource('circle', 15, 'white')
//             .then(source => setThumbIcon(source));
//         getPermissions((res) => { })
//     }, [messages])
//     useEffect(() => {
//         const { id } = props?.route?.params?.item
//         socketServcies.emit("join chat", id)
//         getUserSession((data) => {
//             setReceiverId(data?.user?.id == props?.route?.params?.item?.createdByUserId?props?.route?.params?.item?.acceptedByUserId:props?.route?.params?.item?.createdByUserId)
//              setUserId(data?.user?.id) })
//         // For Receving Messages
//         socketServcies.on("chat Joined", (msg) => { setMessages(msg) })

//     }, [])



//     useEffect(() => {
//         const { id } = props?.route?.params?.item
//         var newData = [...chat.chat]
//         let ind = newData.findIndex(a => a.id == id)
//         if (messages.length > 0) {

//             if (ind != -1) {
//                 let data = { id: id, chat: messages }
//                 newData[ind] = data
//                 dispatch(chatSorageData({ type: 'NEWJOBS', payload: newData }))
//             }
//             else {
//                 let data = { id: id, chat: messages }
//                 newData.push(data)
//                 dispatch(chatSorageData({ type: 'NEWJOBS', payload: newData }))
//             }

//         }
//         else {

//             if (ind != -1) {
//                 setMessages(newData[ind].chat)
//             }

//         }
//     }, [messages])

//     useEffect(() => {
//         socketServcies.on("new message", (msg) => {
//             getUserSession((data) => {
//                 if (data?.user?.id == msg.user._id) {}
//                 else {setMessages(previousMessages => GiftedChat.append(previousMessages, msg))}
//             })

//         })
//     }, [])



//     const onSendTextMessage = useCallback((message = []) => {

//         console.log("NEw ID",userId == props?.route?.params?.item?.createdByUserId?props?.route?.params?.item?.acceptedByUserId:props?.route?.params?.item?.createdByUserId)
//         const msg = message[0]

//         const mymsg = {
//             ...msg,
//             roomId: props?.route?.params?.item?.id,
//             receiverId:userId == props?.route?.params?.item?.createdByUserId?props?.route?.params?.item?.acceptedByUserId:props?.route?.params?.item?.createdByUserId,
//             type: "text",
//             mediaUrl: ''
//         }
//         socketServcies.emit("message", mymsg)
//         setMessages(previousMessages => GiftedChat.append(previousMessages, msg))
//     }, [])


//     async function getPermissions(onDone) {
//         await requestMultiple(Platform.select({ android: [PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE, PERMISSIONS.ANDROID.RECORD_AUDIO], ios: [PERMISSIONS.IOS.MICROPHONE, PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MEDIA_LIBRARY] }),
//             {
//                 title: 'R8tr',
//                 message: 'R8tr would like access to your Storage ',
//             },
//         ).then(result => {
//             switch (result) {
//                 case RESULTS.UNAVAILABLE:
//                     console.log(
//                         'This feature is not available (on this device / in this context)',
//                     );
//                     permissionDone('Feature not available');
//                     onDone(false)
//                     break;
//                 case RESULTS.DENIED:
//                     {
//                         console.log('The permission has not been requested / is denied but requestable',);
//                         request(permissionType)
//                             .then(result => {
//                                 if (result === 'denied') {
//                                     AlertBox('Permission Denied', 'Allow location access', [
//                                         {
//                                             text: 'allow',
//                                             style: 'default',
//                                             onPress: () => openSettings(),
//                                         },
//                                     ]);
//                                 }
//                                 permissionDone(result);
//                                 onDone(true)
//                             })
//                             .catch(error => {
//                                 permissionDone(error);
//                                 onDone(false)
//                             });
//                         break;
//                     }
//                 case RESULTS.LIMITED:
//                     console.log('The permission is limited: some actions are possible');
//                     permissionDone('Limited permission');
//                     onDone(false)
//                     break;

//                 case RESULTS.GRANTED:
//                     console.log('The permission is granted');
//                     permissionDone('granted');
//                     onDone(true)
//                     break;

//                 case RESULTS.BLOCKED:
//                     console.log('The permission is denied and not requestable anymore');
//                     permissionDone('permission blocked');
//                     onDone(false)
//                     break;
//             }
//         })


//     }

//     // useEffect(() => {
//     //     setMessages([
//     //         {
//     //             _id: 1,
//     //             text: 'Hello developer',
//     //             createdAt: new Date(),
//     //             user: {
//     //                 _id: 2,
//     //                 name: 'React Native',
//     //                 avatar: 'https://placeimg.com/140/140/any',
//     //                "pending": false, "received": true, "sent": true
//     //             },
//     //         },
//     //         {
//     //             _id: 2,
//     //             text: 'Hello Abdul, How Are You?Hopefully you will be fine',
//     //             createdAt: new Date(),
//     //             user: {
//     //                 _id: 1,
//     //                 name: 'React Native',
//     //                 avatar: 'https://placeimg.com/140/140/any',
//     //                 "pending": true, "received": true, "sent": true
//     //             },
//     //         }
//     //     ])
//     // }, [])








//     const onSendVoiceMessage = useCallback((msg) => {
//         socketServcies.emit("message", msg)
//     }, [])



//     const onSendImageMessage = useCallback((msg) => {
//         socketServcies.emit("message", msg)
//     }, [])

//     const onSendVideoMessage = useCallback((msg) => {
//         socketServcies.emit("message", msg)
//     }, [])

//     const onSendFileMessage = useCallback((msg) => {
//         socketServcies.emit("message", msg)
//     }, [])

//     //Custom TextInput
//     const customtInputToolbar = (props) => {
//             return ( <InputToolbar{...props}containerStyle={styles.inputContainer}/>);
//     };
   
//     //Custom Send Button
//     const customSendButton = (props) => {

//         return (
//             <>

//                 {
//                     props?.text?.length > 0 ?

//                         <Send {...props} containerStyle={styles.sendButton}>
//                             <View style={styles.sendInnerButtonAlign}>
//                                 <IconButton icon='send-circle' size={52} />
//                             </View>
//                         </Send>
//                         :
//                      <Recorder onUpdate={(res)=> {}} onPressOut={(uri,recordTime) => {handleAudio(props, uri,'A.audio',recordTime) }} />
//                 }
                
//             </>

//         )
//     }
//     // Custom Send Audo working pending
//     const handleAudio = async (props, uri,fileName,duration) => {
//         UUIDGenerator.getRandomUUID((uuid) => {
//             const mymsg = {
//                 _id: uuid,
//                 text: '',
//                 user: props.user,
//                 roomId: roomID,
//                 fileName:fileName,
//                 receiverId:receiverId,
//                 type: "audio",
//                 // audio: {uri:uri,duratin:'2 min'},
//                 createdAt: new Date()
//             }
//             setMessageId(uuid)
//             setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg))
//             uploadDataOnRNS3(uri, 'audio/wav', new Date().toJSON(), (uploadedVoice) => {
//                 let newMessage = { ...mymsg }
//                 newMessage.audio = {uri:uploadedVoice,duration:duration}
//                 setMessages(previousMessages => GiftedChat.append(previousMessages, newMessage))
//                 onSendVoiceMessage(newMessage)
//                 setMessageId('')
//                 setProg(0.0)
//                 setTotal(0.0)


//             })
//         })
//     }


//     const renderBubble = props => {
       
//         if (props?.currentMessage?.file) {
//             return <FileView message={props?.currentMessage} />;
//         }
//         if (props?.currentMessage?.location) {
//             return <LocationView />;
//         }
//         return (
//             <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
//                 <Bubble
//                     {...props}
//                     textStyle={{
//                         right: {
//                             color: '#000000',
//                             fontSize: 16
//                         },
//                         left: {
//                             color: '#000000',
//                             fontSize: 16
//                         },
//                     }}
//                     wrapperStyle={{

//                         left: {
//                             borderBottomLeftRadius: 15,
//                             borderTopLeftRadius: 0,
//                             borderBottomRightRadius: 0,
//                             borderTopRightRadius: 0,
//                             backgroundColor: 'white',
//                             minWidth: 80,
//                             left: -45

//                         },
//                         right: {
//                             borderBottomLeftRadius: 15,
//                             borderTopLeftRadius: 0,
//                             borderBottomRightRadius: 0,
//                             borderTopRightRadius: 0,
//                             backgroundColor: '#D9FDD3',
//                             minWidth: 80,
//                             paddingRight: 23
//                         }
//                     }}
//                     timeTextStyle={{ right: { color: "black" }, left: { color: "black" } }}


//                 />
//                 {/* {renderTicks(props)} */}


//             </View>

//         );
//     }


//     // Custom Message delivered tick
//     const renderTicks = props => {
//         const { currentMessage, renderTicks, user } = props
//         return (
//             <View>
//                 {
//                     currentMessage.user._id == userId ?
//                         <View style={{}}>
//                             {
//                                 currentMessage.user.sent && currentMessage.user.received == true ?
//                                     <Text style={{ position: 'absolute', bottom: 5, right: 5, color: 'blue' }}>
//                                         ✓✓
//                                     </Text>
//                                     :
//                                     currentMessage.user.sent && !currentMessage.user.received == true ?
//                                         <Text style={{ position: 'absolute', bottom: 5, right: 5, color: '#FFFFFF' }}>
//                                             ✓✓
//                                         </Text>
//                                         :
//                                         <Text style={{ position: 'absolute', bottom: 5, right: 5, color: '#FFFFFF' }}>
//                                             ✓
//                                         </Text>

//                             }

//                         </View>
//                         : null
//                 }
//             </View>
//         )
//     };
//     // custom Attachment Button && Working Pendeing 
//     const renderAction = props => {
//         return (
//             <>
//                 <Actions
//                     {...props}
//                     containerStyle={styles.attachmentstyle}
//                     onPressActionButton={() => handleAttachment(props)}
//                     icon={() => (
//                         <Entypo name="attachment" size={25} />
//                     )}
//                 />
//                 <Actions
//                     {...props}
//                     containerStyle={styles.galleryIconstyle}
//                     icon={() =>
//                         (<Icon name={'camera-outline'} size={28} />)}
//                     onPressActionButton={() => handlGallary(props)}
//                 />
//             </>

//         )
//     }

//     const handleDocuments = async (props) => {
//         const response = await DocumentPicker.pickMultiple({ presentationStyle: 'fullScreen', allowMultiSelection: true, copyTo: 'cachesDirectory' });
//         for (let i = 0; i < response.length; i++) {
//             if (response[i].type == 'application/pdf') {

//                 const { uri, width, height } = await PdfThumbnail.generate(response[i].fileCopyUri, 0)
//                 UUIDGenerator.getRandomUUID((uuid) => {
//                     const mymsg = {
//                         _id: uuid,
//                         text: '',
//                         user: props.user,
//                         roomId: roomID,
//                         type: "file",
//                         file: { url: response[i].fileCopyUri, thumbnail: uri },
//                         createdAt: new Date()
//                     }
//                     setMessageId(uuid)
//                     setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg))

//                     uploadDataOnRNS3(response[i].fileCopyUri, 'application/pdf', new Date().toJSON(), (uploadedFile) => {
//                         let newMessage = { ...mymsg }
//                         let data = { url: uploadedFile, thumbnail: uri }
//                         newMessage.file = data
//                         onSendFileMessage(newMessage)
//                         setMessageId('')
//                         setProg(0.0)
//                         setTotal(0.0)
//                         setModalVisible(false)
//                         setModalProps(null)
//                     })
//                 })
//             }
//         }
//     }
//     const handleModalCallig = async (value) => {
//         if (value == 'Document') {
//             setModalVisible(false)
//             handleDocuments(modalProps)
//         }
//         else if (value == 'Camera') {
//             setModalVisible(false)
//             handlGallary(modalProps)
//         }
//         else if (value == 'Gallary') {

//             handlGallary(modalProps)

//         }
//         else if (value == 'Audio') {

//         }
//         else if (value == 'Location') {

//         }
//         else if (value == 'Contact') {

//         }
//         console.log(value)

//     }
//     const handlGallary = async (props) => {
//         let options = {
//             mediaType: props.text,
//             maxWidth: 800,
//             maxHeight: 800,
//             quality: 1,
//             videoQuality: 'low',
//             durationLimit: 30, //Video max duration in seconds
//             saveToPhotos: true,
//         };
//         let isCameraPermitted = await requestCameraPermission();
//         let isStoragePermitted = await requestExternalWritePermission();
//         if (isCameraPermitted && isStoragePermitted) {
//             launchCamera(options, (response) => {
//                 console.log('Response = ', response);
//                 if (response.didCancel) {
//                     alert('User cancelled camera picker');
//                     return;
//                 } else if (response.errorCode == 'camera_unavailable') {
//                     alert('Camera not available on device');
//                     return;
//                 } else if (response.errorCode == 'permission') {
//                     alert('Permission not satisfied');
//                     return;
//                 } else if (response.errorCode == 'others') {
//                     alert(response.errorMessage);
//                     return;
//                 }
//                 setImagePath(response?.assets[0].uri);
//                 UUIDGenerator.getRandomUUID((uuid) => {
//                     console.log("IDDDDDDDDDDDD", roomID)
//                     const mymsg = {
//                         _id: uuid,
//                         text: '',
//                         user: props.user,
//                         roomId: roomID,
//                         fileName:response?.assets[0].fileName,
//                         receiverId:receiverId,
//                         type: "image",
//                         image: response?.assets[0].uri,
//                         createdAt: new Date()
//                     }
//                     setMessageId(uuid)
//                     setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg))

//                     uploadDataOnRNS3(response?.assets[0].uri, 'image/jpg', new Date().toJSON(), (uploadedImage) => {
//                         let newMessage = { ...mymsg }
//                         newMessage.image = uploadedImage
//                         onSendImageMessage(newMessage)
//                         setMessageId('')
//                         setProg(0.0)
//                         setTotal(0.0)
//                         setModalProps(null)
//                         console.log("Uploaded  Image", uploadedImage)
//                     })
//                 })
//             });
//         }
//     }

//     const uploadDataOnRNS3 = async (uri, type, name, uploadeData) => {
//         await RNS3.put(
//             {
//                 uri: uri,
//                 name: name,
//                 type: type
//             },
//             {
//                 keyPrefix: "dev/job-ratings-media/photos",
//                 bucket: 'r8tr-s3-bucket',
//                 region: 'us-east-2',
//                 accessKey: 'AKIAXXROF22GBYEANMUM',
//                 secretKey: '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',
//                 successActionStatus: 201,
//             },
//         )
//             .progress((progress) => {


//                 setTotal(progress.total)
//                 setProg(Math.round((progress.loaded / progress.total) * 100))
//                 console.log("Progress of Uploading", progress)

//             })
//             .then((response) => {
//                 if (response.status !== 201) {
//                     alert('Failed to upload image to S3');
//                 }
//                 else {
//                     console.log("Uploading Done", response.body.postResponse.location);
//                     uploadeData(response.body.postResponse.location)
//                     // setUploadedPhoto(response.body.postResponse.location)
//                 }
//             });
//     }

//     const requestCameraPermission = async () => {
//         if (Platform.OS === 'android') {
//             try {
//                 const granted = await PermissionsAndroid.request(
//                     PermissionsAndroid.PERMISSIONS.CAMERA,
//                     {
//                         title: 'Camera Permission',
//                         message: 'App needs camera permission',
//                     },
//                 );
//                 // If CAMERA Permission is granted
//                 return granted === PermissionsAndroid.RESULTS.GRANTED;
//             } catch (err) {
//                 console.warn(err);
//                 return false;
//             }
//         } else return true;
//     };
//     const requestExternalWritePermission = async () => {
//         if (Platform.OS === 'android') {
//             try {
//                 const granted = await PermissionsAndroid.request(
//                     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//                     {
//                         title: 'External Storage Write Permission',
//                         message: 'App needs write permission',
//                     },
//                 );
//                 // If WRITE_EXTERNAL_STORAGE Permission is granted
//                 return granted === PermissionsAndroid.RESULTS.GRANTED;
//             } catch (err) {
//                 console.warn(err);
//                 alert('Write permission err', err);
//             }
//             return false;
//         } else return true;
//     };
//     const handleAttachment = async (props) => {
//         // setModalVisible(!modalVisible)
//         // setModalProps(props)
//         try {
//             const response = await DocumentPicker.pickMultiple(
//                 {
//                     presentationStyle: 'fullScreen',
//                     allowMultiSelection: true,
//                     copyTo: 'cachesDirectory',
//                 });
//             for (let i = 0; i < response.length; i++) 
//             {
//                 if (response[i].type == 'image/jpeg') {
//                     UUIDGenerator.getRandomUUID((uuid) => {
//                         console.log("IDDDDDDDDDDDD", roomID)
//                         const mymsg = {
//                             _id: uuid,
//                             text: '',
//                             user: props.user,
//                             roomId: roomID,
//                             fileName:response[i].name,
//                             receiverId:receiverId,
//                             type: "image",
//                             image: response[i].fileCopyUri,
//                             createdAt: new Date()
//                         }
//                         setMessageId(uuid)
//                         setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg))

//                         uploadDataOnRNS3(response[i].fileCopyUri, 'image/jpg', new Date().toJSON(), (uploadedImage) => {
//                             let newMessage = { ...mymsg }
//                             newMessage.image = uploadedImage
//                             onSendImageMessage(newMessage)
//                             setMessageId('')
//                             setProg(0.0)
//                             setTotal(0.0)
//                             console.log("Uploaded  Image", uploadedImage)
//                         })
//                     })
//                 }
//                 else if (response[i].type == 'video/mp4') {
//                     UUIDGenerator.getRandomUUID((uuid) => {
//                         console.log("IDDDDDDDDDDDD", roomID)

//                         const mymsg = {
//                             _id: uuid,
//                             text: '',
//                             user: props.user,
//                             roomId: roomID,
//                             fileName:response[i].name,
//                             receiverId:receiverId,
//                             type: "video",
//                             video: response[i].fileCopyUri,
//                             createdAt: new Date()
//                         }
//                         setMessageId(uuid)
//                         setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg))

//                         uploadDataOnRNS3(response[i].fileCopyUri, 'video/mp4', new Date().toJSON(), (uploadedVideo) => {
//                             let newMessage = { ...mymsg }
//                             newMessage.video = uploadedVideo
//                             onSendVideoMessage(newMessage)
//                             setMessageId('')
//                             setProg(0.0)
//                             setTotal(0.0)
//                         })
//                     })
//                 }
//                 else if (response[i].type == 'application/pdf') {
//                     const { uri, width, height } = await PdfThumbnail.generate(response[i].fileCopyUri, 0)
//                     UUIDGenerator.getRandomUUID((uuid) => {
//                         const mymsg = {
//                             _id: uuid,
//                             text: '',
//                             user: props.user,
//                             roomId: roomID,
//                             fileName:response[i].name,
//                             receiverId:receiverId,
//                             type: "file",
//                             file: { url: response[i].fileCopyUri, thumbnail: uri },
//                             createdAt: new Date()
//                         }
//                         setMessageId(uuid)
//                         uploadDataOnRNS3(response[i].fileCopyUri, 'application/pdf', new Date().toJSON(), (uploadedFile) => 
//                         {
//                             uploadDataOnRNS3(uri, 'image/jpg', new Date().toJSON(), (uploadedImage) => {
//                             let newMessage = { ...mymsg }
//                             let data = { url: uploadedFile, thumbnail: uploadedImage }
//                             newMessage.file = data
//                             setMessages(previousMessages => GiftedChat.append(previousMessages, newMessage))
//                             onSendFileMessage(newMessage)
//                             setMessageId('')
//                             setProg(0.0)
//                             setTotal(0.0)
//                             })
                           
//                         })
//                     })
//                 }
//             }
//         } catch (err) {
//             console.warn(err);
//         }
//     };



//     const pauseVoice = (props) => {
//         setIsPlaying(false)
//         setVoiceID('')
//         all.onStopPlay()
//         // all.onPausePlay()
//     }
//     const PlayVoice = (props) => {
//         setIsPlaying(true)
//         all.onStartPlay(props.currentMessage._id,props.currentMessage?.audio?.uri, (e,id) => {
//             setVoiceID(id)
//             console.log("Current Playing Voice Current Position",e.currentPosition)
//             setPlayTime(Math.floor(e.currentPosition))
//             millisToMinutesAndSeconds(Math.floor(e.currentPosition))
//             setDuration(Math.floor(e.duration))
//             if (e.currentPosition === e.duration) { pauseVoice()}
//         })
       
//     }
//     function millisToMinutesAndSeconds(millis) {
//         var minutes = Math.floor(millis / 60000);
//         var seconds = ((millis % 60000) / 1000).toFixed(0);
//          setStartTime(minutes + ":" + (seconds < 10 ? '0' : '') + seconds)
//       }
//     const renderMessageAudio = props => {
//         return (
//             <>
//             <View style={{ height: 30, marginHorizontal: 10, width:Platform.OS=='ios'? '96%':'91%', marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
//                 <TouchableOpacity onPress={() => { isPlaying ? pauseVoice(props) : PlayVoice(props) }} >
//                         <Image source={ voiceID == props.currentMessage._id ? PauseImage : PlayImage} style={{ height: 20, width: 20, marginRight: 10 }} />
//                 </TouchableOpacity>
//                 <Slider
//                     containerStyle={{ width: '90%' }}
//                     value={playTime}
//                     minimumValue={0}
//                     maximumValue={props.currentMessage._id == voiceID ? parseFloat(duration) :0}
//                     thumbTintColor={'#00B4D8'}
//                     minimumTrackTintColor={'#90E0EF'}
//                     maximumTrackTintColor={'grey'}
//                     thumbStyle={{ height: 13, width: 13 }}
//                     onSlidingComplete={async value => {console.log(value)}}
//                 />
//                 {props.currentMessage._id == messageID &&
//                     <View style={{ position: 'absolute', alignSelf: 'center', bottom: 7, right: -35 }}>
//                         <CircularProgress
//                             value={prog}
//                             radius={10}
//                             duration={100}
//                             progressValueColor={'blue'}
//                             inActiveStrokeColor={'grey'}
//                             activeStrokeColor={'blue'}
//                             inActiveStrokeOpacity={0.1}
//                             maxValue={100}
//                             titleColor={'white'}
//                             titleStyle={{ fontWeight: 'bold' }}
//                         // valueSuffix={'%'}
//                         />
//                     </View>
//                 }
//             </View>
//             <View style={{  paddingRight:10, flexDirection:"row", justifyContent:"space-between" }} >
//                 <View style={{paddingLeft:40}}>
//                     <Text>  
//                         {props.currentMessage._id == voiceID && startTime}
//                     </Text>
//                 </View>
//                 <View >
//                     <Text>
//                       {props.currentMessage?.audio?.duration}
//                     </Text>
//                 </View>
//             </View>
//             </>
//         )
//     }

//     const renderMessageImage = props => {
//         return (
//             <View style={{ borderRadius: 15, padding: 8 }}>
//                 <TouchableOpacity onPress={() => {
//                         setIsFullScreen(true)
//                         setSelectedImage(props.currentMessage.image)

//                     }}
//                 >
//                     <Image
//                         resizeMode="cover"
//                         style={{
//                             width: 180,
//                             height: 180,
//                             borderRadius:5
                            
//                         }}
//                         source={{ uri: props.currentMessage.image }}
//                     />

//                     {props.currentMessage._id == messageID && <View style={{ position: 'absolute', alignSelf: 'center', bottom: 2, right: -25 }}>
//                         <CircularProgress
//                             value={prog}
//                             radius={10}
//                             duration={100}
//                             progressValueColor={'blue'}
//                             inActiveStrokeColor={'grey'}
//                             activeStrokeColor={'blue'}
//                             inActiveStrokeOpacity={0.1}
//                             maxValue={100}
//                             titleColor={'white'}
//                             titleStyle={{ fontWeight: 'bold' }}
//                         // valueSuffix={'%'}
//                         />
//                     </View>}
//                 </TouchableOpacity>
//             </View>
//         );

//     }



//     const renderMessageVideo = props => {
//         return (
//             <View style={{ backgroundColor: "black", height: 230, width: 200, margin: 10 }}>
//                 <VideoPlayer
//                     style={{ marginTop: 10, backgroundColor: 'black' }}
//                     video={{ uri: props.currentMessage.video }}
//                     videoWidth={200}
//                     videoHeight={200}
//                     thumbnail={{ uri: props.currentMessage.video }}
//                     onHideControls={() => { navigation.navigate("Player", { uri: props.currentMessage.video, visible: true }) }}
//                     endWithThumbnail={{ uri: props.currentMessage.video }}
//                     disableControlsAutoHide
//                 />
//                 {props.currentMessage._id == messageID && <View style={{ position: 'absolute', alignSelf: 'center', bottom: 7, right: -25 }}>
//                     <CircularProgress
//                         value={prog}
//                         radius={10}
//                         duration={100}
//                         progressValueColor={'blue'}
//                         inActiveStrokeColor={'grey'}
//                         activeStrokeColor={'blue'}
//                         inActiveStrokeOpacity={0.1}
//                         maxValue={100}
//                         titleColor={'white'}
//                         titleStyle={{ fontWeight: 'bold' }}
//                     // valueSuffix={'%'}
//                     />
//                 </View>}
//             </View>
//         )
//     }
//     const LocationView = () => {
//         const location = {
//             latitude: 31.512609427862525,
//             longitude: 74.27018175011443,
//             latitudeDelta: 0.0922 * 10,
//             longitudeDelta: 0.0421 * 10
//         }



//         const openMaps = () => {
//             const url = Platform.select({
//                 ios: `http://maps.apple.com/?ll=${location.latitude},${location.longitude}`,
//                 android: `http://maps.google.com/?q=${location.latitude},${location.longitude}`,
//             });
//             Linking.canOpenURL(url)
//                 .then((supported) => {
//                     if (supported) {
//                         return Linking.openURL(url);
//                     }
//                 })
//                 .catch((err) => {
//                     console.error('An error occurred', err);
//                 });
//         };
//         return (
//             <TouchableOpacity
//                 onPress={openMaps}
//                 style={{ backgroundColor: 'gray', width: 200, height: 200, marginTop: 5 }}>
//                 <MapView
//                     style={{ height: 200, width: 200 }}
//                     initialRegion={location}
//                     scrollEnabled={false}
//                     zoomEnabled={false}
//                 />
//             </TouchableOpacity>
//         );
//     }
//     const FileView = (message) => {
//         console.log(message?.message)
//         const openUrl = (url) => {
//             Linking.canOpenURL(url)
//                 .then((supported) => {
//                     if (supported) {
//                         return Linking.openURL(url);
//                     }
//                 })
//                 .catch((err) => {
//                     console.error('An error occurred', err);
//                 });
//         }
//         return (
//             <TouchableOpacity style={{ backgroundColor:message?.message?.user?._id==userId? '#D9FDD3':'white',width:240,padding:10,borderBottomLeftRadius:20,marginLeft:message?.message?.user?._id==userId?0:-42,marginTop:2}} onPress={() => { openUrl(message?.message?.file?.url) }}>
//                 <Image source={{ uri: message?.message?.file?.thumbnail }} style={{ height: 220, width: 220,borderRadius:10 }} resizeMode='cover' />
//             </TouchableOpacity>
//         );
//     }
//     return (
//         <View style={{ flex: 1, }}>
//             <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
//             {
//                 isFullScreen?
//                 <View style={{ flex:1, backgroundColor: 'black', elevation: 1 }}>
//                 <TouchableOpacity style={{height: 40, width: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 5,marginTop:10,marginLeft:10}} onPress={() => {
//                         setIsFullScreen(false)
//                         setSelectedImage('')
//                     }}>
//                         <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>X</Text>
//                     </TouchableOpacity>
//                     <Image source={{ uri: selectedImage }} resizeMode='contain' style={{ height: '90%', width: '100%' }} />
//                 </View>
//             :
//             <>
//                 <View style={{ height: 63, backgroundColor: 'black', flexDirection: 'row', alignItems: 'center', elevation: 1, marginTop: Platform.OS == 'ios' ? '7.5%' : '0.0%' }}>
//                 <TouchableOpacity style={{ height: 45, width: 45, justifyContent: 'center' }} onPress={() => { props.navigation.goBack() }}>
//                     <Icons.AntDesign name="left" size={FontSize(25)} color={Colors.white} style={{ marginLeft: 5 }} />
//                 </TouchableOpacity>
//                 {/* <ImageBackground style={styles.iconbackimage} source={require('../assets/images/icons/HexagonBlack.png')}> */}
//                 <Image style={{ height: 50, width: 50, borderRadius: 25, }} resizeMode='stretch' source={{ uri: props?.route?.params?.item.category.icon }}></Image>
//                 <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginLeft: 8 }}>{props?.route?.params?.item?.make?.toUpperCase()}</Text>
//             </View>
//             <GiftedChat
//                 isTyping={true}
//                 alwaysShowSend={true}
//                 placeholder='Type a message'
//                 messages={messages}
//                 multiline={true}
//                 scrollToBottom={true}
//                 textInputStyle={{ paddingRight: 40, paddingRight: 60 }}
//                 onSend={messages => onSendTextMessage(messages)}
//                 keyboardShouldPersistTaps={'never'}
//                 user={{ _id: userId }}
//                 // renderTime={props=>customRenderTime(props)}
//                 renderInputToolbar={props =>customtInputToolbar(props)} //For textInput
//                 renderSend={props => customSendButton(props)} // For Send Button
//                 renderBubble={props => renderBubble(props)} // For Custom Message & design
//                 renderActions={(props) => renderAction(props)} // For Attachment Button
//                 renderMessageAudio={(props) => <VoiceMessageAttachment data={ props?.currentMessage}/>}
//                 // renderMessageAudio={(props) => renderMessageAudio(props)}
//                 renderMessageImage={(props) => renderMessageImage(props)}
//                 renderMessageVideo={(props) => renderMessageVideo(props)}
//             />
//             </>
//             }
//              {/* <Modal
//                 animationType="fade"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                     setModalVisible(!modalVisible);
//                 }}>
//                 <View style={styles.centeredView}>
//                     <View style={styles.modalView}>
//                         <FlatList
//                             data={muteOptions}
//                             keyExtractor={(item, index) => item.id}
//                             numColumns={3}
//                             renderItem={({ item, index }) => {
//                                 return (
//                                     <View style={{ height: "100%", width: "33%", }}>
//                                         {console.log(item)}
//                                         <TouchableOpacity onPress={() => { handleModalCallig(item.option) }}
//                                             style={{ marginVertical: 15, alignItems: "center" }}>
//                                             <View
//                                                 style={{
//                                                     width: 60,
//                                                     height: 60,
//                                                     borderRadius: 30,
//                                                     backgroundColor: item.color,
//                                                     justifyContent: "center",
//                                                     alignItems: "center",
//                                                     marginVertical: 5,
//                                                     marginHorizontal: 18
//                                                 }}>
//                                                 <Image source={item.icon} style={{ width: 20, height: 20 }} />
//                                             </View>
//                                             <Text
//                                                 style={{
//                                                     // color: '#36BAAE',
//                                                     textAlign: "center",
//                                                     fontSize: 12,
//                                                     // paddingLeft: 7,
//                                                 }}>
//                                                 {item.option}
//                                             </Text>
//                                             <View />
//                                         </TouchableOpacity>
//                                     </View>
//                                 );
//                             }}
//                         />
//                         <View
//                             style={{
//                                 flexDirection: 'row',
//                                 alignItems: "flex-end",
//                                 justifyContent: 'flex-end',
//                                 marginRight: 15
//                             }}>
//                             <TouchableOpacity
//                                 style={styles.muteOptButton}
//                                 onPress={() => setModalVisible(!modalVisible)}>
//                                 <Text
//                                     style={{
//                                         //   color: '#36BAAE',
//                                         fontSize: 17,
//                                         paddingLeft: 10,
//                                     }}>
//                                     Cancel
//                                 </Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity
//                                 style={styles.muteOptButton}
//                                 onPress={() => setModalVisible(!modalVisible)}>
//                                 <Text
//                                     style={{
//                                         //   color: '#36BAAE',
//                                         fontSize: 17,
//                                         paddingLeft: 20,
//                                     }}>
//                                     OK
//                                 </Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </View>
//             </Modal> */}
//         </View>



//     )
// }

// const styles = StyleSheet.create({
//     inputContainer: {
//         marginLeft: 10,
//         marginRight: 60,
//         marginBottom: 2,
//         borderRadius: 10,
//         borderWidth: 0,
//         height: 48,
//     },
//     sendButton: {
//         position: 'absolute',
//         right: -50,
//         bottom: -2,
//     },
//     sendInnerButtonAlign: {
//         height: 45,
//         width: 45,
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     BubbleDesign: {
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     },
//     innerTextStyle: {
//         right: {
//             color: '#000000',
//             fontSize: 16
//         },
//         left: {
//             color: '#000000',
//             fontSize: 16
//         },
//     },
//     wrapTextStyle: {
//         left: {
//             borderBottomLeftRadius: 15,
//             borderTopLeftRadius: 0,
//             borderBottomRightRadius: 0,
//             borderTopRightRadius: 0,
//             backgroundColor: "white",
//             minWidth: 80,
//             left: -45

//         },
//         right: {
//             borderBottomLeftRadius: 15,
//             borderTopLeftRadius: 0,
//             borderBottomRightRadius: 0,
//             borderTopRightRadius: 0,
//             backgroundColor: '#D9FDD3',
//             minWidth: 80
//         }
//     },
//     deliveredTick: {
//         zIndex: 40,
//         marginTop: 20,
//         color: 'black'
//     },
//     attachmentstyle: {
//         position: "absolute",
//         right: 60,
//         top: 12,
//         // bottom: 1,
//         zIndex: 9999,
//     },
//     galleryIconstyle: {
//         position: "absolute",
//         right: 20,
//         top: 8,
//         bottom: 2,
//         zIndex: 9999,
//     },
//     iconbackimage: {
//         height: 50,
//         width: 50,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     progressContainer: {
//         marginLeft: Platform.OS == 'android' ? -5 : -50,
//         height: 40,
//         width: '100%',
//         flexDirection: 'row',
//         transform: [{ scaleX: Platform.OS == 'android' ? 1.0 : 0.6 }, { scaleY: Platform.OS == 'android' ? 1.0 : 0.6 }]


//     }, modalView: {
//         backgroundColor: "white",
//         // backgroundColor:"yellow",
//         height: "54%",
//         width: "95%",
//         padding: 15,
//         borderRadius: 20,
//     },
//     centeredView: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//         backgroundColor: 'rgba(52, 52, 52, 0.8)',
//         marginBottom: "15%"
//     }

// })