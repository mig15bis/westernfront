main.floors.MT308=
{
    "floorId": "MT308",
    "title": "加莱",
    "name": "加莱",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "hiaction4.mp3",
    "firstArrive": [
        {
            "type": "animate",
            "name": "wonder",
            "loc": "hero",
            "async": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "explore3",
            "loc": "hero",
            "async": true
        },
        {
            "type": "setValue",
            "name": "status:hp",
            "operator": "-=",
            "value": "22800"
        },
        {
            "type": "waitAsync"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,14": [
            {
                "type": "setValue",
                "name": "flag:第41关通关",
                "value": "1"
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
                "text": "   指挥官阁下刚刚完成了对加莱地区的\n最后一轮打击。虽然轰炸效果已无所谓\n，但他的表现仍然值得称赞。\n   欺诈行动进行的很顺利，敌人似乎真\n的以为我们马上要登陆加莱。侦察机拍\n下的照片表明，他们又把一批驻防诺曼\n底的部队调去了加莱。即便如此，明天\n仍会是一场恶战。今晚让炊事班做点好\n的，对很多人来说这是最后一餐了。",
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
                "type": "submitTask"
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
                "type": "setValue",
                "name": "flag:stage",
                "value": "43"
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
                        "floorId": "MT310",
                        "loc": [
                            7,
                            3
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT309",
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
            "floorId": "MT307",
            "loc": [
                7,
                14
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
    [ 21, 21,140,369, 21, 21,140, 91,140,540,541,542,543,544,625],
    [140,243,140, 81,140,140,140,  0,140,140,140,390,140,140,140],
    [341, 21,  0,371,  0,  0,370, 81,370,  0,  0,371,341,140, 21],
    [140,140, 81,140,606,140,140,140,243,140, 81,140,  0, 81,243],
    [540,140,  0,140,390,140,518,518,372,140, 21,140,369,140, 21],
    [540,140,371,140,543,140, 22,140,140,140,390,140, 81,140,140],
    [372, 81,  0, 81,543,140,140,140, 21,140,518,140,  0, 22,243],
    [243,140,243,140,543,  0,390, 21, 21,140,518,140,243,140,140],
    [140,140,371,140,243,140,140,140,243,140,243,140,  0,542,542],
    [540,243,  0,140,  0,140,243,140,371, 81, 21,140,140,390,140],
    [140,140,140,406, 81,  0,  0,391,  0,390,140,243,  0,544,544],
    [518,518,390,  0,  0,390,140,  0,140,  0,140,140,140,243,140],
    [140,140,140,391,140,  0,140, 81,140,243,  0,406,  0,606,  0],
    [524,542,140, 21,140,243,140, 82,140,140,370,140,140,140,390],
    [542,243, 81, 22,140,643,140, 89,140,541,541,140,524,524,390]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [40030,40030,40030,40031,  0,  0,  0,  0,  0,  0,  0,  0,  0,40029,40030],
    [305,305,305,40039,  0,  0,  0,  0,  0,  0,40029,40030,40030,305,305],
    [305,305,305,305,40030,40030,40030,40030,40030,40030,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305,305,305]
],
    "fgmap": [

],
    "area": "天空"
}