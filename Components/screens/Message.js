import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect, useRef, memo } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import Animated from "react-native-reanimated";
import MessageList from './MessageList';

import { useNavigation } from '@react-navigation/native';




const HeaderMessage = () => {
  const navigation = useNavigation();

  return (
    <View style={{
      paddingTop: 5,
      backgroundColor: "#51b2ff",
      flexDirection: "row",
    }}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <TouchableOpacity style={{ justifyContent: 'center', left: '15%' }} onPress={() => navigation.goBack()}>
          <Icon name={"arrow-back-circle-sharp"} size={35} color={"#e3f5f7"} />
        </TouchableOpacity>
        <TouchableOpacity style={{ left: 20 }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 }}
            source={require("../../New/76965266_557556558365845_7249997751625187328_n.jpg")}
          ></Image>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white", alignSelf: "center" }}>IbraHem</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "#00ff1b", alignSelf: "center" }}>Online</Text>
        </View>
        <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-around", alignItems: "center" }}>
          <TouchableOpacity>
            <Icon name='call' size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='videocam' size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='settings' size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const ChatInput = () => {
  const [message, setMessage] = useState("");
  var inputRef;

  return (
    <KeyboardAvoidingView style={{ flexDirection: "row", justifyContent: "space-between" }}>

      <View style={{
        flex: 1,
        flexDirection: "row",
        borderRadius: 20,
        backgroundColor: "#ccccc7",
        borderBottomWidth: 1,
        borderRightWidth: 1
      }}>
        <TouchableOpacity style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center" }}>
          <Icon name='happy' size={30} color="#434343" />
        </TouchableOpacity>
        {/* <TextInput
              multiline
              placeholder='Type Here...'
              textAlign='center'
              placeholderTextColor={"black"}
              value={message}
              onChangeText={text => setMessage(text)}
              style={{ width: 180, height: 35, borderRadius: 20, color: "black", textAlign: "center" }}></TextInput> */}

        <TextInput multiline style={{
          flex: 1,
          color: 'black',
          backgroundColor: '#ccc',
          borderRadius: 25,
          fontSize: 16
        }} ref={(ref) => { inputRef = ref; }} value={message} onChangeText={setMessage} placeholder={"Message here"} placeholderTextColor={"black"}></TextInput>

        <TouchableOpacity style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center" }}>
          <Icon name='document' size={30} color="#434343" />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center" }}>
          <Icon name='camera' size={30} color="#434343" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ marginLeft: "3%", width: 50, height: 50, backgroundColor: "#51b2ff", alignItems: "center", borderRadius: 50, justifyContent: "center" }}>
        <Icon name={message ? "send" : "mic"} size={20} color="#434343" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}






export default function Message() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderMessage />
      <MessageList />
      <ChatInput />
    </SafeAreaView>
  )
}