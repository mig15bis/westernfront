main.floors.MT273=
{
    "floorId": "MT273",
    "title": "德国",
    "name": "德国",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "sky.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "europe6.mp3",
    "firstArrive": [
        {
            "type": "animate",
            "name": "shootair",
            "loc": [
                0,
                9
            ]
        },
        {
            "type": "animate",
            "name": "explore",
            "loc": [
                0,
                9
            ]
        },
        {
            "type": "animate",
            "name": "bigexplore",
            "loc": [
                0,
                9
            ]
        },
        {
            "type": "playSound",
            "name": "crash2.mp3"
        },
        {
            "type": "hide",
            "loc": [
                [
                    0,
                    9
                ]
            ],
            "remove": true,
            "time": 500
        },
        {
            "type": "animate",
            "name": "shootair",
            "loc": [
                12,
                12
            ]
        },
        "\t[轰炸机飞行员,N622]尾炮手！你还活着吗？我无法控制飞机尾舵了，迅速报告你那里的情况！",
        "\t[轰炸机机腹炮手,N622]我是机腹炮手……尾舵……不，整个飞机尾部都不见了，尾炮手恐怕凶多吉少。顺便，有没有医疗箱？布莱克他正在流血！",
        "\t[轰炸机飞行员,N622]……给他穿上降落伞包，然后把他推下飞机，祈祷敌人能救他一命。你也一起穿上，这架飞机已经没法继续飞了，我这就……机腹炮手！一点方向！一架109！",
        "\t[机腹球形炮塔机枪手,N622]什么？哪……啊啊啊啊啊啊啊啊啊！",
        {
            "type": "animate",
            "name": "shootair",
            "loc": [
                12,
                12
            ]
        },
        {
            "type": "animate",
            "name": "explore",
            "loc": [
                12,
                12
            ]
        },
        {
            "type": "animate",
            "name": "bigexplore",
            "loc": [
                12,
                12
            ]
        },
        {
            "type": "playSound",
            "name": "crash2.mp3"
        },
        {
            "type": "hide",
            "loc": [
                [
                    12,
                    12
                ]
            ],
            "remove": true,
            "time": 500
        },
        {
            "type": "animate",
            "name": "shootair",
            "loc": [
                4,
                0
            ]
        },
        "\t[机尾炮手,N622]机长，前面怎么回事？我感觉我们在脱离队伍……给我走开！你们这群杂种啊啊啊！（连续不断的机枪声）",
        "\t[轰炸机飞行员,N622]三个引擎起火，灭火装置没有起效。都戴好氧气面罩，我们得俯冲到低空去！还有，投弹手，把那些炸弹，还有没用的重物都扔下去，减轻重……（刺耳电流声）",
        {
            "type": "animate",
            "name": "shootair",
            "loc": [
                4,
                0
            ]
        },
        {
            "type": "animate",
            "name": "explore",
            "loc": [
                4,
                0
            ]
        },
        {
            "type": "animate",
            "name": "bigexplore",
            "loc": [
                4,
                0
            ]
        },
        {
            "type": "playSound",
            "name": "crash2.mp3"
        },
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    0
                ]
            ],
            "remove": true,
            "time": 500
        },
        "\t[盟军指挥官,hero]无论如何，我们都必须完成这次任务。不能让那些兄弟们白白牺牲……",
        {
            "type": "animate",
            "name": "wonder",
            "loc": "hero",
            "async": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "explore3",
            "loc": "hero",
            "async": true
        },
        {
            "type": "setValue",
            "name": "status:hp",
            "operator": "-=",
            "value": "17160",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "operator": "-=",
            "value": "68640"
        },
        {
            "type": "waitAsync"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,0": [
            {
                "type": "function",
                "function": "function(){\nflags.mission[38][0]=true\n}"
            },
            {
                "type": "if",
                "condition": "(flag:友军血量>=500000)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[38][1]=true\n}"
                    }
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
                "type": "changeFloor",
                "floorId": "MT274",
                "loc": [
                    -1,
                    -1
                ]
            }
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT272",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "8,14": [
            {
                "type": "setValue",
                "name": "flag:mission38tsk3fail",
                "value": "true"
            }
        ],
        "8,0": [
            {
                "type": "setValue",
                "name": "flag:mission38tsk3fail",
                "value": "true"
            }
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [519,  0,140,541,622,541,140, 89, 86,  0,  0,  0,  0,  0,  0],
    [140,521,140,541,372,541,140,379,140,140,140,140,140,140,  0],
    [371,390,140,140, 81,140,140,277,140,542,379,542,542,140,  0],
    [ 81,140,140,  0,371,  0,140,372,140,140, 81,140,140,140,  0],
    [  0,  0,379,  0,140,390,371,  0,  0,390,277,140,543,140,  0],
    [140,140,140,140,140,140,140,140, 81,140,372,378,543,140,522],
    [518,518,518,140,  0,372,  0,543,369,140,372,140,140,140, 81],
    [518,518,277, 81,390,140, 82,140,140, 81,277,521,521,140, 82],
    [140,140,140,140,  0,140,536,369,  0,  0,140,140,140,140, 81],
    [622,540,540,140,  0, 81,536,140,140,379, 81,371,  0,140,522],
    [371,140,140,140,378,140,140,140,  0,  0,140,390,544,140,  0],
    [  0,544,544,  0,  0,140,605,140, 81,140,140,140,369,140,  0],
    [140,140,140,140,371,140,605,369,  0,544,140,540,622,140,  0],
    [ 21, 21, 21,140, 81,140,140,  0,140,140,140,140,140,140,  0],
    [ 22, 21, 21,371,372,  0,140, 93, 86,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}