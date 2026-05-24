main.floors.MT388=
{
    "floorId": "MT388",
    "title": "阿登",
    "name": "阿登",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "snow",
    "bgm": "hiaction6.mp3",
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
            "function": "function(){\ncore.ui.mission.mis('MISSION 52', '突出部之战', core.doAction);\n}"
        },
        "\t[盟军指挥官,hero]坚持住！不能让敌人突破防线！",
        {
            "type": "text",
            "text": "\t[巴顿]\f[patton.png,0,310]德军不可能还有充足的燃油，攻势不会持久。全员打起精神，从侧翼斩断敌人的攻势！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[艾森豪威尔]\f[eisenhower.png,0,310]航程范围内所有机场暂停其他任务，优先为阿登地区提供近距离空中支援。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[莫德尔]\f[model.png,0,310]我们的攻势看似迅猛，但我们已不再是1940年的我们，敌人也不是1940年的敌人。空中优势尽失，坦克缺少燃油，这是一次注定失败的反击，所有的战果都是极其短暂的。",
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
            "id": "scoutinf",
            "name": "hp",
            "value": "4000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "scoutinf",
            "name": "atk",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "scoutinf",
            "name": "special",
            "value": "[45]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "12000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "85000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "10000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "95000",
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
            "value": "10000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "110000",
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
            "value": "9000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "attankinf",
            "name": "atk",
            "value": "200000",
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
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "bom",
            "value": "300000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "special",
            "value": "[6,28,70]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me262",
            "name": "hp",
            "value": "3500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me262",
            "name": "atk",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me262",
            "name": "special",
            "value": "[1,30,38,70,73]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer180",
            "name": "hp",
            "value": "3500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer180",
            "name": "atk",
            "value": "800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer180",
            "name": "special",
            "value": "[43,72,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "hp",
            "value": "8500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "atk",
            "value": "450000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "special",
            "value": "[56,60,65,69]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5g",
            "name": "hp",
            "value": "9500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5g",
            "name": "atk",
            "value": "450000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5g",
            "name": "special",
            "value": "[56,60,65,86,92]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "hp",
            "value": "11000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "atk",
            "value": "550000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "special",
            "value": "[38,65,86,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigerking",
            "name": "hp",
            "value": "11000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigerking",
            "name": "atk",
            "value": "650000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigerking",
            "name": "special",
            "value": "[38,63,65,86,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "jagpanzer",
            "name": "hp",
            "value": "10000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "jagpanzer",
            "name": "atk",
            "value": "650000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "jagtiger",
            "name": "hp",
            "value": "11000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "jagtiger",
            "name": "atk",
            "value": "850000",
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
            "value": "650000",
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
            "value": "65000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak44",
            "name": "hp",
            "value": "3500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak44",
            "name": "atk",
            "value": "650000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "rocket41",
            "name": "hp",
            "value": "3500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "rocket41",
            "name": "atk",
            "value": "350000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "v1missile",
            "name": "hp",
            "value": "7000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "v1missile",
            "name": "top",
            "value": "7000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fritzx",
            "name": "hp",
            "value": "7000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fritzx",
            "name": "top",
            "value": "8000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "v2missile",
            "name": "top",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "model",
            "name": "hp",
            "value": "12000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "model",
            "name": "atk",
            "value": "650000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stugtiger",
            "name": "hp",
            "value": "12000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stugtiger",
            "name": "atk",
            "value": "6000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "wildwind",
            "name": "hp",
            "value": "12000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "wildwind",
            "name": "atk",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "wildwind",
            "name": "special",
            "value": "[6,40,93]"
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
        "\t[任务目标]⭐击败曼施坦因（主线boss）\n⭐击败龙德施泰特（支线boss）\n⭐击败莫德尔（支线boss）",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第52关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第52关任务1",
            "n": 1,
            "text": "击败曼施坦因（主线boss）",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第52关通关",
                    "operator": "=",
                    "text": "主线boss击破",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第52关任务2",
            "n": 1,
            "text": "击败龙德施泰特（支线boss）",
            "info": [
                {
                    "type": "kill",
                    "kill": "rundstedt",
                    "floorId": [
                        "MT391"
                    ],
                    "operator": ">=",
                    "text": "支线boss击破",
                    "count": 1
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第52关任务3",
            "n": 1,
            "text": "击败莫德尔（支线boss）",
            "info": [
                {
                    "type": "kill",
                    "kill": "model",
                    "floorId": [
                        "MT392"
                    ],
                    "operator": ">=",
                    "text": "支线boss击破",
                    "count": 1
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT389",
            "loc": [
                7,
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
    [580,524,160,518,160,609,524,  0,524,609,160,641,641,639,639],
    [524,524,160,518,160,609,524,  0,524,609,160, 82,160,160,160],
    [270,160,160,228,160,609,524,  0,524,609,160,412,  0,  0,270],
    [228, 81,275,  0,160,160,160, 86,160,160,160,160,160,160, 81],
    [  0,160,644,  0,644,160,  0,744,  0,160,  0,668,275,  0,608],
    [608,160,  0,279,  0,160,275,160,275,160,  0,  0,160,279,  0],
    [160,160,160,  0,665,668,  0,160,  0,670,201,160,160,160,160],
    [639,642,160,160, 81,160,160,160,160,160,  0, 81,228,642,642],
    [639,642,160,  0,664,391,518,160,518,160,227,160,  0,247,581],
    [644,644,160,227,160,160,160,160,275,160,  0,160,160,160,160],
    [  0,412, 82,  0,160,518,518,275,270, 81,  0,668,160,391,640],
    [160,160,160,391,160,160,160,160,160,228,160,275,160,  0,640],
    [  0,412, 82,  0,160,640,669,227,669,640,160,  0, 81,228,  0],
    [519,641,160,228,160,  0,160,201,160,  0,160,160,160,160,160],
    [580,641,160,744, 81,664,160, 93,160,664, 81,384,275,  0,580]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,172,172,172,172,172,  0,  0,  0,  0,  0],
    [  0,  0,  0,110019,  0,172,172,172,172,172,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,172,172,172,172,172,  0,  0,  0,  0,110019],
    [  0,  0,  0,  0,  0,  0,  0,172,  0,  0,  0,  0,  0,  0,  0],
    [110019,  0,  0,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,171,171,171,  0,  0,  0,  0,110019,  0,  0,  0,  0],
    [  0,  0,  0,171,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [172,172,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [172,172,  0,110019,110019,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [172,  0,  0,  0,  0,  0,  0,110019,171,171,171,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,171,171,  0,  0,  0,  0,110019],
    [  0,  0,  0,171,171,171,  0,172,  0,172,  0,  0,  0,  0,  0],
    [  0,  0,  0,171,171,171,  0,172,  0,172,  0,  0,  0,  0,  0],
    [  0,  0,  0,171,171,  0,  0,172,  0,172,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "area": "陆地"
}