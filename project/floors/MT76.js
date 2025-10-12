main.floors.MT76=
{
    "floorId": "MT76",
    "title": "冰岛",
    "name": "冰岛",
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
        "\t[世界消息]\r[aqua]苏联 加入 反法西斯同盟国阵营",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        {
            "type": "openShop",
            "id": "shop3"
        },
        "\t[系统提示]已开启新商店",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        {
            "type": "function",
            "function": "function(){\nflags.learned[7]=true\n}"
        },
        "\t[系统提示]习得新技能：扫雷（战略技能）（20指挥点）：发动后立即清除主角面前的地雷或水雷。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "4,7": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：大量潜艇和飞机，有水雷和岸炮封路。存在少量大型军舰\n推荐携带技能：紧急补给、防空弹幕、空战王牌、预警、Z字规避、扫雷\n推荐出战装备：E级驱逐舰、诺福克号重巡洋舰、厌战号战列舰"
        ],
        "4,9": [
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
        "3,6": [
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
                                "floorId": "MT77",
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
    [30516,30516,30516,30516,311,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [30524,30524,30524,30524,311,  0,  0,  0,500,  0,  0,  0,  0,  0,  0],
    [30517,30517,30517,30517,311,311,311,311,311,311,311,311,311,  0,  0],
    [30525,30525,30525,30525,311,311,311,311,311,311,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,498,  0,  0,499,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,311,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [10157,  0,  0,517,311,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [10157,  0,  0,  0,311,  0,  0,  0,  0,  0,  0,  0,499,  0,  0],
    [10157,  0,  0,  0,311,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,515,  0,  0,498,  0,  0,  0,  0,  0,  0,  0],
    [30532,30532,30532,30533,311,311,311,311,311,311,311,  0,498,  0,  0],
    [30540,30540,30540,30541,311,311,311,311,311,311,311,311,311,311,  0],
    [30516,30517,30526,30527,311,  0,  0,498,  0,  0,  0,  0,  0,  0,  0],
    [30524,30525,30534,30535,311,  0,  0,  0,  0,  0,  0,499,  0,  0,  0],
    [30540,30541,30542,30543,311,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,558,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,558,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,558,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,10163,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "浅滩"
}