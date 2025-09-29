main.floors.MT344=
{
    "floorId": "MT344",
    "title": "法国",
    "name": "法国",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "7days4.mp3",
    "firstArrive": [
        "\t[盟军指挥官,hero]敌导弹来袭！注意隐蔽！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]本关开始出现新的敌人类型：导弹（空军大类）",
        "\t[系统提示]每一种导弹都有自己的特性以及特殊的应对方式，需要玩家根据不同导弹的类型做出相应的处理。并且，如果没有特殊要求，清怪时无需清导弹，因为它们根本就没有金币经验（除非你带了特殊装备，无中生钱）。初次遭遇新型导弹时，系统会及时给予提示，之后就需要玩家自己分辨。",
        "\t[系统提示]新敌人：V1巡航导弹。如果玩家没能在指定回合数之内清空其血条，则视为“拦截失败”，会受到等同于其雷击值的高额伤害。但即便是及时击落了V1导弹，它仍会造成1/5雷击值的伤害——这个伤害数值是模拟负责拦截导弹的战斗机受到的爆炸冲击波的波及。",
        "\t[系统提示]本关任务是拦截一定数量的导弹，这要求玩家与导弹战斗并且在特定回合数之内将其击落。如果攻击力不够，那就先绕过去，等攻击力够了再回来清掉！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "0,6": [
            "\f[v1.jpg,170,50]V1导弹是世界上最早出现并在战争中使用的导弹，用于袭击英国、荷兰和比利时。采用特制滑轨发射架发射，依靠弹上的控制系统导向预定弹道作水平飞行，而后向目标俯冲。V1的飞行速度每小时550~600千米，飞行高度2000米，射程为370千米，战斗部装药800千克。整场二战期间，德国共计制造了2到3万枚V1导弹，多数被用于轰炸平民区，大约造成了46000人伤亡，丘吉尔称其为“嗡嗡炸弹”。但事实上，除了给拦截导弹的飞行员和高炮手造成困扰以外，几乎没有什么军事意义，反倒是浪费了大量宝贵资源。"
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "MT343",
            "loc": [
                14,
                7
            ]
        },
        "14,2": {
            "floorId": "MT345",
            "loc": [
                0,
                2
            ]
        },
        "14,12": {
            "floorId": "MT345",
            "loc": [
                0,
                12
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,11": [
            {
                "type": "setValue",
                "name": "flag:door_MT344_7_12",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT344_7_12===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            12
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT344_7_12",
                        "value": "0"
                    }
                ]
            }
        ],
        "6,13": [
            {
                "type": "setValue",
                "name": "flag:door_MT344_7_12",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT344_7_12===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            12
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT344_7_12",
                        "value": "0"
                    }
                ]
            }
        ],
        "8,11": [
            {
                "type": "setValue",
                "name": "flag:door_MT344_9_12",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT344_9_12===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            12
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT344_9_12",
                        "value": "0"
                    }
                ]
            }
        ],
        "8,13": [
            {
                "type": "setValue",
                "name": "flag:door_MT344_9_12",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT344_9_12===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            12
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT344_9_12",
                        "value": "0"
                    }
                ]
            }
        ],
        "10,11": [
            {
                "type": "setValue",
                "name": "flag:door_MT344_12_12",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT344_12_12===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            12
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT344_12_12",
                        "value": "0"
                    }
                ]
            }
        ],
        "11,11": [
            {
                "type": "setValue",
                "name": "flag:door_MT344_12_12",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT344_12_12===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            12
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT344_12_12",
                        "value": "0"
                    }
                ]
            }
        ],
        "10,13": [
            {
                "type": "setValue",
                "name": "flag:door_MT344_12_12",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT344_12_12===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            12
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT344_12_12",
                        "value": "0"
                    }
                ]
            }
        ],
        "11,13": [
            {
                "type": "setValue",
                "name": "flag:door_MT344_12_12",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:door_MT344_12_12===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            12
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT344_12_12",
                        "value": "0"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,12": {
            "1": null
        },
        "9,12": {
            "1": null
        },
        "12,12": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0, 22,  0,143,638,143,638,143,643,643,  0,266,  0,250,637],
    [590,519,590,143,638,143,638,143, 81,143,143,143, 82,143,143],
    [  0,668,  0,143,638,143,638,143,265,143,390,250,275,250, 94],
    [143, 82,143,143,370,275,370,143,265,143,143,143,668,143,143],
    [643,390,  0,637,143, 81,143,643, 81,607,275,  0,275,643,643],
    [  0,143,218,643,143,218,143,275,143,227,143,143,143,143,143],
    [129,143,143, 81,143, 81,143,  0,143,  0,632,  0,  0,637,637],
    [ 92,  0,643,632,  0,  0,390,637,143,143,143,143, 81,143,143],
    [143,143,143, 81,143,143,143, 81,143,248,143,  0,235,  0,143],
    [635,635,663,632,275,637,143,  0,370,608,143,636,636,636,143],
    [143,143,143,143, 81,143,143,143,143,143,143,143,143,143,143],
    [643,643,663,  0,632,143,250,143,373,143,228,228,143, 22,218],
    [ 82,143,143,143,607, 82,643, 85,643, 85,636,643, 85,270, 94],
    [235,  0,635,143,  0,143,250,143,373,143,228,228,143, 22,218],
    [  0,218,635,143,389,143,143,143,143,143,143,143,143,143,143]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}