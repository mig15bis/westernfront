main.floors.MT266=
{
    "floorId": "MT266",
    "title": "多佛尔机场",
    "name": "多佛尔机场",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "cao6.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "update"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "showui"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]本关必须装备B17轰炸机才可出战。没有的请自行购买， 没钱的可以读档了。",
        {
            "type": "callSave"
        },
        "\t[突发事件]盟军高层决定为轰炸机加装甲，并统计了所有\r[yellow]返航的轰炸机\r的中弹情况。有人认为，应该在统计数据里中弹最多的部位加强装甲，但也有人认为，应当在中弹最少的部位加装甲。现在决定权在你。",
        {
            "type": "choices",
            "text": "\t[抉择]哪里的装甲需要加厚？（提示：2018年高考全国二卷语文作文）",
            "choices": [
                {
                    "text": "中弹最多的部位",
                    "action": [
                        "\t[系统提示]无事发生。"
                    ]
                },
                {
                    "text": "中弹最少的部位",
                    "action": [
                        "\t[系统提示]获得5%全战斗减伤。",
                        {
                            "type": "setValue",
                            "name": "flag:morearmor",
                            "value": "1"
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,11": [
            "\t[参谋,N517]长官，请下达指示！",
            "\t[系统提示]即将进入存档界面",
            {
                "type": "callSave"
            },
            {
                "type": "insert",
                "name": "选择技能"
            },
            {
                "type": "choices",
                "text": "是否立即前往战场？",
                "choices": [
                    {
                        "text": "还没准备好",
                        "action": []
                    },
                    {
                        "text": "现在出发",
                        "action": [
                            {
                                "type": "if",
                                "condition": "core.hasEquip('b17')",
                                "true": [
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
                                        "type": "changeFloor",
                                        "floorId": "MT267",
                                        "loc": [
                                            7,
                                            14
                                        ],
                                        "direction": "up"
                                    }
                                ],
                                "false": [
                                    "必须装备B17轰炸机才可执行任务！"
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,10": [
            "\t[机场后勤,N516]长官，我方空军已就绪！",
            {
                "type": "choices",
                "text": "\t[机场后勤,N516]请选择出战空军",
                "choices": [
                    {
                        "text": "装备 P40B战斧",
                        "icon": "p40c",
                        "need": "core.hasItem('p40c')&&!core.hasEquip('p40c')",
                        "condition": "core.hasItem('p40c')&&!core.hasEquip('p40c')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p40c"
                            }
                        ]
                    },
                    {
                        "text": "装备 飓风MK1型",
                        "icon": "hurricanemk1",
                        "need": "core.hasItem('hurricanemk1')&&!core.hasEquip('hurricanemk1')",
                        "condition": "core.hasItem('hurricanemk1')&&!core.hasEquip('hurricanemk1')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "hurricanemk1"
                            }
                        ]
                    },
                    {
                        "text": "装备 喷火MK1型",
                        "icon": "spitfiremk1",
                        "need": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
                        "condition": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "spitfiremk1"
                            }
                        ]
                    },
                    {
                        "text": "装备 飓风MK2型",
                        "icon": "hurricanemk2",
                        "need": "core.hasItem('hurricanemk2')&&!core.hasEquip('hurricanemk2')",
                        "condition": "core.hasItem('hurricanemk2')&&!core.hasEquip('hurricanemk2')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "hurricanemk2"
                            }
                        ]
                    },
                    {
                        "text": "装备 F4F野猫战斗机",
                        "icon": "f4f3",
                        "need": "core.hasItem('f4f3')&&!core.hasEquip('f4f3')",
                        "condition": "core.hasItem('f4f3')&&!core.hasEquip('f4f3')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "f4f3"
                            }
                        ]
                    },
                    {
                        "text": "装备 喷火MK5战斗机",
                        "icon": "spitfiremk5",
                        "need": "core.hasItem('spitfiremk5')&&!core.hasEquip('spitfiremk5')",
                        "condition": "core.hasItem('spitfiremk5')&&!core.hasEquip('spitfiremk5')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "spitfiremk5"
                            }
                        ]
                    },
                    {
                        "text": "装备 喷火MK9战斗机",
                        "icon": "spitfiremk9",
                        "need": "core.hasItem('spitfiremk9')&&!core.hasEquip('spitfiremk9')",
                        "condition": "core.hasItem('spitfiremk9')&&!core.hasEquip('spitfiremk9')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "spitfiremk9"
                            }
                        ]
                    },
                    {
                        "text": "装备 P47B雷电战斗机",
                        "icon": "p47b",
                        "need": "core.hasItem('p47b')&&!core.hasEquip('p47b')",
                        "condition": "core.hasItem('p47b')&&!core.hasEquip('p47b')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p47b"
                            }
                        ]
                    },
                    {
                        "text": "装备 F6F地狱猫战斗机",
                        "icon": "f6f5",
                        "need": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
                        "condition": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "f6f5"
                            }
                        ]
                    },
                    {
                        "text": "装备 英俊战士重型战斗机",
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
                        "text": "装备 P38闪电重型战斗机",
                        "icon": "p38",
                        "need": "core.hasItem('p38')&&!core.hasEquip('p38')",
                        "condition": "core.hasItem('p38')&&!core.hasEquip('p38')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p38"
                            }
                        ]
                    },
                    {
                        "text": "装备 台风攻击机",
                        "icon": "typhoon",
                        "need": "core.hasItem('typhoon')&&!core.hasEquip('typhoon')",
                        "condition": "core.hasItem('typhoon')&&!core.hasEquip('typhoon')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "typhoon"
                            }
                        ]
                    },
                    {
                        "text": "装备 蚊式战斗机",
                        "icon": "mosquito",
                        "need": "core.hasItem('mosquito')&&!core.hasEquip('mosquito')",
                        "condition": "core.hasItem('mosquito')&&!core.hasEquip('mosquito')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "mosquito"
                            }
                        ]
                    },
                    {
                        "text": "装备 B17空中堡垒",
                        "icon": "b17",
                        "need": "core.hasItem('b17')&&!core.hasEquip('b17')",
                        "condition": "core.hasItem('b17')&&!core.hasEquip('b17')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "b17"
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
        "11,11": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：德国空军精锐。\n推荐携带技能：紧急补给、防空弹幕、空战王牌、抵抗运动、破译、补给线、孟菲斯美女号\n推荐出战装备：喷火9或地狱猫、英俊战士或蚊式，B17必带。"
        ],
        "9,11": [
            {
                "type": "insert",
                "name": "退役武器"
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,150056,150057,150058,150059,150060,150061,150031,  0,  0,120911,120912,120911,120912,120911],
    [  0,150081,150082,150083,150084,150085,150086,  0,  0,  0,120955,120956,120955,120956,120955],
    [  0,  0,  0,150108,150109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [150018,150019,150020,150021,150022,150023,  0,150018,150019,150020,150021,150022,150023,  0,  0],
    [150043,150044,150045,150046,150047,150048,  0,150043,150044,150045,150046,150047,150048,  0,  0],
    [150068,150069,150070,150071,150072,150073,  0,150068,150069,150070,150071,150072,150073,  0,  0],
    [150093,150094,150095,150096,150097,150098,  0,150093,150094,150095,150096,150097,150098,  0,  0],
    [150118,150119,150120,150121,150122,150123,  0,150118,150119,150120,150121,150122,150123,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,516,  0,  0,556,556,556,  0,  0,  0],
    [150000,150001,150002,150003,150004,150005,  0,  0,  0,599,517,10147,  0,120827,  0],
    [150025,150026,150027,150028,150029,150030,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [150050,150051,150052,150053,150054,150055,  0,  0,120726,120727,120728,120729,120730,120731,120732],
    [150075,150076,150077,150078,150079,150080,  0,  0,120770,120771,120772,120773,120774,120775,120776]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [120760,120760,120760,120760,120760,120760,120760,120760,120760,120760,120760,120760,120760,120760,120760],
    [120804,120804,120804,120804,120804,120804,120804,120804,120804,120804,120804,120804,120804,120804,120804],
    [120849,120849,120849,120892,120892,120849,120849,120849,120892,120892,120849,120849,120849,120892,120892],
    [120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892],
    [120892,120849,120849,120849,120892,120892,120849,120849,120849,120892,120892,120849,120849,120849,120892],
    [120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892],
    [120849,120849,120849,120892,120892,120849,120849,120849,120892,120892,120849,120849,120849,120892,120892],
    [120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892],
    [120936,120936,120936,120936,120936,120936,120936,120936,120936,120936,120936,120936,120936,120936,120936],
    [  0,  0,  0,  0,  0,  0,559,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,120695,120696],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,120739,120740],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,120783,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,120682,120683,120684,120685,120686,120687,120688],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "陆地"
}