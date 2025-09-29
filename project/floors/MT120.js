main.floors.MT120=
{
    "floorId": "MT120",
    "title": "马耳他",
    "name": "马耳他",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10007",
    "bgm": "bgm5.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,7": [
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
                "function": "function(){\nflags.mission[18][0]=true\n}"
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
                "text": "   尽管遭受着猛烈的轰炸，马耳他岛\n仍然顽强地挺立在地中海上，没有被敌\n军占领。\n   我们不应该让守岛的士兵们在那样\n的条件下苦撑太久，解围行动必须立即\n开始筹划。下次我们停靠时，应当给他\n们带些好东西作为慰问，比如新鲜的食\n物和水，以及充足的武器弹药。",
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
                "value": "19"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT122",
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
                        "name": "gaijin3.mp3"
                    },
                    "自1940年6月开始，意大利空军就开始不断轰炸马耳他这个战略要地。德国空军也在次年1月加入。",
                    "马耳他自古以来便是兵家必争之地，许多国家都围绕这里展开交锋。但这次与众不同。",
                    "马耳他的居民没有向法西斯残酷的轰炸低头。他们积极协助英军，修建防御工事。英军也一直试图从外界为马耳他提供充足的补给。",
                    "但随着英国地中海舰队不断损失，马耳他在1941年4-6月迎来了危急时段。岛上的防御力量几乎被轰炸殆尽，空中力量也仅剩下寥寥三架“斗士”战斗机。",
                    "即便如此，它也依然挺立在地中海中央。度过了最艰难的时段后，该岛继续运营，作为关键港口接收船只，也作为关键机场，放出轰炸机猛攻敌人的军舰。",
                    "回到北非沙漠中。隆美尔的装甲部队还在围困着托布鲁克的盟军。1941年6月，埃及的英军接收到了一批关键补给。他们认为，是时候解除德国对托布鲁克的封锁了。",
                    "英军总兵力有10个旅，数量与德意联军拉不开差距，但英军的坦克数量更多，有250辆，燃料也更充足。而隆美尔只有150辆，这其中还得算上意大利那些纸糊的破坦克，还有很多因为缺乏燃料动弹不得的。",
                    "形势对隆美尔很不利，只可惜这位“沙漠之狐”最擅长打逆风局。",
                    "得知英军打算兵分三路，从正面强攻后，隆美尔立刻着手布置防御。在英军进攻的必经之路上，他利用手头仅有的部队，布下了一个十分有效的“坦克陷阱”。",
                    "英军对此毫不知情，他们坐着崭新的“十字军”和“马蒂尔达”坦克，自信满满的，一步步驶向专门为他们准备的陷阱中。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT121",
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
        "7,14": {
            "floorId": "MT119",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT120_7_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT120_7_8===9)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT120_7_8",
                        "value": "0"
                    }
                ]
            }
        ],
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT120_7_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT120_7_8===9)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT120_7_8",
                        "value": "0"
                    }
                ]
            }
        ],
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT120_7_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT120_7_8===9)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT120_7_8",
                        "value": "0"
                    }
                ]
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT120_7_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT120_7_8===9)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT120_7_8",
                        "value": "0"
                    }
                ]
            }
        ],
        "9,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT120_7_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT120_7_8===9)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT120_7_8",
                        "value": "0"
                    }
                ]
            }
        ],
        "5,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT120_7_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT120_7_8===9)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT120_7_8",
                        "value": "0"
                    }
                ]
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT120_7_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT120_7_8===9)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT120_7_8",
                        "value": "0"
                    }
                ]
            }
        ],
        "7,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT120_7_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT120_7_8===9)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT120_7_8",
                        "value": "0"
                    }
                ]
            }
        ],
        "7,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT120_7_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT120_7_8===9)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT120_7_8",
                        "value": "0"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,8": {
            "1": null
        },
        "8,8": {
            "0": {
                "condition": "core.maps.searchBlockWithFilter(x=>['步兵'].includes(core.material.enemys[x?.event?.id]?.type),['MT116','MT117','MT118','MT119','MT120']).length===0",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[18][1]=true\n}"
                    }
                ]
            },
            "1": {
                "condition": "core.maps.searchBlockWithFilter(x=>['中型轰炸机'].includes(core.material.enemys[x?.event?.id]?.type),['MT116','MT117','MT118','MT119','MT120']).length===0",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[18][2]=true\n}"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [387, 21, 21, 22,80058,  0,361,  0,361,  0,80058, 22, 21, 21,387],
    [ 81,80058,80058,80058,80058,  0,80058, 82,80058,  0,80058,80058,80058,80058, 81],
    [533,533,  0,  0,381,  0,80058,588,80058,  0,381,  0,  0,533,533],
    [80058,80058, 81,80058,80058,80058,80058,80058,80058,80058,80058,80058, 81,80058,80058],
    [531,  0,363,80058,570,  0,  0,518,  0,  0,570,80058,363,  0,531],
    [  0,80058,80058,80058,  0,362,80058,366,80058,362,  0,80058,80058,80058,  0],
    [577, 81,363,80058,  0,80058,80058,80058,80058,80058,  0,80058,363, 81,577],
    [532,80058,  0,80058,518,365,80058, 89,80058,365,518,80058,  0,80058,532],
    [532,80058,361,80058,  0,80058,80058, 85,80058,80058,  0,80058,361,80058,532],
    [80058,80058,  0,80058,  0,362,80058,367,80058,362,  0,80058,  0,80058,80058],
    [530,80058,  0,80058,570,  0,  0,361,  0,  0,570,80058,  0,80058,530],
    [530,80058,363,80058,80058,80058,80058, 83,80058,80058,80058,80058,363,80058,530],
    [207, 81,  0,  0,  0,  0,362,  0,362,  0,  0,  0,  0, 81,207],
    [518,80058,80058,80058, 81,80058,80058,  0,80058,80058, 81,80058,80058,80058,518],
    [568,80058, 21, 21,576,534,80058, 93,80058,534,576, 21, 21,80058,568]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}