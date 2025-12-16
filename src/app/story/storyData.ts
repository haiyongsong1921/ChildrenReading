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
        text: "石台高高石台方，\n青蛙睡在石台旁",
        pinyin: "shí tái gāo gāo shí tái fāng ，\nqīng wā shuì zài shí tái páng",
        newChars: ["石", "台", "方", "青", "蛙", "睡", "旁"],
        image: "/story-images/rooster_page_1.png"
    },
    {
        id: 2,
        text: "石台青青天变亮，\n公鸡站到石台上，",
        pinyin: "shí tái qīng qīng tiān biàn liàng ，\ngōng jī zhàn dào shí tái shàng ，",
        newChars: ["变", "亮", "公", "鸡", "站", "上"],
        image: "/story-images/rooster_page_2.png"
    },
    {
        id: 3,
        text: "大声叫出红日来，\n气得青蛙跳进江。",
        pinyin: "dà shēng jiào chū hóng rì lái ，\nqì de qīng wā tiào jìn jiāng 。",
        newChars: ["大", "声", "叫", "出", "红", "日", "气", "跳", "进", "江"],
        image: "/story-images/rooster_page_3.png"
    }
];
