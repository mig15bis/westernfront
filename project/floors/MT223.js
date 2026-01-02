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
        "\t[系统提示]部队陷入混乱！攻击力暂时减少3000，后勤值暂时减少10000！",
        {
            "type": "setValue",
            "name": "status:atk",
            "operator": "-=",
            "value": "3000"
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
        "\t[系统提示]本地图虽然也能靠巨量的资源硬打通关，但非常亏。因此官方解法为：把血回满，然后直接对称飞到出口。"
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
                "name": "flag:第31关通关",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "status:atk",
                "operator": "+=",
                "value": "3900"
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
                "text": "   即便队伍阵型已经彻底散架，指挥官\n阁下仍然力挽狂澜，保住了相当一部分\n有生力量。\n   我们所有在这场战役中活下来的人\n都应该吸取一个教训，那就是永远不能\n轻视敌人。我们的指挥层必须进行大洗\n牌，查查到底是谁出的问题最大，让那\n家伙滚回老家喂马好了，战场不适合他！\n底层的普通士兵也得加强训练，再像今\n天这样一触即溃，我们的脸就丢完了！",
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
                    "美军部队之中存在着极其严重的轻敌现象，多数美军官兵认为，自己面对的都是隆美尔的残兵败将，德军这时应该已经无法形成有效战力，甚至可能已经士气崩溃。",
                    "事实证明，这一想法有些“以小人之心度君子之腹”。德军的战斗力仍然在线，隆美尔虽然失去了一半指挥权，但丝毫不会影响他的军事天赋正常发挥。",
                    "美军的指挥层也有着很大问题，一线指挥官弗雷登道尔基本上是个不称职的军官：在火炬行动中，美军部队早已上岸，他却在战舰里喝茶，平时面对下属的提议，他也只觉得吵闹，可以说基本不屑于好好带兵打仗。",
                    "心高气傲的美国大兵完全没有利用好天险般的地形，也没有预料到德军设下的埋伏。虽然阿尼姆不屑于与隆美尔协同作战，两支部队没有形成合力，分开行动，美军防线还是像纸糊的一样被迅速攻破。",
                    "仅战斗第一天，44辆美军坦克就被打成了碎片。谢尔曼坦克虽然性能优于德军的三号和四号坦克，但面对88毫米高射炮时，它们约等于没有装甲，更别提美军士兵还缺乏训练，把一手好装备打的稀烂。",
                    "即便这样，远在后方的弗雷登道尔甚至还觉得这只是德军小股部队的骚扰，随便派了一个坦克营和机械化步兵营前去支援，结果这点援军根本不够隆美尔塞牙缝。",
                    "2月15日，隆美尔把加夫萨的美军收拾了个一干二净，他留下一个装甲团拖住增援，自己带着几个营一路奔袭，攻占美军泰勒普特机场。他希望阿尼姆把第10装甲军分出来，策应他夹击敌人，但遭到拒绝，协同不畅的结果是白白送了美军一天备战时间。",
                    "然而，隆美尔白送美军的机会，美军却不中用。19日，隆美尔在没有第10装甲军策应的情况下，以3个装甲营的兵力，直接向凯赛林隘口发起进攻。",
                    "在得知美军装甲部队正严格按照教科书上的V字进攻队列，毫无创新意识地夹击德军后，大喜过望的隆美尔当即熟练地布下反坦克阵地，然后给对面来了一顿掐头去尾打中间的胖揍，美军部队对此毫无还手之力。",
                    "唯一能拖住隆美尔的不是盟军任何一支部队，而是阿尼姆。由于阿尼姆死活不同意继续扩大战果，隆美尔花了三天时间才从墨索里尼那里要到了所有的部队指挥权，然后才得以继续进攻。",
                    "三天时间，足够布置一道防线。然而，美军的防线却布置的毫无合理性可言，防线防了个寂寞。在德军坦克的冲撞下像纸糊的一样支离破碎，让德军一口气杀进凯赛林隘口几十公里。",
                    "哈蒙少将奉艾森豪威尔的命令，带着第一装甲师驰援美第二军，一路上见到的都是一边哭着喊妈妈，一边丢盔弃甲四散奔逃的新兵蛋子们。美军正在冲锋，只不过是反向的。",
                    "直到26日，德军在泰贝萨的莱塔小镇防线遭到英美联军呈绝对优势的炮火阻击，这次是美军高估了德军兵力，炮弹像不要钱一样打，身后还跟着一大批没到的援军。反正目的已经达成，隆美尔也不再继续死磕。凯赛林山口战役这才结束。",
                    "这是美军打过的最丢脸的一次战役，共损失了一万多人，183辆坦克，706辆战车，德军仅伤亡2000人和34辆坦克。英军看过战报后也对美军嘲讽道：“瞧瞧，这是我们的意大利军队来了”。",
                    "盟军总司令艾森豪威尔亲自下令，让所有高级将领到前线总结失败教训，顺带查出原因。从上到下这一查，把艾森豪威尔吓了一跳，感叹这不打败仗都没天理。弗雷登道尔第一个被撤职，美军最高指挥层几乎整个大换血，关键岗位都让有经验的英国将领和真正优秀的美军将领担任，底层的新兵也加大了训练力度。",
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
    [537,  0,  0,232,265, 21,150,341,272,522,148,148,148,148,148],
    [150,150, 82,150,150,150,150,341,150,404,537,148,148,148,148],
    [518,150,  0, 81,266,150,150,150,150, 81,150,150,150,148,148],
    [390,232,537,150,538,150,  0,404,  0,537,150,265,253,536, 22],
    [150,150,150,150,538,150,537,150,220,150,150, 81,150,150,150],
    [ 89,  0,410, 81,250, 81,537,150,150,539,409,250,536,536, 94],
    [150,150,150,150,  0,150,  0,404,539,539,150, 81,150,150,150],
    [390,232,  0,150,232,150,150,150,410,150,150,265,253,536, 22],
    [  0,150,266,523,  0,265,538,204,  0, 81,404,150,150,148,148],
    [ 82,150,150, 82,150,150,150,150,150,150,518,150,148,148,148],
    [410,590,150,232,  0,150,390,150,390,150,518,148,148,148,148],
    [535,535,150,150,271,150,616,203,616,148,148,148,148,150,150],
    [535,535,150,518,518, 81,409,148,148,148,148,148,148,150,552]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}