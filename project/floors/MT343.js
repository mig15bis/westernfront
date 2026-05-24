main.floors.MT343=
{
    "floorId": "MT343",
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
            "function": "function(){\ncore.ui.mission.mis('MISSION 46', '会飞的炸弹', core.doAction);\n}"
        },
        "\t[盟军指挥官,hero]开始进攻，把敌人打回他们的老家去！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "hp",
            "value": "5800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "atk",
            "value": "300000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "special",
            "value": "[15,93]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "range",
            "value": "1",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "zone",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "hp",
            "value": "1000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "atk",
            "value": "300000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "6000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "90000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "5800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "70000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "special",
            "value": "[6,87,92]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "hp",
            "value": "5000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "special",
            "value": "[6,87,93]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "attankinf",
            "name": "hp",
            "value": "5700000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "attankinf",
            "name": "atk",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109k6",
            "name": "hp",
            "value": "3500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109k6",
            "name": "atk",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109k6",
            "name": "n",
            "value": "5",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109k6",
            "name": "special",
            "value": "[6]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87g",
            "name": "hp",
            "value": "2500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87g",
            "name": "atk",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87g",
            "name": "bom",
            "value": "250000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "hp",
            "value": "4000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "atk",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "bom",
            "value": "250000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "special",
            "value": "[6,28]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "hp",
            "value": "2500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "atk",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer180",
            "name": "hp",
            "value": "1500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer180",
            "name": "atk",
            "value": "600000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer180",
            "name": "special",
            "value": "[43,72,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4h",
            "name": "hp",
            "value": "5800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4h",
            "name": "atk",
            "value": "250000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4h",
            "name": "special",
            "value": "[67,69,92]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "hp",
            "value": "7000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "atk",
            "value": "280000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "special",
            "value": "[56,60,65]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5g",
            "name": "hp",
            "value": "8000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5g",
            "name": "atk",
            "value": "280000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5g",
            "name": "special",
            "value": "[56,60,65]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "hp",
            "value": "9000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "atk",
            "value": "320000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigerking",
            "name": "hp",
            "value": "9000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigerking",
            "name": "atk",
            "value": "350000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug4",
            "name": "hp",
            "value": "6000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug4",
            "name": "atk",
            "value": "280000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug4",
            "name": "special",
            "value": "[56,59]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug4",
            "name": "zone",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "jagpanzer",
            "name": "hp",
            "value": "7500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "jagpanzer",
            "name": "atk",
            "value": "350000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "3500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "320000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "32000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak120",
            "name": "hp",
            "value": "3500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak120",
            "name": "atk",
            "value": "350000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak120",
            "name": "special",
            "value": "[40,56,59,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak120",
            "name": "zone",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "wildwind",
            "name": "hp",
            "value": "5800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "wildwind",
            "name": "atk",
            "value": "25000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "wildwind",
            "name": "special",
            "value": "[6,40,93]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "hp",
            "value": "2500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "atk",
            "value": "60000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "special",
            "value": "[6,63,84,86,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "gunbunker",
            "name": "hp",
            "value": "5000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "gunbunker",
            "name": "atk",
            "value": "600000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "gunbunker",
            "name": "special",
            "value": "[15,63,84,86,87,93]"
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
        "\t[任务目标]⭐通过当前区域\n⭐至少成功拦截4枚V1导弹\n⭐消灭所有地面部队",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第46关通关",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:成功拦截",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第46关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第46关通关",
                    "operator": "=",
                    "text": "抵达终点",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第46关任务2",
            "n": 1,
            "text": "至少成功拦截4枚V1导弹",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "成功拦截",
                    "operator": ">=",
                    "text": "已成功拦截V1导弹",
                    "count": "4"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第46关任务3",
            "n": 9,
            "text": "消灭所有地面部队",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "步兵",
                    "floorId": [
                        "MT343",
                        "MT344",
                        "MT345",
                        "MT346",
                        "MT347"
                    ],
                    "operator": "<=",
                    "text": "剩余步兵",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "轻坦",
                    "floorId": [
                        "MT343",
                        "MT344",
                        "MT345",
                        "MT346",
                        "MT347"
                    ],
                    "operator": "<=",
                    "text": "剩余轻型坦克",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "中坦",
                    "floorId": [
                        "MT343",
                        "MT344",
                        "MT345",
                        "MT346",
                        "MT347"
                    ],
                    "operator": "<=",
                    "text": "剩余中型坦克",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "重坦",
                    "floorId": [
                        "MT343",
                        "MT344",
                        "MT345",
                        "MT346",
                        "MT347"
                    ],
                    "operator": "<=",
                    "text": "剩余重型坦克",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "坦歼",
                    "floorId": [
                        "MT343",
                        "MT344",
                        "MT345",
                        "MT346",
                        "MT347"
                    ],
                    "operator": "<=",
                    "text": "剩余坦克歼击车",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "反坦克炮",
                    "floorId": [
                        "MT343",
                        "MT344",
                        "MT345",
                        "MT346",
                        "MT347"
                    ],
                    "operator": "<=",
                    "text": "剩余反坦克炮",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "榴弹炮",
                    "floorId": [
                        "MT343",
                        "MT344",
                        "MT345",
                        "MT346",
                        "MT347"
                    ],
                    "operator": "<=",
                    "text": "剩余榴弹炮",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "高射炮",
                    "floorId": [
                        "MT343",
                        "MT344",
                        "MT345",
                        "MT346",
                        "MT347"
                    ],
                    "operator": "<=",
                    "text": "剩余高射炮",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "建筑",
                    "floorId": [
                        "MT343",
                        "MT344",
                        "MT345",
                        "MT346",
                        "MT347"
                    ],
                    "operator": "<=",
                    "text": "剩余防御工事",
                    "count": 0
                }
            ]
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]当心间谍！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "14,7": {
            "floorId": "MT344",
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
    [ 21, 21, 21, 21,  0,143, 22, 22,  0,  0,143,  0, 82,228,  0],
    [143,143,143,143,632,143, 22, 21,  0,235,143,370,143,636,636],
    [518,518,265,  0,  0,143,143,143,143, 81,143,  0,143,636,636],
    [143,143,143,143,  0,  0,744,  0,  0,275, 82,  0,143,143,143],
    [518,518,265,  0,275,143,143,266,143,  0,143,  0,143, 21, 21],
    [143,143,143,143,643,643,143,519,143,143,143,663, 81, 21, 21],
    [608,608,608,143,643,643,143,389,143,390, 21,  0,143,143,143],
    [  0,  0,  0, 86,265,143,143,143,143,143,143,  0,228,  0, 94],
    [608,608,608,143,  0,632,  0,390,143,389,143, 81,143,143,143],
    [143,143,143,143, 81,143,143,143,143,  0,143,  0,275,637,637],
    [ 21, 21,  0,235,  0,  0,143, 21,143,  0,143,406,143,143,143],
    [143,143,143,143,143,632,143,275,143,632,143,  0, 81,632,143],
    [  0,228, 82,  0,  0,  0,  0,  0,744,  0,  0,143,143,  0,143],
    [635,635,143,370,143,143,143,663,143,143,  0,143,248,  0,143],
    [635,635,143,638,638,638,143,637,637,143,  0,663,  0,638,143]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}