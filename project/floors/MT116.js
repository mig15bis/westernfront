main.floors.MT116=
{
    "floorId": "MT116",
    "title": "马耳他",
    "name": "马耳他",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10007",
    "bgm": "bgm5.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 18 马耳他之战",
        "\t[盟军指挥官,hero]各位战士们，在这场战斗中，请妥善利用身边的任何掩体，一击脱离，保护好自己。",
        "\t[盟军指挥官,hero]与以往不同，我们正在背水一战，这一次无法承受太多牺牲了。",
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
            "id": "italyinf1",
            "name": "hp",
            "value": "23000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf1",
            "name": "atk",
            "value": "800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "hp",
            "value": "23000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "atk",
            "value": "900",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "hp",
            "value": "13000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "atk",
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "hp",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "atk",
            "value": "1500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "hp",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "atk",
            "value": "900",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "hp",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "atk",
            "value": "1100",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf7",
            "name": "hp",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf7",
            "name": "atk",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "hp",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "atk",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "cr42",
            "name": "hp",
            "value": "9000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "cr42",
            "name": "atk",
            "value": "1500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "g50",
            "name": "hp",
            "value": "11000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "g50",
            "name": "atk",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "hp",
            "value": "6500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "atk",
            "value": "500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "bom",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "hp",
            "value": "13000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "atk",
            "value": "300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "bom",
            "value": "2500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "special",
            "value": "[28]"
        },
        "\t[系统提示]敌人战力重置完成",
        "\t[系统提示]即将进入存档界面",
        {
            "type": "callSave"
        },
        {
            "type": "setValue",
            "name": "flag:第18关通关",
            "value": "0"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[任务目标]⭐通过当前区域\n⭐消灭所有步兵\n⭐击落所有中型轰炸机",
        {
            "type": "callBook"
        },
        {
            "type": "setTask",
            "name": "第18关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第18关通关",
                    "operator": "=",
                    "text": "通过当前区域",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第18关任务2",
            "n": 1,
            "text": "消灭所有步兵",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "步兵",
                    "floorId": [
                        "MT116",
                        "MT117",
                        "MT118",
                        "MT119",
                        "MT120"
                    ],
                    "operator": "<=",
                    "text": "剩余的步兵",
                    "count": 0
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第18关任务3",
            "n": 1,
            "text": "击落所有中型轰炸机",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "中型轰炸机",
                    "floorId": [
                        "MT116",
                        "MT117",
                        "MT118",
                        "MT119",
                        "MT120"
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
        "9,13": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]“抵抗运动”对连击属性或血厚攻低的敌人有奇效，本关的大多数敌人明显属于后者，在指挥点充足的时候可以开几个。"
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT117",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "7,12": [
            {
                "type": "if",
                "condition": "(flag:hard===1)",
                "true": [
                    "\t[系统提示]检测到当前为“神剧难度”，获得30瓶下午茶、500指挥点数、2000血量和血限",
                    {
                        "type": "setValue",
                        "name": "item:tea",
                        "operator": "+=",
                        "value": "30"
                    },
                    {
                        "type": "setValue",
                        "name": "status:mana",
                        "operator": "+=",
                        "value": "500"
                    },
                    {
                        "type": "setValue",
                        "name": "status:hpmax",
                        "operator": "+=",
                        "value": "2000"
                    },
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "operator": "+=",
                        "value": "2000"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:hard===2)",
                "true": [
                    "\t[系统提示]检测到当前为“街机难度”，获得1000血量和血限、10瓶下午茶",
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
                    },
                    {
                        "type": "setValue",
                        "name": "item:tea",
                        "operator": "+=",
                        "value": "10"
                    }
                ]
            }
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,80058,518,520,80058, 91,80058,  0,576,518,568,568,588],
    [364,80058,  0,361, 81,80058,80058,364,80058,80058, 82,80058,80058,80058,80058],
    [533,533,80058,80058,  0,361,  0, 81,  0,361,  0,80058,530,530,530],
    [534,534,80058,  0,527,80058,362,80058,531,80058,361,80058,  0,80058,567],
    [80058,80058,  0,361,80058,567,  0,528,80058,  0,  0, 81,381,80058, 81],
    [ 21,80058,567,  0,362,  0,80058,80058,80058,80058,362,80058,80058,80058, 22],
    [ 21,363, 81,80058,80058,361,80058,  0,531,  0,  0, 81,381,80058, 81],
    [ 21,80058,  0,531,80058,  0,362,361,80058,80058,361,80058,  0,80058,567],
    [80058,80058,80058,362,  0,80058,80058,  0,  0,  0,  0,80058,530,530,530],
    [533,  0,576,  0,80058, 21,80058,80058,80058, 81,80058,80058,80058,80058,80058],
    [530,  0,80058,  0,80058,361,567,80058,  0,362,  0,80058,532,532,532],
    [80058,80058,80058,  0,362,  0,  0,  0,  0,80058,  0,80058,80058,361,80058],
    [567,361, 81,  0,  0,80058,80058, 86,80058,80058,  0, 81,576,  0,567],
    [ 21, 21,80058,80058,361,80058,518,  0,518,601,518,80058,80058,361,80058],
    [ 21, 21,80058,534,534,80058,518,  0,518,80058,518,80058,533,533,533]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,80058,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "area": "陆地"
}