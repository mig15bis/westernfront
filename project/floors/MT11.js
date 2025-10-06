main.floors.MT11=
{
    "floorId": "MT11",
    "title": "阿登森林东",
    "name": "阿登森林东",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "cao5.mp3",
    "firstArrive": [
        "\t[盟军指挥官,hero]敌人的攻势越来越强了，我们几乎不可能阻止他们前进了。",
        "\t[盟军指挥官,hero]全军向北突破，与盟军主力会合！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,0": [
            {
                "type": "setValue",
                "name": "flag:第二关通关",
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
                "text": "   即便指挥官阁下迅速赶赴阿登森林\n进行阻击，艰难地摧毁了一部分德军坦\n克，但敌人的装甲集群攻势过于猛烈，\n根本无法阻挡。我们的防线被突破了！\n   他们的速度远超我们想象。立即将\n指挥部从前线撤离，没人能预料他们还\n有多久就会来到我们面前！",
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
                "value": "3"
            },
            {
                "type": "submitTask"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT13",
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
                        "name": "hitman.mp3"
                    },
                    "英法军队以为，德军会如同一战时期一样，沿比利时海岸线进攻。从他们截获的情报来看，似乎也确实如此。",
                    "德军的原计划也确实如此。但得知情报泄露后，德军不得不重新制定行动方案，结果，曼施坦因提供了一份更好的方案——进攻马奇诺防线和比利时的德军全部都是佯攻部队。",
                    "真正的主力，是古德里安的装甲集群。他的装甲部队将穿过阿登森林，绕道盟军后方，包围他们。",
                    "英法两国根本没想到这种情况，他们以为，坦克部队是无法穿越阿登森林的，因此，那里几乎没有军队驻扎。甚至当侦察机发现古德里安的军队集中在阿登森林边缘时，盟军高层也不以为意。",
                    "当时，英国和法国都只是把坦克部队作为一种辅助力量，他们的坦克都要和步兵呆在一起，配合步兵行动。",
                    "而德国则是进行了大量的战术创新。他们把坦克部队作为进攻主力，而步兵、炮兵和航空兵则要去辅助坦克的进攻。",
                    "事实证明，这种战术充分发挥了坦克的快速机动性，进而发展为一种全新的战术——闪击战。而海因茨·威廉·古德里安正是闪击战的创始人。",
                    "古德里安在法国领地上飞速“飙车”。不止盟军高层震惊他的速度，打算投降的盟军战俘，甚至德军自己的步兵和后勤都在不停的吐槽——因为他们实在是跟不上了。",
                    "于是，古德里安不得不向一路上高举双手的盟军士兵喊话：“我没时间俘虏你们”。这句话一下子就成了他的经典语录。",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "德军占领色当以后，继续向英吉利海峡挺进。由于比利时的盟军仓皇撤退，在那里佯攻的德军也紧跟着向前追击。",
                    "古德里安的闪电战卓有成效，但缺点也暴露无遗——由于后续部队跟不上步伐，古德里安的后方非常薄弱。",
                    "盟军也认识到了这一点。这一次，轮到盟军反击了。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT12",
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
            "floorId": "MT10",
            "loc": [
                14,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,0": {}
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 27, 27, 27, 82, 82, 34,152, 89,152,  0,520,520,  0,403,  0],
    [ 27, 27, 27,518,152, 34,152,250,152, 81,152,152,152, 82,152],
    [ 28, 28, 28, 33,152, 34,152,  0,152,226,347,152,  0,520,  0],
    [ 28, 28, 28, 33,152,403,152,244,152,347,347,152,152,152,402],
    [407,152,152,152,152,401,152,  0,152,152,152,152, 21, 21,  0],
    [  0, 31, 31,  0, 81, 32,152,226,152, 32,152, 22, 21, 21,  0],
    [152,152,152,152,152,  0,250, 32,250,  0,152,152,152,152, 81],
    [ 92,  0,250,  0,244,  0,152,152,152,407,152,  0,402,  0,  0],
    [152,152,152,152,152, 81,152,  0,520,  0,152, 81,152,152,152],
    [ 21,402,  0,521,  0,407,152,226,152,152,152,  0,402,  0,152],
    [ 21,152, 81,152,152,152,152,  0,520,  0,  0,  0,152,520,  0],
    [ 21,152, 30,226, 30,152, 29,152,152,403,152,152,152,152, 81],
    [ 21,152, 30,152, 30,152, 27, 28,152, 33,152, 27, 27, 27,402],
    [152,152,152,152, 81,152, 27, 28,152, 33,152,152,152, 81,403],
    [ 21,518,345,345,226,152, 29,403, 81, 33,152,518,345,345,345]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}