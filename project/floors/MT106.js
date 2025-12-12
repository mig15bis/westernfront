main.floors.MT106=
{
    "floorId": "MT106",
    "title": "撒哈拉沙漠",
    "name": "撒哈拉沙漠",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "bgm7.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,0": [
            {
                "type": "setValue",
                "name": "flag:第16关通关",
                "value": "1"
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
                "text": "   与德军相比，意大利军队的战斗力\n简直太弱了。照这个进度，用不了多久\n，指挥官阁下可以把这些意大利人全部\n赶出北非。\n   这个地区的战事也许不值得我们过\n多关注。显然，入侵希腊的德军更需要\n我们调集更多兵力前去抵挡。",
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
                "type": "submitTask"
            },
            {
                "type": "setValue",
                "name": "flag:stage",
                "value": "17"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT108",
                        "loc": [
                            7,
                            7
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "playBgm",
                        "name": "desert4.mp3"
                    },
                    "虽然英军被巴尔干半岛的战事耽搁，没有完全消灭北非的意军，但那也只是时间问题。",
                    "意识到即将失去大片占领区，墨索里尼立马向希特勒发去求助。",
                    "在巴尔干半岛见识到意大利的感人战力后，希特勒其实并不想再搭理这个“猪队友”，尤其是北非这块不毛之地。但看在墨索里尼是法西斯主义的先驱的份上，希特勒还是答应出兵。",
                    "德军调拨了一批部队，组成“沙漠军团”，在一名陆军中将的带领下，开赴北非，援助意军。",
                    "这支“沙漠军团”规模并不大，正常情况下肯定不是英军的对手。但他们有一位极其优秀的领导者——艾尔温·隆美尔中将。",
                    "隆美尔正式接管前线指挥权后，他仔细观察前线动向，不顾其他一众将领的一致反对，做了一个大胆的决定——在绝对劣势的情况下，发起迅猛进攻。",
                    "在当时，他还只是个名不见经传的普通中将，所有人都为他这一冒失举动捏了一把汗，认为他很快就会为自己的轻浮付出惨痛代价。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT107",
                        "loc": [
                            -1,
                            -1
                        ],
                        "direction": "down"
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "14,7": {
            "floorId": "MT104",
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
    "autoEvent": {
        "8,0": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,530,150,  0,363,  0,150, 89,150,530,530,531,392,533,532],
    [364,  0,150,534,150,363,150,589,150,150,150,150, 82,150,150],
    [ 81,150,150,150,150, 81,150,405,150,566,150,  0,362,  0,150],
    [566,  0,  0,363,576,  0,365, 82,364,  0,576,  0,150,  0,363],
    [150,150,363,150,150,150,150,150,150,150, 81,150,150,150, 81],
    [533,150,  0, 81,365,  0,  0,366,  0,  0,365,150,566,  0,363],
    [534,365,  0,150,  0,150,150, 81,150,150,  0,150,362,150,150],
    [533,150,577,150,  0,150,224,530,224,150,  0,150,  0,  0, 94],
    [150,150,566,150,366, 81,533, 82,533, 81,366,150,362,150,150],
    [ 21,362,  0,150,  0,150,224,530,224,150,  0,150,566,  0,363],
    [150,150,364,150,  0,150,150, 81,150,150,  0,150,150,150, 81],
    [530,150,  0,150,365,  0,  0,366,  0,  0,365, 81,  0,  0,363],
    [534,150,363,150, 81,150,150,150,150,150,150,150,363,150,150],
    [  0,150,  0,363,  0,  0,  0,577,  0, 21, 21,  0,  0,150,150],
    [405, 81,  0,150,533,150,150,150,150,219,219,150,150,150,150]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}