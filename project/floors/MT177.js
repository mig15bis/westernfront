main.floors.MT177=
{
    "floorId": "MT177",
    "title": "阿拉曼",
    "name": "阿拉曼",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
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
            "text": "\t[隆美尔]\f[rommel.png,0,310]英军的装甲部队来的很及时。士兵们，准备战斗！",
            "pos": [
                100,
                300,
                380
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,0": [
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
                "text": "   我们几乎已经习惯了这巨大的损失\n。不过好消息是，指挥官阁下的奋战成\n功让我们与隆美尔陷入僵持状态。\n   隆美尔的补给严重不足，这让我们\n守住了阿拉曼，但同样的，我们也没能\n击穿他就地建起的防线。这小子的能力\n有点过于出众了，再加上他不虐待战俘\n，现在士兵们听到隆美尔的名字就开始\n发抖。",
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
                    "沙漠之狐，现在终于陷入了危机。"
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
                            "蒙哥马利是一位老将，曾参与过第一次世界大战。在二战前期，他曾带领部队与法军一同作战，并从敦刻尔克撤回本土。经过他本人独特的军事理解和练兵手段，他的部队是英军中军事素养较高的一批。",
                            "此时的蒙哥马利已经是一位中将。他来到北非担任司令官后，发现守卫这里的英国第8军已经被隆美尔吓破了胆，士气低落。于是他到这里第一件事就是发表演讲，努力提振士气，撤掉不称职的军官，重整军备。",
                            "在蒙哥马利的领导下，英军的战力正在迅速恢复，而隆美尔这边的状况却很糟，德意联军的各种条件都非常差，物资也很匮乏，之后又在阿拉姆哈勒法战役中被蒙哥马利击败，情况更加雪上加霜。",
                            "隆美尔本人也没好到哪去。他患上了严重的胃病，不得不回国治疗，他的部队失去了这位强力核心，不再敢轻举妄动，于是在前线埋下大量地雷，转为防御。",
                            "蒙哥马利认识到，一举击溃德军的机会来了。在充分积聚兵力后，英军展开了行动。",
                            "自认为准备充分的英军，一脚踩进了德军为其精心准备的，“魔鬼的花园”。",
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
                                5,
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
                                6,
                                10
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
                                7,
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
                                5,
                                9
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
                                9
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
                                6,
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
                                5,
                                6
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
                                5,
                                8
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
                                6,
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
                        "condition": "(flag:MT177boss===1)",
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
                                        4
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
                                        10
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
                                        10,
                                        2
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
                                        10,
                                        12
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
                                        13,
                                        11
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
                                        13,
                                        3
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
                                        12,
                                        2
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
                                        12,
                                        12
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
                                        1
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
                                        13
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "mg42",
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
                                "number": "mg42",
                                "loc": [
                                    [
                                        12,
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
                                "condition": "(flag:MT177boss===2)",
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
                                                8,
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
                                                5
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "rommel",
                                        "name": "special",
                                        "value": "[25,38,57,59,62]",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "rommel",
                                        "name": "zone",
                                        "value": "5000",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "rommel",
                                        "name": "range",
                                        "value": "3",
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
                                                "name": "flag:MT177boss",
                                                "operator": "+=",
                                                "value": "1"
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
                                                "type": "openDoor",
                                                "loc": [
                                                    8,
                                                    3
                                                ]
                                            },
                                            {
                                                "type": "openDoor",
                                                "loc": [
                                                    8,
                                                    11
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
        ],
        "10,12": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "10,13": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "11,12": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "11,13": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "12,12": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "12,13": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "13,13": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "13,12": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "13,11": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "13,10": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "13,4": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "13,3": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "13,2": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "13,1": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "12,1": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "12,2": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "11,2": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "11,1": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "10,1": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
                        ]
                    }
                ]
            }
        ],
        "10,2": [
            {
                "type": "setValue",
                "name": "flag:MT177door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT177door===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            10
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
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [150,150,150,150,150,150,150, 89,150,150,150,150,150,150,150],
    [150,  0,232,  0,  0,150,571, 85,571,150,  0,  0,  0,  0,150],
    [150,404,150,  0,  0,150,518,518,518,150,  0,  0,  0,  0,150],
    [150,  0,150,  0,150,150,150,150, 85,150,150,150,150,  0,150],
    [150,250,150,404,150,  0,  0,150,  0,150,  0, 85,  0,  0,150],
    [150,390,150,  0,150,  0,  0,150,  0,150,150,150,  0,  0,150],
    [150,150,150,  0,150,  0,  0,150,  0,  0,  0,  0,  0,  0,150],
    [ 92,  0,  0,403,  0,  0,  0,  0,  0,  0,552,  0,  0,  0,150],
    [150,150,150,  0,150,  0,  0,150,  0,  0,  0,  0,  0,  0,150],
    [150,390,150,  0,150,  0,  0,150,  0,150,150,150,  0,  0,150],
    [150,250,150,404,150,  0,  0,150,  0,150,  0, 85,  0,  0,150],
    [150,  0,150,  0,150,150,150,150, 85,150,150,150,150,  0,150],
    [150,404,150,  0,  0,150,588,588,588,150,  0,  0,  0,  0,150],
    [150,  0,232,  0,  0,150,588,588,588,150,  0,  0,  0,  0,150],
    [150,150,150,150,150,150,150,150,150,150,150,150,150,150,150]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}