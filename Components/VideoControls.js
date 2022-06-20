import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Text } from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/Ionicons';


const CustomVideo = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isControlVisible, setIsControlVisible] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    // const video = require('../New/11.mp4');
    const video = { uri: "https://www.w3schools.com/html/mov_bbb.mp4" };

    useEffect(() => {
        if (isControlVisible) {
            const interval = setInterval(() => {
                if (isControlVisible)
                    setIsControlVisible(false);
            }, 2000);

            return () => {
                clearInterval(interval);
            };
        }
    });

    const onProgress = (payload) => {
        setCurrentTime(Math.round(payload.currentTime));
    }

    const onLoad = (payload) => {
        setTotalTime(Math.round(payload.duration));
    }

    return (
        <>
            <Video
                style={{ flex: 1 }}
                source={video}
                posterResizeMode={'cover'}
                paused={isPaused}
                muted={isMuted}
                resizeMode={'cover'}
                onProgress={onProgress}
                onLoad={onLoad}
            />

            <TouchableWithoutFeedback onPress={() => setIsControlVisible(!isControlVisible)}>
                <View style={isControlVisible ? Styles.ControlVisible : Styles.ControlHidden}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', position: 'absolute', right: '2%' }}>
                        <TouchableWithoutFeedback onPress={() => setIsMuted(!isMuted)}>
                            {isMuted ?
                                <Icon name={"volume-mute-outline"} size={35} style={{ color: 'white', }} />
                                :
                                <Icon name={"volume-high-outline"} size={35} style={{ color: 'white', }} />}
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <TouchableWithoutFeedback onPress={() => setIsPaused(!isPaused)}>
                            {isPaused ? <Icon name={"play-outline"} size={35} style={{ color: 'white', }} /> : <Icon name={"pause-outline"} size={35} style={{ color: 'white', }} />}
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <Text style={{ color: 'white', position: 'absolute', bottom: '3%', left: '3%' }}>
                00:{currentTime}
            </Text>
            <Text style={{ color: 'white', position: 'absolute', bottom: '3%', right: '3%' }}>
                00:{totalTime}
            </Text>
        </>

    );
};

const Styles = StyleSheet.create(
    {
        ControlVisible:
        {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,.2)',
            ...StyleSheet.absoluteFill,
        },
        ControlHidden:
        {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,.2)',
            ...StyleSheet.absoluteFill,
            opacity: 0,
        }
    }
)
export default CustomVideo;