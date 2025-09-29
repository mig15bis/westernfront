main.floors.MT104=
{
    "floorId": "MT104",
    "title": "撒哈拉沙漠",
    "name": "撒哈拉沙漠",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "bgm7.mp3",
    "firstArrive": [
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]这种星形图块\\i[starPortal]代表支线boss战入口。支线boss通常作为三星通关达成条件之一，难度相较主线boss略低，且赢得战斗胜利可以获得比较丰厚的奖励。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,4": {
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
    "changeFloor": {
        "14,7": {
            "floorId": "MT103",
            "loc": [
                0,
                7
            ]
        },
        "0,7": {
            "floorId": "MT106",
            "loc": [
                14,
                7
            ]
        },
        "5,14": {
            "floorId": "MT105",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "4,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT104_5_10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT104_5_10===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            10
                        ]
                    }
                ]
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT104_5_10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT104_5_10===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            10
                        ]
                    }
                ]
            }
        ],
        "4,11": [
            {
                "type": "setValue",
                "name": "flag:door_MT104_5_12",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT104_5_12===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            12
                        ]
                    }
                ]
            }
        ],
        "6,11": [
            {
                "type": "setValue",
                "name": "flag:door_MT104_5_12",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT104_5_12===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            12
                        ]
                    }
                ]
            }
        ],
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:MT104item",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT104item===4)",
                "true": [
                    {
                        "type": "animate",
                        "name": "hpfull",
                        "loc": [
                            5,
                            4
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                5,
                                4
                            ]
                        ]
                    }
                ]
            }
        ],
        "4,5": [
            {
                "type": "setValue",
                "name": "flag:MT104item",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT104item===4)",
                "true": [
                    {
                        "type": "animate",
                        "name": "hpfull",
                        "loc": [
                            5,
                            4
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                5,
                                4
                            ]
                        ]
                    }
                ]
            }
        ],
        "4,3": [
            {
                "type": "setValue",
                "name": "flag:MT104item",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT104item===4)",
                "true": [
                    {
                        "type": "animate",
                        "name": "hpfull",
                        "loc": [
                            5,
                            4
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                5,
                                4
                            ]
                        ]
                    }
                ]
            }
        ],
        "6,3": [
            {
                "type": "setValue",
                "name": "flag:MT104item",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT104item===4)",
                "true": [
                    {
                        "type": "animate",
                        "name": "hpfull",
                        "loc": [
                            5,
                            4
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                5,
                                4
                            ]
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "5,10": {
            "1": null
        },
        "5,12": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [518,362,  0,150,527,150,527,150, 21, 21,150,224, 81, 21,566],
    [518,150,  0,361,  0,364,  0,361,  0, 21,150,  0,150, 21, 22],
    [150,150, 81,150,150, 82,150,150, 81,150,150, 81,150,150,150],
    [566,529, 21,150,365,  0,365,150,  0,364,  0,  0,361,  0,  0],
    [363,150,150,150,150,588,150,150,150,150, 81,150,150,150,364],
    [566,529, 21,150,365,  0,365,150,528,150,  0,150,  0,566,  0],
    [150,150, 81,150,150, 82,150,150,  0,362,  0,576, 81,150,150],
    [ 92,361,361,566,  0,363,  0,566, 81,150,150,150,  0,361, 94],
    [150,150, 81,150,150, 82,150,150,532,  0,219,150, 81,150,150],
    [  0,527,  0,150,365,405,365,150,150,  0,150,150,  0,361,527],
    [363,150,150,150,150, 85,150,150,150,362,362,362,362,150,150],
    [  0,527,  0,150,366,  0,366,150,533,  0,150,150,  0,  0,  0],
    [150, 81,150,150,150, 85,150,150,150,  0,219,150,150,150, 81],
    [  0,363,150,528,150,  0,150,534,530,150,150,150,  0,224,  0],
    [530,  0,363,528,150, 90,150,566,  0,577,361, 81,  0,150,566]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}