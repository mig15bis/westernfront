main.floors.MT446=
{
    "floorId": "MT446",
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
    "bgm": "bgm4.mp3",
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
            "function": "function(){\ncore.ui.mission.mis('MISSION 60', '凋零的樱花', core.doAction);\n}"
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
            "text": "\t[朱可夫]\f[zhukov.png,0,310]我们了解到日军在占领区所作的暴行甚至比德军还要残酷许多。这些军国主义恶魔必须得到彻底的清算！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[朱可夫]\f[zhukov.png,0,310]刚好我们的新型坦克和轰炸机没赶上对德作战，就把这里当作它们的试验场吧。",
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
        "\t[任务目标]⭐占领东京\n⭐解救日共同志\n⭐一个敌人都不留",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第59关通关",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:savecommunist",
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
            "text": "解救日共同志",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "savecommunist",
                    "operator": "=",
                    "text": "任务完成进度",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第59关任务3",
            "n": 1,
            "text": "一个敌人都不留",
            "info": [
                {
                    "type": "killAll",
                    "floorId": [
                        "MT446",
                        "MT447",
                        "MT448",
                        "MT449",
                        "MT450"
                    ],
                    "text": "敌人残留"
                }
            ]
        },
        "\t[系统提示]你剩的钱也不一定完全没用。猜一猜，战雷里苏联6.7分房的核弹机是哪一架？"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT447",
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
    [ 22,648,152,609,152,610,524,  0,524,610,152,647,700, 81,  0],
    [648,648,152, 21,152,610,524,  0,524,610,152,647,647,152,  0],
    [152,687,152,683,152,610,524,  0,524,610,152,152,152,152,690],
    [  0,749,691,  0,152,152,152, 86,152,152,152,691,  0,684,  0],
    [152,152,152, 81,152, 21,684,  0,684, 21,152, 81,152,152,152],
    [518,152, 21, 21,152,152,152,683,152,152,152,690,684, 21, 21],
    [518,152,683,152,152, 21,152, 81,152,518,687,686,152,152,152],
    [518,690,687,  0,686,  0,750,  0,750,518,152,646,  0,685,  0],
    [152,152,152,152, 81,152,152,152,152,152,152,152,152,152, 81],
    [646,519,  0,152,  0,684,685,152, 21, 21,152,645,524,152,749],
    [646,524,692, 82,691,152,  0,152,683,152,152,645,524,690,749],
    [646,519,  0,152,  0,152,686,748,686,  0,152,152,152,152, 81],
    [152,152,152,152,684,152,152, 82,152,  0,152,687,  0,  0,684],
    [ 22,645,687,152,747,  0,152,688,152,747,152, 82,152,152,152],
    [645,687,690, 81,  0,646,152, 93,152,  0, 81,692,647,648, 22]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}