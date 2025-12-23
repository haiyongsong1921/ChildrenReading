export interface StoryPage {
    id: number;
    text: string;
    pinyin: string;
    newChars: string[];
    image: string;
}

export const lotOfWoodData: StoryPage[] = [
    {
        id: 1,
        text: "木头工厂木头多，\n人人会做木工活。",
        pinyin: "mù tou gōng chǎng mù tou duō ，\nrén rén huì zuò mù gōng huó 。",
        newChars: ["木", "头", "工", "厂", "多", "人", "会", "做", "活"],
        image: "/story-images/lot_of_wood_1.png"
    },
    {
        id: 2,
        text: "木头用来做什么？\n木头椅子木头桌。",
        pinyin: "mù tou yòng lái zuò shén me ？\nmù tou yǐ zi mù tou zhuō 。",
        newChars: ["用", "来", "什", "么", "椅", "子", "桌"],
        image: "/story-images/lot_of_wood_2.png"
    },
    {
        id: 3,
        text: "木头人和木头床，\n木头牛来木头车。",
        pinyin: "mù tou rén hé mù tou chuáng ，\nmù tou niú lái mù tou chē 。",
        newChars: ["和", "床", "牛", "车"],
        image: "/story-images/lot_of_wood_3.png"
    },
    {
        id: 4,
        text: "木头小船来一条，\n木头娃娃里边坐。",
        pinyin: "mù tou xiǎo chuán lái yī tiáo ，\nmù tou wá wa lǐ bian zuò 。",
        newChars: ["小", "船", "一", "条", "娃", "娃", "里", "边", "坐"],
        image: "/story-images/lot_of_wood_4.png"
    }
];
