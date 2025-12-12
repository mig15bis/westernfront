main.floors.MT105=
{
    "floorId": "MT105",
    "title": "撒哈拉沙漠",
    "name": "撒哈拉沙漠",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "bgm7.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "down:2"
            ]
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                7,
                1
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
        "\t[警告]机械化作战先行者 鲁道夫·格拉齐亚尼元帅 袭来",
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
        "7,0": {
            "floorId": "MT104",
            "loc": [
                5,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,6": [
            {
                "type": "if",
                "condition": "(flag:MT105boss===0)",
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
                        "number": "graziani",
                        "loc": [
                            [
                                7,
                                6
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
                            2
                        ],
                        "time": 10,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:MT105boss",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "text",
                        "text": "\t[格拉齐亚尼]\f[graziani.png,0,310]把我们的机械化部队集结起来，挡住敌人！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                        "type": "setBlock",
                        "number": "l640",
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
                        "number": "l640",
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
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT105boss===1)",
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
                                "number": "graziani",
                                "loc": [
                                    [
                                        7,
                                        6
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
                                    2
                                ],
                                "time": 10,
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:MT105boss",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "text",
                                "text": "\t[格拉齐亚尼]\f[graziani.png,0,310]敌我实力差距悬殊，但也要尽可能阻止敌军推进！",
                                "pos": [
                                    100,
                                    300,
                                    380
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "l640",
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
                                "number": "l640",
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
                                "number": "m1340",
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
                                "type": "setEnemy",
                                "id": "graziani",
                                "name": "money",
                                "value": "20"
                            },
                            {
                                "type": "setEnemy",
                                "id": "graziani",
                                "name": "exp",
                                "value": "20"
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT105boss===2)",
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
                                        "type": "setValue",
                                        "name": "flag:mission16tsk2",
                                        "value": "1"
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
                                            2
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
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            1
                                        ]
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            9
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
    [150,150,150,150,150,150,150, 90,150,150,150,150,150,150,150],
    [150,  0,  0,  0,  0,  0,150,  0,150,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,222,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,150,150,150,150,150,150, 85,150,150,150,150,150,150,150],
    [150,150,150,150,150,566, 21, 21, 21,566,150,150,150,150,150],
    [150,150,150,150,150,518, 22,518, 22,518,150,150,150,150,150],
    [150,150,150,150,150,566,588,588,588,566,150,150,150,150,150],
    [150,150,150,150,150,150,150,150,150,150,150,150,150,150,150],
    [150,150,150,150,150,150,150,150,150,150,150,150,150,150,150]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}