main.floors.MT439=
{
    "floorId": "MT439",
    "title": "本州岛",
    "name": "本州岛",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
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
            "type": "unloadEquip",
            "pos": 1
        },
        {
            "type": "function",
            "async": true,
            "function": "function(){\ncore.ui.mission.mis('MISSION 60', '凋零的樱花', core.doAction);\n}"
        },
        {
            "type": "text",
            "text": "\t[麦克阿瑟]\f[macarthur.png,0,310]日本需要一个新的领导者来接管，而那个人将会是我。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[山下奉文]\f[yamashita.jpg,0,310]帝国已经到了最危险的时候，现在将绝密武器投入战场。所有叛逃者必须被就地处决，我们将以死表达对天皇的忠心！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[麦克阿瑟]\f[macarthur.png,0,310]我们马上将要成为接管这片土地的主人，而我们的下一个目标是苏联。所以，我们不能容忍日共的存在，哪怕他们现在与我们暂时处于同一战线。见到一个，就除掉一个。",
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
            "id": "japinf1",
            "name": "hp",
            "value": "120000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "japinf1",
            "name": "atk",
            "value": "1000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "japinf3",
            "name": "hp",
            "value": "100000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "japinf3",
            "name": "atk",
            "value": "2000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ki100",
            "name": "hp",
            "value": "12000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ki100",
            "name": "atk",
            "value": "700000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "j7w1",
            "name": "hp",
            "value": "12000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "j7w1",
            "name": "atk",
            "value": "1400000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "j7w2",
            "name": "hp",
            "value": "12000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "j7w2",
            "name": "atk",
            "value": "1400000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ne12",
            "name": "hp",
            "value": "5000000"
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
        "\t[任务目标]⭐占领东京\n⭐除掉所有日共党员\n⭐至少保留3支敌方生化部队",
        {
            "type": "callBook"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]地图中存在的没有显伤的NPC就是你的第二个目标，必须亲自触碰他们才会完成击杀。",
        {
            "type": "setValue",
            "name": "flag:第59关通关",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:clearcommunist",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第59关任务1",
            "n": 1,
            "text": "占领东京",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第59关通关",
                    "operator": "=",
                    "text": "抵达终点",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第59关任务2",
            "n": 1,
            "text": "除掉所有日共党员",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "clearcommunist",
                    "operator": "=",
                    "text": "任务完成进度",
                    "count": "13"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第59关任务3",
            "n": 1,
            "text": "至少保留3支敌方生化部队",
            "info": [
                {
                    "type": "checkBlock",
                    "checkBlock": "japinf6",
                    "floorId": [
                        "MT439",
                        "MT440",
                        "MT441",
                        "MT442",
                        "MT443"
                    ],
                    "operator": ">=",
                    "text": "当前区域剩余生化部队",
                    "count": 3
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,4": [
            {
                "type": "animate",
                "name": "shoot2"
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            },
            {
                "type": "setValue",
                "name": "flag:clearcommunist",
                "operator": "+=",
                "value": "1"
            }
        ],
        "14,0": [
            {
                "type": "animate",
                "name": "shoot2"
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            },
            {
                "type": "setValue",
                "name": "flag:clearcommunist",
                "operator": "+=",
                "value": "1"
            }
        ],
        "12,12": [
            {
                "type": "animate",
                "name": "shoot2"
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            },
            {
                "type": "setValue",
                "name": "flag:clearcommunist",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT440",
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
    [ 21, 21,152,646, 22,646,152, 91,152,645,647,747,700,518,494],
    [ 21, 21,152,518,702,518,152,688,152,645,647,152, 82,152,152],
    [686,152,152,152, 81,152,152, 81,152,152,152,152,518,518,518],
    [  0,690, 81,685,684,  0,750,686,  0, 81,748,152,152,152,686],
    [647,494,152,152,152,152,152,152,683,152,684, 81,687,690,  0],
    [152,152,152,  0,685,647,152, 21, 21,152,687,152,152,152,152],
    [647,  0,152,647,152, 22,152,152,152,152,  0, 81,687,749,646],
    [  0,700, 81,  0,152,152,152,152, 21,152,684,152,152,646,648],
    [687,152,152,152,152, 21, 21,152, 21,685,  0,685,152,648, 22],
    [  0,683,648,  0,152,683,152,152,152,152, 81,152,152,152,152],
    [152,152,  0,749, 81,  0,684,  0,683,  0,  0,683,  0,684,648],
    [645,152,687,152,152,152,152, 86,152,152,152,152,152, 82,152],
    [645,152,  0,152,610,590,519,  0,519,590,610,152,494,691,  0],
    [524,152,683,152,610,590,519,  0,519,590,610,152,648,646,648],
    [691, 82,  0,152,610,590,519,  0,519,590,610,152,645,646,645]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}