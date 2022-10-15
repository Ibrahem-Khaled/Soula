import {
    SafeAreaView, View,
    Text, Image,
    TouchableOpacity, TextInput,
    FlatList, Pressable, StatusBar
} from 'react-native'
import React, { useState, useEffect, useRef, memo } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { Coins } from '../DummyData/Data';
import { useNavigation } from '@react-navigation/native';


const Coines = ({ item }) => {
    return (
        <SafeAreaView style={{ justifyContent: "space-around", flex: 1, marginTop: 25 }}>
            <StatusBar backgroundColor={"#FFE28F"} />
            <Pressable
                style={{
                    backgroundColor: "gold",
                    alignItems: "center",
                    width: 106,
                    height: 151,
                    borderRadius: 25,
                    justifyContent: "space-around",
                    marginTop: 10
                }}>
                <Image
                    style={{ width: 50, height: 50, }}
                    source={require("../../New/icons/coin.png")} />
                <Text style={{ fontSize: 20, fontWeight: "bold", }}>
                    {item.Cunter}C
                </Text>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    width: 76
                    , height: 40,
                    backgroundColor: "#24FF00",
                    borderRadius: 25,
                    textAlign: "center",
                    top: 10
                }}>
                    {item.Price}$
                </Text>
            </Pressable>
        </SafeAreaView>

    );
}
const Post = () => {


    return (
        <FlatList
            data={Coins}
            renderItem={Coines}
            keyExtractor={(item) => item.id}
            numColumns={3}
        />
    );
}
const Header = () => {
    const navigation = useNavigation();


    return (
        <Pressable
            onPress={() => navigation.goBack()}
            style={{
                width: "100%", height: 60
                , backgroundColor: "#FFE28F",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row"
            }}>
            <Icon
                name='arrow-back-circle'
                size={40}
                style={{}}
            />
            <Text style={{ fontSize: 25, fontWeight: "bold", right: "200%" }}>BUY COINS</Text>
        </Pressable>
    );
}

export default function CoinUi() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header />
            <Post />
        </SafeAreaView>
    )
}