main.floors.MT385=
{
    "floorId": "MT385",
    "title": "阿登",
    "name": "阿登",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "snow",
    "bgm": "cao2.mp3",
    "firstArrive": [
        {
            "type": "text",
            "text": "\t[艾森豪威尔]\f[eisenhower.png,0,310]太迟了！包围圈已经收拢，以你的兵力难以突破。计划变更，现在坚守巴斯托涅，尽你所能击退德军的反扑！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[巴顿]\f[patton.png,0,310]坚持住！我的装甲部队正在赶来支援的路上！",
            "pos": [
                100,
                300,
                380
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,6": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]突击虎的380毫米口径大炮，一发就能干掉你大半管血，但装填速度是相当慢的。要想以最小的损失摧毁它们，最好的方法就是别让它们开出第二炮！"
        ],
        "1,11": [
            {
                "type": "function",
                "function": "function(){\nflags.mission[52][0]=true\n}"
            },
            {
                "type": "if",
                "condition": "(flag:mission52tsk3>=2)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[52][2]=true\n}"
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
                "text": "   巴斯托涅已经被包围，不过我们相\n信，有指挥官阁下在，他们一定能坚持\n到增援到来。\n   我们没有预料到德军还有能力发起\n反击！现在阿登地区到处都是德军的重\n型坦克，情况不是很乐观。巴顿将军的\n装甲部队正在赶来的路上。在此期间，\n我们得把手头的反坦克武器部署到敌人\n的必经之路上，不能在这个节骨眼上败\n给德国人。",
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
                "value": "53"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT386",
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
                        "name": "wot1.mp3"
                    },
                    "1944年12月16日，德军发起代号“秋雾”的反击行动。希特勒不顾下属的一致反对，集结纳粹德国最后的军事力量，向阿登地区的盟军发起最后的反击。",
                    "希特勒认为，他能在1940年从阿登地区奇兵突袭，将盟军一口气赶到敦刻尔克，那么现在也能行。他的目的，是一举拿下安特卫普，制造第二个“敦刻尔克大撤退”。",
                    "此时盟军在阿登地区的兵力也比较薄弱，情报部门也没有得知德军的计划。当德军成群结队的重型坦克出现在他们面前时，盟军士兵们没有任何还手之力，巴斯托涅的美军被包围。",
                    "然而，面对德军投下的劝降信，守城的美军师长仅仅回了一个单词：“Nuts!（翻译：神经病！）”。他们将坚守到最后一刻，绝不向纳粹低头。",
                    "与此同时，盟军的增援部队收到消息，火速赶往增援，与德军先头部队迎面相撞。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT386",
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
            "floorId": "MT381",
            "loc": [
                0,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "0,12": [
            {
                "type": "setValue",
                "name": "flag:mission52tsk3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,14": [
            {
                "type": "setValue",
                "name": "flag:mission52tsk3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [635,638,637,  0,160,518,518,518,160, 21, 21,160,637,636,637],
    [160,160,160,665,160,160,227,160,160,247,247,160,279,270,  0],
    [341,  0,160,  0,275, 21,  0,228, 81,275,  0,160,160, 81,160],
    [341,270, 81,  0,160,  0,279,  0,160,  0, 21,  0,664,643,  0],
    [341,  0,160,228,160,160,160,160,160,160,  0,279,160,  0,643],
    [160,160,160,  0,275,  0,636,160,636,160,228,160,160,160,160],
    [518,160,  0,270,  0,275,664, 81,279,160,  0,636,160,601,611],
    [518,160,  0,279,160,160,160,279,  0,160,275,  0, 82,  0, 94],
    [270, 81,228,160,160,160, 22,  0,664, 81,  0,275,160,  0,611],
    [519,160,  0,643,160,160,270,160,160,160,  0, 21,160,160,160],
    [160,160,160,  0,669,  0,  0,279,160,160, 21,  0,160, 21, 22],
    [664, 89,160, 81,160,160,227,643,160,160,160,228, 81,275, 21],
    [412,664,160,665,160,279,  0,227,160,279,  0,  0,160,160,160],
    [ 82,160,160,  0,160, 82,160,160,160,160, 81,160,160,635, 22],
    [275,  0,228,  0,160,666,638,638,635,160,  0,412,  0,635,638]
],
    "bgmap": [
    [  0,171,  0,  0,  0,  0,110019,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,171,171,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,110019,  0],
    [  0,171,171,171,  0,  0,  0,  0,  0,171,171,171,  0,  0,  0],
    [171,171,171,171,  0,  0,  0,  0,  0,171,171,171,  0,  0,  0],
    [  0,171,171,171,171,  0,  0,  0,  0,  0,110019,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,110019,  0,  0,  0,  0],
    [  0,  0,  0,172,172,  0,  0,  0,  0,  0,  0,  0,  0,  0,172],
    [  0,  0,  0,172,  0,  0,  0,172,172,  0,  0,  0,  0,172,172],
    [110019,  0,  0,  0,  0,  0,172,172,172,172,  0,  0,  0,172,172],
    [  0,  0,  0,  0,  0,  0,172,172,172,172,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,110019,  0,  0,  0,  0,  0,110019,  0],
    [  0,  0,  0,171,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,171,171,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,110019,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "area": "陆地"
}