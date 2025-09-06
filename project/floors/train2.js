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
    "cannotViewMap": true,
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
            "text": "\t[道丁]\f[dowdin.png,0,310]这个“角斗士”战斗机中队暂时交给你指挥了，让他们起飞，前往指定地点。",
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
                "text": "\t[道丁]\f[dowdin.png,0,310]敌军的轰炸机通常攻击力很低，但真正厉害的是他们挂载机腹下方的那些炸弹！一旦战斗进行到指定的回合，轰炸机就会投放炸弹，造成巨额杀伤！炸弹的伤害由敌人的“空袭”值决定。",
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
                "text": "\t[道丁]\f[dowdin.png,0,310]轰炸机类的装备通常不会给你提供多少属性加成，但它们可以使用炸弹攻击地面和海上的目标，杀伤力较大。记住，战斗机是保护你免受敌方飞机侵扰的“盾”，而轰炸机则是协助你在地面战场能够有效推进的“剑”。",
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
                "text": "\t[道丁]\f[dowdin.png,0,310]前方发现本次训练的“敌机”，一支战斗机小队！",
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
                        "text": "\t[道丁]\f[dowdin.png,0,310]以较大的代价取得了一场艰难的胜利，但我想这应该不怪你。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[道丁]\f[dowdin.png,0,310]这批“梅塞施密特”战斗机是我们最近从西班牙政府那边接收的，也是德国人现役的新型战机。我们其实是打算借这次训练测试一下这些飞机的性能。从结果来看，我们应当尽快大规模列装新型战机以替换掉这些老掉牙的斗士战斗机了，否则未来我们的制空权将很难保证。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[道丁]\f[dowdin.png,0,310]让我们回到训练当中来吧。",
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
                        "text": "\t[道丁]\f[dowdin.png,0,310]不错，还有些改进空间，稍后我会把改进意见反馈给设计师。让这些新飞机降落吧，他们的任务已经完成。",
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
                    },
                    {
                        "type": "text",
                        "text": "\t[道丁]\f[dowdin.png,0,310]也许你已经发现，你的状态栏中早就已经出现了一个“空权↑”标识，这代表着你已经掌控了这片区域的制空权。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[道丁]\f[dowdin.png,0,310]当你肃清了地图中所有敌军战斗机，并且自身装备着空军类装备的情况下，你就可以夺取这片区域的制空权。此时，你会获得10%的全伤害加成，这对你接下来的战斗都大有益处。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[道丁]\f[dowdin.png,0,310]但反之，如果敌方战斗机在场，而你没有装备着战斗机或攻击机，那么状态栏会显示“空权↓”标识，代表着你失去这片区域的制空权。此时你受到的所有战斗伤害会增加10%。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[道丁]\f[dowdin.png,0,310]我想，你现在应该明白空中战斗的重要性了。",
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
    [140,140,  0,140,140, 33,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [140,  0,  0,140,140, 33,  0,250,225,  0,250,225,  0,250,225],
    [  0,  0,  0,140,140, 33,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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
    "bgm": "ConquestofParadise.mp3",
    "area": "陆地"
}