import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, Pressable } from 'react-native';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Vid = ({ item, index, currentIndex }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const videoRef = useRef(null);

    const onBuffer = buffer => {
        console.log('buffring', buffer);
    };
    const onError = error => {
        console.log('error', error);
    };

    const [mute, setMute] = useState(false);
    const [Pus, setPus] = useState(false);

    const [like, setLike] = useState(item.isLike);
    const [star, setStar] = useState(item.isStar);

    return (
        <View
            style={{
                width: windowWidth,
                height: windowHeight,
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Pressable
                activeOpacity={0.9}
                onPress={() => setMute(!mute)}
                onLongPress={() => setPus(!Pus)}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                }}>
                <Video
                    videoRef={videoRef}
                    onBuffer={onBuffer}
                    onError={onError}
                    repeat={true}
                    resizeMode="contain"
                    paused={Pus == index ? false : true}
                    source={{ uri: item.Image }}
                    muted={mute}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        backgroundColor: "black"
                    }}
                />
            </Pressable>
            <Ionic
                name="volume-mute"
                style={{
                    fontSize: mute ? 20 : 0,
                    color: 'white',
                    position: 'absolute',
                    backgroundColor: 'rgba(52,52,52,0.6)',
                    borderRadius: 100,
                    padding: mute ? 20 : 0,
                }}
            />
            <Ionic
                name="stop-circle"
                style={{
                    fontSize: Pus ? 20 : 0,
                    color: 'white',
                    position: 'absolute',
                    backgroundColor: 'rgba(52,52,52,0.6)',
                    borderRadius: 100,
                    padding: Pus ? 20 : 0,
                }}
            />
            <View
                style={{
                    position: 'absolute',
                    width: windowWidth,
                    zIndex: 1,
                    bottom: 0, //edited
                    padding: 10,
                }}>
                <View style={{}}>
                    <TouchableOpacity style={{ width: 150 }}>
                        <View
                            style={{ width: 100, flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: 100,
                                    backgroundColor: 'white',
                                    margin: 10,
                                }}>
                                <Image
                                    source={require("../../New/76965266_557556558365845_7249997751625187328_n.jpg")}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        resizeMode: 'cover',
                                        borderRadius: 100,
                                    }}
                                />
                            </View>
                            <Text style={{ color: 'white', fontSize: 16 }}>{item.userName}</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 14, marginHorizontal: 10 }}>
                        لا حول ولا قوة الا بالله
                    </Text>
                </View>
            </View>
            <View
                style={{
                    position: 'absolute',
                    bottom: 50, //edited
                    right: 0,
                }}>
                <TouchableOpacity onPress={() => setLike(!like)}
                    style={{ padding: 10, alignItems: "center" }}>
                    <AntDesign
                        name={like ? 'heart' : 'hearto'}
                        style={{ color: like ? 'red' : 'white', fontSize: 35 }}
                    />
                    <Text style={{ color: 'white' }}>10K</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10, alignItems: "center" }}>
                    <Ionic
                        name="ios-chatbubble-outline"
                        style={{ color: 'white', fontSize: 35 }}
                    />
                    <Text style={{ color: 'white' }}>10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10, alignItems: "center" }}>
                    <Ionic
                        name="share-social-sharp"
                        style={{ color: 'white', fontSize: 35 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setStar(!star)}
                    style={{ padding: 10, alignItems: "center", }}>
                    <Ionic
                        name={star ? 'star' : 'star-outline'}
                        style={{ color: star ? 'gold' : 'white', fontSize: 35 }} />
                    <Text style={{ color: star ? 'gold' : "white", fontWeight: star ? "bold" : "normal" }}>FAV</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Vid;