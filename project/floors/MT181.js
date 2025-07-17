main.floors.MT181=
{
    "floorId": "MT181",
    "title": "阿拉曼",
    "name": "阿拉曼",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "bgm6.mp3",
    "firstArrive": [
        {
            "type": "choices",
            "text": "\t[突发事件]意大利部队向你发出了投降请求。是否同意他们的投降？（投降的敌人伤害均为0，但不会获得金经。拒绝投降可能反倒会激发敌人斗志）",
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
                            "value": "110000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf2",
                            "name": "atk",
                            "value": "1700",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf3",
                            "name": "hp",
                            "value": "105000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf3",
                            "name": "atk",
                            "value": "1700",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf4",
                            "name": "hp",
                            "value": "100000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf4",
                            "name": "atk",
                            "value": "5500",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf5",
                            "name": "hp",
                            "value": "95000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf5",
                            "name": "atk",
                            "value": "2000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf6",
                            "name": "hp",
                            "value": "90000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "italyinf6",
                            "name": "atk",
                            "value": "2100",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "l640",
                            "name": "hp",
                            "value": "40000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "l640",
                            "name": "atk",
                            "value": "2500",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "m1340",
                            "name": "hp",
                            "value": "35000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "m1340",
                            "name": "atk",
                            "value": "7500",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "da90",
                            "name": "hp",
                            "value": "20000",
                            "norefresh": true
                        },
                        {
                            "type": "setEnemy",
                            "id": "da90",
                            "name": "atk",
                            "value": "18000",
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
        "7,14": {
            "floorId": "MT180",
            "loc": [
                7,
                0
            ]
        },
        "0,7": {
            "floorId": "MT182",
            "loc": [
                14,
                7
            ]
        },
        "14,7": {
            "floorId": "MT183",
            "loc": [
                0,
                7
            ]
        },
        "7,0": {
            "floorId": "MT184",
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
    [533,533,534,366,532,530,150, 91,150,534,250, 11,253, 11, 11],
    [150,150,150, 81,150,150,150, 82,150, 11,150,535,150,150,250],
    [531,253, 81, 11,570,363, 11,409, 11, 81,150,150,150, 21, 21],
    [530,533,150,203,203,150,150,150,390,250,533,533,150,150,150],
    [531,532,150,570, 11,363, 21,150,150,150,150, 81,150,536,536],
    [150,150,150,150,533,150, 21,150,215,150,531,531,150,536,589],
    [589, 81, 11,150,405,150,150,150,534,150,366,150,150,150, 81],
    [ 92,150, 11,362,250,534,362,405,250,534,250,534, 81,250, 94],
    [150,150,150, 81,150,534,150,150,150, 11,150,534,150,215,150],
    [ 21, 21,150,521,150,390,150,392,150,362,150,150,150,518,518],
    [253,150,150,250,150,150,150,408, 81,534, 81,363,150,150,150],
    [ 11, 11,203,571,203, 11,150,365,150,405,150, 11, 11,150,518],
    [150,532,532,150,532,532, 82,364,150,589,150,150,203,150,518],
    [150,150,150,150,150, 81,150,362,150,532,150,530,521, 81,405],
    [518,518,518,518, 11,253,150, 93,150,532,150,150,530,150,521]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}