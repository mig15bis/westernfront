main.floors.MT284=
{
    "floorId": "MT284",
    "title": "卡西诺山-1",
    "name": "卡西诺山-1",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X100052",
    "bgm": "cao1.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 40 卡西诺绞肉机",
        {
            "type": "text",
            "text": "\t[克拉克]\f[clark.png,0,310]卡西诺山的敌人必须被拔除，这样我才能成为第一个进入罗马的将军！现在，开始渡河！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[亚历山大]\f[alexanda.png,0,310]敌人依托有利地形，纵使我们有人数和空军的双重优势，也不可冒进。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[凯赛林]\f[kasselring.png,0,310]盟军开始行动了，按照预定部署行动，不要放过任何暴露在炮火之下的敌人！",
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
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "hp",
            "value": "220000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "2800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "hp",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "atk",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "hp",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "atk",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "150000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "3200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "3300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "3800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak38",
            "name": "hp",
            "value": "34000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak38",
            "name": "atk",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "hp",
            "value": "34000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "atk",
            "value": "45000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "zone",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "hp",
            "value": "85000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "hp",
            "value": "95000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "special",
            "value": "[55,60]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug3a",
            "name": "hp",
            "value": "70000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug3a",
            "name": "atk",
            "value": "23000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4e",
            "name": "hp",
            "value": "90000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4e",
            "name": "atk",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "hp",
            "value": "110000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "atk",
            "value": "28000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4g",
            "name": "hp",
            "value": "110000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4g",
            "name": "atk",
            "value": "33000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4g",
            "name": "special",
            "value": "[55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "special",
            "value": "[40,51,55,59]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "25000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "hp",
            "value": "45000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "atk",
            "value": "4000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "special",
            "value": "[6,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "hp",
            "value": "60000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "atk",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "special",
            "value": "[28,30,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "hp",
            "value": "45000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "atk",
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "bom",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "special",
            "value": "[28,36,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "hp",
            "value": "95000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "atk",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "bom",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "special",
            "value": "[28,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "atk",
            "value": "3200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "special",
            "value": "[6,55,63]",
            "norefresh": true
        },
        "\t[系统提示]敌人战力重置完成",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]即将进入存档界面",
        {
            "type": "callSave"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[任务目标]⭐下午茶数量不多于10时，自动通关\n⭐抵达卡西诺山-5或7\n⭐抵达卡西诺山-9",
        {
            "type": "callBook"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]本关通关条件较为特殊：当系统检测到主角持有的下午茶数量不多于10时，会自动将主角传送至最终出口。并且，出口的路是堵死的，即便玩家依托简单难度福利能杀穿所有敌人，也无法主动抵达出口。",
        "\t[系统提示]这样设置的原因很简单：本区域体验极差，一步一个战败CG，所以实在不想打了的玩家可以找旁边NPC清光道具直接通关，想要挑战一下的玩家可以尽量打。",
        "\t[系统提示]不用担心跳关会影响后续推图，本关敌人0金经，并且下一关开始时会重置主角状态和相关的一次性道具。直接跳关只可能导致某些剧情没有体验完整。",
        {
            "type": "setValue",
            "name": "flag:MT284mg42",
            "value": "6"
        },
        {
            "type": "setValue",
            "name": "flag:MT284flak",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "flag:MT284howitzers",
            "value": "3"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,13": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]我这里可以直接清空你的下午茶，方便快速通关哦！",
            {
                "type": "choices",
                "text": "清空下午茶后，随便走一步即可触发自动检测，从而直接通关。",
                "choices": [
                    {
                        "text": "来吧，我累了",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "value": "status:hpmax"
                            },
                            {
                                "type": "setValue",
                                "name": "item:tea",
                                "value": "10"
                            }
                        ]
                    },
                    {
                        "text": "扶我起来，还能再战！",
                        "action": []
                    }
                ]
            }
        ],
        "4,13": [
            "开门见杀！主角每次在河面上行走一步，都会被对岸的敌军集火攻击一次！一共需要渡河4次，且本层禁用对称飞！"
        ],
        "7,12": [
            {
                "type": "if",
                "condition": "(flag:MT284mg42>=1)",
                "true": [
                    {
                        "type": "animate",
                        "name": "shoot3",
                        "loc": "hero",
                        "async": true
                    },
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "operator": "-=",
                        "value": "(flag:MT284mg42*100000)"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284flak>=1)",
                "true": [
                    {
                        "type": "animate",
                        "name": "explore2",
                        "loc": "hero",
                        "async": true
                    },
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "operator": "-=",
                        "value": "(flag:MT284flak*400000)"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284howitzers>=1)",
                "true": [
                    {
                        "type": "animate",
                        "name": "howitzer",
                        "loc": "hero",
                        "async": true
                    },
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "operator": "-=",
                        "value": "(flag:MT284howitzers*400000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "7,3": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ],
        "6,3": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ],
        "5,3": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ],
        "4,3": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ],
        "3,3": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ],
        "2,3": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ],
        "1,3": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ],
        "0,2": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ],
        "8,3": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ],
        "9,3": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ],
        "10,2": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ],
        "11,2": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ],
        "12,2": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ],
        "13,2": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ],
        "14,1": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ],
        "1,2": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ],
        "9,2": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ],
        "13,1": [
            {
                "type": "setValue",
                "name": "flag:MT284time",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===1)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===2)",
                "true": [
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[盟军指挥官]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    "\t[克拉克]\f[clark.png,0,310]停止进攻！这是无意义的消耗！现在回来休整部队，重整旗鼓后再继续！",
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
                        "type": "jumpHero",
                        "loc": [
                            7,
                            14
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "经过休整，生命回满",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT285",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,1": [
            {
                "type": "setValue",
                "name": "flag:MT284howitzers",
                "operator": "-=",
                "value": "1"
            }
        ],
        "8,1": [
            {
                "type": "setValue",
                "name": "flag:MT284flak",
                "operator": "-=",
                "value": "1"
            }
        ],
        "6,1": [
            {
                "type": "setValue",
                "name": "flag:MT284flak",
                "operator": "-=",
                "value": "1"
            }
        ],
        "8,0": [
            {
                "type": "setValue",
                "name": "flag:MT284mg42",
                "operator": "-=",
                "value": "1"
            }
        ],
        "6,0": [
            {
                "type": "setValue",
                "name": "flag:MT284mg42",
                "operator": "-=",
                "value": "1"
            }
        ],
        "9,0": [
            {
                "type": "setValue",
                "name": "flag:MT284howitzers",
                "operator": "-=",
                "value": "1"
            }
        ],
        "10,0": [
            {
                "type": "setValue",
                "name": "flag:MT284mg42",
                "operator": "-=",
                "value": "1"
            }
        ],
        "11,0": [
            {
                "type": "setValue",
                "name": "flag:MT284mg42",
                "operator": "-=",
                "value": "1"
            }
        ],
        "5,0": [
            {
                "type": "setValue",
                "name": "flag:MT284howitzers",
                "operator": "-=",
                "value": "1"
            }
        ],
        "4,0": [
            {
                "type": "setValue",
                "name": "flag:MT284mg42",
                "operator": "-=",
                "value": "1"
            }
        ],
        "3,0": [
            {
                "type": "setValue",
                "name": "flag:MT284mg42",
                "operator": "-=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,266,266,388,266, 91,266,388,266,266,  0, 11, 11],
    [ 11, 11,  0,  0,  0,  0,390,236,390, 11, 11, 11, 11,  0,  0],
    [  0,  0, 11, 11, 11, 11, 11, 11, 11,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [50049,  0,  0,50049,  0,  0,  0,50049,  0,  0,50049,  0,  0,50049,  0],
    [  0,  0,50049,  0,  0,50049,  0,  0,50049,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,50049,  0,50049,  0,  0,  0,  0,  0,  0,  0,  0],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049,  0,  0,  0,50049],
    [  0,  0,50049,  0,  0,50049,  0,50049,  0,  0,  0,  0,50049,  0,  0],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049,  0,50049,  0,  0],
    [  0,  0,  0,  0,50049,  0,  0,  0,50049,  0,  0,  0,  0,  0,  0],
    [  0,50049,  0,50049,  0,  0,50049,  0,  0,50049,  0,  0,  0,50049,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,606,606,605,10147,  0,  0,  0,  0,601,605,606,606,  0,  0],
    [607,607,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,607,607]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,151,151],
    [151,151,  0,  0,  0,  0,  0,  0,  0,151,151,151,151,151,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151,151,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151,151,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151,151,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151,151,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151,151,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151,151,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151,151,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151,151,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151,151,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151,151,151],
    [151,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,151,151],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "area": "陆地",
    "cannotMoveDirectly": true
}