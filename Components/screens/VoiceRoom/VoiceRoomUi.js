import React from "react";
import { Button,Pressable, Image, FlatList, ScrollView, PermissionsAndroid, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { postsList } from "../../DummyData/Data";
import { useNavigation } from '@react-navigation/native';


const ChatHeader = ({ item }) => {
    const navigation = useNavigation();

    return (
        <Pressable style={{
            width: "93%",
            margin:10,
            backgroundColor: "#51b2ff",
            height: "20%",
            alignItems:"center",
            alignSelf:"center",
            borderRadius:15
        }}>
            <Text
                adjustsFontSizeToFit
                style={{
                    color: "white",
                    fontSize: 20,
                    alignSelf:"center"
                }}>
                create You’re VoiceRoom
            </Text>
        </Pressable >
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
                    height: 100,
                    alignSelf: "center",
                    borderRadius: 20,
                    flexDirection: "row",
                    backgroundColor: "#C8E5FF"
                }}>
                <Image resizeMode="cover"
                    style={{ width: 60, height: 60, borderRadius: 50, left: 10, alignSelf: "center", backgroundColor: "white" }}
                    source={item.Media}></Image>
                <View style={{ height: "100%", width: "50%" }}>
                    <Text style={{ fontSize: 19, fontWeight: "bold", color: "#0968BD", left: 40, height: 30, width: "100%" }}>Welcometo my worled</Text>
                    <View style={{ flexDirection: "row", alignSelf: "center", top: "20%" }}>
                        <Image resizeMode="cover"
                            style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: "white", }}
                            source={item.Media}></Image>
                        <Image resizeMode="cover"
                            style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: "white", }}
                            source={item.Media}></Image>
                        <Image resizeMode="cover"
                            style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: "white", }}
                            source={item.Media}></Image>
                        <Image resizeMode="cover"
                            style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: "white", }}
                            source={item.Media}></Image>
                        <Image resizeMode="cover"
                            style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: "white", }}
                            source={item.Media}></Image>
                        <Image resizeMode="cover"
                            style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: "white", }}
                            source={item.Media}></Image>
                    </View>
                </View>
                <View style={{flex:1,alignItems:"center",justifyContent:"space-around"}}>
                    <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                        <Text style={{fontSize:25,fontWeight:"bold",marginRight:10}}>{item.Likes}</Text>
                        <Icon
                        name="people"
                        size={30}
                        />
                    </View>
                    <Icon
                        name="caret-forward-circle"
                        size={40}
                        color={"white"}
                        style={{alignSelf:"center"}}
                        />
                </View>

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

const VoiceRoomUi = ({ item }) => (
    <SafeAreaView style={{ flex: 1 }}>
        <ChatHeader />
        <PostsContent />
    </SafeAreaView>
);


export default VoiceRoomUi;