main.floors.MT52=
{
    "floorId": "MT52",
    "title": "多佛尔悬崖",
    "name": "多佛尔悬崖",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "europe3.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,14": [
            {
                "type": "unloadEquip",
                "pos": 0
            },
            {
                "type": "unloadEquip",
                "pos": 1
            },
            {
                "type": "unloadEquip",
                "pos": 2
            },
            {
                "type": "unloadEquip",
                "pos": 3
            },
            {
                "type": "unloadEquip",
                "pos": 4
            },
            {
                "type": "unloadEquip",
                "pos": 5
            },
            {
                "type": "unloadEquip",
                "pos": 6
            },
            {
                "type": "function",
                "function": "function(){\nflags.mission[8][0]=true\n}"
            },
            {
                "type": "if",
                "condition": "(flag:友军血量>=20000)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[8][2]=true\n}"
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\nflags.skillList=[0,0,0,0,0,0,0]\n}"
            },
            {
                "type": "update"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "hideStatusBar"
            },
            {
                "type": "update"
            },
            {
                "type": "sleep",
                "time": 1000
            },
            {
                "type": "playSound",
                "name": "158-Skill02.mp3"
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "win.png",
                "sloc": [
                    0,
                    0,
                    null
                ],
                "loc": [
                    -60,
                    120,
                    600,
                    240
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "scaleImage",
                "code": 1,
                "center": [
                    80,
                    160
                ],
                "scale": 0.5,
                "time": 500
            },
            {
                "type": "function",
                "function": "function(){\nvar a = flags.mission[core.getFlag('stage')];\ncore.setFlag('@temp@A', a[0] + a[1] + a[2]);\n}"
            },
            {
                "type": "if",
                "condition": "(temp:A>=1)",
                "true": [
                    {
                        "type": "playSound",
                        "name": "xinxinbazhe.mp3"
                    },
                    {
                        "type": "showImage",
                        "code": 2,
                        "image": "star.png",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            15,
                            50,
                            90,
                            90
                        ],
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "if",
                        "condition": "(temp:A>=2)",
                        "true": [
                            {
                                "type": "playSound",
                                "name": "xinxinbazhe.mp3"
                            },
                            {
                                "type": "showImage",
                                "code": 3,
                                "image": "star.png",
                                "sloc": [
                                    0,
                                    0,
                                    null
                                ],
                                "loc": [
                                    175,
                                    50,
                                    90,
                                    90
                                ],
                                "opacity": 1,
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "if",
                                "condition": "(temp:A>=3)",
                                "true": [
                                    {
                                        "type": "playSound",
                                        "name": "xinxinbazhe.mp3"
                                    },
                                    {
                                        "type": "showImage",
                                        "code": 4,
                                        "image": "star.png",
                                        "sloc": [
                                            0,
                                            0,
                                            null
                                        ],
                                        "loc": [
                                            325,
                                            50,
                                            90,
                                            90
                                        ],
                                        "opacity": 1,
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    }
                                ],
                                "false": []
                            }
                        ],
                        "false": []
                    }
                ],
                "false": []
            },
            {
                "type": "sleep",
                "time": 2000
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 500,
                "keep": true
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 0
            },
            {
                "type": "hideImage",
                "code": 2,
                "time": 0
            },
            {
                "type": "hideImage",
                "code": 3,
                "time": 0
            },
            {
                "type": "hideImage",
                "code": 4,
                "time": 0
            },
            {
                "type": "setHeroOpacity",
                "opacity": 0
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "setValue",
                "name": "flag:escort",
                "value": "false"
            },
            {
                "type": "setValue",
                "name": "flag:stage",
                "value": "9"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT54",
                        "loc": [
                            7,
                            7
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "playBgm",
                        "name": "wots4.mp3"
                    },
                    "持续的空战对英德双方都造成了不小的损失。尽管英军的指挥体系更完善，但在德军飞机的持续猛攻下，英军从上到下都已经人困马乏，机场和雷达站也不断的被破坏。",
                    "飞机和飞行员的损耗越来越大，逐渐超过工厂的每月最大生产和修复能力。德军虽然同样损失惨重，但仍有进攻的余力。战局开始向着德军一方倾斜。",
                    "然而，在1940年8月24日，转机出现了。",
                    {
                        "type": "playSound",
                        "name": "airstrike.mp3"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "一群迷航的德军轰炸机误打误撞飞到了英国首都——伦敦，并把炸弹投到了市中心。",
                    "作为报复，丘吉尔命令英国空军在次日出动轰炸机，直接向德国首都——柏林，发起一次空袭。并且在之后的几天内又炸了两次。",
                    "英国轰炸机造成的损失并不大，但却狠狠打了德军的脸。因为在此前，戈林还信誓旦旦向希特勒承诺：“没有一架敌人的轰炸机能飞到鲁尔工业区，如果有一架到了鲁尔，我就不叫戈林，你可以叫我迈耶！”",
                    "柏林的纵深可比鲁尔工业区更大。所以恼羞成怒的希特勒命令戈林……哦不，迈耶，对伦敦实施打击报复，用百倍千倍的炸弹作为回报。",
                    {
                        "type": "playSound",
                        "name": "airalarm.mp3"
                    },
                    {
                        "type": "playSound",
                        "name": "airstrike.mp3"
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "showImage",
                        "code": 1,
                        "image": "londoninfire.jpg",
                        "loc": [
                            0,
                            0
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "setCurtain",
                        "color": [
                            0,
                            0,
                            0,
                            1
                        ],
                        "time": 500,
                        "keep": true
                    },
                    {
                        "type": "hideImage",
                        "code": 1,
                        "time": 0
                    },
                    "从9月7日开始，德军的进攻重心转为了伦敦。",
                    "数百吨炸弹和燃烧弹不分昼夜地被投向伦敦市区，那里没有任何军事设施，德军的目标正是平民。",
                    "烈火将伦敦照的亮如白昼，到处都是残骸和火焰，就连白金汉宫也没有幸免。直到次日清晨，阳光都无法穿透烈火带来的浓重黑烟。",
                    "轰炸持续了七天七夜，带来了不计其数的损失。希特勒希望以残酷的空袭迫使英国乖乖走上谈判桌，向他屈服。",
                    "然而，一切都事与愿违。轰炸不仅没有磨灭人们的斗志，反倒激起了人们对纳粹暴行的仇恨和反抗的决心。",
                    "英国皇家空军借助这难得的机会进行了充分休整，修复了之前的破坏。英国民众更是自发走向兵工厂，帮助军方生产武器，就连孩童间的聊天也变成了“我长大要当喷火战斗机飞行员”。",
                    "经过七天的休整，英国空军重新获得了充足的战斗力。现在，到了算账的时候了。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT53",
                        "loc": [
                            -1,
                            -1
                        ],
                        "direction": "down"
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT51",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,14": {
            "0": {
                "condition": "core.maps.searchBlockWithFilter(x=>['中型轰炸机'].includes(core.material.enemys[x?.event?.id]?.type),['MT48','MT49','MT50','MT51','MT52']).length===0",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[8][1]=true\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [527,528,140,  0,140,566,140, 91,140,566,140,  0,205, 21, 22],
    [140,  0,205,  0,140,566,140,  0,140,566,383,  0,140, 21, 21],
    [527,528,140,  0,140,382,140,206,140,382,140,  0,140,140,140],
    [140,140,140,  0,140,  0, 81,  0, 81,  0,140,  0,140,529, 21],
    [529,140,140,  0,383, 21,  0,140,  0, 21,140,  0, 81,384,529],
    [529, 81,  0,383,140,140,140,140,140,140,140,383,140,140,140],
    [140,140,140,  0, 81,525,525, 21,526,526, 81,  0,  0,383,527],
    [ 21, 21,140,384,140,140,140,140,140,140,140,140,384,140,140],
    [ 21, 21,140,  0, 81,527,527, 21,528,528, 81,  0,  0,140,528],
    [140, 82,140,383,140,140,140,140,140,140,140,383,140,140,528],
    [  0,  0,382,  0,  0,  0,382,  0,382,  0,  0,  0,  0,  0,382],
    [140, 81,140,140,140,384,140,205,140,384,140,140,140, 81,140],
    [206,  0,206,140,  0,  0,140,205,140,  0,  0,140,206,  0,206],
    [526,205,567,140,572,572,140,205,140,572,572,140,567,205,526],
    [526,518, 21,140,566,566,140, 89,140,566,566,140, 21,518,526]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [40045,  0,  0,  0,305,305,  0,40046,  0,  0,40046,40046,40046,40046,40046],
    [40048,40045,40046,40068,40047,40045,40047,40049,40045,40047,40049,40049,40049,40049,40049],
    [40048,40049,40049,40049,40050,40048,40049,40049,40049,40049,40049,40049,40049,40049,40049],
    [40056,40057,40057,40057,40058,40056,40057,40057,40057,40057,40057,40057,40057,40057,40057],
    [145,145,145,145,145,145,145,145,145,145,145,145,145,145,145],
    [154,154,154,154,154,154,154,154,154,154,154,154,154,154,154],
    [155,155,155,155,155,155,155,155,155,155,155,155,155,155,155],
    [156,156,156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156,156,156]
],
    "fgmap": [

],
    "area": "天空"
}