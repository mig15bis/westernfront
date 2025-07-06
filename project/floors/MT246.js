main.floors.MT246=
{
    "floorId": "MT246",
    "title": "突尼斯",
    "name": "突尼斯",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10007",
    "bgm": "desert3.mp3",
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
                14
            ]
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[警告]沙漠之狐的接替者 汉斯·于尔根·冯·阿尼姆大将 袭来",
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
        "7,0": [
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
                "type": "function",
                "function": "function(){\nflags.mission[35][0]=true\n}"
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
                "value": "36"
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
                        "floorId": "MT248",
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
                        "name": "gaijin5.mp3"
                    },
                    "希特勒乐观的估计，突尼斯可以防守几个月，甚至几年，以打乱盟军在欧洲的计划。很显然，他的实际军事能力远低于他自认为的程度。",
                    "当盟军从陆海空三方面全面包围突尼斯的那一刻起，北非的德意联军就已经战败了，尽管突尼斯的地形利于防守，但在盟军绝对优势的兵力面前，这只是垂死挣扎。",
                    "盟军的步兵是对方的2倍，火炮是3倍，坦克是4倍。唯一能够造成实际威胁的，只有德军潜艇的零星骚扰。",
                    "1943年4月底，盟军在朗斯托普峰和609高地遭遇顽强抵抗。加强了几个师的兵力后，美军终于攻下609高地，并威胁德意联军侧后方。",
                    "5月初，盟军成功占领突尼斯。德意军队撤退至邦角，企图从海路撤往意大利，但这明显行不通。",
                    "5月13日，非洲集团军群司令阿尼姆大将终于率部投降，北非战场正式落下帷幕。",
                    "德意联军残部遭到全歼，35万人成为俘虏，整个地中海北非沿岸被盟军掌控，非洲殖民地和地中海交通线的安全得到保障。",
                    "解决了非洲的敌人后，盟军可以准备进攻下一个目标了。直接攻击德国人的老家或许为时尚早，但亚平宁半岛上的意大利本土却是个不错的进攻对象。",
                    "轴心国三巨头当中，意大利算是最弱的那一个。但无论如何，消灭掉墨索里尼，也是盟军赢得战争胜利的重要一环。",
                    "下一步行动的目标很快得到确定——意大利占领的西西里岛。这个地中海上的小岛是盟军与意大利之间最后一个障碍，占领它，不仅可以完全控制地中海，直逼意大利本土，还能消灭轴心国在地中海最后的海空军力量。",
                    "针对西西里岛的登陆行动，被命名为“哈士奇行动”。",
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[系统提示]北非战役结束，从现在起，炎热debuff将不复存在！",
                    {
                        "type": "changeFloor",
                        "floorId": "MT247",
                        "loc": [
                            -1,
                            -1
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "7,3": [
            {
                "type": "if",
                "condition": "(flag:MT246boss===0)",
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
                        "number": "blueKing",
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
                            13
                        ],
                        "time": 10,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:MT246boss",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "text",
                        "text": "\t[阿尼姆]\f[anyum.png,0,310]坚守突尼斯，巷战可以有效的消耗敌人！",
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
                                6,
                                4
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
                                8,
                                4
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
                                5,
                                5
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
                                5,
                                7
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
                                9,
                                5
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
                                9,
                                7
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
                                6,
                                11
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
                                8,
                                11
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "sdkfz234",
                        "loc": [
                            [
                                4,
                                6
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "sdkfz234",
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
                        "number": "sdkfz234",
                        "loc": [
                            [
                                10,
                                6
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
                                5,
                                11
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
                                9,
                                11
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
                        "condition": "(flag:MT246boss===1)",
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
                                "number": "blueKing",
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
                                "name": "flag:MT246boss",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "text",
                                "text": "\t[阿尼姆]\f[anyum.png,0,310]我们的后方受到威胁，撤至邦角，在那里建立防线。",
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
                                "number": "flak88",
                                "loc": [
                                    [
                                        7,
                                        4
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4g",
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
                                "type": "setBlock",
                                "number": "panzer4g",
                                "loc": [
                                    [
                                        7,
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
                                        6,
                                        6
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
                                        6
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
                                "condition": "(flag:MT246boss===2)",
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
                                        "number": "blueKing",
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
                                        "name": "flag:MT246boss",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    {
                                        "type": "text",
                                        "text": "\t[阿尼姆]\f[anyum.png,0,310]最后的阵地已经失守，海上撤退路线被彻底封锁。我们除了投降，别无选择。",
                                        "pos": [
                                            100,
                                            300,
                                            380
                                        ]
                                    },
                                    {
                                        "type": "text",
                                        "text": "\t[隆美尔]\f[rommel.png,0,310]我无法说服元首对沙漠军团下达投降命令，这明明是无谓的牺牲，我不知道元首在想什么。",
                                        "pos": [
                                            100,
                                            300,
                                            380
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "panzer4f",
                                        "loc": [
                                            [
                                                6,
                                                6
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
                                                6
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
                                                6,
                                                4
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
                                                8,
                                                4
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
                                                6,
                                                8
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
                                                8,
                                                8
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "blueKing",
                                        "name": "money",
                                        "value": "30",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "blueKing",
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
                                        "condition": "(flag:MT246boss===3)",
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
                                                "number": "blueKing",
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
                                                "name": "flag:MT246boss",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            {
                                                "type": "text",
                                                "text": "\t[阿尼姆]\f[anyum.png,0,310]所有的弹药已经打光，最后一点物资也没有了。我们不可能像日本人一样用刺刀去对付敌人的坦克，沙漠军团的所有战士和军官，你们可以投降了。",
                                                "pos": [
                                                    100,
                                                    300,
                                                    380
                                                ]
                                            },
                                            {
                                                "type": "text",
                                                "text": "\t[隆美尔]\f[rommel.png,0,310]希特勒，这个疯狂的男人正在一步步将德意志推向深渊，而我却什么都做不到。",
                                                "pos": [
                                                    100,
                                                    300,
                                                    380
                                                ]
                                            },
                                            "\t[系统提示]主线boss战 胜利！",
                                            {
                                                "type": "function",
                                                "function": "function(){\nflags.mission[35][0]=true\n}"
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
                                                    7,
                                                    1
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
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [109,109,109,109,109,109,109, 89,109,109,109,109,109,109,109],
    [109,  0,  0,  0,  0,  0,  0, 85,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,80058,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,80058,246,80058,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,80058,  0,  0,  0,80058,  0,  0,  0,  0,109],
    [109,  0,  0,  0,80058,  0,80058,  0,80058,  0,80058,  0,  0,  0,109],
    [109,  0,  0,80058,  0,  0,  0,  0,  0,  0,  0,80058,  0,  0,109],
    [109,  0,  0,  0,80058,  0,80058,  0,80058,  0,80058,  0,  0,  0,109],
    [109,  0,  0,  0,  0,80058,  0,  0,  0,80058,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,80058,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,80058,80058,  0,80058,80058,  0,  0,  0,  0,109],
    [109,  0,  0,  0,80058,  0,  0,  0,  0,  0,80058,  0,  0,  0,109],
    [109,  0,  0,  0,  0,80058,80058,  0,80058,80058,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,109,109,109,109,109,109,  0,109,109,109,109,109,109,109]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}