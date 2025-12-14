main.floors.MT21=
{
    "floorId": "MT21",
    "title": "敦刻尔克",
    "name": "敦刻尔克",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "cao4.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 4  拖延战术",
        {
            "type": "text",
            "text": "\t[蒙哥马利]\f[montgomary.png,0,310]我们的部队正在准备撤退，但这个过程必须不受打扰。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[蒙哥马利]\f[montgomary.png,0,310]指挥官阁下，请你务必牵制德军一段时间。无数鲜活的生命就掌握在你手中了。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[赫尔曼·戈林]\f[gorlin.png,0,310]飞行员们，给我狠狠的打！让元首和敌人看看我们德意志帝国空军的实力！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[古德里安]\f[guderian.png,0,310]戈林这个家伙，关键时刻还想着抢功劳，但我没工夫跟他一般见识。主力部队展开进攻，务必尽全力阻止他们的撤退计划。",
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
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightinf",
            "name": "atk",
            "value": "100",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "hp",
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "120",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "120",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "hp",
            "value": "800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "atk",
            "value": "200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "hp",
            "value": "500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "atk",
            "value": "500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "110",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "hp",
            "value": "600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "150",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "hp",
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "atk",
            "value": "170",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "hp",
            "value": "1100",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak36",
            "name": "hp",
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak36",
            "name": "atk",
            "value": "220",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak37",
            "name": "hp",
            "value": "600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak37",
            "name": "atk",
            "value": "150",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "1200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "artillery75",
            "name": "hp",
            "value": "600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "artillery75",
            "name": "atk",
            "value": "400",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "hp",
            "value": "800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "atk",
            "value": "100",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "special",
            "value": "[6]",
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
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "atk",
            "value": "100",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "special",
            "value": "[6]",
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
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer35t",
            "name": "atk",
            "value": "180",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer35t",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer38t",
            "name": "hp",
            "value": "1300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer38t",
            "name": "atk",
            "value": "180",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer38t",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3e",
            "name": "hp",
            "value": "1800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3e",
            "name": "atk",
            "value": "280",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4c",
            "name": "hp",
            "value": "1800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4c",
            "name": "atk",
            "value": "330"
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
        "\t[任务目标]⭐通过当前区域\n⭐通关时黄钥匙数量≥15\n⭐消灭所有敌人",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第四关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第四关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第四关通关",
                    "operator": "=",
                    "text": "抵达终点",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第四关任务2",
            "n": 1,
            "text": "通关时黄钥匙数量≥15",
            "info": [
                {
                    "type": "checkItem",
                    "checkItem": "yellowKey",
                    "operator": ">=",
                    "text": "当前持有的“黄钥匙”",
                    "count": 15
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第四关任务3",
            "n": 1,
            "text": "消灭所有敌人",
            "info": [
                {
                    "type": "killAll",
                    "floorId": [
                        "MT21",
                        "MT22",
                        "MT23",
                        "MT24",
                        "MT25"
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
        "14,7": {
            "floorId": "MT22",
            "loc": [
                0,
                7
            ]
        },
        "7,14": {
            "floorId": "MT23",
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
                    "\t[系统提示]检测到当前为“神剧难度”，获得10瓶下午茶、1000血限和血量、20攻击力、200指挥点数",
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
                        "value": "100"
                    },
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "20"
                    },
                    {
                        "type": "setValue",
                        "name": "status:hpmax",
                        "operator": "+=",
                        "value": "1000"
                    },
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "operator": "+=",
                        "value": "1000"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:hard===2)",
                "true": [
                    "\t[系统提示]检测到当前为“街机难度”，获得10瓶下午茶、500血限和血量、100指挥点数",
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
                        "value": "100"
                    },
                    {
                        "type": "setValue",
                        "name": "status:hpmax",
                        "operator": "+=",
                        "value": "500"
                    },
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "operator": "+=",
                        "value": "500"
                    }
                ]
            }
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [150,150,150,150,150,150,150,  0,150,150,150,150,150,150,150],
    [150,150,150,150,150,150, 21,  0, 21,150,150,150,150,150,150],
    [150,150,150,150,150, 21, 33,202, 33, 21,150,150,150,150,150],
    [ 30, 29,  0,250,150,150,150, 86,150,150,150,150, 27, 28, 21],
    [ 22, 28,250,203, 81,  0,  0,  0,  0, 28, 28,150,  0,205,  0],
    [150,150,203,150,150,207,150,150,150, 81,150,150,150, 81,150],
    [ 27,150,345,150, 32,  0,202,  0,244,  0,  0,  0,250,  0, 30],
    [ 27,150,150,150,150,202,150,202,150,150,254,150,150, 21, 94],
    [  0,518,150, 31,150,  0,202,  0,150, 29, 28, 29,150,  0, 30],
    [203,  0,150,  0,203,  0, 81,150,150,150,150,150,150,150, 81],
    [204,203,150, 81,150,150,217,  0,150, 21,347, 21,150,  0,  0],
    [ 81,150,150,206,  0,150,  0, 21,150,150,217,150,150,244,150],
    [  0,  0,226,  0,  0,150,150, 82,150,  0,243,  0,150,  0,  0],
    [518,  0,226,  0, 82, 27,150,401,150,  0,150,  0,150,150,203],
    [150,150,150,150, 27, 27,150, 93,150, 28,150,248, 81,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}