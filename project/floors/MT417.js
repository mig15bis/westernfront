main.floors.MT417=
{
    "floorId": "MT417",
    "title": "佐世保",
    "name": "佐世保",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "sky.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "europe5.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 57 燃烧的天空",
        "\t[盟军指挥官,hero]空中发现敌机，制空编队跟我来，其他人去扫射机场。",
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
        "\t[任务目标]⭐通过当前区域\n⭐消灭区域内所有试作型战机\n⭐消灭区域内所有敌机",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第56关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第56关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第56关通关",
                    "operator": "=",
                    "text": "抵达终点",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第56关任务2",
            "n": 6,
            "text": "消灭区域内所有试作型战机",
            "info": [
                {
                    "type": "checkBlock",
                    "checkBlock": "j7w1",
                    "floorId": [
                        "MT417",
                        "MT418",
                        "MT419",
                        "MT420",
                        "MT421"
                    ],
                    "operator": "<=",
                    "text": "剩余的J7W1试制震电",
                    "count": 0
                },
                {
                    "type": "checkBlock",
                    "checkBlock": "j7w2",
                    "floorId": [
                        "MT417",
                        "MT418",
                        "MT419",
                        "MT420",
                        "MT421"
                    ],
                    "operator": "<=",
                    "text": "剩余的J7W2试制震电改",
                    "count": 0
                },
                {
                    "type": "checkBlock",
                    "checkBlock": "j8m",
                    "floorId": [
                        "MT417",
                        "MT418",
                        "MT419",
                        "MT420",
                        "MT421"
                    ],
                    "operator": "<=",
                    "text": "剩余的试制秋水",
                    "count": 0
                },
                {
                    "type": "checkBlock",
                    "checkBlock": "ne12",
                    "floorId": [
                        "MT417",
                        "MT418",
                        "MT419",
                        "MT420",
                        "MT421"
                    ],
                    "operator": "<=",
                    "text": "剩余的试制橘花",
                    "count": 0
                },
                {
                    "type": "checkBlock",
                    "checkBlock": "ki83",
                    "floorId": [
                        "MT417",
                        "MT418",
                        "MT419",
                        "MT420",
                        "MT421"
                    ],
                    "operator": "<=",
                    "text": "剩余的Ki-83试制重战",
                    "count": 0
                },
                {
                    "type": "checkBlock",
                    "checkBlock": "ki109",
                    "floorId": [
                        "MT417",
                        "MT418",
                        "MT419",
                        "MT420",
                        "MT421"
                    ],
                    "operator": "<=",
                    "text": "剩余的Ki-109重型截击机",
                    "count": 0
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第56关任务3",
            "n": 1,
            "text": "消灭区域内所有敌机",
            "info": [
                {
                    "type": "killAll",
                    "floorId": [
                        "MT417",
                        "MT418",
                        "MT419",
                        "MT420",
                        "MT421"
                    ],
                    "text": "敌人残余"
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,11": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]为了理所当然的增加难度，屑作者把一些“没有量产”的，甚至是“仅停留在图纸阶段”的武器都给成批的放进来了。实际上这个时候小日子的空中力量都没剩多少能正常起飞的。"
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT418",
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
    [645,140,645,  0,140,518,140, 91,140,524,645,524,140,645,  0],
    [646,140,  0,646,140,518,140,699,140,  0,700,  0,140,  0,646],
    [518,140,140,703,140,696,140,696,140,140, 81,140,140,140,703],
    [  0,701, 81,697, 81,649,649,700,  0,649,649,697, 81,  0,  0],
    [140,140,140,  0,140,140,140, 81,140,140,140,  0,140,140,140],
    [  0,646,140,707,140,648,648,696,648,648,140,707,140,518,518],
    [519,  0,140,  0,140,695,140,140,140,695,140,  0,140,518,518],
    [698,  0,140, 82,140,647,647,696,647,647,140, 82,140,140,697],
    [ 81,140,140,  0,140,140,140, 81,140,140,140,  0, 81,696,  0],
    [  0,  0,696,  0,695,695,  0,  0,  0,695,695,  0,140,  0,524],
    [140,140,140,140,140,140,140, 86,140,140,140,140,140,140,140],
    [610,609, 21, 22,  0,  0,  0,  0,601,  0,  0, 22, 21,609,610],
    [610,609, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21,609,610],
    [610,609, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21,609,610],
    [610,609, 21, 22,  0,  0,  0,  0,  0,  0,  0, 22, 21,609,610]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}