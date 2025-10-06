main.floors.MT47=
{
    "floorId": "MT47",
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
            "type": "showui"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        {
            "type": "function",
            "function": "function(){\nflags.learned[4]=true\n}"
        },
        "\t[系统提示]习得新技能：空战王牌",
        "\t[系统提示]\f[skill4.jpg,90,50]空战王牌（100指挥点）：只能对面前的非boss空军使用，将其秒杀。如果无法秒杀对方，则效果改为“造成3倍攻击力的伤害（战略技能）",
        "\t[历史来源]\f[skill4.jpg,90,50]王牌飞行员通常指那些技术过硬，在空战中斩获大量战果的飞行员。几乎全世界都是统一规定：经确认的击落战果总数大于等于5架，就可以被认定为王牌飞行员。这些王牌要么是有着异于常人的天赋，要么数次与死神擦肩而过。二战时期的各国也诞生过一些超级王牌，例如：埃里希·哈特曼（德国，352架），阔日杜布（苏联，62架），岩本彻三（日本，87架），詹姆斯·约翰逊（英国，38架），理查德·邦格（美国，40架），柳哲生（中国，11架）"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
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
                                "type": "sleep",
                                "time": 1000
                            },
                            {
                                "type": "animate",
                                "name": "wonder",
                                "async": true
                            },
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        1,
                                        14
                                    ],
                                    [
                                        3,
                                        13
                                    ],
                                    [
                                        5,
                                        14
                                    ],
                                    [
                                        6,
                                        13
                                    ],
                                    [
                                        7,
                                        14
                                    ],
                                    [
                                        13,
                                        13
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "move",
                                "loc": [
                                    1,
                                    14
                                ],
                                "time": 50,
                                "keep": true,
                                "async": true,
                                "steps": [
                                    "up:15"
                                ]
                            },
                            {
                                "type": "move",
                                "loc": [
                                    3,
                                    13
                                ],
                                "time": 50,
                                "keep": true,
                                "async": true,
                                "steps": [
                                    "up:15"
                                ]
                            },
                            {
                                "type": "move",
                                "loc": [
                                    5,
                                    14
                                ],
                                "time": 50,
                                "keep": true,
                                "async": true,
                                "steps": [
                                    "up:15"
                                ]
                            },
                            {
                                "type": "move",
                                "loc": [
                                    6,
                                    13
                                ],
                                "time": 50,
                                "keep": true,
                                "async": true,
                                "steps": [
                                    "up:15"
                                ]
                            },
                            {
                                "type": "move",
                                "loc": [
                                    7,
                                    14
                                ],
                                "time": 50,
                                "keep": true,
                                "async": true,
                                "steps": [
                                    "up:15"
                                ]
                            },
                            {
                                "type": "move",
                                "loc": [
                                    13,
                                    13
                                ],
                                "time": 50,
                                "keep": true,
                                "async": true,
                                "steps": [
                                    "up:15"
                                ]
                            },
                            {
                                "type": "sleep",
                                "time": 100
                            },
                            {
                                "type": "animate",
                                "name": "领域",
                                "loc": [
                                    1,
                                    12
                                ],
                                "async": true
                            },
                            {
                                "type": "sleep",
                                "time": 50
                            },
                            {
                                "type": "animate",
                                "name": "领域",
                                "loc": [
                                    7,
                                    11
                                ],
                                "async": true
                            },
                            {
                                "type": "sleep",
                                "time": 50
                            },
                            {
                                "type": "animate",
                                "name": "领域",
                                "loc": [
                                    13,
                                    11
                                ],
                                "async": true
                            },
                            {
                                "type": "sleep",
                                "time": 50
                            },
                            {
                                "type": "animate",
                                "name": "领域",
                                "loc": [
                                    9,
                                    9
                                ],
                                "async": true
                            },
                            {
                                "type": "sleep",
                                "time": 50
                            },
                            {
                                "type": "animate",
                                "name": "领域",
                                "loc": [
                                    4,
                                    8
                                ],
                                "async": true
                            },
                            {
                                "type": "sleep",
                                "time": 50
                            },
                            {
                                "type": "animate",
                                "name": "领域",
                                "loc": [
                                    8,
                                    9
                                ],
                                "async": true
                            },
                            {
                                "type": "sleep",
                                "time": 50
                            },
                            {
                                "type": "animate",
                                "name": "领域",
                                "loc": [
                                    5,
                                    6
                                ],
                                "async": true
                            },
                            {
                                "type": "sleep",
                                "time": 50
                            },
                            {
                                "type": "animate",
                                "name": "领域",
                                "loc": [
                                    13,
                                    7
                                ],
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            },
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
                                "floorId": "MT48",
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
        "6,10": [
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
        "11,11": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：只有空军，战斗机与轰炸机数量五五开\n推荐携带技能：紧急补给、防空弹幕、空战王牌\n推荐出战装备：喷火MK1"
        ],
        "3,13": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "1,14": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "5,14": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "6,13": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "7,14": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "13,13": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        }
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
    [  0,  0,311,495,  0,495,311,  0,505,  0,  0,30542,30542,30542,  0],
    [  0,495,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,495,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,495,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,495,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,311,495,  0,495,311,516,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,311,311,311,311,311,  0,  0,311,311,517,311,311,  0,  0],
    [  0,  0,  0,505,  0,  0,  0,  0,311,  0,  0,  0,311,  0,505],
    [  0,505,  0,382,  0,505,382,  0,311,10139,10168,10139,311,382,  0],
    [  0,382,  0,505,  0,382,  0,382,311,10139,10176,10139,311,  0,505]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,359,359,359,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [513,513,359,359,513,513,359,359,513,513,359,359,513,513,359],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [  0,  0,359,359,359,  0,  0,557,  0,  0,556,556,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,300,300,300,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,300,300,300,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,300,300,300,  0,  0,  0]
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10163,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "陆地"
}