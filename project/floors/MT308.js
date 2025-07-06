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
        "\t[盟军指挥官,hero]到这里就差不多完成任务了。清空弹舱，准备返航。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,14": [
            {
                "type": "function",
                "function": "function(){\nflags.mission[42][0]=true\n}"
            },
            {
                "type": "if",
                "condition": "((item:tea>=80)&&(item:cola>=10))",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[42][1]=true\n}"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "((item:yellowKey>=15)&&(item:blueKey>=8))",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[42][2]=true\n}"
                    }
                ]
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
                            7
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
    [606,  0,  0,371,  0,  0,369, 81,369,  0,  0,371,606,140, 21],
    [140,140, 81,140,606,140,140,140,243,140, 81,140,  0, 81,243],
    [540,140,  0,140,390,140,518,518,372,140,  0,140,369,140, 21],
    [540,140,371,140,543,140, 22,140,140,140,390,140, 81,140,140],
    [372, 81,  0, 81,543,140,140,140, 21,140,518,140,  0,  0,243],
    [243,140,243,140,543,  0,390, 21, 21,140,518,140,243,140,140],
    [140,140,371,140,243,140,140,140,243,140,243,140,  0,542,542],
    [540,243,  0,140,  0,140,243,140,371, 81,  0,140,140,390,140],
    [140,140,140,406, 81,  0,  0,391,  0,390,140,243,  0,544,544],
    [518,518,390,  0,  0,390,140, 81,140,  0,140,140,140,243,140],
    [140,140,140,391,140,  0,140, 81,140,243,  0,406,  0,606,  0],
    [243,542,140,  0,140,243,140, 82,140,140,369,140,140,140,390],
    [542,  0, 81,  0,140,643,140, 89,140,541,541,140,390, 22, 22]
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
    "area": "浅滩"
}