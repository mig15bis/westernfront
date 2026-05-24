main.floors.MT34=
{
    "floorId": "MT34",
    "title": "英吉利海峡",
    "name": "英吉利海峡",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "gaijin2.mp3",
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
            "function": "function(){\ncore.ui.mission.mis('MISSION 6', '守护军港', core.doAction);\n}"
        },
        "\t[盟军指挥官,hero]所有战机注意，十二点方向，2000米高度，发现一大群德国佬。",
        "\t[盟军指挥官,hero]两人一组，准备俯冲，给我瞄准轰炸机狠狠的打！",
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "hp",
            "value": "1500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "atk",
            "value": "240",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "special",
            "value": "[6]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "n",
            "value": "5",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "hp",
            "value": "2500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "atk",
            "value": "280",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "hp",
            "value": "1600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "bom",
            "value": "1500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "hp",
            "value": "3500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "bom",
            "value": "350",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "hp",
            "value": "2500"
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
        "\t[任务目标]⭐通过当前区域\n⭐击落所有轰炸机\n⭐通关时至少持有20个“下午茶”",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第六关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第六关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第六关通关",
                    "operator": "=",
                    "text": "抵达终点",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第六关任务2",
            "n": 2,
            "text": "击落所有轰炸机",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "俯冲轰炸机",
                    "floorId": [
                        "MT34",
                        "MT35",
                        "MT36",
                        "MT37",
                        "MT38"
                    ],
                    "operator": "<=",
                    "text": "剩余的俯冲轰炸机",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "中型轰炸机",
                    "floorId": [
                        "MT34",
                        "MT35",
                        "MT36",
                        "MT37",
                        "MT38"
                    ],
                    "operator": "<=",
                    "text": "剩余的中型轰炸机",
                    "count": 0
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第六关任务3",
            "n": 1,
            "text": "通关时至少持有20个“下午茶”",
            "info": [
                {
                    "type": "checkItem",
                    "checkItem": "tea",
                    "operator": ">=",
                    "text": "当前持有的下午茶",
                    "count": 20
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT35",
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
    [525,140,527,528,527,140,566,  0,566,140,527,528,527,140,525],
    [525,140, 21,206, 21,140,566,  0,566,140, 21,206, 21,140,525],
    [518,140,140, 81,140,140,140, 86,140,140,140, 81,140,140,518],
    [382,140,  0, 33,  0,140,527,  0,527,140,  0, 33,  0,140,382],
    [ 81,140,207,140,  0,207,  0,140,  0,207,  0,140,207,140, 81],
    [  0,529,  0,140,140,140, 81,140, 81,140,140,140,  0,529,  0],
    [518,140,140,140,  0, 33,  0,140,  0, 33,  0,140,140,140,518],
    [140,140,140,  0,382,140,140,140,140,140,382,  0,140,140,140],
    [518,206, 81,529,140,140,518,140,518,140,140,529, 81,206,518],
    [140,140,140,  0,382,  0,518,140,518,  0,382,  0,140,140,140],
    [526,526,140,140,140,140, 81,140, 81,140,140,140,140,526,526],
    [527,527,140,  0,206,  0,528,140,528,  0,206,  0,140,527,527],
    [528,528,140,  0,140,528,  0, 82,  0,528,140,  0,140,528,528],
    [205,140,140,383,140,382,140,205,140,382,140,383,140,140,205],
    [  0,566,566,  0,140, 21,140, 93,140, 21,140,  0,566,566,  0]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
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
    "area": "天空"
}