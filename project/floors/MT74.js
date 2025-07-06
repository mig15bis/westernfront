main.floors.MT74=
{
    "floorId": "MT74",
    "title": "塔兰托",
    "name": "塔兰托",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "5minutes.mp3",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up:2"
            ]
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                7,
                13
            ]
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                1,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                4,
                5
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                4,
                8
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                6,
                10
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                9,
                3
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                9,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                12,
                3
            ],
            "async": true
        },
        {
            "type": "waitAsync"
        },
        "\t[意大利守军]敌人空袭！快拉响防空警报！",
        "\t[盟军指挥官,hero]所有战机，按预定计划行动！把这里炸个天翻地覆！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌方舰船没有任何防备，战斗力大减！",
        {
            "type": "setEnemy",
            "id": "italydd3",
            "name": "atk",
            "value": "50",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd3",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italycl1",
            "name": "hp",
            "value": "25000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italycl1",
            "name": "atk",
            "value": "80",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italycl1",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italycl2",
            "name": "atk",
            "value": "100",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italycl2",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyca1",
            "name": "hp",
            "value": "60000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyca1",
            "name": "atk",
            "value": "150",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyca1",
            "name": "special",
            "value": "[]"
        },
        {
            "type": "callBook"
        },
        "\t[系统提示]消灭所有敌人以完成任务"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,13": {
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
        "7,14": [
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
                "type": "showImage",
                "code": 1,
                "image": "taranto.jpg",
                "loc": [
                    0,
                    0
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            {
                "type": "sleep",
                "time": 1000
            },
            "1940年11月11日，来自英国“光辉”号航空母舰的攻击机群，分两个波次，于午夜时分袭击了塔兰托港。",
            "意军对此没有任何防备，慌乱中组织起来的防空火力零零散散，根本构不成威胁。",
            "短短65分钟内，3艘战列舰、2艘巡洋舰和2艘驱逐舰燃起大火，整个军港一片狼藉，一些岸上设施也遭到损毁。而英军仅仅损失2架“剑鱼”式轰炸机。",
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
            "意大利海军在一夜之间就失去了地中海的制海权，而英军则取得了完全胜利，并开启了使用航空母舰攻击敌方海军基地的先河。",
            "这一成就很快传开。而在一年后，这一举动将被地球另一端的某个岛国效仿，成为震惊并影响全世界的重大事件。",
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "setCurtain",
                "time": 500
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
                "type": "function",
                "function": "function(){\nflags.mission[11][0]=true\n}"
            },
            {
                "type": "function",
                "function": "function(){\nflags.skillList=[0,0,0,0,0,0,0]\n}"
            },
            {
                "type": "update"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "hideStatusBar"
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
                "function": "function(){\nvar a = flags.mission[core.getFlag('stage')];\ncore.setFlag('@temp@A', a[0] + a[1] + a[2]);\n}"
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
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "sleep",
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
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "sleep",
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
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "sleep",
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
                "type": "pauseBgm"
            },
            {
                "type": "setValue",
                "name": "flag:stage",
                "value": "12"
            },
            {
                "type": "setValue",
                "name": "item:illus1941",
                "operator": "-=",
                "value": "1"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT76",
                        "loc": [
                            7,
                            7
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "playBgm",
                        "name": "wots6.mp3"
                    },
                    "截至1941年，希特勒几乎已经吞并了整个欧洲，仅剩英国还在负隅顽抗。",
                    "虽然英国取得了不列颠空战的胜利，但仅凭英国一己之力，对抗纳粹入侵，压力还是太大，目前的局势也仅仅是僵持不下，没条件发动反击。",
                    "为此，英国首相丘吉尔一直在积极劝说美国加入这场战争。然而美国受制于他们的“祖训”，独守一方净土，坚持不对外宣战，最多只能出售武器和货物。",
                    "不过，英国还是收获了一份意外之喜。美国虽然没有加入战争，但在1941年6月22日，德军的“巴巴罗萨”行动正式开始，装甲大军浩浩荡荡开进了苏联国土。苏联卫国战争正式打响，英国多了一份对抗纳粹的有效助力。",
                    "此时的苏联尚未做好应对战争的准备，尽管苏军殊死抵抗，但防线还是一溃千里，急需增援。",
                    "英国及其他西方国家按理来说应该与共产主义制度的苏联格格不入，但丘吉尔认为，纳粹是全人类共同的敌人，这种生死存亡的关头就不应该内讧，必须联合起来对抗希特勒。",
                    "于是，大西洋上又多了一条航线。这条航线从英国本土出发，越过北冰洋，直达苏联本土，船上满载着援助苏联的物资。",
                    "这是一条十分危险的航线。它几乎横穿德国和芬兰的领地，那里布满了德军水雷、潜艇、岸炮、军舰和飞机。",
                    "这些货船必须安全抵达苏联，它们直接决定着苏军前线无数战士的生死。",
                    "北极护航战，打响了。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT75",
                        "loc": [
                            -1,
                            -1
                        ],
                        "direction": "down"
                    }
                ]
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "1,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT74_7_13",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT74_7_13",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT74_7_13",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT74_7_13",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT74_7_13",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT74_7_13",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT74_7_13",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,1": [
            {
                "type": "setValue",
                "name": "flag:door_MT74_7_13",
                "operator": "+=",
                "value": "1"
            }
        ],
        "12,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT74_7_13",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,0": [
            {
                "type": "setValue",
                "name": "flag:door_MT74_7_13",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,13": {
            "0": {
                "condition": "flag:door_MT74_7_13==10",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT74_7_13",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,  0,392,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,392,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,331,  0,  0,234,  0,  0],
    [  0,  0,392,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,331,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,234,  0,  0,  0,  0,  0,  0,  0,399,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,212,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,331,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [109,109,109,109,109,109,109, 85,109,109,109,109,109,109,109],
    [109,109,109,109,109,109,109, 89,109,109,109,109,109,109,109]
],
    "bgmap": [
    [311,311,311,311,311,311,311,311,311,311,311,311,311,311,311],
    [311,311,311,311,311,311,311,311,311,311,311,311,311,311,311],
    [ 16, 16,311,311, 16, 16, 16, 16, 16, 16,311,311, 16, 16, 16],
    [ 16, 16,311,311, 16, 16, 16, 16, 16, 16,311,311, 16, 16, 16],
    [ 16, 16,311,311, 16, 16, 16, 16, 16, 16,311,311, 16, 16, 16],
    [ 16, 16,311,311, 16, 16, 16, 16, 16, 16,311,311, 16, 16, 16],
    [ 16, 16,311,311, 16, 16, 16, 16, 16, 16,311, 16, 16, 16, 16],
    [ 16, 16,311,311, 16, 16, 16, 16, 16, 16,311, 16, 16, 16, 16],
    [ 16, 16,311,311, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16,311, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
],
    "fgmap": [

],
    "area": "海洋"
}