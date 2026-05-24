main.floors.MT424=
{
    "floorId": "MT424",
    "title": "日本海",
    "name": "日本海",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "medaction1.mp3",
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
            "function": "function(){\ncore.ui.mission.mis('MISSION 57', '最后的海战', core.doAction);\n}"
        },
        {
            "type": "text",
            "text": "\t[尼米兹]\f[nimitz.png,0,310]航空母舰特混舰队集结完毕，开始空袭，同时密切注意敌机动向。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[小泽治三郎]\f[ozawa.jpg,0,310]飞行员们，帝国的命运现在就掌握在你们手上。现在，你们自己就是帝国的炮弹，勇敢的冲向敌人的战舰吧！",
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
            "id": "a6m52",
            "name": "hp",
            "value": "6000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "a6m52",
            "name": "special",
            "value": "[44]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ki61",
            "name": "hp",
            "value": "6500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ki61",
            "name": "special",
            "value": "[44]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ki84",
            "name": "hp",
            "value": "8000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ki84",
            "name": "atk",
            "value": "300000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "a7m",
            "name": "hp",
            "value": "8000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "a7m",
            "name": "special",
            "value": "[6,28,30]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "j2m",
            "name": "hp",
            "value": "7000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "j2m",
            "name": "special",
            "value": "[44]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ne12",
            "name": "hp",
            "value": "1000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ne12",
            "name": "special",
            "value": "[44,73]"
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
        "\t[任务目标]⭐通过当前区域\n⭐击沉信浓号航空母舰（支线boss）\n⭐指挥企业号航空母舰完成任务",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第57关通关",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:MT429boss",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:mission58tsk3",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第57关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第57关通关",
                    "operator": "=",
                    "text": "抵达终点",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第57关任务2",
            "n": 1,
            "text": "击沉信浓号航空母舰（支线boss）",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "MT429boss",
                    "operator": "=",
                    "text": "支线boss击破",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第57关任务3",
            "n": 1,
            "text": "指挥企业号航空母舰完成任务",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "mission58tsk3",
                    "operator": "=",
                    "text": "指挥企业号航空母舰完成任务",
                    "count": "1"
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,12": [
            "帝国と皇军の誇りと名誉，俺の先祖のために，俺は行くぞ，\n天皇陛下万歳！\n✈💥🚢"
        ],
        "8,12": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]显伤后面标有“风”字的是进行神风攻击的飞机，注意躲避！"
        ],
        "7,2": [
            {
                "type": "animate",
                "name": "attention",
                "loc": [
                    7,
                    2
                ]
            },
            {
                "type": "playSound",
                "name": "fighter.mp3"
            },
            {
                "type": "move",
                "loc": [
                    7,
                    2
                ],
                "time": 100,
                "keep": true,
                "steps": [
                    "up:3"
                ]
            },
            {
                "type": "sleep",
                "time": 500
            },
            "\t[远处传来日本军官的怒吼]佐佐木友次！你怎么又回来了！八格牙路！！！！！",
            {
                "type": "animate",
                "name": "ugh",
                "loc": "hero"
            }
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT425",
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
    [  3,646, 22,646,  3, 21,  3, 91,  3,519,723,649,649,645,645],
    [  3,519,724,519,  3, 21,  3, 82,  3,  3, 82,  3,  3,  3,  3],
    [  3,  3, 81,  3,  3,718,  3,573,  0,716,718,  3,646, 22,646],
    [524,524,718,  0,  0,  0,717,  0,721,  3,518,  3,  0,712,  0],
    [  3,  3,  3,  3, 81,  3,  3,  3, 81,  3,518,  3,  3, 81,  3],
    [518,  3,518,  3,695,  0,  3, 21,  0,  3,  3,  3,  0,717,  0],
    [  0,706,  0, 81,  0,719,  3,  0,695,  0,  0, 81,723,648,645],
    [719,  3,  3,  3,  3,  0,716,518,  3,717,  3,  3,  0,645,648],
    [ 21, 21, 21, 22,  3, 81,  3,  3,  3, 21, 21,  3,  3, 82,  3],
    [  3,  3,  3,  3,  3,  0,721,  0,  3,  3,695,  3,518,518,518],
    [  0,719, 21,  3,  0,  0,  3,  0,695,  0,  0,717,  0,711,  0],
    [518,  3,648,  3,716,  3,  3, 86,  3,  3, 81,  3,  3, 81,  3],
    [  0,  3,648,  3,  0,  3,129,  0,601,  3,703,  3,  0,716,  0],
    [711,  3,  3,  3,695,  3,610,  0,610,  3, 21,  3,649,647,649],
    [  0,  0,706, 81,  0,  3,610,  0,610,  3, 21,  3,647,647,647]
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