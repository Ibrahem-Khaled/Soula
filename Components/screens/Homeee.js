import React, { useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Pressable,
} from 'react-native';
import { postsList } from "../DummyData/Data";
import HeaderItems from "../SubComponents/HeaderItems";
import Ionic from 'react-native-vector-icons/Ionicons';


const PostHeader = ({ item }) => {
    return (
        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#E9FCFF", borderRadius: 50, height: 70, alignItems: "center" }}>
            <TouchableOpacity style={{ flexDirection: "row",paddingRight:10 }}>
                <Image style={{ borderRadius: 50, width: 50, height: 50, margin: 5 }}
                    source={item.ProfileImage}>
                </Image>
            </TouchableOpacity>

            <View style={{ flexDirection: "column",flex:1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
                    {item.userName}
                </Text>
                <Text style={{ flex: 1, fontSize: 12, color: "black", }}>
                    {item.Date}
                </Text>
            </View>
        </View>
    )
}
const PostImage = ({ item, }) => {
    const [like, setLike] = useState(item.islike);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold", alignSelf: "flex-end", padding: 8 }}>
                لا تتعجب من الدنيا اذدحام متكاثر ولا يوجد نهاية
            </Text>
            <Pressable
                onPress={() => setLike(!like)}
            >
                <Image resizeMode="contain"
                    style={{ flex: 1, borderRadius: 10, width: "95%", height: 300, margin: 2, backgroundColor: "black", alignSelf: "center" }}
                    source={item.Media}>
                </Image>
            </Pressable>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", backgroundColor: "#E9FCFF", borderRadius: 50 }}>

                <TouchableOpacity
                    onPress={() => setLike(!like)}
                    style={{ padding: 3, flexDirection: "row" }}>
                    <Ionic
                        name={like ? 'heart' : 'heart-outline'}
                        style={{ color: like ? 'red' : 'black', fontSize: 35 }}
                    />
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
        </SafeAreaView>
    )
}

const PostsContent = () => {
    const renderItem = ({ item }) => {
        return (
            <>
                <PostHeader item={item} />

                <PostImage item={item} />
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
