main.floors.MT277=
{
    "floorId": "MT277",
    "title": "北冰洋",
    "name": "北冰洋",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "europe1.mp3",
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
            "name": "flag:escort",
            "value": "true"
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "value": "3000000"
        },
        "\r[yellow]Mission 39 可敬的对手",
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                13,
                7
            ]
        },
        "\t[盟军指挥官,hero]取消原定航线，避开沙恩霍斯特，优先护送商船离开。",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "u7",
            "name": "hp",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u7",
            "name": "top",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u7",
            "name": "special",
            "value": "[29,33,34,35,85]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u7",
            "name": "tpn",
            "value": "6",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "hp",
            "value": "55000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "top",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "special",
            "value": "[29,33,34,35,85]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "tpn",
            "value": "8",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934",
            "name": "hp",
            "value": "400000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934",
            "name": "atk",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934",
            "name": "top",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934a",
            "name": "hp",
            "value": "420000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934a",
            "name": "atk",
            "value": "2200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934a",
            "name": "top",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936",
            "name": "hp",
            "value": "450000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936",
            "name": "atk",
            "value": "2400",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936",
            "name": "top",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936a",
            "name": "hp",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936a",
            "name": "atk",
            "value": "2600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936a",
            "name": "top",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "konesburg",
            "name": "hp",
            "value": "2500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "konesburg",
            "name": "atk",
            "value": "3500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "konesburg",
            "name": "top",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "hipper",
            "name": "hp",
            "value": "7000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "hipper",
            "name": "atk",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "hipper",
            "name": "top",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "deutschland",
            "name": "hp",
            "value": "9500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "deutschland",
            "name": "atk",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "scharnhost",
            "name": "hp",
            "value": "10000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "scharnhost",
            "name": "atk",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "scharnhost",
            "name": "special",
            "value": "[31,35,36,37,86]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "scharnhost",
            "name": "money",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "scharnhost",
            "name": "exp",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "hp",
            "value": "90000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "atk",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "special",
            "value": "[28]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "bom",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87g",
            "name": "hp",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87g",
            "name": "atk",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87g",
            "name": "bom",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw200",
            "name": "hp",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw200",
            "name": "atk",
            "value": "2500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw200",
            "name": "special",
            "value": "[28,47]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw200",
            "name": "bom",
            "value": "50000"
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
        "\t[任务目标]⭐击沉沙恩霍斯特号（主线boss）\n⭐友军血量不少于100w\n⭐通关时至少持有100瓶“下午茶”",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:MT281boss",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第38关任务1",
            "n": 1,
            "text": "击沉沙恩霍斯特号（主线boss）",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "MT281boss",
                    "operator": "=",
                    "text": "主线boss击破",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第38关任务2",
            "n": 1,
            "text": "友军血量不少于100w",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "友军血量",
                    "operator": ">=",
                    "text": "友军血量剩余",
                    "count": "1000000"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第38关任务3",
            "n": 1,
            "text": "通关时至少持有100瓶“下午茶”",
            "info": [
                {
                    "type": "checkItem",
                    "checkItem": "tea",
                    "operator": ">=",
                    "text": "当前持有的下午茶",
                    "count": 100
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "14,7": [
            "请不要开穿墙玩游戏哦！谢谢配合！",
            {
                "type": "animate",
                "name": "hand",
                "loc": "hero",
                "async": true
            },
            {
                "type": "jumpHero",
                "loc": [
                    0,
                    7
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "irritable",
                "loc": "hero"
            }
        ],
        "2,5": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]敌军潜艇的“狼群”技能升级了！不过这个升级的时机似乎不太好。“刺猬”炮即便有时候不能秒杀它们，也可以帮你躲掉这个新技能。"
        ]
    },
    "changeFloor": {
        "14,14": {
            "floorId": "MT278",
            "loc": [
                0,
                0
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
    [543,543,369,  3,544,  6,542,369, 21,  3,580,  6,341,523,523],
    [  3,  3,360, 82,544,255,542,  6,581,  6,360,  3,  3,  6,216],
    [540,540,369,  3,  6, 81,  3,  3, 82,  3,  0, 81,216,216,605],
    [  3,  6,  3,  3,255,605,  0,544,544, 81,277,  6,  3,  3,  3],
    [541,541,541, 81,277,  3, 81,  3,  3,  3,541,542,  6,541,540],
    [  6,  3,601,  3,  0,  6,385,540, 21,  3,360,  3,216,541,540],
    [606,607,606,  3,  0,543,  3,  6,235,  3, 21,  3, 81,  3,  3],
    [  0,  0,  0, 86,360,  3,  3,541,541,  6,216, 81,216,  0, 94],
    [606,607,606,  3,  0, 81,542,  3,  3,  3,605,  6,  0,  3,  3],
    [  3,  3,  6,  3,216,  3,542, 21,235,541,  3,  3,277, 81,235],
    [542,542,385, 81,  0,  3,  6, 81,  3,541,540,393,540,  6,580],
    [ 82,  3,  3,  6,  0,541, 81,393,  6,541,  3, 81,  3,  3,360],
    [277,523,  3,  0,216,  0,  3,  0,235,  3,  6,385,  6,519,518],
    [523,523,  3,216,  6,216,  3,  6, 21, 81,544,544,544,  3,  6],
    [590,590,  3,542,542,542,  3,543,543,  3,544,  3, 82,393, 94]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16,  3, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
],
    "fgmap": [

],
    "area": "海洋"
}