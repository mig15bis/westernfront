main.floors.MT378=
{
    "floorId": "MT378",
    "title": "卡亚峡湾",
    "name": "卡亚峡湾",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "5minutes.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up:1"
            ]
        },
        "\t[盟军指挥官,hero]机群抵达指定位置，发现任务目标：提尔皮茨！",
        "\t[盟军指挥官,hero]战斗机做好掩护，扫清防空炮威胁，俯冲轰炸机开始进攻！",
        "\t[提尔皮茨号战列舰,bismark]雷达发现大量敌机接近，拉响警报，防空炮就位，释放烟雾弹掩护撤离，同时呼叫附近空军基地支援！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[警告]北方的孤独女王 俾斯麦级战列舰二号舰 提尔皮茨 袭来",
        "\t[系统提示]进入boss战，即将进入存档界面！",
        {
            "type": "callSave"
        },
        {
            "type": "forbidSave",
            "forbid": true
        },
        {
            "type": "previewUI",
            "action": [
                {
                    "type": "strokeRect",
                    "x": 130,
                    "y": 64,
                    "width": 64,
                    "height": 16,
                    "style": [
                        255,
                        165,
                        0,
                        1
                    ],
                    "lineWidth": 5
                },
                {
                    "type": "fillRect",
                    "x": 130,
                    "y": 64,
                    "width": 64,
                    "height": 16,
                    "style": [
                        255,
                        0,
                        0,
                        1
                    ]
                },
                {
                    "type": "strokeRect",
                    "x": 194,
                    "y": 64,
                    "width": 64,
                    "height": 16,
                    "style": [
                        255,
                        165,
                        0,
                        1
                    ],
                    "lineWidth": 5
                },
                {
                    "type": "fillRect",
                    "x": 194,
                    "y": 64,
                    "width": 64,
                    "height": 16,
                    "style": [
                        255,
                        0,
                        0,
                        1
                    ]
                },
                {
                    "type": "strokeRect",
                    "x": 258,
                    "y": 64,
                    "width": 64,
                    "height": 16,
                    "style": [
                        255,
                        165,
                        0,
                        1
                    ],
                    "lineWidth": 5
                },
                {
                    "type": "fillRect",
                    "x": 258,
                    "y": 64,
                    "width": 64,
                    "height": 16,
                    "style": [
                        255,
                        0,
                        0,
                        1
                    ]
                },
                {
                    "type": "strokeRect",
                    "x": 322,
                    "y": 64,
                    "width": 64,
                    "height": 16,
                    "style": [
                        255,
                        165,
                        0,
                        1
                    ],
                    "lineWidth": 5
                },
                {
                    "type": "fillRect",
                    "x": 322,
                    "y": 64,
                    "width": 64,
                    "height": 16,
                    "style": [
                        255,
                        0,
                        0,
                        1
                    ]
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "7,6": [
            {
                "type": "if",
                "condition": "(flag:MT378boss===0)",
                "true": [
                    {
                        "type": "clearMap",
                        "x": 322,
                        "y": 64,
                        "width": 64,
                        "height": 16
                    },
                    {
                        "type": "setBlock",
                        "number": "bismark",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "animate",
                        "name": "hand",
                        "async": true
                    },
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 10,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:MT378boss",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[系统提示]敌军护卫舰艇和移动式高射炮已就位",
                    {
                        "type": "setBlock",
                        "number": "wildwind",
                        "loc": [
                            [
                                6,
                                5
                            ],
                            [
                                10,
                                4
                            ],
                            [
                                5,
                                3
                            ],
                            [
                                9,
                                2
                            ],
                            [
                                7,
                                1
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "setBlock",
                        "number": "z1936a",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                11,
                                8
                            ],
                            [
                                8,
                                7
                            ],
                            [
                                7,
                                9
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT378boss===1)",
                        "true": [
                            {
                                "type": "clearMap",
                                "x": 258,
                                "y": 64,
                                "width": 64,
                                "height": 16
                            },
                            {
                                "type": "setBlock",
                                "number": "bismark",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "animate",
                                "name": "hand",
                                "async": true
                            },
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    14
                                ],
                                "time": 10,
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:MT378boss",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "playSound",
                                "name": "xinxinmagic.mp3"
                            },
                            "\t[系统提示]敌军战斗机抵达战场",
                            {
                                "type": "setBlock",
                                "number": "fw190f8",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ],
                                    [
                                        6,
                                        8
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        8
                                    ],
                                    [
                                        9,
                                        7
                                    ],
                                    [
                                        10,
                                        8
                                    ],
                                    [
                                        4,
                                        8
                                    ]
                                ],
                                "time": 0
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT378boss===2)",
                                "true": [
                                    {
                                        "type": "clearMap",
                                        "x": 194,
                                        "y": 64,
                                        "width": 64,
                                        "height": 16
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "bismark",
                                        "loc": [
                                            [
                                                7,
                                                6
                                            ]
                                        ],
                                        "time": 0
                                    },
                                    {
                                        "type": "animate",
                                        "name": "hand",
                                        "async": true
                                    },
                                    {
                                        "type": "jumpHero",
                                        "loc": [
                                            7,
                                            14
                                        ],
                                        "time": 10,
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:MT378boss",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    "\t[盟军指挥官,hero]我们虽然重创了提尔皮茨号，但没能彻底将其击沉。返回航母，剩下的由皇家空军的重型轰炸机来处理。",
                                    "\t[系统提示]还记得开局让你带的轰炸机和专属技能吗？",
                                    {
                                        "type": "setEnemy",
                                        "id": "bismark",
                                        "name": "special",
                                        "value": "100",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "bismark",
                                        "name": "money",
                                        "value": "100",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "bismark",
                                        "name": "exp",
                                        "value": "100"
                                    },
                                    {
                                        "type": "waitAsync"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:MT378boss===3)",
                                        "true": [
                                            {
                                                "type": "clearMap",
                                                "x": 130,
                                                "y": 64,
                                                "width": 64,
                                                "height": 16
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "bismark",
                                                "loc": [
                                                    [
                                                        7,
                                                        6
                                                    ]
                                                ],
                                                "time": 0
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:MT378boss",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            {
                                                "type": "playSound",
                                                "name": "torpeodoexplo.wav"
                                            },
                                            {
                                                "type": "hide",
                                                "loc": [
                                                    [
                                                        7,
                                                        6
                                                    ]
                                                ],
                                                "remove": true,
                                                "time": 1000
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\nflags.mission[51][0]=true\n}"
                                            },
                                            {
                                                "type": "if",
                                                "condition": "(status:money>=20000)",
                                                "true": [
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\nflags.mission[51][2]=true\n}"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "clearMap",
                                                "x": 0,
                                                "y": 0,
                                                "width": 416,
                                                "height": 416
                                            },
                                            {
                                                "type": "forbidSave"
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
                                                "type": "showImage",
                                                "code": 1,
                                                "image": "tirpitzsunk.jpg",
                                                "loc": [
                                                    0,
                                                    0
                                                ],
                                                "opacity": 1,
                                                "time": 0
                                            },
                                            {
                                                "type": "setCurtain",
                                                "time": 500
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 1000
                                            },
                                            "1944年4月2日，来自英国“胜利”和“暴怒”两艘大型航母和5艘小型护航航母的机群，对停泊在港内的提尔皮茨号实施空袭。",
                                            "空袭从早上五点持续到八点，德军完全没有料到这场空袭，只能仓促组织起零碎的防空炮火予以还击。",
                                            "14枚炸弹命中了提尔皮茨号，将舰体上层建筑炸的不成样子，122名船员当场殒命。但这些轰炸机飞行员投弹高度太低，炸弹没有获得足够的高度，没有击穿战列舰的装甲。提尔皮茨号依旧漂浮在海上。",
                                            "刚刚修好的提尔皮茨号，3个月内是没法再战了。而英军仅有3架轰炸机被击落，某种意义上算是成功了一半。",
                                            "德军将这艘战舰转移至特罗姆瑟当作浮动火炮阵地使用。期间，英美空军又做了几次尝试，试图彻底击沉她。",
                                            "最终，1944年11月12日，英军的兰开斯特式轰炸机使用高脚柜炸弹成功命中提尔皮茨号3次。没有哪艘战舰能够承受这种巨大的装药量。其中2枚炸弹洞穿了提尔皮茨号的装甲，砸出一个两百英寸的大洞，剧烈的爆炸顷刻间夺取了数百人的生命，并引爆弹药库。",
                                            "提尔皮茨号左倾135度，倒扣在了水中，随同一起沉没的，还有船上的902人。至此，德国最后一艘大型战列舰宣告覆灭。",
                                            "不仅是战列舰，德军曾引以为傲的潜艇大队也遭受了失败。随着盟军反潜技术的进步，德军潜艇很难再对盟军船队实施有效打击了。德国海军，已名存实亡。",
                                            {
                                                "type": "hideImage",
                                                "code": 1,
                                                "time": 500
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
                                                "name": "flag:escort",
                                                "value": "false"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:stage",
                                                "value": "52"
                                            },
                                            {
                                                "type": "pauseBgm"
                                            },
                                            "Stage 10 已完成。是否提交分数？",
                                            {
                                                "type": "confirm",
                                                "text": "提交分数？",
                                                "yes": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Stage 10 阴云密布"
                                                    }
                                                ],
                                                "no": [
                                                    {
                                                        "type": "confirm",
                                                        "text": "跳过剧情吗？",
                                                        "yes": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "MT380",
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
                                                                "name": "wots4.mp3"
                                                            },
                                                            "盟军没能在1944年圣诞节之前结束战争，但也用不了多久。",
                                                            "此时，无论是欧洲战场，还是太平洋战场，轴心国军队都已是强弩之末。虽然反扑更加猛烈而疯狂，但也不过是困兽犹斗。",
                                                            "此时，盟军内部的裂痕开始逐渐扩大。苏联军队一路上势不可挡，距离柏林越来越近，这让英美感受到了危机。丘吉尔希望能抢在苏联之前攻克柏林，这样战后秩序和舆论会更偏向西方国家一些。",
                                                            "战争接近尾声，胜利无可置疑，就看谁能抢先夺得这场终点为柏林的“长跑比赛”的冠军。是苏联？还是英美？当然，这是政客们才需要考虑的事情了。对于普通士兵而言，他们要做的，就是别让自己倒在胜利的前夕。",
                                                            {
                                                                "type": "showImage",
                                                                "code": 1,
                                                                "image": "chapter11.jpg",
                                                                "loc": [
                                                                    0,
                                                                    0
                                                                ],
                                                                "opacity": 1,
                                                                "time": 0
                                                            },
                                                            {
                                                                "type": "setCurtain",
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
                                                                "type": "sleep",
                                                                "time": 500
                                                            },
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "MT379",
                                                                "loc": [
                                                                    -1,
                                                                    -1
                                                                ],
                                                                "direction": "down"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ],
                                        "false": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,391,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,391,  0,  0,  0,  0,  0,  0,  0,391,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,391,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,391,  0,395,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,395,  0,  0,  0,  0,  0,395,  0,  0,  0,  0,395],
    [  0,  0,  0,  0,  0,  0,  0,333,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,148],
    [148,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,148,148],
    [148,148,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,148,148],
    [148,148,148,148,  0,  0,  0,  0,  0,  0,  0,  0,148,148,148],
    [  0,148,148,148,148,  0,  0,  0,  0,  0,  0,  0,148,148,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [308,308,308,308,308,308,308,308,308,308,308,308,308,308,308],
    [ 16,308,308,308,308,308,308,308,308,308,308,308,308,308, 16],
    [ 16, 16, 16,311,311,311,311,308,308,311,311,311,311,311, 16],
    [ 16, 16,311,311, 16,311,311,311,311,311,311, 16, 16,311,311],
    [ 16, 16,311, 16, 16, 16,311, 16, 16, 16,311, 16, 16, 16,311],
    [ 16, 16,311, 16, 16,311,311, 16, 16, 16,311, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16,311, 16, 16, 16, 16,311, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,308],
    [308, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,308,308],
    [308,308, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,308,308],
    [308,308,308,308, 16, 16, 16, 16, 16, 16, 16, 16,308,308,308],
    [ 16,308,308,308,308,308, 16, 16, 16, 16, 16,308,308,308, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
],
    "fgmap": [

],
    "area": "浅滩"
}