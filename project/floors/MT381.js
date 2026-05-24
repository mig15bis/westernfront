main.floors.MT381=
{
    "floorId": "MT381",
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
    "bgm": "cao1.mp3",
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
            "function": "function(){\ncore.ui.mission.mis('MISSION 51', '反击的序曲', core.doAction);\n}"
        },
        "\t[盟军指挥官,hero]巴斯托涅的守军数量很少，尽快解决吧。",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "scoutinf",
            "name": "hp",
            "value": "3000000",
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
            "value": "10000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "9000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "90000",
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
            "value": "8000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "100000",
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
            "value": "7500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "attankinf",
            "name": "atk",
            "value": "150000",
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
            "value": "8000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "atk",
            "value": "400000",
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
            "value": "9000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5g",
            "name": "atk",
            "value": "400000",
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
            "value": "10000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "atk",
            "value": "500000",
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
            "value": "10000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigerking",
            "name": "atk",
            "value": "600000",
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
            "value": "9000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "jagpanzer",
            "name": "atk",
            "value": "600000",
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
            "value": "600000",
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
            "value": "60000",
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
            "value": "6000000",
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
            "value": "7500000",
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
        "\t[任务目标]⭐通过当前区域\n⭐消灭巴斯托涅所有守军（不包括最后一张图）\n⭐击毁2辆虎王坦克",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第51关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第51关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第51关通关",
                    "operator": "=",
                    "text": "抵达终点",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第51关任务2",
            "n": 1,
            "text": "消灭巴斯托涅所有守军",
            "info": [
                {
                    "type": "killAll",
                    "floorId": [
                        "MT381",
                        "MT382",
                        "MT383",
                        "MT384"
                    ],
                    "text": "巴斯托涅守军剩余"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第51关任务3",
            "n": 1,
            "text": "击毁2辆虎王坦克",
            "info": [
                {
                    "type": "kill",
                    "kill": "tigerking",
                    "floorId": [
                        "MT385"
                    ],
                    "operator": ">=",
                    "text": "已击毁虎王坦克",
                    "count": 2
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "14,7": {
            "floorId": "MT382",
            "loc": [
                0,
                7
            ]
        },
        "0,7": {
            "floorId": "MT385",
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
    [640,160,  0,  0,160,641,641,265,639,160,639,639,639,160, 22],
    [518, 81,227,  0,160,160,160, 81,160,160,  0,279,  0,160, 22],
    [640,160,  0,  0,275,  0,518,  0,160,160,160, 82,160,160,642],
    [160,160,160,160,160,  0,518,  0,275,  0,160,  0, 81,265,642],
    [609,609,609,609,160, 81,160,160,160,  0,160,643,160,160,160],
    [ 21, 21, 21, 22,160,  0,  0,  0,160,  0,250,  0,  0,250,518],
    [109,109,  0,  0,160,644,518,  0,275,  0,250,  0,  0,160,160],
    [ 92, 83,  0,  0, 86,  0,160, 81,160,160,160,160, 81,275, 94],
    [109,109,  0,  0,160,644,160,644,265,644,160,  0,  0,160,160],
    [ 21, 21, 21, 22,160,  0,160,160,160, 81,160,  0,266, 21, 21],
    [609,609,609,609,160,250, 81,250,  0,250,160,  0,266, 21, 21],
    [160,160,160,160,160,  0,160,  0,110018,  0,160,  0,160,160,160],
    [518,  0,275,  0,  0,518,160,250,  0,250, 81,  0,160,640,640],
    [160,160, 82,160,160,160,160,160,  0,  0,160,160,160,641,641],
    [  0,  0,228,519,519,524,524,160,518,  0, 81,279,  0,642,642]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [110019,  0,110019,  0,  0,171,171,171,171,  0,  0,172,  0,  0,  0],
    [  0,110019,  0,  0,  0,171,171,171,171,  0,  0,172,  0,  0,  0],
    [  0,  0,  0,  0,  0,171,171,171,171,  0,  0,172,172,  0,  0],
    [172,172,  0,  0,  0,  0,  0,  0,  0,  0,  0,172,172,  0,  0],
    [172,172,171,  0,  0,172,172,172,  0,  0,  0,172,  0,  0,  0],
    [  0,  0,171,171,  0,172,172,172,171,171,171,  0,  0,  0,  0],
    [  0,  0,171,171,  0,  0,  0,  0,171,171,171,171,172,172,172],
    [  0,  0,171,171,  0,  0,  0,  0,171,171,171,171,  0,  0,  0],
    [  0,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,171,171,  0,  0,110019,  0,  0,  0,  0,  0,  0,  0,110019,  0],
    [  0,  0,  0,  0,  0,  0,171,171,171,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,171,171,171,171,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,171,171,171,171,  0,  0,  0,  0,  0,  0],
    [  0,  0,110019,  0,  0,171,  0,  0,  0,110019,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "area": "陆地"
}