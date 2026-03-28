main.floors.MT347=
{
    "floorId": "MT347",
    "title": "法国",
    "name": "法国",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "7days4.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,8": [
            {
                "type": "playSound",
                "name": "technology.mp3"
            },
            {
                "type": "function",
                "function": "function(){\nflags.learned[24]=true\n}"
            },
            "\t[系统提示]习得新技能：翼尖挑衅",
            "\t[系统提示]\f[skill25.png,90,50]翼尖挑衅（200指挥点）：将面前的V1导弹向前推1格并引爆。如果引爆地点是可破墙壁或非boss敌人，可将其摧毁（不获得金经）",
            "\t[历史来源]\f[skill25.png,90,50]V1导弹的速度相对缓慢，可以被盟军主力战斗机勉强追上，但爆炸产生的冲击波仍然会掀翻后面的战斗机。因此，有技术过硬的飞行员发明了一个招式：用战机翼尖挑翻导弹，使其失控坠毁。当然，这对飞行员的技术和心理素质要求也非常高——一枚800公斤重的炸弹就在你旁边飞，稍有不慎就会把你炸的灰都不剩，任谁都难免紧张。",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "14,7": [
            {
                "type": "setValue",
                "name": "flag:第46关通关",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:铝箔条",
                "value": "0"
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
                "text": "   事实证明，德军的新型武器是一群只\n会欺负平民的纸老虎，完全无法阻止指\n挥官阁下的推进！\n   这种准头没保障的导弹给我们造成的\n伤害很有限，但拦截起来着实有些费劲。\n我们需要更快的战斗机或是更有效的拦\n截手段来尽可能避免这些无谓的损失。\n但放眼全局，这些导弹对战争的结果没\n有任何影响。",
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
                "value": "48"
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
                        "floorId": "MT349",
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
                        "floorId": "MT348",
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
        "0,2": {
            "floorId": "MT346",
            "loc": [
                14,
                2
            ]
        },
        "0,12": {
            "floorId": "MT346",
            "loc": [
                14,
                12
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "4,11": [
            {
                "type": "setValue",
                "name": "flag:door_MT347_5_10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT347_5_10===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            10
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT347_5_10",
                        "value": "0"
                    }
                ]
            }
        ],
        "6,11": [
            {
                "type": "setValue",
                "name": "flag:door_MT347_5_10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT347_5_10===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            10
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT347_5_10",
                        "value": "0"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "5,10": {
            "1": null
        },
        "14,8": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 22, 22, 22, 22,  0,143, 21,143,637,635,143,637,637,637,228],
    [143,143,143,143,663,143, 21,143,227,635,143,143,143,143, 81],
    [ 92,  0,  0,  0,227,  0, 21,143, 81,143,143,  0,235,  0,  0],
    [143,143,668,143,143, 81,143,143,275,  0,143,  0,143,143,143],
    [635,635,635,248,143,  0,228,  0,  0,  0, 81,  0,143,218,607],
    [ 82,143,143,143,143,  0,143, 81,143,143,143,  0,227,607,638],
    [  0,  0,373,235,  0,  0,143,228,518,518,143,143, 81,143,143],
    [143,143,143,143,143,143,143,143,143,143,143,370,744,270, 89],
    [637,218,637,143,643,551,643,143,  0,  0,  0,  0,143,143,143],
    [ 81,143,143,143,643,668,643,143, 82,143,143,406,143, 21, 21],
    [  0,  0,  0,143,143, 85,143,143,519,638,143,  0,228,  0,  0],
    [143,143,  0,143,412,390,412,143,667,638,668,  0,143,  0,  0],
    [ 92,143,227,143,  0,270,  0,143,519,638,143,  0,143,143,266],
    [  0,143, 81,143,143, 82,143,143,143,143,143,228,143,  0,  0],
    [  0,228,  0,  0,  0,  0,  0,143,636,636,636,637,143, 21, 21]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}