main.floors.MT410=
{
    "floorId": "MT410",
    "title": "柏林近郊",
    "name": "柏林近郊",
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
        "\r[yellow]Mission 55 柏林之路",
        "\t[希特勒]那是我的命令！让斯坦纳进攻是我的命令！你们这群懦夫！叛徒！饭桶！你们这些将军都是德国的败类！现在完了，全完了！剩下的只有死亡！",
        {
            "type": "text",
            "text": "\t[艾森豪威尔]\f[eisenhower.png,0,310]全军出击，目标柏林！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[巴顿]\f[patton.png,0,310]我的装甲部队早已饥渴难耐！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[蒙哥马利]\f[montgomary.png,0,310]大英帝国的战士们，想想5年前的伦敦！你们知道现在该怎么做！天佑女王！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[戴高乐]\f[gaulle.png,0,310]虽然我们这次不是主力，但也要让世界看到我们的意志！法兰西万岁！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[朱可夫]\f[zhukov.png,0,310]各位红军战士们，从莫斯科到柏林，我们踩着敌人和同伴的尸体一路走了过来。想想我们的祖国，想想我们被毁的家园，想想那些在战争中逝去的同志们！现在胜利离我们仅一步之遥！向柏林，前进！",
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
            "value": "10000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "95000",
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
            "value": "100000",
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
            "value": "120000",
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
            "value": "8000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "attankinf",
            "name": "atk",
            "value": "250000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me262",
            "name": "hp",
            "value": "6000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me262",
            "name": "atk",
            "value": "300000",
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
            "id": "panzer5d",
            "name": "hp",
            "value": "7000000",
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
            "value": "800000",
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
            "value": "10000000",
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
            "value": "2500000",
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
            "value": "2500000",
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
            "id": "stugtiger",
            "name": "hp",
            "value": "12000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stugtiger",
            "name": "atk",
            "value": "6500000"
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
        "\t[任务目标]⭐见证德意志第三帝国的终结\n⭐消灭或俘获所有敌人\n⭐抢在苏军之前攻克柏林",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第55关通关",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:mission55tsk3",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第55关任务1",
            "n": 1,
            "text": "见证德意志第三帝国的终结",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第55关通关",
                    "operator": "=",
                    "text": "战争结束",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第55关任务2",
            "n": 1,
            "text": "消灭或俘获所有敌人",
            "info": [
                {
                    "type": "killAll",
                    "floorId": [
                        "MT410",
                        "MT411",
                        "MT412",
                        "MT413",
                        "MT414"
                    ],
                    "text": "敌人残余"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第55关任务3",
            "n": 1,
            "text": "抢在苏军之前攻克柏林",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "mission55tsk3",
                    "operator": "=",
                    "text": "不可能完成的任务",
                    "count": "1"
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "3,6": [
            {
                "type": "text",
                "text": "\t[伊吹萃香]\f[specialnpc.jpg,0,280,100,200]你以为这是最后一关了？某种意义上是的。不过，其实打完这关以后既可以结算，也可以选择进入一个附加章节。所以想挑战附加关的可以留点资源，别用太干净了哦！",
                "pos": [
                    100,
                    280,
                    380
                ]
            }
        ]
    },
    "changeFloor": {
        "14,7": {
            "floorId": "MT411",
            "loc": [
                0,
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
    [149,149,149,149,149, 22,149,639,639,639,149, 21,149, 22,641],
    [149,149,149,149,149,641,149,524,376,524,149, 21,149,641,641],
    [609,149,149,149,149,641,149,149, 82,149,149,250,149,  0,227],
    [609,609,609,149,149,275,149,  0,640,  0,149,  0,149,149, 81],
    [609,609,609,609,149,  0, 81,275,  0,227,  0,250, 81,279,  0],
    [590,590,519,519,149,  0,149,149,250,149,  0,149,149,  0,640],
    [  0,  0,  0,601,149,  0,149, 21, 21,149,227,149,149,149,149],
    [  0,  0,  0,  0, 86,  0,149,149,149,149,640, 82,201,266, 94],
    [  0,  0,  0,  0,149,  0,149, 21, 21,149, 81,149,149,149,149],
    [590,590,519,519,149,  0,149,250,149,149,  0,391,  0,149,  0],
    [609,609,609,609,149,  0,275,  0,375,  0,250,  0,640, 81,265],
    [609,609,609,149,149,149,149,149, 81,149,149, 81,149,149,642],
    [609,149,149,149,149,639,  0,149,  0,279,149,265,640,149,642],
    [149,149,149,149,149,639,228, 82,664,149,149,149,640,149,642],
    [149,149,149,149,149,639,  0,149,279,642,641,149,640,149, 22]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}