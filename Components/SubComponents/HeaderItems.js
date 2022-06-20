import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
} from 'react-native';
import { StoriesList } from "../DummyData/Data";

const StoryImageAndVideoPicker = () => {
    const defaultImage = "../../New/timo-stern-iUBgeNeyVy8-unsplash.jpg";
    const plusIcon = "../../New/icons/plus.png";

    return (
        <TouchableOpacity style={{ flexDirection: "column", margin: 5 }}>
            <Image style={{ margin: 5, borderRadius: 50, width: 55, height: 55, }}
                source={require(defaultImage)}>
            </Image>

            <Image style={{ borderRadius: 50, width: 25, height: 25, alignSelf: "flex-end", bottom: "30%" }}
                source={require(plusIcon)}>
            </Image>
        </TouchableOpacity>
    );
}

const HeaderStories = () => {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{ flexDirection: "column" }}>
                <Image style={{ borderWidth: 2, margin: 5, borderColor: "red", borderRadius: 50, width: 55, height: 55, justifyContent: "center" }}
                    source={item.Image}>
                </Image>

                <Text style={{ fontWeight: "bold", textAlign: "center", bottom: "5%" }}>
                    {item.userName}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            horizontal
            data={StoriesList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
}

const HeaderItems = () => {
    return (
        <View style={{ flexDirection: "row" }}>
            <StoryImageAndVideoPicker />
            <HeaderStories />
        </View>
    )
}

export default HeaderItems;