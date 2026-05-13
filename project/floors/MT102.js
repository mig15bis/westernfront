main.floors.MT102=
{
    "floorId": "MT102",
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
    "bgm": "bgm7.mp3",
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
            "type": "setValue",
            "name": "flag:dry",
            "value": "true"
        },
        "\r[yellow]Mission 16 罗盘行动",
        {
            "type": "text",
            "text": "\t[奥金莱克]\f[auchinleck.png,0,310]虽然我们先前没能料到敌人的突袭导致丢失了大片占领地，但现在夺回来还不算晚。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[奥金莱克]\f[auchinleck.png,0,310]意大利人的战斗素质比较低，也没有多少重型武器。这里的战事必须快速解决，然后尽快去支援希腊的盟军。",
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
        "\t[系统提示]进入新章节，本章主战场位于非洲北部沙漠地区。",
        "\t[系统提示]沙漠环境恶劣，血瓶稀缺，且交战双方都将被赋予“炎热”debuff，在每回合战斗结束后，双方都将额外受到20%的回合伤害。因此，敌人伤害越高，战斗回合数越多，玩家受到的伤害将直线提升。",
        "\t[系统提示]此外，炎热debuff无法以任何形式解除。除非战场来到沙漠以外的区域，debuff将自动解除。",
        "\t[系统提示]前三章的敌人没有太多花里胡哨的特殊技能，就当是新手引导。从本章开始，逐渐出现新的技能和机制，但新技能或机制出现时，会有相应的系统提示，不用担心会被突如其来的离奇机制坑死。",
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
            "id": "cr42",
            "name": "hp",
            "value": "6500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "cr42",
            "name": "atk",
            "value": "500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "cr42",
            "name": "n",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "g50",
            "name": "hp",
            "value": "8500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "g50",
            "name": "atk",
            "value": "900",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "artillery75",
            "name": "hp",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "artillery75",
            "name": "atk",
            "value": "4000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "artillery75",
            "name": "zone",
            "value": "400",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "hp",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "atk",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ab41",
            "name": "hp",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ab41",
            "name": "atk",
            "value": "1800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ab41",
            "name": "special",
            "value": "[6,60]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ab41",
            "name": "n",
            "value": "3"
        },
        "\t[系统提示]敌人战力重置完成",
        "\t[系统提示]即将进入存档界面",
        {
            "type": "callSave"
        },
        {
            "type": "setValue",
            "name": "flag:第16关通关",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:mission16tsk2",
            "value": "0"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[任务目标]⭐通过当前区域\n⭐击败格拉齐亚尼（支线boss）\n⭐击毁所有敌方坦克（不包括支线boss战）",
        {
            "type": "callBook"
        },
        {
            "type": "setTask",
            "name": "第16关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第16关通关",
                    "operator": "=",
                    "text": "通过当前区域",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第16关任务2",
            "n": 1,
            "text": "击败格拉齐亚尼（支线boss）",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "mission16tsk2",
                    "operator": "=",
                    "text": "击败支线boss",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第16关任务3",
            "n": 2,
            "text": "击毁所有敌方坦克（不包括支线boss战）",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "轻坦",
                    "floorId": [
                        "MT102",
                        "MT103",
                        "MT104",
                        "MT106"
                    ],
                    "operator": "<=",
                    "text": "剩余的轻型坦克",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "中坦",
                    "floorId": [
                        "MT102",
                        "MT103",
                        "MT104",
                        "MT106"
                    ],
                    "operator": "<=",
                    "text": "剩余的中型坦克",
                    "count": 0
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,8": [
            "\t[系统提示]为平衡游戏性，从本区域开始做出如下改动：敌方轻型坦克血量大幅下调，并新增“机动”属性：它们被主角单向击穿时，主角先攻的次数-3。由此，主角的重装甲坦克对轻坦的有效性略微降低，而轻装甲坦克的强度得到了上调。但这并不代表重装甲坦克完全失去作用。对于穿透能力不那么突出的敌方中型坦克而言，我方的重装甲坦克仍然是致命存在。"
        ],
        "13,6": [
            {
                "type": "text",
                "text": "\t[伊吹萃香]\f[specialnpc.jpg,0,280,100,200]意大利部队的战斗力非常拉跨，这区可以试着少用技能和茶，积攒一些资源。",
                "pos": [
                    100,
                    280,
                    380
                ]
            }
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "MT103",
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
    [ 21,361, 21,150, 21,361, 21,150,150, 22,150,363,533,534,566],
    [361,363,361,150,361,363,361,150, 21, 21,150, 81,150,150,150],
    [150, 81,150,150,150, 81,150,150,361,361,150,363,  0,  0,  0],
    [  0,  0,577,  0,  0,365,  0,  0,529,  0,  0,150,150,150,363],
    [361,150,150,150,362,150, 81,150,150,150,362, 81,  0,  0,  0],
    [  0,532,  0,150,518,150,  0,  0,150, 30,  0,150,150,150,150],
    [150,150,576,150,  0,150,150,362,150,150,361,150, 21,601, 21],
    [ 92,361,361, 81,362,534,150,362,150, 30,  0, 86,  0,  0,  0],
    [150,150, 81,150,150,150,150,362,150,150,361,150, 21,129, 21],
    [566,  0,364,150,527,361,  0,  0, 81,  0,  0,150,150,150,150],
    [566,530,  0,150,150, 82,150,361,150,  0,  0,362,150,  0,533],
    [150,150,150,150,528,  0,150,534,150,150,362,  0,576,361,  0],
    [566,  0,363,  0,  0,528,363,150,150,534,150, 81,150,150, 82],
    [150,150,150,150, 81,150,  0,361,361,532,150,364,  0,526,526],
    [533,532,566,530,363,150,  0,150,150,534,150,  0,  0,534,530]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}