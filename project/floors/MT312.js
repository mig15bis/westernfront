main.floors.MT312=
{
    "floorId": "MT312",
    "title": "诺曼底-朱诺海滩",
    "name": "诺曼底-朱诺海滩",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "farthestend.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        "\r[yellow]Mission 42 登陆日——朱诺海滩",
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
                "rightup:1"
            ]
        },
        {
            "type": "sleep",
            "time": 100
        },
        {
            "type": "animate",
            "name": "shoot3",
            "loc": [
                0,
                10
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 50
        },
        {
            "type": "animate",
            "name": "shoot3",
            "loc": [
                2,
                11
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "zone",
            "loc": [
                2,
                12
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 50
        },
        {
            "type": "animate",
            "name": "shoot3",
            "loc": [
                10,
                11
            ],
            "async": true
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
            "type": "sleep",
            "time": 50
        },
        {
            "type": "animate",
            "name": "shoot3",
            "loc": [
                12,
                11
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 50
        },
        {
            "type": "animate",
            "name": "shoot3",
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
                5,
                9
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "shoot3",
            "loc": [
                4,
                11
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 50
        },
        {
            "type": "animate",
            "name": "shoot3",
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
                7,
                10
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 50
        },
        {
            "type": "animate",
            "name": "shoot3",
            "loc": [
                6,
                11
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 50
        },
        {
            "type": "animate",
            "name": "shoot3",
            "loc": [
                14,
                11
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 50
        },
        {
            "type": "animate",
            "name": "shoot3",
            "loc": [
                7,
                12
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
            "time": 50
        },
        {
            "type": "animate",
            "name": "shoot3",
            "loc": [
                9,
                10
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 50
        },
        {
            "type": "hide",
            "loc": [
                [
                    1,
                    11
                ],
                [
                    2,
                    11
                ],
                [
                    2,
                    12
                ],
                [
                    3,
                    11
                ],
                [
                    4,
                    11
                ],
                [
                    4,
                    12
                ],
                [
                    10,
                    12
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
                    13,
                    11
                ],
                [
                    14,
                    11
                ]
            ],
            "remove": true,
            "time": 0,
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "playSound",
            "name": "bomber3.mp3"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "aircraft2.png",
            "loc": [
                480,
                -30
            ],
            "opacity": 1,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 2,
            "image": "aircraft2.png",
            "loc": [
                680,
                0
            ],
            "opacity": 1,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 3,
            "image": "aircraft2.png",
            "loc": [
                530,
                90
            ],
            "opacity": 1,
            "time": 0,
            "async": true
        },
        {
            "type": "moveImage",
            "code": 1,
            "to": [
                -395,
                0
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "moveImage",
            "code": 2,
            "to": [
                -195,
                0
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "moveImage",
            "code": 1,
            "to": [
                -345,
                0
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "animate",
            "name": "zone",
            "loc": [
                13,
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
            "name": "zone",
            "loc": [
                10,
                3
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 100
        },
        {
            "type": "animate",
            "name": "zone",
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
            "name": "zone",
            "loc": [
                7,
                0
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 100
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
            "type": "sleep",
            "time": 100
        },
        {
            "type": "animate",
            "name": "zone",
            "loc": [
                3,
                4
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 100
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
            "type": "waitAsync"
        },
        "\t[盟军指挥官,hero]都趴下！就近找掩体！快！",
        "\t[盟军指挥官,hero]坦克部队还没上岸吗？坚持住！放低身体！稳步前进！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "hp",
            "value": "1000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "ap",
            "value": "200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "hp",
            "value": "600000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "atk",
            "value": "80000",
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
            "value": "6",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "zone",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "hp",
            "value": "300000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "atk",
            "value": "200000",
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
            "value": "750000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "ap",
            "value": "200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "hp",
            "value": "650000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "atk",
            "value": "72000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "ap",
            "value": "200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "600000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "special",
            "value": "[6,15]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "zoneSquare",
            "value": "true",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "range",
            "value": "4",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "zone",
            "value": "6000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "hp",
            "value": "600000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "18000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "special",
            "value": "[6,15]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "zoneSquare",
            "value": "true",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "range",
            "value": "4",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "zone",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "hp",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "atk",
            "value": "100000",
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
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer150",
            "name": "atk",
            "value": "500000",
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
            "id": "howitzer150",
            "name": "range",
            "value": "10",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4h",
            "name": "hp",
            "value": "600000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4h",
            "name": "atk",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4h",
            "name": "special",
            "value": "[67]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "hp",
            "value": "700000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "atk",
            "value": "120000",
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
            "value": "800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "atk",
            "value": "150000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "special",
            "value": "[38,65,86,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug4",
            "name": "hp",
            "value": "600000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug4",
            "name": "atk",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug4",
            "name": "special",
            "value": "[56,59,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug4",
            "name": "zone",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "180000",
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
            "value": "[40,59,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "wildwind",
            "name": "hp",
            "value": "600000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "wildwind",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "hp",
            "value": "1000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "atk",
            "value": "18000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "special",
            "value": "[6,15,63,86,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "zoneSquare",
            "value": "true",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "range",
            "value": "4",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "zone",
            "value": "1800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "gunbunker",
            "name": "hp",
            "value": "1000000",
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
            "value": "[15,63,86,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "gunbunker",
            "name": "range",
            "value": "10",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "coast381",
            "name": "hp",
            "value": "1000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "coast381",
            "name": "atk",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "coast381",
            "name": "special",
            "value": "[15,32,37,46,84,86,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "coast381",
            "name": "range",
            "value": "15",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "coast381",
            "name": "zone",
            "value": "50000"
        },
        {
            "type": "setGlobalValue",
            "name": "lavaDamage",
            "value": 100000
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
        "\t[任务目标]⭐通过当前区域\n⭐破坏所有防御建筑\n⭐消灭所有步兵",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第42关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第42关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第42关通关",
                    "operator": "=",
                    "text": "通过当前区域",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第42关任务2",
            "n": 1,
            "text": "破坏所有防御建筑",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "建筑",
                    "floorId": [
                        "MT312",
                        "MT313",
                        "MT314",
                        "MT315",
                        "MT316"
                    ],
                    "operator": "<=",
                    "text": "防御建筑剩余",
                    "count": 0
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第42关任务3",
            "n": 1,
            "text": "消灭所有步兵",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "步兵",
                    "floorId": [
                        "MT312",
                        "MT313",
                        "MT314",
                        "MT315",
                        "MT316"
                    ],
                    "operator": "<=",
                    "text": "步兵剩余",
                    "count": 0
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,11": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]坦克不在，是不是感觉步履维艰了？避开强敌，向左侧突破，找到星星\\i[starPortal]标记的地点与坦克部队会合！那个……你应该能分清左右吧？",
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]另外，就算等你装上坦克了也别想着接下来会特别轻松。因为敌人已经开始大规模列装“铁拳”火箭筒了，所以很多步兵的穿甲值已经达到了200，你没法对步兵先攻5回合了！"
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "MT313",
            "loc": [
                14,
                7
            ]
        },
        "0,0": {
            "floorId": "MT313",
            "loc": [
                14,
                0
            ]
        },
        "14,7": {
            "floorId": "MT315",
            "loc": [
                0,
                7
            ]
        },
        "14,0": {
            "floorId": "MT315",
            "loc": [
                0,
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
    [ 92,544,388,390,540,248,540,390,228,540,266,544,388,542, 94],
    [40049,40049,40050,606,266,218,267,265,606,40048,40049,40049,40049,40049,40049],
    [40057,40057,40058,40048,40049,40049,40049,40049,40050,40056,40057,40057,40057,40057,40057],
    [631,631,631,40056,40057,40057,40057,40057,40058,631,631,631,215,631,631],
    [631,215,631,518,631,631,631,218,631,215,631,631,203,631,631],
    [518,244, 11,218,631,215,631,244, 11,518,631,542, 11,203,215],
    [631,631,250, 11,250,250,631,203,631,265,203, 11,244,631,631],
    [ 92,218, 11,631,204,631,543,543,631,518,631,631, 11,227, 94],
    [631,631,250,542,631,204,631,631,204,631,204,631,275,631,631],
    [543, 11,203,631,244, 11,203,  0,203, 11,203,275, 11,265,541],
    [543,631,544,244,544,631,631, 11,631,631,544,544,631,631,541],
    [631,550,550,550,550,631,601,  0,  0,631,550,494,494,494,550],
    [145,145,494,  0,494,631,607,  0,607,631,550,145,145,145,145],
    [145,145,145,145,145,145,145,145,607,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145,145,145]
],
    "bgmap": [
    [40033,40041,40033,40033,40033,40033,40033,40033,40033,40041,40041,40041,40041,40041,40041],
    [  0,  0,  0,40040,40041,40041,40041,40041,40042,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,658,661,656,658,  0,  0,  0,  0,  0,659,654,654,661,658],
    [  0,  0,658,659,655,  0,  0,  0,  0,  0,661,  0,  0,  0,658],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,657,  0,  0,  0,  0,  0,  0,660,  0,  0,  0,658,  0]
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,498,  0,  0],
    [655,631,498,  0,498,  0,  0,498,  0,  0,498,  0,658,631,  0],
    [631,  0,661,  0,631,  0,  0,  0,  0,  0,  0,631,  0,656,631]
],
    "area": "浅滩"
}