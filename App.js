
import React from 'react';

import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  StatusBar,
  I18nManager,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SoulaHeader from './Components/Header';
import Logo from './Components/Logo';
import Icon from 'react-native-vector-icons/Ionicons';
import Homee from './Components/screens/Homeee';
import Searchs from './Components/screens/Searchs';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView, } from '@react-navigation/drawer';
import Chate from './Components/screens/Chaat';
import Message from './Components/screens/Message';
import { useNavigation } from '@react-navigation/native';
import InviteUI from './Components/screens/InviteUI';
import CustomVideo from './Components/VideoControls';
import Orientation from 'react-native-orientation-locker';

Orientation.lockToPortrait();

// import RNBootSplash from "react-native-bootsplash";

I18nManager.allowRTL(false);

const LoginScreen = ({ navigation }) => {
  return (

    <ImageBackground
      style={{ flex: 1, justifyContent: 'space-around' }}
      source={require('./New/ionut-comanici-RDcEWH5hSDE-unsplash.jpg')}
      blurRadius={10}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, top: '7.5%' }}>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image source={require("./New/89234398_paddsed_logo.png")}
              style={{
                alignSelf: 'center',
                width: 200,
                height: 100,
                borderRadius: 30,
              }}></Image>
          </View>
          <View style={{ flex: 1, justifyContent: "space-around", }}>

            <TouchableOpacity style={{ alignSelf: 'center', justifyContent: "center", flexDirection: "row", backgroundColor: "#0a7ad3", height: 65, width: 300, borderRadius: 15 }}>
              <Image style={{ width: 60, height: 60, right: 25, top: 3 }}
                source={require("./New/icons/FB.png")}
              >
              </Image>

              <Text style={{ fontSize: 30, color: "white", fontWeight: "bold", alignSelf: "center" }}>
                Login with FB
              </Text>

            </TouchableOpacity>

            <Text style={{ fontSize: 25, color: "black", alignSelf: "center", padding: 30 }}>
              Other
            </Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MainScreen')}
            >
              <Image style={{ width: 60, height: 60 }}
                source={require("./New/icons/google.png")}
              >
              </Image>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={{ width: 60, height: 60 }}
                source={require("./New/icons/snapchat-logo.png")}
              ></Image>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={{ width: 60, height: 60 }}
                source={require("./New/icons/Twitter.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground >
  );

};
const ChatScreen = ({ navigation }) => {
  return (

    <Chate />

  )
}
const HomesScreen = () => {
  return (
    <>
      <StatusBar backgroundColor={"#51b2ff"} barStyle='dark-content' />

      <Homee />
    </>
  )
}

const VoiceScreen = () => {
  return (
    <View>

    </View>
  )
}
const MessageUi = () => {
  return (
    <Message />
  )
}
const InviteScreen = () => {
  return (
    <InviteUI />
  )
}

function ProfileScreen(props) {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView>
        <View style={{ bottom: 4, height: 135 }}>
          <View style={{ flexDirection: "row" }}>
            <Image style={{ borderRadius: 50, width: 60, height: 60, margin: 10 }}
              source={require("./New/76965266_557556558365845_7249997751625187328_n.jpg")}></Image>

            <View style={{ flexDirection: "column", alignSelf: "center", }}>
              <Text style={{ fontWeight: "bold", fontSize: 20, }}>BElo0</Text>
              <Text style={{ fontWeight: "bold", fontSize: 13 }}>ID:-1999991</Text>
              <Text style={{ borderRadius: 5, fontWeight: "bold", color: "white", backgroundColor: "#00CEFF", fontSize: 15, borderWidth: 1 }}>LEVEL:- 5</Text>
            </View>
          </View>
          <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
            <TouchableOpacity style={{ borderBottomWidth: 1, borderRightWidth: 2, justifyContent: "space-around", alignItems: "center", width: 120, height: 35, backgroundColor: "#FFE28F", flexDirection: "row", borderRadius: 8 }}>
              <Image style={{ width: 30, height: 30 }}
                source={require("./New/icons/coin.png")}>
              </Image>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>COINS:-987</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderBottomWidth: 1, borderRightWidth: 2, justifyContent: "space-around", alignItems: "center", width: 120, height: 35, backgroundColor: "#FABE2C", flexDirection: "row", borderRadius: 8 }}>
              <Image style={{ width: 30, height: 30 }}
                source={require("./New/icons/money.png")}>
              </Image>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Point:-3000</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{}}>
          <TouchableOpacity style={{ justifyContent: "space-around", alignItems: "center", width: 220, height: 44, flexDirection: "row", borderRadius: 11, borderBottomWidth: 1, borderRightWidth: 2, margin: 7 }}>
            <Image style={{ width: 30, height: 30 }}
              source={require("./New/icons/users.png")}>
            </Image>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: "space-around", alignItems: "center", width: 220, height: 44, flexDirection: "row", borderRadius: 11, borderBottomWidth: 1, borderRightWidth: 2, margin: 7 }}>
            <Image style={{ width: 30, height: 30 }}
              source={require("./New/icons/info.png")}>
            </Image>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>About US</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: "space-around", alignItems: "center", width: 220, height: 44, flexDirection: "row", borderRadius: 11, borderBottomWidth: 1, borderRightWidth: 2, margin: 7 }}>
            <Image style={{ width: 30, height: 30 }}
              source={require("./New/icons/language.png")}>
            </Image>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>language</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: "space-around", alignItems: "center", width: 220, height: 44, flexDirection: "row", borderRadius: 11, borderBottomWidth: 1, borderRightWidth: 2, margin: 7 }}>
            <Image style={{ width: 30, height: 30 }}
              source={require("./New/icons/coin.png")}>
            </Image>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>buy coins</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: "space-around", alignItems: "center", width: 220, height: 44, flexDirection: "row", borderRadius: 11, borderBottomWidth: 1, borderRightWidth: 2, margin: 7 }}>
            <Image style={{ width: 30, height: 30 }}
              source={require("./New/icons/money.png")}>
            </Image>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Make Point</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: "space-around", alignItems: "center", width: 220, height: 44, flexDirection: "row", borderRadius: 11, borderBottomWidth: 1, borderRightWidth: 2, margin: 7 }}
            onPress={() => navigation.navigate('Invite')}
          >
            <Image style={{ width: 30, height: 30 }}
              source={require("./New/icons/invitation.png")}>
            </Image>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Invite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: "#ffb3b3", justifyContent: "space-around", alignItems: "center", alignSelf: "center", width: 220, height: 44, flexDirection: "row", borderRadius: 11, borderBottomWidth: 1, borderRightWidth: 2, marginTop: 30, }}>
            <Image style={{ width: 30, height: 30 }}
              source={require("./New/icons/emergency-exit.png")}>
            </Image>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <Searchs />
    </SafeAreaView>
  )
}
const VideoScreen = () => {

  const onVideoError = () => {
    // setdisplayLoading(false);
    // setMessage('تعذر تحميل الفيديو!');
  }

  const onLoadStart = () => {
    // setdisplayLoading(true);
    // Pause.current = true;
  }

  const onVideoLoad = (data) => {
    // Duration.current = (data.duration + .7) * 1000;
    // Pause.current = false;
    // setdisplayLoading(false);
  }


  return (
    <SafeAreaView style={{
      flex: 1,
      // justifyContent: 'center',
      // backgroundColor: 'black',
    }}>
      {/* <VideoPlayer
        // source={{ uri: "https://cdn.videvo.net/videvo_files/video/premium/video0230/large_watermarked/06_Mis_Kudina_42_eat_banan_preview.mp4" }}
        source={require("./New/11.mp4")}
        // navigator={this.props.navigator}
        tapAnywhereToPause={true}
        toggleResizeModeOnFullscreen={false}
        isFullScreen={false}
        // thumbnail={imageUrl}
        disableBack={true}
        disableVolume={true}
        controlTimeout={5000}
        // paused={this.state.paused}
        seekColor={'red'}
      /> */}
      <CustomVideo />
    </SafeAreaView>
  )
}
const Drawer = createDrawerNavigator();
// const Drawers = () => {
//   return (
//     <NavigationContainer /*onReady={() => RNBootSplash.hide()}*/>
//       <Drawer.Navigator drawerContent={(props) => <ProfileScreen {...props} />}
//         screenOptions={{ headerShown: false, drawerStyle: { width: "80%", }, }}>
//         <Drawer.Screen name="Main" component={App} />
//       </Drawer.Navigator>
//     </NavigationContainer>

//   );
// }

const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="Prof"
      useLegacyImplementation
      screenOptions={{
        drawerPosition: 'left',
        drawerType: 'front',
        headerShown: false
      }}
      drawerContent={(props) => <ProfileScreen {...props} />}>
      <Drawer.Screen name="Main" component={MyTabs} />
    </Drawer.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          header: ({ navigation, route, options, back }) => {

            return (
              <SoulaHeader title={"Soula"}
                leftButton={undefined}
                logo={<Logo w={40} h={40} />}

              />
            );
          },
        }}

      // screenOptions={{
      //   headerShown: false
      // }}
      >
        {/* <Stack.Screen
          name="Profile"
          component={Drawers}
        /> */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Invite"
          component={InviteScreen}
          options={{ headerShown: true }}
        />

        {/* <Stack.Screen
        name="MyTab"
        component={MyTabs}
      /> */}

        <Stack.Screen name="MainScreen" component={DrawerNav}
          options={{
            title: 'Puro Cafe',
            animation: 'fade',
          }} />

        <Stack.Screen
          name="MessageUI"
          component={MessageUi}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
};

const ProfScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={{ flex: 1, backgroundColor: isDarkMode ? '#161616' : Colors.lighter, }}>

    </View>
  );
}


const Tab = createMaterialBottomTabNavigator();
function MyTabs({ navigation }) {

  return (
    <Tab.Navigator initialRouteName={'Homes'}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let prof;

          if (route.name == 'Profile') {
            iconName = focused ? require('./New/ionut-comanici-RDcEWH5hSDE-unsplash.jpg') : require('./New/ionut-comanici-RDcEWH5hSDE-unsplash.jpg');
            prof = true;
          }
          // iconName = focused ? 'home' : 'home-outline'
          else if (route.name == 'VoiceChat')
            // iconName = focused ? require('./New/icons/voicechat.png') : require('./New/icons/voice.png');
            iconName = focused ? 'mic' : 'mic-outline'
          else if (route.name == 'Homes')
            // iconName = focused ? require('./New/icons/home.png') : require('./New/icons/home-button.png');
            iconName = focused ? 'home' : 'home-outline'
          else if (route.name == 'Search')
            // iconName = focused ? require('./New/icons/users.png') : require('./New/icons/user.png');
            iconName = focused ? 'search' : 'search-outline'
          else if (route.name == "Video")
            // iconName = focused ? require('./New/icons/play.png') : require('./New/icons/play-button.png');
            iconName = focused ? 'videocam' : 'videocam-outline'

          // return <Image style={{ width: 27, height: 27 }} source={iconName} />;
          return prof ? <Image style={{ width: 27, height: 27, borderRadius: 15, borderWidth: 2, borderColor: "black" }} source={iconName} /> : <Icon name={iconName} size={26} />

        },

        // tabBarActiveTintColor: 'red',
        // tabBarInactiveTintColor: 'black',
        // tabBarColor: 'black'
      })}
      activeColor="white"
      barStyle={{ backgroundColor: '#51b2ff' }}
    >
      <Tab.Screen name="Video" component={VideoScreen} options={{ tabBarColor: '#4091d1', }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarColor: '#51b2ff', }} />
      <Tab.Screen name="Homes" component={HomesScreen} options={{ tabBarLabel: "Home", tabBarColor: '#4091d1', }} />
      <Tab.Screen name="VoiceChat" component={VoiceScreen} options={{ tabBarColor: '#51b2ff', }} />
      <Tab.Screen name="Profile" component={ProfScreen} options={{ tabBarColor: '#4091d1', }}
        listeners={{
          tabPress: e => {
            e.preventDefault()
            navigation.toggleDrawer()
          }
        }} />
    </Tab.Navigator>
  );
}



export default App;
