main.floors.MT358=
{
    "floorId": "MT358",
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
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "4,4": [
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
                                "floorId": "MT359",
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
                        "text": "装备 J级驱逐舰",
                        "icon": "classj",
                        "need": "core.hasItem('classj')&&!core.hasEquip('classj')",
                        "condition": "core.hasItem('classj')&&!core.hasEquip('classj')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "classj"
                            }
                        ]
                    },
                    {
                        "text": "装备 弗莱彻级驱逐舰",
                        "icon": "flecher",
                        "need": "core.hasItem('flecher')&&!core.hasEquip('flecher')",
                        "condition": "core.hasItem('flecher')&&!core.hasEquip('flecher')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "flecher"
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
                        "text": "装备 克利夫兰号轻巡洋舰",
                        "icon": "cleveland",
                        "need": "core.hasItem('cleveland')&&!core.hasEquip('cleveland')",
                        "condition": "core.hasItem('cleveland')&&!core.hasEquip('cleveland')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "cleveland"
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
                        "text": "装备 巴尔的摩级重巡洋舰",
                        "icon": "baltimore",
                        "need": "core.hasItem('baltimore')&&!core.hasEquip('baltimore')",
                        "condition": "core.hasItem('baltimore')&&!core.hasEquip('baltimore')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "baltimore"
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
                        "text": "装备 乔治五世号战列舰",
                        "icon": "kinggeorge5",
                        "need": "core.hasItem('kinggeorge5')&&!core.hasEquip('kinggeorge5')",
                        "condition": "core.hasItem('kinggeorge5')&&!core.hasEquip('kinggeorge5')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "kinggeorge5"
                            }
                        ]
                    },
                    {
                        "text": "装备 北卡罗莱纳号战列舰",
                        "icon": "northcarolina",
                        "need": "core.hasItem('northcarolina')&&!core.hasEquip('northcarolina')",
                        "condition": "core.hasItem('northcarolina')&&!core.hasEquip('northcarolina')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "northcarolina"
                            }
                        ]
                    },
                    {
                        "text": "装备 衣阿华级战列舰",
                        "icon": "iowa",
                        "need": "core.hasItem('iowa')&&!core.hasEquip('iowa')",
                        "condition": "core.hasItem('iowa')&&!core.hasEquip('iowa')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "iowa"
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
                        "text": "装备 光辉号航空母舰",
                        "icon": "illustrious",
                        "need": "core.hasItem('illustrious')&&!core.hasEquip('illustrious')",
                        "condition": "core.hasItem('illustrious')&&!core.hasEquip('illustrious')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "illustrious"
                            }
                        ]
                    },
                    {
                        "text": "装备 埃塞克斯级航空母舰",
                        "icon": "essex",
                        "need": "core.hasItem('essex')&&!core.hasEquip('essex')",
                        "condition": "core.hasItem('essex')&&!core.hasEquip('essex')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "essex"
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
        "4,5": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：潜艇、飞机多，少量水面舰艇，存在未知新武器。\n推荐携带技能：扫雷、破译、从海底出击、补给线、孟菲斯美女号、海上霸主（没航母换别的）、刺猬弹\n推荐出战装备：弗莱彻级驱逐舰、巴尔的摩号重巡、埃塞克斯级航母。"
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
    [  0,  0,  0,  0,517,  0,498,  0,  0,499,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,311,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [10157,  0,  0,  0,311,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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
    [  0,  0,  0,558,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,558,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
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
    [  0,  0,  0,  0,10163,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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
    "area": "浅滩"
}