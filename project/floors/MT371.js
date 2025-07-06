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
    "bgm": "cao4.mp3",
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
    "events": {
        "13,14": [
            {
                "type": "if",
                "condition": "(item:blueKey>=15)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[50][2]=true\n}"
                    }
                ]
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
                "value": "51"
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
                        "floorId": "MT373",
                        "loc": [
                            5,
                            10
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "playBgm",
                        "name": "wots6.mp3"
                    },
                    "1944年9月17日，盟军发起代号“市场花园”的行动，旨在夺取跨越莱茵河、瓦尔河等河流上的一系列重要桥梁后，从荷兰直插德国腹地，争取在1944年圣诞前结束欧洲战场作战",
                    "英美空军掏出了各自的全部家当，将3.5万人，568门火炮，1927辆军车和5230吨物资空降到了德军阵线后方，成就了人类战争史上规模最大的空降作战行动。在空降部队落地的同时，地面部队也同步行动增援。",
                    "但是，这次行动的策划者蒙哥马利并不知道，德军在盟军预定的空降地区，部署了2个装甲师的兵力。如此大规模的空降行动，在地面上的德军眼里，却成了一大群飘在天上任人宰割的铁十字勋章。",
                    "士兵们举起一切能开火的武器朝天上射击，场面直接变成了“打鸟大赛”，许多盟军伞兵还没落地就“成盒”了。德军空降第一集团军司令还在一架被击落的滑翔机里意外发现了盟军的作战命令，立刻拿回去着手策划反击。",
                    "侥幸落地的空降兵们一边集结完成各自的任务，一边向大部队求援。盟军主力部队收到消息立即行动，但很不巧，他们碰上了一个硬茬子——防御大师莫德尔。",
                    "就算是在地狱般的苏德战场上，只要莫德尔在防守，哪怕朱可夫来了都得掂量掂量，盟军部队纵使有着装备数量的优势，也敌不过莫德尔固若金汤的防御。",
                    "到9月26日，市场花园行动的第9天，盟军付出巨大代价，在宽200公里的正面上向纵深推进了45—90公里，但没有完成既定目标，行动已经宣告失败。",
                    "深入敌后的伞兵们为了生存而奋勇抗击敌军。负责夺取阿纳姆大桥的英国第1空降师的一支700人小队虽然突入大桥另一端，但也被德军包围。他们用仅有的机枪、手榴弹和燃烧瓶与德军装甲部队激烈对抗，死守大桥4天。",
                    "但这支部队没有补给，没有增援，失守注定只是时间问题。21日清晨，他们的电台发出最后一封电报：“弹尽粮绝，神佑吾王”。一场激烈的白刃战后，这支英勇小队全军覆没。",
                    "后来，阿纳姆大桥被称为“遥远的桥”，因为它对盟军而言实在是遥不可及。讽刺的是，这座英军拼死守卫的桥梁，为了防止被德军继续使用，被盟军轰炸机于1944年10月7日炸毁。1948年，这里重新建起另一座桥，并于1977年更名为约翰·弗罗斯特桥——这是那支守桥小队的指挥官的名字。",
                    "市场花园行动是一场毫无争议的大败。战役历时9天，盟军失去了2万人的精锐部队，而德军仅伤亡8000人（其中2000阵亡，6000负伤）。此战之后直到战争结束，美军都没再进行过空降作战，因为精锐在这一战中几乎全灭。",
                    "蒙哥马利的指挥能力遭到质疑。也许，在北非击败隆美尔只是个偶然，以德军对隆美尔的补给水平，可能他本来就无法拿下非洲，换成奥金莱克和韦维尔也一样能打败他，只是由蒙哥马利踢出了最后的临门一脚。这之后，盟军，尤其已经成长起来的美军，就不再愿意听从蒙哥马利的指令了。这也为战后美军掌握话语权提供了一定基础。",
                    "而说起隆美尔……",
                    "他被卷进1944年7月20日，希特勒遭遇炸弹袭击的事件中。虽然他并没有参与袭击，但也事先知道刺杀计划而没有阻止，也算是有间接关系。而事实上，他也希望刺杀能够成功，自己现在仍然为希特勒卖命，不过是因为德国是自己的祖国。",
                    "得知这一切的希特勒十分愤怒，但他不能公然处死隆美尔。隆美尔此时已经是国民英雄，如果一位忠心耿耿的大元帅都选择了背叛，对于国内的影响不言而喻。",
                    "1944年10月14日，盖世太保包围了隆美尔的住所，并将一瓶氰化钾（毒药）交给了他。希特勒保证，如果隆美尔自杀，就不会牵连他的家属和其他无辜的手下。这对无比关爱家人的隆美尔而言，无疑是直戳要害。",
                    "与妻儿做了最后的道别后，隆美尔带上自己的元帅权杖，走上盖世太保准备的卡车。中午12点，这位将军在氰化钾的作用下，永远闭上了眼睛。享年53岁。",
                    "他的死因被对外宣传为中风，希特勒按照约定为他举行了隆重的国葬仪式。盟军也十分欣赏这位善待下属，优待战俘，尽职尽责，忠心耿耿，除了生在德国而被迫为纳粹卖命以外几乎没有任何污点的敌军将领，于是在那一天停止了轰炸。几乎整个欧洲都在为隆美尔哀悼，除了没有出席葬礼的希特勒。",
                    "之后的希特勒不再信任自己的将军们，转而去洗脑和培养青年团的小孩子们为他卖命。无论如何，他逐渐失去人民的信任这一点已是不争的事实。他的失败，已经无可挽回。他的罪孽，终将由自己的生命去偿还。",
                    "镜头闪回，在地面推进的同时，一个来自海上的威胁重新进入盟军的视野——德军提尔皮茨号战列舰。",
                    "尽管遭遇数次重创，英军却始终没能彻底击沉提尔皮茨号。如今，这艘巨舰已经完成修复，纵使已经形单影只，但只要她还在海上漂着，就存在着威胁。",
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
                "condition": "(flag:MT371boss===0)",
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
                        "text": "\t[莫德尔]\f[model.png,0,310]装甲部队，抵达预定防御阵线。",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "panzer4h",
                        "loc": [
                            [
                                3,
                                11
                            ],
                            [
                                5,
                                10
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
                                9,
                                10
                            ],
                            [
                                11,
                                11
                            ],
                            [
                                4,
                                8
                            ],
                            [
                                3,
                                9
                            ],
                            [
                                10,
                                8
                            ],
                            [
                                11,
                                9
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "flak120",
                        "loc": [
                            [
                                4,
                                9
                            ],
                            [
                                10,
                                9
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
                        "number": "panzer5d",
                        "loc": [
                            [
                                6,
                                3
                            ],
                            [
                                8,
                                3
                            ],
                            [
                                7,
                                4
                            ],
                            [
                                5,
                                2
                            ],
                            [
                                9,
                                2
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
                        "condition": "(flag:MT371boss===1)",
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
                                    12
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
                                        4,
                                        1
                                    ],
                                    [
                                        10,
                                        1
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
                                        13,
                                        3
                                    ],
                                    [
                                        1,
                                        3
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
                                        2
                                    ],
                                    [
                                        9,
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
                                "number": "panzer5g",
                                "loc": [
                                    [
                                        1,
                                        4
                                    ],
                                    [
                                        3,
                                        3
                                    ],
                                    [
                                        1,
                                        2
                                    ],
                                    [
                                        11,
                                        3
                                    ],
                                    [
                                        13,
                                        2
                                    ],
                                    [
                                        13,
                                        4
                                    ],
                                    [
                                        4,
                                        4
                                    ],
                                    [
                                        10,
                                        4
                                    ],
                                    [
                                        7,
                                        5
                                    ],
                                    [
                                        6,
                                        3
                                    ],
                                    [
                                        8,
                                        3
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
                                "condition": "(flag:MT371boss===2)",
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
                                            12
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
                                        "text": "\t[莫德尔]\f[model.png,0,310]那么，试试这些呢？",
                                        "pos": [
                                            100,
                                            300,
                                            380
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "scoutinf",
                                        "loc": [
                                            [
                                                5,
                                                10
                                            ],
                                            [
                                                9,
                                                10
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "v1missile",
                                        "loc": [
                                            [
                                                6,
                                                10
                                            ],
                                            [
                                                8,
                                                10
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
                                                4,
                                                1
                                            ],
                                            [
                                                10,
                                                1
                                            ],
                                            [
                                                1,
                                                1
                                            ],
                                            [
                                                13,
                                                1
                                            ],
                                            [
                                                5,
                                                1
                                            ],
                                            [
                                                9,
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
                                                3,
                                                7
                                            ],
                                            [
                                                11,
                                                7
                                            ],
                                            [
                                                1,
                                                2
                                            ],
                                            [
                                                13,
                                                2
                                            ],
                                            [
                                                5,
                                                3
                                            ],
                                            [
                                                9,
                                                3
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
                                                1,
                                                6
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
                                        "type": "setEnemy",
                                        "id": "model",
                                        "name": "money",
                                        "value": "50",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "model",
                                        "name": "exp",
                                        "value": "50"
                                    },
                                    {
                                        "type": "waitAsync"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:MT371boss===3)",
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
                                                "text": "\t[蒙哥马利]\f[montgomary.png,0,310]我们的损失巨大，继续进攻已经毫无意义。",
                                                "pos": [
                                                    100,
                                                    300,
                                                    380
                                                ]
                                            },
                                            {
                                                "type": "text",
                                                "text": "\t[蒙哥马利]\f[montgomary.png,0,310]我们没有达成任何一个既定的战略目标，市场花园行动已经彻底失败。全军，撤退吧。",
                                                "pos": [
                                                    100,
                                                    300,
                                                    380
                                                ]
                                            },
                                            "\t[系统提示]主线boss战 胜利！",
                                            {
                                                "type": "function",
                                                "function": "function(){\nflags.mission[50][0]=true\n}"
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
    [109,  0,  0,  0,109,  0,  0,  0,  0,  0,109,  0,  0,  0,109],
    [109,  0,109,  0,  0,  0,  0,109,  0,  0,  0,  0,109,  0,109],
    [109,  0,  0,  0,  0,109,  0,201,  0,109,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,109,  0,109,  0,  0,  0,  0,  0,109],
    [109,  0,  0,109,  0,  0,  0,  0,  0,  0,  0,109,  0,  0,109],
    [109,109,  0,  0,  0,  0,  0,109,  0,  0,  0,  0,  0,109,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,109,  0,  0,109,  0,  0,  0,109,  0,  0,109,  0,109],
    [109,  0,  0,  0,109,  0,  0,201,  0,  0,109,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,109,  0,109,  0,  0,  0,  0,  0,109],
    [109,  0,  0,109,  0,  0,  0,  0,  0,  0,  0,109,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 85,109],
    [109,109,109,109,109,109,109,  0,109,109,109,109,109, 89,109]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}