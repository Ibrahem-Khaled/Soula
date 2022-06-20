import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import { postsList } from "../DummyData/Data";
import HeaderItems from "../SubComponents/HeaderItems";
import Video from 'react-native-video';


const PostHeader = ({ item }) => {
    return (
        <View style={{ flex: 1, flexDirection: "row", }}>
            <TouchableOpacity style={{ flexDirection: "row", }}>
                <Image style={{ borderRadius: 50, width: 50, height: 50, margin: 5 }}
                    source={item.ProfileImage}>
                </Image>
            </TouchableOpacity>

            <View style={{ flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
                    {item.userName}
                </Text>
                <Text style={{ flex: 1, fontSize: 12, color: "black", textAlign: "center" }}>
                    {item.Date}
                </Text>
            </View>
        </View>
    )
}
const PostImage = ({ item }) => {
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
         
                <Image resizeMode="contain"
                    style={{ flex: 1, borderRadius: 10, width: "95%", height: 300, margin: 5, alignSelf: "center" }}
                    source={item.Media}>
                </Image>

                

                
            
        
    )
}

const PostFooter = ({ item }) => {
    return (
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>

            <TouchableOpacity style={{ padding: 3, flexDirection: "row" }}>
                <Image style={{ width: 35, height: 35 }}
                    source={require("../../New/icons/heart1.png")}>
                </Image>
                <Text style={{ fontWeight: "bold", alignSelf: "center", padding: 3 }}>
                    {item.Likes} Like(s)
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 3, flexDirection: "row" }}>
                <Image style={{ width: 35, height: 35 }}
                    source={require("../../New/icons/chat.png")}>
                </Image>
                <Text style={{ fontWeight: "bold", alignSelf: "center", padding: 3 }}>
                    {item.Comments} Comment(s)
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 3, flexDirection: "row" }}>

                <Image style={{ width: 35, height: 35 }}
                    source={require("../../New/icons/share.png")}>
                </Image>
                <Text style={{ fontWeight: "bold", alignSelf: "center", padding: 3 }}>
                    {item.Shares} Share
                </Text>

            </TouchableOpacity>
        </View>
    )
}

const PostsContent = () => {
    const renderItem = ({ item }) => {
        return (
            <>
                <PostHeader item={item} />

                <PostImage item={item} />

                <PostFooter item={item} />
            </>
        );
    }

    return (

        <FlatList
            data={postsList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (<View style={{ height: 15 }}></View>)}
        />
    )
}

const Homee = () => {
    // const onVideoError = () => {
    //     // setdisplayLoading(false);
    //     // setMessage('تعذر تحميل الفيديو!');
    // }

    // const onLoadStart = () => {
    //     // setdisplayLoading(true);
    //     // Pause.current = true;
    // }

    // const onVideoLoad = (data) => {
    //     // Duration.current = (data.duration + .7) * 1000;
    //     // Pause.current = false;
    //     // setdisplayLoading(false);
    // }
    // var like;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderItems />

            <PostsContent />
        </SafeAreaView>
    )

}
export default Homee;
