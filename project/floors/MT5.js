main.floors.MT5=
{
    "floorId": "MT5",
    "title": "马奇诺防线",
    "name": "马奇诺防线",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "firstArrive": [
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[世界消息]\r[red]荷兰  投降！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "14,7": [
            {
                "type": "function",
                "function": "function(){\nflags.mission[1][0]=true\n}"
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
                "text": "   作为其军官生涯中的第一场实战，\n指挥官阁下十分出色地完成了本次作战\n任务。\n   我们的马奇诺防线被证实的确是坚\n不可摧的，但它并没有成功阻挡敌军的\n进攻步伐——因为他们从侧翼绕过来了！",
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
                "type": "sleep",
                "time": 7500
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
                "value": "2"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT7",
                        "loc": [
                            7,
                            7
                        ]
                    }
                ],
                "no": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT6",
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
        "0,7": {
            "floorId": "MT4",
            "loc": [
                14,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "11,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT5_13_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT5_12_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "13,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT5_13_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT5_12_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT5_13_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT5_12_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "13,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT5_13_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT5_12_10",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "14,12": {
            "0": {
                "condition": "!core.hasEnemyLeft(undefined,['MT1','MT2','MT3','MT4','MT5'])",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[1][2]=true\n}"
                    }
                ]
            },
            "1": {
                "condition": "core.maps.searchBlockWithFilter(x=>['轻坦','中坦','重坦','坦歼'].includes(core.material.enemys[x?.event?.id]?.type),['MT1','MT2','MT3','MT4','MT5']).length===0",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[1][1]=true\n}"
                    }
                ]
            }
        },
        "13,7": {
            "0": {
                "condition": "flag:door_MT5_13_7==4",
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
                        "name": "flag:door_MT5_13_7",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "12,4": {
            "0": {
                "condition": "flag:door_MT5_12_4==2",
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
                        "name": "flag:door_MT5_12_4",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "12,10": {
            "0": {
                "condition": "flag:door_MT5_12_10==2",
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
                        "name": "flag:door_MT5_12_10",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 27, 27,10015, 29, 29,10015,250, 21, 21, 22,10015,10015,10015,10015,10015],
    [518,205,10015,10015,254,10015, 81,10015,10015,10015,10015,10015,10015,10015,10015],
    [205,244, 82,  0, 30, 30,  0,10015, 21, 22,109,109,109,109,109],
    [518,205,10015,10015,10015, 81,10015,10015, 21, 21,109, 34,347, 34,109],
    [ 27, 27,10015,  0,217,  0,  0, 81,265,  0,109,109, 85,109,109],
    [10015,10015,10015,203,10015, 21,10015,10015,10015,10015,109,401,250,401,109],
    [ 28, 21,10015, 28,10015,  0,254,  0,250,  0,109,109, 86,109,109],
    [ 92,201, 81,201,10015,10015,10015,10015,10015, 21, 83,201, 33, 85, 89],
    [ 28, 21,10015, 28,10015,265, 81,  0,250,  0,109,109, 86,109,109],
    [10015,10015,10015,203,10015,  0,10015,10015,10015,10015,109,401,250,401,109],
    [  0,254,  0,  0, 81,  0,10015, 31,10015, 30,109,109, 85,109,109],
    [ 29,10015, 30,10015,10015,  0,254, 29,204, 28,109, 34,347, 34,109],
    [ 81,10015,10015,345,10015,10015,10015, 82,10015,10015,109,109,109,109,109],
    [204, 21,217,345,10015, 27,205,244,205, 27,10015,10015,10015,10015,10015],
    [10015, 30,10015,345,10015, 27,518,205,518, 27,10015,10015,10015,10015,10015]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,20010,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20010,  0,  0],
    [  0,  0,  0,  0,  0,20020,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,20009,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,20010,20009,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,20009,  0,  0,  0,  0,  0,  0,  0,20010,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20020,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,20010,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,20009,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,20009,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,20009,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,20020,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bgm": "7days4.mp3",
    "area": "陆地"
}