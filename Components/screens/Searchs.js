import React from "react";
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

} from 'react-native';

const Searchs = () => {
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1, alignItems: "center" }}
            >
                <TextInput
                    placeholder="Search"
                    textAlign="center"
                    placeholderTextColor={"black"}
                    style={{ color: "black", width: "60%", height: "7%", borderColor: "#2199ad", borderWidth: 2, borderRadius: 15 }}></TextInput>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default Searchs;
