import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Image, Text, ScrollView, Pressable, FlatList, StatusBar } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { postsList } from '../DummyData/Data';
import { useNavigation } from '@react-navigation/native';


const ProfileUI = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EEFDFF" }}>
      <StatusBar backgroundColor={"#74EEFF"} />
      <Pressable
        onPress={() => navigation.goBack()}
        style={{ backgroundColor: "#74EEFF", height: 45, flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
        <Ionic
          name='arrow-back-circle'
          size={40}
          style={{ right: 45 }}
        />
        <Text style={{ fontSize: 45, fontFamily: "Italianno-mVEG", color: "#1993DF", right: 55, }}>Profile</Text>
      </Pressable>
      <View style={{ flexDirection: "row", alignSelf: "center", left: 15 }}>
        <Image
          resizeMode='cover'
          style={{ width: 100, height: 100, borderRadius: 50, alignSelf: "center", marginTop: 10 }}
          source={require("../../New/76965266_557556558365845_7249997751625187328_n.jpg")} />
        <TouchableOpacity style={{ marginTop: 5 }}>
          <Ionic
            name="settings"
            size={40}
          />
        </TouchableOpacity>
      </View>
      <View style={{ alignSelf: "center", margin: 5 }}>
        <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold", color: "#0968BD", margin: 5 }}>@Ebrahem_K3</Text>
        <Text style={{ textAlign: "center", fontSize: 13, color: "black" }}>"Hi, Kamala. I love you," Biden said as he opened his remarks. " You always have my back. You’re really amazing. You’re the best partner I could imagine."</Text>
      </View>
      <View style={{ alignSelf: "center", flexDirection: "row", justifyContent: "space-around", width: "100%", marginTop: 5 }}>
        <View style={{ margin: 2 }}>
          <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold", color: "#1993DF" }}>Followig</Text>
          <Text style={{ textAlign: "center", fontSize: 20, color: "black", fontWeight: "bold" }}>394</Text>
        </View>
        <View style={{ margin: 2 }}>
          <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold", color: "#1993DF" }}>Followers</Text>
          <Text style={{ textAlign: "center", fontSize: 20, color: "black", fontWeight: "bold" }}>10K</Text>
        </View>
      </View>
      <View style={{
        margin: 5,
        alignSelf: "center", flexDirection: "row", justifyContent: "space-around", width: "100%", marginTop: 15
      }}>
        <TouchableOpacity style={{
          alignItems: "center", justifyContent: "space-around", flexDirection: "row",
          width: 170, height: 50, backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: "blue", borderRadius: 15
        }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, left: 10 }}>
            New Post
          </Text>
          <Ionic
            name='add-circle'
            size={40}
            color="#1993DF"
          />
        </TouchableOpacity>
        <TouchableOpacity style={{
          alignItems: "center", justifyContent: "space-around", flexDirection: "row",
          width: 170, height: 50, backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: "blue", borderRadius: 15
        }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, left: 10 }}>
            Edite Profile
          </Text>
          <Ionic
            name='create'
            size={40}
            color="#1993DF"
          />
        </TouchableOpacity>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 25, left: 10, color: "#1993DF", margin: 5 }}>
        MY Posts:-
      </Text>
      <MyTabs />
    </SafeAreaView>
  );
};
const GellaryScreen = () => {

  return (
    <Post />
  );
}
const GellaryScreens = ({ item }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable

        style={{
          alignItems: "center"
        }}>

        <Image
          resizeMode="contain"
          style={{ width: "95%", height: 150, backgroundColor: "black", margin: 5, borderRadius: 15 }}
          source={item.Media} />
      </Pressable>
    </SafeAreaView>
  );
}
const Post = () => {


  return (
    <FlatList
      data={postsList}
      renderItem={GellaryScreens}
      keyExtractor={(item) => item.id}
      numColumns={3}
    />
  );
}
const VideosScreen = () => {


  return (
    <Post />
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={'Gellary'}
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let colors;
            if (route.name == 'Gellary')
              iconName = focused ? 'images' : 'images-outline'
            else if (route.name == 'Videos')
              iconName = focused ? 'play-circle' : 'play-circle-outline'
            colors = focused ? '#C8E5FF' : 'black'
            return <Icon name={iconName} color={colors} size={24} />
          },
        })
      }

    >
      <Tab.Screen
        options={{ tabBarShowLabel: false }}
        name="Gellary" component={GellaryScreen} />
      <Tab.Screen
        options={{ tabBarShowLabel: false }}
        name="Videos" component={VideosScreen} />
    </Tab.Navigator>
  );
}

export default ProfileUI;