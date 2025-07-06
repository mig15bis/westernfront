main.floors.MT450=
{
    "floorId": "MT450",
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
    "bgm": "bgm4.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,10": [
            {
                "type": "function",
                "function": "function(){\nflags.mission[60][0]=true\n}"
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
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[世界消息]\r[aqua]日本 战败！\r",
            {
                "type": "pauseBgm"
            },
            {
                "type": "win",
                "reason": "EX Stage 日暮途穷（清算之时）"
            }
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT448",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT450_7_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT450_7_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT450_7_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT450_7_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT450_7_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT450_7_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT450_7_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT450_7_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT450_7_9",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,9": {
            "0": {
                "condition": "flag:door_MT450_7_9==9",
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
                        "name": "flag:door_MT450_7_9",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,10": {
            "0": {
                "condition": "!core.hasEnemyLeft(undefined,['MT446','MT447','MT448','MT449','MT450'])",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[60][2]=true\n}"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [648,  2,646,646, 22,688,  2, 91,  2, 21, 21, 21, 21,  2,646],
    [684,  2,  2,  2,  2, 81,  2,  0,  2,  2,691,  2,  0,  2,646],
    [  0,690,686,  0,  0,685,  2,684,  2,685,  0,  2,686,  2,687],
    [  2,  2, 81,  2,  2,  2,  2,684,  2, 81,  2,  2, 81,  2, 81],
    [647,647,648,  2,690,  0,687,  0,687,  0,690,  0,685,  0, 21],
    [686,  2,  2,  2,  0,  2,  2, 82,  2,  2,  2,  2,  2, 81,  2],
    [  0,685,  0,690,  0,  2,691,688,691,  2,645,645,  2,687, 21],
    [ 81,  2,  2,  2,  2,  2,693,694,693,  2,647,647,  2,  2,685],
    [687,648,648,645,645,  2,695,705,695,  2, 21,702,686, 81,  0],
    [109,109,109,109,109,109,109, 85,109,109,109,109,109,109,109],
    [109,109,109,109,109,109,109, 89,109,109,109,109,109,109,109],
    [109,109,109,109,109,109,109,109,109,109,109,109,109,109,109],
    [109,109,109,109,109,109,109,109,109,109,109,109,109,109,109],
    [109,109,109,109,109,109,109,109,109,109,109,109,109,109,109],
    [109,109,109,109,109,109,109,109,109,109,109,109,109,109,109]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}