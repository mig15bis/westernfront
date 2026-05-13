main.floors.MT271=
{
    "floorId": "MT271",
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
        "\t[护航战斗机中队队长,N573]呼叫第八航空队，我们的燃料已见底，现在必须返航。接下来的路就靠你们自己了。",
        {
            "type": "unloadEquip",
            "pos": 4
        },
        {
            "type": "unloadEquip",
            "pos": 5
        },
        {
            "type": "setValue",
            "name": "flag:nofighter",
            "value": "true"
        },
        "\t[系统提示]护航战斗机撤退，“空战王牌”失效！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]之后的战斗会非常艰难。如果实在打不过，可以考虑走旁边的安全通道直接通关。注意：一旦开启铁门，就视为使用了安全通道。",
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
            "value": "14040",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "operator": "-=",
            "value": "56160"
        },
        {
            "type": "waitAsync"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,14": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]赶快不顾一切往出口方向跑吧！宝石能力什么的都是次要的了！",
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]低难度仍然乱杀的话，那当我没说。"
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT270",
            "loc": [
                7,
                0
            ]
        },
        "7,0": {
            "floorId": "MT272",
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
    [140,540,540,540,140,605,140, 91, 86,  0,  0,  0,  0,  0,  0],
    [140,  0,379,  0,140,605,140,372,140,140,140,140,140,140,  0],
    [140,140, 81,140,140, 81,140,371, 81,378,372,140,519,140,  0],
    [536,371,  0,  0,  0,372,390,  0,140,140,372,140,543,140,  0],
    [536,140,277,140,140,140,140,378,140,518,518,371,543,140,  0],
    [140,140,  0,140,523,523,140,  0,140,369,140,140,140,140,  0],
    [542,140,  0, 81,378,140,140,  0,140,  0,372,140, 22,140,522],
    [542,140,277,140,140,  0,390,369,140,140, 81,140, 22,140, 82],
    [542, 81,541,541,140,140,140, 82,  0,369,  0,140,371,140,522],
    [371,140,140,140,140,544,543,140,  0,140,390,  0, 81,140,  0],
    [  0,  0,371,140,  0,544,544,140,369,140,140, 82,140,140,  0],
    [140,140, 81,140,277,140,140,140,  0,140,518,379,518,140,  0],
    [371,541,541,140,390, 81,  0,371,  0,140,518,518,518,140,  0],
    [ 81,140,140,140,379,140,140,  0,140,140,140,140,140,140,  0],
    [371, 21, 21, 21, 21,140,601, 93, 86,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}