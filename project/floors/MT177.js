main.floors.MT177=
{
    "floorId": "MT177",
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
    "bgm": "allthis.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "right:2"
            ]
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                1,
                7
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
        },
        {
            "type": "text",
            "text": "\t[隆美尔]\f[rommel.png,0,310]英军的装甲部队来的很及时。士兵们，准备战斗！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "setBlock",
            "number": "panzer38t",
            "loc": [
                [
                    5,
                    7
                ]
            ],
            "async": true
        },
        {
            "type": "setBlock",
            "number": "panzer3f",
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
            "number": "panzer3f",
            "loc": [
                [
                    7,
                    8
                ]
            ],
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
            "async": true
        },
        {
            "type": "setBlock",
            "number": "motorinf",
            "loc": [
                [
                    5,
                    9
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
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [],
                "no": [
                    "1942年7月1日，英德双方第一次在阿拉曼交火。隆美尔率先发起进攻，但这次，他没能攻破英军防线。第二天，奥金莱克的部队就实施了反扑。",
                    "隆美尔不得不转入防御。事实证明，隆美尔不仅是进攻好手，也是一位防御大师。",
                    "在巨大的数量差距下，英军发起的进攻并没有取得特别大的战果，在德军的抵抗下，英军损失惨重。最终，折腾了一个月后，奥金莱克终于下令转入防御。",
                    "隆美尔的部队也损失惨重，双方谁都没有能力再打下去。就这样，阿拉曼防线的战局进入了僵持状态。",
                    "虽然看上去英军损失更大，但英军在一开始就成功阻止隆美尔占领亚历山大港，已经取得了战略上的胜利，只是没能继续扩大战果罢了。",
                    "第一次阿拉曼战役是一次实打实的消耗战，英军靠着巨大的数量优势挺了过来，在接下来一段时间内，他们会尽量恢复战力。但隆美尔就没那么幸运了，遭受重创的他短时间内得不到更多的补给。",
                    "几个月后，盟军将在第二次阿拉曼战役中，一举扭转整个北非战场的形式。"
                ]
            },
            {
                "type": "pauseBgm"
            },
            "Stage 5 已完成，是否提交分数？",
            {
                "type": "confirm",
                "text": "提交分数？",
                "yes": [
                    {
                        "type": "win",
                        "reason": "Stage 5 全面开战"
                    }
                ],
                "no": [
                    {
                        "type": "setValue",
                        "name": "flag:stage",
                        "value": "27"
                    },
                    {
                        "type": "confirm",
                        "text": "跳过剧情吗？",
                        "yes": [
                            {
                                "type": "changeFloor",
                                "floorId": "MT179",
                                "loc": [
                                    7,
                                    13
                                ],
                                "direction": "down"
                            }
                        ],
                        "no": [
                            {
                                "type": "playBgm",
                                "name": "desert3.mp3"
                            },
                            "英军在北非的连续溃败，使国内民众和前线士兵逐渐失去信心。第一次阿拉曼战役后，虽然英军取得了战略上的胜利，与德军进入僵持状态，但在战术上，英国领导层对于英军承受的巨大损失感到非常不满。",
                            "尽管奥金莱克并没有犯什么特别严重的错误，但高层还是决定将他换下，由一位新的指挥官代替。这个新上任的指挥官，名叫伯纳德·劳·蒙哥马利。",
                            "蒙哥马利是一位老将，曾参与过第一次世界大战。在二战前期，他曾带领部队与法军一同作战，并从敦刻尔克撤回本土。经过他本人独特军事理解和练兵手段，他的部队是英军中军事素养较高的一批。",
                            "此时的蒙哥马利已经是一位中将。他来到北非担任司令官后，发现守卫这里的英国第8军已经被隆美尔吓破了胆，士气低落。于是他到这里第一件事就是发表演讲，努力提振士气，撤掉不称职的军官，重整军备。",
                            "在蒙哥马利的领导下，英军的战力正在迅速恢复，而隆美尔这边的状况却很糟，德意联军的各种条件都非常差，物资也很匮乏，之后又在阿拉姆哈勒法战役中被蒙哥马利击败，情况更加雪上加霜。",
                            "隆美尔本人也没好到哪去。他患上了严重的胃病，不得不回国治疗，他的部队失去了这位强力核心，不再敢轻举妄动，于是在前线埋下大量地雷，转为防御。",
                            "蒙哥马利认识到，一举击溃德军的机会来了。在充分积聚兵力后，英军展开了行动。",
                            "英军士兵并没有意识到，他们即将面对的，将是“魔鬼的花园”。",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "showImage",
                                "code": 1,
                                "image": "chapter6.jpg",
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
                                "floorId": "MT178",
                                "loc": [
                                    -1,
                                    -1
                                ],
                                "direction": "down"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "MT175",
            "loc": [
                14,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "10,7": [
            {
                "type": "if",
                "condition": "(flag:MT177boss===0)",
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
                                10,
                                7
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
                            2,
                            7
                        ],
                        "time": 10,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:MT177boss",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "text",
                        "text": "\t[隆美尔]\f[rommel.png,0,310]我们的空军来了！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "me109g6",
                        "loc": [
                            [
                                12,
                                6
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
                                12,
                                8
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
                                13,
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
                                7,
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
                                7,
                                9
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
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT177boss===1)",
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
                                        10,
                                        7
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
                                    2,
                                    7
                                ],
                                "time": 10,
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:MT177boss",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "text",
                                "text": "\t[隆美尔]\f[rommel.png,0,310]炮兵团怎么才到？赶快投入战斗！",
                                "pos": [
                                    100,
                                    300,
                                    380
                                ]
                            },
                            {
                                "type": "setEnemy",
                                "id": "rommel",
                                "name": "special",
                                "value": "[25,38,57,62]"
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        10,
                                        5
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
                                        10,
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
                                        7
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
                                        12,
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
                                        7,
                                        8
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
                                        13,
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
                                "condition": "(flag:MT177boss===2)",
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
                                                10,
                                                7
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
                                            2,
                                            7
                                        ],
                                        "time": 10,
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:MT177boss",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    "\t[盟军指挥官,hero]我们的坦克损失过多，立即停止进攻，撤回防线！",
                                    {
                                        "type": "text",
                                        "text": "\t[隆美尔]\f[rommel.png,0,310]虽然成功挡住了敌人的攻击，但我们自己也没剩下多少兵力了。",
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
                                                9,
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
                                                9,
                                                9
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "rommel",
                                        "name": "special",
                                        "value": "[25,38,57,62]",
                                        "norefresh": true
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
                                        "condition": "(flag:MT177boss===3)",
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
                                                        10,
                                                        7
                                                    ]
                                                ],
                                                "time": 0
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:MT177boss",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            {
                                                "type": "text",
                                                "text": "\t[隆美尔]\f[rommel.png,0,310]敌人在短时间内不会再有大规模行动了，但我的士兵也已精疲力竭，必须抓紧时间进行休整和补充。",
                                                "pos": [
                                                    100,
                                                    300,
                                                    380
                                                ]
                                            },
                                            "\t[系统提示]主线boss战 胜利！",
                                            {
                                                "type": "function",
                                                "function": "function(){\nflags.mission[26][0]=true\n}"
                                            },
                                            {
                                                "type": "hide",
                                                "loc": [
                                                    [
                                                        10,
                                                        7
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
                                                    7
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
        "0,0": {
            "0": {
                "condition": "core.searchBlock('panzer4f',['MT172','MT173','MT174','MT175']).length === 0",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[26][2]=true\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [150,150,150,150,150,150,150, 89,150,150,150,150,150,150,150],
    [150,  0,  0,  0,  0,  0,  0, 85,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [ 92,  0,  0,  0,  0,  0,  0,  0,  0,  0,552,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,150,150,150,150,150,150,150,150,150,150,150,150,150,150]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}