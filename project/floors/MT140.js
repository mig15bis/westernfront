main.floors.MT140=
{
    "floorId": "MT140",
    "title": "珍珠港",
    "name": "珍珠港",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "medaction1.mp3",
    "firstArrive": [
        "\t[盟军指挥官,hero]那些轰炸机好像是朝着亚利桑那号战列舰去的……"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,14": {
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
        "14,2": {
            "floorId": "MT139",
            "loc": [
                0,
                7
            ]
        },
        "2,0": {
            "floorId": "MT141",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,10": [
            {
                "type": "setValue",
                "name": "flag:MT140tsk",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT140tsk===9)",
                "true": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                1,
                                14
                            ]
                        ],
                        "floorId": "MT140",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "stukadive.mp3"
                    },
                    {
                        "type": "jump",
                        "from": [
                            1,
                            14
                        ],
                        "to": [
                            3,
                            14
                        ],
                        "time": 500,
                        "keep": true
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "explore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "bigexplore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "setBlock",
                        "number": "N574",
                        "loc": [
                            [
                                2,
                                14
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                14
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    "\t[盟军指挥官,hero]该死，还是没救下亚利桑那号。这是一场惨败，我们什么都做不了……"
                ]
            }
        ],
        "3,10": [
            {
                "type": "setValue",
                "name": "flag:MT140tsk",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT140tsk===9)",
                "true": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                1,
                                14
                            ]
                        ],
                        "floorId": "MT140",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "stukadive.mp3"
                    },
                    {
                        "type": "jump",
                        "from": [
                            1,
                            14
                        ],
                        "to": [
                            3,
                            14
                        ],
                        "time": 500,
                        "keep": true
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "explore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "bigexplore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "setBlock",
                        "number": "N574",
                        "loc": [
                            [
                                2,
                                14
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                14
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    "\t[盟军指挥官,hero]该死，还是没救下亚利桑那号。这是一场惨败，我们什么都做不了……"
                ]
            }
        ],
        "5,10": [
            {
                "type": "setValue",
                "name": "flag:MT140tsk",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT140tsk===9)",
                "true": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                1,
                                14
                            ]
                        ],
                        "floorId": "MT140",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "stukadive.mp3"
                    },
                    {
                        "type": "jump",
                        "from": [
                            1,
                            14
                        ],
                        "to": [
                            3,
                            14
                        ],
                        "time": 500,
                        "keep": true
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "explore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "bigexplore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "setBlock",
                        "number": "N574",
                        "loc": [
                            [
                                2,
                                14
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                14
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    "\t[盟军指挥官,hero]该死，还是没救下亚利桑那号。这是一场惨败，我们什么都做不了……"
                ]
            }
        ],
        "0,11": [
            {
                "type": "setValue",
                "name": "flag:MT140tsk",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT140tsk===9)",
                "true": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                1,
                                14
                            ]
                        ],
                        "floorId": "MT140",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "stukadive.mp3"
                    },
                    {
                        "type": "jump",
                        "from": [
                            1,
                            14
                        ],
                        "to": [
                            3,
                            14
                        ],
                        "time": 500,
                        "keep": true
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "explore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "bigexplore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "setBlock",
                        "number": "N574",
                        "loc": [
                            [
                                2,
                                14
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                14
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    "\t[盟军指挥官,hero]该死，还是没救下亚利桑那号。这是一场惨败，我们什么都做不了……"
                ]
            }
        ],
        "2,11": [
            {
                "type": "setValue",
                "name": "flag:MT140tsk",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT140tsk===9)",
                "true": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                1,
                                14
                            ]
                        ],
                        "floorId": "MT140",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "stukadive.mp3"
                    },
                    {
                        "type": "jump",
                        "from": [
                            1,
                            14
                        ],
                        "to": [
                            3,
                            14
                        ],
                        "time": 500,
                        "keep": true
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "explore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "bigexplore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "setBlock",
                        "number": "N574",
                        "loc": [
                            [
                                2,
                                14
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                14
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    "\t[盟军指挥官,hero]该死，还是没救下亚利桑那号。这是一场惨败，我们什么都做不了……"
                ]
            }
        ],
        "4,11": [
            {
                "type": "setValue",
                "name": "flag:MT140tsk",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT140tsk===9)",
                "true": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                1,
                                14
                            ]
                        ],
                        "floorId": "MT140",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "stukadive.mp3"
                    },
                    {
                        "type": "jump",
                        "from": [
                            1,
                            14
                        ],
                        "to": [
                            3,
                            14
                        ],
                        "time": 500,
                        "keep": true
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "explore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "bigexplore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "setBlock",
                        "number": "N574",
                        "loc": [
                            [
                                2,
                                14
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                14
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    "\t[盟军指挥官,hero]该死，还是没救下亚利桑那号。这是一场惨败，我们什么都做不了……"
                ]
            }
        ],
        "1,12": [
            {
                "type": "setValue",
                "name": "flag:MT140tsk",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT140tsk===9)",
                "true": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                1,
                                14
                            ]
                        ],
                        "floorId": "MT140",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "stukadive.mp3"
                    },
                    {
                        "type": "jump",
                        "from": [
                            1,
                            14
                        ],
                        "to": [
                            3,
                            14
                        ],
                        "time": 500,
                        "keep": true
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "explore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "bigexplore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "setBlock",
                        "number": "N574",
                        "loc": [
                            [
                                2,
                                14
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                14
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    "\t[盟军指挥官,hero]该死，还是没救下亚利桑那号。这是一场惨败，我们什么都做不了……"
                ]
            }
        ],
        "3,12": [
            {
                "type": "setValue",
                "name": "flag:MT140tsk",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT140tsk===9)",
                "true": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                1,
                                14
                            ]
                        ],
                        "floorId": "MT140",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "stukadive.mp3"
                    },
                    {
                        "type": "jump",
                        "from": [
                            1,
                            14
                        ],
                        "to": [
                            3,
                            14
                        ],
                        "time": 500,
                        "keep": true
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "explore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "bigexplore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "setBlock",
                        "number": "N574",
                        "loc": [
                            [
                                2,
                                14
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                14
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    "\t[盟军指挥官,hero]该死，还是没救下亚利桑那号。这是一场惨败，我们什么都做不了……"
                ]
            }
        ],
        "5,12": [
            {
                "type": "setValue",
                "name": "flag:MT140tsk",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT140tsk===9)",
                "true": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                1,
                                14
                            ]
                        ],
                        "floorId": "MT140",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "stukadive.mp3"
                    },
                    {
                        "type": "jump",
                        "from": [
                            1,
                            14
                        ],
                        "to": [
                            3,
                            14
                        ],
                        "time": 500,
                        "keep": true
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "explore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "animate",
                        "name": "bigexplore",
                        "loc": [
                            2,
                            14
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "setBlock",
                        "number": "N574",
                        "loc": [
                            [
                                2,
                                14
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                14
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    "\t[盟军指挥官,hero]该死，还是没救下亚利桑那号。这是一场惨败，我们什么都做不了……"
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [566,140, 91,140,593, 81,  0,140, 27, 22,140,  0, 33,566, 21],
    [566,140,  0,140,  0,140,  0,140,594,140,140,594,140,140,140],
    [566,140,  0,595,  0,140,  0,140, 33,  0,140,  0,  0,  0, 94],
    [595,140, 82,140,140,140,595,140,  0,593, 81,  0,140,140,140],
    [  0,593,  0,140, 21,140,  0,140,140,140,140,  0, 31, 31, 21],
    [140, 81,140,140,  0,594,  0,  0,  0,  0,  0,594,140,140,140],
    [  0,594,  0,140,  0,140,140, 81,140,140,140,  0, 33,566, 21],
    [ 27,140,  0,140,525,140,  0,594,  0, 21,140,  0,311,311,311],
    [ 22,140,  0, 81,525,140,311,311,311,311,311, 82,311,311,499],
    [311,311, 86,311,311,311,311,574, 21, 21,594,  0,574,498,574],
    [  0,594,  0,594,  0,594,311,500,140,140,140, 81,140,140,140],
    [594,  0,595,  0,595,  0,311,574, 29,595,  0,593,  0, 30, 30],
    [  0,595,  0,595,  0,595,311,500, 29,140,140, 81,140,140,140],
    [  0,  0,  0,  0,  0,  0,311,574, 29,140, 30,593,140,525,525],
    [  0,594,584,  0,  0,  0,311,574,574,140, 30,  0,595,525,525]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16, 16,152,152,152,152,152,152,152,152,152],
    [152,152,152,152,152,152,152,152,152,152,152,152,152,152,152],
    [152,152,152,152,152,152,152,152,152,152,152,152,152,152,152],
    [152,152,152,152,152,152,152,152,152,152,152,152,152,152,152],
    [152,152,152,152,152,152,152,152,152,152,152,152,152,152,152],
    [152,152,152,152,152,152,152,152,152,152,152,152,152,152,152],
    [152,152,152,152,152,152,152,152,152,152,152,152,152,152,152],
    [152,152,152,152,152,152,152,152,152,152,152,152,152,152,152],
    [152,152,152,152,152,152,152,152,152,152,152,152,152, 16, 16],
    [152,152,152,152,152,152,152, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574,  0],
    [  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "天空"
}