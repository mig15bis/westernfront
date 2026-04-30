main.floors.MT332=
{
    "floorId": "MT332",
    "title": "阿尔法海滩",
    "name": "阿尔法海滩",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "cao7.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 45 龙骑兵行动",
        "\t[盟军指挥官,hero]德军的主力部队都在诺曼底方向，法国南部果然防御薄弱。",
        "\t[盟军指挥官,hero]开始进攻，与法国游击队和伞兵部队打好配合，一举拿下法国南部控制权！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "hp",
            "value": "4500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "60000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "hp",
            "value": "3800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "atk",
            "value": "200000",
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
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "atk",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "4800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "70000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "4800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "50000",
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
            "value": "4800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "60000",
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
            "value": "4700000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "attankinf",
            "name": "atk",
            "value": "90000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109k6",
            "name": "hp",
            "value": "2500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109k6",
            "name": "atk",
            "value": "25000",
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
            "value": "1500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87g",
            "name": "atk",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87g",
            "name": "bom",
            "value": "150000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "hp",
            "value": "2800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "atk",
            "value": "28000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "bom",
            "value": "150000",
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
            "value": "1500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "atk",
            "value": "150000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4h",
            "name": "hp",
            "value": "2800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4h",
            "name": "atk",
            "value": "150000",
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
            "value": "2800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "atk",
            "value": "180000",
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
            "value": "3200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5g",
            "name": "atk",
            "value": "180000",
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
            "value": "3500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "atk",
            "value": "240000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigerking",
            "name": "hp",
            "value": "3800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigerking",
            "name": "atk",
            "value": "300000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug4",
            "name": "hp",
            "value": "2800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug4",
            "name": "atk",
            "value": "180000",
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
            "value": "3200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "jagpanzer",
            "name": "atk",
            "value": "300000",
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
            "value": "240000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "24000",
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
            "value": "2800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "wildwind",
            "name": "atk",
            "value": "20000",
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
            "value": "2500000",
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
            "value": "[15,63,84,86,87]"
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
        "\t[任务目标]⭐通过当前区域\n⭐击毁所有豹式坦克\n⭐所有空降兵归队",
        {
            "type": "callBook"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        {
            "type": "setValue",
            "name": "flag:龙骑兵行动",
            "value": "true"
        },
        "\t[系统提示]本次行动得到法国游击队的支援。本关中，“抵抗运动”的技能效果改为：我方攻击力+20%，敌方陆军攻击力随回合数增加而减少，每回合减少原攻击力的15%。当敌人攻击力不足原来的20%时，则不会继续减少",
        {
            "type": "setValue",
            "name": "flag:第45关通关",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:空降兵",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第45关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第45关通关",
                    "operator": "=",
                    "text": "抵达终点",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第45关任务2",
            "n": 2,
            "text": "消灭所有豹式坦克",
            "info": [
                {
                    "type": "checkBlock",
                    "checkBlock": "panzer5d",
                    "floorId": [
                        "MT332",
                        "MT333",
                        "MT334",
                        "MT335",
                        "MT336",
                        "MT337",
                        "MT338",
                        "MT339",
                        "MT340"
                    ],
                    "operator": "<=",
                    "text": "剩余的豹式D型",
                    "count": 0
                },
                {
                    "type": "checkBlock",
                    "checkBlock": "panzer5g",
                    "floorId": [
                        "MT332",
                        "MT333",
                        "MT334",
                        "MT335",
                        "MT336",
                        "MT337",
                        "MT338",
                        "MT339",
                        "MT340"
                    ],
                    "operator": "<=",
                    "text": "剩余的豹式G型",
                    "count": 0
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第45关任务3",
            "n": 1,
            "text": "所有空降兵归队",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "空降兵",
                    "operator": "=",
                    "text": "空降兵已归队",
                    "count": "13"
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,13": [
            {
                "type": "text",
                "text": "\t[伊吹萃香]\f[specialnpc.jpg,0,280,100,200]跟前几关相比，是不是感觉这一关的敌人少了很多？那是因为现在已经到了战争后期，敌人的有生力量已经耗的差不多了，从今往后都很少再能组织起像样的进攻或者防御了！",
                "pos": [
                    100,
                    280,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[伊吹萃香]\f[specialnpc.jpg,0,280,100,200]从现在起，虽然还会源源不断的有新机制、新敌人出现，怪物的单体伤害会增强一些，但整体战斗强度会减弱，个别在剧情上要让敌人获胜的关卡除外。加油干吧，已经能隐约看到胜利的曙光了！",
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
            "floorId": "MT333",
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
    [635,635,150,638, 81,265,150, 91,150,248, 21,150,235, 22, 22],
    [518,  0,150,638,150,  0,150, 11,150,150, 11,150, 81,150,150],
    [  0,266,150,250,150,  0,  0, 82,  0,  0,  0,150,643,632,  0],
    [150, 82,150,  0,150,150,389,150,150,150,370,150,643,150,518],
    [  0,370,  0,  0,275,  0,150, 21, 21,150,  0,632,643,150,518],
    [150,150,150,150,150, 81,150, 21, 21,150,  0,150,150,150,518],
    [637,637,150,643,643,406,  0,150,250,150,275,  0, 11,  0,  0],
    [636, 11,150,150,150,150,275,236,  0,150, 81,150,150,150,150],
    [150,632,250, 21, 21,150,  0,150,275,  0,  0,275,635,636,637],
    [150, 81,150,150,150,150, 81,150, 81,150,150,150,150,150,150],
    [631, 21,518,150,  0,  0,250,  0,250, 81,  0,406,643,638,638],
    [631,518,  0, 81,250,631,631, 86,631,631, 11,631,643,631,631],
    [145,631,631,635,635,631,608,  0,608,631,636,636,631,145,145],
    [145,145,145,145,145,631,608,  0,608,601,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145,145,145]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "浅滩"
}