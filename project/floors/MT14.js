main.floors.MT14=
{
    "floorId": "MT14",
    "title": "阿拉斯",
    "name": "阿拉斯",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass3",
    "bgm": "allthis.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 3  反击之刻",
        {
            "type": "text",
            "text": "\t[亚历山大]\f[alexanda.png,0,310]指挥官阁下，我们的新型坦克性能在德军之上，不过还是要注意敌人的空袭。丘吉尔首相在等着你的好消息！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[勒克莱尔]\f[leclere.png,0,310]请你们尽快攻占阿拉斯，我随后会带领法军士兵们与你会合，切断德军的联系。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[隆美尔]\f[rommel.png,0,310]英国人向我们发起了突袭，立刻集结所有火力，坚决不能让他们攻占阿拉斯！",
            "pos": [
                100,
                300,
                380
            ]
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "lightinf",
            "name": "hp",
            "value": "1200"
        },
        {
            "type": "setEnemy",
            "id": "lightinf",
            "name": "atk",
            "value": "50"
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "hp",
            "value": "1200"
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "70"
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "1100"
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "70"
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "hp",
            "value": "1000"
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "atk",
            "value": "300"
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "hp",
            "value": "500"
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "atk",
            "value": "400"
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "1000"
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "80"
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "hp",
            "value": "600"
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "100"
        },
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "hp",
            "value": "1200"
        },
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "atk",
            "value": "120"
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "hp",
            "value": "1000"
        },
        {
            "type": "setEnemy",
            "id": "pak36",
            "name": "hp",
            "value": "1000"
        },
        {
            "type": "setEnemy",
            "id": "pak36",
            "name": "atk",
            "value": "180"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "hp",
            "value": "1200"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "atk",
            "value": "70"
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "hp",
            "value": "1200"
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "atk",
            "value": "100"
        },
        {
            "type": "setEnemy",
            "id": "panzer35t",
            "name": "hp",
            "value": "1500"
        },
        {
            "type": "setEnemy",
            "id": "panzer35t",
            "name": "atk",
            "value": "150"
        },
        {
            "type": "setEnemy",
            "id": "panzer38t",
            "name": "hp",
            "value": "1500"
        },
        {
            "type": "setEnemy",
            "id": "panzer38t",
            "name": "atk",
            "value": "150"
        },
        {
            "type": "setEnemy",
            "id": "panzer3e",
            "name": "hp",
            "value": "2000"
        },
        {
            "type": "setEnemy",
            "id": "panzer3e",
            "name": "atk",
            "value": "250"
        },
        {
            "type": "setEnemy",
            "id": "panzer4c",
            "name": "hp",
            "value": "2500"
        },
        {
            "type": "setEnemy",
            "id": "panzer4c",
            "name": "atk",
            "value": "300"
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
        "\t[任务目标]⭐与隆美尔交战\n⭐通关时至少保有10个“下午茶”道具\n⭐消灭所有敌人",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第三关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第三关任务1",
            "n": 1,
            "text": "与隆美尔交战",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第三关通关",
                    "operator": "=",
                    "text": "主线boss击破",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第三关任务2",
            "n": 1,
            "text": "通关时至少保有10个“下午茶”道具",
            "info": [
                {
                    "type": "checkItem",
                    "checkItem": "tea",
                    "operator": ">=",
                    "text": "当前持有的“下午茶”",
                    "count": 10
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第三关任务3",
            "n": 1,
            "text": "消灭所有敌人",
            "info": [
                {
                    "type": "killAll",
                    "floorId": [
                        "MT14",
                        "MT15",
                        "MT16",
                        "MT17",
                        "MT18"
                    ],
                    "text": "敌军剩余"
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT15",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "7,3": [
            {
                "type": "if",
                "condition": "(flag:hard===1)",
                "true": [
                    "\t[系统提示]检测到当前为“神剧难度”，获得10瓶下午茶、500指挥点数、500黄金",
                    {
                        "type": "setValue",
                        "name": "item:tea",
                        "operator": "+=",
                        "value": "10"
                    },
                    {
                        "type": "setValue",
                        "name": "status:mana",
                        "operator": "+=",
                        "value": "500"
                    },
                    {
                        "type": "setValue",
                        "name": "status:money",
                        "operator": "+=",
                        "value": "500"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:hard===2)",
                "true": [
                    "\t[系统提示]检测到当前为“街机难度”，获得5瓶下午茶、100指挥点数、100黄金",
                    {
                        "type": "setValue",
                        "name": "item:tea",
                        "operator": "+=",
                        "value": "5"
                    },
                    {
                        "type": "setValue",
                        "name": "status:mana",
                        "operator": "+=",
                        "value": "100"
                    },
                    {
                        "type": "setValue",
                        "name": "status:money",
                        "operator": "+=",
                        "value": "100"
                    }
                ]
            }
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [141,141,141,148,148, 22,518,  0,518, 22,148,148,141,141,141],
    [141,141,141,148,148, 33,518,  0,518, 33,148,148,141,141,141],
    [141,141,141,148,148,148, 33,  0, 33,148,148,148,141,141,141],
    [141,141,141,141,148,148,148, 86,148,148,148,141,141,141,141],
    [ 28, 28,217,  0,141, 21,141,  0,141, 21,141,  0,141, 22, 22],
    [141,141,141,250, 81,203, 81,202, 81,203, 81,250,141,141,205],
    [ 28, 28,217,  0,141, 28,141,202,141, 28,141,  0,204,  0,  0],
    [141,141,141,141,141,141,141, 82,141,141,141,141,141,141,141],
    [ 21, 21,141,  0,202,  0,203,202,203, 30,  0,205,  0, 32,  0],
    [ 21, 21,141,  0,141,141,141,141,141,  0, 30,141,141, 81,207],
    [401,  0,141,204,141,  0, 81,226,141,244,141,141, 27, 27, 27],
    [ 81,141,141,  0,141, 34,141,  0, 82,  0, 28,141,265,141,141],
    [  0,  0,202,  0,265,  0,141,254,141,141, 81,141, 29, 29, 29],
    [ 82,141,141,141,141,141,141,266,141, 29,205,141,141,141, 81],
    [407, 33, 33,518,518,518,141, 93,141, 28,141, 21, 30,202,244]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}