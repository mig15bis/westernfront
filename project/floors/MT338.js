main.floors.MT338=
{
    "floorId": "MT338",
    "title": "勒米",
    "name": "勒米",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "cao7.mp3",
    "firstArrive": [
        {
            "type": "playSound",
            "name": "跳跃"
        },
        {
            "type": "jump",
            "from": [
                12,
                12
            ],
            "dxy": [
                0,
                0
            ],
            "time": 50,
            "keep": true
        },
        {
            "type": "animate",
            "name": "aim",
            "loc": [
                11,
                11
            ]
        },
        {
            "type": "animate",
            "name": "shoot",
            "loc": [
                11,
                11
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    11,
                    11
                ]
            ],
            "remove": true,
            "time": 500
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "3,14": [
            {
                "type": "setValue",
                "name": "flag:空降兵",
                "operator": "+=",
                "value": "1"
            },
            "\t[系统提示]空降兵已归队，获得50攻击",
            {
                "type": "setValue",
                "name": "status:atk",
                "operator": "+=",
                "value": "50"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "12,12": [
            {
                "type": "setValue",
                "name": "flag:空降兵",
                "operator": "+=",
                "value": "1"
            },
            "\t[系统提示]空降兵已归队，获得1蓝钥匙",
            {
                "type": "setValue",
                "name": "item:blueKey",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "2,0": [
            {
                "type": "setValue",
                "name": "flag:空降兵",
                "operator": "+=",
                "value": "1"
            },
            "\t[系统提示]空降兵已归队，获得300指挥点",
            {
                "type": "setValue",
                "name": "status:mana",
                "operator": "+=",
                "value": "300"
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT337",
            "loc": [
                7,
                0
            ]
        },
        "7,0": {
            "floorId": "MT340",
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
    [341,152,550,638,638,265,152, 91,152,637,152,663,412, 82,643],
    [341,152,152,152,152, 81,152,389,152,637,152,650,664,152,643],
    [341,152,635, 21,152,  0,  0, 82,228,637,152,  0,650,152,643],
    [373,152,635,228, 81, 11,152,152,152,152,152,152,152,152,390],
    [270,152,635, 21,152,406,227,152, 21,152,643, 81,632,152,  0],
    [ 82,152,152,152,152,152, 11,152, 21,152,643,152,  0,218,  0],
    [  0,275,  0,  0,  0,  0,  0,236, 21,152, 11,152,152,152,152],
    [152,152, 81,152, 11,152,152,152,266, 81,  0,  0,275,638,638],
    [390,635,265,152,643,406,643,152,152,152,152, 81,152,152,152],
    [152,152,152,152,152, 81,152,152,  0,636,  0,  0,266,  0,  0],
    [581,580,218,265,  0,  0,250,  0,250,  0,152, 81,152,152, 82],
    [152,152,152, 11,152,152,152, 81,152,152,152,265,643,152,235],
    [636,590,152,  0,152,275,  0,  0,  0,275,152,643,550,152,235],
    [636,228, 81,  0,152,637,152,  0,152,637,152,152,152,152,632],
    [636,590,152,550,152,389,152, 93,152,389,152, 22, 22, 22,518]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}