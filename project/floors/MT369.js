main.floors.MT369=
{
    "floorId": "MT369",
    "title": "比利时",
    "name": "比利时",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass2",
    "bgm": "hitman.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,0": [
            {
                "type": "playSound",
                "name": "technology.mp3"
            },
            {
                "type": "function",
                "function": "function(){\nflags.learned[25]=true\n}"
            },
            "\t[系统提示]习得新技能：高脚柜炸弹",
            "\t[系统提示]\f[skill24.png,90,50]高脚柜炸弹（1000指挥点）：只能在陆地或浅滩使用，且必须装备着特定轰炸机（目前仅兰开斯特式轰炸机具备挂载此炸弹的能力）。使用后在前方一格投下一枚“高脚柜”炸弹，直接摧毁面前的非boss陆军（无视抗破），并在爆炸地点九宫格3格半径内引发小范围地震，摧毁可破墙壁，范围内其他敌方陆军损失80%血量。",
            "\t[历史来源]\f[skill24.png,90,50]“高脚柜”(Tallboy)是二战期间英国研制的一种巨型炸弹，装有2359千克铝末混合-D1炸药，巨大的爆炸甚至可以引发小型地震。到战争结束，英国一共生产了854枚“高脚柜”，另外还研发出加强版的“大满贯”(Grandslam)炸弹。“高脚柜”取得的最出名的战果是击沉德军提尔皮茨号战列舰。",
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]恭喜，你已解锁本游戏的最后一个技能！",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "13,11": [
            {
                "type": "if",
                "condition": "(flag:fuji3!==true)",
                "true": [
                    {
                        "type": "animate",
                        "name": "howitzer",
                        "loc": "hero",
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
                        "type": "setValue",
                        "name": "status:hp",
                        "operator": "-=",
                        "value": "800000"
                    },
                    "你的部队遭遇\r[yellow]重型火炮轰炸\r，伤亡惨重。\r[yellow]在你位置的左侧较远处\r飘出浓厚的烟雾。"
                ]
            }
        ],
        "7,11": [
            {
                "type": "if",
                "condition": "((blockId:7,11!=='howitzer180')&&(flag:fuji3!==true))",
                "true": [
                    {
                        "type": "animate",
                        "name": "hand",
                        "loc": [
                            7,
                            11
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "howitzer180",
                        "loc": [
                            [
                                7,
                                11
                            ]
                        ],
                        "time": 0
                    }
                ]
            }
        ],
        "10,6": [
            {
                "type": "if",
                "condition": "(flag:fuji4!==true)",
                "true": [
                    {
                        "type": "animate",
                        "name": "vehicleexplore",
                        "loc": "hero",
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
                        "type": "setValue",
                        "name": "status:hp",
                        "operator": "-=",
                        "value": "600000"
                    },
                    "一枚穿甲弹\r[yellow]迎面（屏幕上方）飞来\r，当场将一辆“谢尔曼”坦克打成废铁。你掏出望远镜，发现前方较远处的树丛里似乎露出了一截\r[yellow]88毫米口径炮管\r。"
                ]
            }
        ],
        "10,1": [
            {
                "type": "if",
                "condition": "((blockId:10,1!=='jagpanzer')&&(flag:fuji4!==true))",
                "true": [
                    {
                        "type": "animate",
                        "name": "hand",
                        "loc": [
                            10,
                            1
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "jagpanzer",
                        "loc": [
                            [
                                10,
                                1
                            ]
                        ],
                        "time": 0
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT368",
            "loc": [
                7,
                0
            ]
        },
        "7,0": {
            "floorId": "MT370",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "0,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT369_1_7===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            1,
                            11
                        ]
                    }
                ]
            }
        ],
        "2,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT369_1_7===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            1,
                            11
                        ]
                    }
                ]
            }
        ],
        "0,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_11",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT369_1_11===5)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            1,
                            7
                        ]
                    }
                ]
            }
        ],
        "2,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_11",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT369_1_11===5)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            1,
                            7
                        ]
                    }
                ]
            }
        ],
        "1,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_11",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT369_1_11===5)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            1,
                            7
                        ]
                    }
                ]
            }
        ],
        "0,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_11",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT369_1_11===5)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            1,
                            7
                        ]
                    }
                ]
            }
        ],
        "2,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_11",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT369_1_11===5)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            1,
                            7
                        ]
                    }
                ]
            }
        ],
        "0,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT369_1_3===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            1,
                            3
                        ]
                    }
                ]
            }
        ],
        "2,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT369_1_3===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            1,
                            3
                        ]
                    }
                ]
            }
        ],
        "7,11": [
            {
                "type": "setValue",
                "name": "flag:fuji3",
                "value": "true"
            },
            {
                "type": "setValue",
                "name": "flag:mission49tsk3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        13,
                        11
                    ]
                ],
                "remove": true,
                "time": 0
            }
        ],
        "10,1": [
            {
                "type": "setValue",
                "name": "flag:fuji4",
                "value": "true"
            },
            {
                "type": "setValue",
                "name": "flag:mission49tsk3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        6
                    ]
                ],
                "remove": true,
                "time": 0
            }
        ],
        "1,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT369_1_3===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            1,
                            3
                        ]
                    }
                ]
            }
        ],
        "0,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT369_1_3===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            1,
                            3
                        ]
                    }
                ]
            }
        ],
        "2,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT369_1_3===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            1,
                            3
                        ]
                    }
                ]
            }
        ],
        "1,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT369_1_3===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            1,
                            3
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
    [636,551,636,146,580,384,146, 91,146,635,635,635,664,146,638],
    [636,636,636,146,519,146,146,201,146,146,146,146, 81,146,638],
    [636,201,636,146,228,146,608,376,608,146,  0,668,744,146,638],
    [146, 85,146,146,  0,146,146, 81,146,146,  0,146,266, 81,638],
    [391,270,391,146,  0,  0,  0,  0,  0,275,  0,146,146,146,146],
    [270,524,270,146,146,146, 82,146,146,146,  0,275,  0,  0,  0],
    [  0,412,  0,146,518,146,  0,146,637,146,  0,146,146, 81,146],
    [146, 85,146,146,519,669,744,669,637,146,  0,146,635,636,635],
    [664,643,664,146,518,146,  0,146,637,146,668, 81,201,519,391],
    [643,227,643,146,146,146,406,146,146,146,  0,146,  0,664,  0],
    [227,643,227,146,  0,341,  0,146,518,146,  0,146,146, 81,146],
    [146, 85,146,146, 82,146,146,146,  0, 81,  0,  0,  0,  0,  0],
    [228,524,228,146,  0,  0,  0,  0,744,  0,146,146,146,146,265],
    [146, 82,146,146, 81,146,146,  0,146,  0,146,581,580,146,  0],
    [637,638,  0,670,265,389,146, 93,146,518,146,580,227, 81,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}