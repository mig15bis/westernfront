main.floors.MT414=
{
    "floorId": "MT414",
    "title": "柏林",
    "name": "柏林",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground6",
    "bgm": "bgm4.mp3",
    "firstArrive": [
        {
            "type": "text",
            "text": "\t[朱可夫]\f[zhukov.png,0,310]我们的红旗正在国会大厦上飘扬！胜利属于我们！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[魏德林]\f[weidling.png,0,310]4月30日，元首已经自杀，他抛弃了我们这些曾宣誓效忠于他的人。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[魏德林]\f[weidling.png,0,310]根据元首的命令，我们还应该为柏林继续作战，但是我们的弹药已消耗殆尽，总的形势已使我们的继续抵抗变得毫无意义。现在我以柏林城防司令的名义命令：立即停止抵抗。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[艾森豪威尔]\f[eisenhower.png,0,310]终究还是苏军快我们一步。事已至此，还是先收缴德国人的武器吧。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]历史上就是苏联最先完成对柏林的攻占，所以第三个任务就是无法完成的！不需要回去重打！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]所有德军已投降！",
        {
            "type": "setValue",
            "name": "flag:第55关通关",
            "value": "1"
        },
        {
            "type": "setEnemy",
            "id": "scoutinf",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "attankinf",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me262",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ta152",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5g",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigerking",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "jagpanzer",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "jagtiger",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak120",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak44",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "rocket41",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stugtiger",
            "name": "special",
            "value": "[61]"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,7": [
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
                "text": "   这世上再也没有什么能比“战争结束\n了”这句话更令人开心了！\n   赢了！我们赢了！我们击败了纳粹，\n解放了处于水深火热中的人们！从现在\n起，我们可以自由行走在大街上，不用\n担心被狙击手爆头，不用害怕天上飞过\n的飞机，不用趴在脏兮兮的战壕里，也\n不用再听到那令人作呕的防空警报！唯\n一的遗憾是苏联人更快占领了柏林，但\n那是政客们才要考虑的事了！现在我们\n得马上安排回国的机票和船票，我们的\n家人在等着我们回去！",
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
                "value": "57"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [],
                "no": [
                    "柏林会战，欧洲战场的最后一战，落下帷幕。",
                    "苏军以压倒性的陆军战力和不惧牺牲的精神，拿下了德军的最后一处据点。英美等政治军事首脑企图抢在苏联之前夺取柏林，以夺取更多话语权的努力也同样失败了。",
                    "希特勒的野心终究反噬到了自身。他凭借着煽动性的演讲和狂热的作风上台，但事实证明，他的极端思想虽带来了一时的繁荣，但最终会将自己的国家推向深渊。他以暴力手段奴役世界其他民族的努力以失败告终。",
                    "随着战争的推进，他的本质暴露无遗，他对敌人有多凶残，对自己的国民也是同样凶残。他打着“与柏林共存亡”的旗号，下令所有人投入战斗，处决所有尝试反抗这一命令的官兵。这种毫无理性可言的“爱国”，事实上却是将国家推向毁灭。他不仅害了全世界，更害了自己的国民。",
                    "4月29日凌晨1点，他与自己的女友爱娃·布劳恩举行了婚礼，并立下遗嘱。次日下午三点半，他和妻子服下毒药，同时对自己的太阳穴扣下了扳机。这个恶魔终于带着他的罪行去地狱报道了。而他的意大利同伙墨索里尼，早在4月27日逃亡途中被意大利游击队捕获，第二天就被枪毙，倒挂在米兰广场上示众。",
                    "也正是在30日晚上21点50分，国会大厦上飘起了苏联的旗帜。",
                    "5月2日，柏林城防司令官魏德林上将来到苏军前线指挥所，签下投降令，柏林会战结束了，整个欧洲迎来了久违的宁静。消息传出，人们欢呼雀跃，相拥而泣。",
                    "对于欧洲而言，战争，已经结束了。",
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[世界消息]\r[aqua]德国 战败！\r"
                ]
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "confirm",
                "text": "要观看结尾吗？",
                "yes": [
                    {
                        "type": "insert",
                        "name": "结尾剧情"
                    }
                ],
                "no": []
            },
            "Stage 11 已完成，欧洲战场落下帷幕，你已经可以退伍还乡与家人团聚了。但还有另一个选择：挑战附加章节。难度并不算大，而且剧情架空历史。你愿意吗？",
            {
                "type": "choices",
                "text": "\t[前往附加章节？]",
                "choices": [
                    {
                        "text": "来吧，就是干",
                        "action": [
                            {
                                "type": "confirm",
                                "text": "跳过剧情吗？",
                                "yes": [
                                    {
                                        "type": "changeFloor",
                                        "floorId": "MT416",
                                        "loc": [
                                            7,
                                            3
                                        ],
                                        "direction": "down"
                                    }
                                ],
                                "no": [
                                    {
                                        "type": "showImage",
                                        "code": 1,
                                        "image": "chapter12.jpg",
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
                                        "type": "changeFloor",
                                        "floorId": "MT415",
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
                    {
                        "text": "我累了，让我回去",
                        "action": [
                            {
                                "type": "win",
                                "reason": "Stage 11 胜利之歌（True End）"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "MT413",
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
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [640,641,  2,644,644,  2,270, 81,412,109,109,109,109,109,109],
    [640,641,  2,518,518,  2,  0,  2,664,642,109,109,109,109,109],
    [228,  0,  2,228,  0,270,  0,  2,  0,642,109,109,109,109,109],
    [ 81,  2,  2, 81,  2,  2,  2,  2,391,642,279,109,109,109,109],
    [275,266,  0,376,  0,391,  0,  2,  2,  2,642,109,109,109,109],
    [  0,265,375,228,375,  2,265,524,524,  2,639,639,109,109,109],
    [  2,  2,  2, 81,  2,  2,  2,  2,279,  2,  2,  2,109,109,109],
    [ 92,  0,  0,412,580,580,580,  2,275, 81,665,665,666, 89,109],
    [  2,  2,  2, 81,  2,  2,  2,  2,279,  2,  2,  2,109,109,109],
    [  0,265,375,228,375,  2,265,524,524,  2,639,639,109,109,109],
    [275,266,  0,376,  0,391,  0,  2,  2,  2,642,109,109,109,109],
    [ 81,  2,  2, 81,  2,  2,  2,  2,391,642,279,109,109,109,109],
    [228,  0,  2,228,  0,270,  0,  2,  0,642,109,109,109,109,109],
    [640,641,  2,518,518,  2,  0,  2,664,642,109,109,109,109,109],
    [640,641,  2,644,644,  2,270, 81,412,109,109,109,109,109,109]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,574,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,574,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,574,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0,  0],
    [  0,574,  0,  0,  0,574,  0,  0,  0,  0,  0,574,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [574,  0,  0,  0,  0,  0,574,  0,  0,  0,  0,574,  0,  0,  0],
    [  0,  0,  0,  0,  0,574,  0,  0,  0,574,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,574,  0,  0,  0,574,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,574,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,574,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "陆地"
}