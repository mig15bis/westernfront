main.floors.MT327=
{
    "floorId": "MT327",
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
        "14,7": {
            "floorId": "MT326",
            "loc": [
                0,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
                "name": "flag:MT327baseB",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT327baseB===8)",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "me109k6",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
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
                        "number": "fw190f8",
                        "loc": [
                            [
                                9,
                                7
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
                        "condition": "(flag:MT327baseB===14)",
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
                                        7,
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
                                        7
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer4h",
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
                                "number": "panzer4h",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "number": "grenadier",
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
                                "condition": "(flag:MT327baseB===30)",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[45][1]=true\n}"
                                    },
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
                                            4,
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
        "10,7": [
            {
                "type": "pauseBgm"
            },
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "left:4"
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    10,
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
                "type": "setBlock",
                "number": "motorinf",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "time": 0,
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
                "time": 0,
                "async": true
            },
            {
                "type": "setBlock",
                "number": "motorinf",
                "loc": [
                    [
                        8,
                        6
                    ]
                ],
                "time": 0,
                "async": true
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
                "time": 0,
                "async": true
            },
            {
                "type": "setBlock",
                "number": "motorinf",
                "loc": [
                    [
                        8,
                        8
                    ]
                ],
                "time": 0,
                "async": true
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
                "time": 0,
                "async": true
            },
            {
                "type": "setBlock",
                "number": "motorinf",
                "loc": [
                    [
                        6,
                        8
                    ]
                ],
                "time": 0,
                "async": true
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
                "time": 0,
                "async": true
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
                "type": "waitAsync"
            },
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]击败敌人的多次反扑以占领区域"
        ]
    },
    "autoEvent": {
        "4,4": {},
        "4,5": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 22,635,635,146,146,146,146,146,606,146,248,147,580, 22,580],
    [146,146,228,146,  0,632,275, 81,606, 11,204,147,  0,266,  0],
    [663,  0,518,146,  0,109,109,109,109,109,266,147,147, 81,147],
    [ 81,146,146, 11,390,109,635,635,635,109,643,632,643, 11,643],
    [  0,265,  0,390,109,109,109, 85,109,109,109,152,152,152, 81],
    [518,109,109,109,109,  0,  0,  0,  0,  0,109,643,632, 11,643],
    [227,109,637,638,109,  0,  0,  0,  0,  0,109, 81,152,152,152],
    [248,109,637,638, 85,  0,  0,  0,  0,  0, 86, 11,250,250, 94],
    [227,109,637,638,109,  0,  0,  0,  0,  0,109, 81,152,152,152],
    [518,109,109,109,109,  0,  0,  0,  0,  0,109,643,265,266,643],
    [  0,265,  0,390,109,109,109, 85,109,109,109,152,152,152, 81],
    [146,146,146, 81,390,109,636,636,636,109,643,663,218,203,643],
    [605,605,341,146,  0,109,109,109,109,109, 81,147,147,147,147],
    [ 11,146,146,146,632, 82,590,146,638,250,275,250, 11,147,248],
    [228,  0,  0,265,  0,146,590,146,638,146,518,147,637, 11,637]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,10171,  0,  0,  0,  0,  0,  0,  0],
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