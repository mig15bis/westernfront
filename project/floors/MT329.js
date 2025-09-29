main.floors.MT329=
{
    "floorId": "MT329",
    "title": "卡昂",
    "name": "卡昂",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "cao2.mp3",
    "firstArrive": [],
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
                "text": "   敌人的反扑十分猛烈，给我们造成\n了不小的麻烦，不过指挥官阁下最终还\n是占领了卡昂，阶段任务已经完成。\n   敌军的队伍里全是刚成年甚至未成\n年的孩子！该死的希特勒把他们也洗脑\n成了战争机器！一想到我们的孩子也跟\n他们差不多大，让人有些不忍心。不过\n他们终究已经成了纳粹的打手，我们只\n好杀了他们。这里可是战场，如果我们\n不这么做，死的就是我们了。",
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
                "type": "setValue",
                "name": "flag:stage",
                "value": "46"
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT331",
                        "loc": [
                            7,
                            3
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "playBgm",
                        "name": "wots6.mp3",
                        "keep": true
                    },
                    "负责防守卡昂的是德军第12SS装甲师。在战役之前，这支军队被盟军戏称为“娃娃师”，因为成员多为十几岁的德国青少年。但很快，他们就不得不开始重视起这支狂热的年轻部队。",
                    "诺曼底登陆当天，盟军的空中轰炸给德军造成了不小的伤亡和混乱，卡昂城内遭受严重破坏，已不再适合街巷战。德军决定严守城外阵地。",
                    "战斗过程血腥而残酷。德军的虎豹坦克比盟军的更优秀，成为推进的主力，稚气未脱的年轻士兵们手持“铁拳”火箭筒，义无反顾冲向盟军坦克，在中弹倒下前，他们的眼神中既包含着为国捐躯的狂热，也有对战争的恐惧。虽然被希特勒洗脑成为杀戮机器，但到底也是一群在生命的尽头，仍在哭喊着叫妈妈的年轻孩子。",
                    "诺曼底登陆一个星期后，卡昂仍然在德军手中。从一线撤回的德军一起构筑成一道坚固防线，将盟军挡在卡昂城外。但在14日那天，德军12SS师的师长维特，在盟军舰队的轰炸中阵亡，这给年轻的士兵们造成了一些恐慌和悲伤。",
                    "到6月24日，卡昂的防御仍然未被撼动。德军虽然损失超过2500人，但重型装备损失并不严重。蒙哥马利决定发起代号“埃普索姆”的行动，试图从西侧包围卡昂。但这一次，盟军的无线电通信被德军拦截。",
                    "德军将重型火力和狙击手藏匿于废墟之中，在街道上埋设地雷，静待英军的攻击。这是一场对双方都十分残酷的战斗，英军装备了可以击穿德军重型坦克的谢尔曼“萤火虫”，但德军的战斗意志更强，反坦克手段更多。",
                    "德军的防御体系遭到破坏，反坦克火箭炮都打光了弹药，但盟军坦克却像潮水一般无穷无尽。到蒙哥马利下令停止时，第12SS师已经用尽了最后的力量，士兵们陷入绝望之中。他们抵达新的阵线，利用最后残存的力量组织起最后一道防线。盟军也付出了巨大损失，停下休整。",
                    "7月7日，盟军发起代号“查恩伍德”的行动，“罗德尼”号战列舰和450架重型轰炸机猛轰卡昂北部阵地，地面部队紧随其后。德军的防线逐渐被分割，作战失去组织，坦克和火炮已经打光弹药成为废铁，战斗几乎全靠士兵们近乎自我毁灭的冲锋。",
                    "这个青年团很快就要全军覆没了，但这时却传来了希特勒“不惜一切代价守住卡昂”的命令。师长迈尔不想看着孩子们为这种毫无意义的做法去送死，尽一切可能不执行这道荒唐的命令。",
                    "第12SS师撤退了，他们坚守了卡昂城33天。迈尔回忆道：“他们带着稚气未脱的面孔投入战斗，但今天只能看到沾满泥污的钢盔在沮丧的脸上投下黑色的阴影，他们的眼睛经常失神地注视着远方”。没过多久，这支部队又被派往另一个千疮百孔的防线上，准备为下一场毫无意义的作战付出生命。",
                    "盟军最终占领了卡昂，付出5.5万人和数百辆坦克的代价。卡昂城的80%被毁，平民死伤过万。德军伤亡了5.3万，并且因为卡昂的失守遭遇全线溃败。",
                    "卡昂战役是诺曼底战役中最血腥的拉锯战之一，自此，盟军成功站稳脚跟，扭转西线战局。接下来，就是逐步解放法国，向德国挺进。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT330",
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
            "floorId": "MT326",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,9": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,10": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,10": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,11": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,11": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,11": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,8": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,8": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,9": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,10": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,11": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,12": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,12": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,12": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,12": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,12": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,11": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,10": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,9": [
            {
                "type": "setValue",
                "name": "flag:MT329baseA",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT329baseA===8)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                11
                            ],
                            [
                                8,
                                11
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                9,
                                12
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT329baseA===16)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ],
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        7,
                                        12
                                    ],
                                    [
                                        9,
                                        10
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "me109k6",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT329baseA===24)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][0]=true\n}"
                                    },
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            4,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            13
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
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
    "afterOpenDoor": {
        "7,7": [
            {
                "type": "pauseBgm"
            },
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "down:4"
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    7,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "wonder",
                "loc": "hero",
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "playBgm",
                "name": "7days3.mp3",
                "keep": true
            },
            {
                "type": "playSound",
                "name": "048-Explosion01.mp3"
            },
            {
                "type": "vibrate",
                "direction": "horizontal",
                "time": 200,
                "speed": 10,
                "power": 10,
                "async": true
            },
            {
                "type": "setBlock",
                "number": "motorinf",
                "loc": [
                    [
                        6,
                        8
                    ],
                    [
                        8,
                        8
                    ],
                    [
                        5,
                        9
                    ],
                    [
                        9,
                        9
                    ],
                    [
                        5,
                        11
                    ],
                    [
                        9,
                        11
                    ],
                    [
                        6,
                        12
                    ],
                    [
                        8,
                        12
                    ]
                ],
                "time": 0
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]击败敌人的多次反扑以占领区域"
        ]
    },
    "autoEvent": {
        "6,13": {},
        "5,13": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 22,248,142, 21, 21,663,142, 91,142,663, 21, 21,142,248, 22],
    [ 11,142,142,142,142, 81,142,  0,142, 81,142,142,142,142, 11],
    [607,  0,373,  0,  0,227,250,607,250,227, 21,  0, 81,373,  0],
    [142,142,142, 11,142,142, 81,370,142,142,607,370,142,  0, 21],
    [638,638,142,  0,142,663,607,142,142,142,142, 11,142,142,142],
    [638,638,142,664,142, 11,142,142,643,643,142,  0,142,637,637],
    [  0,228, 81,218,142,218, 81,270,643,643,142,664, 81,663,637],
    [142,142,142, 81,109,109,109, 86,109,109,109, 81,142,142,142],
    [635,635,635,228,109,  0,  0,  0,  0,  0,109,228,636,636,636],
    [109,109,109,109,109,  0,  0,  0,  0,  0,109,109,109,109,109],
    [266,275,244,250, 85,  0,  0,  0,  0,  0, 85,275,275,275,275],
    [ 82,152,152,152,109,  0,  0,  0,  0,  0,109, 82,152,152, 82],
    [275,218,664,266,109,  0,  0,  0,  0,  0,109,228,152,  0,228],
    [152,152,152, 82,109,109,109, 85,109,109,109,218,152,218,667],
    [590,590,218,228,590,590,109, 89,109,519,519,519,152,650,650]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,10180,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "area": "陆地"
}