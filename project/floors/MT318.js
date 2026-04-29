main.floors.MT318=
{
    "floorId": "MT318",
    "title": "诺曼底—奥马哈海滩",
    "name": "诺曼底—奥马哈海滩",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "farthestend.mp3",
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
            "type": "showui"
        },
        "\r[yellow]Mission 43 登陆日——奥马哈海滩",
        "\t[盟军指挥官,hero]敌军占据了有利地形，这让友军无法取得更多进展。",
        "\t[盟军指挥官,hero]把悬崖上居高临下的敌军全部清理掉，就可以解除友军的困境。",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "hp",
            "value": "2000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "18000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "hp",
            "value": "1800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "atk",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "zone",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "hp",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "atk",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "1800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "hp",
            "value": "1800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "atk",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "1800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "zone",
            "value": "1500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "hp",
            "value": "1700000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "24000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "zone",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "attankinf",
            "name": "hp",
            "value": "1700000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "attankinf",
            "name": "atk",
            "value": "90000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "hp",
            "value": "1200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak40",
            "name": "atk",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer150",
            "name": "hp",
            "value": "1200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer150",
            "name": "atk",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4h",
            "name": "hp",
            "value": "1200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4h",
            "name": "atk",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4h",
            "name": "special",
            "value": "[67,69]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "hp",
            "value": "1200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "atk",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5g",
            "name": "hp",
            "value": "1400000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5g",
            "name": "atk",
            "value": "140000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "hp",
            "value": "1600000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "atk",
            "value": "150000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug4",
            "name": "hp",
            "value": "1200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug4",
            "name": "atk",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug4",
            "name": "zone",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "1200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "180000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "25000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "wildwind",
            "name": "hp",
            "value": "1000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "wildwind",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "hp",
            "value": "1400000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "atk",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "zone",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "gunbunker",
            "name": "hp",
            "value": "1400000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "gunbunker",
            "name": "atk",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "gunbunker",
            "name": "zone",
            "value": "50000"
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
        "\t[任务目标]⭐通过当前区域\n⭐破坏所有防御建筑\n⭐摧毁所有装甲部队",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第43关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第43关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第43关通关",
                    "operator": "=",
                    "text": "通过当前区域",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第43关任务2",
            "n": 1,
            "text": "破坏所有防御建筑",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "建筑",
                    "floorId": [
                        "MT318",
                        "MT319",
                        "MT320",
                        "MT321",
                        "MT322"
                    ],
                    "operator": "<=",
                    "text": "防御建筑剩余",
                    "count": 0
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第43关任务3",
            "n": 4,
            "text": "摧毁所有装甲部队",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "轻坦",
                    "floorId": [
                        "MT318",
                        "MT319",
                        "MT320",
                        "MT321",
                        "MT322"
                    ],
                    "operator": "<=",
                    "text": "敌方轻型坦克剩余",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "中坦",
                    "floorId": [
                        "MT318",
                        "MT319",
                        "MT320",
                        "MT321",
                        "MT322"
                    ],
                    "operator": "<=",
                    "text": "敌方中型坦克剩余",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "重坦",
                    "floorId": [
                        "MT318",
                        "MT319",
                        "MT320",
                        "MT321",
                        "MT322"
                    ],
                    "operator": "<=",
                    "text": "敌方重型坦克剩余",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "坦歼",
                    "floorId": [
                        "MT318",
                        "MT319",
                        "MT320",
                        "MT321",
                        "MT322"
                    ],
                    "operator": "<=",
                    "text": "敌方坦克歼击车剩余",
                    "count": 0
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "10,0": {
            "floorId": "MT319",
            "loc": [
                4,
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
    [40049,40049,40049,40049,40049,40050,40049,40049,40050,40049, 91,40049,40049,40049,40050],
    [40049,40049,40049,40049,40049,40050,40049,40049,40050,40057,250,40057,40057,40057,40058],
    [40049,40049,40049,40049,40049,40050,40057,40057,40058,631, 82,631,543,275,543],
    [40057,40057,40057,40057,40057,40058,638,631,518,631,632,631,631, 11,631],
    [631,631,637,218,215, 81,204, 11,518,631, 11,218,544,275,341],
    [631,607,631,631, 81,631,631,631,236, 81,544,631,631, 81,631],
    [607,580,607,631,203,605,605,631,248,631,631, 21, 21,215,518],
    [  0,  0,  0, 86,275,631, 11,541, 82,518,518,631,204,631,518],
    [607, 22,607,631, 11,215,631,204,541,631, 11,631, 11,631,631],
    [631,607,631,  0,631,250,631, 11,631,  0,265,341,265,544,544],
    [606,631,631, 11,631, 81,631,250,544, 81,631,631,631,631, 81],
    [606, 11,203,203, 11, 21, 11,544,631, 11,631,544,203,544,275],
    [631,631, 81,631, 21,631, 81,631,542,203,542,631,542,145,145],
    [145,145,203,541,631,540,266,540,631,145,145,145,145,145,145],
    [145,145,145,541,631,518,518,518,145,145,145,145,145,145,145]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40089,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40089,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "area": "浅滩"
}