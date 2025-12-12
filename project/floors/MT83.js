main.floors.MT83=
{
    "floorId": "MT83",
    "title": "斯卡帕湾",
    "name": "斯卡帕湾",
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
        {
            "type": "setValue",
            "name": "item:hood",
            "operator": "+=",
            "value": "1"
        },
        "\t[系统提示]获得试用装备：胡德号战列巡洋舰"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "3,11": [
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
                        "text": "装备 胡德号战列巡洋舰（试用）",
                        "icon": "hood",
                        "need": "core.hasItem('hood')&&!core.hasEquip('hood')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "hood"
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
        "9,11": [
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
                                "floorId": "MT84",
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
        "10,10": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：大量潜艇和军舰，存在少量大型军舰\n推荐携带技能：紧急补给、预警、Z字规避、扫雷\n推荐出战装备：V级驱逐舰、诺福克号重巡洋舰、胡德号战列巡洋舰"
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
    [  0,  0,  0,  0,  0,130154,130155,130156,130157,130158,130159,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,130175,130176,130177,130178,130179,130180,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30527],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30535],
    [130110,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30543],
    [130131,  0,  0,  0,  0,  0,  0,130110,  0,  0,  0,  0,  0,  0,  0],
    [130152,  0,  0,  0,  0,  0,  0,130131,  0,  0,  0,  0,  0,  0,  0],
    [130173,  0,  0,  0,  0,  0,  0,130152,  0,  0,  0,  0,  0,  0,  0],
    [130194,  0,  0,  0,  0,  0,  0,130173,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,130194,  0,  0,  0,  0,  0,  0,  0],
    [311,311,311,311,311,311,311,311,311,311,311,311,311,311,311],
    [30509,  0,  0,515,  0,  0,  0,  0,  0,517,  0,  0,  0,30516,30517],
    [30509,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30524,30525],
    [30509,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30516,30517],
    [30509,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30524,30525]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,311],
    [ 16,311, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,311],
    [ 16,311, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,311],
    [ 16,311, 16, 16, 16, 16, 16, 16, 16,311, 16, 16, 16, 16,311],
    [ 16,311,311, 16, 16, 16, 16, 16, 16,311, 16, 16, 16, 16,311],
    [ 16,311,311, 16, 16, 16, 16, 16, 16,311, 16, 16, 16, 16,311],
    [ 16,311,311, 16, 16, 16, 16, 16,311,311, 16, 16, 16, 16,311],
    [ 16,311,311, 16, 16, 16, 16, 16,311,311, 16, 16, 16, 16,311],
    [ 16,311,311, 16, 16, 16, 16, 16,311,311, 16, 16, 16, 16,311],
    [ 16,311,311, 16, 16, 16, 16, 16,311,311, 16, 16, 16, 16,311],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,559,  0,  0,  0,  0],
    [  0,  0,  0,559,  0,  0,  0,  0,  0,559,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,130105,130106,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,130126,130127,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,130147,130148,  0,  0,  0,  0,  0,130105,130106,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,130126,130127,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,130147,130148,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10163,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "浅滩"
}