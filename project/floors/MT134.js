main.floors.MT134=
{
    "floorId": "MT134",
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
    "bgm": "desert4.mp3",
    "firstArrive": [
        {
            "type": "text",
            "text": "\t[隆美尔]\f[rommel.png,0,310]我们的燃料已经见底。尽管心有不甘，我们也只能放弃现有占领区了，全军立刻撤离！",
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
        "\t[系统提示]敌军燃料耗尽，所有装甲部队的战斗力大幅度降低了！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "25000"
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "1300"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "hp",
            "value": "4000"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "atk",
            "value": "1500"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "hp",
            "value": "4000"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "atk",
            "value": "7000"
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "hp",
            "value": "6000"
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "atk",
            "value": "1500"
        },
        {
            "type": "setEnemy",
            "id": "panzer35t",
            "name": "hp",
            "value": "6000"
        },
        {
            "type": "setEnemy",
            "id": "panzer35t",
            "name": "atk",
            "value": "4000"
        },
        {
            "type": "setEnemy",
            "id": "panzer38t",
            "name": "hp",
            "value": "6000"
        },
        {
            "type": "setEnemy",
            "id": "panzer38t",
            "name": "atk",
            "value": "4500"
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "hp",
            "value": "8000"
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "atk",
            "value": "7000"
        },
        {
            "type": "setEnemy",
            "id": "panzer4c",
            "name": "hp",
            "value": "6000"
        },
        {
            "type": "setEnemy",
            "id": "panzer4c",
            "name": "atk",
            "value": "10000"
        },
        {
            "type": "setEnemy",
            "id": "panzer4e",
            "name": "hp",
            "value": "6000"
        },
        {
            "type": "setEnemy",
            "id": "panzer4e",
            "name": "atk",
            "value": "10000"
        },
        {
            "type": "setEnemy",
            "id": "stug3a",
            "name": "hp",
            "value": "2000"
        },
        {
            "type": "setEnemy",
            "id": "stug3a",
            "name": "atk",
            "value": "10000"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "0,4": [
            {
                "type": "setValue",
                "name": "flag:第20关通关",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:dry",
                "value": "false"
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
                                "time": 500
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
                                        "time": 500
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
                "text": "   我们第一次在北非的战役中打赢了\n德军！他们撤退了，托布鲁克的包围圈\n已不复存在！\n   德军的补给线拉的太长了，现在他\n们的弱点暴露无遗，只可惜他们撤的很\n是时候。乘胜追击，把失去的夺回来！",
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
                "type": "submitTask"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [],
                "no": [
                    "一开始，英军的行动相对顺利，只有装甲主力遭到炮火攻击，损失惨重，没能及时与其他辅助部队会合。",
                    "德军第15和21装甲师由于受到情报误导，开往了卡普措小路这个错误方向。在那里，他们没有发现任何敌人，想回撤时，第21装甲师已经没油了。",
                    "第15装甲师返回路上迎头撞上了英国第4装甲旅，久违地打了一场装甲对决。等英国援军赶到时，第4装甲旅已经损失惨重。",
                    "隆美尔指挥的两个装甲旅也拦住了英国第7装甲旅，把后者痛扁了一顿，直到援军赶到，倒霉的第7装甲旅才避免了全军覆没的命运。",
                    "英军部队之间的协调存在问题。隆美尔再次看准时机，迂回攻击其侧后方，虽然使对方损失惨重，但自己的兵力也所剩无几——没有援军和补给，实在是个大硬伤。",
                    "隆美尔唯有选择赌一把，他派出全部机动部队，向英军侧后方进军。他在赌英军害怕补给线被打断而向后回防，这样英军就会全线撤退，沙漠之狐将再次取得胜利。",
                    "但这一次，他没赌中。奥金莱克知道隆美尔面临更严重的补给危急，于是驳回了前线指挥官的撤退请求，命令部队无视后方威胁，全线继续进攻。",
                    "这一脚直接踩到了隆美尔的软肋。德意联军最具战斗力的只有隆美尔麾下的装甲师，后方的意大利军队完全不是英军的对手。几个回合打下来，意大利军就又投降了。",
                    "随着坦克燃料耗尽，隆美尔最后的希望也彻底破灭。在北非未尝一败的沙漠之狐终于选择了撤退，一撤就是600公里。同行的还有围困托布鲁克的德意联军，托布鲁克宣告解围。",
                    "经此一战，德军损失了超过300辆坦克和一万余士兵。意军损失超过2万，其中大多数是投降被俘的。",
                    "英军的损失虽然多于德军，但由于获得了战场打扫权，他们可以修复受损不严重的坦克并使其再度投入使用。",
                    "十字军行动无疑是成功的。隆美尔的激进策略遭到了后世的猜疑，但实际上，德军的补给和后勤问题，还有意大利坑队友的属性，已经注定了他们的失败。即便是隆美尔也只能尽可能的延缓这迟早到来的失败。在那种情况下，他也无可奈何。",
                    "德意联军在北非吃了大亏，但他们并没有全线溃败。他们撤回到班加西这个补给点，截住追击的英军后开始养精蓄锐。很快，他们就将卷土重来。"
                ]
            },
            {
                "type": "pauseBgm"
            },
            "Stage 4 已完成，是否提交分数？",
            {
                "type": "confirm",
                "text": "提交分数？",
                "yes": [
                    {
                        "type": "win",
                        "reason": "Stage 4 绝命沙原 新"
                    }
                ],
                "no": [
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[系统提示]发现一个独立副本，要挑战一下吗？（独立副本会重置角色的属性和道具，通过后全额返还。在副本中获得的属性和资源也无法带到后续主线任务中。但通关副本后获得的星星会参与计分。难度：简单）",
                    {
                        "type": "confirm",
                        "text": "挑战独立副本？",
                        "yes": [
                            "\t[系统提示]已选择挑战，剧情结束后将自动进入副本",
                            {
                                "type": "setValue",
                                "name": "flag:pearlharbor",
                                "value": "true"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:stage",
                                "value": "21"
                            }
                        ],
                        "no": [
                            "\t[系统提示]已选择不挑战，剧情结束后将自动跳过，进入主线",
                            {
                                "type": "setValue",
                                "name": "flag:pearlharbor",
                                "value": "false"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:stage",
                                "value": "22"
                            }
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    "长官，这是今天最后一架侦察机发回的报告。",
                    "又是没有发现任何敌情吗……",
                    "见鬼。情报部门没有任何发现，侦察机也几乎搜遍了整个太平洋。",
                    "那么多艘航空母舰，一下子就像人间蒸发了一样，毫无音讯。",
                    "他们到底会藏在哪呢？",
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "MT135",
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
        "14,9": {
            "floorId": "MT133",
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
    "autoEvent": {
        "0,5": {}
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [580,60028,  0, 81,266,150,266, 81,534,150,518,518,518,150,533],
    [588,60036,530,150,518,150,518,150,250,150,60032,232,60032,150,533],
    [570,408,  0,150,530,150,530,150,534, 81,253,534,253, 81,402],
    [60029,60030, 11,150,531,150,531,150,534,150,60026, 11,60026,150,533],
    [ 89,233, 82,150,532,404,532,150,530,150,220,534,220,150,150],
    [60029,60030,408,150,150, 82,150,150,402,150,150, 81,150,150,533],
    [532,532,403,530,  0, 11,  0,401,  0,403,  0,402,534,150,533],
    [534,532,60032,  0, 81,150,150,150, 11,150,150,150,  0, 11,401],
    [150,150,150,150,403,  0,250,60026,390,  0,401,150,250,150,150],
    [531,531,534,150,150,150, 11,150,150,150, 81,150,534,  0, 94],
    [531,531,271, 81,  0,  0,265,  0, 11,401,  0,  0,250,150,150],
    [150,150,150,150,150, 81,150,150,150,150, 11,60027,  0,  0,569],
    [580,150,520,232,534,534,404,520,150,532,265,60035,60034, 81,60034],
    [  0,271,530,150,150,150,150,530,150,532,532,60027,  0,232,  0],
    [581,150,520,232,534,534,404,520,150,518,60034,60035,518,518,518]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}