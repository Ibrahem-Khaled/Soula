import React
    from "react";
var postID = 0;
var storyID = 0;

const postsList = [
    { id: ++postID, userName: 'Abdo .AlGhoul', Date: new Date().toDateString(), Likes: 5, Comments: 13, Shares: 75, isImage: true, Media: require("../../New/phara.gif"), ProfileImage: require("../../New/L-8M7KXF9zJgnUDHxEsIVFRsOpt5eQhWZaiX2LzfEag.png") },
    { id: ++postID, userName: 'Abdo', Date: new Date().toDateString(), Likes: 5, Comments: 13, Shares: 75, isImage: true, Media: require("../../New/giphy.gif"), ProfileImage: require("../../New/joshua-rawson-harris-1YH0mu5Pcgs-unsplash.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 7, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), ProfileImage: require("../../New/joshua-rawson-harris-1YH0mu5Pcgs-unsplash.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 7, Comments: 55, Shares: 25, isImage: false, Media: require("../../New/11.mp4"), ProfileImage: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 7, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), ProfileImage: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 7, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), ProfileImage: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 7, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), ProfileImage: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 7, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), ProfileImage: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 7, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), ProfileImage: require("../../New/joshua-rawson-harris-1YH0mu5Pcgs-unsplash.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 7, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), ProfileImage: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 7, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), ProfileImage: require("../../New/joshua-rawson-harris-1YH0mu5Pcgs-unsplash.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 7, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), ProfileImage: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 7, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), ProfileImage: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 7, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), ProfileImage: require("../../New/joshua-rawson-harris-1YH0mu5Pcgs-unsplash.jpg") },
];

const StoriesList = [
    { id: ++storyID, Image: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), userName: "Abdo" },
    { id: ++storyID, Image: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), userName: "Abraham" },
    { id: ++storyID, Image: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), userName: "Eslam" },
    { id: ++storyID, Image: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), userName: "Ahmed" },
    { id: ++storyID, Image: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), userName: "Mohd" },

];

export { StoriesList, postsList };