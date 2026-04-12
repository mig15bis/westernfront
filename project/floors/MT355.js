main.floors.MT355=
{
    "floorId": "MT355",
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
    "defaultGround": "ground6",
    "bgm": "europe4.mp3",
    "firstArrive": [
        "\t[系统提示]防空塔几乎无法被摧毁！注意绕行！",
        {
            "type": "comment",
            "text": "me109k, 30000atk;fw190a3, 32000atk;fw190f8, 35000atk;me410, 55000atk;he219, 60000atk;me262, 70000atk"
        },
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
            "value": "78600",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "operator": "-=",
            "value": "314400"
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
                "type": "setValue",
                "name": "flag:第47关通关",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:铝箔条",
                "value": "0"
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
                "floorId": "MT356",
                "loc": [
                    -1,
                    -1
                ]
            }
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT354",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "4,2": [
            {
                "type": "setValue",
                "name": "flag:mission48tsk2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,2": [
            {
                "type": "setValue",
                "name": "flag:mission48tsk2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,13": [
            {
                "type": "setValue",
                "name": "flag:mission48tsk2",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [635,635,140,518,140,341,140, 89,140,341,140, 21, 21, 22, 22],
    [637,637,140,370,140,341,140,390,140,341,140,140,140,140, 81],
    [380,140,140,  0,376,341,140,374,140,341,376,  0,140,  0,378],
    [  0,378, 82,  0,140,140,140,390,140,140,140,  0,140,  0,  0],
    [140,140,140,  0,140, 21,370,608,370, 21,140,  0,140,  0,  0],
    [518,  0,140,390,140, 82,140,140,140, 82,140,390,140,140,371],
    [518,370, 81,  0,140,  0,607,  0,607,  0,140,  0,  0,  0,  0],
    [518,  0,140,  0,372,  0,  0,745,  0,  0,372,  0,140,140,372],
    [140,140,140,  0,140,  0,607,  0,607,  0,140,371,140,643,643],
    [  0,  0,390,  0,140, 81,140,140,140, 81,140,  0,140,  0,  0],
    [372,140,140,  0,140, 21,370,  0,370, 21,140,  0,140,643,643],
    [518,637,140,  0,140,140,140,  0,140,140,140,380,140,140,372],
    [638,518, 81,  0,  0,  0,140,  0,140,  0,  0,  0,  0,  0,  0],
    [140,140,140,140,140, 82,140,  0,140,376,140,140,140,140,518],
    [635,635,637,638,  0,379,140, 93,140,636,636,636,636,140,518]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}