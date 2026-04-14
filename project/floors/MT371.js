main.floors.MT371=
{
    "floorId": "MT371",
    "title": "荷兰",
    "name": "荷兰",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass2",
    "bgm": "hitman.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                7,
                14
            ]
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[警告]怎么又是你 防御大师 奥托·莫里茨·瓦尔特·莫德尔 袭来",
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
                    "value": "4"
                },
                {
                    "type": "setValue",
                    "name": "flag:bosshpmax",
                    "value": "4"
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
                    "text": "4/4"
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,14": [
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
                "text": "   即便是有指挥官阁下在，也无法挽\n回局面。市场花园行动是一次彻头彻尾\n的失败。\n   敌人是从什么时候将这么多部队部\n署在荷兰的？这已经不重要了。他们的\n防御异常坚固，我们尝试为包围圈内的\n空降部队解围，但以失败告终。我们愧\n对这些身处包围圈却仍然坚持执行任务，\n直到最后一刻也不放弃的战士们。我们\n再也没有足够的空降部队可供使用了。",
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
                "value": "51"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT373",
                        "loc": [
                            5,
                            10
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    "1944年9月17日，盟军发起代号“市场花园”的行动，旨在夺取跨越莱茵河、瓦尔河等河流上的一系列重要桥梁后，从荷兰直插德国腹地，争取在1944年圣诞前结束欧洲战场作战",
                    "英美空军掏出了各自的全部家当，将3.5万人，568门火炮，1927辆军车和5230吨物资空降到了德军阵线后方，成就了人类战争史上规模最大的空降作战行动。在空降部队落地的同时，地面部队也同步行动增援。",
                    "但是，这次行动的策划者蒙哥马利并不知道，德军在盟军预定的空降地区，部署了2个装甲师的兵力。如此大规模的空降行动，在地面上的德军眼里，却成了一大群飘在天上任人宰割的铁十字勋章。",
                    "士兵们举起一切能开火的武器朝天上射击，场面直接变成了“打鸟大赛”，许多盟军伞兵还没落地就“成盒”了。",
                    "侥幸落地的空降兵们一边集结完成各自的任务，一边向大部队求援。盟军主力部队收到消息立即行动，但很不巧，他们碰上了一个硬茬子——防御大师莫德尔。",
                    "就算是在地狱般的苏德战场上，只要莫德尔在防守，哪怕朱可夫来了都得掂量掂量，盟军部队纵使有着装备数量的优势，也敌不过莫德尔固若金汤的防御。",
                    "到9月26日，市场花园行动的第9天，盟军付出巨大代价，在宽200公里的正面上向纵深推进了45—90公里，但没有完成既定目标，行动已经宣告失败。",
                    "深入敌后的伞兵们为了生存而奋勇抗击敌军。负责夺取阿纳姆大桥的英国第1空降师的一支700人小队虽然突入大桥另一端，但也被德军包围。他们用仅有的机枪、手榴弹和燃烧瓶与德军装甲部队激烈对抗，死守大桥4天。",
                    "但这支部队没有补给，没有增援，失守注定只是时间问题。21日清晨，他们的电台发出最后一封电报：“弹尽粮绝，神佑吾王”。一场激烈的白刃战后，这支英勇小队全军覆没。",
                    "后来，阿纳姆大桥被称为“遥远的桥”，因为它对盟军而言实在是遥不可及。讽刺的是，这座英军拼死守卫的桥梁，为了防止被德军继续使用，被盟军轰炸机于1944年10月7日炸毁。1948年，这里重新建起另一座桥，并于1977年更名为约翰·弗罗斯特桥——这是那支守桥小队的指挥官的名字。",
                    "市场花园行动是一场毫无争议的大败。战役历时9天，盟军失去了2万人的精锐部队，而德军仅伤亡8000人（其中2000阵亡，6000负伤）。此战之后直到战争结束，美军都没再进行过空降作战，因为精锐在这一战中几乎全灭。",
                    "蒙哥马利的指挥能力遭到质疑。也许，在北非击败隆美尔只是个偶然，以德军对隆美尔的补给水平，可能他本来就无法拿下非洲，换成奥金莱克和韦维尔也一样能打败他，只是由蒙哥马利踢出了最后的一脚。这之后，盟军，尤其已经成长起来的美军，就不再愿意听从蒙哥马利的指令了。这也为战后美国掌握话语权提供了一定基础。",
                    "而说起隆美尔……",
                    "他被卷进1944年7月20日，希特勒遭遇炸弹袭击的事件中。虽然他并没有直接参与刺杀，但也事先知道刺杀计划而没有阻止，也算是有知情不报的间接关系。事实上，他也早已对希特勒的独裁统治颇有微词，也希望刺杀能够成功。他仍然选择为希特勒卖命，不过是想保护自己的祖国和家庭。",
                    "得知这一切的希特勒十分愤怒，但他不能公然以叛国罪处死隆美尔。隆美尔此时已经是国民英雄，如果一位民众公认的忠心耿耿的大元帅都选择了背叛，他的统治地位也必将动摇。他必须想别的办法。",
                    "1944年10月14日，盖世太保包围了隆美尔的住所，并将一瓶氰化钾（毒药）交给了他。盖世太保传达了希特勒的口谕，如果隆美尔选择自杀，希特勒保证不会牵连他的家属和其他无辜的手下，否则就尽一切可能的迫害他们。这对无比关爱家人的隆美尔而言，无疑是直戳要害。",
                    "与妻儿做了最后的道别后，隆美尔带上自己的元帅权杖，走上盖世太保准备的卡车。中午12点，这位传奇将军在氰化钾的作用下，永远闭上了眼睛。享年53岁。他的死因被对外宣称为中风，希特勒按照约定为他举行了隆重的国葬仪式，也没有再为难他的家人。",
                    "德国民众纷纷来到现场，为他献上鲜花。就连盟军也十分欣赏这位善待下属，优待战俘，尽职尽责，忠心耿耿，除了生在德国而被迫为纳粹卖命以外，几乎没有任何污点的敌军将领。于是特地在那一天停止了空袭，以表对这场葬礼的尊重。几乎整个欧洲都在为隆美尔哀悼，除了没有出席葬礼的希特勒。",
                    "之后的希特勒不再信任自己的将军们，转而去洗脑和培养青年团的小孩子们为他卖命。无论如何，他逐渐失去人民的信任这一点已是不争的事实。他的失败，已经无可挽回。",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "镜头闪回，在地面推进的同时，一个来自海上的威胁重新进入盟军的视野——德军提尔皮茨号战列舰。",
                    "尽管提尔皮茨号曾遭遇数次重创，英军却始终没能彻底将其击沉。如今，这艘巨舰已经完成修复，纵使已经形单影只，但只要她还在海上漂着，就是一个巨大威胁。",
                    "英国方面，时刻准备着彻底除掉这艘最难缠的德军大型战列舰。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT372",
                        "loc": [
                            -1,
                            -1
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "7,1": [
            {
                "type": "if",
                "condition": "(flag:bosshp===4)",
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
                                "text": "3/4"
                            }
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "model",
                        "loc": [
                            [
                                7,
                                1
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
                            13
                        ],
                        "time": 10,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:MT371boss",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "text",
                        "text": "\t[莫德尔]\f[model.png,0,310]装甲部队，立即前往指定防御阵位。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5d",
                        "loc": [
                            [
                                5,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                6,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                6,
                                7
                            ],
                            [
                                8,
                                7
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "jagpanzer",
                        "loc": [
                            [
                                6,
                                6
                            ],
                            [
                                8,
                                6
                            ],
                            [
                                6,
                                8
                            ],
                            [
                                8,
                                8
                            ],
                            [
                                4,
                                1
                            ],
                            [
                                10,
                                1
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer5g",
                        "loc": [
                            [
                                5,
                                3
                            ],
                            [
                                6,
                                4
                            ],
                            [
                                8,
                                4
                            ],
                            [
                                9,
                                3
                            ],
                            [
                                7,
                                5
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "tigere",
                        "loc": [
                            [
                                5,
                                1
                            ],
                            [
                                9,
                                1
                            ],
                            [
                                6,
                                2
                            ],
                            [
                                8,
                                2
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "howitzer180",
                        "loc": [
                            [
                                7,
                                2
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "blue6Gem",
                        "loc": [
                            [
                                1,
                                4
                            ],
                            [
                                1,
                                6
                            ],
                            [
                                1,
                                5
                            ],
                            [
                                13,
                                4
                            ],
                            [
                                13,
                                5
                            ],
                            [
                                13,
                                6
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                                        "text": "2/4"
                                    }
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "model",
                                "loc": [
                                    [
                                        7,
                                        1
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
                                    13
                                ],
                                "time": 10,
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "text",
                                "text": "\t[莫德尔]\f[model.png,0,310]依托有利地形，别让盟军突破防线。",
                                "pos": [
                                    100,
                                    300,
                                    380
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "flak120",
                                "loc": [
                                    [
                                        1,
                                        1
                                    ],
                                    [
                                        13,
                                        1
                                    ],
                                    [
                                        1,
                                        4
                                    ],
                                    [
                                        13,
                                        4
                                    ],
                                    [
                                        1,
                                        9
                                    ],
                                    [
                                        13,
                                        9
                                    ],
                                    [
                                        5,
                                        11
                                    ],
                                    [
                                        9,
                                        11
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "attankinf",
                                "loc": [
                                    [
                                        3,
                                        10
                                    ],
                                    [
                                        11,
                                        10
                                    ],
                                    [
                                        3,
                                        9
                                    ],
                                    [
                                        11,
                                        9
                                    ],
                                    [
                                        6,
                                        9
                                    ],
                                    [
                                        8,
                                        9
                                    ],
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "lightmg",
                                "loc": [
                                    [
                                        5,
                                        10
                                    ],
                                    [
                                        9,
                                        10
                                    ],
                                    [
                                        2,
                                        8
                                    ],
                                    [
                                        12,
                                        8
                                    ],
                                    [
                                        2,
                                        7
                                    ],
                                    [
                                        12,
                                        7
                                    ],
                                    [
                                        5,
                                        8
                                    ],
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "mg42",
                                "loc": [
                                    [
                                        12,
                                        5
                                    ],
                                    [
                                        13,
                                        6
                                    ],
                                    [
                                        2,
                                        5
                                    ],
                                    [
                                        1,
                                        6
                                    ],
                                    [
                                        7,
                                        5
                                    ],
                                    [
                                        6,
                                        4
                                    ],
                                    [
                                        8,
                                        4
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        1,
                                        5
                                    ],
                                    [
                                        13,
                                        5
                                    ],
                                    [
                                        1,
                                        8
                                    ],
                                    [
                                        13,
                                        8
                                    ],
                                    [
                                        6,
                                        6
                                    ],
                                    [
                                        8,
                                        6
                                    ],
                                    [
                                        1,
                                        2
                                    ],
                                    [
                                        2,
                                        1
                                    ],
                                    [
                                        12,
                                        1
                                    ],
                                    [
                                        13,
                                        2
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "tigerking",
                                "loc": [
                                    [
                                        7,
                                        2
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "jagpanzer",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ],
                                    [
                                        9,
                                        5
                                    ],
                                    [
                                        4,
                                        7
                                    ],
                                    [
                                        10,
                                        7
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "howitzer180",
                                "loc": [
                                    [
                                        4,
                                        1
                                    ],
                                    [
                                        10,
                                        1
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "blue6Gem",
                                "loc": [
                                    [
                                        2,
                                        13
                                    ],
                                    [
                                        3,
                                        13
                                    ],
                                    [
                                        11,
                                        13
                                    ],
                                    [
                                        12,
                                        13
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "waitAsync"
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
                                                "text": "1/4"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "model",
                                        "loc": [
                                            [
                                                7,
                                                1
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
                                            13
                                        ],
                                        "time": 10,
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    {
                                        "type": "text",
                                        "text": "\t[莫德尔]\f[model.png,0,310]那么，试试这些呢？",
                                        "pos": [
                                            100,
                                            300,
                                            380
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "v1missile",
                                        "loc": [
                                            [
                                                2,
                                                2
                                            ],
                                            [
                                                12,
                                                2
                                            ],
                                            [
                                                5,
                                                8
                                            ],
                                            [
                                                9,
                                                8
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "do17z",
                                        "loc": [
                                            [
                                                1,
                                                1
                                            ],
                                            [
                                                4,
                                                1
                                            ],
                                            [
                                                10,
                                                1
                                            ],
                                            [
                                                13,
                                                1
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "fritzx",
                                        "loc": [
                                            [
                                                2,
                                                5
                                            ],
                                            [
                                                12,
                                                5
                                            ],
                                            [
                                                6,
                                                7
                                            ],
                                            [
                                                8,
                                                7
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "v2missile",
                                        "loc": [
                                            [
                                                3,
                                                3
                                            ],
                                            [
                                                11,
                                                3
                                            ],
                                            [
                                                9,
                                                2
                                            ],
                                            [
                                                5,
                                                2
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "me262",
                                        "loc": [
                                            [
                                                7,
                                                2
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "model",
                                        "name": "money",
                                        "value": "100",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "model",
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
                                        "condition": "(flag:MT371boss===1)",
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
                                                        "text": "0/4"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "model",
                                                "loc": [
                                                    [
                                                        7,
                                                        1
                                                    ]
                                                ],
                                                "time": 0
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            {
                                                "type": "text",
                                                "text": "\t[蒙哥马利]\f[montgomary.png,0,310]我们的损失巨大，也没有成功救出被困的空降部队。这是一次彻头彻尾的失败。",
                                                "pos": [
                                                    100,
                                                    300,
                                                    380
                                                ]
                                            },
                                            {
                                                "type": "text",
                                                "text": "\t[莫德尔]\f[model.png,0,310]敌人的攻势被挡下了，我们打了一场漂亮仗。但整场战争的大局并没有被改变，我依旧看不到任何反败为胜的希望。",
                                                "pos": [
                                                    100,
                                                    300,
                                                    380
                                                ]
                                            },
                                            "\t[系统提示]主线boss战 胜利！",
                                            {
                                                "type": "setValue",
                                                "name": "flag:第49关通关",
                                                "value": "1"
                                            },
                                            {
                                                "type": "hide",
                                                "loc": [
                                                    [
                                                        7,
                                                        1
                                                    ]
                                                ],
                                                "remove": true,
                                                "time": 0
                                            },
                                            {
                                                "type": "openDoor",
                                                "loc": [
                                                    13,
                                                    13
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
    [109,109,109,109,109,109,109,109,109,109,109,109,109,109,109],
    [109,  0,  0,109,  0,  0,109,280,109,  0,  0,109,  0,  0,109],
    [109,  0,  0,  0,109,  0,270,  0,270,  0,109,  0,  0,  0,109],
    [109,109,109,  0,266,  0,  0,109,  0,  0,266,  0,109,109,109],
    [109,  0,109,275,  0,109,391,  0,391,109,  0,275,109,  0,109],
    [109,  0,  0,  0,275,  0,109,275,109,  0,275,  0,  0,  0,109],
    [109,  0,265,109,109,109,  0,  0,  0,109,109,109,265,  0,109],
    [109,109,  0,  0,  0,109,  0,109,  0,109,  0,  0,  0,109,109],
    [109,  0,  0,664,  0,265,  0,109,  0,265,  0,664,  0,  0,109],
    [109,  0,109,  0,391,109,228,109,228,109,391,  0,109,  0,109],
    [109,109,109,228,109,  0,  0,  0,  0,  0,109,228,109,109,109],
    [109,  0,  0,  0,109,  0,109,201,109,  0,109,  0,  0,  0,109],
    [109,  0,  0,109,109,109,109,  0,109,109,109,109,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 85,109],
    [109,109,109,109,109,109,109,  0,109,109,109,109,109, 89,109]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}