
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet,} from 'react-native'
// import { TextInput, ActivityIndicator } from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { PROVIDER_GOOGLE, Marker, Circle,Callout } from 'react-native-maps';
export default function NewMap() {
    const [vallatitude, setValLatitude] = React.useState(null);
    const [valLng, setValLng] = useState(null)
    
        const ref = useRef();
      
        useEffect(() => {
          ref.current?.setAddressText('');
        }, []);


  return (
    <View style={{flex:1}}>
            
      <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: vallatitude == null ? 37.78825 : vallatitude,
         longitude: valLng == null ?  -122.4324 : valLng,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}>
        <Circle
        center={{latitude: vallatitude == null ? 37.78825 : vallatitude,
            longitude: valLng == null ?  -122.4324 : valLng}}
        radius={1000}
        zIndex={99999}
        strokeWidth={2}
        strokeColor={'#e3e4e5'}
        fillColor='rgba(178, 190, 181,0.4)'
      />
        <Marker
            coordinate={{latitude: vallatitude == null ? 37.78825 : vallatitude,
            longitude: valLng == null ?  -122.4324 : valLng}}
            title={"title"}
            description={"description"}
         />
         

        </MapView>
       <GooglePlacesAutocomplete
                ref={ref}
                placeholder='Find a place'
                fetchDetails={true}
                onPress={(data, details) => {
                    console.log("Helloooo", details?.geometry?.location.lng);
                    setValLatitude(details?.geometry?.location?.lat)
                    setValLng(details?.geometry?.location?.lng)
                }}
                query={{
                    key: 'fasdfasdfalhlkasjdf',
                    language: 'en',
                }}

                styles={styles.placeholderAutocomplete}
                />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    placeholderAutocomplete:{
        textInputContainer: {
          backgroundColor: 'gray',
        },
        overlay: {
            position: 'absolute',
            bottom: 50,
            backgroundColor: 'yellow',
          },
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
      }
    
   });