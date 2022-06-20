import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, FlatList, Clipboard } from 'react-native'
import React, { useState, useEffect, useRef, memo } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import Animated from "react-native-reanimated";

const Invite = () => {
    const [copiedText, setCopiedText] = useState('');
    const copyToClipboard = () => {
        Clipboard.setString('hello world');
    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getString();
        setCopiedText("has been copied");
    };
    return (
        <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ alignSelf: "center", flexDirection: "row", width: "90%", justifyContent: "center", top: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Invite friends to the app via a
                    link and get:-
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FF9900", alignSelf: "center" }}>500 point</Text>
                </Text>
            </View>
            <View style={{ alignItems: "center", paddingTop: 50 }}>
                <Text style={{ fontSize: 26, fontWeight: "bold" }}>Your Invite Link</Text>
                <TouchableOpacity
                    onPress={fetchCopiedText}
                    style={{
                        backgroundColor: "#C4C4C4",
                        width: "85%",
                        height: 170,
                        borderRadius: 15,
                        alignItems: "center"
                    }}>
                    <Text style={{ fontSize: 18, top: 10, color: "blue" }}>https://www.facebook.com/https://colorpicker.me/
                        https://www.figma.com/file/
                        5CNpc3JH4nOrnPpHrT3O1M/Untitled?node-id=
                        402%3A2#daeef7sgoon130/</Text>
                </TouchableOpacity>
                <Text style={{ color: "red" }}>{copiedText}</Text>
            </View>
            <View style={{ alignItems: "center", paddingTop: 50, flexDirection: "column" }}>
                <Text style={{ fontSize: 26, fontWeight: "bold" }}>Enter the ID that invited you</Text>
            </View>
            <View style={{ justifyContent:"space-around",alignItems:"center", paddingTop: 20 ,flexDirection:"row"}}>
                <Text style={{ fontSize: 26, fontWeight: "bold" }}>ID</Text>
                <TextInput style={{ width: "60%", height: 60, backgroundColor: "#C4C4C4", borderRadius: 15 ,paddingLeft:30}}></TextInput>
            </View>
        </View>
    );
}


export default function InviteUI() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Invite />
        </SafeAreaView>
    )
}