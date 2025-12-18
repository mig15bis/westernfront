main.floors.MT158=
{
    "floorId": "MT158",
    "title": "北冰洋",
    "name": "北冰洋",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "wots5.mp3",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:escort",
            "value": "true"
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "value": "800000"
        },
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 24 PQ17的单程票",
        "\t[盟军指挥官,hero]根据情报，敌人的海军和空军已经尽数出动，用不了多久就会和我们发生接触。",
        "\t[盟军指挥官,hero]全体护航舰船注意保护商船队，后援正在赶来的路上。",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "u7",
            "name": "hp",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u7",
            "name": "top",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "hp",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "top",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934",
            "name": "hp",
            "value": "60000",
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
            "id": "z1934a",
            "name": "hp",
            "value": "70000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934a",
            "name": "atk",
            "value": "550",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934a",
            "name": "top",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936",
            "name": "hp",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936",
            "name": "atk",
            "value": "550",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936",
            "name": "top",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "konesburg",
            "name": "hp",
            "value": "160000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "konesburg",
            "name": "atk",
            "value": "700",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "konesburg",
            "name": "top",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "konesburg",
            "name": "special",
            "value": "[6,29,35,42]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "konesburg",
            "name": "n",
            "value": "3",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "hipper",
            "name": "hp",
            "value": "320000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "hipper",
            "name": "atk",
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "hipper",
            "name": "top",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "hipper",
            "name": "special",
            "value": "[1,29,35,51]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "deutschland",
            "name": "hp",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "deutschland",
            "name": "atk",
            "value": "1500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "deutschland",
            "name": "top",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "deutschland",
            "name": "special",
            "value": "[29,31,35,51]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "scharnhost",
            "name": "hp",
            "value": "2500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "scharnhost",
            "name": "atk",
            "value": "1500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "scharnhost",
            "name": "special",
            "value": "[1,31,37]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "hp",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "atk",
            "value": "1400",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "special",
            "value": "[6,28]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "bom",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "hp",
            "value": "14000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "bom",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "special",
            "value": "[28]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "hp",
            "value": "24000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "atk",
            "value": "300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "bom",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "special",
            "value": "[28]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "hp",
            "value": "25000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "atk",
            "value": "300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "top",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "special",
            "value": "[29]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "hp",
            "value": "18000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "atk",
            "value": "300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "top",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "special",
            "value": "[29]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw200",
            "name": "hp",
            "value": "26000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw200",
            "name": "atk",
            "value": "300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw200",
            "name": "bom",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw200",
            "name": "special",
            "value": "[28]",
            "norefresh": true
        },
        {
            "type": "setGlobalValue",
            "name": "lavaDamage",
            "value": 15000
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
        "\t[任务目标]⭐通过当前区域\n⭐友军剩余血量不少于60w\n⭐友军剩余血量不少于40w",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第23关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第23关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第23关通关",
                    "operator": "=",
                    "text": "通过当前区域",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第23关任务2",
            "n": 1,
            "text": "友军剩余血量不少于60w",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "友军血量",
                    "operator": ">=",
                    "text": "友军血量剩余",
                    "count": "600000"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第23关任务3",
            "n": 1,
            "text": "友军剩余血量不少于40w",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "友军血量",
                    "operator": ">=",
                    "text": "友军血量剩余",
                    "count": "400000"
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,9": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]主角抵达本区域最后一张地图的时候就会受剧情影响，与友军分离。为了更快完成任务，也为了更好的向强敌施展拳脚，建议以最快的速度冲向后面的楼层哦！"
        ]
    },
    "changeFloor": {
        "14,7": {
            "floorId": "MT159",
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
    [531, 21, 21,  3,532,  6,532,  3,518,518,  3,  3,532,530,532],
    [ 81,  3,  3,  3,534,216,534,  3,  3,383,  3,532,  6,384,  3],
    [534,255,532,  6,  0,  3,360,393,  0,  0,216,534,  3, 81,  3],
    [534,  3,207, 81,368,  6,  3, 81,  3,  3,  3,569,383,360, 21],
    [534,  3,532,  6,  0,531,  3,531,  3,518,  6,216,  3,  3,  3],
    [  3,  3,  3,  3,216,  3,  6,  0,382,534,360,531,207, 21, 21],
    [570, 21,571,  3,531,360, 81,368,  6,  6, 81,  3,  3,216,  6],
    [  0,  0,  0, 86,531,534,  3,534,360,531,532,533,  3, 81, 94],
    [570, 21,571,  3,  6,216,  3,  3,  3,216,  3,  6,  3,216,  3],
    [  3,601,  3,  3,534,569,382,360,  0,  0,382,531,569,368,534],
    [533,533,368,  3, 81,  3,  3,  3,  3, 81,  3,  3, 81,  3,393],
    [533,  3,  0,360,368,216,530,534,  3,393,534,  3,360,  3,360],
    [  3,  3,  6, 81,  6,534,530,  6,534,  0,360,216,  0,533,531],
    [ 21,  3,  0,255,  0,  3,  3,  3,  3,  3, 82,  3,  6,385,  3],
    [ 21,  0,207,  3, 48, 22,  6,530,530,530,530,  3,533,533,533]
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
    [ 16,  3, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
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