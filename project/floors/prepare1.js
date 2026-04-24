main.floors.prepare1=
{
    "floorId": "prepare1",
    "title": "法国边境-营地",
    "name": "法国边境-营地",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground4",
    "bgm": "cao6.mp3",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "status:hp",
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:hpmax",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:mana",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:atk",
            "value": "10",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:arm",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:top",
            "value": "100",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:tpn",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:dod",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:mdef",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:money",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:exp",
            "value": "0"
        },
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
            "type": "showui"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]现在是战前准备阶段。你可以在此选择本区域作战的出场装备和技能。战斗开始后，将无法回到此地。后面的区域也都会有这样的准备阶段。",
        "\t[系统提示]绿色箭头指向的NPC们可以帮助你装上装备，或是选择出战的技能。准备完成后，可以在参谋\\i[N517]处正式开始游戏。",
        {
            "type": "function",
            "function": "function(){\nflags.learned[1]=true\n}"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]\r[aqua]经费不足，某些地图画出来的效果可能非常不理想，还请谅解下，凑合玩吧。\r"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "4,7": [
            "\t[机场地勤,N516]抱歉长官，您尚未解锁任何可用空军单位。"
        ],
        "12,2": [
            "\t[维修人员,N514]抱歉长官，您现在还没有指挥装甲部队的权利。"
        ],
        "12,9": [
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
                                "floorId": "MT1",
                                "loc": [
                                    0,
                                    7
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "14,9": [
            "\t[系统提示]这个牌子是为帮助玩家选择接下来的战斗中要使用的技能，每一个像这样的准备楼层，系统都会在这个牌子上提供部分关于当前区域的敌人信息，以及推荐选用的技能、装备等，供玩家参考。",
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：步兵居多，伴随少量轻型火炮、轻型坦克和飞机。\n推荐携带技能：战壕\n推荐出战装备：无"
        ],
        "9,12": [
            "展示技能：核弹",
            {
                "type": "showImage",
                "code": 1,
                "image": "aircraft6.png",
                "loc": [
                    20,
                    480
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "playSound",
                "name": "bomber1.mp3"
            },
            {
                "type": "moveImage",
                "code": 1,
                "to": [
                    20,
                    -330
                ],
                "time": 2000
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 0
            },
            {
                "type": "sleep",
                "time": 2000
            },
            {
                "type": "setCurtain",
                "color": [
                    255,
                    255,
                    255,
                    1
                ],
                "time": 100,
                "keep": true
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "nuke.jpg",
                "loc": [
                    0,
                    0
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "sleep",
                "time": 1000
            },
            {
                "type": "playSound",
                "name": "049-Explosion02.mp3"
            },
            {
                "type": "vibrate",
                "direction": "horizontal",
                "time": 3000,
                "speed": 10,
                "power": 10,
                "async": true
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
                    255,
                    255,
                    255,
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
                "type": "sleep",
                "time": 500
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            {
                "type": "waitAsync"
            }
        ],
        "4,1": [
            "展示结局",
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
                "type": "confirm",
                "text": "要观看结尾吗？",
                "yes": [
                    {
                        "type": "insert",
                        "name": "结尾剧情"
                    }
                ],
                "no": [
                    {
                        "type": "setCurtain",
                        "time": 500
                    }
                ]
            }
        ],
        "11,2": [
            "坦克车间\n（选择出战的坦克类装备）"
        ],
        "4,6": [
            "机场\n（选择出战的空军类装备）"
        ],
        "11,8": [
            "盟军作战指挥室\n（选择技能以及开始游戏）"
        ],
        "9,13": [
            {
                "type": "showImage",
                "code": 1,
                "image": "aircraft9.png",
                "loc": [
                    480,
                    115
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "moveImage",
                "code": 1,
                "to": [
                    -195,
                    115
                ],
                "time": 700,
                "async": true
            },
            {
                "type": "playSound",
                "name": "fighter.mp3"
            },
            {
                "type": "sleep",
                "time": 100,
                "noSkip": true
            },
            {
                "type": "playSound",
                "name": "Saint4.mp3"
            },
            {
                "type": "animate",
                "name": "disturb",
                "loc": [
                    9,
                    12
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100,
                "noSkip": true
            },
            {
                "type": "animate",
                "name": "disturb",
                "loc": [
                    4,
                    10
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100,
                "noSkip": true
            },
            {
                "type": "animate",
                "name": "disturb",
                "loc": [
                    3,
                    5
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100,
                "noSkip": true
            },
            {
                "type": "animate",
                "name": "disturb",
                "loc": [
                    8,
                    4
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100,
                "noSkip": true
            },
            {
                "type": "animate",
                "name": "disturb",
                "loc": [
                    7,
                    7
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 0
            }
        ],
        "9,9": [
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    "core.nextX()",
                    "core.nextY()"
                ],
                "async": true
            },
            {
                "type": "jump",
                "from": [
                    "core.nextX()",
                    "core.nextY()"
                ],
                "to": [
                    "core.nextX(2)",
                    "core.nextY(2)"
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "bigexplore",
                "loc": [
                    "core.nextX(2)",
                    "core.nextY(2)"
                ]
            }
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
    [120054,120055,  0,  0,  0,80650,80651,80650,80651,140085,140086,140087,140088,  0,140085],
    [120098,120099,120100,  0,10289,80658,80659,80658,80659,140102,140103,140104,140105,  0,140102],
    [120142,120143,120144,120145,  0,  0,  0,  0,  0,  0,  0,10289,514,130063,  0],
    [120186,120187,120188,120189,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,130063,  0,  0,  0,  0,  0,  0,  0,  0,  0,130016],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,120870,120871,120872,120873,  0,  0],
    [  0,  0,  0,  0,10289,  0,  0,  0,120913,120914,120915,120916,120917,  0,  0],
    [  0,  0,  0,  0,516,  0,  0,  0,120957,120958,120959,120960,120961,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10289,  0,130063,  0],
    [  0,  0,  0,  0,  0,130016,  0,  0,  0,311,311,311,517,311,311],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,311,10110,  0,  0,10161,10162],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,311,  0,  0,517,  0,  0],
    [  0,  0,  0,  0,30509,30509,30509,30509,  0,311,  0,10136,10137,10138,  0],
    [  0,  0,  0,  0,30509,30509,30509,30509,  0,311,517,10144,10145,10146,517],
    [  0,  0,  0,  0,30509,30509,30509,30509,  0,311,  0,10152,10153,10154,  0]
],
    "bgmap": [
    [120707,120399,120707,120708,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [120707,120399,120707,120708,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [120707,120707,120707,120708,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [120707,120399,120707,120708,  0,  0,100040,  0,  0,  0,100040,  0,559,  0,  0],
    [120707,120399,120707,120708,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [120707,120707,120707,120708,  0,  0,  0,  0,  0,100040,  0,  0,  0,100040,  0],
    [120707,120399,120707,120708,  0,  0,100040,  0,  0,  0,  0,  0,  0,  0,  0],
    [120707,120399,120707,120708,  0,557,  0,  0,  0,  0,  0,  0,  0,  0,100040],
    [120707,120707,120707,120708,  0,  0,  0,100040,  0,  0,  0,  0,556,  0,556],
    [120707,120399,120707,120708,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [120707,120399,120707,120708,  0,  0,  0,  0,  0,  0,359,359,359,359,359],
    [120707,120707,120707,120708,  0,100040,  0,  0,  0,  0,359,359,359,359,359],
    [120707,120399,120707,120708,  0,  0,  0,  0,  0,  0,359,359,359,359,359],
    [120707,120399,120707,120708,  0,  0,  0,  0,  0,  0,359,359,359,359,359],
    [120707,120707,120707,120708,  0,  0,  0,  0,  0,  0,359,359,359,359,359]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,130042,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,130042,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,130042,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10163],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10160,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10140,  0,10140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "陆地"
}