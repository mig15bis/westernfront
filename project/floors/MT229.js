main.floors.MT229=
{
    "floorId": "MT229",
    "title": "马雷特防线",
    "name": "马雷特防线",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "desert3.mp3",
    "firstArrive": [
        {
            "type": "choices",
            "text": "\t[突发事件]意大利部队向你发出了投降请求。是否同意他们的投降？",
            "choices": [
                {
                    "text": "接受投降",
                    "action": [
                        {
                            "type": "setEnemy",
                            "id": "italyinf2",
                            "name": "special",
                            "value": "[61]",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf3",
                            "name": "special",
                            "value": "[61]",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf4",
                            "name": "special",
                            "value": "[61]",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf5",
                            "name": "special",
                            "value": "[61]",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf6",
                            "name": "special",
                            "value": "[61]",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "l640",
                            "name": "special",
                            "value": "[61]",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "m1340",
                            "name": "special",
                            "value": "[61]",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "da90",
                            "name": "special",
                            "value": "[61]",
                            "norefresh": true
                        }
                    ]
                },
                {
                    "text": "不接受投降",
                    "action": [
                        {
                            "type": "playSound",
                            "name": "xinxinmagic.mp3"
                        },
                        "\t[系统提示]意军对你不接受投降请求的行为感到不满，战斗力提升了！",
                        {
                            "type": "setEnemy",
                            "id": "italyinf2",
                            "name": "hp",
                            "value": "220000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf2",
                            "name": "atk",
                            "value": "2200",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf3",
                            "name": "hp",
                            "value": "200000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf3",
                            "name": "atk",
                            "value": "2400",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf4",
                            "name": "hp",
                            "value": "160000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf4",
                            "name": "atk",
                            "value": "10000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf5",
                            "name": "hp",
                            "value": "160000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf5",
                            "name": "atk",
                            "value": "2600",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf6",
                            "name": "hp",
                            "value": "140000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf6",
                            "name": "atk",
                            "value": "2900",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "l640",
                            "name": "hp",
                            "value": "90000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "l640",
                            "name": "atk",
                            "value": "5500",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "m1340",
                            "name": "hp",
                            "value": "170000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "m1340",
                            "name": "atk",
                            "value": "18000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "p2640",
                            "name": "hp",
                            "value": "200000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "p2640",
                            "name": "atk",
                            "value": "30000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "da90",
                            "name": "hp",
                            "value": "35000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "da90",
                            "name": "atk",
                            "value": "35000",
                            "norefresh": true
                        }
                    ]
                },
                {
                    "text": "不接受投降，并当着使者的面制作一份菠萝披萨",
                    "action": [
                        {
                            "type": "playSound",
                            "name": "xinxinmagic.mp3"
                        },
                        "\t[系统提示]意军对你的挑衅行为感到十分愤怒，战斗力暴涨！",
                        {
                            "type": "setEnemy",
                            "id": "italyinf2",
                            "name": "hp",
                            "value": "400000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf2",
                            "name": "atk",
                            "value": "3000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf3",
                            "name": "hp",
                            "value": "380000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf3",
                            "name": "atk",
                            "value": "4200",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf4",
                            "name": "hp",
                            "value": "320000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf4",
                            "name": "atk",
                            "value": "17000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf5",
                            "name": "hp",
                            "value": "320000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf5",
                            "name": "atk",
                            "value": "4300",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf6",
                            "name": "hp",
                            "value": "300000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf6",
                            "name": "atk",
                            "value": "4500",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "l640",
                            "name": "hp",
                            "value": "170000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "l640",
                            "name": "atk",
                            "value": "8500",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "m1340",
                            "name": "hp",
                            "value": "250000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "m1340",
                            "name": "atk",
                            "value": "22000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "p2640",
                            "name": "hp",
                            "value": "280000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "p2640",
                            "name": "atk",
                            "value": "38000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "da90",
                            "name": "hp",
                            "value": "55000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "da90",
                            "name": "atk",
                            "value": "60000",
                            "norefresh": true
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,14": {
            "floorId": "MT228",
            "loc": [
                0,
                0
            ]
        },
        "7,0": {
            "floorId": "MT230",
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
    [535,590,535, 82,536,150,605, 91,605,150,536, 82,580,580,580],
    [218,605,218,150,244,150,  0,411,  0,150,244,150,  0,410,  0],
    [  0,410,  0,150,  0,150,150, 82,150,150,  0,150,150, 81,150],
    [150, 81,150,150,363,  0,538,408,538,  0,244,  0,  0,544,544],
    [544,365,  0,  0,392,150,150,150,150, 81,150,150,150,150,150],
    [150,150,150,150,150,  0,215,  0,366,  0,150,236,542,540,341],
    [390,250,236,538,150,150, 11,150,150,363,270,543,542,541,  0],
    [150, 82,150,363, 81,404,244,536,150,  0,150,392,542,540,341],
    [537,410,150,150,150,150,150, 81,150,  0,150,150,150,150,150],
    [150,409,369,538,  0,536,150,363,  0,539,408,363, 11,538,538],
    [150,150,150, 81,150,408, 81,  0,150,150,150, 81,150,150,150],
    [537,  0,364, 21,150,536,150,150, 21, 21,150,244, 11,539,150],
    [ 81,150,150,  0,150,150,518,150, 21,363,215,539,150, 81,365],
    [  0, 21,150,215, 81,244,518,150,150,150, 81,150,150,150, 22],
    [ 93,  0,150, 21,150,518,518,150,535,535,409,535,535,150, 22]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}