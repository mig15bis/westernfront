main.floors.MT305=
{
    "floorId": "MT305",
    "title": "英吉利海峡",
    "name": "英吉利海峡",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "hiaction4.mp3",
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
            "function": "function(){\ncore.ui.mission.mis('MISSION 41', '欺诈行动', core.doAction);\n}"
        },
        "\t[盟军指挥官,hero]已经能看到加莱海滩了。各单位，冲出云层，自由攻击。注意提防敌人的战斗机。",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "150000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "special",
            "value": "[15,40]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak37",
            "name": "hp",
            "value": "180000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak37",
            "name": "atk",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak37",
            "name": "special",
            "value": "[6,40]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak37",
            "name": "n",
            "value": "4",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "hp",
            "value": "180000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "hp",
            "value": "180000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "atk",
            "value": "18000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "special",
            "value": "[6,30]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "atk",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "special",
            "value": "[6,30,90]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "ammo",
            "value": "2"
        },
        {
            "type": "setEnemy",
            "id": "z1934",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934",
            "name": "atk",
            "value": "90000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934",
            "name": "zone",
            "value": "45000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934",
            "name": "range",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934",
            "name": "zoneSquare",
            "value": "true",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934",
            "name": "special",
            "value": "[15,40]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934a",
            "name": "hp",
            "value": "220000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934a",
            "name": "atk",
            "value": "95000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934a",
            "name": "zone",
            "value": "45000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934a",
            "name": "range",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934a",
            "name": "zoneSquare",
            "value": "true",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934a",
            "name": "special",
            "value": "[15,40]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936",
            "name": "hp",
            "value": "250000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936",
            "name": "atk",
            "value": "95000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936",
            "name": "zone",
            "value": "45000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936",
            "name": "range",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936",
            "name": "zoneSquare",
            "value": "true",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936",
            "name": "special",
            "value": "[15,40]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936a",
            "name": "hp",
            "value": "300000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936a",
            "name": "atk",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936a",
            "name": "zone",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936a",
            "name": "range",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936a",
            "name": "zoneSquare",
            "value": "true",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936a",
            "name": "special",
            "value": "[15,40]"
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
        "\t[任务目标]⭐通过当前区域\n⭐击落所有敌机\n⭐积攒物资：黄钥匙×20，蓝钥匙×8",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第41关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第41关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第41关通关",
                    "operator": "=",
                    "text": "通过当前区域",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第41关任务2",
            "n": 1,
            "text": "击落所有敌机",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "战斗机",
                    "floorId": [
                        "MT305",
                        "MT306",
                        "MT307",
                        "MT308"
                    ],
                    "operator": "<=",
                    "text": "敌军战斗机剩余",
                    "count": 0
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第41关任务3",
            "n": 2,
            "text": "积攒物资：黄钥匙×20，蓝钥匙×8",
            "info": [
                {
                    "type": "checkItem",
                    "checkItem": "yellowKey",
                    "operator": ">=",
                    "text": "当前持有黄钥匙",
                    "count": 20
                },
                {
                    "type": "checkItem",
                    "checkItem": "blueKey",
                    "operator": ">=",
                    "text": "当前持有蓝钥匙",
                    "count": 8
                }
            ]
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
            "value": "6000"
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
            "floorId": "MT306",
            "loc": [
                7,
                0
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
    [140,140,140,140,140,607,518,  0,518,607,140,140,140,140,140],
    [140,140,140,140,140,607,518,  0,518,607,140,140,140,140,140],
    [140,140,140,140,140,607,518,  0,518,607,140,140,140,140,140],
    [140,140,140,140,140,140,140, 86,140,140,140,140,140,140,140],
    [519,519,140,542,140,  0,369,  0,369,  0,542,140,518,518,519],
    [369,140,140,542,140,  0,140,140,140,140,542, 82,395,518,519],
    [  0,395,140,  0, 81,369,140, 21,140,541,140,140,140,140,140],
    [140, 81,140,394,140,140,140, 21,140,  0,541,140,544,140, 21],
    [542,371, 81,  0,606,  0,140, 21,394,369,541,140,544,140, 21],
    [140,140,140,140,140,393,140,140,140, 81,140,140,544,393, 21],
    [540,540,540,140,542,  0,371,  0,371,  0,  0, 81,544,140, 21],
    [  0,395,  0,140,140,140,140, 81,140,140,396,140,140,140,140],
    [140, 82,140,140,  0,543,543,  0,369,  0,543,  0,371,  0,606],
    [540,369,  0,140,393,140,140,372,140,369,140,140,140,140, 81],
    [540,140,396, 82,543,543,140, 93,140,543,140, 22, 22, 22,394]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
],
    "fgmap": [

],
    "area": "天空"
}