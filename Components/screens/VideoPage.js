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
import { useNavigation } from '@react-navigation/native';



const VideoP = ({ item }) => {
    const navigation = useNavigation();

    const Postcontent = ({ item }) => {
        return (
            <SafeAreaView style={{ flex: 1, }}>
                <Pressable
                    onPress={() => navigation.navigate('VideoPageUi')}
                    style={{
                        alignItems: "center"
                    }}>

                    <Image
                        resizeMode="contain"
                        style={{ width: "95%", height: 200,backgroundColor:"black", borderRadius: 15,marginTop:4 }}
                        source={item.Media} />
                    <Text style={{ fontSize: 13, margin: 5, width: "95%",height:25,fontWeight:"bold"}}>React Native combines the best parts of </Text>
                </Pressable>
            </SafeAreaView>

        );
    }

    return (
        <FlatList
            data={postsList}
            renderItem={Postcontent}
            keyExtractor={(item) => item.id}
        />
    );
}
export default VideoP;
