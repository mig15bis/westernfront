main.floors.MT449=
{
    "floorId": "MT449",
    "title": "东京",
    "name": "东京",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "bgm4.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,7": [
            {
                "type": "if",
                "condition": "(flag:savecommunist===1)",
                "true": [
                    "“中国人民与日本人民是一致的，只有一个敌人，就是日本帝国主义与中国民族败类。”\n-----毛泽东\n1941年5月15日",
                    "伊田助男、秋山良照、小林宽澄、牧口常三郎、野坂参三、杉本良吉、德田球一、小林多喜二、石川达三、宫本百合子、杉本一夫、小林武夫、冈田义雄、山田一郎、松野觉、山崎宏……以及更多没有提到的和没有留下姓名的国际主义战士们。",
                    "在那样的社会环境下，清醒的，坚持正义的人终究是极少数。但正是这极少数人，手握着一个国家、一个民族最后的希望火种。他们被冠上“叛国”之名，却是真正的爱国者。",
                    "铭记历史，勿忘国耻，但同时也不能忘记这些正直善良的异国勇士们。向所有在世界反法西斯战争中做出贡献的日本义士们，致以最崇高的敬意。"
                ],
                "false": [
                    {
                        "type": "setBlock",
                        "number": "japinf1",
                        "loc": [
                            [
                                14,
                                7
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "158-Skill02.mp3"
                    },
                    {
                        "type": "animate",
                        "name": "immekill"
                    },
                    {
                        "type": "animate",
                        "name": "wonder",
                        "loc": "hero",
                        "async": true
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "shoot",
                        "loc": [
                            14,
                            7
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                14,
                                7
                            ]
                        ],
                        "remove": true,
                        "time": 100
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                13,
                                7
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    "\t[苏军指挥官,hero]我们从这位异国的同志手中拿到了能够证明日本军国主义罪行的重要文件，但我们没能保护好他的生命安全。他就这样倒在了胜利的前夕。",
                    "\t[苏军指挥官,hero]这么多年的潜伏辛苦你们了。安心睡下吧，你的遗志我们收到了。",
                    {
                        "type": "setBlock",
                        "number": "X10207",
                        "loc": [
                            [
                                13,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[系统提示]本章节的故事情节均为虚构，但日共却是真实存在的，他们为抗战事业所做出的贡献不可磨灭。",
                    {
                        "type": "setValue",
                        "name": "flag:savecommunist",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "MT448",
            "loc": [
                14,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "11,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_12_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_12_7===3)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_12_7",
                        "value": "0"
                    }
                ]
            }
        ],
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_12_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_12_7===3)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_12_7",
                        "value": "0"
                    }
                ]
            }
        ],
        "11,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_12_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_12_7===3)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_12_7",
                        "value": "0"
                    }
                ]
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_10_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_10_7===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_10_7",
                        "value": "0"
                    }
                ]
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_10_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_10_7===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_10_7",
                        "value": "0"
                    }
                ]
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_10_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_10_7===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_10_7",
                        "value": "0"
                    }
                ]
            }
        ],
        "8,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_10_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_10_7===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_10_7",
                        "value": "0"
                    }
                ]
            }
        ],
        "8,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_10_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_10_7===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_10_7",
                        "value": "0"
                    }
                ]
            }
        ],
        "8,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_10_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_10_7===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_10_7",
                        "value": "0"
                    }
                ]
            }
        ],
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_7_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_7_7===3)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_7_7",
                        "value": "0"
                    }
                ]
            }
        ],
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_7_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_7_7===3)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_7_7",
                        "value": "0"
                    }
                ]
            }
        ],
        "6,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_7_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_7_7===3)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_7_7",
                        "value": "0"
                    }
                ]
            }
        ],
        "4,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_5_7===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_5_7",
                        "value": "0"
                    }
                ]
            }
        ],
        "4,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_5_7===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_5_7",
                        "value": "0"
                    }
                ]
            }
        ],
        "4,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_5_7===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_5_7",
                        "value": "0"
                    }
                ]
            }
        ],
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_5_7===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_5_7",
                        "value": "0"
                    }
                ]
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_5_7===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_5_7",
                        "value": "0"
                    }
                ]
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT449_5_7===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_5_7",
                        "value": "0"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "12,7": {
            "0": null,
            "1": null
        },
        "10,7": {
            "1": null
        },
        "7,7": {
            "1": null
        },
        "5,7": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [645,648,693, 82,  0,  2,646, 22,646,  2,  0,  0,691,524,  0],
    [645,648,  0,  2,  0,  2,646,691,646,  2,  0,  2,  2,  2, 82],
    [  2,  2,  2,  2,690,  2,  2, 81,  2,  2,686,  2,  0,705,747],
    [687,  0,690,  0,518,  2,  0,700,  0,  2,  0,  2,688,  2,  2],
    [ 81,  2,  2,518,  0,691,  0,  2,748, 81,690,  2,  0,647,647],
    [685,  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,645,645],
    [  2,684,  2,684,685,  2,687,  2,692,692,  2,693,  2,  2,  2],
    [ 92,  0, 82,688,686, 85,687, 85,750,691, 85,694, 85,494, 17],
    [  2,684,  2,684,685,  2,687,  2,692,692,  2,693,  2,  2,  2],
    [685,  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,519,647],
    [ 81,  2,  2,  0,524,  0,700,750,518,518,  2,702,749,519,648],
    [687,  0,  0,690,  2,  2, 81,  2,  2,  2,  2, 82,  2,  2,  2],
    [  2,  2,  2,  0, 21,  2,  0,748,  0,686,  0,690,749,524, 21],
    [ 22,647,  2,686,  2,  2,  2,700,  2,  2,  2,688,  2,  2,  2],
    [648,691, 81,518, 21,  2, 21, 21, 21,  2,524,750, 22, 22,  2]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}