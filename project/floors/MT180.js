main.floors.MT180=
{
    "floorId": "MT180",
    "title": "阿拉曼",
    "name": "阿拉曼",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "bgm6.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 26 魔鬼花园",
        {
            "type": "text",
            "text": "\t[蒙哥马利]\f[montgomary.png,0,310]今晚注定是个不眠之夜，对敌人和我们来说都是。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[蒙哥马利]\f[montgomary.png,0,310]撕开敌人的防线！我要把这道防线变成敌人的坟场！",
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
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "atk",
            "value": "1400",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "hp",
            "value": "115000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "atk",
            "value": "1400",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "hp",
            "value": "90000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "atk",
            "value": "3500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "hp",
            "value": "85000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "atk",
            "value": "1700",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "hp",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "atk",
            "value": "1800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "hp",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "atk",
            "value": "2200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "hp",
            "value": "55000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "atk",
            "value": "5500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "hp",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "1700",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "atk",
            "value": "6000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "125000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "1900",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "special",
            "value": "[1,6,52,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "n",
            "value": "2",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "85000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "1900",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "hp",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "2200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "hp",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "special",
            "value": "[55,56,66]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "aceinf",
            "name": "hp",
            "value": "130000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "aceinf",
            "name": "atk",
            "value": "5500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "hp",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "atk",
            "value": "6500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "hp",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "atk",
            "value": "6500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug3a",
            "name": "hp",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug3a",
            "name": "atk",
            "value": "12500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4e",
            "name": "hp",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4e",
            "name": "atk",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "hp",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "hp",
            "value": "32000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "atk",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "hp",
            "value": "48000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "atk",
            "value": "800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "bom",
            "value": "25000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "special",
            "value": "[28]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak38",
            "name": "hp",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak38",
            "name": "atk",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak38",
            "name": "special",
            "value": "[55,59]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak38",
            "name": "zone",
            "value": "8500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak38",
            "name": "range",
            "value": "2",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "hp",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "12000",
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
            "value": "[40,55,59]"
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "10000"
        },
        {
            "type": "setGlobalValue",
            "name": "lavaDamage",
            "value": 20000
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
        "\t[任务目标]⭐通过当前区域\n⭐全程没有受到地雷伤害\n⭐摧毁所有88毫米高射炮",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第26关通关",
            "value": "0"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]\r[red]作者不会做没有意义的紫塔。所以当你觉得一个关卡很恶心的时候，说明在真实的历史上，盟军的高层做出了错误的决定，而对此毫无意识的士兵们只能迎着密集的炮火，头也不回地冲锋。作为玩家，你可以点击右上角的红叉来回避这一切。但他们，则从来没有选择的权利。他们将目睹战友一个个倒在血泊中，他们不知道自己会不会成为下一个，他们血肉模糊的尸体将难以辨认，他们英勇无畏的牺牲在这场错误的行动中显得毫无意义。\r",
        {
            "type": "setTask",
            "name": "第26关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第26关通关",
                    "operator": "=",
                    "text": "抵达终点",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第26关任务2",
            "n": 1,
            "text": "全程没有受到地雷伤害",
            "info": [
                {
                    "type": "specialBlock",
                    "specialType": "地雷伤害",
                    "floorId": [
                        "MT180",
                        "MT181",
                        "MT182",
                        "MT183",
                        "MT184"
                    ],
                    "operator": "<=",
                    "text": "不要踩地雷！",
                    "count": 0
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第26关任务3",
            "n": 1,
            "text": "摧毁所有88毫米高射炮",
            "info": [
                {
                    "type": "checkBlock",
                    "checkBlock": "flak88",
                    "floorId": [
                        "MT180",
                        "MT181",
                        "MT182",
                        "MT183",
                        "MT184"
                    ],
                    "operator": "<=",
                    "text": "剩余的88炮",
                    "count": 0
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,14": [
            {
                "type": "text",
                "text": "\t[伊吹萃香]\f[specialnpc.jpg,0,280,100,200]最后再看一眼我们面前的这一小片空地吧，本关所有的空地上都塞满了大量的地雷。如果要达成三星通关的话，那么但愿你指挥点数和血量都很充足吧。记得优先干掉那些狙击手！",
                "pos": [
                    100,
                    280,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[伊吹萃香]\f[specialnpc.jpg,0,280,100,200]此外，本区域出现了新的“阵地”属性。这是一种双向光环，阵地怪本身可以给周围的怪物提供增益，周围的怪反过来又可以为阵地本身提供增益。先清杂兵，还是先摧毁阵地核心，要根据实际情况自主判断。",
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
            "floorId": "MT181",
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
    [150,150,150,518,518,150,150, 91,150,534,150,522,530,522,150],
    [534,362, 11,150,248,569,150,366,150,405,150,150,203,150,150],
    [530,150,265,404, 81,150,362, 81,250, 11, 11,363, 81,203, 11],
    [534,362, 11,150, 11,150,570,362,150,150,150,362,150, 11,533],
    [150,150,150,150,362, 81, 11,150,534,534,534,534,150,150,150],
    [531,150,534,150, 11,150,363,150,362,150,150,363, 81,531,531],
    [531,250,534,404,365,150, 11,250, 81, 11,571, 11,150,203,150],
    [150,150,150,150, 11, 81,571,150,150,250,150,150,532,532,532],
    [532,232, 11,150,150,203,150,150, 11,215, 11,150,150,150,150],
    [533,150, 11,266, 81,363,150, 11,253,150, 11,150,522,538,535],
    [533,150,363,150,150,405,150,362,150,362,363,409,253,518,536],
    [533,150,363,150, 11, 11,362, 11, 81, 11,150,150,522,539,537],
    [150,150, 82,150,150,150,150, 86,150,150,150,150, 82,150,150],
    [571,571,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,571,571],
    [571,571,571,571,590,  0,  0,  0,  0,601,590,571,571,571,571]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地",
    "color": null
}