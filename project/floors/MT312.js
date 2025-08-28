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
        
        "\r[yellow]Mission 43 登陆日——朱诺海滩",
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
        "\t[任务目标]⭐通过当前区域\n⭐破坏所有防御建筑\n⭐消灭所有步兵",
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,11": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]坦克不在，是不是感觉步履维艰了？避开强敌，向左侧突破，找到星星标记的地点与坦克部队会合！那个，你应该不是左右不分的人吧？",
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]另外，就算等你装上坦克了也别想着接下来会很轻松。看到那些穿甲值200的步兵了没？他们已经开始大规模列装“铁拳”火箭筒了！"
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
    [ 92,544,236,390,540,248,540,390,228,540,266,544,236,542, 94],
    [40049,40049,40050,606,267,218,266,267,606,40048,40049,40049,40049,40049,40049],
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
    [145,145,494,  0,494,631,608,  0,608,631,550,145,145,145,145],
    [145,145,145,145,145,145,145,145,608,145,145,145,145,145,145],
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