main.floors.MT295=
{
    "floorId": "MT295",
    "title": "英国",
    "name": "英国",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "cao6.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        
        {
            "type": "update"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]获得试用装备：P51D野马战斗机",
        {
            "type": "setValue",
            "name": "item:p51d",
            "operator": "+=",
            "value": "1"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]重置主角状态",
        {
            "type": "setValue",
            "name": "status:hpmax",
            "value": "100"
        },
        {
            "type": "setValue",
            "name": "status:hp",
            "value": "100"
        },
        {
            "type": "setValue",
            "name": "status:atk",
            "value": "100"
        },
        {
            "type": "setValue",
            "name": "status:mdef",
            "value": "100"
        },
        {
            "type": "setValue",
            "name": "status:mana",
            "value": "200"
        },
        {
            "type": "setValue",
            "name": "status:top",
            "value": "100"
        },
        {
            "type": "setValue",
            "name": "item:tea",
            "value": "50"
        },
        {
            "type": "setValue",
            "name": "item:cola",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:yellowKey",
            "value": "10"
        },
        {
            "type": "setValue",
            "name": "item:blueKey",
            "value": "4"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        {
            "type": "function",
            "function": "function(){\nflags.learned[20]=true\n}"
        },
        "\t[系统提示]习得新技能：红色尾翼",
        "\t[历史来源]\f[skill21.jpg,170,50]美国第332战斗机大队（又名塔斯克基飞行队）是二战时期美国第一支由黑人飞行员组成的飞行队，由于他们在飞机尾部涂上了显眼的红色，故也被称为“红尾巴”(red tails)。美国的种族歧视一直以来都非常严重，在二战时期，美军认为黑人只配从事最简单最低级的体力劳动，像飞行员这种“高贵”的工作是不能胜任的。然而，罗斯福总统却顶着几乎所有人的压力，签署政策声明：黑人在美军的战斗或非战斗部队中服役的人数要与美国人口中黑人的比例相称，其中也包括了航空部队。",
        "\t[历史来源]\f[skill21.jpg,170,50]第332战斗机大队就是在这种背景下诞生的。这群黑人飞行员顶着来自无数战友的鄙夷和霸凌，努力提升自己，积极作战，最终用实力创下奇迹：1267次护航任务中，只有27架轰炸机被敌军击落，赢得了轰炸机飞行员们的认可。战争期间，他们荣获至少1枚银星奖章、8枚紫心勋章、14枚铜星奖章、96枚优异飞行十字勋章和744枚空军奖章，击落111架敌机。355名黑人飞行员有68人牺牲，32人被俘。他们用自己的努力和成绩打破了世人的偏见，用赫赫战功告诉世人：没有哪个肤色是高贵的或低贱的，需要的只是努力奋斗的精神和勇敢的心。为纪念他们，2012年，一部名为《红色尾翼》的电影正式上映。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,10": [
            "\t[机场后勤,N516]长官，我方空军已就绪！",
            {
                "type": "choices",
                "text": "\t[机场后勤,N516]请选择出战空军",
                "choices": [
                    {
                        "text": "装备 P40B战斧",
                        "icon": "p40c",
                        "need": "core.hasItem('p40c')&&!core.hasEquip('p40c')",
                        "condition": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p40c"
                            }
                        ]
                    },
                    {
                        "text": "装备 喷火MK1型",
                        "icon": "spitfiremk1",
                        "need": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
                        "condition": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "spitfiremk1"
                            }
                        ]
                    },
                    {
                        "text": "装备 飓风MK2型",
                        "icon": "hurricanemk2",
                        "need": "core.hasItem('hurricanemk2')&&!core.hasEquip('hurricanemk2')",
                        "condition": "core.hasItem('hurricanemk2')&&!core.hasEquip('hurricanemk2')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "hurricanemk2"
                            }
                        ]
                    },
                    {
                        "text": "装备 F4F野猫战斗机",
                        "icon": "f4f3",
                        "need": "core.hasItem('f4f3')&&!core.hasEquip('f4f3')",
                        "condition": "core.hasItem('f4f3')&&!core.hasEquip('f4f3')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "f4f3"
                            }
                        ]
                    },
                    {
                        "text": "装备 喷火MK5战斗机",
                        "icon": "spitfiremk5",
                        "need": "core.hasItem('spitfiremk5')&&!core.hasEquip('spitfiremk5')",
                        "condition": "core.hasItem('spitfiremk5')&&!core.hasEquip('spitfiremk5')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "spitfiremk5"
                            }
                        ]
                    },
                    {
                        "text": "装备 喷火MK9战斗机",
                        "icon": "spitfiremk9",
                        "need": "core.hasItem('spitfiremk9')&&!core.hasEquip('spitfiremk9')",
                        "condition": "core.hasItem('spitfiremk9')&&!core.hasEquip('spitfiremk9')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "spitfiremk9"
                            }
                        ]
                    },
                    {
                        "text": "装备 P47B雷电战斗机",
                        "icon": "p47b",
                        "need": "core.hasItem('p47b')&&!core.hasEquip('p47b')",
                        "condition": "core.hasItem('p47b')&&!core.hasEquip('p47b')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p47b"
                            }
                        ]
                    },
                    {
                        "text": "装备 F6F地狱猫战斗机",
                        "icon": "f6f5",
                        "need": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
                        "condition": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "f6f5"
                            }
                        ]
                    },
                    {
                        "text": "装备 P51D野马战斗机",
                        "icon": "p51d",
                        "need": "core.hasItem('p51d')&&!core.hasEquip('p51d')",
                        "condition": "core.hasItem('p51d')&&!core.hasEquip('p51d')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p51d"
                            }
                        ]
                    },
                    {
                        "text": "装备 英俊战士重型战斗机",
                        "icon": "beautifighter",
                        "need": "core.hasItem('beautifighter')&&!core.hasEquip('beautifighter')",
                        "condition": "core.hasItem('beautifighter')&&!core.hasEquip('beautifighter')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "beautifighter"
                            }
                        ]
                    },
                    {
                        "text": "装备 P38闪电重型战斗机",
                        "icon": "p38",
                        "need": "core.hasItem('p38')&&!core.hasEquip('p38')",
                        "condition": "core.hasItem('p38')&&!core.hasEquip('p38')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p38"
                            }
                        ]
                    },
                    {
                        "text": "装备 台风攻击机",
                        "icon": "typhoon",
                        "need": "core.hasItem('typhoon')&&!core.hasEquip('typhoon')",
                        "condition": "core.hasItem('typhoon')&&!core.hasEquip('typhoon')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "typhoon"
                            }
                        ]
                    },
                    {
                        "text": "装备 蚊式战斗机",
                        "icon": "mosquito",
                        "need": "core.hasItem('mosquito')&&!core.hasEquip('mosquito')",
                        "condition": "core.hasItem('mosquito')&&!core.hasEquip('mosquito')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "mosquito"
                            }
                        ]
                    },
                    {
                        "text": "装备 B17空中堡垒",
                        "icon": "b17",
                        "need": "core.hasItem('b17')&&!core.hasEquip('b17')",
                        "condition": "core.hasItem('b17')&&!core.hasEquip('b17')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "b17"
                            }
                        ]
                    },
                    {
                        "text": "卸下当前战斗机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 4
                            }
                        ]
                    },
                    {
                        "text": "卸下当前攻击机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 5
                            }
                        ]
                    },
                    {
                        "text": "卸下当前轰炸机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 6
                            }
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    }
                ]
            }
        ],
        "10,11": [
            "\t[参谋,N517]长官，请下达指示！",
            "\t[系统提示]即将进入存档界面",
            {
                "type": "callSave"
            },
            {
                "type": "insert",
                "name": "选择技能"
            },
            {
                "type": "choices",
                "text": "是否立即前往战场？",
                "choices": [
                    {
                        "text": "还没准备好",
                        "action": []
                    },
                    {
                        "text": "现在出发",
                        "action": [
                            {
                                "type": "if",
                                "condition": "core.hasEquip('b17')",
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
                                        "type": "changeFloor",
                                        "floorId": "MT296",
                                        "loc": [
                                            7,
                                            14
                                        ],
                                        "direction": "up"
                                    }
                                ],
                                "false": [
                                    "必须装备B17轰炸机才可执行任务！"
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,11": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：德国空军精锐。\n推荐携带技能：防空弹幕、空战王牌、破译、补给线、孟菲斯美女号、红色尾翼\n推荐出战装备：P51D野马、英俊战士或蚊式，B17必带。"
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30526,30526,30526,  0],
    [  0,  0,311,311,311,311,311,  0,  0,  0,  0,30534,30534,30534,  0],
    [  0,  0,311,573,  0,573,311,  0,  0,  0,  0,30542,30542,30542,  0],
    [  0,633,  0,633,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,633,  0,633,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,633,  0,633,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,633,  0,633,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,311,573,  0,573,311,516,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,311,311,311,311,311,  0,  0,311,311,517,311,311,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,311,  0,  0,  0,311,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,311,10139,10168,10139,311,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,311,10139,10176,10139,311,  0,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,359,359,359,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [513,513,359,359,513,513,513,359,359,513,513,513,359,359,513],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [513,513,513,513,359,359,513,513,513,513,359,359,513,513,513],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [513,513,359,359,513,513,513,359,359,513,513,513,359,359,513],
    [  0,  0,359,359,359,  0,  0,557,  0,  0,556,556,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,359,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10163,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "陆地"
}