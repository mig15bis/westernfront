main.floors.MT209=
{
    "floorId": "MT209",
    "title": "法国",
    "name": "法国",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
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
    "bgm": "relax.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "function",
            "async": true,
            "function": "function(){\ncore.ui.mission.mis('MISSION 30', '空中堡垒', core.doAction);\n}"
        },
        {
            "type": "setValue",
            "name": "flag:escort",
            "value": "true"
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "value": "3000000"
        },
        {
            "type": "setValue",
            "name": "item:b17",
            "operator": "+=",
            "value": "1"
        },
        {
            "type": "loadEquip",
            "id": "b17"
        },
        "\t[第97轰炸机大队,N622]这里是1号机，各机组乘员放下武器，那些是我们的护航战斗机。警报解除。",
        "\t[盟军指挥官,hero]这里是战斗1，轰炸机就在前方，大家按次序飞往轰炸机队周边进行防御，完毕。",
        {
            "type": "playSound",
            "name": "bomber.mp3"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "bomber1.mp3"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "bomber.mp3"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "bomber.mp3"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[盟军指挥官,hero]睁大眼睛，注意警戒。敌人可能会从任何方向出现。",
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[第97轰炸机大队,N622]这里是8号机，10点钟方向发现航迹云，敌人可能就在附近，大家多加留意。",
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "playBgm",
            "name": "europe4.mp3"
        },
        "\t[第97轰炸机大队,N622]Mayday! Mayday! 十二点钟方向，不明飞机接近！高速！",
        "\t[第97轰炸机大队,N622]全体机枪手立即就位！呼叫护航战斗机，12点方向，敌机高速接近！",
        "\t[盟军指挥官,hero]收到！全体战机，抛弃副油箱，迎敌！",
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "show",
            "loc": [
                [
                    6,
                    0
                ],
                [
                    7,
                    1
                ],
                [
                    9,
                    0
                ],
                [
                    10,
                    1
                ]
            ],
            "time": 0
        },
        {
            "type": "playSound",
            "name": "fighter.mp3"
        },
        {
            "type": "move",
            "loc": [
                6,
                0
            ],
            "time": 200,
            "keep": true,
            "async": true,
            "steps": [
                "down:3"
            ]
        },
        {
            "type": "move",
            "loc": [
                7,
                1
            ],
            "time": 200,
            "keep": true,
            "async": true,
            "steps": [
                "down:3"
            ]
        },
        {
            "type": "move",
            "loc": [
                9,
                0
            ],
            "time": 200,
            "keep": true,
            "async": true,
            "steps": [
                "down:3"
            ]
        },
        {
            "type": "move",
            "loc": [
                10,
                1
            ],
            "time": 200,
            "keep": true,
            "async": true,
            "steps": [
                "down:3"
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
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "changeFloor",
            "floorId": "MT210",
            "loc": [
                7,
                14
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,0": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "7,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "9,0": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "10,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        }
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
    [  0,  0,  0,  0,  0,  0,369,  0,  0,369,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,369,  0,  0,369,  0,  0,  0,  0],
    [  0,  0,573,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,573,  0],
    [  0,573,  0,573,  0,  0,  0,  0,  0,  0,  0,  0,573,  0,573],
    [  0,  0,  0,  0,622,  0,  0,  0,  0,  0,  0,622,  0,  0,  0],
    [  0,  0,  0,622,  0,622,  0,  0,  0,  0,622,  0,622,  0,  0],
    [  0,  0,622,  0,  0,  0,622,  0,  0,622,  0,  0,  0,622,  0],
    [  0,  0,  0,  0,622,  0,  0,  0,  0,  0,  0,622,  0,  0,  0],
    [  0,  0,  0,622,  0,622,  0,  0,  0,  0,622,  0,622,  0,  0],
    [  0,  0,622,  0,  0,  0,  0,  0,622,  0,  0,  0,  0,622,  0],
    [  0,  0,  0,  0,  0,  0,  0,622,  0,622,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,622,  0,  0,  0,622,  0,  0,  0,  0],
    [  0,  0,573,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,573,  0],
    [  0,573,  0,573,  0,  0,  0,  0,  0,  0,  0,  0,573,  0,573],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}