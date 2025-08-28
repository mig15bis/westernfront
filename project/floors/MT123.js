main.floors.MT123=
{
    "floorId": "MT123",
    "title": "撒哈拉沙漠",
    "name": "撒哈拉沙漠",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "desert1.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 19 战斧行动",
        {
            "type": "text",
            "text": "\t[奥金莱克]\f[auchinleck.png,0,310]战斧行动已经开始。坦克部队在前面开路，冲散敌人的防御！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[隆美尔]\f[rommel.png,0,310]反坦克阵地已经就位，现在将英国人引入我们设置的圈套里，我们来给他们上一堂终身难忘的课！",
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
            "id": "commandos",
            "name": "hp",
            "value": "35000"
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "1500"
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "special",
            "value": "[4,55]"
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "hp",
            "value": "28000"
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "atk",
            "value": "7000"
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "special",
            "value": "[55]"
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "hp",
            "value": "28000"
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "atk",
            "value": "4000"
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "32000"
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "1800"
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "28000"
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "1800"
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "hp",
            "value": "28000"
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "2000"
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "special",
            "value": "[6,55]"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "hp",
            "value": "8000"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "atk",
            "value": "2000"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "special",
            "value": "[4,55,60]"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "hp",
            "value": "8000"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "atk",
            "value": "10000"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "special",
            "value": "[55,60]"
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "hp",
            "value": "8000"
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "atk",
            "value": "2500"
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "special",
            "value": "[5,55,60]"
        },
        {
            "type": "setEnemy",
            "id": "panzer35t",
            "name": "hp",
            "value": "8000"
        },
        {
            "type": "setEnemy",
            "id": "panzer35t",
            "name": "atk",
            "value": "7000"
        },
        {
            "type": "setEnemy",
            "id": "panzer35t",
            "name": "special",
            "value": "[55,60]"
        },
        {
            "type": "setEnemy",
            "id": "panzer38t",
            "name": "hp",
            "value": "10000"
        },
        {
            "type": "setEnemy",
            "id": "panzer38t",
            "name": "atk",
            "value": "8000"
        },
        {
            "type": "setEnemy",
            "id": "panzer38t",
            "name": "special",
            "value": "[55,60]"
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "hp",
            "value": "6000"
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "atk",
            "value": "10000"
        },
        {
            "type": "setEnemy",
            "id": "panzer4c",
            "name": "hp",
            "value": "8000"
        },
        {
            "type": "setEnemy",
            "id": "panzer4c",
            "name": "atk",
            "value": "12000"
        },
        {
            "type": "setEnemy",
            "id": "panzer4e",
            "name": "hp",
            "value": "6000"
        },
        {
            "type": "setEnemy",
            "id": "panzer4e",
            "name": "atk",
            "value": "12000"
        },
        {
            "type": "setEnemy",
            "id": "stug3a",
            "name": "hp",
            "value": "4000"
        },
        {
            "type": "setEnemy",
            "id": "stug3a",
            "name": "atk",
            "value": "10000"
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "6000"
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "12000"
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "range",
            "value": "3"
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "8000"
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "special",
            "value": "[55,59]"
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "hp",
            "value": "7000"
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "atk",
            "value": "2500"
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "special",
            "value": "[6,55]"
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "hp",
            "value": "10000"
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "atk",
            "value": "5000"
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "special",
            "value": "[55]"
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "hp",
            "value": "6500"
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "bom",
            "value": "12000"
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "special",
            "value": "[28,36,55]"
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "hp",
            "value": "15000"
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "atk",
            "value": "300"
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "bom",
            "value": "3000"
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "special",
            "value": "[28,55]"
        },
        {
            "type": "setGlobalValue",
            "name": "lavaDamage",
            "value": 10000
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
        "\t[任务目标]⭐通过当前关卡\n⭐通关时至少持有20个“下午茶”道具\n⭐通关时剩余指挥点数达到100",
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,0": {
            "floorId": "MT124",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "7,11": [
            {
                "type": "if",
                "condition": "(flag:hard===1)",
                "true": [
                    "\t[系统提示]检测到当前为“神剧难度”，获得20瓶下午茶、10黄5蓝。",
                    {
                        "type": "setValue",
                        "name": "item:tea",
                        "operator": "+=",
                        "value": "20"
                    },
                    {
                        "type": "setValue",
                        "name": "item:yellowKey",
                        "operator": "+=",
                        "value": "10"
                    },
                    {
                        "type": "setValue",
                        "name": "item:blueKey",
                        "operator": "+=",
                        "value": "5"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:hard===2)",
                "true": [
                    "\t[系统提示]检测到当前为“街机难度”，获得5黄2蓝",
                    {
                        "type": "setValue",
                        "name": "item:yellowKey",
                        "operator": "+=",
                        "value": "5"
                    },
                    {
                        "type": "setValue",
                        "name": "item:blueKey",
                        "operator": "+=",
                        "value": "2"
                    }
                ]
            }
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [150,534,150,534,203,530,150, 91,150,  0, 11,533,  0,533,  0],
    [150,534,402,534,150,530,150,407,150,403,150,150,150,254,150],
    [150, 81,150,150,150,150,150, 11,150,  0,526,150,530,533,530],
    [  0,  0, 11,150,531,  0,250,253,250, 81,150,150,150,150,150],
    [ 81,150,  0,250,  0,150,150, 11,150,527,533,150,  0, 11,204],
    [250,150,150,  0,265,534,150,528,150,528,532,254,531,150,532],
    [531,531,150,150,150, 11,150,203,150,150,150, 81,  0,150,527],
    [530,150,150,  0,254,534,150,203,150,533,590,150,265,150,150],
    [530,150,  0,528,150,534,150,528,150,  0,528,150,  0, 81,250],
    [150,150, 81,150,150,150,150, 11,150,204,150,150,531,150,518],
    [533, 11,  0,203,  0,  0,203,534,203,  0,  0,253,  0,150,518],
    [150,150,150, 81,150,150,150, 86,150,150,150, 81,150,150,150],
    [521,521,520,401,150, 21,569,  0,569, 21,150,401,520,521,521],
    [ 82,150,150,150,150, 21,569,  0,569, 21,150,150,150,150, 82],
    [518,518,518,570,150, 21,569,  0,569, 21,150,570,518,518,518]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}