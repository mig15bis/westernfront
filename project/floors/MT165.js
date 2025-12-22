main.floors.MT165=
{
    "floorId": "MT165",
    "title": "利比亚",
    "name": "利比亚",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10006",
    "bgm": "hiaction4.mp3",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:dry",
            "value": "true"
        },
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 25 沙漠空战",
        "\t[盟军指挥官,hero]全体注意，前方发现敌军战斗机和高炮阵地，注意躲避。战斗机编队保护好各自的轰炸机！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "hp",
            "value": "25000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "atk",
            "value": "1600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "special",
            "value": "[6,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "hp",
            "value": "24500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "atk",
            "value": "2500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "special",
            "value": "[55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "hp",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "atk",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "special",
            "value": "[6,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "g50",
            "name": "hp",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "g50",
            "name": "atk",
            "value": "1200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c200",
            "name": "hp",
            "value": "22000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c200",
            "name": "atk",
            "value": "1400",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak37",
            "name": "hp",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak37",
            "name": "atk",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak37",
            "name": "special",
            "value": "[6,15,40,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak37",
            "name": "n",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak37",
            "name": "zone",
            "value": "1500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "special",
            "value": "[15,40,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "7500"
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
        "\t[任务目标]⭐摧毁押运车队\n⭐通关时不少于500指挥点数\n⭐通关时至少持有80个“下午茶”道具",
        {
            "type": "callBook"
        },
        {
            "type": "setTask",
            "name": "第24关任务1",
            "n": 1,
            "text": "摧毁押运车队",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "door_MT169_7_1",
                    "operator": "=",
                    "text": "车队成员已歼灭",
                    "count": "14"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第24关任务2",
            "n": 1,
            "text": "通关时至少剩余500指挥点数",
            "info": [
                {
                    "type": "checkStatus",
                    "checkStatus": "mana",
                    "operator": ">=",
                    "text": "当前指挥点",
                    "count": 500
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第24关任务3",
            "n": 1,
            "text": "通关时至少持有80个“下午茶”道具",
            "info": [
                {
                    "type": "checkItem",
                    "checkItem": "tea",
                    "operator": ">=",
                    "text": "持有的“下午茶”",
                    "count": 80
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,13": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]“防空”是一种范围光环，虽然倍率不如陷阱那么可怕，但也是优先打击对象哦！"
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT166",
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
    [530,534, 82,518,518,518,140, 91,140,  0,532,532,  0,140, 21],
    [530,532,140,578,140,140,140,369,140,577,140,140, 81,140, 21],
    [369,532,140, 81,140,243,140,  0, 81, 21,140,243,531,140, 21],
    [ 81,140,140,  0,368,531,140,578,140,570,532,140, 22, 81,578],
    [  0,  0,206,  0,140,521, 81,  0,140,368,140,140,140,140,140],
    [140,140,140, 81,140,140,  0,578,140,534,140,531,531,531,531],
    [  0,521,521,578,  0,532, 82,530,140,534,140,206,140,140,140],
    [ 81,140,140,140,140,532,140,530,140,534,140,533,533,140,530],
    [521,521,  0,  0,140,140,140,140,140,534,140,577,140,140,530],
    [140,140,140,368, 81,  0,140,243,140,368,140,533,533,140,518],
    [532,532,577,  0,140,  0,577,  0,577,  0, 81,577,140,140,518],
    [140,140,140, 81,140,140,140, 86,140,140,140,  0,570, 81,378],
    [  0,569,569,  0,140,571,571,  0,571,571,140, 81,140,140,140],
    [368,140,140,140,140,  0,  0,  0,  0,601,140,368,140,534,518],
    [ 21, 21, 21, 21,140,571,571,  0,571,571,140,  0,577,534,518]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}