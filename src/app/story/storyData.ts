export interface StoryPage {
    id: number;
    text: string;
    pinyin: string;
    newChars: string[];
    image: string;
}

export const storyData: StoryPage[] = [
    {
        id: 1,
        text: "土地公公开大会，\n众人一同来参加。",
        pinyin: "tǔ dì gōng gōng kāi dà huì ，\nzhòng rén yì tóng lái cān jiā 。",
        newChars: ["土", "地", "公", "会", "众", "参", "加"],
        image: "/story-images/tu_di_page_1.png"
    },
    {
        id: 2,
        text: "打南跳来一群蛙，\n打北游来几只鸭。",
        pinyin: "dǎ nán tiào lái yì qún wā ，\ndǎ běi yóu lái jǐ zhī yā 。",
        newChars: ["南", "蛙", "北", "游", "鸭"],
        image: "/story-images/tu_di_page_2.png"
    },
    {
        id: 3,
        text: "打东跑来大白马，\n打西飞来黑乌鸦。",
        pinyin: "dǎ dōng pǎo lái dà bái mǎ ，\ndǎ xī fēi lái hēi wū yā 。",
        newChars: ["东", "马", "西", "飞", "乌", "鸦"],
        image: "/story-images/tu_di_page_3.png"
    },
    {
        id: 4,
        text: "你来我来大家来，\n单单没见土娃娃。",
        pinyin: "nǐ lái wǒ lái dà jiā lái ，\ndān dān méi jiàn tǔ wá wa 。",
        newChars: ["单", "娃"],
        image: "/story-images/tu_di_page_4.png"
    },
    {
        id: 5,
        text: "土地公公问大家，\n娃娃没来是为啥？",
        pinyin: "tǔ dì gōng gōng wèn dà jiā ，\nwá wa méi lái shì wèi shá ？",
        newChars: ["问", "啥"],
        image: "/story-images/tu_di_page_5.png"
    }
];
