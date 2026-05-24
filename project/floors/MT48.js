main.floors.MT48=
{
    "floorId": "MT48",
    "title": "英国南部",
    "name": "英国南部",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass3",
    "bgm": "europe3.mp3",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:escort",
            "value": "true"
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "value": "164537"
        },
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "function",
            "async": true,
            "function": "function(){\ncore.ui.mission.mis('MISSION 8', '燃烧的天空', core.doAction);\n}"
        },
        "\t[地面指挥部]红色长机，收到请回答！",
        "\t[盟军指挥官,hero]收到，请讲。",
        "\t[地面指挥部]赶快干掉这附近所有的轰炸机，不然等他们飞到机场，我们都得玩完！",
        "\t[盟军指挥官,hero]明白！",
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "hp",
            "value": "2500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "atk",
            "value": "300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "hp",
            "value": "4000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "atk",
            "value": "400",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "hp",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "atk",
            "value": "50",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "bom",
            "value": "500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "special",
            "value": "[28]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "hp",
            "value": "4500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "atk",
            "value": "50",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "bom",
            "value": "500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "special",
            "value": "[28]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "hp",
            "value": "4800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "atk",
            "value": "50",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "bom",
            "value": "800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "special",
            "value": "[28]"
        },
        "\t[系统提示]敌人战力重置完成",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]即将进入存档界面",
        {
            "type": "callSave"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        {
            "type": "setValue",
            "name": "flag:第八关通关",
            "value": "0"
        },
        "\t[任务目标]⭐通过当前区域\n⭐击落所有轰炸机\n⭐友军剩余血量大于20000",
        {
            "type": "callBook"
        },
        {
            "type": "setTask",
            "name": "第八关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第八关通关",
                    "operator": "=",
                    "text": "抵达终点",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第八关任务2",
            "n": 1,
            "text": "击落所有轰炸机",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "中型轰炸机",
                    "floorId": [
                        "MT48",
                        "MT49",
                        "MT50",
                        "MT51",
                        "MT52"
                    ],
                    "operator": "<=",
                    "text": "剩余的轰炸机",
                    "count": 0
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第八关任务3",
            "n": 1,
            "text": "友军剩余血量大于20000",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "友军血量",
                    "operator": ">=",
                    "text": "友军血量剩余",
                    "count": "20000"
                }
            ]
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]击落本张地图所有轰炸机后方可前往下一张地图"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT49",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "4,3": [
            {
                "type": "setValue",
                "name": "flag:MT48bomber",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT48bomber===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    }
                ]
            }
        ],
        "10,3": [
            {
                "type": "setValue",
                "name": "flag:MT48bomber",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT48bomber===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    }
                ]
            }
        ],
        "11,5": [
            {
                "type": "setValue",
                "name": "flag:MT48bomber",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT48bomber===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    }
                ]
            }
        ],
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:MT48bomber",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT48bomber===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    }
                ]
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:MT48bomber",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT48bomber===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    }
                ]
            }
        ],
        "14,8": [
            {
                "type": "setValue",
                "name": "flag:MT48bomber",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT48bomber===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    }
                ]
            }
        ],
        "0,9": [
            {
                "type": "setValue",
                "name": "flag:MT48bomber",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT48bomber===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    }
                ]
            }
        ],
        "11,11": [
            {
                "type": "setValue",
                "name": "flag:MT48bomber",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT48bomber===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    }
                ]
            }
        ],
        "13,12": [
            {
                "type": "setValue",
                "name": "flag:MT48bomber",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT48bomber===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    }
                ]
            }
        ],
        "10,14": [
            {
                "type": "setValue",
                "name": "flag:MT48bomber",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:MT48bomber===10)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,14": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 21,525,567,140,526,140,566,  0,566,140,526,140,567,527,528],
    [205,525,567,140,526,140,566,  0,566,140,526,140,567,527,528],
    [ 81,140,140,140,526,140,566,  0,566,140,526,140,  0,205,  0],
    [528,206,  0,140,382,140,140, 86,140,140,382,140,140, 81,140],
    [528,140,  0,  0,  0,206,  0,  0,  0,206,  0,  0,  0,528,528],
    [140,140,140,140,140,140,140,206,140,383,140,382,140,140,140],
    [518,518,518,140,566,205, 81, 21,140,  0,140,  0, 21, 21,  0],
    [ 81,140,140,525,525,  0,140, 21,140,384,140,140,140,140, 81],
    [  0,140,528,140,140,140,140,205,140,528,528,528,140,527,383],
    [382,140,528,140,525,526,140, 21,140,140,205,140,140,572, 21],
    [  0, 81,566,140,526,525, 81, 21,140,529,529,529,140,140,140],
    [206,140,  0,140,206,140,140,206,140,140,140,384,140, 21,572],
    [ 21,140,  0,528,  0,  0,528,  0,  0,528,140,  0, 81,382,527],
    [140,140,140,140,140, 81,140, 85,140,  0,140,566,140,140,206],
    [567, 81,567,529,529,205,140, 93,140,  0,383,  0,140,566,566]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}