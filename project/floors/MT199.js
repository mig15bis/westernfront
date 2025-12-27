main.floors.MT199=
{
    "floorId": "MT199",
    "title": "阿拉曼",
    "name": "阿拉曼",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "cao2.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up:2"
            ]
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                7,
                13
            ]
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[警告]沙漠之狐 艾尔温·隆美尔元帅 袭来",
        "\t[系统提示]进入boss战，即将进入存档界面！",
        {
            "type": "callSave"
        },
        {
            "type": "forbidSave",
            "forbid": true
        },
        {
            "type": "previewUI",
            "action": [
                {
                    "type": "setValue",
                    "name": "flag:bosshp",
                    "value": "4"
                },
                {
                    "type": "setValue",
                    "name": "flag:bosshpmax",
                    "value": "4"
                },
                {
                    "type": "strokeRect",
                    "x": 130,
                    "y": 64,
                    "width": 256,
                    "height": 16,
                    "style": [
                        255,
                        255,
                        0,
                        1
                    ],
                    "lineWidth": 5
                },
                {
                    "type": "fillRect",
                    "x": 130,
                    "y": 64,
                    "width": 256,
                    "height": 16,
                    "style": [
                        255,
                        0,
                        0,
                        1
                    ]
                },
                {
                    "type": "fillBoldText",
                    "x": 130,
                    "y": 48,
                    "style": [
                        255,
                        0,
                        0,
                        1
                    ],
                    "strokeStyle": [
                        255,
                        140,
                        0,
                        1
                    ],
                    "font": "20px number",
                    "text": "4/4"
                }
            ]
        },
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "0,7": [
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
                "type": "update"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "hideui"
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
                "function": "function(){\nvar a = core.taskSystem.checkTask(0) ? 1 : 0,\n\tb = core.taskSystem.checkTask(1) ? 1 : 0,\n\tc = core.taskSystem.checkTask(2) ? 1 : 0;\ncore.setFlag('@temp@A', a + b + c);\n}"
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
                "type": "showImage",
                "code": 5,
                "image": "abstract.png",
                "loc": [
                    40,
                    480
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "moveImage",
                "code": 5,
                "to": [
                    40,
                    20
                ],
                "time": 500
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "drawTextContent",
                "text": "   德国人撤退了，留下了遍地俘虏和\n坏掉的武器装备。蒙哥马利将军和指挥\n官阁下向我们证明，隆美尔并非不可战\n胜！\n   纵使隆美尔再厉害，也没法用一堆\n抛锚的坦克和耗尽弹药的火炮阻挡我们\n的攻势。尽管我们的损失仍旧很大，但\n敌人应该是没法再回来了！",
                "left": 60,
                "top": 100,
                "align": "left",
                "fontSize": 20,
                "color": [
                    0,
                    0,
                    0,
                    1
                ]
            },
            {
                "type": "wait"
            },
            {
                "type": "clearMap"
            },
            {
                "type": "submitTask"
            },
            {
                "type": "moveImage",
                "code": 5,
                "to": [
                    40,
                    480
                ],
                "time": 500
            },
            {
                "type": "hideImage",
                "code": 5,
                "time": 0
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
                "type": "setValue",
                "name": "flag:stage",
                "value": "30"
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT201",
                        "loc": [
                            3,
                            7
                        ],
                        "direction": "right"
                    }
                ],
                "no": [
                    {
                        "type": "playBgm",
                        "name": "gaijin5.mp3"
                    },
                    "随着前来运送燃油的意大利油船被英军击沉在托布鲁克港，德意联军获得补给的最后希望也破灭了。",
                    "蒙哥马利的军队兵分两路，澳军沿海岸线进攻，英联邦军队进攻泰尔阿尔-阿恰其尔和基德尼山脊。虽然有“魔鬼的花园”辅助，隆美尔的军队仍然寡不敌众。",
                    "1942年11月2日，隆美尔收到了希特勒的来电，希特勒回绝了他的撤退请求，要求他继续坚持。隆美尔收到电报后，罕见的发了火。",
                    "又坚持了一小段时间后，隆美尔终于下定决心，保全他的部队。他违抗希特勒的命令，带着他的部队一路后退。从托布鲁克，到班加西，一直到突尼斯——他们刚来到北非的地方，才停下来。一夜之间，轴心国部队就回到了起点。",
                    "事实证明，隆美尔的决定是正确的。如果他再不撤退，就很有可能与保卢斯一个下场——就是在斯大林格勒全军覆没的那位。",
                    "经此一役，隆美尔的500辆坦克只剩下12辆，占总兵力三分之一的3万士兵被俘虏。轴心国元气大伤，隆美尔只有撤到突尼斯才能补充人员和装备，毕竟沿途的补给全都被榨干了。",
                    "盟军终于久违的赢下了一场重要战役，尽管损失十分惨重。击败隆美尔的蒙哥马利将军一时间风光无限，并获得了“阿拉曼的蒙哥马利子爵”称号，晋升为上将。这是他的人生高光时刻。",
                    "丘吉尔于11月10日发表了他对这场战役的评论：“这场战役不是战争的结束，甚至不是战争结束的开始，但这绝对是战争开始的结束！”",
                    "阿拉曼战役的惨败对隆美尔来说是个灾难，而且，祸不单行。撤至利比亚边境时，他得到了另一个坏消息。",
                    "在北非沙漠的另一边，迟迟不下场的美国军队，突然发起了行动。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT200",
                        "loc": [
                            -1,
                            -1
                        ]
                    }
                ]
            }
        ],
        "7,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "6,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "8,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "7,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "7,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "6,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "8,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "6,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "8,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "5,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "5,13": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "9,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "9,13": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "9,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "5,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "4,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "4,13": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "10,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "10,13": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "10,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "4,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "2,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "12,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "2,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "12,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "1,13": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "13,13": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "7,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "8,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "5,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "6,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "8,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "9,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "10,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "7,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "4,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "3,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "12,2": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "12,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "4,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "1,2": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "12,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "11,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "2,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        }
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "7,3": [
            {
                "type": "if",
                "condition": "(flag:bosshp===4)",
                "true": [
                    {
                        "type": "previewUI",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:bosshp",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "clearMap",
                                "x": 128,
                                "y": 30,
                                "width": 100,
                                "height": 30
                            },
                            {
                                "type": "clearMap",
                                "x": "386 - ((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                "y": 64,
                                "width": "((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                "height": 16
                            },
                            {
                                "type": "fillBoldText",
                                "x": 130,
                                "y": 48,
                                "style": [
                                    255,
                                    0,
                                    0,
                                    1
                                ],
                                "strokeStyle": [
                                    255,
                                    140,
                                    0,
                                    1
                                ],
                                "font": "20px number",
                                "text": "3/4"
                            }
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "rommel",
                        "loc": [
                            [
                                7,
                                3
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "animate",
                        "name": "hand",
                        "async": true
                    },
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            12
                        ],
                        "time": 10,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "text",
                        "text": "\t[隆美尔]\f[rommel.png,0,310]英军果然还是攻过来了。按照原定防御计划行动。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                6,
                                6
                            ],
                            [
                                7,
                                6
                            ],
                            [
                                8,
                                6
                            ],
                            [
                                6,
                                7
                            ],
                            [
                                7,
                                7
                            ],
                            [
                                8,
                                7
                            ],
                            [
                                7,
                                8
                            ]
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:bosshp===3)",
                        "true": [
                            {
                                "type": "previewUI",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:bosshp",
                                        "operator": "-=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "clearMap",
                                        "x": 128,
                                        "y": 30,
                                        "width": 100,
                                        "height": 30
                                    },
                                    {
                                        "type": "clearMap",
                                        "x": "386 - ((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                        "y": 64,
                                        "width": "((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                        "height": 16
                                    },
                                    {
                                        "type": "fillBoldText",
                                        "x": 130,
                                        "y": 48,
                                        "style": [
                                            255,
                                            0,
                                            0,
                                            1
                                        ],
                                        "strokeStyle": [
                                            255,
                                            140,
                                            0,
                                            1
                                        ],
                                        "font": "20px number",
                                        "text": "2/4"
                                    }
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "rommel",
                                "loc": [
                                    [
                                        7,
                                        3
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "animate",
                                "name": "hand",
                                "async": true
                            },
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    12
                                ],
                                "time": 10,
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "text",
                                "text": "\t[隆美尔]\f[rommel.png,0,310]士兵们，撑住，我已经向元首申请撤退了。",
                                "pos": [
                                    100,
                                    300,
                                    380
                                ]
                            },
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        2,
                                        11
                                    ],
                                    [
                                        2,
                                        12
                                    ],
                                    [
                                        1,
                                        13
                                    ],
                                    [
                                        4,
                                        11
                                    ],
                                    [
                                        4,
                                        12
                                    ],
                                    [
                                        4,
                                        13
                                    ],
                                    [
                                        5,
                                        11
                                    ],
                                    [
                                        5,
                                        12
                                    ],
                                    [
                                        5,
                                        13
                                    ],
                                    [
                                        6,
                                        12
                                    ],
                                    [
                                        8,
                                        12
                                    ],
                                    [
                                        9,
                                        11
                                    ],
                                    [
                                        9,
                                        12
                                    ],
                                    [
                                        9,
                                        13
                                    ],
                                    [
                                        10,
                                        11
                                    ],
                                    [
                                        10,
                                        12
                                    ],
                                    [
                                        10,
                                        13
                                    ],
                                    [
                                        12,
                                        11
                                    ],
                                    [
                                        12,
                                        12
                                    ],
                                    [
                                        13,
                                        13
                                    ]
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:bosshp===2)",
                                "true": [
                                    {
                                        "type": "previewUI",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:bosshp",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "clearMap",
                                                "x": 128,
                                                "y": 30,
                                                "width": 100,
                                                "height": 30
                                            },
                                            {
                                                "type": "clearMap",
                                                "x": "386 - ((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                                "y": 64,
                                                "width": "((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                                "height": 16
                                            },
                                            {
                                                "type": "fillBoldText",
                                                "x": 130,
                                                "y": 48,
                                                "style": [
                                                    255,
                                                    0,
                                                    0,
                                                    1
                                                ],
                                                "strokeStyle": [
                                                    255,
                                                    140,
                                                    0,
                                                    1
                                                ],
                                                "font": "20px number",
                                                "text": "1/4"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "rommel",
                                        "loc": [
                                            [
                                                7,
                                                3
                                            ]
                                        ],
                                        "time": 0
                                    },
                                    {
                                        "type": "animate",
                                        "name": "hand",
                                        "async": true
                                    },
                                    {
                                        "type": "jumpHero",
                                        "loc": [
                                            7,
                                            12
                                        ],
                                        "time": 10,
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    {
                                        "type": "text",
                                        "text": "\t[隆美尔]\f[rommel.png,0,310]希特勒不允许我们撤退，让我们在这战斗到最后一刻！他简直是疯了！这样的牺牲毫无价值可言！",
                                        "pos": [
                                            100,
                                            300,
                                            380
                                        ]
                                    },
                                    {
                                        "type": "text",
                                        "text": "\t[隆美尔]\f[rommel.png,0,310]我曾以为他是一个军事天才，现在看来，是我错了。",
                                        "pos": [
                                            100,
                                            300,
                                            380
                                        ]
                                    },
                                    {
                                        "type": "show",
                                        "loc": [
                                            [
                                                7,
                                                1
                                            ],
                                            [
                                                8,
                                                1
                                            ],
                                            [
                                                4,
                                                1
                                            ],
                                            [
                                                1,
                                                2
                                            ],
                                            [
                                                12,
                                                2
                                            ],
                                            [
                                                12,
                                                3
                                            ],
                                            [
                                                3,
                                                3
                                            ],
                                            [
                                                5,
                                                3
                                            ],
                                            [
                                                9,
                                                3
                                            ],
                                            [
                                                4,
                                                4
                                            ],
                                            [
                                                6,
                                                4
                                            ],
                                            [
                                                7,
                                                4
                                            ],
                                            [
                                                8,
                                                4
                                            ],
                                            [
                                                10,
                                                4
                                            ],
                                            [
                                                2,
                                                5
                                            ],
                                            [
                                                11,
                                                5
                                            ],
                                            [
                                                12,
                                                5
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "rommel",
                                        "name": "money",
                                        "value": "100",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "rommel",
                                        "name": "exp",
                                        "value": "100"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:bosshp===1)",
                                        "true": [
                                            {
                                                "type": "previewUI",
                                                "action": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:bosshp",
                                                        "operator": "-=",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "clearMap",
                                                        "x": 128,
                                                        "y": 30,
                                                        "width": 100,
                                                        "height": 30
                                                    },
                                                    {
                                                        "type": "clearMap",
                                                        "x": "386 - ((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                                        "y": 64,
                                                        "width": "((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                                        "height": 16
                                                    },
                                                    {
                                                        "type": "fillBoldText",
                                                        "x": 130,
                                                        "y": 48,
                                                        "style": [
                                                            255,
                                                            0,
                                                            0,
                                                            1
                                                        ],
                                                        "strokeStyle": [
                                                            255,
                                                            140,
                                                            0,
                                                            1
                                                        ],
                                                        "font": "20px number",
                                                        "text": "0/4"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "rommel",
                                                "loc": [
                                                    [
                                                        7,
                                                        3
                                                    ]
                                                ],
                                                "time": 0
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            {
                                                "type": "text",
                                                "text": "\t[隆美尔]\f[rommel.png,0,310]比起盲目服从元首的错误命令，我更希望我的士兵们能活下去。全军撤退，来不及撤的可以向最近的盟军部队投降！所有的惩罚均由我一人承担。",
                                                "pos": [
                                                    100,
                                                    300,
                                                    380
                                                ]
                                            },
                                            "\t[系统提示]主线boss战 胜利！",
                                            {
                                                "type": "setValue",
                                                "name": "flag:MT199boss",
                                                "value": "1"
                                            },
                                            {
                                                "type": "hide",
                                                "loc": [
                                                    [
                                                        7,
                                                        3
                                                    ]
                                                ],
                                                "remove": true,
                                                "time": 0
                                            },
                                            {
                                                "type": "openDoor",
                                                "loc": [
                                                    3,
                                                    7
                                                ]
                                            },
                                            {
                                                "type": "openDoor",
                                                "loc": [
                                                    11,
                                                    7
                                                ]
                                            },
                                            {
                                                "type": "openDoor",
                                                "loc": [
                                                    7,
                                                    13
                                                ]
                                            },
                                            {
                                                "type": "clearMap",
                                                "x": 0,
                                                "y": 0,
                                                "width": 416,
                                                "height": 416
                                            },
                                            {
                                                "type": "forbidSave"
                                            }
                                        ],
                                        "false": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,11": [
            {
                "type": "setValue",
                "name": "flag:MT199door1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door1===12)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            10
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            10
                        ]
                    }
                ]
            }
        ],
        "5,12": [
            {
                "type": "setValue",
                "name": "flag:MT199door1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door1===12)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            10
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            10
                        ]
                    }
                ]
            }
        ],
        "5,13": [
            {
                "type": "setValue",
                "name": "flag:MT199door1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door1===12)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            10
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            10
                        ]
                    }
                ]
            }
        ],
        "4,11": [
            {
                "type": "setValue",
                "name": "flag:MT199door1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door1===12)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            10
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            10
                        ]
                    }
                ]
            }
        ],
        "4,12": [
            {
                "type": "setValue",
                "name": "flag:MT199door1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door1===12)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            10
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            10
                        ]
                    }
                ]
            }
        ],
        "4,13": [
            {
                "type": "setValue",
                "name": "flag:MT199door1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door1===12)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            10
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            10
                        ]
                    }
                ]
            }
        ],
        "9,11": [
            {
                "type": "setValue",
                "name": "flag:MT199door1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door1===12)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            10
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            10
                        ]
                    }
                ]
            }
        ],
        "9,12": [
            {
                "type": "setValue",
                "name": "flag:MT199door1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door1===12)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            10
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            10
                        ]
                    }
                ]
            }
        ],
        "9,13": [
            {
                "type": "setValue",
                "name": "flag:MT199door1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door1===12)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            10
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            10
                        ]
                    }
                ]
            }
        ],
        "10,11": [
            {
                "type": "setValue",
                "name": "flag:MT199door1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door1===12)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            10
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            10
                        ]
                    }
                ]
            }
        ],
        "10,12": [
            {
                "type": "setValue",
                "name": "flag:MT199door1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door1===12)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            10
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            10
                        ]
                    }
                ]
            }
        ],
        "10,13": [
            {
                "type": "setValue",
                "name": "flag:MT199door1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door1===12)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            10
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            10
                        ]
                    }
                ]
            }
        ],
        "5,3": [
            {
                "type": "setValue",
                "name": "flag:MT199door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door2===15)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "setValue",
                "name": "flag:MT199door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door2===15)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ],
        "8,4": [
            {
                "type": "setValue",
                "name": "flag:MT199door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door2===15)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ],
        "9,3": [
            {
                "type": "setValue",
                "name": "flag:MT199door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door2===15)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ],
        "10,4": [
            {
                "type": "setValue",
                "name": "flag:MT199door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door2===15)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:MT199door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door2===15)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ],
        "4,4": [
            {
                "type": "setValue",
                "name": "flag:MT199door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door2===15)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ],
        "3,3": [
            {
                "type": "setValue",
                "name": "flag:MT199door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door2===15)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ],
        "12,2": [
            {
                "type": "setValue",
                "name": "flag:MT199door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door2===15)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ],
        "12,3": [
            {
                "type": "setValue",
                "name": "flag:MT199door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door2===15)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ],
        "4,1": [
            {
                "type": "setValue",
                "name": "flag:MT199door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door2===15)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ],
        "1,2": [
            {
                "type": "setValue",
                "name": "flag:MT199door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door2===15)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ],
        "12,5": [
            {
                "type": "setValue",
                "name": "flag:MT199door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door2===15)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ],
        "11,5": [
            {
                "type": "setValue",
                "name": "flag:MT199door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door2===15)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ],
        "2,5": [
            {
                "type": "setValue",
                "name": "flag:MT199door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT199door2===15)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "0,6": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [145,145,145,145,145,145,145,145,145,145,145,145,145,145,145],
    [150,  0,  0,  0,409,  0, 85,390,220,145,145,145,145,145,145],
    [150,404,150,150,150,150,150,150,150,150,150,150,253,145,145],
    [150,  0,150,253,  0,250,150,552,150,250,  0,150,409,  0,150],
    [150,  0,150,150,203,  0,250,203,250,  0,203,150,  0,  0,150],
    [150,  0,232,  0,  0,150,150,150,150,150,  0,232,404,  0,150],
    [150,150,150,150,  0,150,265,253,265,150,  0,150,150,150,150],
    [ 89,571,571, 85,  0,150,250,266,250,150,  0, 85,536,536,536],
    [150,150,150,150,  0,150,150,250,150,150,  0,150,150,150,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,150, 85,150,150,150,150,  0,150,150,150,150, 85,150,150],
    [150,  0,409,150,203,250,150,  0,150,250,203,150,409,  0,150],
    [150,  0,390,150,248,404, 11,  0, 11,404,248,150,390,  0,150],
    [150,253,571,150,203,250,150,  0,150,250,203,150,571,253,150],
    [150,150,150,150,150,150,150,  0,150,150,150,150,150,150,150]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}