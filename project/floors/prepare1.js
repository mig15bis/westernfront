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
    "defaultGround": "grass2",
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
        "9,8": [
            "盟军作战指挥室\n（选择技能以及开始游戏）"
        ],
        "5,4": [
            "机场\n（选择出战的空军类装备）"
        ],
        "9,3": [
            "坦克车间\n（选择出战的坦克类装备）"
        ],
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
        "9,11": [
            "展示技能：谢尔曼风琴",
            {
                "type": "showImage",
                "code": 1,
                "image": "skill20.jpg",
                "loc": [
                    -300,
                    50
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "moveImage",
                "code": 1,
                "to": [
                    90,
                    50
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "playSound",
                "name": "katyusha.mp3"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "playSound",
                "name": "katyusha.mp3"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "playSound",
                "name": "katyusha.mp3"
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 500
            },
            {
                "type": "sleep",
                "time": 1000
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    7,
                    5
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    6,
                    7
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    8,
                    5
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    9,
                    9
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    5,
                    6
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    7,
                    8
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    6,
                    5
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    8,
                    7
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    5,
                    8
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    7,
                    6
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    9,
                    5
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    6,
                    9
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    8,
                    6
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 100
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    5,
                    7
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            }
        ],
        "9,9": [
            "展示技能：航母空袭",
            {
                "type": "playSound",
                "name": "fighter1.mp3"
            },
            {
                "type": "playSound",
                "name": "cvstrike.mp3"
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "cvstrike.png",
                "loc": [
                    30,
                    100
                ],
                "opacity": 1,
                "time": 500
            },
            {
                "type": "sleep",
                "time": 1000,
                "noSkip": true
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 500
            },
            {
                "type": "sleep",
                "time": 3000,
                "noSkip": true
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "cvairgroup.png",
                "loc": [
                    0,
                    -1920
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "moveImage",
                "code": 1,
                "to": [
                    0,
                    1920
                ],
                "time": 13000,
                "async": true
            },
            {
                "type": "sleep",
                "time": 1000,
                "noSkip": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    2,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    1,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    9,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    2
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    5,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    14,
                    9
                ]
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    4,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    9,
                    2
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    3,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    7,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    1,
                    0
                ]
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    0,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    8,
                    14
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    14,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    8,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    4,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    1,
                    0
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    1,
                    12
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    9,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    5,
                    11
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    2,
                    10
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    1,
                    3
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    13,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    9,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    6,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    0,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    8,
                    1
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    4,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    3,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    8,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    4,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    10,
                    3
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    12,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    14,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    1,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    4,
                    5
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    5,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    1,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    5,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    7,
                    4
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    13,
                    14
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    0,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    8,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    2,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    5,
                    4
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    5,
                    10
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    0,
                    10
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    3,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    2,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    1,
                    5
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    12,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    11,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    9,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    4,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    3,
                    2
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    6,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    9,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    7,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    3,
                    14
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    7,
                    6
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    12,
                    10
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    3,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    9,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    7,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    1,
                    14
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    7,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    13,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    14,
                    13
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    14,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    1,
                    3
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    11,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    6,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    4,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    8,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    13,
                    1
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    8,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    14,
                    14
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    1,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    13,
                    10
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    4,
                    11
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    10,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    2,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    13,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    13,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    10,
                    13
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    9,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    14,
                    13
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    14,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    8,
                    14
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    5,
                    9
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    10,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    11,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    13,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    7,
                    14
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    8,
                    11
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    9,
                    14
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    4,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    1,
                    14
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    10,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    9,
                    4
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    8,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    7,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    3,
                    13
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    3,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    9,
                    1
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    10,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    7,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    9,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    14,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    3,
                    7
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    7,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    13,
                    14
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    4,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    0,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    13,
                    2
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    11,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    1,
                    10
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    4,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    4,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    13,
                    8
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    7,
                    11
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    11,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    9,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    7,
                    11
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore3",
                "loc": [
                    4,
                    13
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
        "9,10": [
            "展示技能：地毯式轰炸",
            {
                "type": "playSound",
                "name": "bomber4.mp3"
            },
            {
                "type": "sleep",
                "time": 2000,
                "noSkip": true
            },
            {
                "type": "playSound",
                "name": "airstrike.mp3"
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "carpetbomb.png",
                "loc": [
                    0,
                    480
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "moveImage",
                "code": 1,
                "to": [
                    0,
                    -1920
                ],
                "time": 10000,
                "async": true
            },
            {
                "type": "sleep",
                "time": 1000
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    14,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    13,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    4,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    0,
                    10
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    3,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    14,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    8,
                    14
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    0,
                    12
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    5,
                    1
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    13,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    3,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    10,
                    14
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    7,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    4,
                    9
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    1,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    11
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    9,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    11,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    14,
                    8
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    3,
                    13
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    0,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    8,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    12,
                    10
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    5,
                    14
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    13,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    4,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    10,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    7,
                    11
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    2,
                    2
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    14,
                    11
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    9,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    1,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    11,
                    13
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    0,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    12,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    8,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    3,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    5,
                    5
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    13,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    10,
                    10
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    4,
                    14
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    7,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    14,
                    2
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    13
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    9,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    2,
                    11
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    11,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    1,
                    8
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    0,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    12,
                    12
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    8,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    3,
                    10
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    5,
                    8
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    13,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    10,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    4,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    7,
                    14
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    14,
                    5
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    6,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    9,
                    12
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    2,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    11,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    1,
                    12
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    0,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    12,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    8,
                    11
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    3,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    5,
                    11
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    13,
                    12
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    10,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    4,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    7,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    14,
                    13
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    6,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    9,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    2,
                    14
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    11,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    1,
                    3
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    0,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    12,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    8,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    3,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    5,
                    0
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    13,
                    14
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    10,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    4,
                    11
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    7,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    14,
                    0
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    9,
                    11
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    2,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    11,
                    14
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    1,
                    10
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    0,
                    14
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    12,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    8,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    3,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    5,
                    3
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    13,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    10,
                    12
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    4,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    7,
                    13
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    14,
                    9
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    9,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    2,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    11,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    1,
                    6
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    0,
                    10
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    12,
                    13
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    8,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    3,
                    12
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    5,
                    7
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    13,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    10,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    4,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    7,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    14,
                    1
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
                        "type": "showImage",
                        "code": 1,
                        "image": "black.png",
                        "loc": [
                            0,
                            0
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 0
                    },
                    {
                        "type": "playBgm",
                        "name": "pearlharbor.mp3",
                        "keep": true
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 2,
                        "image": "title1.png",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            140,
                            100,
                            360,
                            90
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "title2.png",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            140,
                            190,
                            350,
                            120
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "hideImage",
                        "code": 3,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end1.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "aircraft7.png",
                        "loc": [
                            640,
                            115
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "作者：\n    喜食佩刀的米格\n策划：\n    喜食佩刀的米格\n剧情：\n    喜食佩刀的米格",
                        "loc": [
                            200,
                            150
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            -195,
                            115
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            -480,
                            0
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end2.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "aircraft1.png",
                        "loc": [
                            -195,
                            115
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "rotateImage",
                        "code": 4,
                        "angle": 180,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "脚本：\n    秋橙\n美工：\n    喜食佩刀的米格\n    永葆一颗童心\n测试：\n    待定",
                        "loc": [
                            200,
                            150
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            640,
                            115
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            640,
                            0
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "waitAsync"
                    },
                    {
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end3.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "aircraft7.png",
                        "loc": [
                            143,
                            480
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "rotateImage",
                        "code": 4,
                        "angle": 90,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "灵感来源：\n        真实历史\n制作工具：\n        HTML5魔塔样板v2.8\n文本参考：\n        百度百科",
                        "loc": [
                            200,
                            150
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            143,
                            -115
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            0,
                            -480
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end4.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "aircraft2.png",
                        "loc": [
                            143,
                            -251
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "rotateImage",
                        "code": 4,
                        "angle": -90,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "图片来源：\n        互联网\n        War in the Pacific（游戏）\n        如发现图片内容与文本不符，欢迎指正",
                        "loc": [
                            200,
                            150
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            143,
                            480
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            0,
                            480
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end5.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "aircraft1.png",
                        "loc": [
                            640,
                            115
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "音乐来源：\n        碧蓝航线\n        永远的七日之都\n        双星物语\n        将军的荣耀\n        钢铁雄心\n        坦克世界\n        三国志曹操传\n        冰封前线系列\n        欧洲空战英雄\n        战争雷霆\n        空中冲突太平洋航母\n        War on the Sea\n        艾丽卡（小孩版本）\n        farthestend\n        Harbinger\n        Exodus",
                        "loc": [
                            200,
                            50
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            -195,
                            115
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            -480,
                            0
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end6.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "aircraft3.png",
                        "loc": [
                            143,
                            480
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "音效来源：（H5自带及群文件中的不算在内）\n        War in the Pacific\n        Kards\n        新抢摊登陆\n        抢摊登陆2006\n        战争雷霆\n        偷袭珍珠港\n        猎杀潜航\n        太平洋风暴：盟军\n        还有从其他魔塔借的",
                        "loc": [
                            200,
                            100
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            143,
                            -251
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            0,
                            -480
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end7.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "aircraft1.png",
                        "loc": [
                            -195,
                            115
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "rotateImage",
                        "code": 4,
                        "angle": 180,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "声明：\n    本游戏目前仅在h5mota.com发布\n    完全免费，不用于商业用途\n    剧情改编自真实历史，如有雷同，纯属正常\n    不雷同那就怪了\n    若您在其他网站发现并游玩本游戏\n    建议前往上述网站支持原版\n    不会有人付费玩这游戏吧？不会吧？",
                        "loc": [
                            200,
                            100
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            640,
                            115
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            640,
                            0
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end8.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "cvairgroup.png",
                        "loc": [
                            0,
                            -1920
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "作者B站名：大傻米格\nuid：279738052\n欢迎关注！",
                        "loc": [
                            200,
                            150
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            0,
                            480
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            0,
                            480
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end9.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "carpetbomb.png",
                        "loc": [
                            0,
                            480
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "    如有意见或建议\n     可发评论区\n     或私信作者\n欢迎一切积极友善的讨论！",
                        "loc": [
                            200,
                            120
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            0,
                            -1920
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            0,
                            -480
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end10.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "aircraft6.png",
                        "loc": [
                            20,
                            480
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "谨以本作以及另外两部前作\n向所有在第二次世界大战中\n为反法西斯事业做出贡献的\n来自世界各地的英勇战士们\n   致以最崇高的敬意！",
                        "loc": [
                            200,
                            120
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            20,
                            -330
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            0,
                            -480
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "setCurtain",
                        "color": [
                            0,
                            0,
                            0,
                            1
                        ],
                        "time": 0,
                        "keep": true
                    },
                    {
                        "type": "hideImage",
                        "code": 1,
                        "time": 0
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "MT451",
                        "loc": [
                            7,
                            0
                        ],
                        "direction": "down",
                        "time": 1000
                    }
                ],
                "no": []
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
    [  0,505,  0,505,  0,  0,  0,  0,  0,311,507,  0,507,  0,507],
    [311,311,311,311,311,  0,  0,  0,  0,311,  0,  0,  0,  0,  0],
    [495,495,495,  0,311,  0,  0,  0,  0,311,311,311,514,311,311],
    [  0,  0,  0,497,311,  0,  0,  0,  0,10289,  0,514,  0,514,  0],
    [  0,495,  0,496,311,10289,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,497,311,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,311,514,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,516,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,505,311,514,  0,  0,  0,10289,  0,514,  0,514,  0],
    [  0,  0,  0,  0,311,  0,  0,  0,  0,311,311,311,517,311,311],
    [  0,  0,  0,  0,311,  0,  0,  0,  0,311,10110,  0,  0,10161,10162],
    [  0,  0,  0,505,311,  0,  0,  0,  0,311,  0,  0,517,  0,  0],
    [  0,  0,  0,  0,311,  0,  0,  0,  0,311,  0,10136,10137,10138,  0],
    [  0,  0,  0,  0,311,  0,  0,  0,  0,311,517,10144,10145,10146,517],
    [  0,  0,  0,505,311,  0,  0,  0,  0,311,  0,10152,10153,10154,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,359,359],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,359,359],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [359,359,359,  0,  0,  0,  0,  0,  0,  0,  0,  0,559,  0,  0],
    [359,513,359,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [359,513,359,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [359,359,359,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [359,513,359,  0,  0,557,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [359,513,359,  0,  0,  0,  0,  0,  0,  0,  0,  0,556,  0,556],
    [359,359,359,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [359,513,359,  0,  0,  0,  0,  0,  0,  0,359,359,359,359,359],
    [359,513,359,  0,  0,  0,  0,  0,  0,  0,359,359,359,359,359],
    [359,359,359,  0,  0,  0,  0,  0,  0,  0,359,359,359,359,359],
    [359,513,359,  0,  0,  0,  0,  0,  0,  0,359,359,359,359,359],
    [359,513,359,  0,  0,  0,  0,  0,  0,  0,359,359,359,359,359]
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10163],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10160,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10140,  0,10140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "陆地"
}