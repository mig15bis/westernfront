main.floors.MT127=
{
    "floorId": "MT127",
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
    "bgm": "desert1.mp3",
    "firstArrive": [
        {
            "type": "text",
            "text": "\t[奥金莱克]\f[auchinleck.png,0,310]我们的后方遭遇敌人突袭，进攻部队也没有任何突破。战斧行动已经失败，趁敌人还没有收拢包围圈，全军立刻撤离！",
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
        "14,14": [
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
                "function": "function(){\nflags.mission[19][0]=true\n}"
            },
            {
                "type": "if",
                "condition": "(item:tea>=20)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[19][1]=true\n}"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(status:mana>=100)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[19][2]=true\n}"
                    }
                ]
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
                "text": "   尽管指挥官阁下表现突出，但我们\n的损失过于巨大，必须撤退了。\n   见鬼！又是那些该死的高射炮，德\n国佬把它们的潜能开发的很充分！不管\n怎样，战斧行动失败了，我们无力继续\n维持前线的防御，继续后撤！",
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
                "value": "20"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT129",
                        "loc": [
                            7,
                            8
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "playBgm",
                        "name": "wot2.mp3"
                    },
                    "英军有着决定性的坦克数量优势，但他们没有领会机动作战的要领。其结果就是，“战斧行动”变成了一次彻底的失败。",
                    "隆美尔再次将88毫米高射炮放平，部署在英军进攻的必经之路上。在当时，没有任何坦克的装甲能扛得住88毫米高射炮。结果显而易见，战斗结束后，道路上布满了英军坦克的残骸。",
                    "在“坦克陷阱”成功拖延英军之后，隆美尔调集自己的装甲师迂回攻击英军侧翼。尽管迎头碰上了英军的第7装甲师，但由于“十字军”坦克不断发生故障，占有优势的英军还是在混战中败下阵来。",
                    "战斗3天后，英军的前线指挥官还没意识到自己的处境，反倒是远在后方的韦维尔将军发现了异常，紧急命令前线部队放弃占领区，向后撤退。再晚一点，隆美尔的包围圈就真的完成了。",
                    "英军经过一场战斗没有取得什么有价值的战果，还损失了200辆坦克。其中只有90辆是被俘或击毁，剩下的全是出故障趴窝的。而隆美尔具有战场打扫权，修复了一部分受损的坦克，所以德军最终只有25辆坦克的损失。",
                    "“沙漠之狐”再次向世人证明了自己的军事实力，他的机动防御粉碎了英军呆板的正面进攻，也粉碎了他们解围托布鲁克的幻想。",
                    "但这也仅仅是一次小胜。在北半球的同一时间，德军的铁蹄开进苏联，那里的战事更为焦灼，更多的补给被源源不断送往苏联战场，隆美尔本就尴尬的补给变得更加紧张。",
                    "英军还是把控着地中海的制海权和制空权。托布鲁克虽然被包围，但其本身就是个战略意义重大的港口，被困的澳军仍然能获得充足的补给，反倒是包围他们的德意联军快要撑不住了。",
                    "如果能拿下托布鲁克，德意联军就能稍微缓解自己的补给压力，否则，就只能乖乖撤退。",
                    "1941年11月，处于极寒之地的苏联已经飘起了雪花，而北非沙漠还是一如既往的炎热。",
                    "英德双方几乎是同时发起行动，这决定着双方的战场走向。德意联军决心一举攻下托布鲁克，而英联邦军队则是解围托布鲁克，同时也能驱逐德意联军。",
                    "英方将此次行动命名为：十字军行动。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT128",
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
        "0,14": {
            "floorId": "MT126",
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
    [402,  0,403,  0,404,  0,407,  0,407,  0,404,  0,403,  0,402],
    [  0,150,150,150,150,150,150, 82,150,150,150,150,150,150,  0],
    [401,150,580,588,150,  0, 11,590, 11,  0,150,588,580,150,401],
    [  0,150,390,570,150,401,150,150,150,401,150,570,390,150,  0],
    [254,150,401,570,150,534,534,150,534,534,150,570,401,150,254],
    [531,150, 81,150,150,150, 81,150, 81,150,150,150, 81,150,531],
    [253,150,  0,569,407,534,534,150,534,534,407,569,  0,150,253],
    [570,150, 11,150,150, 11,532,402,532, 11,150,150, 11,150,570],
    [250,150,531,531,150,150,150,150,150,150,150,531,531,150,250],
    [531,150,150,531,518,150,150,590,150,150,518,531,150,150,531],
    [244,150,150,271,150,150,  0,590,  0,150,150,271,150,150,244],
    [569,150,530, 11,530,150,232, 22,232,150,530, 11,530,150,569],
    [ 11,150,530,  0,530,150,  0,150,  0,150,530,  0,530,150, 11],
    [569,150,150,408,150,150,382,150,382,150,150,408,150,150,569],
    [ 93,150,533, 11,533, 81,  0,150,  0, 81,533, 11,533,150, 89]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}