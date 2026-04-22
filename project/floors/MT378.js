main.floors.MT378=
{
    "floorId": "MT378",
    "title": "卡亚峡湾",
    "name": "卡亚峡湾",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "5minutes.mp3",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[盟军指挥官,hero]发现首要任务目标。第一组，进入攻击位置。",
        "\t[提尔皮茨号舰长,bismark]雷达发现大量敌机接近，全舰进入一级战备！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[警告]北方的孤独女王 俾斯麦级战列舰二号舰 提尔皮茨 袭来",
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
            "type": "if",
            "condition": "['eagle', 'raider', 'illustrious','essex','enterprise'].includes(core.getEquip(3))",
            "true": [
                "\t[系统提示]检测到玩家正在装备航空母舰，敌军岸炮、鱼雷和的主炮武器将不再构成威胁！",
                {
                    "type": "hide",
                    "loc": [
                        [
                            0,
                            0
                        ],
                        [
                            1,
                            1
                        ],
                        [
                            13,
                            1
                        ],
                        [
                            14,
                            0
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "setEnemy",
                    "id": "bismark",
                    "name": "special",
                    "value": "[36,38,40,57,86]"
                },
                {
                    "type": "setEnemy",
                    "id": "z1936",
                    "name": "hp",
                    "value": "40000000",
                    "norefresh": true
                },
                {
                    "type": "setEnemy",
                    "id": "z1936",
                    "name": "atk",
                    "value": "30000",
                    "norefresh": true
                },
                {
                    "type": "setEnemy",
                    "id": "z1936",
                    "name": "top",
                    "value": "500000",
                    "norefresh": true
                },
                {
                    "type": "setEnemy",
                    "id": "z1936",
                    "name": "special",
                    "value": "[6,35]",
                    "norefresh": true
                }
            ],
            "false": []
        },
        "\t[系统提示]也许你会发现“金牌损管”技能用不了，这是因为“金牌损管”的生效条件是必须在海洋地图中，而这里属于“浅滩”！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "7,6": [
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
                        "number": "bismark",
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
                            14
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
                    "\t[盟军指挥官,hero]第二组，攻击准备。",
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[系统提示]敌军护卫舰艇和移动式高射炮已就位，提尔皮茨号释放烟幕隐蔽自身！",
                    {
                        "type": "setBlock",
                        "number": "wildwind",
                        "loc": [
                            [
                                6,
                                5
                            ],
                            [
                                10,
                                4
                            ],
                            [
                                5,
                                3
                            ],
                            [
                                9,
                                2
                            ],
                            [
                                7,
                                1
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "z1936",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                11,
                                8
                            ],
                            [
                                8,
                                7
                            ],
                            [
                                7,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setEnemy",
                        "id": "bismark",
                        "name": "special",
                        "value": "[36,38,40,57,86,87]"
                    },
                    {
                        "type": "if",
                        "condition": "(!['eagle', 'raider', 'illustrious','essex','enterprise'].includes(core.getEquip(3)))",
                        "true": [
                            {
                                "type": "setBlock",
                                "number": "coast381",
                                "loc": [
                                    [
                                        0,
                                        0
                                    ],
                                    [
                                        1,
                                        1
                                    ],
                                    [
                                        13,
                                        1
                                    ],
                                    [
                                        14,
                                        0
                                    ]
                                ]
                            },
                            {
                                "type": "setEnemy",
                                "id": "bismark",
                                "name": "special",
                                "value": "[32,36,37,38,40,57,86,87]"
                            }
                        ]
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
                                "number": "bismark",
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
                                    14
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
                            "\t[盟军指挥官,hero]第三组，攻击准备。",
                            {
                                "type": "playSound",
                                "name": "xinxinmagic.mp3"
                            },
                            "\t[系统提示]敌军战斗机抵达战场，提尔皮茨号攻击力提升！",
                            {
                                "type": "setEnemy",
                                "id": "bismark",
                                "name": "atk",
                                "value": "350000"
                            },
                            {
                                "type": "setBlock",
                                "number": "fw190f8",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ],
                                    [
                                        6,
                                        8
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        8
                                    ],
                                    [
                                        9,
                                        7
                                    ],
                                    [
                                        10,
                                        8
                                    ],
                                    [
                                        4,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "if",
                                "condition": "(!['eagle', 'raider', 'illustrious','essex','enterprise'].includes(core.getEquip(3)))",
                                "true": [
                                    {
                                        "type": "setBlock",
                                        "number": "coast381",
                                        "loc": [
                                            [
                                                0,
                                                0
                                            ],
                                            [
                                                1,
                                                1
                                            ],
                                            [
                                                13,
                                                1
                                            ],
                                            [
                                                14,
                                                0
                                            ]
                                        ]
                                    }
                                ]
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
                                        "number": "bismark",
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
                                            14
                                        ],
                                        "time": 10,
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:MT378boss",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    "\t[盟军指挥官,hero]我们虽然重创了提尔皮茨号，但没能彻底将其击沉。全体返回航母，剩下的由皇家空军的重型轰炸机来处理。",
                                    "\t[系统提示]还记得开局让你带的高脚柜炸弹吗？",
                                    {
                                        "type": "setBlock",
                                        "number": "blue6Gem",
                                        "loc": [
                                            [
                                                0,
                                                14
                                            ],
                                            [
                                                1,
                                                14
                                            ],
                                            [
                                                2,
                                                14
                                            ],
                                            [
                                                12,
                                                14
                                            ],
                                            [
                                                13,
                                                14
                                            ],
                                            [
                                                14,
                                                14
                                            ],
                                            [
                                                3,
                                                14
                                            ],
                                            [
                                                11,
                                                14
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:lancaster",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "loadEquip",
                                        "id": "lancaster"
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "bismark",
                                        "name": "special",
                                        "value": "[57,76]",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "bismark",
                                        "name": "money",
                                        "value": "100",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "bismark",
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
                                        "condition": "(flag:bosshp===1)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:第50关通关",
                                                "value": "1"
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            {
                                                "type": "unloadEquip",
                                                "pos": 6
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:lancaster",
                                                "operator": "-=",
                                                "value": "1"
                                            },
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
                                                        6
                                                    ]
                                                ],
                                                "time": 0
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 500
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
                                                        6
                                                    ]
                                                ],
                                                "remove": true,
                                                "time": 1000
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 1000
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
                                                "type": "showImage",
                                                "code": 1,
                                                "image": "tirpitzsunk.jpg",
                                                "loc": [
                                                    0,
                                                    0
                                                ],
                                                "opacity": 1,
                                                "time": 0
                                            },
                                            "1944年4月2日，来自英国“胜利”和“暴怒”两艘大型航母和5艘小型护航航母的机群，对停泊在港内的提尔皮茨号实施空袭。",
                                            "空袭从早上五点持续到八点，德军完全没有料到这场空袭，只能仓促组织起零碎的防空炮火予以还击。",
                                            "14枚炸弹命中了提尔皮茨号，将舰体上层建筑炸的不成样子，122名船员当场殒命。但这些轰炸机飞行员投弹高度太低，炸弹没有获得足够的高度，没有击穿战列舰的装甲。提尔皮茨号依旧漂浮在海上。",
                                            "提尔皮茨号3个月内是没法再战了。而英军仅有3架轰炸机被击落，某种意义上算是成功了一半。",
                                            "德军将这艘战舰转移至特罗姆瑟当作浮动火炮阵地使用，苏联情报人员发现了她，并将这一消息告知英国方面。期间，英美空军又做了几次尝试，试图彻底击沉她，均未成功。但也迫使提尔皮茨号一直呆在船坞里维修，无法出航。",
                                            {
                                                "type": "setCurtain",
                                                "time": 500
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 1000
                                            },
                                            "最终，1944年11月12日，英军的兰开斯特式轰炸机使用高脚柜炸弹成功命中提尔皮茨号3次。没有哪艘战舰能够承受这种巨大的装药量。其中2枚炸弹洞穿了提尔皮茨号的装甲，砸出一个两百英寸的大洞，剧烈的爆炸顷刻间夺取了数百人的生命，并引爆弹药库。",
                                            "提尔皮茨号左倾135度，倒扣在了水中，随同一起沉没的，还有船上的902人。至此，两艘“俾斯麦”级战列舰全部被击沉，德国海军失去了最后一艘战斗力尚存的战列舰。“格奈森瑙”号战列舰虽未被击沉，但却被希特勒认定为“无用之物”而彻底闲置。最终于1945年3月为阻滞苏军攻势，被德军自己凿沉作为沉船障碍使用。",
                                            "不仅是战列舰，德军曾引以为傲的潜艇大队也遭受了失败。随着盟军反潜技术的进步，德军潜艇很难再对盟军船队实施有效打击了。德国海军，已名存实亡。",
                                            {
                                                "type": "hideImage",
                                                "code": 1,
                                                "time": 500
                                            },
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
                                                "text": "   指挥官阁下带领的机群重创了“提尔皮\n茨”号，使其无法再出航，最终被我们的\n重型轰炸机结果了她的船生。\n   德军再也没有可供使用的水面舰艇了，\n他们引以为傲的水下狼群也没能力再翻起\n什么浪花，更别提我们还轰炸了他们的潜\n艇基地。现在的大西洋上，再无德军的容\n身之所。",
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
                                                "value": "52"
                                            },
                                            {
                                                "type": "pauseBgm"
                                            },
                                            "Stage 10 已完成。是否提交分数？",
                                            {
                                                "type": "confirm",
                                                "text": "提交分数？",
                                                "yes": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Stage 10 阴云密布"
                                                    }
                                                ],
                                                "no": [
                                                    {
                                                        "type": "confirm",
                                                        "text": "跳过剧情吗？",
                                                        "yes": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "MT380",
                                                                "loc": [
                                                                    3,
                                                                    7
                                                                ],
                                                                "direction": "down"
                                                            }
                                                        ],
                                                        "no": [
                                                            {
                                                                "type": "playBgm",
                                                                "name": "bgm5.mp3"
                                                            },
                                                            "盟军没能在1944年圣诞节之前结束战争，但也用不了多久。",
                                                            "此时，无论是欧洲战场，还是太平洋战场，轴心国军队都已是强弩之末。虽然反扑更加猛烈而疯狂，但也不过是困兽犹斗。",
                                                            "此时，盟军内部的裂痕开始逐渐扩大。苏联军队一路上势不可挡，距离柏林越来越近，这让英美感受到了危机。丘吉尔希望能抢在苏联之前攻克柏林，这样战后秩序和舆论会更偏向西方国家一些。",
                                                            "战争接近尾声，胜利无可置疑，就看谁能抢先夺得这场终点为柏林的“长跑比赛”的冠军。是苏联？还是英美？当然，这是政客们才需要考虑的事情了。对于普通士兵而言，他们要做的，就是别让自己倒在胜利的前夕。",
                                                            {
                                                                "type": "showImage",
                                                                "code": 1,
                                                                "image": "chapter11.jpg",
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
                                                                "floorId": "MT379",
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
    [267,  0,  0,  0,  0,  0,  0,  0,391,  0,  0,  0,  0,  0,267],
    [  0,267,  0,391,  0,  0,  0,  0,  0,  0,  0,391,  0,267,  0],
    [  0,  0,  0,  0,  0,  0,  0,391,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,391,  0,395,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,395,  0,  0,  0,  0,  0,395,  0,  0,  0,  0,395],
    [  0,  0,  0,  0,  0,  0,  0,333,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,148],
    [148,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,148,148],
    [148,148,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,148,148],
    [148,148,148,148,  0,  0,  0,  0,  0,  0,  0,  0,148,148,148],
    [  0,148,148,148,148,  0,  0,  0,  0,  0,  0,  0,148,148,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [308,308,308,308,308,308,308,308,308,308,308,308,308,308,308],
    [ 16,308,308,308,308,308,308,308,308,308,308,308,308,308, 16],
    [ 16, 16, 16,311,311,311,311,308,308,311,311,311,311,311, 16],
    [ 16, 16,311,311, 16,311,311,311,311,311,311, 16, 16,311,311],
    [ 16, 16,311, 16, 16, 16,311, 16, 16, 16,311, 16, 16, 16,311],
    [ 16, 16,311, 16, 16,311,311, 16, 16, 16,311, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16,311, 16, 16, 16, 16,311, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,308],
    [308, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,308,308],
    [308,308, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,308,308],
    [308,308,308,308, 16, 16, 16, 16, 16, 16, 16, 16,308,308,308],
    [ 16,308,308,308,308,308, 16, 16, 16, 16, 16,308,308,308, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
],
    "fgmap": [

],
    "area": "浅滩"
}