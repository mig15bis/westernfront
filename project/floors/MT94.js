main.floors.MT94=
{
    "floorId": "MT94",
    "title": "乔治五世号-作战指挥室",
    "name": "乔治五世号-作战指挥室",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground6",
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
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        {
            "type": "function",
            "function": "function(){\nflags.learned[8]=true\n}"
        },
        "\t[系统提示]习得新技能：剑鱼818中队（150指挥点）",
        "\t[系统提示]技能效果：对面前的敌军舰艇发射5枚鱼雷，且至少会命中1枚（潜艇除外），除造成正常的鱼雷伤害外，对手闪避鱼雷数-2。可重复空袭，但不会再降低对方的闪避",
        "\t[系统提示]至此，技能数量已超过7个。这就表明，你无法在战斗中带齐所有的技能，必须有所筛选，选出最适合带入下一场战斗中的至多7个技能。实在不会选，就按照牌子上的提示选。如果忘了技能效果，可以按T键在背包里查看当前所携带技能的效果。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "12,7": [
            "\t[机场后勤,N516]长官，我方空军已就绪！",
            {
                "type": "choices",
                "text": "\t[机场后勤,N516]请选择出战空军",
                "choices": [
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
                        "text": "装备 F4F野猫",
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
                        "text": "装备 SBD无畏",
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
                        "text": "装备 TBD蹂躏者",
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
        "2,7": [
            "\t[海军参谋,N515]长官，所有军舰待命中！",
            {
                "type": "choices",
                "text": "\t[海军参谋,N515]请选择出战海军舰艇",
                "choices": [
                    {
                        "text": "装备 E级驱逐舰",
                        "icon": "classe",
                        "need": "core.hasItem('classe')&&!core.hasEquip('classe')",
                        "condition": "core.hasItem('classe')&&!core.hasEquip('classe')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "classe"
                            }
                        ]
                    },
                    {
                        "text": "装备 V级驱逐舰",
                        "icon": "classv",
                        "need": "core.hasItem('classv')&&!core.hasEquip('classv')",
                        "condition": "core.hasItem('classv')&&!core.hasEquip('classv')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "classv"
                            }
                        ]
                    },
                    {
                        "text": "装备 马汉级驱逐舰",
                        "icon": "mahan",
                        "need": "core.hasItem('mahan')&&!core.hasEquip('mahan')",
                        "condition": "core.hasItem('mahan')&&!core.hasEquip('mahan')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "mahan"
                            }
                        ]
                    },
                    {
                        "text": "装备 本森级驱逐舰",
                        "icon": "benson",
                        "need": "core.hasItem('benson')&&!core.hasEquip('benson')",
                        "condition": "core.hasItem('benson')&&!core.hasEquip('benson')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "benson"
                            }
                        ]
                    },
                    {
                        "text": "装备 爱丁堡号轻巡洋舰",
                        "icon": "edinburgh",
                        "need": "core.hasItem('edinburgh')&&!core.hasEquip('edinburgh')",
                        "condition": "core.hasItem('edinburgh')&&!core.hasEquip('edinburgh')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "edinburgh"
                            }
                        ]
                    },
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
                        "text": "卸下当前驱逐舰",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 1
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
        "7,13": [
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
                                "floorId": "MT95",
                                "loc": [
                                    7,
                                    14
                                ],
                                "direction": "down"
                            }
                        ]
                    }
                ]
            }
        ],
        "4,1": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：大量潜艇和军舰，存在少量大型军舰\n推荐携带技能：紧急补给、预警、Z字规避、扫雷、剑鱼818中队\n推荐出战装备：V级驱逐舰、诺福克号重巡洋舰、厌战号战列舰、F4F野猫、SBD无畏、剑鱼式鱼雷机"
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
    [30243,30576,30577,30577,30577,30577,30577,30577,30577,30577,30577,30577,30577,30578,30243],
    [30251,30584,30585,30585,30577,30585,30585,30585,30585,30585,30585,30585,30585,30586,30251],
    [30251,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30251],
    [30251,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30251],
    [30251,  0,  0,10136,10137,10137,10137,10137,10137,10137,10137,10138,  0,  0,30251],
    [30251,  0,  0,10144,10145,10145,10145,10145,10145,10145,10145,10146,  0,  0,30251],
    [30251,  0,  0,10144,10145,10145,10145,10145,10145,10145,10145,10146,  0,  0,30251],
    [30251,  0,515,10144,10145,10145,10145,10145,10145,10145,10145,10146,516,  0,30251],
    [30251,  0,  0,10144,10145,10145,10145,10145,10145,10145,10145,10146,  0,  0,30251],
    [30251,  0,  0,10144,10145,10145,10145,10145,10145,10145,10145,10146,  0,  0,30251],
    [30251,  0,  0,10144,10145,10145,10145,10145,10145,10145,10145,10146,  0,  0,30251],
    [30251,  0,  0,10144,10145,10145,10145,10145,10145,10145,10145,10146,  0,  0,30251],
    [30251,  0,  0,10152,10153,10153,10153,10153,10153,10153,10153,10154,  0,  0,30251],
    [30251,  0,  0,  0,  0,  0,  0,517,  0,  0,  0,  0,  0,  0,30251],
    [30259,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30259]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,559,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,90563,  0,  0,90563,  0,  0,90563,  0,  0,  0,  0],
    [  0,  0,  0,  0,90571,  0,  0,90571,  0,  0,90571,  0,  0,  0,  0],
    [  0,  0,90565,  0,  0,  0,  0,  0,  0,  0,  0,  0,90564,  0,  0],
    [  0,  0,90573,  0,  0,  0,  0,  0,  0,  0,  0,  0,90572,  0,  0],
    [  0,558,90565,  0,  0,  0,  0,10139,  0,  0,  0,  0,90564,557,  0],
    [  0,  0,90573,  0,  0,  0,  0,  0,  0,  0,  0,  0,90572,  0,  0],
    [  0,  0,90565,  0,  0,10139,  0,  0,  0,10139,  0,  0,90564,  0,  0],
    [  0,  0,90573,  0,  0,  0,  0,  0,  0,  0,  0,  0,90572,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,90566,  0,  0,90566,557,  0,90566,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,90914,  0,  0,  0,30749,30750,30751,  0,  0,  0,90915,  0,  0],
    [  0,  0,90922,  0,10163,  0,30757,30758,30759,  0,  0,  0,90923,  0,  0],
    [30828,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30828],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [30828,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30828],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,10140,  0,  0,  0,  0,  0,  0,  0],
    [30828,  0,  0,  0,  0,  0,80622,80623,80622,  0,  0,  0,  0,  0,30828],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "海洋"
}