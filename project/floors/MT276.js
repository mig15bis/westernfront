main.floors.MT276=
{
    "floorId": "MT276",
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
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]由于出航时只带了中小型舰艇并且远离陆地，本关无法装备主力舰和飞机。",
        {
            "type": "function",
            "function": "function(){\nflags.learned[19]=true\n}"
        },
        "\t[系统提示]习得新技能：刺猬弹",
        "\t[系统提示]\f[skill19.jpg,90,50]刺猬弹（100指挥点）：下一场战斗中发射“刺猬”反潜迫击炮，在首回合对潜艇造成1倍攻击力的伤害，且战后不会被狼群协同攻击。",
        "\t[历史来源]\f[skill19.jpg,90,50]“刺猬弹”是盟军的一种反潜武器，于1942年末投入实战。这种武器安装在驱逐舰之类的小型舰艇上，可以一次性把24枚炮弹全部打出，呈椭圆形弹幕落入水中，击中潜艇后触发引信并将其击沉。与常规反潜弹相比，“刺猬”可以更远发射，命中概率更大，留给潜艇逃跑的时间大幅缩减，其中一枚炮弹触碰潜艇后还可以引起连环爆炸，确保潜艇死透。二战中后期的盟军驱逐舰几乎都装备了这种反潜武器。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,11": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：少量德国海军，大量潜艇和轰炸机。\n推荐携带技能：空战王牌、Z字规避、扫雷、金牌损管、补给线、孟菲斯美女号、刺猬弹\n推荐出战装备：J级驱逐舰、克利夫兰号巡洋舰，携带卡萨布兰卡级航母。",
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
                                "floorId": "MT277",
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
        "3,8": [
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
                        "text": "返回",
                        "action": []
                    }
                ]
            }
        ],
        "7,3": [
            {
                "type": "insert",
                "name": "退役武器"
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
    [30251,90673,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,90250,30251],
    [30251,  0,  0,  0,  0,  0,  0,599,  0,  0,  0,  0,  0,90258,30251],
    [30251,  0,  0,  0,10136,10137,10137,10137,10137,10137,10138,  0,  0,  0,30251],
    [30251,  0,  0,  0,10144,10145,10145,10145,10145,10145,10146,  0,  0,  0,30251],
    [30251,  0,  0,  0,10144,10145,10145,10145,10145,10145,10146,  0,  0,  0,30251],
    [30251,  0,  0,  0,10144,10145,10145,10145,10145,10145,10146,  0,  0,  0,30251],
    [30251,  0,  0,515,10144,10145,10145,10145,10145,10145,10146,517,  0,  0,30251],
    [30251,  0,  0,  0,10144,10145,10145,10145,10145,10145,10146,  0,  0,  0,30251],
    [30251,  0,  0,  0,10144,10145,10145,10145,10145,10145,10146,  0,  0,  0,30251],
    [30251,  0,  0,  0,10144,10145,10145,10145,10145,10145,10146,  0,  0,  0,30251],
    [30251,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30251],
    [30251,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30251],
    [30259,90673,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,90673,30259]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,90666,  0,90666,  0,90666,  0,  0,  0,  0,  0],
    [  0,  0,  0,90668,  0,90674,  0,90674,  0,90674,  0,90669,  0,  0,  0],
    [  0,  0,  0,90676,  0,  0,  0,  0,  0,  0,  0,90677,  0,  0,  0],
    [  0,  0,  0,90668,  0,  0,  0,  0,  0,  0,  0,90669,  0,  0,  0],
    [  0,  0,  0,90676,  0,  0,  0,  0,  0,  0,  0,90677,  0,  0,  0],
    [  0,  0,558,90668,  0,  0,  0,  0,  0,  0,  0,90669,557,  0,  0],
    [  0,  0,  0,90676,  0,  0,  0,  0,  0,  0,  0,90677,  0,  0,  0],
    [  0,  0,  0,90668,  0,  0,  0,  0,  0,  0,  0,90669,  0,  0,  0],
    [  0,  0,  0,90676,  0,  0,  0,  0,  0,  0,  0,90677,  0,  0,  0],
    [  0,  0,  0,  0,10152,10153,10153,10153,10153,10153,10154,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,90667,  0,559,  0,90667,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,30485,30486,30487,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,30493,30494,30495,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,80622,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,80678,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,80622,  0,  0,  0,  0,  0,80622,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,80678,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,80623,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,80621,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "海洋"
}