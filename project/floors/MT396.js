main.floors.MT396=
{
    "floorId": "MT396",
    "title": "比利时",
    "name": "比利时",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "snow",
    "bgm": "europe3.mp3",
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
            "function": "function(){\ncore.ui.mission.mis('MISSION 53', '底板行动', core.doAction);\n}"
        },
        "\t[盟军指挥官,hero]该死！这里到处都是敌机！所有人注意掩护其他战机起飞，我们需要以最快的速度缩小战力差距！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "me109k6",
            "name": "hp",
            "value": "6000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109k6",
            "name": "atk",
            "value": "300000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109k6",
            "name": "n",
            "value": "5",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109k6",
            "name": "special",
            "value": "[6,30]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "hp",
            "value": "7000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "atk",
            "value": "360000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "special",
            "value": "[6,30]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "hp",
            "value": "7500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "atk",
            "value": "380000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "special",
            "value": "[6,30]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "hp",
            "value": "7000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "atk",
            "value": "360000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "special",
            "value": "[6,30]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he219",
            "name": "hp",
            "value": "8000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he219",
            "name": "atk",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he219",
            "name": "special",
            "value": "[30]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do335",
            "name": "hp",
            "value": "7000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do335",
            "name": "atk",
            "value": "420000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do335",
            "name": "special",
            "value": "[1,6,30]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me262",
            "name": "hp",
            "value": "8000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me262",
            "name": "atk",
            "value": "800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me262",
            "name": "special",
            "value": "[1,30,38,73]"
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
        "\t[任务目标]⭐在空袭中存活\n⭐击落所有ME262战机\n⭐不惜一切代价摧毁所有V1导弹",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第53关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第53关任务1",
            "n": 1,
            "text": "在空袭中存活",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第53关通关",
                    "operator": "=",
                    "text": "抵达终点",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第53关任务2",
            "n": 1,
            "text": "击落所有ME262战机",
            "info": [
                {
                    "type": "checkBlock",
                    "checkBlock": "me262",
                    "floorId": [
                        "MT396",
                        "MT397",
                        "MT398",
                        "MT399",
                        "MT400"
                    ],
                    "operator": "<=",
                    "text": "剩余的ME262战机",
                    "count": 0
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第53关任务3",
            "n": 1,
            "text": "不惜一切代价摧毁所有V1导弹",
            "info": [
                {
                    "type": "checkBlock",
                    "checkBlock": "v1missile",
                    "floorId": [
                        "MT396",
                        "MT397",
                        "MT398",
                        "MT399",
                        "MT400"
                    ],
                    "operator": "<=",
                    "text": "剩余的V1导弹",
                    "count": 0
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,13": [
            "发生在冬季的空战，墙和地板都是白的，太难蚌了，怎么会有这么sb的作者，你说是吧？"
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT397",
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
    [639,639,639,140,641,641,140, 91,140,642,642,140,641, 22,641],
    [519,639,519,140,  0,  0,140,374,140,  0,  0,140,  0,380,  0],
    [  0,376,  0,140,  0,  0,370, 81,370,  0,  0,140,140, 81,140],
    [140, 82,140,140,371,140,140,140,140,140,371,  0,  0,  0,  0],
    [518,  0,  0,380,  0,  0,644,140,640,644,518,140,140,140,140],
    [518,  0,  0,380,  0,644,  0,644,140,640,518,140,  0,524,  0],
    [140, 81,140,140,140,140,371,140,140,140,140,140, 21,667, 21],
    [  0,373,518,518,140,524,524,524,140, 21, 21,140,  0,374,  0],
    [140, 81,140,140,140, 81,140,140,140, 21, 21,140,140, 81,140],
    [640,  0,  0,  0,371,  0,  0,  0,140,370,370,140,608,  0,608],
    [640,  0,140,  0,371,  0,  0,372,  0,  0,  0, 81,  0,608,  0],
    [140, 81,140, 81,140,140,140, 86,140,140,370,140,140,373,140],
    [  0,370,140,370,  0,140,609,  0,609,140,524,524,140,  0,  0],
    [372,140,140,140,372,140,  0,  0,129,140,140,140,140,140, 82],
    [642, 21, 22, 21,642,140,609,  0,609,140,590,590,518,518,376]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,171,171,171,171,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,171,171,171,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,172,172,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,172,172,  0],
    [  0,  0,  0,  0,  0,  0,172,  0,  0,  0,  0,  0,172,172,  0],
    [  0,  0,  0,  0,  0,172,172,  0,  0,  0,  0,172,172,  0,  0],
    [  0,  0,  0,  0,172,172,172,  0,  0,  0,  0,172,172,  0,  0],
    [171,171,  0,  0,172,172,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [171,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [171,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [171,171,  0,  0,  0,  0,  0,  0,  0,171,171,171,  0,  0,  0],
    [171,  0,  0,  0,  0,  0,  0,  0,171,171,171,171,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "area": "陆地",
    "weather": [
        "snow",
        3
    ]
}