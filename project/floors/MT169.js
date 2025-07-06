main.floors.MT169=
{
    "floorId": "MT169",
    "title": "利比亚",
    "name": "利比亚",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10006",
    "bgm": "hiaction4.mp3",
    "firstArrive": [
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
                7,
                10
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                6,
                9
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                8,
                9
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                6,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                8,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                7,
                4
            ],
            "async": true
        },
        {
            "type": "waitAsync"
        },
        "\t[德军高炮小队,flak88]敌人空袭！掩护车队！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,0": [
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
                "function": "function(){\nflags.mission[25][0]=true\n}"
            },
            {
                "type": "if",
                "condition": "(status:mana>=500)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[25][1]=true\n}"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(item:yellowKey>=20)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[25][2]=true\n}"
                    }
                ]
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
                "type": "setValue",
                "name": "flag:stage",
                "value": "26"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT171",
                        "loc": [
                            7,
                            13
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT170",
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
    "changeFloor": {
        "7,14": {
            "floorId": "MT168",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "4,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,1": {
            "0": {
                "condition": "flag:door_MT169_7_1==14",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT169_7_1",
                        "value": "null"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [150,150,150,150,150,150,150, 89,150,150,150,150,150,150,150],
    [150,  0,  0,  0,  0,  0,  0, 85,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,225,  0,  0,  0,  0,  0,225,  0,  0,  0,150],
    [150,  0,  0,  0,  0,225,  0,390,  0,225,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,225,  0,243,  0,243,  0,225,  0,  0,  0,150],
    [150,  0,  0,  0,  0,225,  0,  0,  0,225,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,404,  0,404,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,254,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,150,150,150,150,150,150, 93,150,150,150,150,150,150,150]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}