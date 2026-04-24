main.floors.MT407=
{
    "floorId": "MT407",
    "title": "易北河沿岸",
    "name": "易北河沿岸",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass3",
    "bgm": "cao3.mp3",
    "firstArrive": [
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]击败本地图中我方河岸所有敌人可开启机关门"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "14,7": {
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
        "14,9": {
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
        "14,13": {
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
        "14,5": {
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
        "14,1": {
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
        "13,0": {
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
        "13,2": {
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
        "13,4": {
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
        "13,7": {
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
        "13,10": {
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
        "13,12": {
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
        "13,14": {
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
        "6,7": [
            {
                "type": "show",
                "loc": [
                    [
                        14,
                        7
                    ]
                ]
            },
            "\t[苏联指挥官,N675]开火！",
            {
                "type": "playSound",
                "name": "katyusha.mp3"
            },
            {
                "type": "sleep",
                "time": 50
            },
            {
                "type": "playSound",
                "name": "katyusha.mp3"
            },
            {
                "type": "sleep",
                "time": 50
            },
            {
                "type": "playSound",
                "name": "katyusha.mp3"
            },
            {
                "type": "sleep",
                "time": 50
            },
            {
                "type": "playSound",
                "name": "katyusha.mp3"
            },
            {
                "type": "sleep",
                "time": 50
            },
            {
                "type": "playSound",
                "name": "katyusha.mp3"
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    11,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    11,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    11,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    11,
                    11
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    12,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    12,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    12,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    12,
                    12
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    10,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    10,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    10,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    10,
                    12
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    11,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    11,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    11,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    11,
                    12
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    12,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    12,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    12,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    12,
                    11
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    10,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    10,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    10,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    10,
                    13
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "playSound",
                "name": "move2.mp3"
            },
            {
                "type": "show",
                "loc": [
                    [
                        13,
                        0
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        13,
                        2
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        13,
                        4
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        13,
                        7
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        13,
                        10
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        13,
                        12
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        13,
                        14
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "playSound",
                "name": "move3.mp3"
            },
            {
                "type": "show",
                "loc": [
                    [
                        14,
                        1
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        14,
                        5
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        14,
                        9
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        14,
                        13
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "aim",
                "loc": [
                    12,
                    0
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "aim",
                "loc": [
                    10,
                    1
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "aim",
                "loc": [
                    11,
                    2
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "aim",
                "loc": [
                    10,
                    4
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "aim",
                "loc": [
                    12,
                    4
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "aim",
                "loc": [
                    11,
                    5
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "aim",
                "loc": [
                    11,
                    7
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "aim",
                "loc": [
                    11,
                    9
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "aim",
                "loc": [
                    10,
                    10
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "aim",
                "loc": [
                    12,
                    10
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "aim",
                "loc": [
                    11,
                    12
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "aim",
                "loc": [
                    10,
                    13
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "aim",
                "loc": [
                    12,
                    13
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "explore2",
                "loc": [
                    12,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore2",
                "loc": [
                    10,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore2",
                "loc": [
                    11,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore2",
                "loc": [
                    10,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore2",
                "loc": [
                    12,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore2",
                "loc": [
                    11,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore2",
                "loc": [
                    11,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore2",
                "loc": [
                    11,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore2",
                "loc": [
                    10,
                    10
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore2",
                "loc": [
                    12,
                    10
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore2",
                "loc": [
                    11,
                    12
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore2",
                "loc": [
                    10,
                    13
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore2",
                "loc": [
                    12,
                    13
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        12,
                        0
                    ],
                    [
                        10,
                        1
                    ],
                    [
                        11,
                        2
                    ],
                    [
                        10,
                        4
                    ],
                    [
                        12,
                        4
                    ],
                    [
                        11,
                        5
                    ],
                    [
                        11,
                        7
                    ],
                    [
                        11,
                        9
                    ],
                    [
                        10,
                        10
                    ],
                    [
                        12,
                        10
                    ],
                    [
                        11,
                        12
                    ],
                    [
                        10,
                        13
                    ],
                    [
                        12,
                        13
                    ]
                ],
                "remove": true,
                "time": 500
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "move",
                "loc": [
                    14,
                    7
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "left:6"
                ]
            }
        ],
        "7,7": [
            {
                "type": "setValue",
                "name": "flag:第54关通关",
                "value": "1"
            },
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
                "type": "update"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "hideui"
            },
            {
                "type": "update"
            },
            {
                "type": "sleep",
                "time": 1000
            },
            {
                "type": "playSound",
                "name": "158-Skill02.mp3"
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "win.png",
                "sloc": [
                    0,
                    0,
                    null
                ],
                "loc": [
                    -60,
                    120,
                    600,
                    240
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "scaleImage",
                "code": 1,
                "center": [
                    80,
                    160
                ],
                "scale": 0.5,
                "time": 500
            },
            {
                "type": "function",
                "function": "function(){\nvar a = core.taskSystem.checkTask(0) ? 1 : 0,\n\tb = core.taskSystem.checkTask(1) ? 1 : 0,\n\tc = core.taskSystem.checkTask(2) ? 1 : 0;\ncore.setFlag('@temp@A', a + b + c);\n}"
            },
            {
                "type": "if",
                "condition": "(temp:A>=1)",
                "true": [
                    {
                        "type": "playSound",
                        "name": "xinxinbazhe.mp3"
                    },
                    {
                        "type": "showImage",
                        "code": 2,
                        "image": "star.png",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            15,
                            50,
                            90,
                            90
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "if",
                        "condition": "(temp:A>=2)",
                        "true": [
                            {
                                "type": "playSound",
                                "name": "xinxinbazhe.mp3"
                            },
                            {
                                "type": "showImage",
                                "code": 3,
                                "image": "star.png",
                                "sloc": [
                                    0,
                                    0,
                                    null
                                ],
                                "loc": [
                                    175,
                                    50,
                                    90,
                                    90
                                ],
                                "opacity": 1,
                                "time": 500
                            },
                            {
                                "type": "if",
                                "condition": "(temp:A>=3)",
                                "true": [
                                    {
                                        "type": "playSound",
                                        "name": "xinxinbazhe.mp3"
                                    },
                                    {
                                        "type": "showImage",
                                        "code": 4,
                                        "image": "star.png",
                                        "sloc": [
                                            0,
                                            0,
                                            null
                                        ],
                                        "loc": [
                                            325,
                                            50,
                                            90,
                                            90
                                        ],
                                        "opacity": 1,
                                        "time": 500
                                    }
                                ],
                                "false": []
                            }
                        ],
                        "false": []
                    }
                ],
                "false": []
            },
            {
                "type": "showImage",
                "code": 5,
                "image": "abstract.png",
                "loc": [
                    40,
                    480
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "moveImage",
                "code": 5,
                "to": [
                    40,
                    20
                ],
                "time": 500
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "drawTextContent",
                "text": "   德军组织起的零散防御根本没法阻挡\n指挥官阁下的扫荡。在易北河的另一端\n，我们遇见了一支友善的苏军部队。\n   来自地球两端的两国军队居然碰到了\n一起，猜猜这意味着什么？我们把德国\n人彻底包围了！战争马上要结束了！管\n他那么多干什么，我们与这些苏联朋友\n热情拥抱，交换香烟和美酒。不得不说\n，那些伏特加的酒劲真大！",
                "left": 60,
                "top": 100,
                "align": "left",
                "fontSize": 20,
                "color": [
                    0,
                    0,
                    0,
                    1
                ]
            },
            {
                "type": "wait"
            },
            {
                "type": "clearMap"
            },
            {
                "type": "submitTask"
            },
            {
                "type": "moveImage",
                "code": 5,
                "to": [
                    40,
                    480
                ],
                "time": 500
            },
            {
                "type": "hideImage",
                "code": 5,
                "time": 0
            },
            {
                "type": "sleep",
                "time": 2000
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
                "type": "hideImage",
                "code": 1,
                "time": 0
            },
            {
                "type": "hideImage",
                "code": 2,
                "time": 0
            },
            {
                "type": "hideImage",
                "code": 3,
                "time": 0
            },
            {
                "type": "hideImage",
                "code": 4,
                "time": 0
            },
            {
                "type": "setHeroOpacity",
                "opacity": 0
            },
            {
                "type": "setValue",
                "name": "flag:stage",
                "value": "56"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT409",
                        "loc": [
                            7,
                            7
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "showImage",
                        "code": 1,
                        "image": "joinforces.jpg",
                        "loc": [
                            0,
                            0
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    "1945年4月25日，一支美军侦察队与苏军在易北河畔一座断桥上不期而遇，东西两线并肩作战的两军进行了历史性握手。这张历史性的照片很快传遍全世界。",
                    "这意味着负隅顽抗的纳粹德国被拦腰截成两段，柏林已被重重包围，反法西斯战争已胜利在望。",
                    "为了庆祝这次意义重大的会师，斯大林命令莫斯科礼炮齐鸣，并发表了《告盟军和红军书》，向双方士兵致敬：",
                    "“我代表苏联政府向你们，红军和我们盟国军队的指挥员和战士们讲话。在欧洲进行解放战争的各盟国的战无不胜的军队击溃了德军，在德国境内会师了。我们的任务和我们的职责，就是要彻底打垮敌人，迫使他们放下武器，无条件投降。红军一定会彻底完成这一任务，彻底履行它对我国人民和爱好自由的各国人民所担负的这个职责。我谨向目前与苏军在德国境内并肩作战，并充满决心彻底履行自己职责的我们盟国的英勇部队致敬。”",
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
                        "type": "hideImage",
                        "code": 1,
                        "time": 0
                    },
                    "尽管两个国家很快便分道扬镳，成为死敌，但这些曾并肩作战留下的宝贵回忆并不会被政治原因抹消。参加过这场战争的士兵们都记得：我们曾共同为正义而战，为伟大的反法西斯战争而抛头颅洒热血，我们曾是一条战线的盟友。",
                    "至少现在，这两队士兵无需思考其他事情。双方官兵互相拥抱，合影留念，他们各自举起盛满威士忌/伏特加的酒杯，开怀畅饮。语言不通没问题，感情都在酒杯里。他们那喜悦的笑容十分纯粹，没有任何杂质。",
                    "2022年4月25日，也就是“易北河会师”77周年纪念日上，俄罗斯外交部发布纪念帖，将握手的照片重新展现在世人面前，并附上标签：“我们还记得”“我们曾是盟友”。",
                    "现在，双方军队还剩下最后一个任务：通往柏林的道路一马平川，竞速开始了。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT408",
                        "loc": [
                            -1,
                            -1
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,0": {
            "floorId": "MT406",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT407_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT407_5_7===13)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    }
                ]
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT407_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT407_5_7===13)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    }
                ]
            }
        ],
        "4,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT407_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT407_5_7===13)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    }
                ]
            }
        ],
        "4,1": [
            {
                "type": "setValue",
                "name": "flag:door_MT407_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT407_5_7===13)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    }
                ]
            }
        ],
        "1,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT407_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT407_5_7===13)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    }
                ]
            }
        ],
        "1,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT407_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT407_5_7===13)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    }
                ]
            }
        ],
        "0,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT407_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT407_5_7===13)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    }
                ]
            }
        ],
        "1,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT407_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT407_5_7===13)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    }
                ]
            }
        ],
        "0,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT407_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT407_5_7===13)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    }
                ]
            }
        ],
        "2,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT407_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT407_5_7===13)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    }
                ]
            }
        ],
        "4,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT407_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT407_5_7===13)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    }
                ]
            }
        ],
        "3,14": [
            {
                "type": "setValue",
                "name": "flag:door_MT407_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT407_5_7===13)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    }
                ]
            }
        ],
        "0,13": [
            {
                "type": "setValue",
                "name": "flag:door_MT407_5_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT407_5_7===13)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "5,7": {
            "0": null,
            "1": null
        },
        "7,0": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 91,141,639,640,  0,151,151,151,151,151,  0,  0,250,548,  0],
    [  0,141,639,640,228,151,151,151,151,151,275,  0,  0,  0,673],
    [ 11,141,141,141, 81,151,151,151,151,151,  0,270,  0,548,  0],
    [  0,279,  0, 21, 21,151,151,151,151,151,  0,  0,  0,  0,  0],
    [  0,279,  0, 21, 21,151,151,151,151,151,228,  0,250,548,  0],
    [ 81,141,141,141,141,151,151,151,151,151,  0,265,  0,  0,673],
    [228,  0,141,665,  0,151,151,151,151,151,  0,  0,  0,  0,  0],
    [  0,275, 82,  0,666, 85,  0, 89,  0,  0,  0,228,  0,548,677],
    [228,  0,141,665,  0,151,151,151,151,151,  0,  0,  0,  0,  0],
    [ 81,141,141,141,141,151,151,151,151,151,  0,265,  0,  0,673],
    [ 11,  0,275,641,641,151,151,151,151,151,228,  0,250,548,  0],
    [141,141,141,141, 81,151,151,151,151,151,  0,  0,  0,  0,  0],
    [ 22, 21, 21,141,228,151,151,151,151,151,  0,270,  0,548,  0],
    [279,141,141,141,  0,151,151,151,151,151,275,  0,250,  0,673],
    [642,642,  0,391,  0,151,151,151,151,151,  0,  0,  0,548,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}