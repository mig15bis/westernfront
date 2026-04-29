main.floors.MT157=
{
    "floorId": "MT157",
    "title": "旗舰指挥室",
    "name": "旗舰指挥室",
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
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,12": [
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
                        "text": "装备 谢菲尔德号轻巡洋舰",
                        "icon": "sheffield",
                        "need": "core.hasItem('sheffield')&&!core.hasEquip('sheffield')",
                        "condition": "core.hasItem('sheffield')&&!core.hasEquip('sheffield')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "sheffield"
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
        "7,2": [
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
                                "floorId": "MT158",
                                "loc": [
                                    0,
                                    7
                                ],
                                "direction": "right"
                            }
                        ]
                    }
                ]
            }
        ],
        "5,1": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：大量德军潜艇、小型战舰和空军，有部分大型战舰出没。\n推荐携带技能：防空弹幕、空战王牌、预警、Z字规避、扫雷、破译、从海底出击。\n推荐出战装备：V级驱逐舰、谢菲尔德号轻巡洋舰、厌战号战列舰",
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
    [30243,30576,30577,30577,30577,30577,30577,30577,30577,30577,30577,30577,30577,30578,30243],
    [30251,30584,30585,30585,30585,30585,30585,30585,30585,30585,30585,30585,30585,30586,30251],
    [30251,  0,  0,  0,  0,  0,  0,517,  0,  0,  0,  0,  0,  0,30251],
    [30251,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30251],
    [30251,  0,  0,10136,10137,10137,10137,10137,10137,10137,10137,10138,  0,  0,30251],
    [30251,  0,  0,10144,10145,10145,10145,10145,10145,10145,10145,10146,  0,  0,30251],
    [30251,  0,  0,10144,10145,10145,10145,10145,10145,10145,10145,10146,  0,  0,30251],
    [30251,  0,  0,10144,10145,10145,10145,10145,10145,10145,10145,10146,557,  0,30251],
    [30251,  0,  0,10144,10145,10145,10145,10145,10145,10145,10145,10146,  0,  0,30251],
    [30251,  0,  0,10144,10145,10145,10145,10145,10145,10145,10145,10146,  0,  0,30251],
    [30251,  0,  0,10144,10145,10145,10145,10145,10145,10145,10145,10146,  0,  0,30251],
    [30251,  0,  0,10144,10145,10145,10145,10145,10145,10145,10145,10146,  0,  0,30251],
    [30251,  0,  0,  0,  0,  0,  0,515,  0,  0,  0,  0,  0,  0,30251],
    [30251,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30251],
    [30259,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30259]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,559,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,90666,  0,559,  0,90666,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,90674,  0,  0,  0,90674,  0,  0,  0,  0,  0],
    [  0,  0,90668,  0,  0,  0,  0,  0,  0,  0,  0,  0,90669,  0,  0],
    [  0,  0,90676,  0,  0,  0,  0,  0,  0,  0,  0,  0,90677,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,90668,  0,  0,  0,  0,  0,  0,  0,  0,  0,90669,  0,  0],
    [  0,  0,90676,  0,  0,  0,  0,  0,  0,  0,  0,  0,90677,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,10152,10153,10153,10153,10153,10153,10153,10153,10154,  0,  0,  0],
    [  0,  0,  0,  0,  0,90667,  0,559,  0,90667,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,90914,  0,  0,30485,30486,30487,  0,  0,90915,  0,  0,  0],
    [  0,  0,  0,90922,  0,10163,30493,30494,30495,  0,  0,90923,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,80622,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,80586,  0,  0,80586,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,80622,80586,  0,80588,80589,80586,  0,  0,80622,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,80586,  0,80586,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,80586,  0,  0,80586,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,80620,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "海洋"
}