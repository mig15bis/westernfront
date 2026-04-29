main.floors.MT436=
{
    "floorId": "MT436",
    "title": "大阪",
    "name": "大阪",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "cao7.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,0": [
            {
                "type": "setValue",
                "name": "flag:第58关通关",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:铝箔条",
                "value": "0"
            },
            {
                "type": "update"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "hideui"
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
                "type": "submitTask"
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
                "value": "60"
            },
            {
                "type": "while",
                "condition": "(flag:final!==2)",
                "data": [
                    {
                        "type": "choices",
                        "text": "\t[战斗即将接近尾声]只能有一支部队来给这场旷日持久的战争画上句号。你选择？（提示：如果选择美军，你的任务将是在占领东京时保留一部分军国主义残党，以便日后利用这份力量威胁亚洲。如果选择苏军，你的任务将是彻底清算日军的罪孽，避免军国主义畜生死灰复燃）",
                        "choices": [
                            {
                                "text": "美国",
                                "color": [
                                    0,
                                    0,
                                    255,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:final",
                                        "value": "1"
                                    },
                                    "\t[系统提示]考虑到本支线剧情过于政治敏感，为避免不必要的麻烦，作者最终决定取消这一支线任务。请重新选择。"
                                ]
                            },
                            {
                                "text": "苏联",
                                "color": [
                                    255,
                                    0,
                                    0,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:final",
                                        "value": "2"
                                    },
                                    {
                                        "type": "setHeroIcon",
                                        "name": "hero2.png"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "if",
                        "condition": "(flag:final===1)",
                        "true": [
                            {
                                "type": "changeFloor",
                                "floorId": "MT438",
                                "loc": [
                                    11,
                                    7
                                ],
                                "direction": "left"
                            }
                        ],
                        "false": [
                            {
                                "type": "changeFloor",
                                "floorId": "MT445",
                                "loc": [
                                    7,
                                    9
                                ],
                                "direction": "down"
                            }
                        ]
                    }
                ],
                "no": [
                    {
                        "type": "if",
                        "condition": "(flag:final===1)",
                        "true": [
                            {
                                "type": "changeFloor",
                                "floorId": "MT437",
                                "loc": [
                                    -1,
                                    -1
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "changeFloor",
                                "floorId": "MT444",
                                "loc": [
                                    -1,
                                    -1
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT435",
            "loc": [
                7,
                0
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
    [ 21, 21,  2,  0,648,645,  2, 89,  2,645,648,  0,  2, 21, 21],
    [  2,687, 82,705,648,645,  2,694,  2,645,648,705, 82,687,  2],
    [706,  0,  2,  0,648,645,  2,694,  2,645,648,  0,  2,  0,706],
    [ 81,  2,  2,  2,  2,  2,  2,693,  2,  2,  2,  2,  2,  2, 81],
    [684,  0,691,750,  2,647,  2,693,  2,647,  2,750,691,  0,684],
    [  2,  2,  2,687,  2,647,  2,692,  2,647,  2,687,  2,  2,  2],
    [646,  0,  2,749,  2,647,687,749,687,647,  2,749,  2,  0,646],
    [646,700, 81,684,  2,  2,  2, 82,  2,  2,  2,684, 81,700,646],
    [646,  0,  2,691,  0,747,748,702,748,747,  0,691,  2,  0,646],
    [  2,  2,  2, 81,  2,  2,  2, 81,  2,  2,  2, 81,  2,  2,  2],
    [  0,701,  0,691,686,685,  2, 21,  2,685,686,691,  0,701,  0],
    [687,  2,  2,  2,  2, 21,  2,747,  2, 21,  2,  2,  2,  2,687],
    [  0,  2,524,524,  2, 21,  2,747,  2, 21,  2,524,524,  2,  0],
    [684,  2,518,518,  2, 22,  2,  0,  2, 22,  2,518,518,  2,684],
    [  0, 81,692,  0,  2, 22,  2, 93,  2, 22,  2,  0,692, 81,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}