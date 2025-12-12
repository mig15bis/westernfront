main.floors.MT50=
{
    "floorId": "MT50",
    "title": "英国南部",
    "name": "英国南部",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass3",
    "bgm": "europe3.mp3",
    "firstArrive": [
        {
            "type": "move",
            "loc": [
                1,
                6
            ],
            "time": 200,
            "keep": true,
            "steps": [
                "right:4"
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    0,
                    6
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                0,
                6
            ],
            "time": 100,
            "keep": true,
            "async": true,
            "steps": [
                "right:8"
            ]
        },
        {
            "type": "move",
            "loc": [
                5,
                6
            ],
            "time": 100,
            "keep": true,
            "async": true,
            "steps": [
                "right:1"
            ]
        },
        {
            "type": "animate",
            "name": "shootair",
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
            "name": "shootair",
            "loc": [
                6,
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
            "name": "shootair",
            "loc": [
                7,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "fire",
            "loc": [
                6,
                6
            ],
            "async": true
        },
        {
            "type": "waitAsync",
            "excludeAnimates": true
        },
        {
            "type": "setBlock",
            "number": "N574",
            "loc": [
                [
                    6,
                    6
                ]
            ]
        },
        {
            "type": "jump",
            "from": [
                8,
                6
            ],
            "to": [
                10,
                0
            ],
            "time": 200,
            "keep": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    10,
                    0
                ]
            ],
            "remove": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]击落铁门内所有敌方战斗机后，通往下一地图的机关门会自动开启，且会同时获得属性点奖励"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "0,6": {
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
    "changeFloor": {
        "14,7": {
            "floorId": "MT49",
            "loc": [
                0,
                7
            ]
        },
        "7,14": {
            "floorId": "MT51",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "0,0": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "1,0": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "2,0": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "0,1": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "1,1": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "2,1": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "12,0": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "13,0": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "14,0": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "12,1": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "13,1": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "14,1": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "0,13": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "1,13": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "2,13": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "0,14": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "1,14": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "2,14": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "12,13": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "13,13": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "14,13": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "12,14": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "13,14": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ],
        "14,14": [
            {
                "type": "setValue",
                "name": "flag:MT50fighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT50fighter===24)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:13"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            3,
                            7
                        ],
                        "time": 100,
                        "steps": [
                            "up:1",
                            "right:11"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "fighter1.mp3"
                    },
                    {
                        "type": "move",
                        "loc": [
                            4,
                            5
                        ],
                        "time": 100,
                        "steps": [
                            "down:1",
                            "right:10"
                        ]
                    },
                    "\t[系统提示]成功保护机场，获得奖励：攻击+10",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,14": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [205,205,205,140,  0,518,518,  0,518,518,  0,140,205,205,205],
    [205,205,205,140,  0,518,518,  0,518,518,  0,140,205,205,205],
    [140, 86,140,140,  0,  0,  0,  0,  0,  0,  0,140,140, 86,140],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,573,  0,  0,573,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [205,573,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,573,  0,573,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 94],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [140, 86,140,140,  0,  0,  0,  0,  0,  0,  0,140,140, 86,140],
    [205,205,205,140,566,566,140, 85,140,566,566,140,205,205,205],
    [205,205,205,140,567,567,140, 93,140,567,567,140,205,205,205]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,120749,120749,120749,120749,120749,120749,120749,120749,120749,120749,120749,120749,  0,  0],
    [  0,120881,120881,120881,120881,120881,120881,120881,120881,120881,120881,120881,120881,  0,  0],
    [  0,120925,120925,120925,120925,120925,120925,120925,120925,120925,120925,120925,120925,  0,  0],
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
    "area": "天空"
}