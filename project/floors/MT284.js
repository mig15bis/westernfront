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
    "bgm": "bgm6.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "function",
            "async": true,
            "function": "function(){\ncore.ui.mission.mis('MISSION 39', '卡西诺绞肉机', core.doAction);\n}"
        },
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
            "value": "650000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "hp",
            "value": "400000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "atk",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "zoneSquare",
            "value": "true",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "range",
            "value": "2",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "zone",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "hp",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "atk",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "special",
            "value": "[56,66,71]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "550000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "5500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "hp",
            "value": "450000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "atk",
            "value": "32000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "450000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "5500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "hp",
            "value": "450000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "6000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "aceinf",
            "name": "hp",
            "value": "300000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "aceinf",
            "name": "atk",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "atk",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "special",
            "value": "[59,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "zone",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer150",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer150",
            "name": "atk",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer150",
            "name": "zone",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer150",
            "name": "special",
            "value": "[15,72,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4h",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4h",
            "name": "atk",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4h",
            "name": "special",
            "value": "[67,69,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "hp",
            "value": "350000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "atk",
            "value": "65000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "special",
            "value": "[56,65,86]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "hp",
            "value": "400000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "atk",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "special",
            "value": "[38,65,86]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "80000",
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
            "id": "flak88",
            "name": "special",
            "value": "[40,59]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "hp",
            "value": "140000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "atk",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "special",
            "value": "[6,30,70]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "gunbunker",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "gunbunker",
            "name": "atk",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "gunbunker",
            "name": "zone",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "gunbunker",
            "name": "special",
            "value": "[15,63,84,86,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "gunbunker",
            "name": "money",
            "value": "20",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "gunbunker",
            "name": "exp",
            "value": "20"
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
        "\t[系统提示]这样设置的原因很简单：本区域游戏体验极差，一步一个战败CG，所以实在不想打了的玩家可以找旁边NPC清光道具直接通关，想要挑战一下的玩家可以尽量打。",
        "\t[系统提示]不用担心跳关会影响后续推图，本关杀敌不给金经，并且下一关开始时会重置主角状态和相关的一次性道具。直接跳关只可能导致某些剧情没有体验完整。",
        {
            "type": "setValue",
            "name": "flag:MT284mg42",
            "value": "4",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "flag:MT284flak",
            "value": "2",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "flag:MT284howitzers",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "flag:第39关任务2",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "flag:第39关任务3",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "flag:咒",
            "value": "true"
        },
        {
            "type": "setTask",
            "name": "第39关任务1",
            "n": 1,
            "text": "下午茶数量不多于10时，自动通关",
            "info": [
                {
                    "type": "checkItem",
                    "checkItem": "tea",
                    "operator": "<=",
                    "text": "当前剩余下午茶",
                    "count": 10
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第39关任务2",
            "n": 1,
            "text": "抵达卡西诺山-5或7",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第39关任务2",
                    "operator": "=",
                    "text": "抵达目标地图",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第39关任务3",
            "n": 1,
            "text": "抵达卡西诺山-9",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第39关任务3",
                    "operator": "=",
                    "text": "抵达目标地图",
                    "count": "1"
                }
            ]
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
            "开门见杀！主角每次在河面上行走一步，都会被对岸的敌军集火攻击一次（集火伤害为：敌方攻击力×连击数×50%）！一共需要渡河4次，且本层禁用对称飞！"
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
                    "\t[盟军指挥官,hero]第一次渡河行动失败，我们的部队在雷区和敌人的炮火中迷失了方向。现在开始第二次强渡！"
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
                    "\t[盟军指挥官,hero]第二次渡河又失败了，我们没能拿下任何战果。",
                    "\t[盟军指挥官,hero]两翼的英法部队都取得了一定的成绩，我们美利坚合众国绝不能比他们差！继续渡河！直到突破德军防线！"
                ]
            },
            {
                "type": "if",
                "condition": "(flag:MT284time===3)",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[克拉克]\f[clark.png,0,310]停止进攻！这样的损失只会折损我的威望！现在回来休整部队，重整旗鼓后再继续！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
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
        "8,12": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "9,12": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "10,12": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "11,12": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "12,12": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "13,12": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "14,12": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "14,13": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "13,13": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "0,13": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "0,12": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "1,12": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "2,12": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "3,12": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "4,12": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "5,12": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "6,12": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "7,11": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "8,11": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "10,11": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "11,11": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "12,11": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "14,11": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "4,11": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "2,11": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "0,11": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "0,10": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "1,10": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "3,10": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "5,10": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "6,10": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "7,10": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "9,10": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "10,10": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "11,10": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "12,10": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "13,10": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "14,10": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "14,9": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "13,9": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "9,9": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "8,9": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "7,9": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "5,9": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "4,9": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "3,9": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "2,9": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "1,9": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "0,8": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "1,8": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "3,8": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "4,8": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "6,8": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "8,8": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "9,8": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "10,8": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "11,8": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "13,8": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "14,8": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "13,7": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "12,7": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "11,7": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "9,7": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "8,7": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "7,7": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "6,7": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "5,7": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "4,7": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "3,7": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "2,7": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "1,7": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "0,6": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "2,6": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "3,6": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "5,6": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "8,6": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "9,6": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "10,6": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "11,6": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "13,6": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "14,6": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "14,5": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "13,5": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "11,5": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "10,5": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "9,5": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "7,5": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "6,5": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "4,5": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "3,5": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "1,5": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "0,5": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "0,3": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "1,4": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "2,4": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "4,4": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "5,4": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "6,4": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "8,4": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "11,4": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "12,4": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "14,4": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "13,3": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "14,2": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "12,3": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "11,3": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "10,3": [
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
                        "value": "(flag:MT284mg42*30000)"
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
                        "value": "(flag:MT284flak*40000)"
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
                        "value": "(flag:MT284howitzers*50000)"
                    }
                ]
            },
            {
                "type": "waitAsync"
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
            },
            {
                "type": "if",
                "condition": "((flag:MT284mg42===0)&&((flag:MT284mg42===0)&&(flag:MT284flak===0)))",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                0,
                                2
                            ],
                            [
                                1,
                                2
                            ],
                            [
                                0,
                                3
                            ],
                            [
                                1,
                                3
                            ],
                            [
                                2,
                                3
                            ],
                            [
                                3,
                                3
                            ],
                            [
                                4,
                                3
                            ],
                            [
                                5,
                                3
                            ],
                            [
                                6,
                                3
                            ],
                            [
                                7,
                                3
                            ],
                            [
                                8,
                                3
                            ],
                            [
                                9,
                                3
                            ],
                            [
                                9,
                                2
                            ],
                            [
                                10,
                                2
                            ],
                            [
                                11,
                                2
                            ],
                            [
                                12,
                                2
                            ],
                            [
                                13,
                                2
                            ],
                            [
                                13,
                                1
                            ],
                            [
                                14,
                                1
                            ],
                            [
                                14,
                                2
                            ],
                            [
                                10,
                                3
                            ],
                            [
                                11,
                                3
                            ],
                            [
                                12,
                                3
                            ],
                            [
                                13,
                                3
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                12,
                                4
                            ],
                            [
                                11,
                                4
                            ],
                            [
                                8,
                                4
                            ],
                            [
                                6,
                                4
                            ],
                            [
                                5,
                                4
                            ],
                            [
                                4,
                                4
                            ],
                            [
                                2,
                                4
                            ],
                            [
                                1,
                                4
                            ],
                            [
                                1,
                                5
                            ],
                            [
                                0,
                                5
                            ],
                            [
                                0,
                                6
                            ],
                            [
                                2,
                                6
                            ],
                            [
                                3,
                                6
                            ],
                            [
                                3,
                                5
                            ],
                            [
                                4,
                                5
                            ],
                            [
                                5,
                                6
                            ],
                            [
                                6,
                                5
                            ],
                            [
                                7,
                                5
                            ],
                            [
                                9,
                                5
                            ],
                            [
                                10,
                                5
                            ],
                            [
                                11,
                                5
                            ],
                            [
                                13,
                                5
                            ],
                            [
                                14,
                                5
                            ],
                            [
                                14,
                                6
                            ],
                            [
                                13,
                                6
                            ],
                            [
                                11,
                                6
                            ],
                            [
                                10,
                                6
                            ],
                            [
                                9,
                                6
                            ],
                            [
                                8,
                                6
                            ],
                            [
                                1,
                                7
                            ],
                            [
                                2,
                                7
                            ],
                            [
                                3,
                                7
                            ],
                            [
                                4,
                                7
                            ],
                            [
                                5,
                                7
                            ],
                            [
                                6,
                                7
                            ],
                            [
                                7,
                                7
                            ],
                            [
                                8,
                                7
                            ],
                            [
                                9,
                                7
                            ],
                            [
                                11,
                                7
                            ],
                            [
                                12,
                                7
                            ],
                            [
                                13,
                                7
                            ],
                            [
                                14,
                                8
                            ],
                            [
                                13,
                                8
                            ],
                            [
                                11,
                                8
                            ],
                            [
                                10,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                8,
                                8
                            ],
                            [
                                6,
                                8
                            ],
                            [
                                4,
                                8
                            ],
                            [
                                3,
                                8
                            ],
                            [
                                1,
                                8
                            ],
                            [
                                0,
                                8
                            ],
                            [
                                1,
                                9
                            ],
                            [
                                2,
                                9
                            ],
                            [
                                3,
                                9
                            ],
                            [
                                4,
                                9
                            ],
                            [
                                5,
                                9
                            ],
                            [
                                7,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                9,
                                9
                            ],
                            [
                                13,
                                9
                            ],
                            [
                                14,
                                9
                            ],
                            [
                                14,
                                10
                            ],
                            [
                                13,
                                10
                            ],
                            [
                                12,
                                10
                            ],
                            [
                                11,
                                10
                            ],
                            [
                                10,
                                10
                            ],
                            [
                                9,
                                10
                            ],
                            [
                                7,
                                10
                            ],
                            [
                                6,
                                10
                            ],
                            [
                                5,
                                10
                            ],
                            [
                                3,
                                10
                            ],
                            [
                                1,
                                10
                            ],
                            [
                                0,
                                10
                            ],
                            [
                                0,
                                11
                            ],
                            [
                                2,
                                11
                            ],
                            [
                                4,
                                11
                            ],
                            [
                                7,
                                11
                            ],
                            [
                                8,
                                11
                            ],
                            [
                                10,
                                11
                            ],
                            [
                                11,
                                11
                            ],
                            [
                                12,
                                11
                            ],
                            [
                                14,
                                11
                            ],
                            [
                                0,
                                12
                            ],
                            [
                                1,
                                12
                            ],
                            [
                                2,
                                12
                            ],
                            [
                                3,
                                12
                            ],
                            [
                                4,
                                12
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                6,
                                12
                            ],
                            [
                                7,
                                12
                            ],
                            [
                                8,
                                12
                            ],
                            [
                                9,
                                12
                            ],
                            [
                                10,
                                12
                            ],
                            [
                                11,
                                12
                            ],
                            [
                                12,
                                12
                            ],
                            [
                                13,
                                12
                            ],
                            [
                                14,
                                12
                            ],
                            [
                                14,
                                13
                            ],
                            [
                                13,
                                13
                            ],
                            [
                                0,
                                13
                            ]
                        ],
                        "remove": true
                    }
                ]
            }
        ],
        "8,1": [
            {
                "type": "setValue",
                "name": "flag:MT284flak",
                "operator": "-=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "((flag:MT284mg42===0)&&((flag:MT284mg42===0)&&(flag:MT284flak===0)))",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                0,
                                2
                            ],
                            [
                                1,
                                2
                            ],
                            [
                                0,
                                3
                            ],
                            [
                                1,
                                3
                            ],
                            [
                                2,
                                3
                            ],
                            [
                                3,
                                3
                            ],
                            [
                                4,
                                3
                            ],
                            [
                                5,
                                3
                            ],
                            [
                                6,
                                3
                            ],
                            [
                                7,
                                3
                            ],
                            [
                                8,
                                3
                            ],
                            [
                                9,
                                3
                            ],
                            [
                                9,
                                2
                            ],
                            [
                                10,
                                2
                            ],
                            [
                                11,
                                2
                            ],
                            [
                                12,
                                2
                            ],
                            [
                                13,
                                2
                            ],
                            [
                                13,
                                1
                            ],
                            [
                                14,
                                1
                            ],
                            [
                                14,
                                2
                            ],
                            [
                                10,
                                3
                            ],
                            [
                                11,
                                3
                            ],
                            [
                                12,
                                3
                            ],
                            [
                                13,
                                3
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                12,
                                4
                            ],
                            [
                                11,
                                4
                            ],
                            [
                                8,
                                4
                            ],
                            [
                                6,
                                4
                            ],
                            [
                                5,
                                4
                            ],
                            [
                                4,
                                4
                            ],
                            [
                                2,
                                4
                            ],
                            [
                                1,
                                4
                            ],
                            [
                                1,
                                5
                            ],
                            [
                                0,
                                5
                            ],
                            [
                                0,
                                6
                            ],
                            [
                                2,
                                6
                            ],
                            [
                                3,
                                6
                            ],
                            [
                                3,
                                5
                            ],
                            [
                                4,
                                5
                            ],
                            [
                                5,
                                6
                            ],
                            [
                                6,
                                5
                            ],
                            [
                                7,
                                5
                            ],
                            [
                                9,
                                5
                            ],
                            [
                                10,
                                5
                            ],
                            [
                                11,
                                5
                            ],
                            [
                                13,
                                5
                            ],
                            [
                                14,
                                5
                            ],
                            [
                                14,
                                6
                            ],
                            [
                                13,
                                6
                            ],
                            [
                                11,
                                6
                            ],
                            [
                                10,
                                6
                            ],
                            [
                                9,
                                6
                            ],
                            [
                                8,
                                6
                            ],
                            [
                                1,
                                7
                            ],
                            [
                                2,
                                7
                            ],
                            [
                                3,
                                7
                            ],
                            [
                                4,
                                7
                            ],
                            [
                                5,
                                7
                            ],
                            [
                                6,
                                7
                            ],
                            [
                                7,
                                7
                            ],
                            [
                                8,
                                7
                            ],
                            [
                                9,
                                7
                            ],
                            [
                                11,
                                7
                            ],
                            [
                                12,
                                7
                            ],
                            [
                                13,
                                7
                            ],
                            [
                                14,
                                8
                            ],
                            [
                                13,
                                8
                            ],
                            [
                                11,
                                8
                            ],
                            [
                                10,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                8,
                                8
                            ],
                            [
                                6,
                                8
                            ],
                            [
                                4,
                                8
                            ],
                            [
                                3,
                                8
                            ],
                            [
                                1,
                                8
                            ],
                            [
                                0,
                                8
                            ],
                            [
                                1,
                                9
                            ],
                            [
                                2,
                                9
                            ],
                            [
                                3,
                                9
                            ],
                            [
                                4,
                                9
                            ],
                            [
                                5,
                                9
                            ],
                            [
                                7,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                9,
                                9
                            ],
                            [
                                13,
                                9
                            ],
                            [
                                14,
                                9
                            ],
                            [
                                14,
                                10
                            ],
                            [
                                13,
                                10
                            ],
                            [
                                12,
                                10
                            ],
                            [
                                11,
                                10
                            ],
                            [
                                10,
                                10
                            ],
                            [
                                9,
                                10
                            ],
                            [
                                7,
                                10
                            ],
                            [
                                6,
                                10
                            ],
                            [
                                5,
                                10
                            ],
                            [
                                3,
                                10
                            ],
                            [
                                1,
                                10
                            ],
                            [
                                0,
                                10
                            ],
                            [
                                0,
                                11
                            ],
                            [
                                2,
                                11
                            ],
                            [
                                4,
                                11
                            ],
                            [
                                7,
                                11
                            ],
                            [
                                8,
                                11
                            ],
                            [
                                10,
                                11
                            ],
                            [
                                11,
                                11
                            ],
                            [
                                12,
                                11
                            ],
                            [
                                14,
                                11
                            ],
                            [
                                0,
                                12
                            ],
                            [
                                1,
                                12
                            ],
                            [
                                2,
                                12
                            ],
                            [
                                3,
                                12
                            ],
                            [
                                4,
                                12
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                6,
                                12
                            ],
                            [
                                7,
                                12
                            ],
                            [
                                8,
                                12
                            ],
                            [
                                9,
                                12
                            ],
                            [
                                10,
                                12
                            ],
                            [
                                11,
                                12
                            ],
                            [
                                12,
                                12
                            ],
                            [
                                13,
                                12
                            ],
                            [
                                14,
                                12
                            ],
                            [
                                14,
                                13
                            ],
                            [
                                13,
                                13
                            ],
                            [
                                0,
                                13
                            ]
                        ],
                        "remove": true
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "setValue",
                "name": "flag:MT284flak",
                "operator": "-=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "((flag:MT284mg42===0)&&((flag:MT284mg42===0)&&(flag:MT284flak===0)))",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                0,
                                2
                            ],
                            [
                                1,
                                2
                            ],
                            [
                                0,
                                3
                            ],
                            [
                                1,
                                3
                            ],
                            [
                                2,
                                3
                            ],
                            [
                                3,
                                3
                            ],
                            [
                                4,
                                3
                            ],
                            [
                                5,
                                3
                            ],
                            [
                                6,
                                3
                            ],
                            [
                                7,
                                3
                            ],
                            [
                                8,
                                3
                            ],
                            [
                                9,
                                3
                            ],
                            [
                                9,
                                2
                            ],
                            [
                                10,
                                2
                            ],
                            [
                                11,
                                2
                            ],
                            [
                                12,
                                2
                            ],
                            [
                                13,
                                2
                            ],
                            [
                                13,
                                1
                            ],
                            [
                                14,
                                1
                            ],
                            [
                                14,
                                2
                            ],
                            [
                                10,
                                3
                            ],
                            [
                                11,
                                3
                            ],
                            [
                                12,
                                3
                            ],
                            [
                                13,
                                3
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                12,
                                4
                            ],
                            [
                                11,
                                4
                            ],
                            [
                                8,
                                4
                            ],
                            [
                                6,
                                4
                            ],
                            [
                                5,
                                4
                            ],
                            [
                                4,
                                4
                            ],
                            [
                                2,
                                4
                            ],
                            [
                                1,
                                4
                            ],
                            [
                                1,
                                5
                            ],
                            [
                                0,
                                5
                            ],
                            [
                                0,
                                6
                            ],
                            [
                                2,
                                6
                            ],
                            [
                                3,
                                6
                            ],
                            [
                                3,
                                5
                            ],
                            [
                                4,
                                5
                            ],
                            [
                                5,
                                6
                            ],
                            [
                                6,
                                5
                            ],
                            [
                                7,
                                5
                            ],
                            [
                                9,
                                5
                            ],
                            [
                                10,
                                5
                            ],
                            [
                                11,
                                5
                            ],
                            [
                                13,
                                5
                            ],
                            [
                                14,
                                5
                            ],
                            [
                                14,
                                6
                            ],
                            [
                                13,
                                6
                            ],
                            [
                                11,
                                6
                            ],
                            [
                                10,
                                6
                            ],
                            [
                                9,
                                6
                            ],
                            [
                                8,
                                6
                            ],
                            [
                                1,
                                7
                            ],
                            [
                                2,
                                7
                            ],
                            [
                                3,
                                7
                            ],
                            [
                                4,
                                7
                            ],
                            [
                                5,
                                7
                            ],
                            [
                                6,
                                7
                            ],
                            [
                                7,
                                7
                            ],
                            [
                                8,
                                7
                            ],
                            [
                                9,
                                7
                            ],
                            [
                                11,
                                7
                            ],
                            [
                                12,
                                7
                            ],
                            [
                                13,
                                7
                            ],
                            [
                                14,
                                8
                            ],
                            [
                                13,
                                8
                            ],
                            [
                                11,
                                8
                            ],
                            [
                                10,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                8,
                                8
                            ],
                            [
                                6,
                                8
                            ],
                            [
                                4,
                                8
                            ],
                            [
                                3,
                                8
                            ],
                            [
                                1,
                                8
                            ],
                            [
                                0,
                                8
                            ],
                            [
                                1,
                                9
                            ],
                            [
                                2,
                                9
                            ],
                            [
                                3,
                                9
                            ],
                            [
                                4,
                                9
                            ],
                            [
                                5,
                                9
                            ],
                            [
                                7,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                9,
                                9
                            ],
                            [
                                13,
                                9
                            ],
                            [
                                14,
                                9
                            ],
                            [
                                14,
                                10
                            ],
                            [
                                13,
                                10
                            ],
                            [
                                12,
                                10
                            ],
                            [
                                11,
                                10
                            ],
                            [
                                10,
                                10
                            ],
                            [
                                9,
                                10
                            ],
                            [
                                7,
                                10
                            ],
                            [
                                6,
                                10
                            ],
                            [
                                5,
                                10
                            ],
                            [
                                3,
                                10
                            ],
                            [
                                1,
                                10
                            ],
                            [
                                0,
                                10
                            ],
                            [
                                0,
                                11
                            ],
                            [
                                2,
                                11
                            ],
                            [
                                4,
                                11
                            ],
                            [
                                7,
                                11
                            ],
                            [
                                8,
                                11
                            ],
                            [
                                10,
                                11
                            ],
                            [
                                11,
                                11
                            ],
                            [
                                12,
                                11
                            ],
                            [
                                14,
                                11
                            ],
                            [
                                0,
                                12
                            ],
                            [
                                1,
                                12
                            ],
                            [
                                2,
                                12
                            ],
                            [
                                3,
                                12
                            ],
                            [
                                4,
                                12
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                6,
                                12
                            ],
                            [
                                7,
                                12
                            ],
                            [
                                8,
                                12
                            ],
                            [
                                9,
                                12
                            ],
                            [
                                10,
                                12
                            ],
                            [
                                11,
                                12
                            ],
                            [
                                12,
                                12
                            ],
                            [
                                13,
                                12
                            ],
                            [
                                14,
                                12
                            ],
                            [
                                14,
                                13
                            ],
                            [
                                13,
                                13
                            ],
                            [
                                0,
                                13
                            ]
                        ],
                        "remove": true
                    }
                ]
            }
        ],
        "8,0": [
            {
                "type": "setValue",
                "name": "flag:MT284mg42",
                "operator": "-=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "((flag:MT284mg42===0)&&((flag:MT284mg42===0)&&(flag:MT284flak===0)))",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                0,
                                2
                            ],
                            [
                                1,
                                2
                            ],
                            [
                                0,
                                3
                            ],
                            [
                                1,
                                3
                            ],
                            [
                                2,
                                3
                            ],
                            [
                                3,
                                3
                            ],
                            [
                                4,
                                3
                            ],
                            [
                                5,
                                3
                            ],
                            [
                                6,
                                3
                            ],
                            [
                                7,
                                3
                            ],
                            [
                                8,
                                3
                            ],
                            [
                                9,
                                3
                            ],
                            [
                                9,
                                2
                            ],
                            [
                                10,
                                2
                            ],
                            [
                                11,
                                2
                            ],
                            [
                                12,
                                2
                            ],
                            [
                                13,
                                2
                            ],
                            [
                                13,
                                1
                            ],
                            [
                                14,
                                1
                            ],
                            [
                                14,
                                2
                            ],
                            [
                                10,
                                3
                            ],
                            [
                                11,
                                3
                            ],
                            [
                                12,
                                3
                            ],
                            [
                                13,
                                3
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                12,
                                4
                            ],
                            [
                                11,
                                4
                            ],
                            [
                                8,
                                4
                            ],
                            [
                                6,
                                4
                            ],
                            [
                                5,
                                4
                            ],
                            [
                                4,
                                4
                            ],
                            [
                                2,
                                4
                            ],
                            [
                                1,
                                4
                            ],
                            [
                                1,
                                5
                            ],
                            [
                                0,
                                5
                            ],
                            [
                                0,
                                6
                            ],
                            [
                                2,
                                6
                            ],
                            [
                                3,
                                6
                            ],
                            [
                                3,
                                5
                            ],
                            [
                                4,
                                5
                            ],
                            [
                                5,
                                6
                            ],
                            [
                                6,
                                5
                            ],
                            [
                                7,
                                5
                            ],
                            [
                                9,
                                5
                            ],
                            [
                                10,
                                5
                            ],
                            [
                                11,
                                5
                            ],
                            [
                                13,
                                5
                            ],
                            [
                                14,
                                5
                            ],
                            [
                                14,
                                6
                            ],
                            [
                                13,
                                6
                            ],
                            [
                                11,
                                6
                            ],
                            [
                                10,
                                6
                            ],
                            [
                                9,
                                6
                            ],
                            [
                                8,
                                6
                            ],
                            [
                                1,
                                7
                            ],
                            [
                                2,
                                7
                            ],
                            [
                                3,
                                7
                            ],
                            [
                                4,
                                7
                            ],
                            [
                                5,
                                7
                            ],
                            [
                                6,
                                7
                            ],
                            [
                                7,
                                7
                            ],
                            [
                                8,
                                7
                            ],
                            [
                                9,
                                7
                            ],
                            [
                                11,
                                7
                            ],
                            [
                                12,
                                7
                            ],
                            [
                                13,
                                7
                            ],
                            [
                                14,
                                8
                            ],
                            [
                                13,
                                8
                            ],
                            [
                                11,
                                8
                            ],
                            [
                                10,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                8,
                                8
                            ],
                            [
                                6,
                                8
                            ],
                            [
                                4,
                                8
                            ],
                            [
                                3,
                                8
                            ],
                            [
                                1,
                                8
                            ],
                            [
                                0,
                                8
                            ],
                            [
                                1,
                                9
                            ],
                            [
                                2,
                                9
                            ],
                            [
                                3,
                                9
                            ],
                            [
                                4,
                                9
                            ],
                            [
                                5,
                                9
                            ],
                            [
                                7,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                9,
                                9
                            ],
                            [
                                13,
                                9
                            ],
                            [
                                14,
                                9
                            ],
                            [
                                14,
                                10
                            ],
                            [
                                13,
                                10
                            ],
                            [
                                12,
                                10
                            ],
                            [
                                11,
                                10
                            ],
                            [
                                10,
                                10
                            ],
                            [
                                9,
                                10
                            ],
                            [
                                7,
                                10
                            ],
                            [
                                6,
                                10
                            ],
                            [
                                5,
                                10
                            ],
                            [
                                3,
                                10
                            ],
                            [
                                1,
                                10
                            ],
                            [
                                0,
                                10
                            ],
                            [
                                0,
                                11
                            ],
                            [
                                2,
                                11
                            ],
                            [
                                4,
                                11
                            ],
                            [
                                7,
                                11
                            ],
                            [
                                8,
                                11
                            ],
                            [
                                10,
                                11
                            ],
                            [
                                11,
                                11
                            ],
                            [
                                12,
                                11
                            ],
                            [
                                14,
                                11
                            ],
                            [
                                0,
                                12
                            ],
                            [
                                1,
                                12
                            ],
                            [
                                2,
                                12
                            ],
                            [
                                3,
                                12
                            ],
                            [
                                4,
                                12
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                6,
                                12
                            ],
                            [
                                7,
                                12
                            ],
                            [
                                8,
                                12
                            ],
                            [
                                9,
                                12
                            ],
                            [
                                10,
                                12
                            ],
                            [
                                11,
                                12
                            ],
                            [
                                12,
                                12
                            ],
                            [
                                13,
                                12
                            ],
                            [
                                14,
                                12
                            ],
                            [
                                14,
                                13
                            ],
                            [
                                13,
                                13
                            ],
                            [
                                0,
                                13
                            ]
                        ],
                        "remove": true
                    }
                ]
            }
        ],
        "6,0": [
            {
                "type": "setValue",
                "name": "flag:MT284mg42",
                "operator": "-=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "((flag:MT284mg42===0)&&((flag:MT284mg42===0)&&(flag:MT284flak===0)))",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                0,
                                2
                            ],
                            [
                                1,
                                2
                            ],
                            [
                                0,
                                3
                            ],
                            [
                                1,
                                3
                            ],
                            [
                                2,
                                3
                            ],
                            [
                                3,
                                3
                            ],
                            [
                                4,
                                3
                            ],
                            [
                                5,
                                3
                            ],
                            [
                                6,
                                3
                            ],
                            [
                                7,
                                3
                            ],
                            [
                                8,
                                3
                            ],
                            [
                                9,
                                3
                            ],
                            [
                                9,
                                2
                            ],
                            [
                                10,
                                2
                            ],
                            [
                                11,
                                2
                            ],
                            [
                                12,
                                2
                            ],
                            [
                                13,
                                2
                            ],
                            [
                                13,
                                1
                            ],
                            [
                                14,
                                1
                            ],
                            [
                                14,
                                2
                            ],
                            [
                                10,
                                3
                            ],
                            [
                                11,
                                3
                            ],
                            [
                                12,
                                3
                            ],
                            [
                                13,
                                3
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                12,
                                4
                            ],
                            [
                                11,
                                4
                            ],
                            [
                                8,
                                4
                            ],
                            [
                                6,
                                4
                            ],
                            [
                                5,
                                4
                            ],
                            [
                                4,
                                4
                            ],
                            [
                                2,
                                4
                            ],
                            [
                                1,
                                4
                            ],
                            [
                                1,
                                5
                            ],
                            [
                                0,
                                5
                            ],
                            [
                                0,
                                6
                            ],
                            [
                                2,
                                6
                            ],
                            [
                                3,
                                6
                            ],
                            [
                                3,
                                5
                            ],
                            [
                                4,
                                5
                            ],
                            [
                                5,
                                6
                            ],
                            [
                                6,
                                5
                            ],
                            [
                                7,
                                5
                            ],
                            [
                                9,
                                5
                            ],
                            [
                                10,
                                5
                            ],
                            [
                                11,
                                5
                            ],
                            [
                                13,
                                5
                            ],
                            [
                                14,
                                5
                            ],
                            [
                                14,
                                6
                            ],
                            [
                                13,
                                6
                            ],
                            [
                                11,
                                6
                            ],
                            [
                                10,
                                6
                            ],
                            [
                                9,
                                6
                            ],
                            [
                                8,
                                6
                            ],
                            [
                                1,
                                7
                            ],
                            [
                                2,
                                7
                            ],
                            [
                                3,
                                7
                            ],
                            [
                                4,
                                7
                            ],
                            [
                                5,
                                7
                            ],
                            [
                                6,
                                7
                            ],
                            [
                                7,
                                7
                            ],
                            [
                                8,
                                7
                            ],
                            [
                                9,
                                7
                            ],
                            [
                                11,
                                7
                            ],
                            [
                                12,
                                7
                            ],
                            [
                                13,
                                7
                            ],
                            [
                                14,
                                8
                            ],
                            [
                                13,
                                8
                            ],
                            [
                                11,
                                8
                            ],
                            [
                                10,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                8,
                                8
                            ],
                            [
                                6,
                                8
                            ],
                            [
                                4,
                                8
                            ],
                            [
                                3,
                                8
                            ],
                            [
                                1,
                                8
                            ],
                            [
                                0,
                                8
                            ],
                            [
                                1,
                                9
                            ],
                            [
                                2,
                                9
                            ],
                            [
                                3,
                                9
                            ],
                            [
                                4,
                                9
                            ],
                            [
                                5,
                                9
                            ],
                            [
                                7,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                9,
                                9
                            ],
                            [
                                13,
                                9
                            ],
                            [
                                14,
                                9
                            ],
                            [
                                14,
                                10
                            ],
                            [
                                13,
                                10
                            ],
                            [
                                12,
                                10
                            ],
                            [
                                11,
                                10
                            ],
                            [
                                10,
                                10
                            ],
                            [
                                9,
                                10
                            ],
                            [
                                7,
                                10
                            ],
                            [
                                6,
                                10
                            ],
                            [
                                5,
                                10
                            ],
                            [
                                3,
                                10
                            ],
                            [
                                1,
                                10
                            ],
                            [
                                0,
                                10
                            ],
                            [
                                0,
                                11
                            ],
                            [
                                2,
                                11
                            ],
                            [
                                4,
                                11
                            ],
                            [
                                7,
                                11
                            ],
                            [
                                8,
                                11
                            ],
                            [
                                10,
                                11
                            ],
                            [
                                11,
                                11
                            ],
                            [
                                12,
                                11
                            ],
                            [
                                14,
                                11
                            ],
                            [
                                0,
                                12
                            ],
                            [
                                1,
                                12
                            ],
                            [
                                2,
                                12
                            ],
                            [
                                3,
                                12
                            ],
                            [
                                4,
                                12
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                6,
                                12
                            ],
                            [
                                7,
                                12
                            ],
                            [
                                8,
                                12
                            ],
                            [
                                9,
                                12
                            ],
                            [
                                10,
                                12
                            ],
                            [
                                11,
                                12
                            ],
                            [
                                12,
                                12
                            ],
                            [
                                13,
                                12
                            ],
                            [
                                14,
                                12
                            ],
                            [
                                14,
                                13
                            ],
                            [
                                13,
                                13
                            ],
                            [
                                0,
                                13
                            ]
                        ],
                        "remove": true
                    }
                ]
            }
        ],
        "9,0": [
            {
                "type": "setValue",
                "name": "flag:MT284howitzers",
                "operator": "-=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "((flag:MT284mg42===0)&&((flag:MT284mg42===0)&&(flag:MT284flak===0)))",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                0,
                                2
                            ],
                            [
                                1,
                                2
                            ],
                            [
                                0,
                                3
                            ],
                            [
                                1,
                                3
                            ],
                            [
                                2,
                                3
                            ],
                            [
                                3,
                                3
                            ],
                            [
                                4,
                                3
                            ],
                            [
                                5,
                                3
                            ],
                            [
                                6,
                                3
                            ],
                            [
                                7,
                                3
                            ],
                            [
                                8,
                                3
                            ],
                            [
                                9,
                                3
                            ],
                            [
                                9,
                                2
                            ],
                            [
                                10,
                                2
                            ],
                            [
                                11,
                                2
                            ],
                            [
                                12,
                                2
                            ],
                            [
                                13,
                                2
                            ],
                            [
                                13,
                                1
                            ],
                            [
                                14,
                                1
                            ],
                            [
                                14,
                                2
                            ],
                            [
                                10,
                                3
                            ],
                            [
                                11,
                                3
                            ],
                            [
                                12,
                                3
                            ],
                            [
                                13,
                                3
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                12,
                                4
                            ],
                            [
                                11,
                                4
                            ],
                            [
                                8,
                                4
                            ],
                            [
                                6,
                                4
                            ],
                            [
                                5,
                                4
                            ],
                            [
                                4,
                                4
                            ],
                            [
                                2,
                                4
                            ],
                            [
                                1,
                                4
                            ],
                            [
                                1,
                                5
                            ],
                            [
                                0,
                                5
                            ],
                            [
                                0,
                                6
                            ],
                            [
                                2,
                                6
                            ],
                            [
                                3,
                                6
                            ],
                            [
                                3,
                                5
                            ],
                            [
                                4,
                                5
                            ],
                            [
                                5,
                                6
                            ],
                            [
                                6,
                                5
                            ],
                            [
                                7,
                                5
                            ],
                            [
                                9,
                                5
                            ],
                            [
                                10,
                                5
                            ],
                            [
                                11,
                                5
                            ],
                            [
                                13,
                                5
                            ],
                            [
                                14,
                                5
                            ],
                            [
                                14,
                                6
                            ],
                            [
                                13,
                                6
                            ],
                            [
                                11,
                                6
                            ],
                            [
                                10,
                                6
                            ],
                            [
                                9,
                                6
                            ],
                            [
                                8,
                                6
                            ],
                            [
                                1,
                                7
                            ],
                            [
                                2,
                                7
                            ],
                            [
                                3,
                                7
                            ],
                            [
                                4,
                                7
                            ],
                            [
                                5,
                                7
                            ],
                            [
                                6,
                                7
                            ],
                            [
                                7,
                                7
                            ],
                            [
                                8,
                                7
                            ],
                            [
                                9,
                                7
                            ],
                            [
                                11,
                                7
                            ],
                            [
                                12,
                                7
                            ],
                            [
                                13,
                                7
                            ],
                            [
                                14,
                                8
                            ],
                            [
                                13,
                                8
                            ],
                            [
                                11,
                                8
                            ],
                            [
                                10,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                8,
                                8
                            ],
                            [
                                6,
                                8
                            ],
                            [
                                4,
                                8
                            ],
                            [
                                3,
                                8
                            ],
                            [
                                1,
                                8
                            ],
                            [
                                0,
                                8
                            ],
                            [
                                1,
                                9
                            ],
                            [
                                2,
                                9
                            ],
                            [
                                3,
                                9
                            ],
                            [
                                4,
                                9
                            ],
                            [
                                5,
                                9
                            ],
                            [
                                7,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                9,
                                9
                            ],
                            [
                                13,
                                9
                            ],
                            [
                                14,
                                9
                            ],
                            [
                                14,
                                10
                            ],
                            [
                                13,
                                10
                            ],
                            [
                                12,
                                10
                            ],
                            [
                                11,
                                10
                            ],
                            [
                                10,
                                10
                            ],
                            [
                                9,
                                10
                            ],
                            [
                                7,
                                10
                            ],
                            [
                                6,
                                10
                            ],
                            [
                                5,
                                10
                            ],
                            [
                                3,
                                10
                            ],
                            [
                                1,
                                10
                            ],
                            [
                                0,
                                10
                            ],
                            [
                                0,
                                11
                            ],
                            [
                                2,
                                11
                            ],
                            [
                                4,
                                11
                            ],
                            [
                                7,
                                11
                            ],
                            [
                                8,
                                11
                            ],
                            [
                                10,
                                11
                            ],
                            [
                                11,
                                11
                            ],
                            [
                                12,
                                11
                            ],
                            [
                                14,
                                11
                            ],
                            [
                                0,
                                12
                            ],
                            [
                                1,
                                12
                            ],
                            [
                                2,
                                12
                            ],
                            [
                                3,
                                12
                            ],
                            [
                                4,
                                12
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                6,
                                12
                            ],
                            [
                                7,
                                12
                            ],
                            [
                                8,
                                12
                            ],
                            [
                                9,
                                12
                            ],
                            [
                                10,
                                12
                            ],
                            [
                                11,
                                12
                            ],
                            [
                                12,
                                12
                            ],
                            [
                                13,
                                12
                            ],
                            [
                                14,
                                12
                            ],
                            [
                                14,
                                13
                            ],
                            [
                                13,
                                13
                            ],
                            [
                                0,
                                13
                            ]
                        ],
                        "remove": true
                    }
                ]
            }
        ],
        "10,0": [
            {
                "type": "setValue",
                "name": "flag:MT284mg42",
                "operator": "-=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "((flag:MT284mg42===0)&&((flag:MT284mg42===0)&&(flag:MT284flak===0)))",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                0,
                                2
                            ],
                            [
                                1,
                                2
                            ],
                            [
                                0,
                                3
                            ],
                            [
                                1,
                                3
                            ],
                            [
                                2,
                                3
                            ],
                            [
                                3,
                                3
                            ],
                            [
                                4,
                                3
                            ],
                            [
                                5,
                                3
                            ],
                            [
                                6,
                                3
                            ],
                            [
                                7,
                                3
                            ],
                            [
                                8,
                                3
                            ],
                            [
                                9,
                                3
                            ],
                            [
                                9,
                                2
                            ],
                            [
                                10,
                                2
                            ],
                            [
                                11,
                                2
                            ],
                            [
                                12,
                                2
                            ],
                            [
                                13,
                                2
                            ],
                            [
                                13,
                                1
                            ],
                            [
                                14,
                                1
                            ],
                            [
                                14,
                                2
                            ],
                            [
                                10,
                                3
                            ],
                            [
                                11,
                                3
                            ],
                            [
                                12,
                                3
                            ],
                            [
                                13,
                                3
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                12,
                                4
                            ],
                            [
                                11,
                                4
                            ],
                            [
                                8,
                                4
                            ],
                            [
                                6,
                                4
                            ],
                            [
                                5,
                                4
                            ],
                            [
                                4,
                                4
                            ],
                            [
                                2,
                                4
                            ],
                            [
                                1,
                                4
                            ],
                            [
                                1,
                                5
                            ],
                            [
                                0,
                                5
                            ],
                            [
                                0,
                                6
                            ],
                            [
                                2,
                                6
                            ],
                            [
                                3,
                                6
                            ],
                            [
                                3,
                                5
                            ],
                            [
                                4,
                                5
                            ],
                            [
                                5,
                                6
                            ],
                            [
                                6,
                                5
                            ],
                            [
                                7,
                                5
                            ],
                            [
                                9,
                                5
                            ],
                            [
                                10,
                                5
                            ],
                            [
                                11,
                                5
                            ],
                            [
                                13,
                                5
                            ],
                            [
                                14,
                                5
                            ],
                            [
                                14,
                                6
                            ],
                            [
                                13,
                                6
                            ],
                            [
                                11,
                                6
                            ],
                            [
                                10,
                                6
                            ],
                            [
                                9,
                                6
                            ],
                            [
                                8,
                                6
                            ],
                            [
                                1,
                                7
                            ],
                            [
                                2,
                                7
                            ],
                            [
                                3,
                                7
                            ],
                            [
                                4,
                                7
                            ],
                            [
                                5,
                                7
                            ],
                            [
                                6,
                                7
                            ],
                            [
                                7,
                                7
                            ],
                            [
                                8,
                                7
                            ],
                            [
                                9,
                                7
                            ],
                            [
                                11,
                                7
                            ],
                            [
                                12,
                                7
                            ],
                            [
                                13,
                                7
                            ],
                            [
                                14,
                                8
                            ],
                            [
                                13,
                                8
                            ],
                            [
                                11,
                                8
                            ],
                            [
                                10,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                8,
                                8
                            ],
                            [
                                6,
                                8
                            ],
                            [
                                4,
                                8
                            ],
                            [
                                3,
                                8
                            ],
                            [
                                1,
                                8
                            ],
                            [
                                0,
                                8
                            ],
                            [
                                1,
                                9
                            ],
                            [
                                2,
                                9
                            ],
                            [
                                3,
                                9
                            ],
                            [
                                4,
                                9
                            ],
                            [
                                5,
                                9
                            ],
                            [
                                7,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                9,
                                9
                            ],
                            [
                                13,
                                9
                            ],
                            [
                                14,
                                9
                            ],
                            [
                                14,
                                10
                            ],
                            [
                                13,
                                10
                            ],
                            [
                                12,
                                10
                            ],
                            [
                                11,
                                10
                            ],
                            [
                                10,
                                10
                            ],
                            [
                                9,
                                10
                            ],
                            [
                                7,
                                10
                            ],
                            [
                                6,
                                10
                            ],
                            [
                                5,
                                10
                            ],
                            [
                                3,
                                10
                            ],
                            [
                                1,
                                10
                            ],
                            [
                                0,
                                10
                            ],
                            [
                                0,
                                11
                            ],
                            [
                                2,
                                11
                            ],
                            [
                                4,
                                11
                            ],
                            [
                                7,
                                11
                            ],
                            [
                                8,
                                11
                            ],
                            [
                                10,
                                11
                            ],
                            [
                                11,
                                11
                            ],
                            [
                                12,
                                11
                            ],
                            [
                                14,
                                11
                            ],
                            [
                                0,
                                12
                            ],
                            [
                                1,
                                12
                            ],
                            [
                                2,
                                12
                            ],
                            [
                                3,
                                12
                            ],
                            [
                                4,
                                12
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                6,
                                12
                            ],
                            [
                                7,
                                12
                            ],
                            [
                                8,
                                12
                            ],
                            [
                                9,
                                12
                            ],
                            [
                                10,
                                12
                            ],
                            [
                                11,
                                12
                            ],
                            [
                                12,
                                12
                            ],
                            [
                                13,
                                12
                            ],
                            [
                                14,
                                12
                            ],
                            [
                                14,
                                13
                            ],
                            [
                                13,
                                13
                            ],
                            [
                                0,
                                13
                            ]
                        ],
                        "remove": true
                    }
                ]
            }
        ],
        "5,0": [
            {
                "type": "setValue",
                "name": "flag:MT284howitzers",
                "operator": "-=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "((flag:MT284mg42===0)&&((flag:MT284mg42===0)&&(flag:MT284flak===0)))",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                0,
                                2
                            ],
                            [
                                1,
                                2
                            ],
                            [
                                0,
                                3
                            ],
                            [
                                1,
                                3
                            ],
                            [
                                2,
                                3
                            ],
                            [
                                3,
                                3
                            ],
                            [
                                4,
                                3
                            ],
                            [
                                5,
                                3
                            ],
                            [
                                6,
                                3
                            ],
                            [
                                7,
                                3
                            ],
                            [
                                8,
                                3
                            ],
                            [
                                9,
                                3
                            ],
                            [
                                9,
                                2
                            ],
                            [
                                10,
                                2
                            ],
                            [
                                11,
                                2
                            ],
                            [
                                12,
                                2
                            ],
                            [
                                13,
                                2
                            ],
                            [
                                13,
                                1
                            ],
                            [
                                14,
                                1
                            ],
                            [
                                14,
                                2
                            ],
                            [
                                10,
                                3
                            ],
                            [
                                11,
                                3
                            ],
                            [
                                12,
                                3
                            ],
                            [
                                13,
                                3
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                12,
                                4
                            ],
                            [
                                11,
                                4
                            ],
                            [
                                8,
                                4
                            ],
                            [
                                6,
                                4
                            ],
                            [
                                5,
                                4
                            ],
                            [
                                4,
                                4
                            ],
                            [
                                2,
                                4
                            ],
                            [
                                1,
                                4
                            ],
                            [
                                1,
                                5
                            ],
                            [
                                0,
                                5
                            ],
                            [
                                0,
                                6
                            ],
                            [
                                2,
                                6
                            ],
                            [
                                3,
                                6
                            ],
                            [
                                3,
                                5
                            ],
                            [
                                4,
                                5
                            ],
                            [
                                5,
                                6
                            ],
                            [
                                6,
                                5
                            ],
                            [
                                7,
                                5
                            ],
                            [
                                9,
                                5
                            ],
                            [
                                10,
                                5
                            ],
                            [
                                11,
                                5
                            ],
                            [
                                13,
                                5
                            ],
                            [
                                14,
                                5
                            ],
                            [
                                14,
                                6
                            ],
                            [
                                13,
                                6
                            ],
                            [
                                11,
                                6
                            ],
                            [
                                10,
                                6
                            ],
                            [
                                9,
                                6
                            ],
                            [
                                8,
                                6
                            ],
                            [
                                1,
                                7
                            ],
                            [
                                2,
                                7
                            ],
                            [
                                3,
                                7
                            ],
                            [
                                4,
                                7
                            ],
                            [
                                5,
                                7
                            ],
                            [
                                6,
                                7
                            ],
                            [
                                7,
                                7
                            ],
                            [
                                8,
                                7
                            ],
                            [
                                9,
                                7
                            ],
                            [
                                11,
                                7
                            ],
                            [
                                12,
                                7
                            ],
                            [
                                13,
                                7
                            ],
                            [
                                14,
                                8
                            ],
                            [
                                13,
                                8
                            ],
                            [
                                11,
                                8
                            ],
                            [
                                10,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                8,
                                8
                            ],
                            [
                                6,
                                8
                            ],
                            [
                                4,
                                8
                            ],
                            [
                                3,
                                8
                            ],
                            [
                                1,
                                8
                            ],
                            [
                                0,
                                8
                            ],
                            [
                                1,
                                9
                            ],
                            [
                                2,
                                9
                            ],
                            [
                                3,
                                9
                            ],
                            [
                                4,
                                9
                            ],
                            [
                                5,
                                9
                            ],
                            [
                                7,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                9,
                                9
                            ],
                            [
                                13,
                                9
                            ],
                            [
                                14,
                                9
                            ],
                            [
                                14,
                                10
                            ],
                            [
                                13,
                                10
                            ],
                            [
                                12,
                                10
                            ],
                            [
                                11,
                                10
                            ],
                            [
                                10,
                                10
                            ],
                            [
                                9,
                                10
                            ],
                            [
                                7,
                                10
                            ],
                            [
                                6,
                                10
                            ],
                            [
                                5,
                                10
                            ],
                            [
                                3,
                                10
                            ],
                            [
                                1,
                                10
                            ],
                            [
                                0,
                                10
                            ],
                            [
                                0,
                                11
                            ],
                            [
                                2,
                                11
                            ],
                            [
                                4,
                                11
                            ],
                            [
                                7,
                                11
                            ],
                            [
                                8,
                                11
                            ],
                            [
                                10,
                                11
                            ],
                            [
                                11,
                                11
                            ],
                            [
                                12,
                                11
                            ],
                            [
                                14,
                                11
                            ],
                            [
                                0,
                                12
                            ],
                            [
                                1,
                                12
                            ],
                            [
                                2,
                                12
                            ],
                            [
                                3,
                                12
                            ],
                            [
                                4,
                                12
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                6,
                                12
                            ],
                            [
                                7,
                                12
                            ],
                            [
                                8,
                                12
                            ],
                            [
                                9,
                                12
                            ],
                            [
                                10,
                                12
                            ],
                            [
                                11,
                                12
                            ],
                            [
                                12,
                                12
                            ],
                            [
                                13,
                                12
                            ],
                            [
                                14,
                                12
                            ],
                            [
                                14,
                                13
                            ],
                            [
                                13,
                                13
                            ],
                            [
                                0,
                                13
                            ]
                        ],
                        "remove": true
                    }
                ]
            }
        ],
        "4,0": [
            {
                "type": "setValue",
                "name": "flag:MT284mg42",
                "operator": "-=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "((flag:MT284mg42===0)&&((flag:MT284mg42===0)&&(flag:MT284flak===0)))",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                0,
                                2
                            ],
                            [
                                1,
                                2
                            ],
                            [
                                0,
                                3
                            ],
                            [
                                1,
                                3
                            ],
                            [
                                2,
                                3
                            ],
                            [
                                3,
                                3
                            ],
                            [
                                4,
                                3
                            ],
                            [
                                5,
                                3
                            ],
                            [
                                6,
                                3
                            ],
                            [
                                7,
                                3
                            ],
                            [
                                8,
                                3
                            ],
                            [
                                9,
                                3
                            ],
                            [
                                9,
                                2
                            ],
                            [
                                10,
                                2
                            ],
                            [
                                11,
                                2
                            ],
                            [
                                12,
                                2
                            ],
                            [
                                13,
                                2
                            ],
                            [
                                13,
                                1
                            ],
                            [
                                14,
                                1
                            ],
                            [
                                14,
                                2
                            ],
                            [
                                10,
                                3
                            ],
                            [
                                11,
                                3
                            ],
                            [
                                12,
                                3
                            ],
                            [
                                13,
                                3
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                12,
                                4
                            ],
                            [
                                11,
                                4
                            ],
                            [
                                8,
                                4
                            ],
                            [
                                6,
                                4
                            ],
                            [
                                5,
                                4
                            ],
                            [
                                4,
                                4
                            ],
                            [
                                2,
                                4
                            ],
                            [
                                1,
                                4
                            ],
                            [
                                1,
                                5
                            ],
                            [
                                0,
                                5
                            ],
                            [
                                0,
                                6
                            ],
                            [
                                2,
                                6
                            ],
                            [
                                3,
                                6
                            ],
                            [
                                3,
                                5
                            ],
                            [
                                4,
                                5
                            ],
                            [
                                5,
                                6
                            ],
                            [
                                6,
                                5
                            ],
                            [
                                7,
                                5
                            ],
                            [
                                9,
                                5
                            ],
                            [
                                10,
                                5
                            ],
                            [
                                11,
                                5
                            ],
                            [
                                13,
                                5
                            ],
                            [
                                14,
                                5
                            ],
                            [
                                14,
                                6
                            ],
                            [
                                13,
                                6
                            ],
                            [
                                11,
                                6
                            ],
                            [
                                10,
                                6
                            ],
                            [
                                9,
                                6
                            ],
                            [
                                8,
                                6
                            ],
                            [
                                1,
                                7
                            ],
                            [
                                2,
                                7
                            ],
                            [
                                3,
                                7
                            ],
                            [
                                4,
                                7
                            ],
                            [
                                5,
                                7
                            ],
                            [
                                6,
                                7
                            ],
                            [
                                7,
                                7
                            ],
                            [
                                8,
                                7
                            ],
                            [
                                9,
                                7
                            ],
                            [
                                11,
                                7
                            ],
                            [
                                12,
                                7
                            ],
                            [
                                13,
                                7
                            ],
                            [
                                14,
                                8
                            ],
                            [
                                13,
                                8
                            ],
                            [
                                11,
                                8
                            ],
                            [
                                10,
                                8
                            ],
                            [
                                9,
                                8
                            ],
                            [
                                8,
                                8
                            ],
                            [
                                6,
                                8
                            ],
                            [
                                4,
                                8
                            ],
                            [
                                3,
                                8
                            ],
                            [
                                1,
                                8
                            ],
                            [
                                0,
                                8
                            ],
                            [
                                1,
                                9
                            ],
                            [
                                2,
                                9
                            ],
                            [
                                3,
                                9
                            ],
                            [
                                4,
                                9
                            ],
                            [
                                5,
                                9
                            ],
                            [
                                7,
                                9
                            ],
                            [
                                8,
                                9
                            ],
                            [
                                9,
                                9
                            ],
                            [
                                13,
                                9
                            ],
                            [
                                14,
                                9
                            ],
                            [
                                14,
                                10
                            ],
                            [
                                13,
                                10
                            ],
                            [
                                12,
                                10
                            ],
                            [
                                11,
                                10
                            ],
                            [
                                10,
                                10
                            ],
                            [
                                9,
                                10
                            ],
                            [
                                7,
                                10
                            ],
                            [
                                6,
                                10
                            ],
                            [
                                5,
                                10
                            ],
                            [
                                3,
                                10
                            ],
                            [
                                1,
                                10
                            ],
                            [
                                0,
                                10
                            ],
                            [
                                0,
                                11
                            ],
                            [
                                2,
                                11
                            ],
                            [
                                4,
                                11
                            ],
                            [
                                7,
                                11
                            ],
                            [
                                8,
                                11
                            ],
                            [
                                10,
                                11
                            ],
                            [
                                11,
                                11
                            ],
                            [
                                12,
                                11
                            ],
                            [
                                14,
                                11
                            ],
                            [
                                0,
                                12
                            ],
                            [
                                1,
                                12
                            ],
                            [
                                2,
                                12
                            ],
                            [
                                3,
                                12
                            ],
                            [
                                4,
                                12
                            ],
                            [
                                5,
                                12
                            ],
                            [
                                6,
                                12
                            ],
                            [
                                7,
                                12
                            ],
                            [
                                8,
                                12
                            ],
                            [
                                9,
                                12
                            ],
                            [
                                10,
                                12
                            ],
                            [
                                11,
                                12
                            ],
                            [
                                12,
                                12
                            ],
                            [
                                13,
                                12
                            ],
                            [
                                14,
                                12
                            ],
                            [
                                14,
                                13
                            ],
                            [
                                13,
                                13
                            ],
                            [
                                0,
                                13
                            ]
                        ],
                        "remove": true
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
    [  0,  0,  0,  0,266,388,266, 91,266,388,266,  0,  0, 11, 11],
    [ 11, 11,  0,  0,  0,  0,390,236,390, 11, 11, 11, 11,  0,  0],
    [  0,  0, 11, 11, 11, 11, 11, 11, 11,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,606],
    [50049,  0,  0,50049,  0,  0,  0,50049,  0,606,50049,  0,  0,50049,  0],
    [  0,  0,50049,  0,  0,50049,  0,  0,50049,  0,  0,  0,606,  0,  0],
    [  0,606,  0,  0,50049,  0,50049,606,  0,  0,  0,  0,606,  0,  0],
    [50049,  0,  0,  0,  0,  0,  0,  0,  0,  0,50049,  0,  0,  0,50049],
    [  0,  0,50049,  0,  0,50049,  0,50049,  0,  0,  0,  0,50049,  0,  0],
    [50049,  0,  0,  0,  0,  0,606,  0,  0,  0,50049,606,50049,  0,  0],
    [  0,  0,606,  0,50049,  0,  0,  0,50049,  0,  0,  0,  0,  0,  0],
    [  0,50049,  0,50049,  0,606,50049,  0,  0,50049,  0,  0,  0,50049,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,606,606,606,10147,  0,  0,  0,  0,601,606,606,606,  0,  0],
    [607,607,541,541,541,  0,  0,  0,  0,  0,541,541,541,607,607]
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