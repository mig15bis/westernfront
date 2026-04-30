main.floors.MT351=
{
    "floorId": "MT351",
    "title": "德国",
    "name": "德国",
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
    "defaultGround": "ground6",
    "bgm": "europe4.mp3",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:escort",
            "value": "true"
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "value": "100000000"
        },
        {
            "type": "setValue",
            "name": "flag:mission48tsk2",
            "value": "0"
        },
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "jet.mp3"
        },
        {
            "type": "move",
            "loc": [
                7,
                13
            ],
            "time": 100,
            "steps": [
                "up:13"
            ]
        },
        "\t[盟军指挥官,hero]该死的！这些都是什么东西？没有螺旋桨还能飞的这么快！根本追不上！",
        "\t[盟军指挥官,hero]抛弃副油箱！利用好重力加速度！这是一场硬仗！",
        "\t[德军飞行员,me262]美国佬追不上我们，其他人，开始俯冲！大胆攻击！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "me109k6",
            "name": "hp",
            "value": "1500000",
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
            "value": "[6,83]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109k6",
            "name": "ammo",
            "value": "8",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "hp",
            "value": "2000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "atk",
            "value": "32000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "hp",
            "value": "2200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "atk",
            "value": "38000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "hp",
            "value": "2000000",
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
            "value": "[6,90]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "ammo",
            "value": "2",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "hp",
            "value": "2400000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "atk",
            "value": "50000",
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
            "id": "me410",
            "name": "hp",
            "value": "2400000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me410",
            "name": "atk",
            "value": "55000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me410",
            "name": "special",
            "value": "[30,64,90]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he219",
            "name": "hp",
            "value": "2800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he219",
            "name": "atk",
            "value": "60000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do335",
            "name": "hp",
            "value": "2000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do335",
            "name": "atk",
            "value": "43000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "500000",
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
            "name": "special",
            "value": "[15,40,64]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "32000"
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
        "\t[任务目标]⭐通过当前区域\n⭐至少击落8架ME262战机\n⭐友军血量不少于5000w",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第47关通关",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setTask",
            "name": "第47关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第47关通关",
                    "operator": "=",
                    "text": "抵达终点",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第47关任务2",
            "n": 1,
            "text": "至少击落8架ME262战机",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "mission48tsk2",
                    "operator": ">=",
                    "text": "已击落ME262",
                    "count": "8"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第47关任务3",
            "n": 1,
            "text": "友军血量不少于5000w",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "友军血量",
                    "operator": ">=",
                    "text": "友军血量剩余",
                    "count": "50000000"
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
            "value": "60960",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "operator": "-=",
            "value": "243840"
        },
        {
            "type": "waitAsync"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,12": [
            {
                "type": "text",
                "text": "\t[伊吹萃香]\f[specialnpc.jpg,0,280,100,200]喷气式飞机出场啦！这帮家伙都是“会飞的虎王坦克”，没啥好办法，嗑药开技能硬干！",
                "pos": [
                    100,
                    280,
                    380
                ]
            }
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT352",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "3,1": [
            {
                "type": "setValue",
                "name": "flag:mission48tsk2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "13,1": [
            {
                "type": "setValue",
                "name": "flag:mission48tsk2",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [519,519, 22, 22,140,518,140, 91,140,341,341,140,519,341,519],
    [140,140,140,376,140,518,140,370,140,371,140,140,140,376,140],
    [  0,  0,379,  0,140,  0,370,  0,390,  0,  0,140,643,  0,643],
    [140,140, 81,140,140, 81,140,140,140,140,  0,140,140,372,140],
    [636,140,  0,  0,390,  0,  0,371,  0,140,  0,140,  0,390,  0],
    [635,140,140, 81,140,140,140,140,  0,140,  0,373,  0,140,  0],
    [637,140,638,518,637,140,  0,140,379,140,  0,140,140,140,370],
    [638,140,140,373,140,140,  0,140,  0,372,  0,390,140,643,643],
    [371, 82,  0,  0,  0,371,  0,140,  0,140,140,140,140,140,140],
    [140,140,140,140, 81,140,  0,140,  0, 81,373,  0,140,635,635],
    [637,637,638,638,378,140,  0,370,  0,140,  0, 21, 82,378,635],
    [140,140,140,140,140,140,140, 86,140,140,140,140,140,140,140],
    [608, 21,  0,  0,  0,  0,  0,  0,601,  0,  0,  0,  0,636,608],
    [608, 21,  0,  0,  0,  0,  0,376,  0,  0,  0,  0,  0,636,608],
    [608, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,636,608]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}