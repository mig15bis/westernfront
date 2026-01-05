main.floors.MT237=
{
    "floorId": "MT237",
    "title": "地中海",
    "name": "地中海",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "7days3.mp3",
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
            "type": "sleep",
            "time": 500
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "zeppelin.jpg",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 1000
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "齐柏林伯爵号(Graf Zeppelin)是德国海军在二战期间建造的唯一一艘航空母舰，也是时至今日德国所拥有过的唯一一艘航母。德国海军从来没有建造航空母舰的经验，也没有专属的海上飞行大队，再加上大权在握的德国空军与海军之间的权力斗争，整个建造过程并不顺利。1943年2月，希特勒取消所有水面舰艇的建造工作，仍未完工的齐柏林伯爵号则面临被拆除的命运。1945年4月，德军为避免该舰落入苏军之手，将其主动凿沉，但被苏联于次年打捞上来。由于苏联需要更多攻击航母的经验，以应对美国的海上威胁，于是将齐柏林号充当靶船用于海空军训练，其行踪下落一直是机密。直到2006年，波兰考察队才在弗瓦迪斯瓦沃沃以北55km的海底处发现一处残骸，并确定这就是齐柏林号航母。",
        {
            "type": "hideImage",
            "code": 1,
            "time": 1000
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[警告]未完成的身躯 齐柏林伯爵号航空母舰 袭来！",
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
                    "width": 96,
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
                    "width": 96,
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
                    "x": 226,
                    "y": 64,
                    "width": 96,
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
                    "x": 226,
                    "y": 64,
                    "width": 96,
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
                    "width": 96,
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
                    "width": 96,
                    "height": 16,
                    "style": [
                        255,
                        0,
                        0,
                        1
                    ]
                }
            ]
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌方护航舰与战斗机展开防御阵型",
        {
            "type": "setBlock",
            "number": "veneto",
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
            "number": "deutschland",
            "loc": [
                [
                    7,
                    1
                ]
            ],
            "time": 0,
            "async": true
        },
        {
            "type": "setBlock",
            "number": "z1934a",
            "loc": [
                [
                    5,
                    1
                ]
            ],
            "time": 0,
            "async": true
        },
        {
            "type": "setBlock",
            "number": "z1934a",
            "loc": [
                [
                    4,
                    3
                ]
            ],
            "time": 0,
            "async": true
        },
        {
            "type": "setBlock",
            "number": "z1934a",
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
            "number": "z1934a",
            "loc": [
                [
                    10,
                    3
                ]
            ],
            "time": 0,
            "async": true
        },
        {
            "type": "setBlock",
            "number": "z1934a",
            "loc": [
                [
                    9,
                    1
                ]
            ],
            "time": 0,
            "async": true
        },
        {
            "type": "setBlock",
            "number": "z1934a",
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
            "number": "z1936a",
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
            "number": "me109g6",
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
            "number": "me109g6",
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
            "number": "me109g6",
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
            "number": "me109g6",
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
            "number": "me109g6",
            "loc": [
                [
                    5,
                    9
                ]
            ],
            "time": 0,
            "async": true
        },
        {
            "type": "setBlock",
            "number": "me109g6",
            "loc": [
                [
                    9,
                    9
                ]
            ],
            "time": 0,
            "async": true
        },
        {
            "type": "setBlock",
            "number": "me109g6",
            "loc": [
                [
                    6,
                    10
                ]
            ],
            "time": 0,
            "async": true
        },
        {
            "type": "setBlock",
            "number": "me109g6",
            "loc": [
                [
                    8,
                    10
                ]
            ],
            "time": 0,
            "async": true
        },
        {
            "type": "setBlock",
            "number": "me109g6",
            "loc": [
                [
                    7,
                    11
                ]
            ],
            "time": 0,
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "7,3": [
            {
                "type": "if",
                "condition": "(flag:MT237boss===0)",
                "true": [
                    {
                        "type": "clearMap",
                        "x": 322,
                        "y": 64,
                        "width": 96,
                        "height": 16
                    },
                    {
                        "type": "setBlock",
                        "number": "zeppelin",
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
                        "name": "flag:MT237boss",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[系统提示]水下探测到多个声纳信号！",
                    {
                        "type": "setBlock",
                        "number": "u7",
                        "loc": [
                            [
                                5,
                                4
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "u7",
                        "loc": [
                            [
                                9,
                                4
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "u9",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "u9",
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
                        "number": "u9",
                        "loc": [
                            [
                                4,
                                10
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "u9",
                        "loc": [
                            [
                                10,
                                10
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "u7",
                        "loc": [
                            [
                                5,
                                10
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "u7",
                        "loc": [
                            [
                                9,
                                10
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "u7",
                        "loc": [
                            [
                                4,
                                7
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "u7",
                        "loc": [
                            [
                                10,
                                7
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
                        "condition": "(flag:MT237boss===1)",
                        "true": [
                            {
                                "type": "clearMap",
                                "x": 226,
                                "y": 64,
                                "width": 96,
                                "height": 16
                            },
                            {
                                "type": "setBlock",
                                "number": "zeppelin",
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
                                "name": "flag:MT237boss",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "playSound",
                                "name": "xinxinmagic.mp3"
                            },
                            "\t[系统提示]齐柏林伯爵号 放飞更多舰载机！",
                            {
                                "type": "setBlock",
                                "number": "me109g6",
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
                                "number": "me109g6",
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
                                "number": "me109g6",
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
                                "number": "me109g6",
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
                                "number": "ju87b",
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
                                "number": "ju87b",
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
                                "number": "ju87b",
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
                                "number": "ju87b",
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
                                "number": "ju87b",
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
                                "number": "me109g6",
                                "loc": [
                                    [
                                        4,
                                        7
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "me109g6",
                                "loc": [
                                    [
                                        10,
                                        7
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "me109g6",
                                "loc": [
                                    [
                                        4,
                                        9
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "me109g6",
                                "loc": [
                                    [
                                        10,
                                        9
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setEnemy",
                                "id": "zeppelin",
                                "name": "money",
                                "value": "50"
                            },
                            {
                                "type": "setEnemy",
                                "id": "zeppelin",
                                "name": "exp",
                                "value": "50"
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT237boss===2)",
                                "true": [
                                    {
                                        "type": "clearMap",
                                        "x": 130,
                                        "y": 64,
                                        "width": 96,
                                        "height": 16
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "zeppelin",
                                        "loc": [
                                            [
                                                7,
                                                3
                                            ]
                                        ],
                                        "time": 0
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "torpeodoexplo.wav"
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
                                        "time": 2000
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "xinxinmagic.mp3"
                                    },
                                    "\t[系统提示]支线boss战 胜利！",
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[34][1]=true\n}"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "medal4",
                                        "loc": [
                                            [
                                                7,
                                                3
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "medal4",
                                        "loc": [
                                            [
                                                5,
                                                3
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "medal4",
                                        "loc": [
                                            [
                                                9,
                                                3
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "tea5",
                                        "loc": [
                                            [
                                                6,
                                                2
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "tea5",
                                        "loc": [
                                            [
                                                8,
                                                2
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "I523",
                                        "loc": [
                                            [
                                                6,
                                                4
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "I523",
                                        "loc": [
                                            [
                                                8,
                                                4
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "I524",
                                        "loc": [
                                            [
                                                7,
                                                5
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "clearMap",
                                        "x": 0,
                                        "y": 0,
                                        "width": 480,
                                        "height": 480
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
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [109,109,109,109,109,109,109,109,109,109,109,109,109,109,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,238,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,109,  0,109,  0,  0,  0,  0,  0,109],
    [109,109,109,109,109,109,109, 90,109,109,109,109,109,109,109]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
],
    "fgmap": [

],
    "area": "海洋"
}