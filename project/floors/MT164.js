main.floors.MT164=
{
    "floorId": "MT164",
    "title": "埃及-机场",
    "name": "埃及-机场",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "cao6.mp3",
    "firstArrive": [
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
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,7": [
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
                                "floorId": "MT165",
                                "loc": [
                                    7,
                                    14
                                ],
                                "direction": "up"
                            }
                        ]
                    }
                ]
            }
        ],
        "14,7": [
            "\t[机库后勤,N516]长官，我方空军已就绪！",
            {
                "type": "choices",
                "text": "\t[机库后勤,N516]请选择出战空军",
                "choices": [
                    {
                        "text": "装备 P40B战斧",
                        "icon": "p40c",
                        "need": "core.hasItem('p40c')&&!core.hasEquip('p40c')",
                        "condition": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p40c"
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
                        "text": "装备 SBD无畏式轰炸机",
                        "icon": "sbd3",
                        "need": "core.hasItem('sbd3')&&!core.hasEquip('sbd3')",
                        "condition": "core.hasItem('sbd3')&&!core.hasEquip('sbd3')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "sbd3"
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
                        "text": "装备 剑鱼式鱼雷机",
                        "icon": "swordfish",
                        "need": "core.hasItem('swordfish')&&!core.hasEquip('swordfish')",
                        "condition": "core.hasItem('swordfish')&&!core.hasEquip('swordfish')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "swordfish"
                            }
                        ]
                    },
                    {
                        "text": "装备 TBD蹂躏者鱼雷机",
                        "icon": "tbd",
                        "need": "core.hasItem('tbd')&&!core.hasEquip('tbd')",
                        "condition": "core.hasItem('tbd')&&!core.hasEquip('tbd')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "tbd"
                            }
                        ]
                    },
                    {
                        "text": "装备 梭鱼式鱼雷机",
                        "icon": "barracuda",
                        "need": "core.hasItem('barracuda')&&!core.hasEquip('barracuda')",
                        "condition": "core.hasItem('barracuda')&&!core.hasEquip('barracuda')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "barracuda"
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
                        "text": "装备 B25米切尔轰炸机",
                        "icon": "b25",
                        "need": "core.hasItem('b25')&&!core.hasEquip('b25')",
                        "condition": "core.hasItem('b25')&&!core.hasEquip('b25')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "b25"
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
        "8,7": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：大量空军，包括战斗机和重型战斗机，少量高射炮\n推荐携带技能：防空弹幕、空战王牌、预警、破译。\n推荐出战装备：F4F野猫、英俊战士，轰炸机随便带",
            "可以在此清空技能槽，以便于玩家重新选择技能",
            {
                "type": "confirm",
                "text": "清空技能槽？",
                "yes": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.skillList=[0,0,0,0,0,0,0]\n}"
                    }
                ],
                "no": []
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,120330,120331,120332,120333,120334,120335],
    [120333,120334,120335,120336,120337,120338,120339,120340,  0,120374,120375,120376,120377,120378,120379],
    [120377,120378,120379,120380,120381,120382,120383,120384,  0,120418,120419,120420,120421,120422,120423],
    [120465,120466,120467,120468,120469,120470,120471,120472,  0,120462,120463,120464,120465,120466,120467],
    [120509,120510,120511,120512,120513,120514,120515,120516,  0,120506,120507,120508,120509,120510,120511],
    [120553,120554,120555,120556,120557,120558,120559,120560,  0,120550,120551,120552,120553,120554,120555],
    [120597,120598,120599,120600,120601,120602,120603,120604,  0,120594,120595,120596,120597,120598,120599],
    [  0,  0,517,  0,  0,120646,120647,120648,80242,120638,120639,120640,  0,  0,516],
    [  0,  0,559,  0,  0,  0,  0,  0,559,  0,  0,  0,  0,  0,559],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [120067,120068,120069,120070,120071,  0,  0,  0,  0,120067,120068,120069,120070,120071,  0],
    [120111,120112,120113,120114,120115,  0,  0,  0,  0,120111,120112,120113,120114,120115,  0],
    [120155,120156,120157,120158,120159,  0,  0,  0,  0,120155,120156,120157,120158,120159,  0],
    [120199,120200,120201,120202,120203,  0,  0,  0,  0,120199,120200,120201,120202,120203,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [120641,120642,120643,120644,120645,  0,  0,  0,  0,  0,  0,  0,120641,120642,120643],
    [120760,120760,120760,120760,120760,120760,120760,120760,120760,120760,120760,120760,120760,120760,120760],
    [120804,120804,120804,120804,120804,120804,120804,120804,120804,120804,120804,120804,120804,120804,120804],
    [120849,120849,120892,120892,120849,120849,120892,120892,120849,120849,120892,120892,120849,120849,120892],
    [120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892],
    [120892,120892,120849,120849,120892,120892,120849,120849,120892,120892,120849,120849,120892,120892,120849],
    [120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892],
    [120849,120849,120892,120892,120849,120849,120892,120892,120849,120849,120892,120892,120849,120849,120892]
],
    "fgmap": [
    [120289,120290,120291,120292,120293,120294,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,130042,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,130063,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "陆地"
}