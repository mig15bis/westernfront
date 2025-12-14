main.floors.MT129=
{
    "floorId": "MT129",
    "title": "开罗-指挥部",
    "name": "开罗-指挥部",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10007",
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
            "type": "function",
            "function": "function(){\nflags.learned[11]=true\n}"
        },
        {
            "type": "showui"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]已获得新技能：“空中打击”",
        "\t[主动技能：空中打击]花费：200。效果：只能对面前的非boss地面部队使用。如果是坦克，则直接将其摧毁；如果无法摧毁，改为投掷一轮伤害为4倍攻击力的炸弹攻击",
        "\t[历史来源]\f[skill11.jpg,90,50]二战中绝大多数时候，盟军都是掌握着制空权的一方。当盟军在地面上的战斗中遭遇阻碍时，他们基本上会习惯性的呼叫空中支援，尤其是在面对那些他们打不过的德国装甲大军的时候。虽然没有精确制导武器，用战斗机去摧毁一辆坦克有很大的难度，但使对手瘫痪或者自乱阵脚还是能做到的。对敌后工厂的大规模空袭也能有效减少敌军武器产量，间接影响战局。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,6": [
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
        "12,6": [
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
                        "text": "装备 贼鸥式轰炸机",
                        "icon": "skua",
                        "need": "core.hasItem('skua')&&!core.hasEquip('skua')",
                        "condition": "core.hasItem('skua')&&!core.hasEquip('skua')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "skua"
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
            }
        ],
        "7,6": [
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
                                "floorId": "MT130",
                                "loc": [
                                    14,
                                    7
                                ],
                                "direction": "left"
                            }
                        ]
                    }
                ]
            }
        ],
        "5,5": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：大量德国陆军，没有空军支援\n推荐携带技能：战壕、抵抗运动、扫雷、破译、空中打击\n推荐出战装备：瓦伦丁坦克、F4F野猫、SBD无畏、剑鱼（攒钱，想浪一下也可以买飓风）"
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
    [70132,70000,70002,70002,70002,70001,70002,70003,70004,70005,70002,70002,70002,70006,70082],
    [70140,70008,70011,70011,70011,70009,70010,70011,70012,70011,70011,70011,70011,70014,70090],
    [70148,70016,70019,70019,70019,70017,70018,70019,70020,70021,70019,70019,70019,70022,70098],
    [70156,70024,70025,70026,70026,70025,70026,70027,70028,70029,70027,70028,70029,70030,70106],
    [70164,70032,70033,70034,70035,70067,70036,70065,70066,70067,70035,70036,70037,70038,70114],
    [70172,70040,70041,70042,70075,70043,70044,70041,70074,70075,70043,70044,70045,70046,70122],
    [  0,  0,514,  0,  0,  0,  0,517,  0,  0,  0,  0,516,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,60025,  0,  0,  0,  0,  0,  0,60025,  0,  0,  0,  0,  0],
    [  0,  0,60033,  0,  0,  0,  0,  0,  0,60033,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60025,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60033,  0,  0,  0],
    [80682,80682,80682,80682,80682,80682,80683,80680,80681,80682,80682,80682,80682,80682,80682],
    [80690,80690,80690,80690,80690,80690,80691,80688,80689,80690,80690,80690,80690,80690,80690]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,559,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,559,  0,  0,  0,  0,559,  0,  0,  0,  0,559,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,130042,  0,  0,  0,  0,  0,  0,130042,  0,  0,  0],
    [  0,  0,  0,  0,130063,  0,  0,  0,  0,  0,  0,130063,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,10163,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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