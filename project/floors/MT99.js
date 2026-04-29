main.floors.MT99=
{
    "floorId": "MT99",
    "title": "大西洋",
    "name": "大西洋",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "backwater.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up:2"
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[盟军指挥官,hero]全体注意！发现俾斯麦号，所有武器准备开火！重复，发现俾斯麦号，所有武器准备开火！",
        "\t[吕特晏斯（俾斯麦号指挥官）,bismark]向元首报告，我舰已不堪操纵，将战至最后一发炮弹。",
        "\t[阿道夫·希特勒（回电）]战列舰“俾斯麦”号全体将士们，全德国与你们同在。拿出你们坚决的勇气来，把能做的尽力而为！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[警告]穷途末路的巨兽 俾斯麦号战列舰 袭来！",
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
        "12,1": {
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
        "2,1": {
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
        "2,13": {
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
        "12,13": {
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
        "7,5": [
            {
                "type": "if",
                "condition": "(flag:MT99boss===0)",
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
                        "number": "bismark",
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
                        "type": "setValue",
                        "name": "flag:MT99boss",
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
                    {
                        "type": "animate",
                        "name": "repair",
                        "loc": [
                            2,
                            13
                        ],
                        "async": true
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                2,
                                13
                            ]
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "animate",
                        "name": "aim",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "explore",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    "\t[系统提示]战列舰 英王乔治五世号 加入战斗！",
                    "\t[系统提示]俾斯麦号战列舰受创，生命值降低了！",
                    {
                        "type": "setEnemy",
                        "id": "bismark",
                        "name": "hp",
                        "value": "250000"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT99boss===1)",
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
                                "number": "bismark",
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
                                "type": "setValue",
                                "name": "flag:MT99boss",
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
                            {
                                "type": "animate",
                                "name": "repair",
                                "loc": [
                                    2,
                                    1
                                ],
                                "async": true
                            },
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        2,
                                        1
                                    ]
                                ],
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "animate",
                                "name": "aim",
                                "loc": [
                                    7,
                                    5
                                ]
                            },
                            {
                                "type": "animate",
                                "name": "explore",
                                "loc": [
                                    7,
                                    5
                                ]
                            },
                            "\t[系统提示]战列舰 罗德尼号 加入战斗！",
                            "\t[系统提示]俾斯麦号战列舰受重创，攻击力大幅降低了！",
                            {
                                "type": "setEnemy",
                                "id": "bismark",
                                "name": "atk",
                                "value": "1200"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT99boss===2)",
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
                                        "number": "bismark",
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
                                        "type": "setValue",
                                        "name": "flag:MT99boss",
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
                                    {
                                        "type": "animate",
                                        "name": "repair",
                                        "loc": [
                                            12,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "animate",
                                        "name": "repair",
                                        "loc": [
                                            12,
                                            1
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "show",
                                        "loc": [
                                            [
                                                12,
                                                13
                                            ]
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "show",
                                        "loc": [
                                            [
                                                12,
                                                1
                                            ]
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "animate",
                                        "name": "aim",
                                        "loc": [
                                            7,
                                            5
                                        ]
                                    },
                                    {
                                        "type": "animate",
                                        "name": "explore",
                                        "loc": [
                                            7,
                                            5
                                        ]
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "fighter.mp3"
                                    },
                                    {
                                        "type": "showImage",
                                        "code": 1,
                                        "image": "aircraft7.png",
                                        "loc": [
                                            480,
                                            51
                                        ],
                                        "opacity": 1,
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "moveImage",
                                        "code": 1,
                                        "to": [
                                            -195,
                                            51
                                        ],
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "animate",
                                        "name": "explore",
                                        "loc": [
                                            7,
                                            5
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "hideImage",
                                        "code": 1,
                                        "time": 0
                                    },
                                    "\t[系统提示]战列巡洋舰 声望号 加入战斗！",
                                    "\t[系统提示]航空母舰 胜利号 加入战斗！",
                                    "\t[系统提示]俾斯麦号战列舰千疮百孔，几乎失去战斗力！",
                                    {
                                        "type": "setEnemy",
                                        "id": "bismark",
                                        "name": "hp",
                                        "value": "150000"
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "bismark",
                                        "name": "atk",
                                        "value": "800"
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "bismark",
                                        "name": "special",
                                        "value": "[57]"
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "bismark",
                                        "name": "money",
                                        "value": "50"
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "bismark",
                                        "name": "exp",
                                        "value": "50"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:MT99boss===3)",
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
                                                "number": "bismark",
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
                                                "type": "clearMap"
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
                                                        5
                                                    ]
                                                ],
                                                "remove": true,
                                                "time": 2000
                                            },
                                            {
                                                "type": "update"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:第15关通关",
                                                "value": "1"
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
                                                "text": "   我们亲眼见证了俾斯麦号的沉没，\n这离不开我们所有人的努力，尤其是不\n懈追踪俾斯麦号的巡洋舰和巡逻机、皇\n家方舟号航空母舰，还有指挥官阁下。\n   失去胡德号对我们而言是一个沉重\n的打击，不过我们成功给她报仇了。而\n且，我们能够承受一艘战列巡洋舰的损\n失，而德军显然无法承受俾斯麦号的损\n失。所以，在丹麦海峡安心长眠吧，胡\n德号，还有随她而去的水兵们，剩下的\n就交给我们了。",
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
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            {
                                                "type": "forbidSave"
                                            },
                                            {
                                                "type": "submitTask"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:stage",
                                                "value": "16"
                                            },
                                            {
                                                "type": "confirm",
                                                "text": "跳过剧情吗？",
                                                "yes": [],
                                                "no": [
                                                    "1941年5月27日清晨，俾斯麦号被一众英国军舰团团包围。",
                                                    "失去动力的俾斯麦号调转主炮，奋力还击。但这一次，俾斯麦号没能击中任何一艘英国军舰。",
                                                    "“罗德尼”号战列舰发射的16英寸主炮炮弹（406毫米口径）破坏了俾斯麦号上的全部主炮后，英舰几乎是无所顾忌地靠近俾斯麦号，各种口径的炮弹从四面八方糊向这艘行将沉没的战舰。",
                                                    "俾斯麦号的上层建筑几乎被炸平。英舰发射的大多是高爆弹，这些炮弹无法穿透俾斯麦号的装甲，目的就是“洗甲板”泄愤。",
                                                    "最终，英军决定由“多塞特郡”号巡洋舰发射鱼雷，彻底送走俾斯麦号。但在那之前，陷入绝望的德军水兵已经打开了俾斯麦号的通海阀，准备自沉。",
                                                    "包括吕特晏斯上将在内，俾斯麦号随同2200名官兵一起，沉没在布雷斯特以西400公里处的海底。只有114人获救。",
                                                    "自始至终，希特勒都没有派遣任何一艘潜艇、军舰和飞机前去援助俾斯麦号，唯有U-556号潜艇发现俾斯麦号有难，却因为打光了鱼雷而只能眼睁睁看着俾斯麦号被围攻击沉。",
                                                    "俾斯麦号沉入大海，希特勒开始重新评估大型战舰的价值。从那以后，德军仅剩的大型战舰几乎只能窝在港里，由潜艇来完成大西洋航线的破坏任务。",
                                                    "来自水面的威胁几乎已经解除。现在，英军可以把目光重新移回到一个关键战区——炎热的非洲沙漠上。",
                                                    "在那里，双方的钢铁大军正顶着撒哈拉沙漠的滚滚热浪，激烈地战斗着。"
                                                ]
                                            },
                                            {
                                                "type": "pauseBgm"
                                            },
                                            "Stage 3 已完成，是否提交分数？",
                                            {
                                                "type": "confirm",
                                                "text": "提交分数？",
                                                "yes": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Stage 3 惊涛骇浪 新"
                                                    }
                                                ],
                                                "no": [
                                                    {
                                                        "type": "playBgm",
                                                        "name": "wots5.mp3"
                                                    },
                                                    "轴心国的三巨头中，当德国和日本都瞄准资源丰富的土地大肆扩张时，德国的“猪队友”意大利却盯上了一块不毛之地——北非。",
                                                    "北非到处都是沙漠，资源少的可怜，不过相应的，这里的难度看起来也不大。非洲的小国大多都没什么实力，就算是英国的殖民地也没有太多防守力量。墨索里尼以为，拿下这里的难度不会很大。",
                                                    "但意大利在令人失望这方面从没让人失望过。光是打下埃塞俄比亚这个几乎只有中世纪水平的小国就被打的不得不掏出毒气弹来解决对手。",
                                                    "但又菜又不多练还爱作死的墨索里尼似乎并未意识到这一点。当他们对英法正式宣战时，墨索里尼命令北非的意大利军团向英国殖民地发起进攻。",
                                                    "英军占领的埃及后面就是苏伊士运河，这是英国与中印等亚洲地区连接的重要通道，一旦苏伊士运河被切断，后果不堪设想。",
                                                    "英军必须阻止意军的攻势，以此捍卫苏伊士运河的控制权。",
                                                    {
                                                        "type": "sleep",
                                                        "time": 500
                                                    },
                                                    {
                                                        "type": "showImage",
                                                        "code": 1,
                                                        "image": "chapter4.jpg",
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
                                                    {
                                                        "type": "sleep",
                                                        "time": 500
                                                    },
                                                    {
                                                        "type": "changeFloor",
                                                        "floorId": "MT100",
                                                        "loc": [
                                                            -1,
                                                            -1
                                                        ],
                                                        "direction": "down"
                                                    }
                                                ]
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,587,  0,  0,  0,  0,  0,  0,  0,  0,  0,511,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,333,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,584,  0,  0,  0,  0,  0,  0,  0,  0,  0,586,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
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