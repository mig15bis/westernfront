main.floors.MT260=
{
    "floorId": "MT260",
    "title": "萨勒诺",
    "name": "萨勒诺",
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
        "\r[yellow]Mission 37 萨莱诺登陆",
        {
            "type": "text",
            "text": "\t[克拉克]\f[clark.png,0,310]虽然失去了奇袭效果，但第五集团军仍然顺利登陆，接下来就是向那不勒斯方向挺进了。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[凯赛林]\f[kasselring.png,0,310]从敌人的登陆过程来看，他们的总指挥官应该水平不高。尽快解决他们，我们需要更多力量阻挡南边的英军。",
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
            "id": "commandos",
            "name": "hp",
            "value": "220000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "2800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "hp",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "atk",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "hp",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "atk",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "150000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "3200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "3300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "3800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak38",
            "name": "hp",
            "value": "34000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak38",
            "name": "atk",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "hp",
            "value": "34000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "atk",
            "value": "45000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "zone",
            "value": "35000",
            "norefresh": true
        },
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
        "\t[任务目标]⭐通过当前区域\n⭐至少击毁10辆豹式坦克\n⭐至少击毁5辆虎式坦克",
        {
            "type": "callBook"
        },
        {
            "type": "if",
            "condition": "(flag:supportUSSR===true)",
            "true": [
                {
                    "type": "playSound",
                    "name": "xinxinmagic.mp3"
                },
                "\t[系统提示]你收到了一份来自苏联的礼物：攻击力+150，指挥点数+300，后勤+300，黄金2000，黄钥匙5把，蓝钥匙2把。附言：感谢你在我们最困难的时期给予的援助。尽管我们意识形态不同，但此刻，我们都在为正义而战！希望战争早日结束！",
                {
                    "type": "setValue",
                    "name": "status:atk",
                    "operator": "+=",
                    "value": "150"
                },
                {
                    "type": "setValue",
                    "name": "status:mana",
                    "operator": "+=",
                    "value": "300"
                },
                {
                    "type": "setValue",
                    "name": "status:mdef",
                    "operator": "+=",
                    "value": "300"
                },
                {
                    "type": "setValue",
                    "name": "status:money",
                    "operator": "+=",
                    "value": "2000"
                },
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
            ],
            "false": [
                {
                    "type": "playSound",
                    "name": "xinxinmagic.mp3"
                },
                "\t[系统提示]似乎有什么事要发生，但与你擦肩而过了。\n（想想以前是不是在某个抉择上出现了偏差？）"
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,10": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]如果你手里没剩多少指挥点数，那么这关最好尽量少用或不用指挥点，不然下个区域容易卡关哦！"
        ]
    },
    "changeFloor": {
        "0,0": {
            "floorId": "MT261",
            "loc": [
                14,
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
    [ 92,404,203, 81,541,150,250,  0,250,  0, 22,150,404,519,519],
    [150,150, 11,150,204,150,150, 81,150,150,390,150, 82,631,631],
    [ 21,203, 21,150,541,150,  0, 11,  0,60032,60032,404, 11,536,536],
    [60032, 81,150,150,60032, 81,369,150,203, 81,  0,  0,150,150,150],
    [410,250,  0,60032,250,  0,150,150,250,150, 11,20031,150,390, 22],
    [ 21,150,204, 11,390,150,631,388,544,150,518,518,150,  0,410],
    [ 21,150,  0,150,150,150,544,60032, 11,150,20031, 11,150,631, 81],
    [631,150,20031,  0,20031,544,203,60032,543,150, 21,250, 82,  0,  0],
    [535,150,204,203, 81,  0, 11,  0, 11,203, 21,150,150,150,150],
    [535,150, 11,150,150,631,631, 86,631,631, 21,250,150,272,543],
    [404, 81,544, 11,203,631,605,  0,605,601,631,  0, 81,265,543],
    [145,145,544,150,537,631,605,  0,605,631, 21,250,145,145,145],
    [154,145,145,150,537,631,605,145,145,145,145,145,145,154,154],
    [154,154,145,145,145,145,145,145,154,154,154,154,154,154,155],
    [155,154,154,154,154,154,154,154,154,155,155,155,155,155,155]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "浅滩"
}