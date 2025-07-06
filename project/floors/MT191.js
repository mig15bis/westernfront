main.floors.MT191=
{
    "floorId": "MT191",
    "title": "地中海",
    "name": "地中海",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "hiaction2.mp3",
    "firstArrive": [
        {
            "type": "animate",
            "name": "attention",
            "loc": [
                7,
                7
            ]
        },
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "left:2"
            ]
        },
        {
            "type": "animate",
            "name": "anxious",
            "loc": [
                7,
                7
            ]
        },
        {
            "type": "playSound",
            "name": "bomber3.mp3"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "aircraft2.png",
            "loc": [
                480,
                115
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "moveImage",
            "code": 1,
            "to": [
                -195,
                115
            ],
            "time": 500
        },
        {
            "type": "hideImage",
            "code": 1,
            "time": 0
        },
        {
            "type": "animate",
            "name": "xinxinwater",
            "loc": [
                9,
                7
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 100
        },
        {
            "type": "animate",
            "name": "xinxinwater",
            "loc": [
                8,
                7
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 100
        },
        {
            "type": "animate",
            "name": "xinxinwater",
            "loc": [
                7,
                7
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 100
        },
        {
            "type": "animate",
            "name": "xinxinwater",
            "loc": [
                6,
                7
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 100
        },
        {
            "type": "animate",
            "name": "xinxinwater",
            "loc": [
                5,
                7
            ]
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "explore",
            "loc": [
                7,
                7
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    7
                ]
            ],
            "remove": true,
            "time": 500
        },
        "\t[盟军指挥官,hero]确认击沉目标，任务完成，全员返航。",
        {
            "type": "function",
            "function": "function(){\nflags.mission[28][0]=true\n}"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "0,7": [
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
                "type": "if",
                "condition": "(core.searchBlock('*Gem',['MT187','MT188','MT189','MT190','MT191']).length===0)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[28][1]=true\n}"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "((item:tea>=40)&&(status:mana>=600))",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[28][2]=true\n}"
                    }
                ]
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
                "value": "29"
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT193",
                        "loc": [
                            7,
                            13
                        ]
                    }
                ],
                "no": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT192",
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
        "14,7": {
            "floorId": "MT190",
            "loc": [
                0,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [ 89,  0,  0,  0,  0,  0,  0,498,  0,  0,  0,  0,  0,  0, 94],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
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