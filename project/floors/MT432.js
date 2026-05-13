main.floors.MT432=
{
    "floorId": "MT432",
    "title": "大阪",
    "name": "大阪",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "cao7.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 58 血腥海岸线",
        {
            "type": "text",
            "text": "\t[麦克阿瑟]\f[macarthur.png,0,310]冲上海岸，就像在菲律宾那时候一样！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[尼米兹]\f[nimitz.png,0,310]大阪没有什么纵深，舰队的炮火支援能够覆盖。放心进攻吧。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[板垣征四郎]\f[itagaki.jpg,0,310]大日本帝国不会向任何国家屈服，无论是美国还是苏联！发起冲锋，把美国人赶下海去！天皇万岁！",
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
            "id": "ki100",
            "name": "hp",
            "value": "12000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ki100",
            "name": "atk",
            "value": "350000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "j7w1",
            "name": "hp",
            "value": "12000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "j7w1",
            "name": "atk",
            "value": "700000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "j7w2",
            "name": "hp",
            "value": "12000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "j7w2",
            "name": "atk",
            "value": "700000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ne12",
            "name": "hp",
            "value": "3000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "d4y",
            "name": "hp",
            "value": "10000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "d4y",
            "name": "top",
            "value": "6000000"
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
        "\t[任务目标]⭐占领大阪\n⭐消灭所有地面目标\n⭐消灭所有空中目标",
        {
            "type": "callBook"
        },
        "\t[系统提示]后面没有海战环节了，所以也不会再有橙色宝石！",
        {
            "type": "setValue",
            "name": "flag:第58关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第58关任务1",
            "n": 1,
            "text": "占领大阪",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第58关通关",
                    "operator": "=",
                    "text": "抵达终点",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第58关任务2",
            "n": 6,
            "text": "消灭所有地面目标",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "步兵",
                    "floorId": [
                        "MT432",
                        "MT433",
                        "MT434",
                        "MT435",
                        "MT436"
                    ],
                    "operator": "<=",
                    "text": "残余步兵",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "中坦",
                    "floorId": [
                        "MT432",
                        "MT433",
                        "MT434",
                        "MT435",
                        "MT436"
                    ],
                    "operator": "<=",
                    "text": "残余中型坦克",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "重坦",
                    "floorId": [
                        "MT432",
                        "MT433",
                        "MT434",
                        "MT435",
                        "MT436"
                    ],
                    "operator": "<=",
                    "text": "残余重型坦克",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "反坦克炮",
                    "floorId": [
                        "MT432",
                        "MT433",
                        "MT434",
                        "MT435",
                        "MT436"
                    ],
                    "operator": "<=",
                    "text": "残余反坦克炮",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "榴弹炮",
                    "floorId": [
                        "MT432",
                        "MT433",
                        "MT434",
                        "MT435",
                        "MT436"
                    ],
                    "operator": "<=",
                    "text": "残余榴弹炮",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "高射炮",
                    "floorId": [
                        "MT432",
                        "MT433",
                        "MT434",
                        "MT435",
                        "MT436"
                    ],
                    "operator": "<=",
                    "text": "残余高射炮",
                    "count": 0
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第58关任务3",
            "n": 2,
            "text": "消灭所有空中目标",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "战斗机",
                    "floorId": [
                        "MT432",
                        "MT433",
                        "MT434",
                        "MT435",
                        "MT436"
                    ],
                    "operator": "<=",
                    "text": "残余战斗机",
                    "count": 0
                },
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "俯冲轰炸机",
                    "floorId": [
                        "MT432",
                        "MT433",
                        "MT434",
                        "MT435",
                        "MT436"
                    ],
                    "operator": "<=",
                    "text": "残余俯冲轰炸机",
                    "count": 0
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,13": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]坏消息是，这帮鬼子都跟超雄一样，只要靠近它们就会直接冲上来板载。好消息是，鬼子极度缺乏有效的反坦克武器，哪怕是在那些“决战武器”里面，能打穿你的敌人也极其稀少。"
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT433",
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
    [150,645,646,645,150, 22,150, 91,150,645,648,700,648,645,150],
    [150,647,646,647,150,519,150,750,150,150,150, 82,150,150,150],
    [150,  0,706,  0,150,519,150,690,150,646,646,747,646,646,150],
    [150,150, 82,150,150,684,150, 82,150,150,150, 81,150,150,150],
    [518,683,  0,747,691,685,  0,689,  0,684,  0,685,  0,683,689],
    [150,150,150,150,150, 81,150,150,150,150,150,150,749,150, 81],
    [648,648,150,  0,518,518, 21,150, 21,518,  0, 81,684,150,693],
    [647,647,150,689,150,150,150,150,150,150,689,150, 21,150,648],
    [700,150,150,  0,749,150, 21,150, 21,  0,690,150,150,150,648],
    [747,690, 81,684,  0,  0,683,  0,683,150, 81,150, 21,150,645],
    [150,150,150,150, 81,150,150, 86,150,150,  0,150, 21,150,645],
    [145,145,647,518,690,150,610,  0,610,150,  0,689, 22,145,145],
    [145,145,145,647,  0,150,610,  0,610,150,145,145,145,145,145],
    [145,145,145,145,145,145,601,  0,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,  0,145,145,145,145,145,145,145]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "浅滩"
}