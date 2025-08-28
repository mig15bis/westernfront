main.floors.MT201=
{
    "floorId": "MT201",
    "title": "西班牙",
    "name": "西班牙",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10006",
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
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,10": [
            "\t[维修人员,N514]长官，所有战车准备就绪！",
            {
                "type": "choices",
                "text": "\t[维修人员,N514]请选择出战坦克",
                "choices": [
                    {
                        "text": "装备 雷诺FT17",
                        "icon": "ft17",
                        "need": "core.hasItem('ft17')&&!core.hasEquip('ft17')",
                        "condition": "core.hasItem('ft17')&&!core.hasEquip('ft17')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "ft17"
                            }
                        ]
                    },
                    {
                        "text": "装备 哈奇开斯H35",
                        "icon": "h35",
                        "need": "core.hasItem('h35')&&!core.hasEquip('h35')",
                        "condition": "core.hasItem('h35')&&!core.hasEquip('h35')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "h35"
                            }
                        ]
                    },
                    {
                        "text": "装备 十字军巡洋坦克",
                        "icon": "crusades",
                        "need": "core.hasItem('crusades')&&!core.hasEquip('crusades')",
                        "condition": "core.hasItem('crusades')&&!core.hasEquip('crusades')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "crusades"
                            }
                        ]
                    },
                    {
                        "text": "装备 瓦伦丁步兵坦克",
                        "icon": "valentine",
                        "need": "core.hasItem('valentine')&&!core.hasEquip('valentine')",
                        "condition": "core.hasItem('valentine')&&!core.hasEquip('valentine')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "valentine"
                            }
                        ]
                    },
                    {
                        "text": "装备 玛蒂尔达步兵坦克",
                        "icon": "matilda",
                        "need": "core.hasItem('matilda')&&!core.hasEquip('matilda')",
                        "condition": "core.hasItem('matilda')&&!core.hasEquip('matilda')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "matilda"
                            }
                        ]
                    },
                    {
                        "text": "装备 M3格兰特中型坦克",
                        "icon": "m3grant",
                        "need": "core.hasItem('m3grant')&&!core.hasEquip('m3grant')",
                        "condition": "core.hasItem('m3grant')&&!core.hasEquip('m3grant')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "m3grant"
                            }
                        ]
                    },
                    {
                        "text": "装备 M4谢尔曼中型坦克",
                        "icon": "m4",
                        "need": "core.hasItem('m4')&&!core.hasEquip('m4')",
                        "condition": "core.hasItem('m4')&&!core.hasEquip('m4')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "m4"
                            }
                        ]
                    },
                    {
                        "text": "装备 丘吉尔MK3步兵坦克",
                        "icon": "churchillmk3",
                        "need": "core.hasItem('churchillmk3')&&!core.hasEquip('churchillmk3')",
                        "condition": "core.hasItem('churchillmk3')&&!core.hasEquip('churchillmk3')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "churchillmk3"
                            }
                        ]
                    },
                    {
                        "text": "卸下当前坦克",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 0
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
        "10,5": [
            "\t[机场后勤,N516]长官，我方空军已就绪！",
            {
                "type": "choices",
                "text": "\t[机场后勤,N516]请选择出战空军",
                "choices": [
                    {
                        "text": "装备 P40C战斧",
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
        "10,10": [
            "\t[海军参谋,N515]长官，所有军舰待命中！",
            {
                "type": "choices",
                "text": "\t[海军参谋,N515]请选择出战海军舰艇",
                "choices": [
                    {
                        "text": "装备 诺福克号重巡洋舰",
                        "icon": "norfolk",
                        "need": "core.hasItem('norfolk')&&!core.hasEquip('norfolk')",
                        "condition": "core.hasItem('norfolk')&&!core.hasEquip('norfolk')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "norfolk"
                            }
                        ]
                    },
                    {
                        "text": "装备 厌战号战列舰",
                        "icon": "warspite",
                        "need": "core.hasItem('warspite')&&!core.hasEquip('warspite')",
                        "condition": "core.hasItem('warspite')&&!core.hasEquip('warspite')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "warspite"
                            }
                        ]
                    },
                    {
                        "text": "装备 鹰号航空母舰",
                        "icon": "eagle",
                        "need": "core.hasItem('eagle')&&!core.hasEquip('eagle')",
                        "condition": "core.hasItem('eagle')&&!core.hasEquip('eagle')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "eagle"
                            }
                        ]
                    },
                    {
                        "text": "装备 突击者号航空母舰",
                        "icon": "raider",
                        "need": "core.hasItem('raider')&&!core.hasEquip('raider')",
                        "condition": "core.hasItem('raider')&&!core.hasEquip('raider')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "raider"
                            }
                        ]
                    },
                    {
                        "text": "卸下当前巡洋舰",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 2
                            }
                        ]
                    },
                    {
                        "text": "卸下当前主力舰",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 3
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
        "5,5": [
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
                                "floorId": "MT202",
                                "loc": [
                                    7,
                                    3
                                ],
                                "direction": "down"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,7": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：均为意大利军队，战斗力低下。\n推荐携带技能：防空弹幕、空战王牌、扫雷、抵抗运动、破译、空中打击、补给线。\n推荐出战装备：M4谢尔曼、喷火5或P47B、英俊战士或P38、B25米切尔。海军随便带。"
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
    [90000,90001,90001,90001,90001,90001,90001,90001,90001,90001,90001,90001,90001,90001,90002],
    [90008,90009,90009,90009,90272,90273,90009,90009,90009,90009,90009,90009,90009,90009,90010],
    [90016,90017,90017,90017,90280,90281,80474,80474,80474,80472,80473,80472,80473,80474,90018],
    [90008,10296,  0,  0,90288,90289,80482,80482,80482,80480,80481,80480,80481,80482,90010],
    [90008,10296,  0,  0,  0,556,  0,  0,  0,  0,556,  0,  0,  0,90010],
    [90008,10296,  0,  0,  0,517,  0,  0,  0,  0,516,  0,  0,  0,90010],
    [90008,  0,  0,  0,10136,10137,10137,10137,10137,10137,10137,10138,  0,  0,90010],
    [90008,  0,  0,  0,10144,10145,10145,10145,10145,10145,10145,10146,558,10147,90010],
    [90008,  0,  0,  0,10144,10145,10145,10145,10145,10145,10145,10146,  0,  0,90010],
    [90008,  0,  0,  0,10152,10153,10153,10153,10153,10153,10153,10154,  0,  0,90010],
    [90008,  0,  0,  0,  0,514,  0,  0,  0,  0,515,  0,  0,  0,90010],
    [90008,80650,80651,  0,  0,559,  0,  0,  0,  0,559,  0,  0,  0,90010],
    [90008,80658,80659,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,90010],
    [90000,90001,90001,90001,90001,90001,90001,90190,90191,90001,90001,90001,90001,90001,90002],
    [90016,90017,90017,90017,90017,90017,90017,90198,90199,90017,90017,90017,90017,90017,90018]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,90009,90009,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,90009,90009,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,  0],
    [  0,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,  0],
    [  0,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,  0],
    [  0,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,  0],
    [  0,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,  0],
    [  0,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,  0],
    [  0,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,  0],
    [  0,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,  0],
    [  0,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,  0],
    [  0,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,80077,  0],
    [  0,  0,  0,  0,  0,  0,  0,90001,90001,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,90916,90917,90918,  0,  0,  0,  0,  0,  0],
    [  0,  0,90717,  0,  0,  0,90924,90925,90926,  0,  0,  0,  0,90717,  0],
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "陆地"
}