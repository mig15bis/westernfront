main.floors.MT210=
{
    "floorId": "MT210",
    "title": "法国",
    "name": "法国",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "sky.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "europe4.mp3",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "hp",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "atk",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "special",
            "value": "[6]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "hp",
            "value": "42000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "atk",
            "value": "3500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "special",
            "value": "[6]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "hp",
            "value": "60000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "atk",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "special",
            "value": "[30,64]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "hp",
            "value": "75000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "atk",
            "value": "9500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "special",
            "value": "[30,64]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "hp",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "atk",
            "value": "4000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "special",
            "value": "[6]"
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "special",
            "value": "[15,40,51]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "5000"
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
        "\t[任务目标]⭐掩护轰炸机通过此区域\n⭐友军剩余血量不少于50w\n⭐击落所有FW190战斗机",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第30关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第30关任务1",
            "n": 1,
            "text": "掩护轰炸机通过此区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第30关通关",
                    "operator": "=",
                    "text": "通过当前区域",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第30关任务2",
            "n": 1,
            "text": "友军剩余血量不少于50w",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "友军血量",
                    "operator": ">=",
                    "text": "友军血量剩余",
                    "count": "500000"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第30关任务3",
            "n": 2,
            "text": "击落所有FW190战斗机",
            "info": [
                {
                    "type": "checkBlock",
                    "checkBlock": "fw190a1",
                    "floorId": [
                        "MT210",
                        "MT211",
                        "MT212",
                        "MT213",
                        "MT214"
                    ],
                    "operator": "<=",
                    "text": "剩余的FW190A-1型",
                    "count": 0
                },
                {
                    "type": "checkBlock",
                    "checkBlock": "fw190a3",
                    "floorId": [
                        "MT210",
                        "MT211",
                        "MT212",
                        "MT213",
                        "MT214"
                    ],
                    "operator": "<=",
                    "text": "剩余的FW190A-4型",
                    "count": 0
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,14": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]本区域中，敌人的重型战斗机获得了“拦截”属性，效果是对你的伤害减半，但对友军的伤害改为100%。这个意思是：假如这个敌人正常会对你造成100点伤害，那么你在实际战斗中只会受到50点伤害，但友军会受到100点伤害。可见，他们对友军的威胁相当高，相当于新新魔塔2的弓箭手。考虑用技能稍微回避一下吧！提示：如果敌人的伤害为负，是不会对友军造成伤害的！"
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT211",
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
    [535, 22,537,140,539,539,140, 91,140,538,140,522,140, 21, 21],
    [535,580,537,140,368,140,140, 82,140,538,140,522,140,206,140],
    [535,277,537,140,  0,  0,368,277,368,538,140,  0,368,  0,536],
    [140, 82,140,140, 81,140,140, 81,140,140,140, 82,140,140,140],
    [  0,571,  0,  0,  0,140,  0,  0,368,  0,536,  0,  0,571,  0],
    [140,140,140, 81,140,  0,378,140,140,140,378,140,140,140,368],
    [538,537,536,206,140,571,  0,  0,368,  0,  0,140, 21, 21, 21],
    [140, 82,140,140,140, 81,140,140,140,140, 81,140,140,140,140],
    [519,521,369,  0,140,  0,378,522,140,518,206,  0,206,518,518],
    [140,140,140,  0,206,  0,140,522,140,518,140, 81,140,140,140],
    [518,518,140, 81,140,140,140,140,140,140,140,  0,539,140, 21],
    [518,  0,368,  0,  0,  0,536,535,536,  0,  0,538,  0,368,  0],
    [140, 81,140,140,206,140,140, 86,140,140,206,140,140, 81,140],
    [  0,369,  0,140,536,140,605,  0,605,140,536,140,  0,369,  0],
    [ 21, 22, 21,140,536,140,590,  0,601,140,536,140, 21, 22, 21]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}