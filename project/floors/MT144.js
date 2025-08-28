main.floors.MT144=
{
    "floorId": "MT144",
    "title": "贾扎拉防线",
    "name": "贾扎拉防线",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "cao1.mp3",
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
            "type": "setValue",
            "name": "flag:dry",
            "value": "true"
        },
        "\r[yellow]Mission 22 贾扎拉防线",
        {
            "type": "text",
            "text": "\t[奥金莱克]\f[auchinleck.png,0,310]指挥官阁下，请务必挡住敌人的进攻。如果防线失守，我们就不得不全线撤退了。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[奥金莱克]\f[auchinleck.png,0,310]还有，作战时请注意尽可能保护好防线内的设施，尤其不要踩到我们自己埋的地雷上！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[隆美尔]\f[rommel.png,0,310]这是一次十分冒险的行动，我将亲临前线随主力部队一起战斗。如果不想全军覆没的话，我希望各位都能全力一搏！",
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
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        {
            "type": "setEnemy",
            "id": "italyinf1",
            "name": "hp",
            "value": "50000"
        },
        {
            "type": "setEnemy",
            "id": "italyinf1",
            "name": "atk",
            "value": "1000"
        },
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "hp",
            "value": "50000"
        },
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "atk",
            "value": "1100"
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "hp",
            "value": "45000"
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "atk",
            "value": "1300"
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "hp",
            "value": "40000"
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "atk",
            "value": "2000"
        },
        {
            "type": "setEnemy",
            "id": "ab41",
            "name": "hp",
            "value": "18000"
        },
        {
            "type": "setEnemy",
            "id": "ab41",
            "name": "atk",
            "value": "1800"
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "hp",
            "value": "22000"
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "atk",
            "value": "2500"
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "hp",
            "value": "15000"
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "atk",
            "value": "10000"
        },
        {
            "type": "setEnemy",
            "id": "g50",
            "name": "hp",
            "value": "8000"
        },
        {
            "type": "setEnemy",
            "id": "g50",
            "name": "atk",
            "value": "1300"
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "hp",
            "value": "16000"
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "atk",
            "value": "500"
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "bom",
            "value": "6000"
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "56000"
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "2000"
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "hp",
            "value": "22000"
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "atk",
            "value": "2400"
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "hp",
            "value": "10000"
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "atk",
            "value": "1500"
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "hp",
            "value": "13000"
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "atk",
            "value": "2500"
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "hp",
            "value": "13000"
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "atk",
            "value": "1800"
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "special",
            "value": "[6,55]"
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "hp",
            "value": "8000"
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "atk",
            "value": "300"
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "bom",
            "value": "10000"
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "hp",
            "value": "19000"
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "atk",
            "value": "300"
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "special",
            "value": "[28,55]"
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "bom",
            "value": "6500"
        },
        "\t[系统提示]敌人战力重置完成",
        "\t[系统提示]即将进入存档界面",
        {
            "type": "callSave"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[任务目标]⭐通过当前关卡\n⭐通关时至少保留20个地雷\n⭐击败梅塞（支线boss战）",
        {
            "type": "callBook"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]由于本区域任务要求是保留地雷，建议提前用“浏览地图”探查前方路线，确定绕路方案。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,7": {
            "floorId": "MT145",
            "loc": [
                14,
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
    [150,530,530,207,530,530,150,518,150,531,531,531,206,150,534],
    [150,150,150, 81,150,150,150,224,150,150,150,150, 81,150,361],
    [521,362,  0,577,  0,  0,362,  0,362,  0, 11,  0,362,  0,  0],
    [150,150,  0,150, 11,150,150,532,150, 81,150,150,150, 81,150],
    [533,150, 11,150,  0,361,518,150,150,533,361,  0, 11, 21,534],
    [533,362,  0,150,362,150,150,150,521,150,534,150,150,150,150],
    [150,150,250,150,  0,577, 11,  0,  0,361,  0,150,570,  0,570],
    [ 92, 82,405,250,518,  0,150,362,150,150,  0, 86,  0,  0,  0],
    [150,150,250,150,150,362,150,521,521,150, 81,150,570,  0,570],
    [  0, 11,  0,150, 21, 21,150,150,  0, 11,  0,150,150,150,150],
    [363,150,150,150,150,150,534,150,  0,150,  0,361,  0,150,530],
    [  0,518,  0,224,  0,150,534,150,362,150,150, 11,  0,150,530],
    [150,150,150,150,577, 81,533,363,534,531,150,150,362, 81,401],
    [ 11, 21, 21,150,  0,150,534,150,531,532,150,  0,534,150,534],
    [ 21, 21,364, 81,  0,150,534,150,532, 11,150,533,  0,150,534]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}