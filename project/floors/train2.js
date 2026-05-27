main.floors.train2=
{
    "floorId": "train2",
    "title": "训练场",
    "name": "训练场",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "status:hpmax",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:hp",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:atk",
            "value": "10",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:money",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:exp",
            "value": "0"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "text",
            "text": "\t[道丁]\f[dowdin.png,0,310]接下来，我们来学习下空战部分的内容。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[道丁]\f[dowdin.png,0,310]本游戏中，陆战和海战都有自己的一套新属性值，但空战部分没有，与敌机的战斗就是单纯用双方的攻击力来进行的，除了没有防御力这一点外，与常规的魔塔战斗几乎一致。",
            "pos": [
                100,
                300,
                380
            ]
        },
        "画外音：其实是作者觉得设计出来会非常复杂，干脆取消了。",
        {
            "type": "text",
            "text": "\t[道丁]\f[dowdin.png,0,310]所以，我们将用几场战斗来简要介绍下我们的这些空军类装备和敌人的特性。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[道丁]\f[dowdin.png,0,310]这个“斗士”战斗机中队暂时交给你指挥了，让他们起飞，前往指定地点。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "setValue",
            "name": "item:wrestler",
            "operator": "+=",
            "value": "1"
        },
        {
            "type": "text",
            "text": "\t[道丁]\f[dowdin.png,0,310]之前提到过，本游戏中的装备不可以随意装卸。所以，务必把握好接下来这次换装机会，否则将会卡关！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "choices",
            "text": "请选择出战空军",
            "choices": [
                {
                    "text": "装备 斗士MK2",
                    "icon": "wrestler",
                    "need": "core.hasItem('wrestler')&&!core.hasEquip('wrestler')",
                    "condition": "core.hasItem('wrestler')&&!core.hasEquip('wrestler')",
                    "action": [
                        {
                            "type": "loadEquip",
                            "id": "wrestler"
                        }
                    ]
                },
                {
                    "text": "卸下当前战斗机",
                    "action": [
                        {
                            "type": "unloadEquip",
                            "pos": 4
                        }
                    ]
                },
                {
                    "text": "卸下当前攻击机",
                    "action": [
                        {
                            "type": "unloadEquip",
                            "pos": 5
                        }
                    ]
                },
                {
                    "text": "卸下当前轰炸机",
                    "action": [
                        {
                            "type": "unloadEquip",
                            "pos": 6
                        }
                    ]
                },
                {
                    "text": "返回",
                    "action": []
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,7": [
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]发现一批“敌军”轰炸机紧随而至。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]敌军的轰炸机通常攻击力很低，但真正厉害的是他们挂在机腹下方的那些炸弹。一旦\r[yellow]战斗进行到指定的回合，轰炸机就会投放炸弹，造成巨额杀伤\r。炸弹的伤害由敌人的“空袭”值决定。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]很显然，单靠你现在这些战斗机上的贫弱火力，暂时没法拦截这些轰炸机。我们剩余的血量也不足以硬抗他们的轰炸。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]那就让我们的试验型战机上阵吧。这些重型战斗机装载了很多大口径机枪，非常适合拦截轰炸机，但由于体型笨重，不适合与敌军战斗机发生正面冲突。顺便也让我们看一下，我们招标的这些新飞机性能如何。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "setValue",
                "name": "item:beautifighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]顺带一提，他们占用的是“攻击机”的装备格子，不与之前的装备冲突。“攻击机”可以细分为很多种类，你现在要装备的就是其中的“重型战斗机”，以后你还会遇到其他类型的攻击机，在此不多赘述。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "choices",
                "text": "请选择出战空军",
                "choices": [
                    {
                        "text": "装备 斗士MK2",
                        "icon": "wrestler",
                        "need": "core.hasItem('wrestler')&&!core.hasEquip('wrestler')",
                        "condition": "core.hasItem('wrestler')&&!core.hasEquip('wrestler')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "wrestler"
                            }
                        ]
                    },
                    {
                        "text": "装备 英俊战士战斗机",
                        "icon": "beautifighter",
                        "need": "core.hasItem('beautifighter')&&!core.hasEquip('beautifighter')",
                        "condition": "core.hasItem('beautifighter')&&!core.hasEquip('beautifighter')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "beautifighter"
                            }
                        ]
                    },
                    {
                        "text": "卸下当前战斗机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 4
                            }
                        ]
                    },
                    {
                        "text": "卸下当前攻击机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 5
                            }
                        ]
                    },
                    {
                        "text": "卸下当前轰炸机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 6
                            }
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    }
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,10": [
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]往下看，地上有一支“敌军”车队。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]现在我们需要进行一次空对地打击任务了。战斗机虽然有机枪可以扫射，但伤害十分有限。对地攻击任务，多数时候还是要交给轰炸机来完成。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "setValue",
                "name": "item:blenheim",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]提前让停放在机场的轰炸机起飞了吗？不错，有长远眼光，而且时机把握的很准。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]轰炸机类的装备通常不会给你提供多少属性加成，但它们可以\r[yellow]使用炸弹攻击地面和海上的目标\r，杀伤力较大。记住，战斗机是保护你免受敌方飞机侵扰的“盾”，而轰炸机则是协助你在地面战场能够有效推进的“剑”。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]现在，让轰炸机加入战斗，对地面目标实施轰炸吧。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            "\t[系统提示]轰炸机每次投放的炸弹数量，取决于\r[yellow]装备介绍\r中，他们\r[yellow]挂载的数量\r，伤害倍率通常取决于炸弹的重量。例如，“布伦海姆”式轰炸机的介绍中写着：“\r[yellow]挂载：4×250磅炸弹\r”、“每5回合投放一轮炸弹，每颗炸弹伤害为0.7倍攻击力”，那么“投放一轮炸弹”指的就是\r[yellow]一次性投放4枚\r，这一轮炸弹的总伤害就是：\r[yellow]4×45×0.7=126\r。",
            {
                "type": "choices",
                "text": "请选择出战空军",
                "choices": [
                    {
                        "text": "装备 斗士MK2",
                        "icon": "wrestler",
                        "need": "core.hasItem('wrestler')&&!core.hasEquip('wrestler')",
                        "condition": "core.hasItem('wrestler')&&!core.hasEquip('wrestler')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "wrestler"
                            }
                        ]
                    },
                    {
                        "text": "装备 英俊战士战斗机",
                        "icon": "beautifighter",
                        "need": "core.hasItem('beautifighter')&&!core.hasEquip('beautifighter')",
                        "condition": "core.hasItem('beautifighter')&&!core.hasEquip('beautifighter')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "beautifighter"
                            }
                        ]
                    },
                    {
                        "text": "装备 布伦海姆轰炸机",
                        "icon": "blenheim",
                        "need": "core.hasItem('blenheim')&&!core.hasEquip('blenheim')",
                        "condition": "core.hasItem('blenheim')&&!core.hasEquip('blenheim')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "blenheim"
                            }
                        ]
                    },
                    {
                        "text": "卸下当前战斗机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 4
                            }
                        ]
                    },
                    {
                        "text": "卸下当前攻击机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 5
                            }
                        ]
                    },
                    {
                        "text": "卸下当前轰炸机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 6
                            }
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    }
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "14,8": {
            "floorId": "train3",
            "loc": [
                0,
                7
            ],
            "direction": "right"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_train2_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:door_train2_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:door_train2_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,8": [
            {
                "type": "setValue",
                "name": "flag:door_train2_7_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,8": [
            {
                "type": "setValue",
                "name": "flag:door_train2_7_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,12": [
            {
                "type": "setValue",
                "name": "flag:door_train2_13_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "13,12": [
            {
                "type": "setValue",
                "name": "flag:door_train2_13_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "14,12": [
            {
                "type": "setValue",
                "name": "flag:door_train2_13_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,12": [
            {
                "type": "setValue",
                "name": "flag:door_train2_13_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,12": [
            {
                "type": "setValue",
                "name": "flag:door_train2_13_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,12": [
            {
                "type": "setValue",
                "name": "flag:door_train2_13_9",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "7,2": [
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]前方发现本次训练的“敌机”，一支战斗机小队。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]战斗机是夺取制空权的主力。对我军来说，战斗机装备可以提供较为可观的攻击力加成；而敌人的战斗机是空战中的主要对手之一，通常具有“连击”属性。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]现在，尝试在这场模拟演习中战胜对手，确保我方制空权。",
                "pos": [
                    100,
                    300,
                    380
                ]
            }
        ]
    },
    "autoEvent": {
        "7,6": {
            "0": {
                "condition": "flag:door_train2_7_6==3",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_train2_7_6",
                        "value": "null"
                    },
                    {
                        "type": "text",
                        "text": "\t[道丁]\f[dowdin.png,0,310]很好，你取得了这场空战的胜利。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[道丁]\f[dowdin.png,0,310]如果你观察足够仔细，会发现在本层教学刚开始的时候，你的状态栏上有一个\r[yellow]“制空权↓”\r的标识，而现在，那个位置被换成了\r[yellow]“制空权↑”\r。（画外音：如果你没观察到，可以读档回去重新注意看）",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[道丁]\f[dowdin.png,0,310]顾名思义，“制空权↓”代表着你失去当前区域的制空权，反之，“制空权↑”则是你已夺取制空权。如果持平，就不会显示任何文字。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[道丁]\f[dowdin.png,0,310]我们先来说明制空权的重要性吧。在战斗中，\r[yellow]夺得制空权的一方，其每回合的最终伤害倍率会提高10%\r。例如：你原本每回合能对敌人造成100点伤害，但在夺取制空权后，这一数字会变为110。反之，如果是敌人夺去了制空权，那么敌人的伤害倍率会提高10%。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[道丁]\f[dowdin.png,0,310]制空权的夺取主要取决于双方的\r[yellow]战斗机，轰炸机是不参与制空权争夺的\r。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[道丁]\f[dowdin.png,0,310]当你未装备战斗机，而当前地图中存在敌人的战斗机时，则视为敌方夺取了制空权。而当你装备了战斗机，而当前地图中不存在敌方战斗机时，制空权就是在你手里。如果双方都没有战斗机，或者双方战斗机同时在场，则制空权不属于任何一方。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[道丁]\f[dowdin.png,0,310]所以，未来发生战争时，尽快肃清空中的敌机，对你的战斗有很大帮助。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    }
                ]
            },
            "1": null
        },
        "7,9": {
            "0": {
                "condition": "flag:door_train2_7_9==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_train2_7_9",
                        "value": "null"
                    },
                    {
                        "type": "text",
                        "text": "\t[道丁]\f[dowdin.png,0,310]不错，让这些新飞机降落吧，他们的任务已经完成。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "unloadEquip",
                        "pos": 5
                    },
                    {
                        "type": "setValue",
                        "name": "item:beautifighter",
                        "operator": "-=",
                        "value": "1"
                    }
                ]
            },
            "1": null
        },
        "13,9": {
            "0": {
                "condition": "flag:door_train2_13_9==6",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_train2_13_9",
                        "value": "null"
                    },
                    {
                        "type": "text",
                        "text": "\t[道丁]\f[dowdin.png,0,310]不错，现在你已经基本掌握了空战的基本要领。现在去下一个地点报道，继续接受海军训练科目！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "unloadEquip",
                        "pos": 4
                    },
                    {
                        "type": "unloadEquip",
                        "pos": 6
                    },
                    {
                        "type": "setValue",
                        "name": "item:wrestler",
                        "operator": "-=",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "item:blenheim",
                        "operator": "-=",
                        "value": "1"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,  0,  0,140,  0,  0,  0,140,  0,  0,140,140,140],
    [  0,140,140,  0,  0,140,  0,  0,  0,140,140,  0,140,140,140],
    [140,140,140,  0,140,140,140, 86,140,140,140,  0,  0,  0,140],
    [140,140,140,  0,140,  0,  0,  0,  0,  0,140,140,140,  0,  0],
    [140,140,  0,140,140,  0,  0,205,  0,  0,140,140,140,140,  0],
    [  0,  0,140,140,140,  0,205,  0,205,  0,140,  0,140,140,140],
    [140,  0,  0,140,140,140,140, 85,140,140,140,  0,  0,140,140],
    [140,  0,  0,140,140,  0,  0,  0,  0,  0,140,140,  0,  0,140],
    [140,  0,140,140,140,  0,207,  0,207,  0,140,140,140,  0, 89],
    [  0,  0,140,140,140,140,140, 85,140,140,140,140,140, 85,140],
    [  0,140,140,140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [140,140,  0,140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [140,  0,  0,140,140, 33,  0,250,225,  0,250,225,  0,250,225],
    [  0,  0,  0,140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,140,140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,153,153,153],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,153,153,153],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,153,153,153,153],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,153,153,153,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,153,153,153,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,153,153,153,  0],
    [153,153,153,  0,  0,  0,  0,  0,  0,  0,  0,153,153,153,  0],
    [153,153,153,153,153,153,153,153,153,153,153,153,153,153,153],
    [153,153,153,153,153,153,153,153,153,153,153,153,153,153,153],
    [  0,153,153,153,153,153,153,153,153,153,153,153,153,153,153],
    [  0,  0,  0,  0,  0,  0,  0,  0,153,153,153,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bgm": "relax.mp3",
    "area": "陆地"
}