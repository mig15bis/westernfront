main.floors.MT393=
{
    "floorId": "MT393",
    "title": "阿登",
    "name": "阿登",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "snow",
    "bgm": "hiaction6.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "down:1"
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
        "\t[系统提示]实际上，在阿登战役时，曼施坦因被希特勒撤职了，所以这里就不设置对话了。",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[警告]装甲之父 埃里希·冯·曼施坦因 袭来",
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
                "name": "flag:stage",
                "value": "54"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT395",
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
                        "name": "europe6.mp3"
                    },
                    "盟军本来心心念念的圣诞节逐渐被恐惧的阴霾所笼罩。至1944年12月25日，德军向西突入纵深达百余公里，形成突出部。",
                    "艾森豪威尔紧急采取措施，紧急调派大批增援部队阻击德军，并积极准备反突击。到24日，盟军已集结起60万大军，而德军总兵力仅20万。",
                    "经验丰富的德军老兵早就阵亡的差不多了，现在的德军大多是没受过训练的青年团。并且，与1940年机动灵活的三号和四号坦克相比，虎豹坦克每走一步都更加消耗燃料，这对本就缺乏燃油的德军而言无疑是个麻烦。",
                    "圣诞节当天，德军第2装甲师与美军第2装甲师在塞勒斯展开激战，结果是这支德军损失了所有的坦克，美第2装甲师由此获得“活动地狱”的称号。",
                    "第二天，美军第四装甲师一路血战杀进巴斯托涅，并且，天气情况好转，盟军的空中优势得以发挥，战场的天平开始向盟军倾斜。",
                    "然而，就在盟军刚准备松一口气，好好弥补下圣诞节的遗憾时，1945年1月1日，德军再次送上了一份意外的“新年贺礼”。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT394",
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
        "7,0": {
            "floorId": "MT392",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,12": [
            {
                "type": "if",
                "condition": "(flag:MT393boss===0)",
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
                        "number": "manstein",
                        "loc": [
                            [
                                7,
                                12
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
                        "name": "flag:MT393boss",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[系统提示]敌军增援抵达",
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                3,
                                4
                            ],
                            [
                                2,
                                5
                            ],
                            [
                                4,
                                5
                            ],
                            [
                                3,
                                6
                            ],
                            [
                                11,
                                5
                            ],
                            [
                                10,
                                4
                            ],
                            [
                                9,
                                5
                            ],
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
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                11
                            ],
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
                        "number": "pak44",
                        "loc": [
                            [
                                10,
                                5
                            ],
                            [
                                3,
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
                        "condition": "(flag:MT393boss===1)",
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
                                "number": "manstein",
                                "loc": [
                                    [
                                        7,
                                        12
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
                                "name": "flag:MT393boss",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[系统提示]敌军增援抵达",
                            {
                                "type": "setBlock",
                                "number": "flak120",
                                "loc": [
                                    [
                                        4,
                                        9
                                    ],
                                    [
                                        10,
                                        9
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        6,
                                        11
                                    ],
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
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        4,
                                        8
                                    ],
                                    [
                                        3,
                                        9
                                    ],
                                    [
                                        4,
                                        10
                                    ],
                                    [
                                        5,
                                        9
                                    ],
                                    [
                                        10,
                                        8
                                    ],
                                    [
                                        9,
                                        9
                                    ],
                                    [
                                        10,
                                        10
                                    ],
                                    [
                                        11,
                                        9
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
                                "condition": "(flag:MT393boss===2)",
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
                                        "number": "manstein",
                                        "loc": [
                                            [
                                                7,
                                                12
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
                                        "name": "flag:MT371boss",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    "\t[系统提示]敌军增援抵达",
                                    {
                                        "type": "setBlock",
                                        "number": "tigerking",
                                        "loc": [
                                            [
                                                6,
                                                11
                                            ],
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
                                        "number": "tigere",
                                        "loc": [
                                            [
                                                5,
                                                10
                                            ],
                                            [
                                                9,
                                                10
                                            ],
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
                                        "number": "jagpanzer",
                                        "loc": [
                                            [
                                                7,
                                                8
                                            ],
                                            [
                                                5,
                                                8
                                            ],
                                            [
                                                9,
                                                8
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "manstein",
                                        "name": "money",
                                        "value": "100",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "manstein",
                                        "name": "exp",
                                        "value": "100"
                                    },
                                    {
                                        "type": "waitAsync"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:MT393boss===3)",
                                        "true": [
                                            {
                                                "type": "clearMap",
                                                "x": 130,
                                                "y": 64,
                                                "width": 64,
                                                "height": 16
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:MT393boss",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            "\t[系统提示]主线boss战 胜利！",
                                            {
                                                "type": "function",
                                                "function": "function(){\nflags.mission[53][0]=true\n}"
                                            },
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
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [109,109,109,109,109,109,109, 91,109,109,109,109,109,109,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,229,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0, 85,  0,  0,  0,  0,  0,  0,109],
    [109,109,109,109,109,109,109, 89,109,109,109,109,109,109,109]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,172,172,172,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,172,172,172,  0,110019,  0,  0,  0,  0],
    [  0,  0,  0,110019,  0,  0,  0,  0,  0,  0,  0,  0,171,171,  0],
    [  0,  0,  0,172,172,172,  0,  0,  0,  0,  0,171,171,171,  0],
    [  0,  0,  0,172,172,172,  0,  0,110019,  0,  0,171,171,  0,  0],
    [  0,  0,  0,  0,172,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,110019,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,110019,  0,  0,  0,110019,  0],
    [  0,  0,171,171,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,171,171,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,171,171,110019,  0,  0,  0,  0,  0,  0,  0,171,171,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,171,171,  0],
    [  0,  0,  0,  0,  0,  0,172,172,172,  0,  0,  0,  0,171,  0],
    [  0,  0,  0,  0,  0,  0,172,172,172,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "area": "陆地"
}