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
    "cannotViewMap": true,
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
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌方护航舰展开防御阵型，齐柏林号开始将舰载机移入甲板。",
        {
            "type": "playSound",
            "name": "ship.mp3"
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
            "type": "waitAsync"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT236",
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
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[系统提示]水下探测到多个声纳信号！齐柏林伯爵号放飞战斗机编队！",
                    {
                        "type": "playSound",
                        "name": "Sonar.wav"
                    },
                    {
                        "type": "setBlock",
                        "number": "u7",
                        "loc": [
                            [
                                5,
                                4
                            ]
                        ],
                        "time": 500,
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
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "u7",
                        "loc": [
                            [
                                5,
                                2
                            ]
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "u7",
                        "loc": [
                            [
                                9,
                                2
                            ]
                        ],
                        "time": 500,
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
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "u9",
                        "loc": [
                            [
                                7,
                                1
                            ]
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
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
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "me109g6",
                        "loc": [
                            [
                                7,
                                2
                            ]
                        ],
                        "time": 500,
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
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "me109g6",
                        "loc": [
                            [
                                8,
                                3
                            ]
                        ],
                        "time": 500,
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
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "me109g6",
                        "loc": [
                            [
                                7,
                                4
                            ]
                        ],
                        "time": 500,
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
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "me109g6",
                        "loc": [
                            [
                                6,
                                3
                            ]
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "me109g6",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "jump",
                        "from": [
                            6,
                            2
                        ],
                        "to": [
                            6,
                            7
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true
                    },
                    {
                        "type": "jump",
                        "from": [
                            7,
                            2
                        ],
                        "to": [
                            7,
                            8
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true
                    },
                    {
                        "type": "jump",
                        "from": [
                            8,
                            2
                        ],
                        "to": [
                            8,
                            7
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true
                    },
                    {
                        "type": "jump",
                        "from": [
                            8,
                            3
                        ],
                        "to": [
                            10,
                            9
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true
                    },
                    {
                        "type": "jump",
                        "from": [
                            8,
                            4
                        ],
                        "to": [
                            11,
                            10
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true
                    },
                    {
                        "type": "jump",
                        "from": [
                            7,
                            4
                        ],
                        "to": [
                            12,
                            9
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true
                    },
                    {
                        "type": "jump",
                        "from": [
                            6,
                            4
                        ],
                        "to": [
                            4,
                            9
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true
                    },
                    {
                        "type": "jump",
                        "from": [
                            6,
                            3
                        ],
                        "to": [
                            3,
                            10
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true
                    },
                    {
                        "type": "jump",
                        "from": [
                            7,
                            5
                        ],
                        "to": [
                            2,
                            9
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "playSound",
                                "name": "xinxinmagic.mp3"
                            },
                            "\t[系统提示]更多护航舰抵达！齐柏林伯爵号放飞轰炸机编队！",
                            {
                                "type": "playSound",
                                "name": "ship.mp3"
                            },
                            {
                                "type": "setBlock",
                                "number": "z1936a",
                                "loc": [
                                    [
                                        6,
                                        4
                                    ]
                                ],
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "z1936a",
                                "loc": [
                                    [
                                        8,
                                        4
                                    ]
                                ],
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "konesburg",
                                "loc": [
                                    [
                                        7,
                                        1
                                    ]
                                ],
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "z1934a",
                                "loc": [
                                    [
                                        5,
                                        2
                                    ]
                                ],
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "z1934a",
                                "loc": [
                                    [
                                        9,
                                        2
                                    ]
                                ],
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "hipper",
                                "loc": [
                                    [
                                        7,
                                        2
                                    ]
                                ],
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "playSound",
                                "name": "fighter1.mp3"
                            },
                            {
                                "type": "setBlock",
                                "number": "ju87b",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ],
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "ju87b",
                                "loc": [
                                    [
                                        8,
                                        3
                                    ]
                                ],
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "ju87b",
                                "loc": [
                                    [
                                        7,
                                        4
                                    ]
                                ],
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "jump",
                                "from": [
                                    6,
                                    3
                                ],
                                "to": [
                                    4,
                                    7
                                ],
                                "time": 500,
                                "keep": true,
                                "async": true
                            },
                            {
                                "type": "jump",
                                "from": [
                                    8,
                                    3
                                ],
                                "to": [
                                    6,
                                    7
                                ],
                                "time": 500,
                                "keep": true,
                                "async": true
                            },
                            {
                                "type": "jump",
                                "from": [
                                    7,
                                    4
                                ],
                                "to": [
                                    5,
                                    8
                                ],
                                "time": 500,
                                "keep": true,
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "playSound",
                                "name": "fighter1.mp3"
                            },
                            {
                                "type": "setBlock",
                                "number": "ju87b",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ],
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "ju87b",
                                "loc": [
                                    [
                                        8,
                                        3
                                    ]
                                ],
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "ju87b",
                                "loc": [
                                    [
                                        7,
                                        4
                                    ]
                                ],
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "jump",
                                "from": [
                                    6,
                                    3
                                ],
                                "to": [
                                    8,
                                    7
                                ],
                                "time": 500,
                                "keep": true,
                                "async": true
                            },
                            {
                                "type": "jump",
                                "from": [
                                    8,
                                    3
                                ],
                                "to": [
                                    10,
                                    7
                                ],
                                "time": 500,
                                "keep": true,
                                "async": true
                            },
                            {
                                "type": "jump",
                                "from": [
                                    7,
                                    4
                                ],
                                "to": [
                                    9,
                                    8
                                ],
                                "time": 500,
                                "keep": true,
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "playSound",
                                "name": "fighter1.mp3"
                            },
                            {
                                "type": "setBlock",
                                "number": "ju87b",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ],
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "ju87b",
                                "loc": [
                                    [
                                        8,
                                        3
                                    ]
                                ],
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "ju87b",
                                "loc": [
                                    [
                                        7,
                                        4
                                    ]
                                ],
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "jump",
                                "from": [
                                    6,
                                    3
                                ],
                                "to": [
                                    7,
                                    8
                                ],
                                "time": 500,
                                "keep": true,
                                "async": true
                            },
                            {
                                "type": "jump",
                                "from": [
                                    8,
                                    3
                                ],
                                "to": [
                                    6,
                                    9
                                ],
                                "time": 500,
                                "keep": true,
                                "async": true
                            },
                            {
                                "type": "jump",
                                "from": [
                                    7,
                                    4
                                ],
                                "to": [
                                    8,
                                    9
                                ],
                                "time": 500,
                                "keep": true,
                                "async": true
                            },
                            {
                                "type": "waitAsync"
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
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "xinxinmagic.mp3"
                                    },
                                    "\t[系统提示]敌军大型军舰和陆基轰炸机增援！齐柏林伯爵号放飞混合机群！",
                                    {
                                        "type": "playSound",
                                        "name": "ship.mp3"
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "konesburg",
                                        "loc": [
                                            [
                                                6,
                                                4
                                            ]
                                        ],
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "konesburg",
                                        "loc": [
                                            [
                                                8,
                                                4
                                            ]
                                        ],
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "hipper",
                                        "loc": [
                                            [
                                                6,
                                                2
                                            ]
                                        ],
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "deutschland",
                                        "loc": [
                                            [
                                                8,
                                                2
                                            ]
                                        ],
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "scharnhost",
                                        "loc": [
                                            [
                                                7,
                                                1
                                            ]
                                        ],
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "bomber1.mp3"
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "ju88a",
                                        "loc": [
                                            [
                                                2,
                                                1
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "fw200",
                                        "loc": [
                                            [
                                                4,
                                                1
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "do17z",
                                        "loc": [
                                            [
                                                3,
                                                2
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "ju88a",
                                        "loc": [
                                            [
                                                12,
                                                1
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "fw200",
                                        "loc": [
                                            [
                                                10,
                                                1
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "do17z",
                                        "loc": [
                                            [
                                                11,
                                                2
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "move",
                                        "loc": [
                                            2,
                                            1
                                        ],
                                        "time": 500,
                                        "keep": true,
                                        "async": true,
                                        "steps": [
                                            "down:1"
                                        ]
                                    },
                                    {
                                        "type": "move",
                                        "loc": [
                                            4,
                                            1
                                        ],
                                        "time": 500,
                                        "keep": true,
                                        "async": true,
                                        "steps": [
                                            "down:1"
                                        ]
                                    },
                                    {
                                        "type": "move",
                                        "loc": [
                                            3,
                                            2
                                        ],
                                        "time": 500,
                                        "keep": true,
                                        "async": true,
                                        "steps": [
                                            "down:1"
                                        ]
                                    },
                                    {
                                        "type": "move",
                                        "loc": [
                                            12,
                                            1
                                        ],
                                        "time": 500,
                                        "keep": true,
                                        "async": true,
                                        "steps": [
                                            "down:1"
                                        ]
                                    },
                                    {
                                        "type": "move",
                                        "loc": [
                                            10,
                                            1
                                        ],
                                        "time": 500,
                                        "keep": true,
                                        "async": true,
                                        "steps": [
                                            "down:1"
                                        ]
                                    },
                                    {
                                        "type": "move",
                                        "loc": [
                                            11,
                                            2
                                        ],
                                        "time": 500,
                                        "keep": true,
                                        "async": true,
                                        "steps": [
                                            "down:1"
                                        ]
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "fighter1.mp3"
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "me109g6",
                                        "loc": [
                                            [
                                                7,
                                                2
                                            ]
                                        ],
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "me109g6",
                                        "loc": [
                                            [
                                                6,
                                                3
                                            ]
                                        ],
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "me109g6",
                                        "loc": [
                                            [
                                                8,
                                                3
                                            ]
                                        ],
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "me109g6",
                                        "loc": [
                                            [
                                                7,
                                                4
                                            ]
                                        ],
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "jump",
                                        "from": [
                                            7,
                                            2
                                        ],
                                        "to": [
                                            5,
                                            7
                                        ],
                                        "time": 500,
                                        "keep": true,
                                        "async": true
                                    },
                                    {
                                        "type": "jump",
                                        "from": [
                                            6,
                                            3
                                        ],
                                        "to": [
                                            6,
                                            8
                                        ],
                                        "time": 500,
                                        "keep": true,
                                        "async": true
                                    },
                                    {
                                        "type": "jump",
                                        "from": [
                                            8,
                                            3
                                        ],
                                        "to": [
                                            9,
                                            7
                                        ],
                                        "time": 500,
                                        "keep": true,
                                        "async": true
                                    },
                                    {
                                        "type": "jump",
                                        "from": [
                                            7,
                                            4
                                        ],
                                        "to": [
                                            8,
                                            8
                                        ],
                                        "time": 500,
                                        "keep": true,
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "me109g6",
                                        "loc": [
                                            [
                                                7,
                                                4
                                            ]
                                        ],
                                        "time": 500
                                    },
                                    {
                                        "type": "jump",
                                        "from": [
                                            7,
                                            4
                                        ],
                                        "to": [
                                            7,
                                            9
                                        ],
                                        "time": 500,
                                        "keep": true
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "fighter1.mp3"
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "ju87b",
                                        "loc": [
                                            [
                                                6,
                                                3
                                            ]
                                        ],
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "ju87b",
                                        "loc": [
                                            [
                                                8,
                                                3
                                            ]
                                        ],
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "ju87b",
                                        "loc": [
                                            [
                                                7,
                                                4
                                            ]
                                        ],
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "jump",
                                        "from": [
                                            7,
                                            4
                                        ],
                                        "to": [
                                            1,
                                            7
                                        ],
                                        "time": 500,
                                        "keep": true,
                                        "async": true
                                    },
                                    {
                                        "type": "jump",
                                        "from": [
                                            6,
                                            3
                                        ],
                                        "to": [
                                            2,
                                            8
                                        ],
                                        "time": 500,
                                        "keep": true,
                                        "async": true
                                    },
                                    {
                                        "type": "jump",
                                        "from": [
                                            8,
                                            3
                                        ],
                                        "to": [
                                            3,
                                            7
                                        ],
                                        "time": 500,
                                        "keep": true,
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "fighter1.mp3"
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "ju87b",
                                        "loc": [
                                            [
                                                6,
                                                3
                                            ]
                                        ],
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "ju87b",
                                        "loc": [
                                            [
                                                8,
                                                3
                                            ]
                                        ],
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "ju87b",
                                        "loc": [
                                            [
                                                7,
                                                4
                                            ]
                                        ],
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "jump",
                                        "from": [
                                            7,
                                            4
                                        ],
                                        "to": [
                                            11,
                                            7
                                        ],
                                        "time": 500,
                                        "keep": true,
                                        "async": true
                                    },
                                    {
                                        "type": "jump",
                                        "from": [
                                            6,
                                            3
                                        ],
                                        "to": [
                                            13,
                                            7
                                        ],
                                        "time": 500,
                                        "keep": true,
                                        "async": true
                                    },
                                    {
                                        "type": "jump",
                                        "from": [
                                            8,
                                            3
                                        ],
                                        "to": [
                                            12,
                                            8
                                        ],
                                        "time": 500,
                                        "keep": true,
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "zeppelin",
                                        "name": "money",
                                        "value": "300"
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "zeppelin",
                                        "name": "exp",
                                        "value": "300"
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
                                                "name": "bomber2.mp3"
                                            },
                                            {
                                                "type": "showImage",
                                                "code": 1,
                                                "image": "aircraft7.png",
                                                "loc": [
                                                    480,
                                                    -10
                                                ],
                                                "opacity": 1,
                                                "time": 0
                                            },
                                            {
                                                "type": "moveImage",
                                                "code": 1,
                                                "to": [
                                                    -195,
                                                    -10
                                                ],
                                                "time": 1000,
                                                "async": true
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 500,
                                                "noSkip": true
                                            },
                                            {
                                                "type": "animate",
                                                "name": "xinxinwater",
                                                "loc": [
                                                    9,
                                                    3
                                                ],
                                                "async": true
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 100,
                                                "noSkip": true
                                            },
                                            {
                                                "type": "animate",
                                                "name": "xinxinwater",
                                                "loc": [
                                                    8,
                                                    3
                                                ],
                                                "async": true
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 100,
                                                "noSkip": true
                                            },
                                            {
                                                "type": "animate",
                                                "name": "explore2",
                                                "loc": [
                                                    7,
                                                    3
                                                ],
                                                "async": true
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 100,
                                                "noSkip": true
                                            },
                                            {
                                                "type": "animate",
                                                "name": "xinxinwater",
                                                "loc": [
                                                    6,
                                                    3
                                                ],
                                                "async": true
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 100,
                                                "noSkip": true
                                            },
                                            {
                                                "type": "animate",
                                                "name": "xinxinwater",
                                                "loc": [
                                                    5,
                                                    3
                                                ],
                                                "async": true
                                            },
                                            {
                                                "type": "waitAsync"
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 1000
                                            },
                                            {
                                                "type": "animate",
                                                "name": "explore",
                                                "loc": [
                                                    7,
                                                    3
                                                ]
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 1000
                                            },
                                            {
                                                "type": "animate",
                                                "name": "bigexplore",
                                                "loc": [
                                                    7,
                                                    3
                                                ]
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
                                                "time": 4000
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
                                                "type": "setValue",
                                                "name": "flag:MT237boss",
                                                "value": "1"
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
                                                ],
                                                "time": 200,
                                                "async": true
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "medal4",
                                                "loc": [
                                                    [
                                                        5,
                                                        3
                                                    ]
                                                ],
                                                "time": 200,
                                                "async": true
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "medal4",
                                                "loc": [
                                                    [
                                                        9,
                                                        3
                                                    ]
                                                ],
                                                "time": 200,
                                                "async": true
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "tea5",
                                                "loc": [
                                                    [
                                                        6,
                                                        2
                                                    ]
                                                ],
                                                "time": 200,
                                                "async": true
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "tea5",
                                                "loc": [
                                                    [
                                                        8,
                                                        2
                                                    ]
                                                ],
                                                "time": 200,
                                                "async": true
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "tea5",
                                                "loc": [
                                                    [
                                                        6,
                                                        4
                                                    ]
                                                ],
                                                "time": 200,
                                                "async": true
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "tea5",
                                                "loc": [
                                                    [
                                                        8,
                                                        4
                                                    ]
                                                ],
                                                "time": 200,
                                                "async": true
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "blue5Gem",
                                                "loc": [
                                                    [
                                                        5,
                                                        1
                                                    ]
                                                ],
                                                "time": 200,
                                                "async": true
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "blue5Gem",
                                                "loc": [
                                                    [
                                                        9,
                                                        1
                                                    ]
                                                ],
                                                "time": 200,
                                                "async": true
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "blue5Gem",
                                                "loc": [
                                                    [
                                                        7,
                                                        1
                                                    ]
                                                ],
                                                "time": 200,
                                                "async": true
                                            },
                                            {
                                                "type": "waitAsync"
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