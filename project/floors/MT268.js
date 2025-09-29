main.floors.MT268=
{
    "floorId": "MT268",
    "title": "德国",
    "name": "德国",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
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
            "type": "move",
            "loc": [
                5,
                1
            ],
            "time": 300,
            "keep": true,
            "async": true,
            "steps": [
                "up:3"
            ]
        },
        {
            "type": "move",
            "loc": [
                6,
                2
            ],
            "time": 300,
            "keep": true,
            "async": true,
            "steps": [
                "up:3"
            ]
        },
        {
            "type": "move",
            "loc": [
                8,
                2
            ],
            "time": 300,
            "keep": true,
            "async": true,
            "steps": [
                "up:3"
            ]
        },
        {
            "type": "move",
            "loc": [
                9,
                1
            ],
            "time": 300,
            "keep": true,
            "async": true,
            "steps": [
                "up:3"
            ]
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[护航战斗机中队队长,N573]德国佬跑了，不要追击，我们的任务是保护轰炸机。",
        "\t[轰炸机飞行员,N622]他们完全有能力继续攻击，为什么这就撤退了？",
        "\t[盟军指挥官,hero]不清楚。总之继续前进吧。",
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "animate",
            "name": "flak",
            "loc": [
                3,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "flak",
            "loc": [
                9,
                2
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "flak",
            "loc": [
                11,
                4
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "flak",
            "loc": [
                5,
                10
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "flak",
            "loc": [
                2,
                9
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "flak",
            "loc": [
                13,
                12
            ],
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                7,
                7
            ]
        },
        "\t[护航战斗机中队队长,N573]高射炮！躲避！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]即将进入“小游戏”环节。",
        "\t[系统提示]游戏期间，画面将持续抖动，场上会持续出现高射炮爆炸位置提示，玩家需要及时行走躲避。1秒后，高射炮弹将在该格子上炸开，并对来不及躲避的玩家造成10%血限的生命值伤害。友军会同时受到5w伤害。",
        "\t[系统提示]高射炮轰炸位置是随机生成的，且期间禁止存读档。当然，不想玩的玩家可以直接跳过该环节。",
        {
            "type": "choices",
            "text": "\t[要跳过小游戏吗？]",
            "choices": [
                {
                    "text": "玩nm，跳了",
                    "action": []
                },
                {
                    "text": "有意思，试试就逝世",
                    "action": []
                }
            ]
        },
        {
            "type": "sleep",
            "time": 2000
        },
        "\t[盟军指挥官,hero]终于结束了，赶快清点损失。",
        "\t[轰炸机飞行员,N622]先别清点了！强盗！12点方向！冲过来了！",
        {
            "type": "changeFloor",
            "floorId": "MT269",
            "loc": [
                7,
                14
            ],
            "direction": "up"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT267",
            "loc": [
                7,
                0
            ]
        },
        "7,0": {
            "floorId": "MT269",
            "loc": [
                7,
                14
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
    [  0,  0,  0,  0,  0,  0,  0, 91,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,369,  0,  0,  0,369,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,369,  0,369,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,622,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,622,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,622,  0,  0,  0,  0,  0,  0,  0,  0,622,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,622,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,622,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0, 93,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}