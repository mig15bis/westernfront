main.floors.MT301=
{
    "floorId": "MT301",
    "title": "德国",
    "name": "德国",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "sky.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "7days3.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up:2"
            ]
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                7,
                13
            ]
        },
        {
            "type": "animate",
            "name": "shootair",
            "loc": [
                7,
                2
            ]
        },
        {
            "type": "playSound",
            "name": "crash2.mp3"
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    2
                ]
            ],
            "remove": true,
            "time": 500
        },
        "混战中，你注意到一架与众不同的FW-190战斗机。他像条泥鳅一样，灵活地穿梭在机群中间，屠杀着你的战友。那不像一个新手飞行员应有的技术。而且他的引擎盖被涂成了显眼的亮黄色——他在高调地宣示着自己非同寻常。",
        "“那一定是个王牌飞行员”。基于以往的作战经验，你做出了这样的判断。",
        "你向他俯冲下去，对方也敏锐地察觉到了你的存在，他摇晃着机翼，似乎是接受了你的决斗邀请。",
        "没有裁判发号施令，两架战机的空中决战无声地拉开序幕。",
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[警告]飞翔的铁十字骑士 德军王牌飞行员 袭来！",
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
                    "type": "setValue",
                    "name": "flag:bosshp",
                    "value": "5"
                },
                {
                    "type": "setValue",
                    "name": "flag:bosshpmax",
                    "value": "5"
                },
                {
                    "type": "strokeRect",
                    "x": 130,
                    "y": 64,
                    "width": 256,
                    "height": 16,
                    "style": [
                        255,
                        255,
                        0,
                        1
                    ],
                    "lineWidth": 5
                },
                {
                    "type": "fillRect",
                    "x": 130,
                    "y": 64,
                    "width": 256,
                    "height": 16,
                    "style": [
                        255,
                        0,
                        0,
                        1
                    ]
                },
                {
                    "type": "fillBoldText",
                    "x": 130,
                    "y": 48,
                    "style": [
                        255,
                        0,
                        0,
                        1
                    ],
                    "strokeStyle": [
                        255,
                        140,
                        0,
                        1
                    ],
                    "font": "20px number",
                    "text": "5/5"
                }
            ]
        },
        {
            "type": "callBook"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]空战中，任何一个细微的错误都有可能导致死亡！（翻译：剧情杀很多）",
        "\t[系统提示]请注意剧情中分支选项的颜色，并在3秒内选中绿色的选项，否则就会被敌人折断翅膀！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT300",
            "loc": [
                0,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,4": [
            {
                "type": "if",
                "condition": "(flag:bosshp===5)",
                "true": [
                    {
                        "type": "previewUI",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:bosshp",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "clearMap",
                                "x": 128,
                                "y": 30,
                                "width": 100,
                                "height": 30
                            },
                            {
                                "type": "clearMap",
                                "x": "386 - ((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                "y": 64,
                                "width": "((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                "height": 16
                            },
                            {
                                "type": "fillBoldText",
                                "x": 130,
                                "y": 48,
                                "style": [
                                    255,
                                    0,
                                    0,
                                    1
                                ],
                                "strokeStyle": [
                                    255,
                                    140,
                                    0,
                                    1
                                ],
                                "font": "20px number",
                                "text": "4/5"
                            }
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "acepilot",
                        "loc": [
                            [
                                7,
                                4
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "敌机突然开始向上爬升，你紧追不舍。",
                    {
                        "type": "setCurtain",
                        "color": [
                            255,
                            255,
                            255,
                            1
                        ],
                        "time": 500,
                        "keep": true
                    },
                    "对方迎着太阳飞行，让太阳——他——你，三点连成一线。这是一套经典的战术。刺目的阳光让你很难睁开眼，敌机的轮廓在光芒中逐渐趋于消失。",
                    {
                        "type": "choices",
                        "text": "要怎么做？",
                        "choices": [
                            {
                                "text": "保持飞行姿态继续爬升",
                                "color": [
                                    255,
                                    0,
                                    0,
                                    1
                                ],
                                "action": [
                                    "尽管已经看不到敌机，但你知道他就在那。没有做出其他动作，你仍在不懈地追逐他。",
                                    {
                                        "type": "playSound",
                                        "name": "180-Skill24.mp3"
                                    },
                                    {
                                        "type": "screenFlash",
                                        "color": [
                                            255,
                                            0,
                                            0,
                                            1
                                        ],
                                        "time": 100,
                                        "times": 1
                                    },
                                    {
                                        "type": "screenFlash",
                                        "color": [
                                            255,
                                            0,
                                            0,
                                            1
                                        ],
                                        "time": 100,
                                        "times": 1
                                    },
                                    {
                                        "type": "screenFlash",
                                        "color": [
                                            255,
                                            0,
                                            0,
                                            1
                                        ],
                                        "time": 100,
                                        "times": 1
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "crash2.mp3"
                                    },
                                    {
                                        "type": "setCurtain",
                                        "color": [
                                            255,
                                            0,
                                            0,
                                            1
                                        ],
                                        "time": 500,
                                        "keep": true
                                    },
                                    "直到一连串炮弹打在你的飞机上，你的机翼被无情撕裂，驾驶舱里的火焰将你完全包裹。",
                                    "你能感受到飞机在不受控制地向下盘旋坠落，身体被数倍的重力压在座椅上动弹不得。所有的灭火手段和自救方式全都不起作用，你什么都做不到，只能掏出随身携带的手枪给自己一个痛快。",
                                    {
                                        "type": "restart"
                                    }
                                ]
                            },
                            {
                                "text": "向一侧略微偏开",
                                "color": [
                                    0,
                                    255,
                                    0,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "setBlock",
                                        "number": "fw190a3",
                                        "loc": [
                                            [
                                                7,
                                                2
                                            ]
                                        ],
                                        "time": 0
                                    },
                                    "你略微调整飞行姿态，让这条三点连成的直线不再成立。没了阳光的干扰，敌机的轮廓再度清晰可见。",
                                    {
                                        "type": "setCurtain",
                                        "time": 500
                                    },
                                    {
                                        "type": "animate",
                                        "name": "wonder",
                                        "loc": "hero",
                                        "async": true
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 100
                                    },
                                    {
                                        "type": "moveHero",
                                        "time": 100,
                                        "async": true,
                                        "steps": [
                                            "right:1"
                                        ]
                                    },
                                    {
                                        "type": "moveHero",
                                        "time": 0,
                                        "async": true,
                                        "steps": [
                                            "down:0"
                                        ]
                                    },
                                    {
                                        "type": "animate",
                                        "name": "shootair",
                                        "loc": [
                                            7,
                                            5
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "move",
                                        "loc": [
                                            7,
                                            2
                                        ],
                                        "time": 100,
                                        "keep": true,
                                        "steps": [
                                            "down:5"
                                        ]
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    "也正是在同一时刻，你看见了那架背对太阳高速俯冲下来的灰色战机——那是一架前来捣乱的FW190。",
                                    "最后关头，你及时采取规避机动，躲开了那些致命的炮弹。现在是一对二，必须尽快解决其中一个敌人，否则必然持续处于下风。"
                                ]
                            },
                            {
                                "text": "放弃追击，俯冲脱离",
                                "color": [
                                    255,
                                    0,
                                    0,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "setBlock",
                                        "number": "fw190a3",
                                        "loc": [
                                            [
                                                7,
                                                2
                                            ]
                                        ],
                                        "time": 0
                                    },
                                    {
                                        "type": "moveHero",
                                        "steps": [
                                            "down:0"
                                        ]
                                    },
                                    "这个敌人非常狡猾，现在敌明我暗，尚且不知道对方在谋划着什么。也许应该趁对方还未反应过来时，即刻俯冲脱离战斗。",
                                    {
                                        "type": "setCurtain",
                                        "time": 500
                                    },
                                    {
                                        "type": "animate",
                                        "name": "wonder",
                                        "loc": "hero"
                                    },
                                    {
                                        "type": "animate",
                                        "name": "shoot3",
                                        "loc": "hero",
                                        "async": true
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "180-Skill24.mp3"
                                    },
                                    {
                                        "type": "screenFlash",
                                        "color": [
                                            255,
                                            0,
                                            0,
                                            1
                                        ],
                                        "time": 100,
                                        "times": 1
                                    },
                                    {
                                        "type": "screenFlash",
                                        "color": [
                                            255,
                                            0,
                                            0,
                                            1
                                        ],
                                        "time": 100,
                                        "times": 1
                                    },
                                    {
                                        "type": "screenFlash",
                                        "color": [
                                            255,
                                            0,
                                            0,
                                            1
                                        ],
                                        "time": 100,
                                        "times": 1
                                    },
                                    {
                                        "type": "setCurtain",
                                        "color": [
                                            255,
                                            0,
                                            0,
                                            1
                                        ],
                                        "time": 500,
                                        "keep": true
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "crash2.mp3"
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    "视野恢复清晰，但当你看向后视镜时，却绝望地发现身后的两名紧追不舍的敌人向你抛洒的致命弹雨。",
                                    "刚刚结束爬升的你损失了太多能量，飞机已然无力做出任何规避机动。乱枪之中，你的身体被其中一颗20毫米炮弹大卸八块，你彻底失去了意识。",
                                    {
                                        "type": "restart"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:bosshp===4)",
                        "true": [
                            {
                                "type": "setBlock",
                                "number": "acepilot",
                                "loc": [
                                    [
                                        7,
                                        4
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "if",
                                "condition": "(blockId:7,7==='fw190a3')",
                                "true": [
                                    "你选择了擒贼先擒王，优先干掉技术好的那一个，再来收拾他的僚机。",
                                    "但你忽略了一点：王，有时并不好擒；而兵，有时候不一定弱。",
                                    "敌军王牌飞行员在你的枪林弹雨中不停翻滚躲避，你不得不把全部的精力都放在他的身上。",
                                    "而那架被你忽略的僚机，则悄悄来到你的身后，等待长机为他创造射击窗口。",
                                    "他猛地向左急转，那正是他僚机的枪线，而你则正中下怀，跟了上去。",
                                    {
                                        "type": "playSound",
                                        "name": "180-Skill24.mp3"
                                    },
                                    {
                                        "type": "screenFlash",
                                        "color": [
                                            255,
                                            0,
                                            0,
                                            1
                                        ],
                                        "time": 100,
                                        "times": 1
                                    },
                                    {
                                        "type": "screenFlash",
                                        "color": [
                                            255,
                                            0,
                                            0,
                                            1
                                        ],
                                        "time": 100,
                                        "times": 1
                                    },
                                    {
                                        "type": "screenFlash",
                                        "color": [
                                            255,
                                            0,
                                            0,
                                            1
                                        ],
                                        "time": 100,
                                        "times": 1
                                    },
                                    {
                                        "type": "setCurtain",
                                        "color": [
                                            255,
                                            0,
                                            0,
                                            1
                                        ],
                                        "time": 500,
                                        "keep": true
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "crash2.mp3"
                                    },
                                    "你的战机不受控制地向下坠落，好在你成功跳了下去，打开降落伞，捡回一条小命。",
                                    "对方从你的身边飞过，宣示着他的又一次胜利。他遵守着骑士精神，没有向你开火。",
                                    "但这里毕竟是敌占区。你刚落地，就被地面上的敌人团团围住。他们将你关进集中营，你在里面忍受着非人的残酷虐待，直到战争结束才重获自由。",
                                    {
                                        "type": "restart"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "previewUI",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:bosshp",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "clearMap",
                                                "x": 128,
                                                "y": 30,
                                                "width": 100,
                                                "height": 30
                                            },
                                            {
                                                "type": "clearMap",
                                                "x": "386 - ((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                                "y": 64,
                                                "width": "((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                                "height": 16
                                            },
                                            {
                                                "type": "fillBoldText",
                                                "x": 130,
                                                "y": 48,
                                                "style": [
                                                    255,
                                                    0,
                                                    0,
                                                    1
                                                ],
                                                "strokeStyle": [
                                                    255,
                                                    140,
                                                    0,
                                                    1
                                                ],
                                                "font": "20px number",
                                                "text": "3/5"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    "你选择先解决掉碍事的杂鱼。他的技术不如你，没撑一会就被你的子弹击中，冒出黑烟。虽然没被你当场击落，但也不得不俯冲脱离战场。",
                                    "现在没有外人干扰，你可以和他公平地一对一决斗了。但，现在他死死地咬在你的六点钟方向，这不是什么好消息。"
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:bosshp===3)",
                                "true": [
                                    {
                                        "type": "previewUI",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:bosshp",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "clearMap",
                                                "x": 128,
                                                "y": 30,
                                                "width": 100,
                                                "height": 30
                                            },
                                            {
                                                "type": "clearMap",
                                                "x": "386 - ((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                                "y": 64,
                                                "width": "((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                                "height": 16
                                            },
                                            {
                                                "type": "fillBoldText",
                                                "x": 130,
                                                "y": 48,
                                                "style": [
                                                    255,
                                                    0,
                                                    0,
                                                    1
                                                ],
                                                "strokeStyle": [
                                                    255,
                                                    140,
                                                    0,
                                                    1
                                                ],
                                                "font": "20px number",
                                                "text": "2/5"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "acepilot",
                                        "loc": [
                                            [
                                                7,
                                                4
                                            ]
                                        ],
                                        "time": 0
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    "你们从云层之上一路追打到近乎贴地飞行。他一直在你身后穷追不舍，你必须做些什么，否则迟早会被他击落。",
                                    {
                                        "type": "choices",
                                        "text": "要怎么做？",
                                        "choices": [
                                            {
                                                "text": "殷麦曼滚转",
                                                "color": [
                                                    255,
                                                    0,
                                                    0,
                                                    1
                                                ],
                                                "action": [
                                                    "你尝试做殷麦曼滚转，绕到他身后进行攻击。",
                                                    "然而，机械呆板的动作很快引起了对手的注意，他预判到了你的动作。当你翻转机身向上翻滚时，他只是轻轻抬头，便将你套进了准星里面。",
                                                    {
                                                        "type": "playSound",
                                                        "name": "180-Skill24.mp3"
                                                    },
                                                    {
                                                        "type": "screenFlash",
                                                        "color": [
                                                            255,
                                                            0,
                                                            0,
                                                            1
                                                        ],
                                                        "time": 100,
                                                        "times": 1
                                                    },
                                                    {
                                                        "type": "screenFlash",
                                                        "color": [
                                                            255,
                                                            0,
                                                            0,
                                                            1
                                                        ],
                                                        "time": 100,
                                                        "times": 1
                                                    },
                                                    {
                                                        "type": "screenFlash",
                                                        "color": [
                                                            255,
                                                            0,
                                                            0,
                                                            1
                                                        ],
                                                        "time": 100,
                                                        "times": 1
                                                    },
                                                    {
                                                        "type": "playSound",
                                                        "name": "crash2.mp3"
                                                    },
                                                    {
                                                        "type": "setCurtain",
                                                        "color": [
                                                            255,
                                                            0,
                                                            0,
                                                            1
                                                        ],
                                                        "time": 500,
                                                        "keep": true
                                                    },
                                                    "发动机机油喷溅了你一身，驾驶舱内的火焰立即将你吞噬。你在烈焰的炙烤中永远闭上了眼睛。",
                                                    {
                                                        "type": "restart"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "水平跟他绕",
                                                "color": [
                                                    255,
                                                    0,
                                                    0,
                                                    1
                                                ],
                                                "action": [
                                                    "你知道FW190战斗机的水平机动性不强，你打算利用这一点在狗斗中战胜他。",
                                                    {
                                                        "type": "playSound",
                                                        "name": "fighter.mp3"
                                                    },
                                                    {
                                                        "type": "move",
                                                        "loc": [
                                                            7,
                                                            4
                                                        ],
                                                        "time": 400,
                                                        "keep": true,
                                                        "steps": [
                                                            "up:5"
                                                        ]
                                                    },
                                                    "你开始水平机动，然而过了一会，你向后看去，却没有看到对手。",
                                                    "“难道他走了？”你刚要这么想。突然你后背一凉，向头顶看去——",
                                                    "那一刻，你才想起一件刚刚被你遗忘的事：只有新手才会死板地跟敌人玩水平绕圈，有经验的老鸟都是打能量战的。而刚从高空俯冲而下的他，最不缺的就是动能。",
                                                    "现在想躲也来不及了，水平机动损失了太多速度，原本轻盈灵活的飞机此时笨重的像块会飞的砖头。",
                                                    {
                                                        "type": "move",
                                                        "loc": [
                                                            7,
                                                            -1
                                                        ],
                                                        "time": 400,
                                                        "keep": true,
                                                        "steps": [
                                                            "down:5"
                                                        ]
                                                    },
                                                    {
                                                        "type": "playSound",
                                                        "name": "180-Skill24.mp3"
                                                    },
                                                    {
                                                        "type": "screenFlash",
                                                        "color": [
                                                            255,
                                                            0,
                                                            0,
                                                            1
                                                        ],
                                                        "time": 100,
                                                        "times": 1
                                                    },
                                                    {
                                                        "type": "screenFlash",
                                                        "color": [
                                                            255,
                                                            0,
                                                            0,
                                                            1
                                                        ],
                                                        "time": 100,
                                                        "times": 1
                                                    },
                                                    {
                                                        "type": "screenFlash",
                                                        "color": [
                                                            255,
                                                            0,
                                                            0,
                                                            1
                                                        ],
                                                        "time": 100,
                                                        "times": 1
                                                    },
                                                    {
                                                        "type": "playSound",
                                                        "name": "crash2.mp3"
                                                    },
                                                    {
                                                        "type": "setCurtain",
                                                        "color": [
                                                            255,
                                                            0,
                                                            0,
                                                            1
                                                        ],
                                                        "time": 500,
                                                        "keep": true
                                                    },
                                                    "你的机翼被撕裂。而在低空，你甚至没有时间跳伞。你只能眼睁睁地看着自己向一颗大树笔直地撞去。一声巨响后，你的眼前一片漆黑，直到永远。",
                                                    {
                                                        "type": "restart"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "向高空拖带",
                                                "color": [
                                                    0,
                                                    255,
                                                    0,
                                                    1
                                                ],
                                                "action": [
                                                    "你利用“野马”战斗机的机动性优势，一边盘旋，一边拉升高度，试图引诱对方跟随你爬升，并逐渐失去能量。",
                                                    {
                                                        "type": "animate",
                                                        "name": "irritable",
                                                        "loc": [
                                                            7,
                                                            4
                                                        ]
                                                    },
                                                    "然而对方似乎很明白自己的飞机弱势在哪里，并没有跟着你走。他拉开距离，局势重新洗牌。"
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:bosshp===2)",
                                        "true": [
                                            {
                                                "type": "previewUI",
                                                "action": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:bosshp",
                                                        "operator": "-=",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "clearMap",
                                                        "x": 128,
                                                        "y": 30,
                                                        "width": 100,
                                                        "height": 30
                                                    },
                                                    {
                                                        "type": "clearMap",
                                                        "x": "386 - ((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                                        "y": 64,
                                                        "width": "((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                                        "height": 16
                                                    },
                                                    {
                                                        "type": "fillBoldText",
                                                        "x": 130,
                                                        "y": 48,
                                                        "style": [
                                                            255,
                                                            0,
                                                            0,
                                                            1
                                                        ],
                                                        "strokeStyle": [
                                                            255,
                                                            140,
                                                            0,
                                                            1
                                                        ],
                                                        "font": "20px number",
                                                        "text": "1/5"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "acepilot",
                                                "loc": [
                                                    [
                                                        7,
                                                        4
                                                    ]
                                                ],
                                                "time": 0
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            "你们重新回到了高空，结束了激烈的缠斗，拉开了一段距离。",
                                            "对方重新调整方向，向你迎面飞来。看起来，他想与你对射。",
                                            {
                                                "type": "choices",
                                                "text": "要怎么做？",
                                                "choices": [
                                                    {
                                                        "text": "诚信对头，谁怂谁是狗！",
                                                        "color": [
                                                            255,
                                                            0,
                                                            0,
                                                            1
                                                        ],
                                                        "action": [
                                                            "为了快速结束这一切，你也同样调整方向，迎着他冲了过去。",
                                                            "你的6挺12.7mm机枪，对阵他的2挺7.92mm机枪和4门20mm机炮。双方马力全开，引擎隆隆作响，似是要在天空中撞个同归于尽。",
                                                            {
                                                                "type": "playSound",
                                                                "name": "180-Skill24.mp3"
                                                            },
                                                            {
                                                                "type": "screenFlash",
                                                                "color": [
                                                                    255,
                                                                    0,
                                                                    0,
                                                                    1
                                                                ],
                                                                "time": 100,
                                                                "times": 1
                                                            },
                                                            {
                                                                "type": "screenFlash",
                                                                "color": [
                                                                    255,
                                                                    0,
                                                                    0,
                                                                    1
                                                                ],
                                                                "time": 100,
                                                                "times": 1
                                                            },
                                                            {
                                                                "type": "screenFlash",
                                                                "color": [
                                                                    255,
                                                                    0,
                                                                    0,
                                                                    1
                                                                ],
                                                                "time": 100,
                                                                "times": 1
                                                            },
                                                            {
                                                                "type": "playSound",
                                                                "name": "crash2.mp3"
                                                            },
                                                            {
                                                                "type": "setCurtain",
                                                                "color": [
                                                                    255,
                                                                    0,
                                                                    0,
                                                                    1
                                                                ],
                                                                "time": 500,
                                                                "keep": true
                                                            },
                                                            "一阵枪炮的怒吼声音过后，胜负已然分晓——FW190坚固的护甲扛住了冲击，尽管遍体鳞伤，但他仍然能强撑着摇摇晃晃地返回基地，再不济也可以在自家天空中跳伞获救。",
                                                            "但你的野马战机没有那么强大的护甲，你的飞机被打得支离破碎，彻底失去平衡，向下盘旋坠去。",
                                                            "最后关头，你打碎座舱玻璃跳了下去，并在半空中成功拉开降落伞。你被挂在一颗树上，直到巡逻的德军士兵将你发现，他们把你关进集中营。",
                                                            "你在里面遭受了不计其数的虐待和严刑拷打，直到战争结束，才带着满身伤口重获自由。",
                                                            {
                                                                "type": "restart"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "汪汪汪！",
                                                        "color": [
                                                            0,
                                                            255,
                                                            0,
                                                            1
                                                        ],
                                                        "action": [
                                                            "即便最终能够赢得对射的胜利，也免不了满身伤口。你不喜欢这种以命换命的打法，你还想活着回去。",
                                                            "在他开火的瞬间，你一个翻身成功躲开了所有的子弹，而他因为没有控制好速度，向前冲去。现在，局势已然逆转，你反咬住了他的六点方向！",
                                                            {
                                                                "type": "setEnemy",
                                                                "id": "acepilot",
                                                                "name": "money",
                                                                "value": "200",
                                                                "norefresh": true
                                                            },
                                                            {
                                                                "type": "setEnemy",
                                                                "id": "acepilot",
                                                                "name": "exp",
                                                                "value": "500"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "(flag:bosshp===1)",
                                                "true": [
                                                    {
                                                        "type": "previewUI",
                                                        "action": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:bosshp",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "clearMap",
                                                                "x": 128,
                                                                "y": 30,
                                                                "width": 100,
                                                                "height": 30
                                                            },
                                                            {
                                                                "type": "clearMap",
                                                                "x": "386 - ((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                                                "y": 64,
                                                                "width": "((flags.bosshpmax - flags.bosshp) / flags.bosshpmax) * 256",
                                                                "height": 16
                                                            },
                                                            {
                                                                "type": "fillBoldText",
                                                                "x": 130,
                                                                "y": 48,
                                                                "style": [
                                                                    255,
                                                                    0,
                                                                    0,
                                                                    1
                                                                ],
                                                                "strokeStyle": [
                                                                    255,
                                                                    140,
                                                                    0,
                                                                    1
                                                                ],
                                                                "font": "20px number",
                                                                "text": "0/5"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "playSound",
                                                        "name": "crash2.mp3"
                                                    },
                                                    {
                                                        "type": "sleep",
                                                        "time": 500
                                                    },
                                                    "你一个短点射成功击中了他的飞机，使其燃起大火，失控坠向地面。",
                                                    "你没有继续追击，而是透过气泡形的座舱死死地盯着他，看着这架燃烧的FW190的高度逐渐降低，直到化作地上的一团火球。",
                                                    "你没看到降落伞。",
                                                    "“看来，是我赢了。”你这么想着。你的心中涌起两种情感，一种是对这场来之不易胜利的喜悦之情，而另一种，是对这旗鼓相当的对手而感到惋惜。也许，对方与你年纪相仿，也许，对方也有自己的家人……",
                                                    "但现在，思考这些也没有意义了。这是一场你死我活的战争，如果你没有杀死他，那么他就会杀死你。更何况，他现在站在纳粹那边，你不能容忍这家伙继续为希特勒服役，协助纳粹的铁蹄残害世界。",
                                                    "你还有任务在身，无暇顾及一个连样貌都没看清的敌人。于是，你转头向轰炸机群飞去，宣告这场决斗的落幕。",
                                                    {
                                                        "type": "playSound",
                                                        "name": "xinxinmagic.mp3"
                                                    },
                                                    "\t[系统提示]支线boss战 胜利！",
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:MT301boss",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "openDoor",
                                                        "loc": [
                                                            7,
                                                            13
                                                        ]
                                                    },
                                                    {
                                                        "type": "openDoor",
                                                        "loc": [
                                                            2,
                                                            10
                                                        ]
                                                    },
                                                    {
                                                        "type": "openDoor",
                                                        "loc": [
                                                            12,
                                                            10
                                                        ]
                                                    },
                                                    {
                                                        "type": "clearMap",
                                                        "x": 0,
                                                        "y": 0,
                                                        "width": 480,
                                                        "height": 480
                                                    },
                                                    {
                                                        "type": "forbidSave"
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
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [109,109,109,109,109,109,109,109,109,109,109,109,109,109,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,633,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,634,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,109, 85,109,109,  0,  0,  0,  0,  0,109,109, 85,109,109],
    [109,540,541,540,109,  0,  0,  0,  0,  0,109,519,524,519,109],
    [109,541,662,541,109,  0,  0,  0,  0,  0,109,341,590,341,109],
    [109,540,541,540,109,  0,  0,  0,  0,  0,109,519,524,519,109],
    [109,109,109,109,109,109,109, 90,109,109,109,109,109,109,109]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}