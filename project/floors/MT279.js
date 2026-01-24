main.floors.MT279=
{
    "floorId": "MT279",
    "title": "北冰洋",
    "name": "北冰洋",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "europe1.mp3",
    "firstArrive": [
        "\t[盟军指挥官,hero]按照推算，我们的主力战舰快到了。先护送商船队离开，再去歼灭沙恩霍斯特号，一劳永逸解决北冰洋的威胁。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,0": [
            {
                "type": "choices",
                "text": "\t[WARNING]再次提醒：主线boss战开始后无法返回。确认前进？",
                "choices": [
                    {
                        "text": "前进",
                        "action": [
                            {
                                "type": "changeFloor",
                                "floorId": "MT281",
                                "loc": [
                                    7,
                                    14
                                ],
                                "direction": "up"
                            }
                        ]
                    },
                    {
                        "text": "再等等",
                        "action": [
                            {
                                "type": "moveHero",
                                "steps": [
                                    "down:1"
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,2": {
            "floorId": "MT278",
            "loc": [
                14,
                12
            ]
        },
        "14,13": {
            "floorId": "MT280",
            "loc": [
                0,
                1
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "4,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT279_7_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT279_7_8===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT279_7_8",
                        "value": "0"
                    }
                ]
            }
        ],
        "5,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT279_7_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT279_7_8===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT279_7_8",
                        "value": "0"
                    }
                ]
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT279_7_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT279_7_8===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT279_7_8",
                        "value": "0"
                    }
                ]
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT279_7_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT279_7_8===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT279_7_8",
                        "value": "0"
                    }
                ]
            }
        ],
        "9,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT279_7_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT279_7_8===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT279_7_8",
                        "value": "0"
                    }
                ]
            }
        ],
        "10,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT279_7_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT279_7_8===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT279_7_8",
                        "value": "0"
                    }
                ]
            }
        ],
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT279_7_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT279_7_6===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT279_7_6",
                        "value": "0"
                    }
                ]
            }
        ],
        "8,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT279_7_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT279_7_6===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT279_7_6",
                        "value": "0"
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT279_7_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT279_7_3===7)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            3
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT279_7_3",
                        "value": "0"
                    }
                ]
            }
        ],
        "8,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT279_7_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT279_7_3===7)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            3
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT279_7_3",
                        "value": "0"
                    }
                ]
            }
        ],
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT279_7_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT279_7_3===7)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            3
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT279_7_3",
                        "value": "0"
                    }
                ]
            }
        ],
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT279_7_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT279_7_3===7)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            3
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT279_7_3",
                        "value": "0"
                    }
                ]
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT279_7_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT279_7_3===7)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            3
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT279_7_3",
                        "value": "0"
                    }
                ]
            }
        ],
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT279_7_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT279_7_3===7)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            3
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT279_7_3",
                        "value": "0"
                    }
                ]
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT279_7_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT279_7_3===7)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            3
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT279_7_3",
                        "value": "0"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,8": {
            "1": null
        },
        "7,6": {
            "1": null
        },
        "7,3": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 22, 22,216,  3, 21, 21,109,620,109, 22, 21,  3,540, 82,395],
    [  3,  6, 81,  6,  0,  3,109, 83,109,  3, 21,  6,216,  3,667],
    [ 92,  0,216,  3,235,  3,398,583,398,  3, 21,  3,  0,  3,667],
    [  3,  6,360,216, 81,  3,  3, 85,  3,  3,216, 81,255,  6,590],
    [  0,395, 81,541,  3,  3,582,583,582,  3,  3,  3,235,  3,523],
    [235,  3,  3,  0,  3,396,396,606,396,396,  3,542, 81,518,  3],
    [ 21, 21,  6,385,  3,  3,  3, 85,  3,  3,  3,235,  6,  0,518],
    [  6,  3,  3,  0,541,  3,235,605,235,  3,540,543,  3, 81,  6],
    [518,  6,541,  0,  3,  3,  3, 85,  3,  3,  3,360,  0,396,  0],
    [518,  3, 81,  6,385,277,369,605,369,277,385,  6, 81,  3,  0],
    [394, 82,385,544,  3,  3,  3, 82,  3,  3,  3,543,255,  6,542],
    [518,  3,544,  0,544, 81,  3, 81,  3,235, 81,216,  6,542,542],
    [518,  3, 82,  3,  6,235,  0,396,544,  0,  3,543,255,  3,  6],
    [  3,  3,394, 48,  3,540,  3, 81,  6,  3,  3,  6,360,583, 94],
    [518,518,360, 48,  3,540,  6,393,523,341,  3,541,393,  6,  3]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
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