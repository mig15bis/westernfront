main.floors.MT245=
{
    "floorId": "MT245",
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
    "bgm": "cao3.mp3",
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
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[警告]相对优秀的意大利将军 乔瓦尼·梅塞少将 袭来",
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
                    "value": "3"
                },
                {
                    "type": "setValue",
                    "name": "flag:bosshpmax",
                    "value": "3"
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
                    "text": "3/3"
                }
            ]
        },
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT243",
            "loc": [
                13,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,5": [
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
                                "text": "2/3"
                            }
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "messe",
                        "loc": [
                            [
                                7,
                                5
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
                        "text": "\t[梅塞]\f[messer.png,0,310]盟军有压倒性的人数和装备优势，北非彻底失守只是时间问题。为什么那些政客就认识不到这一点？",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "m1340",
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
                        "number": "m1340",
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
                        "number": "m1340",
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
                        "number": "italyinf3",
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
                        "number": "italyinf3",
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
                        "number": "italyinf3",
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
                        "number": "italyinf3",
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
                                        "text": "1/3"
                                    }
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "messe",
                                "loc": [
                                    [
                                        7,
                                        5
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
                                "text": "\t[梅塞]\f[messer.png,0,310]我们的后方已经被盟军包抄。这些是仅剩的补给物资了，打完这些，我们能做的就都做完了。",
                                "pos": [
                                    100,
                                    300,
                                    380
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "p2640",
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
                                "number": "p2640",
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
                                "number": "italyinf3",
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
                                "number": "italyinf3",
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
                                "type": "setEnemy",
                                "id": "messe",
                                "name": "money",
                                "value": "50"
                            },
                            {
                                "type": "setEnemy",
                                "id": "messe",
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
                                                "text": "0/3"
                                            }
                                        ]
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
                                    "\t[系统提示]支线boss战 胜利！",
                                    {
                                        "type": "setValue",
                                        "name": "flag:MT245boss",
                                        "value": "1"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            3
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
                                        "width": 480,
                                        "height": 480
                                    },
                                    {
                                        "type": "forbidSave"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "xinxinmagic.mp3"
                                    },
                                    "\t[系统提示]当前区域的全部意军已投降！",
                                    {
                                        "type": "setEnemy",
                                        "id": "italyinf2",
                                        "name": "special",
                                        "value": "[61]",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "italyinf3",
                                        "name": "special",
                                        "value": "[61]",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "italyinf4",
                                        "name": "special",
                                        "value": "[61]",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "italyinf5",
                                        "name": "special",
                                        "value": "[61]",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "italyinf6",
                                        "name": "special",
                                        "value": "[61]",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "l640",
                                        "name": "special",
                                        "value": "[61]",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "m1340",
                                        "name": "special",
                                        "value": "[61]",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "p2640",
                                        "name": "special",
                                        "value": "[61]"
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "da90",
                                        "name": "special",
                                        "value": "[61]"
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "italyinf7",
                                        "name": "special",
                                        "value": "[61]"
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
    [109,  0,  0,  0,109,341,580,625,580,341,109,  0,  0,  0,109],
    [109,  0,  0,  0,109,580,581,625,581,580,109,  0,  0,  0,109],
    [109,  0,  0,  0,109,109,109, 85,109,109,109,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,221,  0,  0,  0,  0,  0,  0,109],
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

],
    "fgmap": [

],
    "area": "陆地"
}