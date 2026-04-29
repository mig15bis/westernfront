main.floors.MT18=
{
    "floorId": "MT18",
    "title": "阿拉斯",
    "name": "阿拉斯",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass3",
    "bgm": "allthis.mp3",
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
        "\t[警告]进入boss战，即将进入存档界面！",
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
            "type": "text",
            "text": "\t[隆美尔]\f[rommel.png,0,310]士兵们，不要撤退！将所有能用的炮对准敌方坦克！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "setBlock",
            "number": "pak36",
            "loc": [
                [
                    7,
                    6
                ]
            ],
            "async": true
        },
        {
            "type": "setBlock",
            "number": "flak37",
            "loc": [
                [
                    6,
                    7
                ]
            ],
            "async": true
        },
        {
            "type": "setBlock",
            "number": "flak37",
            "loc": [
                [
                    8,
                    7
                ]
            ],
            "async": true
        },
        {
            "type": "setBlock",
            "number": "artillery75",
            "loc": [
                [
                    5,
                    8
                ]
            ],
            "async": true
        },
        {
            "type": "setBlock",
            "number": "artillery75",
            "loc": [
                [
                    9,
                    8
                ]
            ],
            "async": true
        },
        {
            "type": "waitAsync"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,1": [
            {
                "type": "setValue",
                "name": "flag:第三关通关",
                "value": "1"
            },
            {
                "type": "unloadEquip",
                "pos": 0
            },
            {
                "type": "setValue",
                "name": "item:matilda",
                "operator": "-=",
                "value": "1"
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
                "text": "   指挥官阁下在这场装甲对决中，率\n领这些新式坦克打出了不错的交换比。\n但敌军不知从何处搬来了一些致命的反\n坦克炮，眨眼间扭转了战场局势。我们\n的坦克装甲在他们面前就像一张纸片！\n   这次反击攻势以失败告终，法国沦\n陷只是时间问题。如果不能尽快撤离，\n或许我们所有人都要在德军的集中营见\n面了。",
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
                "value": "4"
            },
            {
                "type": "submitTask"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT20",
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
                        "name": "gaijin1.mp3",
                        "keep": true
                    },
                    "英军的新型“玛蒂尔达”坦克的装甲非常坚硬，一路所向披靡的德军坦克这次碰到了对手。",
                    "情急之下，德军将88mm口径的高射炮放平，装上穿甲弹，向英军开火。效果非常显著，英军的进攻被压制了。很快，配合进攻的法军也受到阻挡，被迫撤退。",
                    "这是德军88mm高射炮的首秀，而在未来的战争中，这种高射炮将一次又一次证明自己的实力，变为盟军飞机和战车的“梦魇”。",
                    "镜头闪回，阿拉斯反攻战的失利无疑是对盟军的一次沉重打击，但并不是毫无收获。这次袭击也震惊了德军高层，尤其是希特勒，虽然他本人也非常冒进，但这种速度果然还是太快了。",
                    "希特勒马上给古德里安发了电报，命令他和其他德国进攻部队立即停止前进，由德国空军元帅，赫尔曼·戈林，指挥空军担任主力。",
                    "元首的命令自然是不能违抗。尽管心有不甘，古德里安也只能乖乖停止进攻，将盟军大部队包围在敦刻尔克。",
                    "事实上，盟军已经没有招架之力，如果古德里安继续进攻，盟军将会在海滩上全军覆没。而德军突然的“刹车”，对盟军来说是绝佳的喘息之机。",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "此时，40万英法联军龟缩在敦刻尔克这个港口小城里，遭受着德军的空袭。唯一的生路就是从海上撤退。",
                    "英法政府开始筹划一个名为“发电机行动”的撤退计划。将40万大军全部撤回英国本土，谈何容易。英国海军实力强大，但也没法一次性装下这么多人。",
                    "丘吉尔四处征集船只，他号召所有国民，自发调用家里能用的船只，前往炮火连天的敦刻尔克将士兵们接回家。",
                    "就这样，大大小小的各式船只，军用的也好，民用的也罢，能装多少人就装多少，一点一点的，分批运送士兵。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT19",
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
            "floorId": "MT17",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,10": [
            {
                "type": "if",
                "condition": "(flag:MT18boss===0)",
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
                                10
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
                        "name": "flag:MT18boss",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "text",
                        "text": "\t[隆美尔]\f[rommel.png,0,310]换更大口径的炮！继续开火！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "howitzer105",
                        "loc": [
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
                        "number": "howitzer105",
                        "loc": [
                            [
                                8,
                                9
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
                                8
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
                        "condition": "(flag:MT18boss===1)",
                        "true": [
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
                            },
                            {
                                "type": "setBlock",
                                "number": "rommel",
                                "loc": [
                                    [
                                        7,
                                        10
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
                                "name": "flag:MT18boss",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "text",
                                "text": "\t[隆美尔]\f[rommel.png,0,310]88毫米高射炮的攻击效果最好，把它们都拉过来！",
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
                                        5,
                                        8
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
                                        8
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
                                "condition": "(flag:MT18boss===2)",
                                "true": [
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
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "rommel",
                                        "loc": [
                                            [
                                                7,
                                                10
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
                                        "name": "flag:MT18boss",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    "\t[盟军指挥官,hero]我们的损失在激增！德军什么时候研发出这么强的反坦克武器？",
                                    {
                                        "type": "text",
                                        "text": "\t[隆美尔]\f[rommel.png,0,310]敌人损失过多，已经陷入混乱。就是现在，全军反击！",
                                        "pos": [
                                            100,
                                            300,
                                            380
                                        ]
                                    },
                                    "\t[系统提示]我军士气下跌！攻击力暂时降低20点！",
                                    {
                                        "type": "setValue",
                                        "name": "status:atk",
                                        "operator": "-=",
                                        "value": "20"
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "flak88",
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
                                        "number": "flak88",
                                        "loc": [
                                            [
                                                7,
                                                9
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
                                                9
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "panzer4c",
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
                                        "number": "panzer4c",
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
                                        "number": "panzer3e",
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
                                        "number": "panzer3e",
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
                                        "number": "panzer3e",
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
                                        "condition": "(flag:MT18boss===3)",
                                        "true": [
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
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "rommel",
                                                "loc": [
                                                    [
                                                        7,
                                                        10
                                                    ]
                                                ],
                                                "time": 0
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:MT18boss",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            {
                                                "type": "text",
                                                "text": "\t[亚历山大]\f[alexanda.png,0,310]指挥官阁下，我已经收到电报。我们现在已经失去优势，必须保存有生力量，撤退！",
                                                "pos": [
                                                    100,
                                                    300,
                                                    380
                                                ]
                                            },
                                            "\t[系统提示]确定完成任务后，从本层左上角撤退",
                                            {
                                                "type": "hide",
                                                "loc": [
                                                    [
                                                        7,
                                                        10
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
                                                "type": "openDoor",
                                                "loc": [
                                                    1,
                                                    2
                                                ]
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:atk",
                                                "operator": "+=",
                                                "value": "20"
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
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:bosshp",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:bosshpmax",
                                                "value": "0"
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
        "1,0": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [109,109,109,109,109,109,109, 91,109,109,109,109,109,109,109],
    [109, 89,109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109, 85,109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,552,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,109,109,109,109,109,109,109,109,109,109,109,109,109,109]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}