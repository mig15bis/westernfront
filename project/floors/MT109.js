main.floors.MT109=
{
    "floorId": "MT109",
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
    "bgm": "desert2.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 17 沙漠之狐",
        {
            "type": "text",
            "text": "\t[奥金莱克]\f[auchinleck.png,0,310]全军出击，沿海岸线进攻，依次占领德尔纳和班加西！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[巴多格里奥]\f[badoglio.png,0,310]立刻进入防御阵地，一定要撑住，隆美尔将军的部队就在赶来的路上。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[隆美尔]\f[rommel.png,0,310]英军似乎并没有把我们放在眼里，这是绝佳的时机。他们将为自己的轻敌付出代价！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        {
            "type": "setEnemy",
            "id": "italyinf1",
            "name": "hp",
            "value": "38000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf1",
            "name": "atk",
            "value": "1200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "hp",
            "value": "38000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "atk",
            "value": "1400",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "hp",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "atk",
            "value": "1600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "hp",
            "value": "32000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "atk",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "hp",
            "value": "28000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "atk",
            "value": "1200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "hp",
            "value": "27000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "atk",
            "value": "1600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ab41",
            "name": "hp",
            "value": "16000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ab41",
            "name": "atk",
            "value": "1600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "hp",
            "value": "19000",
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
            "value": "22000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "atk",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "hp",
            "value": "38000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "1300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "special",
            "value": "[55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "hp",
            "value": "28000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "atk",
            "value": "3500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "special",
            "value": "[55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "28000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "1600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "special",
            "value": "[1,6,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "n",
            "value": "2",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "22000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "1600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "special",
            "value": "[6,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "hp",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "atk",
            "value": "6000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "special",
            "value": "[55,56]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "hp",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "atk",
            "value": "1800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "special",
            "value": "[6,55,60]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "n",
            "value": "2",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "hp",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "atk",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "special",
            "value": "[6,55,60]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "n",
            "value": "2",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer35t",
            "name": "hp",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer35t",
            "name": "atk",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer35t",
            "name": "special",
            "value": "[55,60]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer38t",
            "name": "hp",
            "value": "16000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer38t",
            "name": "atk",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer38t",
            "name": "special",
            "value": "[55,60]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3e",
            "name": "hp",
            "value": "17000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3e",
            "name": "atk",
            "value": "7000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3e",
            "name": "special",
            "value": "[55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4c",
            "name": "hp",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4c",
            "name": "atk",
            "value": "18000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4c",
            "name": "special",
            "value": "[55]"
        },
        "\t[系统提示]敌人战力重置完成",
        "\t[系统提示]即将进入存档界面",
        {
            "type": "callSave"
        },
        {
            "type": "setValue",
            "name": "flag:第17关通关",
            "value": "0"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[任务目标]⭐通过当前区域\n⭐击溃所有意军\n⭐击毁3辆“三号坦克F型”",
        {
            "type": "callBook"
        },
        {
            "type": "setTask",
            "name": "第17关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第17关通关",
                    "operator": "=",
                    "text": "通过当前区域",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第17关任务2",
            "n": 1,
            "text": "击溃所有意军",
            "info": [
                {
                    "type": "killAll",
                    "floorId": [
                        "MT109",
                        "MT110",
                        "MT111"
                    ],
                    "text": "意大利部队剩余"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第17关任务3",
            "n": 1,
            "text": "击毁3辆“三号坦克J型”",
            "info": [
                {
                    "type": "kill",
                    "kill": "panzer3f",
                    "floorId": [
                        "MT112",
                        "MT113"
                    ],
                    "operator": ">=",
                    "text": "已击毁的三号坦克J型",
                    "count": 3
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,11": [
            {
                "type": "text",
                "text": "\t[伊吹萃香]\f[specialnpc.jpg,0,280,100,200]这区在测试版的时候蓝钥匙太少，容易导致卡关，现在加了一些蓝钥匙，少了一些蓝门以降低难度。",
                "pos": [
                    100,
                    280,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[伊吹萃香]\f[specialnpc.jpg,0,280,100,200]还有，珍惜现在面前这群低伤害的意军吧，马上你就要面对北非战场中最可怕的敌人了。",
                "pos": [
                    100,
                    280,
                    380
                ]
            }
        ]
    },
    "changeFloor": {
        "3,0": {
            "floorId": "MT110",
            "loc": [
                11,
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
    [526,80733,  0, 91,  0,80733,60034,529,145,145,154,154,155,155,155],
    [526,80741,  0,361,  0,80741,533,532,363,145,145,154,154,154,155],
    [362,150,150, 82,150,150,150,150, 81,80894,145,145,154,154,155],
    [  0,  0,224,  0,  0,150,528,150,  0,150,150,145,145,154,155],
    [150,150,80704,361,  0,364,  0,150,  0,361,361,566,145,154,154],
    [525,60028,  0,  0,80713,80705,224, 81,  0,150,150,150,145,145,154],
    [529,60036,361,80705,80721,527,  0,60026,  0, 81,362,362,530,145,154],
    [529,366,  0,  0,365,  0,527,60034,363,80734,150,150,150,145,145],
    [60034,80851, 81,150,150,150,150,  0,  0,80742,  0,150,  0,361,529],
    [531,531,  0,150, 21,362,  0,150,  0,361,  0,362,  0,80852,529],
    [150,150,150,150, 21,60027,363,150,529,150, 81,150,150,150,150],
    [530,533,534,532,150,60035, 81,150,150,150,  0,150, 21,601, 21],
    [150,150,150,405, 81,  0,362,  0,361,  0,  0, 86,  0,  0,  0],
    [528,528,80750,362,150,60026, 81,60026,150,150,363,60027, 21,  0, 21],
    [527,527,364,  0,150,533, 21,533,150,525,526,60035,150,150,150]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "浅滩"
}