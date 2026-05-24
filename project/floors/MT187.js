main.floors.MT187=
{
    "floorId": "MT187",
    "title": "地中海",
    "name": "地中海",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "hiaction2.mp3",
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
            "value": "false"
        },
        {
            "type": "function",
            "async": true,
            "function": "function(){\ncore.ui.mission.mis('MISSION 27', '石油禁运', core.doAction);\n}"
        },
        "\t[盟军指挥官,hero]全速行驶！必须赶在敌人之前到达指定地点！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "u7",
            "name": "hp",
            "value": "10400",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u7",
            "name": "top",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u7",
            "name": "special",
            "value": "[29,33,34,35,58]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "hp",
            "value": "10480",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "top",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "cd",
            "value": "5",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "special",
            "value": "[29,33,34,35,58]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd1",
            "name": "hp",
            "value": "148000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd1",
            "name": "atk",
            "value": "600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd1",
            "name": "top",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd2",
            "name": "hp",
            "value": "149000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd2",
            "name": "atk",
            "value": "600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd2",
            "name": "top",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd3",
            "name": "hp",
            "value": "150000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd3",
            "name": "atk",
            "value": "800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd3",
            "name": "top",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd4",
            "name": "hp",
            "value": "150000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd4",
            "name": "atk",
            "value": "800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd4",
            "name": "top",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italycl1",
            "name": "hp",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italycl1",
            "name": "atk",
            "value": "1500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italycl1",
            "name": "top",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italycl2",
            "name": "hp",
            "value": "580000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italycl2",
            "name": "atk",
            "value": "1500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italycl2",
            "name": "top",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyca1",
            "name": "hp",
            "value": "1500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyca1",
            "name": "atk",
            "value": "2500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyca1",
            "name": "top",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c200",
            "name": "hp",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c200",
            "name": "atk",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c202",
            "name": "hp",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c202",
            "name": "atk",
            "value": "2500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "hp",
            "value": "53500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "atk",
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "bom",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "top",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "special",
            "value": "[29]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1007",
            "name": "hp",
            "value": "62500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1007",
            "name": "atk",
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1007",
            "name": "bom",
            "value": "15000"
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
        "\t[任务目标]⭐击沉敌军油船\n⭐拾取所有宝石\n⭐通关时至少持有900指挥点数和90下午茶",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第27关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第27关任务1",
            "n": 1,
            "text": "击沉敌军油船",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第27关通关",
                    "operator": "=",
                    "text": "击沉油船",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第27关任务2",
            "n": 5,
            "text": "拾取所有宝石",
            "info": [
                {
                    "type": "checkBlock",
                    "checkBlock": "red4Gem",
                    "floorId": [
                        "MT187",
                        "MT188",
                        "MT189",
                        "MT190"
                    ],
                    "operator": "<=",
                    "text": "剩余红宝石",
                    "count": 0
                },
                {
                    "type": "checkBlock",
                    "checkBlock": "blue4Gem",
                    "floorId": [
                        "MT187",
                        "MT188",
                        "MT189",
                        "MT190"
                    ],
                    "operator": "<=",
                    "text": "剩余蓝宝石",
                    "count": 0
                },
                {
                    "type": "checkBlock",
                    "checkBlock": "green4Gem",
                    "floorId": [
                        "MT187",
                        "MT188",
                        "MT189",
                        "MT190"
                    ],
                    "operator": "<=",
                    "text": "剩余绿宝石",
                    "count": 0
                },
                {
                    "type": "checkBlock",
                    "checkBlock": "yellow4Gem",
                    "floorId": [
                        "MT187",
                        "MT188",
                        "MT189",
                        "MT190"
                    ],
                    "operator": "<=",
                    "text": "剩余黄宝石",
                    "count": 0
                },
                {
                    "type": "checkBlock",
                    "checkBlock": "orange4Gem",
                    "floorId": [
                        "MT187",
                        "MT188",
                        "MT189",
                        "MT190"
                    ],
                    "operator": "<=",
                    "text": "剩余橙宝石",
                    "count": 0
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第27关任务3",
            "n": 2,
            "text": "通关时至少持有900指挥点数和90下午茶",
            "info": [
                {
                    "type": "checkItem",
                    "checkItem": "tea",
                    "operator": ">=",
                    "text": "当前持有的下午茶",
                    "count": 90
                },
                {
                    "type": "checkStatus",
                    "checkStatus": "mana",
                    "operator": ">=",
                    "text": "当前指挥点数",
                    "count": 900
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "2,14": {
            "floorId": "MT188",
            "loc": [
                12,
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
    [  3,535,535,535,  3,535,537,  3,539,  3,571,571,  0,571,571],
    [  3,536,536,536,  3,539,538,  3,539,  3,571,571,  0,571,571],
    [  3,  0,216,  0,  3,  0,216,  3,537,  3,  3,  3, 86,  3,  3],
    [  3,  3, 81,  3,  3,  3, 81,  3,579, 81,570,  3,  0,210,539],
    [538,360,381,518,  3,539,  0,  3,  3,360, 81,  0,210,  3,539],
    [  3,  3,  3,578,360,  0,539,211,360,  0,  3,212,  3,  3,539],
    [ 21, 21,  3, 81,  3,  3,  3,  3,  3, 81,  3,  0,381,539,  3],
    [ 21, 81,216,360,518,539,  3,518,536,578,  3,  3,  3,360,518],
    [ 21,  3,570,  3,210,  3,  3,360,  3,  3,387, 81,  0,210,  3],
    [  3,  3,  3,  3,578, 81,381,  0,397,536,518,  3,537,  0,  0],
    [210,360,216,360,210,  3,360,  3,  3,  3,  3,  3,  3,  3, 81],
    [537,  3, 82,  3,360,  3,  0,  0,216,536,  3,518,387,  0,211],
    [537,  3,234,  3,535,  3,536, 81,  3, 81,  3,  3,360,  3,  3],
    [  3,  3,360,  3,  3,  3,  3,212,  3,538,538,  3,  0,210,518],
    [570,360, 93,360,570,  3, 22, 21,  3,538,538, 81,381,  3,518]
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
    "area": "海洋"
}