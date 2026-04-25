main.floors.MT443=
{
    "floorId": "MT443",
    "title": "东京",
    "name": "东京",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "hiaction2.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,4": [
            {
                "type": "function",
                "function": "function(){\nflags.mission[60][0]=true\n}"
            },
            {
                "type": "if",
                "condition": "(flag:clearcommunist===13)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[60][1]=true\n}"
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\nif(core.searchBlock('japinf6',['MT439','MT440','MT441','MT442','MT443']).length>=1)flags.mission[60][2]=true\n}"
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
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[世界消息]\r[aqua]日本 战败！\r",
            {
                "type": "pauseBgm"
            },
            {
                "type": "win",
                "reason": "EX Stage 日暮途穷（余烬复燃）"
            }
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT442",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "8,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "7,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "8,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "6,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "8,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT443_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT443_7_5===19)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT443_7_5",
                        "value": "0"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,5": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [109,109,109,109,109,109,109,109,109,109,109,109,109,109,109],
    [109,109,109,109,109,109,109,109,109,109,109,109,109,109,109],
    [109,109,109,109,109,109,109,109,109,109,109,109,109,109,109],
    [109,109,109,109,109,109,109,109,109,109,109,109,109,109,109],
    [109,109,109,109,109,109,  2, 89,  2,109,109,109,109,109,109],
    [109,109,109,109,109,694,694, 85,694,694,109,109,109,109,109],
    [645,645,648,702,  2,693,693,705,693,693,  2,645,645,648,702],
    [  2,  2,  2, 82,  2,692,692,705,692,692,  2,  2,  2,  2, 82],
    [  0,691,518,519,  2,687,687,688,687,687,  2,687, 81,518,691],
    [687,  2,  2,  2,  2,  2,  2, 83,  2,  2,  2,  0,  2,687,  2],
    [  0, 81,687,  0,  2,613,  2,686,  2,  0,685,  0,  2,518,518],
    [691,  2,  0,518,685,  0, 81,686, 81,  0,  2,  2,  2,  2,688],
    [518,  2,  2,  2,  2, 81,  2,685,  2,695,  2,646,  2,  0,  0],
    [646,  2,647,648,695,695,  2,  0,  2,518,  2,518,691,695,  2],
    [646,  2,647,648,524,695,  2, 93,  2,518, 81,646,  2,518,519]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}