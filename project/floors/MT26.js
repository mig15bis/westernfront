main.floors.MT26=
{
    "floorId": "MT26",
    "title": "多佛尔港",
    "name": "多佛尔港",
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
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]本区域存在海战（反潜）环节，因此玩家需要在商店中购买驱逐舰参战。",
        "\t[系统提示]英国海军舰艇的战斗力通常较美国海军略逊一筹，但差距不会太大，且价格较为低廉。但美国武器有一个重要的缺陷——鱼雷",
        "\t[系统提示]目前，由于鱼雷引信存在严重的质量问题，会导致你的舰艇和飞机发射的鱼雷都是哑弹。因此，除神剧难度外，不要指望美国鱼雷能够打出伤害。",
        "\t[系统提示]但这并不代表美国货完全不能用。对于不使用鱼雷攻击的作战单位来说，这一致命缺点便不复存在，且游戏中后期的商店将会出售能够解决“哑弹”问题的选项。不过就现在来说，请尽量不要使用进行鱼雷攻击的美国武器！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,2": [
            "\t[机场后勤,N516]长官，我方空军已就绪！",
            {
                "type": "choices",
                "text": "\t[机场后勤,N516]请选择出战空军",
                "choices": [
                    {
                        "text": "装备 斗士MK2",
                        "icon": "wrestler",
                        "need": "core.hasItem('wrestler')&&!core.hasEquip('wrestler')",
                        "condition": "core.hasItem('wrestler')&&!core.hasEquip('wrestler')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "wrestler"
                            }
                        ]
                    },
                    {
                        "text": "装备 P40C战斧",
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
        "11,8": [
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
                                "floorId": "MT27",
                                "loc": [
                                    7,
                                    0
                                ],
                                "direction": "down"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,9": [
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
                        "text": "卸下当前驱逐舰",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 1
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
        "10,9": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：飞机居多，少量潜艇\n推荐携带技能：战壕、紧急补给、防空弹幕\n推荐出战装备：飓风MK1、E级驱逐舰。"
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
    [  0,  0,  0,311,  0,  0,  0,  0,  0,  0,  0,311,  0,  0,  0],
    [  0,  0,  0,311,  0,  0,  0,  0,  0,  0,  0,311,  0,  0,  0],
    [  0,  0,  0,311,311,311,311,516,311,311,311,311,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  3,  3,  3,  3,  0,  3,  3,  3,  3,  0,517,  0,  0,  3],
    [  0,  3,  3,  3,  3,  0,515,  0,  0,  3,  3,  3,  3,  3,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  0,499,  0,  0,  3,  0,  0],
    [  3,  0,  0,500,  0,  0,  3,  0,  0,  0,  0,499,  3,  0,  0],
    [  3,499,  0,  0,  0,499,  3,499,  0,  0,  0,  0,  3,499,  0],
    [  3,  0,  0,  0,  0,  0,  3,  0,  0,  0,  0,  0,  3,  0,  0],
    [  3,  0,  0,  0,  0,  0,  3,  0,  0,  0,  0,  0,  3,  0,  0]
],
    "area": "浅滩",
    "bgmap": [
    [305,305,305,305,359,359,359,359,359,359,359,305,305,305,305],
    [305,305,305,305,359,359,359,359,359,359,359,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,559,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,556,305,305,305],
    [305, 16, 16, 16, 16,305,305, 16, 16, 16,556,305,305,305, 16],
    [305, 16, 16, 16, 16,558,305, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10163,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
]
}