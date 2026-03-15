main.floors.MT336=
{
    "floorId": "MT336",
    "title": "马赛",
    "name": "马赛",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground6",
    "bgm": "cao7.mp3",
    "firstArrive": [
        {
            "type": "playSound",
            "name": "跳跃"
        },
        {
            "type": "jump",
            "from": [
                7,
                1
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
                7,
                0
            ]
        },
        {
            "type": "animate",
            "name": "vehicleexplore",
            "loc": [
                7,
                0
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    0
                ]
            ],
            "remove": true,
            "time": 500
        },
        {
            "type": "playSound",
            "name": "跳跃"
        },
        {
            "type": "jump",
            "from": [
                0,
                14
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
                1,
                14
            ]
        },
        {
            "type": "animate",
            "name": "vehicleexplore",
            "loc": [
                1,
                14
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    1,
                    14
                ]
            ],
            "remove": true,
            "time": 500
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "0,14": [
            {
                "type": "setValue",
                "name": "flag:空降兵",
                "operator": "+=",
                "value": "1"
            },
            "\t[系统提示]空降兵已归队，获得100后勤",
            {
                "type": "setValue",
                "name": "status:mdef",
                "operator": "+=",
                "value": "100"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "2,14": [
            {
                "type": "setValue",
                "name": "flag:空降兵",
                "operator": "+=",
                "value": "1"
            },
            "\t[系统提示]空降兵已归队，获得2下午茶",
            {
                "type": "setValue",
                "name": "item:tea",
                "operator": "+=",
                "value": "2"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,1": [
            {
                "type": "setValue",
                "name": "flag:空降兵",
                "operator": "+=",
                "value": "1"
            },
            "\t[系统提示]空降兵已归队，获得100黄金",
            {
                "type": "setValue",
                "name": "status:money",
                "operator": "+=",
                "value": "100"
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "14,7": {
            "floorId": "MT335",
            "loc": [
                0,
                7
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
    [635,635,635,667,270,10015,10015,389,10015,248,638,664,643,664,637],
    [10015,10015,10015,10015, 82,10015,  0,550,10015,638,  0,10015,228,10015,637],
    [275, 81,  0,  0,265,  0,580,10015,10015, 82,10015,10015, 81,10015, 82],
    [638,10015, 11,10015,10015,10015,663,10015,636, 81,607,  0,227,643,643],
    [638,10015,  0,390,215,  0,  0, 11,636,10015,406,10015,10015,10015,10015],
    [275, 81,  0,  0,10015,370,10015,10015,10015,10015,643,250,  0,250,636],
    [10015,10015,10015,265,10015,  0,  0,  0,632,  0,643,10015, 11,10015,10015],
    [635,635,10015,  0,10015, 82,10015,10015, 81,10015,10015,10015,275,  0, 94],
    [643,643,10015,373, 11,  0,  0,  0,  0,632,  0,  0,  0,10015,10015],
    [636,636,10015,607,10015,10015,10015,275,10015,10015,10015,10015, 81,10015,250],
    [270,10015,10015,265,10015,  0,  0,  0,  0,  0,275,  0,  0, 11,580],
    [  0,10015,  0,  0,10015, 81,10015,10015,370,10015,10015,10015,10015,10015,250],
    [  0, 81,  0,  0,227,  0,590,10015,266,10015,  0,275,406,235,  0],
    [10015, 11,10015,10015,  0,218,590,10015,637,10015, 81,10015, 82,10015,10015],
    [550,632,550,10015,10015,389,10015,10015,637,10015,270,218,390,341,341]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}