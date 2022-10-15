import React, { useRef } from "react";
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    StatusBar,
    TextInput,
    StyleSheet,
    FlatList,
    ScrollView,
    Pressable,
    KeyboardAvoidingView,
    SafeAreaView,
    Dimensions,

} from 'react-native';
import { postsList } from "../DummyData/Data";
import Ionic from 'react-native-vector-icons/Ionicons';


const Postcontent = ({ item }) => {
    return (
        <SafeAreaView style={{ flex: 1, }}>
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

const VideoP = ({ item }) => {
    return (
        <>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    paddingVertical: 10,
                    position: 'relative',
                }}>
                <Ionic
                    name="search"
                    style={{
                        fontSize: 22,
                        opacity: 0.7,
                        position: 'absolute',
                        zIndex: 1,
                        left: 20,
                    }}
                />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="#909090"
                    style={{
                        width: '94%',
                        backgroundColor: '#EBEBEB',
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 20,
                        padding: 8,
                        paddingLeft: 50,
                    }}
                />
            </View>
            <FlatList
                data={postsList}
                renderItem={Postcontent}
                keyExtractor={(item) => item.id}
                numColumns={3}
            />
        </>
    );
}
export default VideoP;
