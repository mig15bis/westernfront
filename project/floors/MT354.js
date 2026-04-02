main.floors.MT354=
{
    "floorId": "MT354",
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
            "value": "71760",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "operator": "-=",
            "value": "284640"
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
            "floorId": "MT353",
            "loc": [
                7,
                0
            ]
        },
        "7,0": {
            "floorId": "MT355",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:mission48tsk2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,11": [
            {
                "type": "setValue",
                "name": "flag:mission48tsk2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "14,13": [
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
    [580,643,580,140,518,140,  0, 91,  0,140,518,518,140,  0,638],
    [  0,378,  0,140,518,140,140,373,140,140,140,370, 81,371,638],
    [140, 82,140,140,371,140,  0,374,  0,140,  0,  0,140,  0,638],
    [390,371,  0,  0,  0,370,  0,140,  0,370,  0,  0,140,140,140],
    [518,140, 82,140,140,140,140,140,140,140,140, 81,140,637,581],
    [518,140,370,518,635,635,518,140,643,140,518,  0,140,  0,637],
    [518,140,140,140,140,140,376,140,643,140,  0,390, 81,371,  0],
    [140,140,  0,636,636,140,  0,379,643,140,518,  0,140,140,140],
    [635,140,372,140,140,140,390,140,140,140,140,370,140,  0,637],
    [635,140,  0,636,636,140,  0,374,  0,373,  0,  0, 81,380,638],
    [580,140,372,140,140,140,140,140,370,140,379,140,140,  0,637],
    [376,  0,  0,  0,  0,390,  0,  0,  0,140,  0,  0,140,140,140],
    [140,140,140,140,370,140,140, 81,140,140,140,372,140,519,519],
    [636,636,  0,140,  0,140,607,  0,607,140,  0,390,140,140,376],
    [636,636,380, 82,  0,140,607, 93,607,140,608,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}