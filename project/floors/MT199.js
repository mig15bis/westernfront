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
                    "type": "strokeRect",
                    "x": 130,
                    "y": 64,
                    "width": 64,
                    "height": 16,
                    "style": [
                        255,
                        165,
                        0,
                        1
                    ],
                    "lineWidth": 5
                },
                {
                    "type": "fillRect",
                    "x": 130,
                    "y": 64,
                    "width": 64,
                    "height": 16,
                    "style": [
                        255,
                        0,
                        0,
                        1
                    ]
                },
                {
                    "type": "strokeRect",
                    "x": 194,
                    "y": 64,
                    "width": 64,
                    "height": 16,
                    "style": [
                        255,
                        165,
                        0,
                        1
                    ],
                    "lineWidth": 5
                },
                {
                    "type": "fillRect",
                    "x": 194,
                    "y": 64,
                    "width": 64,
                    "height": 16,
                    "style": [
                        255,
                        0,
                        0,
                        1
                    ]
                },
                {
                    "type": "strokeRect",
                    "x": 258,
                    "y": 64,
                    "width": 64,
                    "height": 16,
                    "style": [
                        255,
                        165,
                        0,
                        1
                    ],
                    "lineWidth": 5
                },
                {
                    "type": "fillRect",
                    "x": 258,
                    "y": 64,
                    "width": 64,
                    "height": 16,
                    "style": [
                        255,
                        0,
                        0,
                        1
                    ]
                },
                {
                    "type": "strokeRect",
                    "x": 322,
                    "y": 64,
                    "width": 64,
                    "height": 16,
                    "style": [
                        255,
                        165,
                        0,
                        1
                    ],
                    "lineWidth": 5
                },
                {
                    "type": "fillRect",
                    "x": 322,
                    "y": 64,
                    "width": 64,
                    "height": 16,
                    "style": [
                        255,
                        0,
                        0,
                        1
                    ]
                }
            ]
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
                    "事实证明，隆美尔的决定是正确的。如果他再不撤退，就很有可能成为身处地球另一边的保卢斯——就是在斯大林格勒全军覆没的那位。",
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
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT197",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,3": [
            {
                "type": "if",
                "condition": "(flag:MT199boss===0)",
                "true": [
                    {
                        "type": "clearMap",
                        "x": 322,
                        "y": 64,
                        "width": 64,
                        "height": 16
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
                        "type": "setValue",
                        "name": "flag:MT199boss",
                        "operator": "+=",
                        "value": "1"
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
                        "type": "setBlock",
                        "number": "motorinf",
                        "loc": [
                            [
                                7,
                                10
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "motorinf",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer3f",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer3f",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4f",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT199boss===1)",
                        "true": [
                            {
                                "type": "clearMap",
                                "x": 258,
                                "y": 64,
                                "width": 64,
                                "height": 16
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
                                "type": "setValue",
                                "name": "flag:MT199boss",
                                "operator": "+=",
                                "value": "1"
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
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        6,
                                        2
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        8,
                                        2
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer105",
                                "loc": [
                                    [
                                        5,
                                        3
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer105",
                                "loc": [
                                    [
                                        9,
                                        3
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4f",
                                "loc": [
                                    [
                                        6,
                                        4
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4f",
                                "loc": [
                                    [
                                        8,
                                        4
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT199boss===2)",
                                "true": [
                                    {
                                        "type": "clearMap",
                                        "x": 194,
                                        "y": 64,
                                        "width": 64,
                                        "height": 16
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
                                        "type": "setValue",
                                        "name": "flag:MT199boss",
                                        "operator": "+=",
                                        "value": "1"
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
                                        "type": "setBlock",
                                        "number": "panzer3f",
                                        "loc": [
                                            [
                                                6,
                                                5
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "panzer3f",
                                        "loc": [
                                            [
                                                8,
                                                5
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "rommel",
                                        "name": "money",
                                        "value": "30",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "rommel",
                                        "name": "exp",
                                        "value": "30"
                                    },
                                    {
                                        "type": "waitAsync"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:MT199boss===3)",
                                        "true": [
                                            {
                                                "type": "clearMap",
                                                "x": 130,
                                                "y": 64,
                                                "width": 64,
                                                "height": 16
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
                                                "type": "setValue",
                                                "name": "flag:MT199boss",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            {
                                                "type": "text",
                                                "text": "\t[隆美尔]\f[rommel.png,0,310]要我在在元首的命令和士兵的生命之间做抉择，我更希望我的士兵们能活下去。全军撤退！所有的惩罚由我一人承担！",
                                                "pos": [
                                                    100,
                                                    300,
                                                    380
                                                ]
                                            },
                                            "\t[系统提示]主线boss战 胜利！",
                                            {
                                                "type": "function",
                                                "function": "function(){\nflags.mission[29][0]=true\n}"
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
                                                    1,
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
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "0,6": {
            "0": {
                "condition": "!core.hasEnemyLeft(undefined,['MT194','MT195','MT196','MT197','MT199'])",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[29][2]=true\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [145,145,145,145,145,145,145,145,145,145,145,145,145,145,145],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,145,145,145,145,145,145],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,145,145],
    [150,  0,  0,  0,  0,  0,  0,552,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [ 89, 85,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,150,150,150,150,150,150, 93,150,150,150,150,150,150,150]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}