main.floors.MT25=
{
    "floorId": "MT25",
    "title": "敦刻尔克",
    "name": "敦刻尔克",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass2",
    "bgm": "cao4.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,7": [
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
                "function": "function(){\nflags.mission[4][0]=true\n}"
            },
            {
                "type": "if",
                "condition": "(item:yellowKey>=15)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[4][1]=true\n}"
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
                "text": "   我们所有人都应对指挥官阁下及其\n英勇无畏的下属们表达最诚挚的谢意。\n如果不是他们拖住了德军的进攻，我们\n根本没有这么多宝贵的时间来完成这次\n奇迹般的撤退行动。\n   三十万大军已成功从敦刻尔克海滩\n撤回英国本土。我们输掉了法国战役，\n但我们不会就此罢休。我们还没有输掉\n整场战争！",
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
                "type": "pauseBgm"
            },
            {
                "type": "setValue",
                "name": "flag:stage",
                "value": "5"
            },
            {
                "type": "if",
                "condition": "(item:ft17>=1)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "item:ft17",
                        "value": "0"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(item:h35>=1)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "item:h35",
                        "value": "0"
                    }
                ]
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT26",
                        "loc": [
                            7,
                            7
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT25_1",
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
        "7,0": {
            "floorId": "MT24",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT25_7_6>=8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            7
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    }
                ]
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT25_7_6>=8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            7
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    }
                ]
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT25_7_6>=8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            7
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    }
                ]
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT25_7_6>=8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            7
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    }
                ]
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT25_7_6>=8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            7
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    }
                ]
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT25_7_6>=8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            7
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    }
                ]
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT25_7_6>=8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            7
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    }
                ]
            }
        ],
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT25_7_6>=8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            7
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
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
        "7,6": {
            "1": null
        },
        "8,6": {
            "0": {
                "condition": "!core.hasEnemyLeft(undefined,['MT21','MT22','MT23','MT24','MT25'])",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[4][2]=true\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 21,143, 21,143,518,143,  0, 91,  0,143,143, 27,143, 27,143],
    [ 21,143, 21,143,  0,143,401,143,401, 81, 27, 21,254, 21, 27],
    [  0,143,  0,143,254, 81,  0,143,  0,143,143,143, 81,143,143],
    [254,143,254,143,518,143, 30,143, 30,143,518, 28, 81, 30, 30],
    [345,345,345,143,143,143,143,143,143,143,143,  0,143, 30, 30],
    [143, 81,143,520,143, 31,407, 33,407, 31,143,402,143,143,205],
    [  0,  0,265,520,143,226,109, 85,109,226,143,  0,143,520,520],
    [204,143,143,143,143, 31, 85, 89, 85, 31,143, 33,143, 30,143],
    [  0, 21,206,  0,143,226,109, 85,109,226,143,  0,143,520,520],
    [ 21,  0,143,  0,143, 31,401, 34,401, 31,143,  0,143,143,205],
    [143,143,143, 81,143,143,143, 83,143,143,143,403,143, 21, 21],
    [521, 81,  0,  0, 34,143,219,  0,219,143,345,  0,143,143,143],
    [521,143,243,143,143,143,  0, 33,  0, 81,  0,345, 82,390,  0],
    [521,143,243,143,  0,204,  0,203,143,143, 81,143,143,345,345],
    [ 21,143,  0, 81,  0,143,203,345,143,518,518,518,143,347,347]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}