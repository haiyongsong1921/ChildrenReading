export interface StoryPage {
    id: number;
    text: string;
    pinyin: string;
    newChars: string[];
    image: string;
}

export const fiveYearsOldData: StoryPage[] = [
    {
        id: 1,
        text: "小孩小孩五岁半，\n猫一天来狗一天。",
        pinyin: "xiǎo hái xiǎo hái wǔ suì bàn ，\nmāo yī tiān lái gǒu yī tiān 。",
        newChars: ["小", "孩", "五", "岁", "半", "猫", "狗"],
        image: "/story-images/five_years_old_1.png"
    },
    {
        id: 2,
        text: "昨天学狗叫一天，\n今天和猫玩一天，",
        pinyin: "zuó tiān xué gǒu jiào yī tiān ，\njīn tiān hé māo wán yī tiān ，",
        newChars: ["昨", "学", "叫", "今", "和", "玩"],
        image: "/story-images/five_years_old_2.png"
    },
    {
        id: 3,
        text: "明天也许爬北山，\n后天也许爬南山。",
        pinyin: "míng tiān yě xǔ pá běi shān ，\nhòu tiān yě xǔ pá nán shān 。",
        newChars: ["明", "也", "许", "爬", "北", "后", "南"],
        image: "/story-images/five_years_old_3.png"
    },
    {
        id: 4,
        text: "猫一天来狗一天，\n小孩正好五岁半。",
        pinyin: "māo yī tiān lái gǒu yī tiān ，\nxiǎo hái zhèng hǎo wǔ suì bàn 。",
        newChars: ["正", "好"],
        image: "/story-images/five_years_old_4.png"
    }
];
