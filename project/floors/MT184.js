main.floors.MT184=
{
    "floorId": "MT184",
    "title": "阿拉曼",
    "name": "阿拉曼",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "bgm6.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,0": [
            {
                "type": "setValue",
                "name": "flag:第26关通关",
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
                "text": "   一夜的激战下来，没有任何一支部\n队成功突破防线，指挥官阁下已经是其\n中进度最好的了。\n   太阳升起时，我们看到了地狱般的\n景象：士兵尸体和坦克残骸横七竖八地\n散落在德军的雷区里，甚至都找不出几\n具相对完整的。侥幸活下来的人，到现\n在也都魂不守舍。要突破“魔鬼的花园”\n，最好另寻他法。",
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
                "value": "28"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT186",
                        "loc": [
                            7,
                            7
                        ]
                    }
                ],
                "no": [
                    "1942年10月23日夜晚，盟军代号“轻足行动”正式开始。约900门大炮向德军阵地疯狂倾泻弹药，黑夜变得亮如白昼。那一晚，炮兵部队打光了125吨弹药，炮手的耳朵都震出了血。",
                    "紧接着，步兵开始了行动。在密集的枪林弹雨中，他们伴着风笛声，用刺刀从沙土中拔出一个又一个地雷引信，然后在不知何时倒在血泊中。",
                    "在两个61公里长，1公里宽的雷区中间挖出一条可供坦克通行的路，谈何容易，更别说两个雷区后面，德军的坦克和高射炮早已恭候多时。",
                    "虽然工兵的体重不足以触发反坦克地雷，但德军自然明白这一点。在大量的反坦克地雷中，还含有不少反步兵跳雷。这是一种极其残忍的武器。当受害者踩中地雷后，地雷最底层的炸药会立即将塞满钢珠的铁罐炸到半个人的高度，随后爆炸。直径一厘米的钢珠会向四周发射出去，将周围的人拦腰斩断，即便侥幸存活，腰部以下也很难保全。",
                    "工兵在雷区中清理出的安全区宽度仅能容纳1辆坦克通过，致使英军坦克陷入混乱的拥堵中，在雷区中，他们无法移动半步，然后顺理成章的成为火炮和飞机的活靶子。在狭窄的车体空间中，一旦装甲被击穿，只需要少量的装药便可轻松杀死整车人。",
                    "蒙哥马利对外宣称自己要回去睡觉，以显示自己对战局的自信，但事实上，他不可能睡得着。第二天早上，他收到的战报显示，没有一辆英军坦克成功突破雷区。",
                    "“魔鬼的花园”是英军短期内难以逾越的阻碍，但事实上，它的影响一直持续到今天。时至今日，仍然有地雷隐藏在黄沙之下，如同魔鬼一般，时不时取走某个非洲人民的一条腿，或是整条性命。",
                    "英军遭受了重大失误，蒙哥马利不得不开始反思失误的原因。但此时的德军内部也不好受。",
                    "由于推进过快且补给短缺，德军的伙食和卫生条件差到了极点。整个军营从上到下都没逃过疾病的折磨，回国治疗的隆美尔已经算是最幸运的了。",
                    "接替隆美尔的格奥尔德·施登姆将军于次日早上突发心脏病去世，德军一时间群龙无首，陷入骚乱。希特勒紧急取消了隆美尔的病假，命令他返回非洲。",
                    "病床都没坐热的隆美尔被迫飞回了非洲。“沙漠之狐”的回归使德军士气大振，但改变不了他们的劣势——德军的燃油仅能再支撑3天。",
                    "蒙哥马利的兵力是隆美尔的两倍，在这场漫长的消耗战中，隆美尔所有的技巧和策略，都变成了垂死挣扎。",
                    {
                        "type": "scrollText",
                        "text": "亲爱的露西：\n    我感到很绝望，夜不能寐。肩上的重担让我难以合眼。\n白天我十分疲惫，如果失败，将会是怎样的景象？\n这种想法日夜折磨着我。一旦出现差错，我将无力回天。\n                                                                                                      ——隆美尔给妻子的回信",
                        "time": 10000,
                        "lineHeight": 1.4
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "MT185",
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
        "7,14": {
            "floorId": "MT181",
            "loc": [
                7,
                0
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
    [148,148,148,148,148,148,148, 89,148,148,148,148,148,148,148],
    [148,148,148,148,148,148,148, 82,148,148,148,148,148,148,148],
    [148,148,148, 11,589, 81, 11,378, 11, 11, 81,248,148,148,148],
    [530,530,404, 11, 11,150,265,150,150,253,150,232,534,534,534],
    [150,150,408,150,150,150, 11,150, 11, 11,150,150,150,150, 81],
    [518,518,518,150,253,150,404, 81,265,150,150, 21, 21, 21,232],
    [150,150,150,150, 11, 81,571,150,530,390,150,150,150,150,150],
    [533,150,150,390,265,150,150,150,408,150,150,589,532,532,532],
    [533,150, 21,150,531,532,150, 11,250,530,150, 81,150,150,150],
    [533,150, 21,150,532,531,150,271,150,203, 81,215,150, 22, 21],
    [253,150,250,150,150,232,150, 81,150,150,150, 11,150, 21,382],
    [571,570, 11,253, 11, 11, 81,408, 81, 11,150,409,150,150, 81],
    [150, 82,150,150,150, 81,150,362,150, 11,250,571,571,250, 11],
    [539,232,539,150,518,589,150,536,150,150,150,150, 82,150,150],
    [536,536,536,150,518,518,150, 93,150,535,535,535,409,537,537]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}