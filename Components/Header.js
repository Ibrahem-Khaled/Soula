import React, { useState } from "react";
import { Text, TouchableOpacity, PermissionsAndroid, View, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker'

const SoulaHeader = (object,) => {
  const navigation = useNavigation();
  const [responseGallery, setResponseGallery] = useState(null);

  // const requestCameraPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //       {
  //         title: "Cool Photo App Camera Permission",
  //         message:
  //           "Cool Photo App needs access to your camera " +
  //           "so you can take awesome pictures.",
  //         buttonNeutral: "Ask Me Later",
  //         buttonNegative: "Cancel",
  //         buttonPositive: "OK"
  //       }
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log("You can use the camera");
            // ImagePicker.launchCamera(
            //   {
            //     mediaType: 'photo',
            //     includeBase64: false,
            //     maxHeight: 200,
            //     maxWidth: 200,
            //   },
            //   (response) => {
            //     console.log(response);
            //     setResponseCamera(response);
            //     setResponseGallery(null);
            //   },
            // );
  //     } else {
  //       console.log("Camera permission denied");
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  return (
    <View style={{
      width: "100%", height: 52,
      backgroundColor: "#51b2ff",
      flexDirection: 'row',
      justifyContent: 'space-between',
      ...object.contentStyle
    }}>

      <TouchableOpacity
        onPress={() => {
          ImagePicker.launchImageLibrary(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            },
            (response) => {
              setResponseGallery(response);
            },
          )
        }}
        style={{ justifyContent: 'center', left: '15%' }}>
        <Icon name={"image-outline"} size={35} color={"white"} />
      </TouchableOpacity>
      <Text
        adjustsFontSizeToFit
        style={{
          color: "white",
          fontSize: 45,
          fontFamily: 'Italianno-mVEG',
          ...object.titleStyle
        }}>
        {object.title}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat')}
        style={{ justifyContent: 'center', right: '15%' }}>
        <Icon name={"chatbubble-ellipses-outline"} size={35} color={"white"} />
      </TouchableOpacity>
    </View>
  );
}

export default SoulaHeader;