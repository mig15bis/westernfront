main.floors.MT393=
{
    "floorId": "MT393",
    "title": "阿登",
    "name": "阿登",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
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
                "text": "   看似强大的德军反攻部队，在指挥\n官阁下的攻势面前，竟然一触即溃。\n   我们发现这些被击毁的德军坦克油\n箱里面空空如也，难怪战斗时它们会愣\n在原地被动挨打。看样子阿登地区的战\n事用不了多久就能解决了，这些德国佬\n就不能老老实实向我们投降吗？",
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
                    "盟军本来心心念念的圣诞节逐渐被恐惧的阴霾所笼罩。至1944年12月25日，德军三路大军向西突入纵深达百余公里，形成突出部——阿登反击战由此展开。",
                    "艾森豪威尔紧急采取措施，调派大批增援部队阻击德军，并积极准备反突击。到24日，盟军已集结起60万大军，而德军总兵力仅20万。",
                    "经验丰富的德军老兵早就阵亡的差不多了，现在的德军大多是没受过训练的青年团。并且，与1940年机动灵活的三号和四号坦克相比，虎豹坦克每走一步都更加消耗燃料，这对本就缺乏燃油的德军而言无疑是雪上加霜。许多坦克不是被盟军击毁，而是缺油少弹不得不遗弃在路上。",
                    "除此之外，德军后期的坦克和歼击车普遍有一个巨大的共性问题——可靠性很差，虎王、猎虎等重型战车更是重灾区。如果这些大家伙能顺利开上战场，确实可以大开杀戒，但它们当中的大多数在半路就抛锚了。许多有经验的德军坦克兵就吐槽，还不如让他们开谢尔曼坦克去作战，虽然脆了点，但好歹不会坏在半路，即便坏了也很容易修复或替换。",
                    "圣诞节当天，德军第2装甲师与美军第2装甲师在塞勒斯展开激战。按照以往的情况，本应又是德军虎豹坦克重创美军的戏码，但这次却不一样——德军损失了所有的坦克，美军的损失却可以接受。美第2装甲师由此获得“活动地狱”的称号。",
                    "第二天，美军第四装甲师一路血战，打破包围圈，杀进巴斯托涅。并且，天气情况好转，盟军的空中优势得以发挥，轰炸机投下的炸弹犹如一记重锤，将德军装甲部队的攻势炸的粉碎。战场的天平开始再次向盟军倾斜。",
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
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[系统提示]敌军增援抵达",
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                3,
                                7
                            ],
                            [
                                11,
                                7
                            ],
                            [
                                2,
                                10
                            ],
                            [
                                12,
                                10
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
                                2,
                                7
                            ],
                            [
                                12,
                                7
                            ],
                            [
                                1,
                                10
                            ],
                            [
                                13,
                                10
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
                                1,
                                6
                            ],
                            [
                                1,
                                8
                            ],
                            [
                                13,
                                6
                            ],
                            [
                                13,
                                8
                            ],
                            [
                                1,
                                11
                            ],
                            [
                                13,
                                11
                            ],
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
                        "number": "jagpanzer",
                        "loc": [
                            [
                                2,
                                6
                            ],
                            [
                                2,
                                8
                            ],
                            [
                                12,
                                8
                            ],
                            [
                                12,
                                6
                            ],
                            [
                                6,
                                6
                            ],
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
                        "number": "tigere",
                        "loc": [
                            [
                                3,
                                4
                            ],
                            [
                                11,
                                4
                            ],
                            [
                                7,
                                5
                            ],
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
                        "number": "tigerking",
                        "loc": [
                            [
                                1,
                                12
                            ],
                            [
                                13,
                                12
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "rocket41",
                        "loc": [
                            [
                                1,
                                4
                            ],
                            [
                                13,
                                4
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "jagtiger",
                        "loc": [
                            [
                                2,
                                4
                            ],
                            [
                                12,
                                4
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "stugtiger",
                        "loc": [
                            [
                                1,
                                13
                            ],
                            [
                                13,
                                13
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
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "playSound",
                                "name": "xinxinmagic.mp3"
                            },
                            "\t[系统提示]敌军增援抵达",
                            {
                                "type": "setBlock",
                                "number": "flak120",
                                "loc": [
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        10
                                    ],
                                    [
                                        9,
                                        10
                                    ],
                                    [
                                        8,
                                        9
                                    ],
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "rocket41",
                                "loc": [
                                    [
                                        1,
                                        13
                                    ],
                                    [
                                        13,
                                        13
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
                                        1,
                                        12
                                    ],
                                    [
                                        13,
                                        12
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
                                        1,
                                        11
                                    ],
                                    [
                                        1,
                                        10
                                    ],
                                    [
                                        2,
                                        10
                                    ],
                                    [
                                        13,
                                        11
                                    ],
                                    [
                                        13,
                                        10
                                    ],
                                    [
                                        12,
                                        10
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
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
                                                "text": "1/4"
                                            }
                                        ]
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
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "xinxinmagic.mp3"
                                    },
                                    "\t[系统提示]敌军增援抵达",
                                    {
                                        "type": "setBlock",
                                        "number": "tigerking",
                                        "loc": [
                                            [
                                                7,
                                                5
                                            ],
                                            [
                                                3,
                                                7
                                            ],
                                            [
                                                11,
                                                7
                                            ],
                                            [
                                                12,
                                                10
                                            ],
                                            [
                                                2,
                                                10
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
                                        "number": "jagpanzer",
                                        "loc": [
                                            [
                                                5,
                                                10
                                            ],
                                            [
                                                7,
                                                10
                                            ],
                                            [
                                                9,
                                                10
                                            ],
                                            [
                                                8,
                                                9
                                            ],
                                            [
                                                6,
                                                9
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "jagtiger",
                                        "loc": [
                                            [
                                                5,
                                                12
                                            ],
                                            [
                                                9,
                                                12
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "attankinf",
                                        "loc": [
                                            [
                                                4,
                                                13
                                            ],
                                            [
                                                10,
                                                13
                                            ],
                                            [
                                                3,
                                                11
                                            ],
                                            [
                                                11,
                                                11
                                            ],
                                            [
                                                6,
                                                8
                                            ],
                                            [
                                                8,
                                                8
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
                                                2,
                                                7
                                            ],
                                            [
                                                12,
                                                7
                                            ],
                                            [
                                                7,
                                                6
                                            ],
                                            [
                                                1,
                                                10
                                            ],
                                            [
                                                13,
                                                10
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
                                                1,
                                                7
                                            ],
                                            [
                                                13,
                                                7
                                            ],
                                            [
                                                1,
                                                12
                                            ],
                                            [
                                                13,
                                                12
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "manstein",
                                        "name": "money",
                                        "value": "500",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "manstein",
                                        "name": "exp",
                                        "value": "500"
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
                                                        "text": "0/4"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:第52关通关",
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
                                            "\t[系统提示]主线boss战 胜利！",
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
                                                "type": "openDoor",
                                                "loc": [
                                                    1,
                                                    3
                                                ]
                                            },
                                            {
                                                "type": "openDoor",
                                                "loc": [
                                                    13,
                                                    3
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
    [109,590,590,651,651,109,609,  0,609,109,519,519,524,524,109],
    [109,590,590,651,651,109,609,  0,609,109,519,519,524,524,109],
    [109, 85,109,109,109,109,109,  0,109,109,109,109,109, 85,109],
    [109,  0,  0,  0,  0,275,  0,  0,  0,275,  0,  0,  0,  0,109],
    [109,109,109,  0,275,109,109,228,109,109,275,  0,109,109,109],
    [109,  0,  0,109,227,109,  0,270,  0,109,227,109,  0,  0,109],
    [109,  0,  0,391,  0,109,664,  0,664,109,  0,391,  0,  0,109],
    [109,  0,  0,109,  0,109,  0,670,  0,109,  0,109,  0,  0,109],
    [109,109,109,  0,228,109,247,109,247,109,228,  0,109,109,109],
    [109,  0,  0,  0,109,279,109,279,109,279,109,  0,  0,  0,109],
    [109,  0,109,  0,109,  0,275,384,275,  0,109,  0,109,  0,109],
    [109,  0,109,  0,109,275,109,229,109,275,109,  0,109,  0,109],
    [109,  0,109,  0,665,  0,109, 85,109,  0,665,  0,109,  0,109],
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