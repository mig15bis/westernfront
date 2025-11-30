main.floors.MT111=
{
    "floorId": "MT111",
    "title": "班加西",
    "name": "班加西",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "desert2.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,14": [
            {
                "type": "choices",
                "text": "\t[提示]前进后不可返回。所有事都做完了吗？",
                "choices": [
                    {
                        "text": "Yes, let's go!",
                        "action": [
                            {
                                "type": "changeFloor",
                                "floorId": "MT112",
                                "loc": [
                                    14,
                                    7
                                ],
                                "direction": "left"
                            }
                        ]
                    },
                    {
                        "text": "桥豆麻袋！",
                        "action": []
                    }
                ]
            }
        ],
        "1,9": [
            {
                "type": "playSound",
                "name": "technology.mp3"
            },
            {
                "type": "function",
                "function": "function(){\nflags.learned[9]=true\n}"
            },
            "\t[系统提示]习得新技能：抵抗运动",
            "\t[系统提示]\f[skill9.png,170,50]抵抗运动（100指挥点）：下一场战斗中，敌方陆军攻击力随回合数增加而减少，每回合减少原攻击力的10%。当敌人攻击力不足30%时，则不会继续减少（战术技能）",
            "\t[历史来源]\f[skill9.png,170,50]法国抵抗组织隶属于戴高乐领导下的自由法国。德军占领法国全境后，不愿屈服于法西斯统治的法军战士和民众聚集起来，在德军和维希法国政府的双重打压下，像地下党和游击队一样不断在德占区展开一系列破坏行动，为盟军的行动提供了助力。他们是法国版的“八路军”，他们代表着世界反法西斯人民的决心，他们永不屈服。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "14,3": {
            "floorId": "MT110",
            "loc": [
                0,
                3
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,3": [
            {
                "type": "setValue",
                "name": "flag:MT111door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT111door===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            13
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]指挥官阁下，侧翼部队发来电报，他们称之前发现的小股德军向他们发起了攻击！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]由于我们都没能料到他们会如此冒进，侧翼部队对此完全没有准备，现在损失惨重。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]我命令你现在立刻调转方向，迎战德军！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "setValue",
                "name": "flag:MT111door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT111door===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            13
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]指挥官阁下，侧翼部队发来电报，他们称之前发现的小股德军向他们发起了攻击！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]由于我们都没能料到他们会如此冒进，侧翼部队对此完全没有准备，现在损失惨重。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]我命令你现在立刻调转方向，迎战德军！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    }
                ]
            }
        ],
        "7,3": [
            {
                "type": "setValue",
                "name": "flag:MT111door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT111door===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            13
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]指挥官阁下，侧翼部队发来电报，他们称之前发现的小股德军向他们发起了攻击！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]由于我们都没能料到他们会如此冒进，侧翼部队对此完全没有准备，现在损失惨重。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]我命令你现在立刻调转方向，迎战德军！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    }
                ]
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:MT111door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT111door===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            13
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]指挥官阁下，侧翼部队发来电报，他们称之前发现的小股德军向他们发起了攻击！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]由于我们都没能料到他们会如此冒进，侧翼部队对此完全没有准备，现在损失惨重。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]我命令你现在立刻调转方向，迎战德军！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    }
                ]
            }
        ],
        "8,3": [
            {
                "type": "setValue",
                "name": "flag:MT111door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT111door===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            13
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]指挥官阁下，侧翼部队发来电报，他们称之前发现的小股德军向他们发起了攻击！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]由于我们都没能料到他们会如此冒进，侧翼部队对此完全没有准备，现在损失惨重。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]我命令你现在立刻调转方向，迎战德军！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    }
                ]
            }
        ],
        "8,4": [
            {
                "type": "setValue",
                "name": "flag:MT111door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT111door===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            13
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]指挥官阁下，侧翼部队发来电报，他们称之前发现的小股德军向他们发起了攻击！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]由于我们都没能料到他们会如此冒进，侧翼部队对此完全没有准备，现在损失惨重。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]我命令你现在立刻调转方向，迎战德军！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    }
                ]
            }
        ],
        "9,3": [
            {
                "type": "setValue",
                "name": "flag:MT111door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT111door===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            13
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]指挥官阁下，侧翼部队发来电报，他们称之前发现的小股德军向他们发起了攻击！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]由于我们都没能料到他们会如此冒进，侧翼部队对此完全没有准备，现在损失惨重。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]我命令你现在立刻调转方向，迎战德军！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    }
                ]
            }
        ],
        "9,4": [
            {
                "type": "setValue",
                "name": "flag:MT111door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT111door===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            13
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]指挥官阁下，侧翼部队发来电报，他们称之前发现的小股德军向他们发起了攻击！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]由于我们都没能料到他们会如此冒进，侧翼部队对此完全没有准备，现在损失惨重。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[奥金莱克]\f[auchinleck.png,0,310]我命令你现在立刻调转方向，迎战德军！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    }
                ]
            }
        ],
        "4,1": [
            {
                "type": "setValue",
                "name": "flag:MT111skill",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT111skill===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            9
                        ]
                    }
                ]
            }
        ],
        "5,1": [
            {
                "type": "setValue",
                "name": "flag:MT111skill",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT111skill===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            9
                        ]
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "setValue",
                "name": "flag:MT111skill",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT111skill===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            9
                        ]
                    }
                ]
            }
        ],
        "7,1": [
            {
                "type": "setValue",
                "name": "flag:MT111skill",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT111skill===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            9
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "4,14": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [145,145,145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,520,520, 82,366,405,589,367,150,527,527,60028,  0,361,528],
    [518, 81,80390,80388,80389,80390,150,150,150,80418,362,60036,  0,150,150],
    [  0,  0,80389,80348,80349,80388,366,365,364,363,  0, 81,  0,361, 94],
    [363,  0,80388,80356,80357,80389,366,365,364,363,  0,60028,  0,150,150],
    [ 81,80382,80390,80389,80388,80390,150,150,150,80418,224,60036,  0,361,528],
    [526,526,  0,363, 81,  0,  0,362,  0,  0,  0, 81,  0,150,150],
    [150,150,150,150,150,80394,362,80394,362,80394,60026,80734,  0,361,528],
    [529,  0,529,150,525,  0,525,80734,  0, 81,  0,80742,60026,150,150],
    [  0,551,  0, 85,  0,365,  0,80742,  0,148,566,  0,60026,  0,525],
    [529,  0,529,150,150, 81,60034,150,150,148,148,  0,362,  0,529],
    [150,150,150,150,  0,224,  0,363,526,148,148,148,148, 81,60034],
    [589,  0,  0,365,  0,  0,  0,60027, 81,148,148,148,148,405,  0],
    [ 82,60029,60030,60032,109, 85,109,60035,365,362,530,148,148,  0,  0],
    [531,532,533,534,109, 89,109,532,531,60034,533,148,588,  0, 22]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "浅滩"
}