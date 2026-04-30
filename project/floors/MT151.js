main.floors.MT151=
{
    "floorId": "MT151",
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
    "bgm": "europe5.mp3",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:escort",
            "value": "true"
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "value": "600000"
        },
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 22 深海群狼",
        {
            "type": "playSound",
            "name": "Sonar.wav"
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                0,
                7
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "moveHero",
            "time": 200,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "moveHero",
            "time": 0,
            "steps": [
                "down:0"
            ]
        },
        {
            "type": "animate",
            "name": "xinxinwater",
            "loc": [
                0,
                7
            ]
        },
        {
            "type": "moveHero",
            "time": 200,
            "steps": [
                "down:1",
                "right:2"
            ]
        },
        {
            "type": "animate",
            "name": "xinxinwater",
            "loc": [
                3,
                7
            ]
        },
        {
            "type": "animate",
            "name": "xinxinwater",
            "loc": [
                3,
                7
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    3,
                    7
                ]
            ],
            "remove": true,
            "time": 500
        },
        "\t[盟军指挥官,hero]声纳又探测到了多个不明水下信号，我们被德军潜艇包围了！",
        "\t[盟军指挥官,hero]所有舰船注意规避，按Z字路线航行！",
        {
            "type": "text",
            "text": "\t[邓尼茨]\f[donitz.png,0,310]潜艇部队，用我们的“狼群战术”围攻敌人，优先打击他们的商船。同时我希望意大利海空军能够给予我们援助！",
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
            "id": "u7",
            "name": "hp",
            "value": "3800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u7",
            "name": "top",
            "value": "8000",
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
            "value": "3900",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "top",
            "value": "8000",
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
            "value": "60000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd1",
            "name": "atk",
            "value": "300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd1",
            "name": "top",
            "value": "6000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd2",
            "name": "hp",
            "value": "76000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd2",
            "name": "atk",
            "value": "400",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd2",
            "name": "top",
            "value": "6000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd3",
            "name": "hp",
            "value": "64000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd3",
            "name": "atk",
            "value": "400",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd3",
            "name": "top",
            "value": "6000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd4",
            "name": "hp",
            "value": "65000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd4",
            "name": "atk",
            "value": "500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italydd4",
            "name": "top",
            "value": "6000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italycl1",
            "name": "hp",
            "value": "210000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italycl1",
            "name": "atk",
            "value": "600",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italycl1",
            "name": "top",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italycl2",
            "name": "hp",
            "value": "215000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italycl2",
            "name": "atk",
            "value": "800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italycl2",
            "name": "top",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyca1",
            "name": "hp",
            "value": "480000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyca1",
            "name": "atk",
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyca1",
            "name": "top",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyca2",
            "name": "hp",
            "value": "600000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyca2",
            "name": "atk",
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyca2",
            "name": "top",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "veneto",
            "name": "hp",
            "value": "1500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "veneto",
            "name": "atk",
            "value": "1800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "veneto",
            "name": "special",
            "value": "[32,37]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "g50",
            "name": "hp",
            "value": "18000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "g50",
            "name": "atk",
            "value": "1300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c200",
            "name": "hp",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c200",
            "name": "atk",
            "value": "1300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "hp",
            "value": "22000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "atk",
            "value": "300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "bom",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1007",
            "name": "hp",
            "value": "26000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1007",
            "name": "atk",
            "value": "300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1007",
            "name": "bom",
            "value": "6500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934",
            "name": "hp",
            "value": "65000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934",
            "name": "atk",
            "value": "500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934",
            "name": "top",
            "value": "8000"
        },
        {
            "type": "setEnemy",
            "id": "konesburg",
            "name": "hp",
            "value": "210000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "konesburg",
            "name": "atk",
            "value": "800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "konesburg",
            "name": "top",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setGlobalValue",
            "name": "lavaDamage",
            "value": 10000
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
        "\t[任务目标]⭐掩护友军商船抵达目的地\n⭐通关时剩余蓝钥匙不少于5把\n⭐通关时至少持有4000黄金",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第22关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第22关任务1",
            "n": 1,
            "text": "掩护友军商船抵达目的地",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第22关通关",
                    "operator": "=",
                    "text": "通过当前区域",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第22关任务2",
            "n": 1,
            "text": "通关时剩余蓝钥匙不少于5把",
            "info": [
                {
                    "type": "checkItem",
                    "checkItem": "blueKey",
                    "operator": ">=",
                    "text": "持有的蓝钥匙数",
                    "count": 5
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第22关任务3",
            "n": 1,
            "text": "通关时至少持有4000黄金",
            "info": [
                {
                    "type": "checkStatus",
                    "checkStatus": "money",
                    "operator": ">=",
                    "text": "当前黄金数",
                    "count": 4000
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "0,9": [
            {
                "type": "text",
                "text": "\t[伊吹萃香]\f[specialnpc.jpg,0,280,100,200]新技能“狼群”只会在潜艇上出现，当前地图中每一艘潜艇都会为全体潜艇增加攻击力。尝试在最开始使用技能，以较低损耗击沉一些潜艇，可以有效压下其他潜艇的伤害。",
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
            "floorId": "MT152",
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
    [530,  3,531,531,531,  3, 22,  3,530,530,530,  3,  0,212,  0],
    [533,534,  3,234,  3, 21,577,  3,  3, 81,  3,  3,532,  3, 21],
    [210,  3,  3,  0,  3,  3,211, 81,  0,210,  0,216,  0,  3, 21],
    [  0,577,360,  0,  3,532,  0,  3,534,360,534,  3,577,  3,577],
    [534,  0,  3,  0,216,  0,532,  3,  3,216,  3,  3,  0,  3,532],
    [  3,  3,  3,  3,  3,  3,210,  0,360,  0,531, 81,  0,212,532],
    [518,570,570,570,  3,  0,  0,  3,  3,  3,  3,  3,216,  3,  3],
    [  0,  0,  0,216, 86,211,  3,  3,534,  3,533,  3, 81,399, 94],
    [518,570,570,570,  3,  0,360,211,534,  3,533,  3,216,  3,  3],
    [601,  3,  3,  3,  3,  3,397,  3,534,210,533,360,577,521,521],
    [  0, 21,216,531, 81,531,  0,  3,534,  3,  3,210,  3,  3,  3],
    [211,  0,  3,360,  3,  0,360,  3,  3,533,534,531,  0,360,210],
    [ 81,  3,  3, 82,  3,  3,531,531,534,  3,  3, 81,  3,  3,532],
    [ 21,  0,  3,590,588,  3,  3,211,  3,  3, 21,255, 21,  3,532],
    [  0,216, 81, 21,588,  3,534,533,534, 82,518,518,518,  3,532]
],
    "area": "海洋",
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
    [  3, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
],
    "fgmap": [

]
}