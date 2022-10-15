import React
    from "react";
var postID = 0;
var storyID = 0;
var vv = 0;

const postsList = [
    { id: ++postID, userName: 'Abdo .AlGhoul', Date: new Date().toDateString(), Likes: 5, Comments: 13, Shares: 75, isImage: true, Media: require("../../New/phara.gif"), ProfileImage: require("../../New/L-8M7KXF9zJgnUDHxEsIVFRsOpt5eQhWZaiX2LzfEag.png") },
    { id: ++postID, userName: 'Abdo', Date: new Date().toDateString(), Likes: 10, Comments: 13, Shares: 75, isImage: true, Media: require("../../New/giphy.gif"), ProfileImage: require("../../New/joshua-rawson-harris-1YH0mu5Pcgs-unsplash.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 7, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), ProfileImage: require("../../New/joshua-rawson-harris-1YH0mu5Pcgs-unsplash.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 8, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/avi-richards-cq5f6ZTMaYQ-unsplash.jpg"), ProfileImage: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 9, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/avi-richards-GJIc8O6sM5M-unsplash.jpg"), ProfileImage: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 11, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg"), ProfileImage: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 15, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/caleb-ekeroth-wSBQFWF77lI-unsplash.jpg"), ProfileImage: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 17, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/christopher-burns-pzMP-RGJ7mY-unsplash.jpg"), ProfileImage: require("../../New/joshua-rawson-harris-1YH0mu5Pcgs-unsplash.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 107, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/ionut-comanici-RDcEWH5hSDE-unsplash.jpg"), ProfileImage: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 30, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/joshua-rawson-harris-1YH0mu5Pcgs-unsplash.jpg"), ProfileImage: require("../../New/joshua-rawson-harris-1YH0mu5Pcgs-unsplash.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 40, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/L-8M7KXF9zJgnUDHxEsIVFRsOpt5eQhWZaiX2LzfEag.png"), ProfileImage: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 90, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/michael-dam-mEZ3PoFGs_k-unsplash.jpg"), ProfileImage: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg") },
    { id: ++postID, userName: 'Ibrahem', Date: new Date().toDateString(), Likes: 1100, Comments: 55, Shares: 25, isImage: true, Media: require("../../New/nathan-dumlao-w5hhoYM_JsU-unsplash.jpg"), ProfileImage: require("../../New/joshua-rawson-harris-1YH0mu5Pcgs-unsplash.jpg") },
];

const StoriesList = [
    { id: ++storyID, Image: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), userName: "Abdo" },
    { id: ++storyID, Image: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), userName: "Abraham" },
    { id: ++storyID, Image: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), userName: "Eslam" },
    { id: ++storyID, Image: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), userName: "Ahmed" },
    { id: ++storyID, Image: require("../../New/76965266_557556558365845_7249997751625187328_n.jpg"), userName: "Mohd" },

];
const VideoData = [
    { id: ++vv, Image: "https://rr2---sn-uxaxjvhxbt2u-50xe.googlevideo.com/videoplayback?expire=1665299754&ei=ySBCY7-IOsPmx_APyIGe0Ag&ip=45.84.44.150&id=o-AEbq5_c5sNnv4jZYrUvLTxFSPet7grfp8W6ZvNoj47EH&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=kRrfWntwwO6BSZWh8ns6ijMI&cnr=14&ratebypass=yes&dur=662.000&lmt=1664623093680800&fexp=24001373,24007246&c=WEB&txp=5538434&n=eHDI1qQ59PnwRh6&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgMSh3k2miHP2Iyc-vgmqsrxddnMiXSzPZ6-VpPqHyvJICIG0nWWqltJpjLDTfLZvsWPrHf1Y878JnfCkWHMrGKgDa&redirect_counter=1&rm=sn-5hnesy76&req_id=750a80426795a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=9v&mip=41.236.87.65&mm=31&mn=sn-uxaxjvhxbt2u-50xe&ms=au&mt=1665278008&mv=m&mvi=2&pl=23&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgTO5Vohg6qfas2b0UFL_PpJ_EHJl8Zx9EYS64L6jgi6ECIQCGtF0_6GCAH8uj58r6TZGCjuKDqcVI302Jf0YQIdp0CQ%3D%3D", userName: "Abdo" },
    { id: ++vv, Image: "https://rr2---sn-uxaxjvhxbt2u-50x6.googlevideo.com/videoplayback?expire=1665300262&ei=xiJCY72IE8_K1gLk_4fIAQ&ip=216.158.214.29&id=o-AAIt44R6Dpditono3xxwyi0IjE4wBgF30nZV2QD_zbc0&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=KX3dNURbdDS7Xmc5wvfzq3gI&gir=yes&clen=43584719&ratebypass=yes&dur=610.800&lmt=1663457408691905&fexp=24001373,24007246&c=WEB&txp=5538434&n=EYjlxdaJkfjs00J&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgVUaKniZYQ-NbKpJaIy6FekDwdBMziM9rlVbgLB63pXcCIA5LcppPGW0c3qUhFuNMUM_15LOr6X6LCpATmJfj2bQb&redirect_counter=1&rm=sn-5hneze7z&req_id=3925aee55873a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=by&mip=41.236.87.65&mm=31&mn=sn-uxaxjvhxbt2u-50x6&ms=au&mt=1665278483&mv=m&mvi=2&pl=23&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgX5ZW8iXIxfcrgPKRhK7ZtxYJ8d26wmgOLD_7b5NszFECIQC4ktlWr3cbUekvN70SJBlxooVadfZN11fP5sbZwj4mYA%3D%3D", userName: "Abraham" },
    { id: ++vv, Image: "https://rr3---sn-4g5ednde.googlevideo.com/videoplayback?expire=1665300365&ei=LSNCY-GgMaWfx_APzrmx8As&ip=45.84.44.85&id=o-AIeKAgCPEsr69XgixH3E1-pVJjeg2SWDcDqWicBbCP_X&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=PEmkibKlY1KQ0VF7f2BR3k4I&gir=yes&clen=8451978&ratebypass=yes&dur=104.211&lmt=1545238534867205&fexp=24001373,24007246&c=WEB&txp=5531432&n=rB8iLUOJX1SmLbS&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAKpwGKUcfmUoNJ4JpGQf4c5GUuIzFFFlNBzWUtHCqUTBAiAB6HUHcVKBw0W9W7WLMkmxANPS-1oUpuJYYWLrdksQuQ%3D%3D&redirect_counter=1&cm2rm=sn-5hnele7s&req_id=df712e435a1a3ee&cms_redirect=yes&cmsv=e&mh=nR&mip=41.236.87.65&mm=34&mn=sn-4g5ednde&ms=ltu&mt=1665278704&mv=m&mvi=3&pl=23&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhALNzS6U9JV-mxLeknDDiWzkUQf18Xn0M9vMB1YDKxNuTAiAK1Er7jvqaSR5rYE6GK6mit63oBCFqcvhkrg4Qt2zAVQ%3D%3D", userName: "Eslam" },
    { id: ++vv, Image: "https://rr3---sn-4g5e6nzl.googlevideo.com/videoplayback?expire=1665300450&ei=giNCY_32CeKzx_APt8qGmAU&ip=206.127.212.210&id=o-AC5bM8_MYS1wP-nMWhrJAFQ9GsopdRSmI3bpY7Ww1cEH&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=kygjzyMTfj8g4wXWzZDS_Z0I&gir=yes&clen=30972496&ratebypass=yes&dur=359.978&lmt=1646174132197609&fexp=24001373,24007246&c=WEB&txp=5538434&n=UJ7pacynapKTODg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAJCJH7G2tgnbNo4zQlEO-Ige3D__Bfbj_sdlX0xxy1iHAiEApEQFf7tKypuYOM0j-uBbYA_J7Tk0ONCt9k8ajdfc99I%3D&rm=sn-5hness7z&req_id=4b178094b936a3ee&cm2rm=sn-uxaxjvhxbt2u-50x67l,sn-hgner7s&ipbypass=yes&redirect_counter=3&cms_redirect=yes&cmsv=e&mh=lh&mip=41.236.87.65&mm=34&mn=sn-4g5e6nzl&ms=ltu&mt=1665278465&mv=m&mvi=3&pl=23&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgOQ3OJtf42D_wVwLIoKsRG6n2Pmh6FOhSGFjKt58701YCIA6-n8dQjRB5UQgb1glZPJ9ML-afLGekbSROeRo4AoIJ", userName: "Ahmed" },
    { id: ++vv, Image: "https://rr1---sn-hgn7yn7z.googlevideo.com/videoplayback?expire=1665300507&ei=uyNCY76xI6nnx_APtLeKsAM&ip=206.127.212.108&id=o-AA1xQmE4JEQ3ed2yoC7yGVtTTgP4vetlVOn_0HnzdLzl&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=bBezZC8iUDIS7RYdt5UjNYAI&cnr=14&ratebypass=yes&dur=648.277&lmt=1664168856838934&fexp=24001373,24007246&c=WEB&txp=5538434&n=4k-wMmF5JGgdGtp&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALLVJObYZkBjIzp-btCpNsV_GFN2-BxBCnGpWHI15QqjAiAu-xZ-PrTBPfBPoysy9SSbvMVKNaEnIcd4RtmBgLEHCw==&rm=sn-5hnez77e&req_id=cc0ea98a7142a3ee&redirect_counter=2&cm2rm=sn-uxaxjvhxbt2u-50x67l&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=mn&mip=41.236.87.65&mm=29&mn=sn-hgn7yn7z&ms=rdu&mt=1665278734&mv=m&mvi=1&pl=23&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAP6YYF_b7okWQw9qt8-XC_bTTBHTEX_sMm9F613POuncAiEAwiafqTfEI_YUBekOdL6weT0tuxrxmsH6B1AYbhLF3jU%3D", userName: "Mohd" },

];
const Coins = [
    { id: ++vv, Cunter: "1000",Price: "50", },
    { id: ++vv, Cunter: "1500",Price: "75", },
    { id: ++vv, Cunter: "2000",Price: "99", },
    { id: ++vv, Cunter: "2450",Price: "145", },
    { id: ++vv, Cunter: "3000",Price: "190", },
    { id: ++vv, Cunter: "3500",Price: "240", },
    { id: ++vv, Cunter: "4100",Price: "300", },
    { id: ++vv, Cunter: "4500",Price: "330", },
    { id: ++vv, Cunter: "5000",Price: "380", },
   
];

export { StoriesList, postsList,VideoData,Coins };