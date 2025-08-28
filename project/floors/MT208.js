main.floors.MT208=
{
    "floorId": "MT208",
    "title": "比金山机场",
    "name": "比金山机场",
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
            "type": "setValue",
            "name": "flag:dry",
            "value": "false"
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
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]本关开始时，将赠送试用装备“B17空中堡垒”并自动装备。此外，由于航程问题，重型战斗机无法参与本关的护航行动。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,10": [
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
                        "text": "卸下当前战斗机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 4
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
                                "floorId": "MT209",
                                "loc": [
                                    8,
                                    4
                                ],
                                "direction": "up"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,11": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：德国空军，包括轻型战斗机和重型战斗机。\n推荐携带技能：防空弹幕、空战王牌、破译、补给线。\n推荐出战装备：喷火5或P47B。"
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
    [  0,  0,  0,  0,  0,  0,  0,  0,505,  0,  0,30526,30526,30526,  0],
    [  0,  0,311,311,311,311,311,  0,  0,  0,  0,30534,30534,30534,  0],
    [  0,  0,311,573,  0,573,311,  0,505,  0,  0,30542,30542,30542,  0],
    [  0,573,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,573,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,573,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,573,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,311,573,  0,573,311,516,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,311,311,311,311,311,  0,  0,311,311,517,311,311,  0,  0],
    [  0,  0,  0,505,  0,  0,  0,  0,311,  0,  0,  0,311,  0,505],
    [  0,505,  0,  0,  0,505,  0,  0,311,10139,10168,10139,311,  0,  0],
    [  0,  0,  0,505,  0,  0,  0,  0,311,10139,10176,10139,311,  0,505]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,359,359,359,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [513,513,359,359,513,513,359,359,513,513,359,359,513,513,359],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [359,513,513,359,359,513,513,359,359,513,513,359,359,513,513],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [513,513,359,359,513,513,359,359,513,513,359,359,513,513,359],
    [  0,  0,359,359,359,  0,  0,557,  0,  0,556,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,359,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,  0,  0,  0]
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,556,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10163,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "陆地"
}