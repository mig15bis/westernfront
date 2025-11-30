main.floors.MT20=
{
    "floorId": "MT20",
    "title": "敦刻尔克-军营",
    "name": "敦刻尔克-军营",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
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
            "type": "playBgm",
            "name": "cao6.mp3"
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
            "type": "showui"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]新的全局商店已解锁",
        {
            "type": "openShop",
            "id": "shop2"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]本次解锁的商店中，首次出现了美国制造的武器装备。现对英美两国的武器特性进行简述。",
        "\t[系统提示]坦克类武器，英国坦克主要分为两种：攻高防低的“巡洋坦克”和攻低防高且笨重的“步兵坦克”，两种坦克分别能够克制一部分类型的敌人，但对其他类型的敌人，效果并不好。美国坦克则各方面表现较为均衡。",
        "\t[系统提示]空军类武器，英国战斗机通常在对空攻击中表现极佳，但很少挂载额外武器以应对其他类型的敌人。美国战斗机虽然对空性能稍差，但用途很广，几乎每一种战斗机都能挂载附加的对地或对海武器，使他们能够胜任各种各样的工作。轰炸机几乎是美国货完胜，如果存在分支选项，建议无脑买美国轰炸机。",
        "\t[系统提示]海军类武器目前还用不到，以后会有更详细的解释。",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]注意：由于海上撤退会被迫抛弃全部重型武器，本区域通关后将销毁玩家手中的所有坦克（可重新购买，虽然那些旧货也没必要买了），且未来较长一段时间之内不会有地面战斗。请注意金钱的分配。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "11,13": [
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
                                "floorId": "MT21",
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
        "12,13": [
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
        "9,4": [
            "\t[通讯兵,N515]总部总部，请求空中支援……",
            {
                "type": "choices",
                "text": "\t[通讯兵,N515]请选择出战空军",
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
                        "text": "装备 飓风MK1",
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
        "10,13": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：除了海军，其他的全都有\n推荐携带技能：战壕、紧急补给、防空弹幕\n推荐出战装备：雷诺FT17、P40B战斧、剑鱼式鱼雷机。"
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
    [155,155,155,155,155,155,155,155,154,154,154,154,154,145,145],
    [154,154,154,154,154,154,154,154,154,145,145,145,145,145,  0],
    [145,145,145,145,145,145,145,145,145,145,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,150,150,150,150,150,150,150,  0,554],
    [  0,553,  0,  0,553,  0,150,550,150,515,150,550,150,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [150,150,  0,  0,  0,  0,  0,  0,  0,554,  0,  0,  0,  0,553],
    [150,503,  0,  0,553,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [150,150,  0,150,150,150,150,150,  0,20104,20105,20106,20107,20108,  0],
    [150,507,  0,150,505,150,505,150,  0,20112,20113,20114,20115,20116,  0],
    [150,150,  0,150,150,150,150,150,  0,20120,20121,20122,20123,20124,555],
    [150,503,  0,150,505,150,505,150,  0,20128,20129,20130,20131,20132,  0],
    [150,150,  0,150,150,150,150,150,  0,20136,20137,20138,20139,20140,  0],
    [  0,  0,  0,  0,  0,  0,  0,553,  0,  0,10301,517,514,  0,  0],
    [  0,  0,554,  0,  0,553,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,559,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,559,559,559,  0,  0]
],
    "fgmap": [

],
    "area": "浅滩"
}