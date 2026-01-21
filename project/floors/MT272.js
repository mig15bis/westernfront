main.floors.MT272=
{
    "floorId": "MT272",
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
                4
            ]
        },
        {
            "type": "animate",
            "name": "explore",
            "loc": [
                0,
                4
            ]
        },
        {
            "type": "animate",
            "name": "bigexplore",
            "loc": [
                0,
                4
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
                    4
                ]
            ],
            "remove": true,
            "time": 500
        },
        "\t[轰炸机飞行员,N622]该死的，引擎正在失去动力，我们没法跟上机群！这样下去，我们会被……",
        {
            "type": "animate",
            "name": "shootair",
            "loc": [
                12,
                5
            ]
        },
        {
            "type": "animate",
            "name": "explore",
            "loc": [
                12,
                5
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
                    5
                ]
            ],
            "remove": true,
            "time": 500
        },
        "\t[德军王牌飞行员,fw190a3]就是这样，冲散他们的编队，他们的自卫火力就会稀疏很多。",
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
            "value": "12960",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "operator": "-=",
            "value": "51840"
        },
        {
            "type": "waitAsync"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT271",
            "loc": [
                7,
                0
            ]
        },
        "7,0": {
            "floorId": "MT273",
            "loc": [
                7,
                14
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
    [542,542,372,542,542,542,140, 91, 86,  0,  0,  0,  0,  0,  0],
    [140,140, 81,140,140,140,140,378,140,140,140,140,140,140,  0],
    [541,140,543,543,140,518,140,372,140,519,372,541,541,140,  0],
    [541,140, 81,369,140,518,369,  0,140,140, 81,140,140,140,  0],
    [622,140,521,521,140,140, 81,372, 81,544,544,140,540,140,  0],
    [369,140,390,140,140,140,372,140,140,140,371,379,622,140, 81],
    [379,140, 81,140,390,543,543,543,140,536,536,140,540,140,522],
    [  0,544,  0,371,  0,  0,140,140,140,140,  0,140,140,140, 81],
    [140,140,140,140,140, 81,140,518,518,140, 81,140, 22,140,522],
    [ 21,140,140,390,  0,277,  0,518, 82,  0,371,379, 22,140, 81],
    [ 21,369,371,  0,140,140,140,518,140,371,140,140, 82,140,  0],
    [ 21,140,140,140,543,543,140,140,140, 81,140,606,606,140,  0],
    [140,140,544,140,542,542,140,  0,  0,371,140,606,606,140,  0],
    [ 21,372,544,140,140,277, 81,371,140,140,140,140,140,140,  0],
    [ 21,140,544, 81, 21, 21,140, 93, 86,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}