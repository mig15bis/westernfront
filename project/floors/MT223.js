main.floors.MT223=
{
    "floorId": "MT223",
    "title": "凯赛林隘口",
    "name": "凯赛林隘口",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "cao5.mp3",
    "firstArrive": [
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]部队陷入混乱！攻击力暂时减少2000，后勤值暂时减少10000！",
        {
            "type": "setValue",
            "name": "status:atk",
            "operator": "-=",
            "value": "2000"
        },
        {
            "type": "setValue",
            "name": "status:mdef",
            "operator": "-=",
            "value": "10000"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]较高难度下，此地图唯一的解法为：对称飞直接飞到出口。高难度没选对称飞技能的可以重开了。"
    ],
    "eachArrive": [
        {
            "type": "setValue",
            "name": "flag:mission32task2",
            "operator": "+=",
            "value": "1"
        }
    ],
    "parallelDo": "",
    "events": {
        "0,7": [
            {
                "type": "setValue",
                "name": "status:atk",
                "operator": "+=",
                "value": "2900"
            },
            {
                "type": "setValue",
                "name": "status:mdef",
                "operator": "+=",
                "value": "10000"
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
                "type": "function",
                "function": "function(){\nflags.mission[32][0]=true\n}"
            },
            {
                "type": "if",
                "condition": "((item:yellowKey-item:blueKey)>=5)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[32][1]=true\n}"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:mission32task2<=7)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[32][2]=true\n}"
                    }
                ]
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
                "value": "33"
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
                        "floorId": "MT225",
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
                        "name": "desert1.mp3"
                    },
                    "美军部队之中存在着极其严重的轻敌现象，多数美军官兵认为，自己面对的都是隆美尔的残兵败将，这时已经无法形成有效战力，甚至可能已经士气崩溃。",
                    "事实证明，这一想法有些“以小人之心度君子之腹”。德军的战斗力仍然在线，隆美尔虽然失去了一半指挥权，并且丝毫不会影响他的军事天赋。",
                    "美军的指挥层也有着很大问题，一线指挥官弗雷登道尔基本上是个不称职的军官：在火炬行动中，美军部队早已上岸，他却在战舰里喝茶，平时面对下属的提议，他也只觉得吵闹，可以说基本不屑于好好带兵打仗。",
                    "心高气傲的美国大兵完全没有利用好天险般的地形，也没有预料到德军设下的埋伏。虽然阿尼姆不屑于与隆美尔协同作战，两支部队没有形成合力，分开行动，美军防线还是像纸糊的一样被迅速攻破。",
                    "仅战斗第一天，44辆美军坦克就被打成了碎片。谢尔曼坦克虽然性能优于德军的三号和四号坦克，但面对88毫米高射炮时，它们约等于没有装甲，更别提美军士兵还缺乏训练，把一手好装备打的稀烂。",
                    "即便这样，远在后方的弗雷登道尔甚至还觉得这只是德军小股部队的骚扰，随便派了一个坦克营和机械化步兵营前去支援，结果这点援军根本不够隆美尔塞牙缝。",
                    "2月15日，隆美尔把加夫萨的美军收拾了个一干二净，他留下一个装甲团拖住增援，自己带着几个营一路奔袭，攻占美军泰勒普特机场。他希望阿尼姆把第10装甲军分出来，策应他夹击敌人，但遭到拒绝，协同不畅的结果是白白送了美军一天备战时间。",
                    "然而，隆美尔白送美军的机会，美军却不中用。19日，隆美尔在没有第10装甲军策应的情况下，以3个装甲营的兵力，直接向凯赛林隘口发起进攻。",
                    "在得知美军装甲部队正严格按照教科书上的V字进攻队列尝试夹击德军后，大喜过望的隆美尔当即背板一样迅速布下反坦克阵地。一顿掐头去尾打中间的胖揍过后，美军部队就像电子游戏里的人机一样，单方面被血虐。",
                    "唯一能拖住隆美尔的不是盟军任何一支部队，而是阿尼姆。由于阿尼姆死活不同意继续扩大战果，隆美尔花了三天时间才从墨索里尼那里要到了所有的部队指挥权，然后才得以继续进攻。",
                    "三天时间，美军的防线布置的毫无合理性可言，防线防了个寂寞。在德军坦克的冲撞下像纸糊的一样支离破碎，让德军一口气杀进凯赛林隘口几十公里。",
                    "哈蒙少将奉艾森豪威尔的命令，带着第一装甲师驰援美第二军，一路上见到的都是一边哭着喊妈妈，一边丢盔弃甲四散奔逃的新兵蛋子们。美军正在冲锋，只不过是反向的。",
                    "直到26日，德军在泰贝萨的莱塔小镇防线与英美联军呈绝对优势的火力面前遭受阻击，这次是美军高估了德军兵力，炮弹像不要钱一样打，身后还跟着一大批没到的援军。反正目的已经达成，隆美尔也不再继续死磕。凯赛林山口战役这才结束。",
                    "这是美军打过的最丢脸的一次战役，共损失了一万多人，183辆坦克，706辆战车，德军仅伤亡2000人和34辆坦克。就连英军也嘲讽道：“瞧瞧，这是我们的意大利军队来了”。",
                    "盟军总司令艾森豪威尔亲自下令，让所有高级将领到前线总结失败教训。不查不知道，一查吓一跳，美军这才发现自己内部的问题有多离谱。弗雷登道尔第一个被撤职回去训练新兵，美军最高指挥层几乎整个大换血，关键岗位都让有经验的英国将领和真正优秀的美军将领担任，底层的新兵也加大了训练力度。",
                    "没有多余的时间等待美国新兵们的成长，盟军需要尽快解决北非的轴心国军队，才能对欧洲采取行动。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT224",
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
            "floorId": "MT222",
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
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 21, 21, 21,272,150, 21,148,148,148,148,148,148,148,148,148],
    [150,150,150, 81,150, 21,150,519,148,148,148,148,148,148,148],
    [537,  0,  0,232,265, 21,150,522,272,522,148,148,148,148,148],
    [150,150, 82,150,150,150,150,522,150,404,537,148,148,148,148],
    [518,150,  0, 81,266,150,150,150,150, 81,150,150,150,148,148],
    [390,232,537,150,538,150,  0,404,  0,537,150,265,253,536, 22],
    [150,150,150,150,538,150,537,150,220,150,150, 81,150,150,150],
    [ 89,  0,410, 81,248, 81,537,150,150,539,409,250,536,536, 94],
    [150,150,150,150,  0,150,  0,404,539,539,150, 81,150,150,150],
    [390,232,  0,150,232,150,150,150,410,150,150,265,253,536, 22],
    [  0,150,266,522,  0,265,538,204,  0, 81,404,150,150,148,148],
    [ 82,150,150, 82,150,150,150,150,150,150,518,150,148,148,148],
    [410,  0,150,232,  0,150,390,150,390,150,518,148,148,148,148],
    [535,535,150,150,271,150,616,203,616,148,148,148,148,150,150],
    [535,535,150,518,518, 81,409,148,148,148,148,148,148,150,552]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}