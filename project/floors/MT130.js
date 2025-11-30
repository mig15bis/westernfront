main.floors.MT130=
{
    "floorId": "MT130",
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
    "bgm": "desert4.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 20 十字军行动",
        {
            "type": "text",
            "text": "\t[奥金莱克]\f[auchinleck.png,0,310]十字军行动已经开始，各部队出发，按预定作战计划行动。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[隆美尔]\f[rommel.png,0,310]我已经布下了严密的防御阻击英军，主力部队尽快拿下托布鲁克，我们没剩下多少燃料了。",
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
            "id": "commandos",
            "name": "hp",
            "value": "40000"
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "1500"
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "hp",
            "value": "32000"
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "atk",
            "value": "8000"
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "hp",
            "value": "32000"
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "atk",
            "value": "6000"
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "36000"
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "2000"
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "30000"
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "2000"
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "hp",
            "value": "30000"
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "2200"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "hp",
            "value": "13000"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "atk",
            "value": "2400"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "hp",
            "value": "10000"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "atk",
            "value": "8000"
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "hp",
            "value": "15000"
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "atk",
            "value": "2400"
        },
        {
            "type": "setEnemy",
            "id": "panzer35t",
            "name": "hp",
            "value": "12000"
        },
        {
            "type": "setEnemy",
            "id": "panzer35t",
            "name": "atk",
            "value": "7000"
        },
        {
            "type": "setEnemy",
            "id": "panzer38t",
            "name": "hp",
            "value": "12000"
        },
        {
            "type": "setEnemy",
            "id": "panzer38t",
            "name": "atk",
            "value": "8000"
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "hp",
            "value": "8000"
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "atk",
            "value": "10000"
        },
        {
            "type": "setEnemy",
            "id": "panzer4c",
            "name": "hp",
            "value": "12000"
        },
        {
            "type": "setEnemy",
            "id": "panzer4c",
            "name": "atk",
            "value": "12000"
        },
        {
            "type": "setEnemy",
            "id": "panzer4e",
            "name": "hp",
            "value": "15000"
        },
        {
            "type": "setEnemy",
            "id": "panzer4e",
            "name": "atk",
            "value": "12000"
        },
        {
            "type": "setEnemy",
            "id": "stug3a",
            "name": "hp",
            "value": "7000"
        },
        {
            "type": "setEnemy",
            "id": "stug3a",
            "name": "atk",
            "value": "15000"
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "6000"
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "12000"
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "hp",
            "value": "3000"
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "atk",
            "value": "16000"
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "special",
            "value": "[15,55]"
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "zone",
            "value": "6000"
        },
        "\t[系统提示]敌人战力重置完成",
        "\t[系统提示]即将进入存档界面",
        {
            "type": "callSave"
        },
        {
            "type": "setValue",
            "name": "flag:第20关通关",
            "value": "0"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[任务目标]⭐通过当前区域\n⭐摧毁所有敌方坦克\n⭐消灭所有敌人",
        {
            "type": "callBook"
        },
        {
            "type": "setTask",
            "name": "第20关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第20关通关",
                    "operator": "=",
                    "text": "通过当前区域",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第20关任务2",
            "n": 3,
            "text": "摧毁所有敌方坦克",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "轻坦",
                    "floorId": [
                        "MT130",
                        "MT131",
                        "MT132",
                        "MT133",
                        "MT134"
                    ],
                    "operator": "<=",
                    "text": "剩余的轻型坦克",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "中坦",
                    "floorId": [
                        "MT130",
                        "MT131",
                        "MT132",
                        "MT133",
                        "MT134"
                    ],
                    "operator": "<=",
                    "text": "剩余的中型坦克",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "坦歼",
                    "floorId": [
                        "MT130",
                        "MT131",
                        "MT132",
                        "MT133",
                        "MT134"
                    ],
                    "operator": "<=",
                    "text": "剩余的坦克歼击车",
                    "count": 0
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第20关任务3",
            "n": 1,
            "text": "消灭所有敌人",
            "info": [
                {
                    "type": "killAll",
                    "floorId": [
                        "MT130",
                        "MT131",
                        "MT132",
                        "MT133",
                        "MT134"
                    ],
                    "text": "敌军残余"
                }
            ]
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人在战斗后期会因燃料短缺导致装甲部队和摩托化部队的战力大幅降低。建议尽快向后面的地图推进。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,7": {
            "floorId": "MT131",
            "loc": [
                14,
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
    [ 21,588,60028,533,150,580,60034, 22,60034,580,150,518,518,518,250],
    [530, 21,60036,533,150,  0,244,  0,244,  0,150,150,150,150, 81],
    [254,  0,150,203,150,150,150, 82,150,150,150,204,533,533,530],
    [ 81,150,150,  0,534,  0, 11,  0,204,  0,60032, 81,150,150,150],
    [532,254, 11,250,150,150,150,254,150,534,  0,254, 11,534,534],
    [532,60028,  0,  0,220,  0,150,533,150, 11,150,150,150,150,150],
    [150,60036, 81,60026,150,203,150,533,150,  0,203,150,570,518,570],
    [ 92, 11,402,588,150,  0,150,150,150,150,534, 86,  0,  0,  0],
    [150,150, 81,60026,150,534, 11,401,  0, 11,203,150,570,518,570],
    [518,401,  0,  0,250,150,150,150,  0,150,  0,150,150,150,150],
    [518,150, 81,60027,521,521,521,150,203,150,534,  0,203,  0,  0],
    [150,408, 11,60035,150,150,204, 81,  0,150,150,150,150,150, 81],
    [  0,  0,150,531,250,  0,  0,60027,  0,  0,250,531,60032,531,403],
    [533,533,150,533,150,60032, 11,60035, 11,60032,150,533,60027,531,60026],
    [530,530,150,534,150,532,532,250,532,532,150,534,60035,534,534]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}