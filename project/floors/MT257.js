main.floors.MT257=
{
    "floorId": "MT257",
    "title": "墨西拿",
    "name": "墨西拿",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground5",
    "bgm": "cao7.mp3",
    "firstArrive": [
        {
            "type": "text",
            "text": "\t[凯赛林]\f[eisenhower.png,0,310]盟军还没有完全封锁海上撤退路线。我已经得到元首批准，西西里岛守军，有序乘船撤回意大利。从库尔斯克调来的援军很快就到。",
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
        "14,7": [
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
                "type": "function",
                "function": "function(){\nflags.mission[36][0]=true\n}"
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
                "text": "   指挥官阁下成功赶跑了德国佬，并\n俘虏大批意大利人。现在西西里岛已经\n是我们的了。\n   意大利国内也发生了骚动，墨索里\n尼已经倒台，意大利的立场现在偏向我\n们。这情节怎么好像有些眼熟？反正我\n们马上就会少一个敌人，多一个盟友。\n轴心国三巨头已经倒了一个，再加把劲！",
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
                "type": "setValue",
                "name": "flag:stage",
                "value": "37"
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
                        "floorId": "MT248",
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
                        "name": "gaijin5.mp3"
                    },
                    "1943年7月9日，“哈士奇行动”正式开始。意大利海岸守军士气低落，仅进行了一番微弱抵抗。盟军没费多少力气就拿下了滩头阵地。",
                    "德军立刻派兵增援，481架飞机向盟军滩头阵地发动频繁空袭。好在盟军战斗机和高射炮拼命开火，巴顿也亲临前线指挥作战，盟军得以继续推进。",
                    "反攻失利后，德军指挥官凯赛林知道大势已去。好在这一次，希特勒批准了撤退，他决定边打边撤。盟军没有封锁墨西拿与意大利之间的通路，最终，凯赛林成功撤走了两万兵员和一万车辆，避免了一场惨败。",
                    "此次战役，盟军伤亡近3万人，消灭敌军2.1万，俘虏13.2万（多数是意大利人）。虽然没能彻底消灭敌人的有生力量，但也迫使意大利退出战争，政治目的已经达成。",
                    "虽然盟军的作战结果并不是很理想，但也间接影响到了东线战场——德军的一个装甲师为支援意大利战场，从库尔斯克战场的火拼中抽调出来，之后德军便在库尔斯克战役中落败。",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[世界消息]\r[aqua]意大利 投降！",
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[世界消息]\r[aqua]意大利 加入 反法西斯同盟国阵营",
                    {
                        "type": "sleep",
                        "time": 500
                    }
                ]
            },
            {
                "type": "pauseBgm"
            },
            "Stage 7 已完成。是否提交分数？",
            {
                "type": "confirm",
                "text": "提交分数？",
                "yes": [
                    {
                        "type": "win",
                        "reason": "Stage 7 王牌陨落"
                    }
                ],
                "no": [
                    {
                        "type": "confirm",
                        "text": "跳过剧情吗？",
                        "yes": [
                            {
                                "type": "changeFloor",
                                "floorId": "MT259",
                                "loc": [
                                    7,
                                    13
                                ],
                                "direction": "up"
                            }
                        ],
                        "no": [
                            {
                                "type": "playBgm",
                                "name": "wots6.mp3"
                            },
                            "1943年7月25日，墨索里尼下台，继任者巴多格里奥与盟军秘密联系，试探投降的可能性。他希望盟军能够尽快登陆意大利本土，否则一旦德军发起攻击，意大利撑不了多久。",
                            "果不其然，就在双方为是否“无条件投降”而争执不休时，希特勒就开始集结兵力。8月份，隆美尔越过意大利北部，支援南部的凯赛林。",
                            "9月8日，艾森豪威尔和巴多格里奥政府分别广播停战宣言，宣布意大利无条件投降。德意日法西斯轴心宣告解体，拉开了欧洲战场的序幕。",
                            "但意大利似乎投降的过于仓促。次日，早有戒备的德军立即解除了80万意军的武装，逮捕大批军官，于10日占领罗马，并向南控制了那不勒斯。意大利政府高层只得仓皇乘坐潜艇投向盟军怀抱，只留下民众重新回到了法西斯的暴力统治下。墨索里尼也被党卫军突击队营救出来，在北部成立傀儡政府。",
                            "盟军的对面再也没有一打就投降的意大利菜鸟军，取而代之的是身经百战的德军。他们必须在意大利的国土上，突破德军的重重阻碍，才能向欧洲进军。",
                            "此外，意大利战场与其他战场都不一样。到处都是山地，一夫当关，万夫莫开。是防守方的天堂，进攻方的地狱。",
                            "盟军对此并没有太多推算，一脚便踏进了这个深不见底的地狱中。",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "showImage",
                                "code": 1,
                                "image": "chapter8.jpg",
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
                                "floorId": "MT258",
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
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "MT256",
            "loc": [
                14,
                5
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
    [537,537,537,10015,537,537,537,10015,538,538,538,10015,535,409,535],
    [265,272,  0,10015,10015,  0,  0,218,10015,383,  0,10015,10015, 81,10015],
    [ 81,10015, 82,606,10015,265,10015,10015,10015, 81,10015,10015,250,  0,250],
    [538,538,538,10015,10015, 81,10015,539,539,371,  0,10015,10015,265,10015],
    [250,10015,10015,10015,538,  0,388, 81,10015,10015,10015,10015,404,  0,404],
    [  0,250,  0,265,  0,218,10015,571,10015,  0,  0,244,  0,10015,218],
    [10015,10015, 81,10015,538,10015,10015,571,  0,266,10015,10015,10015,10015,10015],
    [ 92,  0,  0,10015,10015,  0,571,10015,10015, 82,410,410,410,218, 89],
    [10015,10015,539, 81,250,207,  0,250,  0,266,10015,10015,10015,10015,10015],
    [388,10015,539,10015,518,518,10015,10015,571,  0,250,  0,371,  0,390],
    [518,265,  0,10015,10015,518, 81,10015,10015, 81,10015,10015, 81,10015,10015],
    [518,10015, 81,10015,218,10015,371,539,539,539,390,10015,518,265,518],
    [10015,244,244,  0,  0,10015,10015,10015,10015, 82,10015,10015,10015,10015, 81],
    [ 21, 21,10015,244,10015,536,536,10015,  0,272,  0,10015, 22,  0,272],
    [ 21, 21,10015,  0,371,536,536,10015,535,535,535,10015, 22, 22,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}