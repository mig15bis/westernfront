main.floors.MT241=
{
    "floorId": "MT241",
    "title": "朗斯托普峰",
    "name": "朗斯托普峰",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "cao3.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 34 决战突尼斯",
        {
            "type": "text",
            "text": "\t[蒙哥马利]\f[montgomary.png,0,310]皇家陆军沿滨海方向进攻，做好巷战准备，全力拿下突尼斯！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[艾森豪威尔]\f[eisenhower.png,0,310]我们的陆军还在成长，但陆军航空队绝不会让你们失望。我们会用空袭解决一切负隅顽抗的敌人。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[巴顿]\f[patton.png,0,310]没能与隆美尔决战是我的遗憾，但整个沙漠军团再也找不出第二个像他一样优秀的将军，这意味着现在的德军不是我的对手。碾碎他们！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[阿尼姆]\f[anyum.png,0,310]我已经利用突尼斯周边的险要地势布置好防御，就在此地拖延盟军。只要突尼斯还在坚守，盟军就不会向欧洲进军！",
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
            "value": "230000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "atk",
            "value": "2500",
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
            "value": "230000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "atk",
            "value": "2700",
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
            "value": "150000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "atk",
            "value": "9000",
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
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "atk",
            "value": "2500",
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
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "atk",
            "value": "2700",
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
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf7",
            "name": "atk",
            "value": "25000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "atk",
            "value": "4000",
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
            "value": "150000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "atk",
            "value": "13000",
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
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "p2640",
            "name": "atk",
            "value": "30000",
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
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "atk",
            "value": "30000",
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
            "id": "commandos",
            "name": "hp",
            "value": "250000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "money",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "exp",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "hp",
            "value": "150000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "atk",
            "value": "13000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "money",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "exp",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "hp",
            "value": "40000",
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
            "name": "money",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "exp",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "220000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "3400",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "money",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "exp",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "hp",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "atk",
            "value": "18000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "money",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "exp",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "170000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "3500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "money",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "exp",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "hp",
            "value": "170000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "4000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "money",
            "value": "4",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "exp",
            "value": "4",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "aceinf",
            "name": "hp",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "aceinf",
            "name": "atk",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "aceinf",
            "name": "special",
            "value": "[38,47,55,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "aceinf",
            "name": "money",
            "value": "10",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "aceinf",
            "name": "exp",
            "value": "10",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "hp",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "atk",
            "value": "35000",
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
            "name": "money",
            "value": "4",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "exp",
            "value": "4",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "hp",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "atk",
            "value": "50000",
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
            "name": "money",
            "value": "4",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "exp",
            "value": "4",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "atk",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "money",
            "value": "10",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "exp",
            "value": "10",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "hp",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "atk",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "money",
            "value": "12",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "exp",
            "value": "12",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4g",
            "name": "hp",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4g",
            "name": "atk",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4g",
            "name": "money",
            "value": "12",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4g",
            "name": "exp",
            "value": "12",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "hp",
            "value": "140000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "atk",
            "value": "45000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "money",
            "value": "20",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "exp",
            "value": "20",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug3f",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug3f",
            "name": "atk",
            "value": "35000",
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
            "name": "money",
            "value": "12",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug3f",
            "name": "exp",
            "value": "12",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "45000",
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
            "name": "money",
            "value": "4",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "exp",
            "value": "4",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "hp",
            "value": "60000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "atk",
            "value": "5500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "money",
            "value": "8",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "exp",
            "value": "8",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "money",
            "value": "8",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "exp",
            "value": "8",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "hp",
            "value": "65000",
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
            "value": "130000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "money",
            "value": "8",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "exp",
            "value": "8",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "special",
            "value": "[28,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "money",
            "value": "10",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "exp",
            "value": "10",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "money",
            "value": "20",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "exp",
            "value": "20",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "messe",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "messe",
            "name": "atk",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "messe",
            "name": "special",
            "value": "[25,38,57]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "messe",
            "name": "money",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "messe",
            "name": "exp",
            "value": "0"
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
        "\t[任务目标]⭐击败阿尼姆（主线boss）\n⭐击败梅塞（支线boss）\n⭐全歼敌军",
        {
            "type": "callBook"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]击败梅塞后，所有意大利军队投降。主线boss战开始后不可返回常规战斗层，若要完成全歼敌人的任务，需在进入主线boss战之前完成。",
        {
            "type": "setTask",
            "name": "第34关任务1",
            "n": 1,
            "text": "击败阿尼姆（主线boss）",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "MT246boss",
                    "operator": "=",
                    "text": "主线boss击破",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第34关任务2",
            "n": 1,
            "text": "击败梅塞（支线boss）",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "MT245boss",
                    "operator": "=",
                    "text": "支线boss击破",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第34关任务3",
            "n": 1,
            "text": "全歼敌军",
            "info": [
                {
                    "type": "killAll",
                    "floorId": [
                        "MT241",
                        "MT242",
                        "MT243",
                        "MT244"
                    ],
                    "text": "敌军剩余"
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,0": {
            "floorId": "MT242",
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
    [535,535,535,410,60034,518,150, 91,150,589, 21, 21, 21,60034,519],
    [150,150,150, 82,60026, 11,150,366,60027, 81,150,150,150,150, 81],
    [60032,522,60032,250, 81,405,150, 82,60035,363,539,539,363,250,539],
    [404,  0,364,  0,60031,  0,365, 81,272,150,150,150,60032, 81,60032],
    [ 11,60029,60030,218,60039,60032,363,60027,365,150,538,150,  0,363,  0],
    [537,537,150,536,60019,535,535,60035,250, 11,538,150,405,60026, 81],
    [60034,363,150,150,150,150, 11,150, 81,150,150,150,  0,60031,405],
    [537,537,150,537,363,250,538,150,589, 21,60032,364,518,60039,250],
    [ 11,60032,60034,60032, 11,60028,538,150,390,60028,522,522,60029,60030,  0],
    [  0,218,  0, 81,539,60036,150,150,150,60036, 81,60032,518,363,  0],
    [60032, 81,150,150,539,363, 11,364, 11,363,  0,60032,  0,60026,60026],
    [ 81,363,  0,150,150,150,150, 86,150,150,150,409, 81,250,  0],
    [405,60032, 21, 21,150,605, 21,  0, 21,605,150,536,150,60032,250],
    [538,60019, 21, 21,150,606, 22,  0, 22,606,150,536,150,518,518],
    [538,60029,60030,60037,60038,605, 21,  0, 21,605,150,536,150,518,518]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}