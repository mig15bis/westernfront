main.floors.MT249=
{
    "floorId": "MT249",
    "title": "奥古斯塔",
    "name": "奥古斯塔",
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
        {
            "type": "function",
            "async": true,
            "function": "function(){\ncore.ui.mission.mis('MISSION 35', '登陆西西里', core.doAction);\n}"
        },
        {
            "type": "text",
            "text": "\t[蒙哥马利]\f[montgomary.png,0,310]我们的部队已顺利上岸，敌人抵抗并不强烈。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[巴顿]\f[patton.png,0,310]敌人大意了，趁这个机会，抓紧肃清海滩上的敌人，站稳登陆点！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[艾森豪威尔]\f[eisenhower.png,0,310]空降部队报告称，他们已经深入敌后，正在按部就班完成各自的任务。希望地面部队快速推进，与他们会合，时间拖久了他们会有危险。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[艾森豪威尔]\f[eisenhower.png,0,310]敌人在西西里岛的空军有一定规模，巡逻战斗机注意空中警戒。",
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
            "value": "250000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "atk",
            "value": "2800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "special",
            "value": "[1]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "hp",
            "value": "250000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "atk",
            "value": "2900",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "special",
            "value": "[1,6]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "hp",
            "value": "160000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "atk",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "special",
            "value": "[1]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "hp",
            "value": "230000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "atk",
            "value": "2700",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "special",
            "value": "[6]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "hp",
            "value": "230000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "atk",
            "value": "2900",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "special",
            "value": "[6]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf7",
            "name": "hp",
            "value": "180000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf7",
            "name": "atk",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf7",
            "name": "special",
            "value": "[1,38,42,56]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "hp",
            "value": "140000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "atk",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "special",
            "value": "[6,60]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "hp",
            "value": "190000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "p2640",
            "name": "hp",
            "value": "250000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "p2640",
            "name": "atk",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "p2640",
            "name": "special",
            "value": "[1]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "hp",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "atk",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "special",
            "value": "[40]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c202",
            "name": "hp",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c202",
            "name": "atk",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c202",
            "name": "special",
            "value": "[6]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "atk",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "bom",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "hp",
            "value": "280000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "4000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "special",
            "value": "[1]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "hp",
            "value": "160000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "special",
            "value": "[15]",
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
            "id": "mortar",
            "name": "zoneSquare",
            "value": "false",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "hp",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "atk",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "special",
            "value": "[56,66]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "250000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "4200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "special",
            "value": "[1,6]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "hp",
            "value": "140000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "atk",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "special",
            "value": "[1]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "4200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "special",
            "value": "[6]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "special",
            "value": "[6]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "aceinf",
            "name": "hp",
            "value": "140000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "aceinf",
            "name": "atk",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "aceinf",
            "name": "special",
            "value": "[38,47,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "hp",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "atk",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "zone",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "special",
            "value": "[59]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "hp",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "atk",
            "value": "55000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "zone",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "special",
            "value": "[15,42]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "hp",
            "value": "140000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "atk",
            "value": "14000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "special",
            "value": "[60]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "hp",
            "value": "180000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "atk",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4g",
            "name": "hp",
            "value": "180000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4g",
            "name": "atk",
            "value": "38000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4g",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "hp",
            "value": "230000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "atk",
            "value": "48000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "special",
            "value": "[38,51,65]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug3f",
            "name": "hp",
            "value": "140000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug3f",
            "name": "atk",
            "value": "38000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug3f",
            "name": "zone",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug3f",
            "name": "special",
            "value": "[56,59]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "48000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "special",
            "value": "[40,51,59]",
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
            "value": "6000",
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
            "id": "me110g",
            "name": "hp",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "atk",
            "value": "14000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "special",
            "value": "[1]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "atk",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "money",
            "value": "6",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "exp",
            "value": "6",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "hp",
            "value": "70000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "atk",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "bom",
            "value": "150000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "special",
            "value": "[28,68]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "hp",
            "value": "140000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "atk",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "bom",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "special",
            "value": "[28,47]"
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
        "\t[任务目标]⭐占领墨西拿\n⭐与全部空降部队会合\n⭐俘虏至少50支意大利部队",
        {
            "type": "callBook"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]本关流程稍长，且途中事件较多。",
        "\t[系统提示]受舰炮射程限制，随着玩家深入陆地，海军类装备会被挨个卸除，但航母舰载机的航程足以覆盖整个西西里岛，因此航母不会受影响。",
        {
            "type": "setValue",
            "name": "flag:第35关通关",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:mission36task2",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第35关任务1",
            "n": 1,
            "text": "占领墨西拿",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第35关通关",
                    "operator": "=",
                    "text": "通过当前区域",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第35关任务1",
            "n": 1,
            "text": "与全部空降部队会合",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "mission36task2",
                    "operator": "=",
                    "text": "空降兵已归队",
                    "count": "12"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第35关任务1",
            "n": 1,
            "text": "俘虏至少50支意大利部队",
            "info": [
                {
                    "type": "killSpecial",
                    "killSpecial": "61",
                    "floorId": [
                        "MT249",
                        "MT250",
                        "MT251",
                        "MT252",
                        "MT253",
                        "MT254"
                    ],
                    "operator": ">=",
                    "text": "已俘虏的敌军",
                    "count": 50
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT250",
            "loc": [
                7,
                0
            ]
        },
        "0,7": {
            "floorId": "MT251",
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
    [536,150,537,150,535,535, 82,411,538,150,539, 22,145,154,155],
    [536, 81,365,150,535,535,150,150,  0,363,539,145,145,154,155],
    [536,150,  0,150,150,150,150,571, 81,145,145,154,154,154,155],
    [150,150,537,363,  0,  0,150,  0,538,145,154,154,154,155,155],
    [ 21,150,405,150,392,  0,362,  0,150,145,145,154,154,155,156],
    [ 21,367,  0,150,150, 81,150,150,150,606,145,154,154,155,156],
    [109,109,364,150,  0,571,  0,362,150,605,145,154,154,155,155],
    [ 92, 83,538,538,150,150,150,  0, 86,  0,  0,145,154,154,155],
    [109,109,150,150,150,539,405,  0,150, 21, 21, 21,145,154,155],
    [536,  0,150,539,363,539,150,  0,150,606,605,606,145,154,155],
    [536,405, 81,539,150,150,150,362,150,150,150,145,145,154,155],
    [536,  0,150,539,392,150,  0,  0,  0, 81,364,145,154,154,155],
    [ 82,150,150,150, 81,  0,589,150,  0,150,  0,145,154,154,155],
    [535,535,150,364,  0,363,150,150,366,150, 21, 21,145,154,155],
    [535,589, 81,538,150,538,150, 93,  0,150, 21, 22,145,154,155]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "浅滩"
}