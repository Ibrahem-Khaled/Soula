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
import { useNavigation } from '@react-navigation/native';




const Login = () => {
    const navigation = useNavigation();

    return (

        <ImageBackground
            style={{ flex: 1, justifyContent: 'space-around' }}
            source={require('../../New/ionut-comanici-RDcEWH5hSDE-unsplash.jpg')}
            blurRadius={10}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, top: '7.5%' }}>

                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Image source={require("../../New/89234398_paddsed_logo.png")}
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
                                source={require("../../New/icons/FB.png")}
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
                                source={require("../../New/icons/google.png")}
                            >
                            </Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={{ width: 60, height: 60 }}
                                source={require("../../New/icons/snapchat-logo.png")}
                            ></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={{ width: 60, height: 60 }}
                                source={require("../../New/icons/Twitter.png")}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground >
    );

};
export default Login;