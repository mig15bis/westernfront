main.floors.MT41=
{
    "floorId": "MT41",
    "title": "英吉利海峡",
    "name": "英吉利海峡",
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
    "defaultGround": "water",
    "bgm": "europe2.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 7 鹰击长空",
        "\t[地面指挥部]指挥官阁下，根据我们的计算，你们已经接近敌机群，请注意对空搜索。",
        "\t[盟军指挥官,hero]看见了，一大群德国佬，我们已经占据有利高度，随时可以攻击。",
        "\t[地面指挥部]收到，准许开火！",
        "\t[盟军指挥官,hero]收到！所有战机分组行动，红队去打掉轰炸机，蓝队随我来，支开敌人的战斗机！",
        "\t[德国战斗机飞行员,me109e4]6点钟方向！上方！发现敌机！立刻做闪避机动，重复，立刻……",
        {
            "type": "moveHero",
            "time": 100,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "animate",
            "name": "shootair",
            "loc": [
                7,
                12
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "fire",
            "loc": [
                7,
                12
            ]
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "playSound",
            "name": "crash2.mp3"
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    12
                ]
            ],
            "remove": true,
            "time": 500
        },
        {
            "type": "playSound",
            "name": "fighter2.mp3"
        },
        {
            "type": "sleep",
            "time": 2000
        },
        {
            "type": "playSound",
            "name": "dogfight.mp3"
        },
        "\t[德国战斗机队长,me109e4]所有人脱离编队，迎敌！",
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
            "id": "ju87b",
            "name": "hp",
            "value": "2500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "atk",
            "value": "70",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "hp",
            "value": "5500",
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
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "hp",
            "value": "5000",
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
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "hp",
            "value": "5300",
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
            "name": "special",
            "value": "[]"
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
        "\t[任务目标]⭐通过当前区域\n⭐击落所有战斗机\n⭐击落所有轰炸机",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第七关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第七关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第七关通关",
                    "operator": "=",
                    "text": "抵达终点",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第七关任务2",
            "n": 2,
            "text": "任务描述",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "战斗机",
                    "floorId": [
                        "MT41",
                        "MT42",
                        "MT43",
                        "MT44",
                        "MT45"
                    ],
                    "operator": "<=",
                    "text": "剩余的战斗机",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "重型战斗机",
                    "floorId": [
                        "MT41",
                        "MT42",
                        "MT43",
                        "MT44",
                        "MT45"
                    ],
                    "operator": "<=",
                    "text": "剩余的重型战斗机",
                    "count": 0
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第七关任务3",
            "n": 2,
            "text": "任务描述",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "俯冲轰炸机",
                    "floorId": [
                        "MT41",
                        "MT42",
                        "MT43",
                        "MT44",
                        "MT45"
                    ],
                    "operator": "<=",
                    "text": "剩余的俯冲轰炸机",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "中型轰炸机",
                    "floorId": [
                        "MT41",
                        "MT42",
                        "MT43",
                        "MT44",
                        "MT45"
                    ],
                    "operator": "<=",
                    "text": "剩余的中型轰炸机",
                    "count": 0
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,14": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]别问我为什么能飘在天上，问就是作者给的能力……",
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]由于本关设定的战场空域远离敌方轰炸机的投弹目标，导致所有的轰炸机都失去了相应的轰炸类暴击技能，全是负伤！把他们当成血瓶吧！"
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT42",
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
    [518,518,518,518,140,383, 81, 91, 81,383,140,518,518,518,518],
    [ 82,140,140,140,140, 22,140,566,140, 22,140,140,140,140, 82],
    [ 21, 21, 21, 21,140,527,140,525,140,527,140, 21, 21, 21, 21],
    [140,140,140,207,140,525,140,205,140,525,140,206,140,140,140],
    [206,  0,527,  0,140,140,140, 81,140,140,140,  0,527,  0,207],
    [ 81,140,140,140,140,  0,205, 82,205,  0,140,140,140,140, 81],
    [  0,205,  0,140,  0,205,  0,140,  0,205,  0,140,  0,205,  0],
    [207,140,566,140,205,140,382,140,382,140,205,140,566,140,207],
    [525,140,566, 81,  0,382,140,140,140,382,  0, 81,566,140,525],
    [207,140,205,140,140,140,140,140,140,140,140,140,205,140,207],
    [  0,205,  0,529,529,  0,140,140,140,  0,529,529,  0,205,  0],
    [ 81,140,140,140,  0,  0,206,  0,206,  0,  0,140,140,140, 81],
    [  0,140,526,140,383,140,140,205,140,140,383,140,526,140,  0],
    [525,140,526,140,528,140,567,  0,567,140,528,140,526,140,525],
    [  0,206,526,140,528,140,567,  0,567,601,528,140,526,206,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}