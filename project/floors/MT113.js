main.floors.MT113=
{
    "floorId": "MT113",
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
    "bgm": "desert2.mp3",
    "firstArrive": [
        {
            "type": "text",
            "text": "\t[奥金莱克]\f[auchinleck.png,0,310]敌人的攻势过于迅猛，已经冲散了我们的部队。继续战斗风险过高，立即率军撤退！",
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
        "14,5": [
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
                "function": "function(){\nflags.mission[17][0]=true\n}"
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
                "text": "   感谢指挥官阁下为我们争取了一些\n撤退的时间，只可惜我们刚夺取的地盘\n又被德军抢走了。\n   情报明明说这只是一小支德军部队\n，这个叫隆美尔的少将为何有这么大的\n胆子敢向我们发起突击？好吧，这次算\n他赢了，不过这样的莽夫不会常胜！",
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
                "value": "18"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT115",
                        "loc": [
                            7,
                            10
                        ],
                        "direction": "up"
                    }
                ],
                "no": [
                    {
                        "type": "playBgm",
                        "name": "desert1.mp3"
                    },
                    "隆美尔的突进并不是鲁莽，而是基于对战场情况的准确判断和不同寻常的战术思想而做出的正确选择。",
                    "德军的进攻效果拔群，一口气将利比亚的盟军部队击退数公里，立刻将双方的局势扭转了180度。",
                    "在那之后，隆美尔继续进攻。当他不得不停下脚步时，德意联军已经将英军逼退至埃及，并包围了盟军重要城市——托布鲁克（又译作“图卜鲁格”），以及驻守那里的澳大利亚军队。",
                    "隆美尔不仅有着出色的军事指挥才能，又体恤部下，骁勇善战，战斗期间他经常亲自坐在坦克里，和他的士兵一起冲锋在前，并且他没有虐待战俘的行为，和其他纳粹狂热分子形成鲜明的对比。很快他就赢得了双方底层士兵的崇敬，获得了“沙漠之狐”的美誉。",
                    "但现在，由于德军急于进攻苏联，隆美尔的部队得不到充足的给养。他不得不停了下来，在托布鲁克周围设下严密防御，等待时机。",
                    "北非战场迎来了短暂的稳定，但与此同时，在地中海上的一座小岛，却仍在炙热的太阳和猛烈的轰炸中艰难挣扎。",
                    "这是一座盟军控制的小岛。地方不大，但战略位置却非常重要，一旦被轴心国军队占领，将对盟军商船队产生巨大威胁。",
                    "而与其他地方的盟军不同，他们缺弹少粮，几乎没有补给，没有重型武器，唯一的“高级货”就是几架从仓库里翻出来并紧急组装起来的双翼“角斗士”战斗机。",
                    "尽管如此，岛上的盟军仍然坚守在阵地上，守护着盟军的海上交通要道。",
                    "这座小岛，名叫“马耳他岛”",
                    {
                        "type": "changeFloor",
                        "floorId": "MT114",
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
            "floorId": "MT112",
            "loc": [
                0,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "8,7": [
            {
                "type": "setValue",
                "name": "flag:st17tsk3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,13": [
            {
                "type": "setValue",
                "name": "flag:st17tsk3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,14": [
            {
                "type": "setValue",
                "name": "flag:st17tsk3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "14,4": {
            "0": {
                "condition": "flag:st17tsk3>=3",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[17][2]=true\n}"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [526,526,526,60027,  0,528,533,150,525,  0,150,150,150,150,150],
    [150,254,150,60035,401,  0,150,150,150,250, 82,408,  0,  0,  0],
    [534,  0,250, 81,  0,150,150, 21, 21, 22,150,150,150,150, 82],
    [150,150, 81,150,  0, 81,407,  0,60026,  0,150,  0,  0,  0,408],
    [  0,527,402,150,265,150,150,150,150, 82,150,404,150,150,150],
    [402,527,  0,150,  0,  0,250,  0,250,  0,150,  0,  0,271, 89],
    [ 81,150,150,150,150,150,60027, 82,150,150,150,150,150,150,150],
    [  0,  0,244,  0,150,  0,60035,  0,232,  0,150,203,203,  0, 94],
    [150,150,150,226,150,528,265,528,150,  0,401,  0,150,60032,203],
    [ 21, 21,150,  0, 81,  0,60034,  0,150,150, 81,150,150, 21, 21],
    [401,150,150,265,150,150,150,150,150,  0,403, 81,250,150,150],
    [  0,  0,  0,  0,226,  0,  0,403,  0, 21,  0,150,250, 22,60028],
    [60034, 82,150,150,150, 81,150,150,150,150,150,150,  0,530,60036],
    [  0,407,  0,150,  0,232,  0,150, 21, 21,527,150,150,150,150],
    [525,525,525,150,529,529,529, 81,232,60034,527, 81,250,529,528]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}