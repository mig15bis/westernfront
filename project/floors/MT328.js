main.floors.MT328=
{
    "floorId": "MT328",
    "title": "卡昂",
    "name": "卡昂",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "cao2.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,7": {
            "floorId": "MT326",
            "loc": [
                14,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,9": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,8": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,9": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,8": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,7": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,6": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,9": [
            {
                "type": "setValue",
                "name": "flag:MT328baseC",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT328baseC===12)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            7
                        ],
                        "time": 50
                    },
                    {
                        "type": "playSound",
                        "name": "048-Explosion01.mp3"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 200,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                8,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "pak40",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                9,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "flak88",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT328baseC===34)",
                        "true": [
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    7
                                ],
                                "time": 50
                            },
                            {
                                "type": "playSound",
                                "name": "048-Explosion01.mp3"
                            },
                            {
                                "type": "vibrate",
                                "direction": "horizontal",
                                "time": 200,
                                "speed": 10,
                                "power": 10,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        8,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "tigere",
                                "loc": [
                                    [
                                        8,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        7,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        5,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5d",
                                "loc": [
                                    [
                                        6,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer150",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
                                "loc": [
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT328baseC===54)",
                                "true": [
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "getarea.mp3"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            4
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            10
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            3,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "cao2.mp3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "4,7": [
            {
                "type": "pauseBgm"
            },
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "right:4"
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    3,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "wonder",
                "loc": "hero",
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "playBgm",
                "name": "wot1.mp3",
                "keep": true
            },
            {
                "type": "playSound",
                "name": "048-Explosion01.mp3"
            },
            {
                "type": "vibrate",
                "direction": "horizontal",
                "time": 200,
                "speed": 10,
                "power": 10,
                "async": true
            },
            {
                "type": "setBlock",
                "number": "attankinf",
                "loc": [
                    [
                        7,
                        6
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "attankinf",
                "loc": [
                    [
                        8,
                        7
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "attankinf",
                "loc": [
                    [
                        7,
                        8
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "attankinf",
                "loc": [
                    [
                        6,
                        7
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "howitzer150",
                "loc": [
                    [
                        5,
                        5
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "howitzer150",
                "loc": [
                    [
                        9,
                        5
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "howitzer150",
                "loc": [
                    [
                        5,
                        9
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "howitzer150",
                "loc": [
                    [
                        9,
                        9
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "pak40",
                "loc": [
                    [
                        9,
                        7
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "pak40",
                "loc": [
                    [
                        7,
                        9
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "pak40",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "pak40",
                "loc": [
                    [
                        7,
                        5
                    ]
                ],
                "time": 0
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]击败敌人的多次反扑以占领区域",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "autoEvent": {
        "10,4": {},
        "10,5": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [635,635,149,  0, 11,607,  0,270,149, 22,643, 21,149,637,637],
    [635,635,149,275,149,149,149, 82, 11,228, 21,643,149,637,637],
    [  0,218,149, 11,109,109,109,109,109,109,109, 11,149,149,227],
    [218,228, 81,266,109,643,590,519,590,643,109,388, 11,275,643],
    [ 82,149,149,643,109,109,109, 85,109,109,109,109,109,149, 11],
    [643, 81,204,388,109,  0,  0,  0,  0,  0,109,341,109,632,606],
    [152, 11,152,152,109,  0,  0,  0,  0,  0,109,341,109, 81,149],
    [ 92,  0,265,265, 86,  0,  0,  0,  0,  0, 85,341,109,606,248],
    [152, 11,152,152,109,  0,  0,  0,  0,  0,109,341,109,664,149],
    [  0, 81,204,388,109,  0,  0,  0,  0,  0,109,341,109,643,149],
    [203,149,149,149,109,109,109, 85,109,109,109,109,109, 11,149],
    [  0,266,643,275,109,643,590,519,590,643,109,388,  0,227,643],
    [149,149,149, 11,109,109,109,109,109,109,109, 81,149,149,149],
    [638,638,149,275,643, 11,270, 82,607,606,  0,632, 81,636,636],
    [638,638, 81,663,149,149,149,149,149,149,149,643,149,636,636]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,10169,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "area": "陆地"
}