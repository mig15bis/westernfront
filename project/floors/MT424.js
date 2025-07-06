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
            "type": "showStatusBar"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "chapter12.jpg",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 500
        },
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "hideImage",
            "code": 1,
            "time": 500
        },
        "\r[yellow]Mission 58 最后的海战",
        {
            "type": "text",
            "text": "\t[尼米兹]\f[nimitz.png,0,310]航空母舰特混舰队集结完毕，开始空袭，密切注意敌机动向。",
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
            "id": "sdkfz234",
            "name": "hp",
            "value": "85000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "hp",
            "value": "95000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "special",
            "value": "[55,60]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug3a",
            "name": "hp",
            "value": "70000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug3a",
            "name": "atk",
            "value": "23000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4e",
            "name": "hp",
            "value": "90000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4e",
            "name": "atk",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "hp",
            "value": "110000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "atk",
            "value": "28000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4g",
            "name": "hp",
            "value": "110000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4g",
            "name": "atk",
            "value": "33000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4g",
            "name": "special",
            "value": "[55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "special",
            "value": "[40,51,55,59]",
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
            "id": "me109g6",
            "name": "hp",
            "value": "45000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "atk",
            "value": "4000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "special",
            "value": "[6,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "hp",
            "value": "60000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "atk",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "special",
            "value": "[28,30,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "hp",
            "value": "45000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "atk",
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "bom",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "special",
            "value": "[28,36,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "hp",
            "value": "95000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "atk",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "bom",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "special",
            "value": "[28,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "atk",
            "value": "3200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "special",
            "value": "[6,55,63]",
            "norefresh": true
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
        "\t[任务目标]⭐击沉所有敌舰\n⭐击沉白龙号航空母舰（支线boss）\n⭐指挥企业号航空母舰完成任务",
        {
            "type": "callBook"
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
                "name": "fire",
                "loc": "hero"
            },
            {
                "type": "animate",
                "name": "sing",
                "loc": [
                    7,
                    2
                ]
            },
            {
                "type": "move",
                "loc": [
                    7,
                    2
                ],
                "time": 500,
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
    "afterOpenDoor": {
        "7,11": [
            {
                "type": "if",
                "condition": "core.hasEquip('enterprise')",
                "true": [
                    {
                        "type": "text",
                        "text": "\t[小泽治三郎]\f[ozawa.jpg,0,310]那是……企业号！又是那艘该死的企业号！混蛋，她居然还没沉！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "text",
                        "text": "\t[小泽治三郎]\f[ozawa.jpg,0,310]我不相信这世上有不沉的航母！其他军舰已经不重要了，给我集中火力击沉企业号！",
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
                    "\t[系统提示]日军被激怒，战力提升。不过……怕什么？你开的可是传奇航母企业号！"
                ],
                "false": []
            }
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  3,646, 22,646,  3, 21,  3, 91,  3,519,723,649,649,645,645],
    [  3,519,724,519,  3, 21,  3, 82,  3,  3, 82,  3,  3,  3,  3],
    [  3,  3, 81,  3,  3,718,  3,696,  0,716,718,  3,646, 22,646],
    [341,341,718,  0,  0,  0,717,  0,721,  3,518,  3,  0,712,  0],
    [  3,  3,  3,  3, 81,  3,  3,  3, 81,  3,518,  3,  3, 81,  3],
    [518,  3,518,  3,695,  0,  3, 21,  0,  3,  3,  3,  0,717,  0],
    [  0,706,  0, 81,  0,719,  3,  0,695,  0,  0, 81,723,648,645],
    [719,  3,  3,  3,  3,  0,716,518,  3,717,  3,  3,  0,645,648],
    [ 21, 21, 21, 22,  3, 81,  3,  3,  3, 21, 21,  3,  3, 82,  3],
    [  3,  3,  3,  3,  3,  0,721,  0,  3,  3,695,  3,518,518,518],
    [  0,719, 21,  3,  0,610,  3,  0,695,  0,610,717,  0,711,  0],
    [518,  3,648,  3,716,  3,  3, 86,  3,  3, 81,  3,  3, 81,  3],
    [  0,  3,648,  3,  0,  3,129,  0,601,  3,703,  3,  0,716,  0],
    [711,  3,  3,  3,695,  3,613,  0,613,  3, 21,  3,649,647,649],
    [  0,  0,706, 81,  0,  3,613,  0,613,  3, 21,  3,647,647,647]
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