main.floors.MT202=
{
    "floorId": "MT202",
    "title": "阿尔及利亚",
    "name": "阿尔及利亚",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "bgm7.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 30 火炬行动",
        {
            "type": "text",
            "text": "\t[艾森豪威尔]\f[eisenhower.png,0,310]“火炬行动”已经开始，这是我们美军在西线的第一次亮相，请各位务必认真对待。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[艾森豪威尔]\f[eisenhower.png,0,310]尽快巩固滩头阵地，英美两国海军的舰炮和航母舰载机都会支援你们的登陆行动。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[巴顿]\f[patton.png,0,310]指挥官阁下，希望你能尽快搞定那边的敌人，然后与我的部队会合。",
            "pos": [
                100,
                300,
                380
            ]
        },
        "（注：本关中，维希法国军队由意大利军队友情出演）",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "hp",
            "value": "250000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "atk",
            "value": "2300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "hp",
            "value": "240000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "atk",
            "value": "2600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "special",
            "value": "[1,6]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "n",
            "value": "2",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "hp",
            "value": "220000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "special",
            "value": "[1]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "atk",
            "value": "2300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "special",
            "value": "[6]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "n",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "atk",
            "value": "2600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "special",
            "value": "[6]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "hp",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "atk",
            "value": "3500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "special",
            "value": "[6,60]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "n",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "atk",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "p2640",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "p2640",
            "name": "atk",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "p2640",
            "name": "special",
            "value": "[52]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "hp",
            "value": "28000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "atk",
            "value": "25000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "special",
            "value": "[40]",
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
            "value": "2800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c200",
            "name": "special",
            "value": "[6]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c200",
            "name": "n",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c202",
            "name": "hp",
            "value": "45000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c202",
            "name": "atk",
            "value": "3400",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c202",
            "name": "special",
            "value": "[6]"
        },
        {
            "type": "setGlobalValue",
            "name": "lavaDamage",
            "value": 30000
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
        "\t[任务目标]⭐通过当前区域\n⭐肃清海滩上的敌人\n⭐通关时至少持有80下午茶",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第29关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第29关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第29关通关",
                    "operator": "=",
                    "text": "通过当前区域",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第29关任务2",
            "n": 1,
            "text": "肃清海滩上的敌人",
            "info": [
                {
                    "type": "killAll",
                    "floorId": [
                        "MT202",
                        "MT203",
                        "MT204"
                    ],
                    "text": "海滩上的敌人剩余"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第29关任务3",
            "n": 1,
            "text": "通关时至少持有80下午茶",
            "info": [
                {
                    "type": "checkItem",
                    "checkItem": "tea",
                    "operator": ">=",
                    "text": "当前持有的下午茶",
                    "count": 80
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,13": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]前方进入内陆，进入下一张地图后，海军类装备将会全员撤退。请确认不需要海军支援后再继续前进。",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "8,2": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]登陆战的地点一般位于浅滩，并且可以获得海军的支援。可一旦深入内陆，海军装备就会撤退，不再提供支援。海军的很多技能虽然不会在登陆战中生效，但光是提供的基础数值加成就相当可观了，所以在深入内陆之前建议把海滩上的敌人清理一下哦！",
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]除此之外，从现在开始，美国军队加入战局，还带来了一种新的物资，名叫\r[yellow]可乐\\i[cola]\r。这种东西虽然数量比较少，但一瓶就可以提供50%的生命回复和大量的临时后勤值，在战场上看见了就不要放过哦！"
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "MT203",
            "loc": [
                14,
                7
            ]
        },
        "14,7": {
            "floorId": "MT204",
            "loc": [
                0,
                7
            ]
        },
        "7,14": {
            "floorId": "MT205",
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
    [145,145,145,145,145,145,145,145,145,145,145,145,145,145,145],
    [539,145,145,145,145,145,145,145,145,145,145,145,145,145,145],
    [  0,366, 21, 21,150,145,145,145,601,571,150,538,150,518,518],
    [  0,150, 21, 22,150,571, 21,  0, 21,571,150,362,150,363,518],
    [ 81,150,150,150,150,571, 21,  0, 21,571,150, 11,150, 81,150],
    [538,578,  0, 81,538,150,150, 86,150,150,150,  0, 11,537,537],
    [150,150,  0,150,538, 11,362,364,  0,362,  0,150,  0,150,150],
    [ 92,363, 81,150,150,363,150, 11,150,150, 11,150,392,363, 94],
    [150,150, 11,150,392,  0,150,362,536,536,362,150, 81,150,150],
    [539,150,405,392,150,150,150,150,150,150,150,570, 11,578,150],
    [539,362,  0,150,  0, 11,521,366, 11,  0,570,405,150,539,539],
    [539,150,521, 81,362,150,150, 81,150,150,150, 81,150, 81,150],
    [150,150,150,150, 11,150,150, 82,150,  0,  0,365,150,365,537],
    [535,536,  0,150,579,  0,150,  0,150,392,150,150,150,150,537],
    [535,536,365, 81,  0,535,150, 93,150,538,538,363, 81,363,537]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "浅滩"
}