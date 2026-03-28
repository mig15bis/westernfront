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
    "bgm": "europe3.mp3",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:escort",
            "value": "true"
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "value": "10000000"
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
            "id": "flak88",
            "name": "hp",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "special",
            "value": "[40,51,55,59]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "25000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "hp",
            "value": "45000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "atk",
            "value": "4000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "special",
            "value": "[6,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "hp",
            "value": "60000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "atk",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "special",
            "value": "[28,30,55]",
            "norefresh": true
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
        "\t[任务目标]⭐通过当前区域\n⭐至少击落8架ME262战机\n⭐友军血量不少于20%",
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,12": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]喷气式飞机出场啦！这帮家伙都是“会飞的虎王坦克”，没啥好办法，嗑药开技能硬干！"
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
        ],
        "9,1": [
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
    [140,140,140,376,140,518,140,370,140,376,140,140,140,376,140],
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