main.floors.MT55=
{
    "floorId": "MT55",
    "title": "伦敦",
    "name": "伦敦",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "7days2.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        "\r[yellow]Mission 9 伦敦上空的鹰",
        {
            "type": "playSound",
            "name": "airalarm.mp3"
        },
        {
            "type": "playSound",
            "name": "airstrike.mp3"
        },
        {
            "type": "sleep",
            "time": 2000
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "move",
            "loc": [
                6,
                1
            ],
            "time": 500,
            "async": true,
            "steps": [
                "up:6"
            ]
        },
        {
            "type": "move",
            "loc": [
                7,
                2
            ],
            "time": 500,
            "async": true,
            "steps": [
                "up:6"
            ]
        },
        {
            "type": "move",
            "loc": [
                8,
                1
            ],
            "time": 500,
            "async": true,
            "steps": [
                "up:6"
            ]
        },
        {
            "type": "moveHero",
            "time": 500,
            "async": true,
            "steps": [
                "up:6"
            ]
        },
        {
            "type": "waitAsync"
        },
        "\t[盟军指挥官,hero]呼叫总部，所有战机已抵达指定位置，敌机就在前方。",
        {
            "type": "text",
            "text": "\t[休·道丁]\f[dowdin.png,0,310]我是道丁元帅。伦敦的市民们已经牺牲了太多，今天你们一定要狠狠的打，用行动告诉市民们，所有的牺牲都不会白费！",
            "pos": [
                100,
                300,
                380
            ]
        },
        "\t[盟军指挥官,hero]收到。所有战斗机，解散大编队，自由攻击！",
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "hp",
            "value": "2900",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "atk",
            "value": "340",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "hp",
            "value": "4500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "atk",
            "value": "440",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "hp",
            "value": "5500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "atk",
            "value": "150",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "bom",
            "value": "500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "hp",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "atk",
            "value": "150",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "bom",
            "value": "500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "hp",
            "value": "5300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "atk",
            "value": "130",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "bom",
            "value": "800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "special",
            "value": "[]"
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
            "type": "setValue",
            "name": "flag:第九关通关",
            "value": "0"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[任务目标]⭐通过当前区域\n⭐击落所有轰炸机\n⭐击落所有战斗机",
        {
            "type": "setTask",
            "name": "第九关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第九关通关",
                    "operator": "=",
                    "text": "抵达终点",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第九关任务2",
            "n": 1,
            "text": "击落所有轰炸机",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "中型轰炸机",
                    "floorId": [
                        "MT55",
                        "MT56",
                        "MT57",
                        "MT58",
                        "MT59",
                        "MT60"
                    ],
                    "operator": "<=",
                    "text": "剩余的轰炸机",
                    "count": 0
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第九关任务3",
            "n": 2,
            "text": "击落所有战斗机",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "战斗机",
                    "floorId": [
                        "MT55",
                        "MT56",
                        "MT57",
                        "MT58",
                        "MT59",
                        "MT60"
                    ],
                    "operator": "<=",
                    "text": "剩余的战斗机",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "重型战斗机",
                    "floorId": [
                        "MT55",
                        "MT56",
                        "MT57",
                        "MT58",
                        "MT59",
                        "MT60"
                    ],
                    "operator": "<=",
                    "text": "剩余的重型战斗机",
                    "count": 0
                }
            ]
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]本区域是爽区，战斗机数量较少，轰炸机几乎全是负伤。趁着这个机会，好好补充下自己的背包和状态！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,7": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]玩过测试版的玩家可以发现，这些血门里面都多出了一把黄钥匙，所以是什么意思，懂得都懂！"
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT56",
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
    [  2,566,566,566,  2,  0,  0, 91,  0,  0,  2,  0,  0, 22,  2],
    [  2,566,566, 21, 81,  0,382,  0,382,  0, 81,  0, 22,  0,  2],
    [  2,566,566,566,  2,  0,  0,382,  0,  0,  2,  0,  0, 22,  2],
    [  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2,  2,  2,  2,  2],
    [  2,528,528,528,  2,  0,  0,  0,  0,  0,  2,  0,567,567,  2],
    [  2,527,527, 21, 81,  0,  0,  0,  0,  0, 81, 21,  0,567,  2],
    [  2,528,528,528,  2,  0,  0,  0,  0,  0,  2,  0,567,567,  2],
    [  2,  2,  2,  2,  2,  0,  0,  0,  0,601,  2,  2,  2,  2,  2],
    [  2,525,525,525,  2,  0,  0,  0,  0,  0,  2,526,526,526,  2],
    [  2,525,525,525, 82,  0,  0,  0,  0,  0, 82,526,526,526,  2],
    [  2,525,525,525,  2,  0,  0,  0,  0,  0,  2,526,526,526,  2],
    [  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2,  2,  2,  2,  2],
    [  2,518,518,518,  2,  0,  0,  0,  0,  0,  2, 21, 21, 21,  2],
    [  2,518,518,518, 82,  0,  0,  0,  0,  0, 82, 21, 21, 21,  2],
    [  2,518,518,518,  2,  0,  0,  0,  0,  0,  2, 21, 21, 21,  2]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0],
    [574,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574],
    [  0,  0,  0,  0,574,  0,  0,  0,  0,  0,574,  0,  0,  0,  0],
    [574,574,  0,574,  0,  0,  0,  0,  0,  0,  0,574,  0,  0,574],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0],
    [574,  0,574,  0,574,  0,  0,  0,  0,  0,  0,574,  0,574,574],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574],
    [574,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,574,  0,574,  0,  0,  0,  0,  0,  0,  0,574,  0,574],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [574,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0]
],
    "area": "天空"
}