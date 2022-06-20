import React from "react";
import { Button, Image, FlatList, ScrollView, PermissionsAndroid, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { postsList } from "../DummyData/Data";
import { useNavigation } from '@react-navigation/native';


const ChatHeader = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={{
      width: "100%",
      backgroundColor: "#51b2ff",
      height: "9%", flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
      <TouchableOpacity style={{ justifyContent: 'center', left: '15%' }} onPress={() => navigation.goBack()}>
        <Icon name={"arrow-back-circle-sharp"} size={35} color={"#e3f5f7"} />
      </TouchableOpacity>
      <Text
        adjustsFontSizeToFit
        style={{
          color: "white",
          fontSize: 50,
          fontFamily: 'Italianno-mVEG',
        }}>
        Chat
      </Text>
      <TouchableOpacity
        style={{ justifyContent: 'center', right: '15%' }}>
        <Icon name={"search-circle-sharp"} size={35} color={"#e3f5f7"} />
      </TouchableOpacity>

    </View >
  );
}
const ChatUi = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('MessageUI')}
        style={{
          width: "98%",
          height: 90,
          borderColor: "black",
          borderBottomWidth: 1,
          borderRightWidth: 1,
          alignSelf: "center",
          borderRadius: 20,
          flexDirection: "row",
          backgroundColor: "white"
        }}>
        <Image resizeMode="contain"
          style={{ width: 60, height: 60, borderRadius: 50, left: 10, alignSelf: "center", borderWidth: 1, borderColor: "black" }}
          source={item.ProfileImage}></Image>
        <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", left: 50 }}>{item.userName}</Text>
        <Text style={{ fontSize: 9, alignSelf: "center", fontWeight: "bold", width: 110, height: 50, top: 10, right: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={{ fontSize: 10, textAlign: "center", fontWeight: "bold", right: 15, top: 15 }}>{item.Date}</Text>
      </TouchableOpacity>
    </View>
  );
}
const PostsContent = () => {
  const renderItem = ({ item }) => {
    return (
      <>
        <ChatUi item={item} />
      </>
    );
  }

  return (

    <FlatList
      data={postsList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (<View style={{ height: 5 }}></View>)}
    />
  )
}

const Chate = ({ item }) => (
  <SafeAreaView style={{ backgroundColor: "#e3f5f7", flex: 1 }}>
    <ChatHeader />
    <PostsContent />
  </SafeAreaView>
);


export default Chate;