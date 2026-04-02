main.floors.MT353=
{
    "floorId": "MT353",
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
        "\t[系统提示]已深入德军腹地。航程不够的空军类装备将撤退。",
        {
            "type": "unloadEquip",
            "pos": 5
        },
        {
            "type": "if",
            "condition": "(!core.hasEquip('p51d'))",
            "true": [
                {
                    "type": "unloadEquip",
                    "pos": 4
                }
            ],
            "false": []
        },
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
            "value": "89880",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "operator": "-=",
            "value": "359520"
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
            "floorId": "MT352",
            "loc": [
                7,
                0
            ]
        },
        "7,0": {
            "floorId": "MT354",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,12": [
            {
                "type": "setValue",
                "name": "flag:mission48tsk2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,2": [
            {
                "type": "setValue",
                "name": "flag:mission48tsk2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,7": [
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
    [ 21, 22,519,378,140,607,140, 91,140,635,140, 21, 22,518,  0],
    [ 21,  0,378,372,140,380,140,374,140,635,140,140,140,140,372],
    [140,140,140, 81,140,  0, 81,390,140,376,140,  0,518, 22, 21],
    [372,  0,  0,  0,140,  0,140,  0,370,  0,140,372,140,140,140],
    [ 82,140,140,  0,379,  0,140,140,140,140,140,  0,  0,370,643],
    [590,  0,140,140,140,390,140,635,  0, 82,  0,  0,  0,140,643],
    [  0,608,140,370, 81,  0,140,  0,635,140,140,140,140,140,379],
    [ 82,140,140,638,140,  0,140,140,376,140,  0,390,  0,140,643],
    [636,636,140,638,140,  0,607,140,  0,370,  0,140,  0,370,643],
    [636,636,140,638,140,371,140,140,140, 81,140,140,140,140,140],
    [140,140,140,140,140,  0,  0,140,  0,  0,140,  0,371,  0,  0],
    [  0,  0,  0,390,  0,  0,  0,380,  0,  0,390,  0,140,140, 81],
    [140,376,140,140, 81,140,140,  0,140,140, 81,140,140,  0,  0],
    [341,341,140,  0,373,  0,140,  0,140,  0,373,  0,140,370,140],
    [635,635,140,637, 21,637,140, 93,140,638, 21,638,140, 21, 21]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}