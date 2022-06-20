import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect, useRef, memo } from "react";
import MessageUI from "./MessageUI"
import { theme } from "./theme"

const MessageList = ({ }) => {
    const [messages, setMessages] = useState([
        {
            user: 0,
            time: "12:00",
            content: "وين",
        },
        {
            user: 1,
            time: "12:05",
            content: "وين يا خال ",
        },
        {
            user: 1,
            time: "12:07",
            content: "مختفي ليش اليومين هدول",
        },
        {
            user: 0,
            time: "12:09",
            content: "والله يا صاحب مشغول فشخ",
        },
        {
            user: 0,
            time: "12:00",
            content: "هواك نخرج اليوم",
        },
        {
            user: 1,
            time: "12:05",
            content: "اشطا ماش وين هنروح",
        },
        {
            user: 0,
            time: "12:07",
            content: "علي سينا او صيدم",
        },
        {
            user: 1,
            time: "12:09",
            content: "خلاص اتوكل شوف ساعة اكم نتقابل",
        },
        {
            user: 0,
            time: "12:07",
            content: "بعد العشاء",
        },
        {
            user: 1,
            time: "12:09",
            content: "ابقي كلم الشباب",
        },
        {
            user: 0,
            time: "12:09",
            content: "  تمام",
        },
        {
            user: 1,
            time: "12:10",
            content: "  مش تمام وتنسي ",
        },
        {
            user: 0,
            time: "12:11",
            content: "  عيب عليك",
        },
        {
            user: 1,
            time: "12:11",
            content: "  بخافش غير من الكلمة هادي",
        },
        {
            user: 0,
            time: "12:12",
            content: "  ياعم اعتمد هتعوز حاجة",
        },
        {
            user: 1,
            time: "12:09",
            content: "حبيبي سلام",
        },
    ]);

    const user = useRef(0);
    const scrollView = useRef();

    return (
        <ScrollView style={{ flex: 1,  }}
        >
            {messages.map((message, index) => (<MessageUI
                key={index}
                time={message.time}
                isLeft={message.user !== user.current}
                message={message.content} />))}

        </ScrollView>
    );
};

export default MessageList;