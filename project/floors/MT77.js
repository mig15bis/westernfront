main.floors.MT77=
{
    "floorId": "MT77",
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
            "value": "200000"
        },
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 12 冰冷水域",
        "\t[德军潜艇（无线电截获）,u7]发现大量敌方商船，有大型护航舰队。坐标&%￥#，航向%@#&，汇报完毕。",
        "\t[盟军指挥官,hero]电报上的就是我们的位置。舰队位置已经暴露，所有人打起精神，注意对海和对空搜索，发现敌人立刻汇报。",
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
            "value": "4000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "hp",
            "value": "7000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "atk",
            "value": "100",
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
            "id": "ju87b",
            "name": "bom",
            "value": "4000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "hp",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "atk",
            "value": "100",
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
            "id": "he111",
            "name": "bom",
            "value": "500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw200",
            "name": "hp",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw200",
            "name": "atk",
            "value": "120",
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
            "type": "setEnemy",
            "id": "fw200",
            "name": "bom",
            "value": "500"
        },
        {
            "type": "setGlobalValue",
            "name": "lavaDamage",
            "value": 5000
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
            "type": "setValue",
            "name": "flag:第12关通关",
            "value": "0"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[任务目标]⭐通过当前区域\n⭐友军剩余血量大于2w\n⭐摧毁全部岸防炮",
        {
            "type": "callBook"
        },
        {
            "type": "setTask",
            "name": "第12关任务1",
            "n": 1,
            "text": "通过当前区域",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第12关通关",
                    "operator": "=",
                    "text": "抵达终点",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第12关任务2",
            "n": 1,
            "text": "友军剩余血量大于2w",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "友军血量",
                    "operator": ">=",
                    "text": "友军血量剩余",
                    "count": "20000"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第12关任务3",
            "n": 1,
            "text": "摧毁全部岸防炮",
            "info": [
                {
                    "type": "checkEnemyType",
                    "checkEnemyType": "建筑",
                    "floorId": [
                        "MT77",
                        "MT78",
                        "MT79",
                        "MT80",
                        "MT81"
                    ],
                    "operator": "<=",
                    "text": "岸防炮剩余",
                    "count": 0
                }
            ]
        },
        {
            "type": "choices",
            "text": "\t[突发事件]你有一次机会，可以以个人的名义，将部分物资随船队一同送往苏联进行援助（可能在日后会有回报？）",
            "choices": [
                {
                    "text": "给予援助（10个下午茶）",
                    "action": [
                        {
                            "type": "if",
                            "condition": "(item:tea>=10)",
                            "true": [
                                {
                                    "type": "setValue",
                                    "name": "item:tea",
                                    "operator": "-=",
                                    "value": "10"
                                },
                                {
                                    "type": "setValue",
                                    "name": "flag:supportUSSR",
                                    "value": "true"
                                },
                                "\t[系统提示]援助成功。苏联红军向你表示感谢！"
                            ],
                            "false": [
                                "\t[系统提示]物资不足，还是自己留着吧"
                            ]
                        }
                    ]
                },
                {
                    "text": "还是算了",
                    "action": [
                        "\t[系统提示]无事发生"
                    ]
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flag:hard===1)",
            "true": [
                "\t[系统提示]检测到当前为“神剧难度”，友军血量翻倍",
                {
                    "type": "setValue",
                    "name": "flag:友军血量",
                    "value": "400000"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flag:hard===2)",
            "true": [
                "\t[系统提示]检测到当前为“街机难度”，友军血量+10w",
                {
                    "type": "setValue",
                    "name": "flag:友军血量",
                    "value": "300000"
                }
            ]
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[重要提示！]为模拟历史上北冰洋航线的浮冰威胁，完结版更新后，主角在不小心碰撞到浮冰后会减少1%的当前生命值（默认开启）。想体验相对真实的战场环境的玩家需要小心行动，不想体验的玩家可以在额外设置中关闭这一项。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,8": [
            {
                "type": "text",
                "text": "\t[伊吹萃香]\f[specialnpc.jpg,0,280,100,200]苏联战场的作战强度相当高，所以敌人对于北极护航线的守护力度也相当高。不仅是本关，以后凡是在北极护航线上发生的战役关卡，作战强度都不小。注意合理分配资源！技能该开就开！",
                "pos": [
                    100,
                    280,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[伊吹萃香]\f[specialnpc.jpg,0,280,100,200]如果在本关不合理使用技能并绕开少部分强敌，友军血量是真的会被减到0，更遑论完成任务目标！此外，在历史难度下，如果要达成三星目标，你是无法清怪的，在发现友军血量告急时，要谨慎挑选伤害低、价值高的敌人去攻击，收益最大化！",
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
            "floorId": "MT78",
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
    [527,527,393, 81,216,528,528,528, 82,  0,531,  0,  3,528,528],
    [526,526,  0,  3, 81,  3,  6,  3,  3,530,360, 21,  3,  6,534],
    [  3,  3,  3,  6,  0,529,368,528,  3,  0,216,  0,  3,207,  0],
    [  0,566,528,566,393,  0,  3,  3, 22,  3, 81,  3,  3, 81,  3],
    [395,  3,  6,  3,  3, 81,518,  3,393,  3,  0,393,566,368,525],
    [530,530, 82,  0,216,  0,  6,  0,  0,566,  0,  6, 21,  6,525],
    [  3,  3,  0,567,  3,  0, 21,  3,  3,  3,368,  3, 81,  3,  3],
    [  0,  0,393,  6,  3,  3, 21,  0,382, 21,  0,  3,360,216, 94],
    [  3,601,  0,567,  3,521,  3,  3,  3,  0, 21, 81,  0,  3,  3],
    [530,530, 82,520,393,521, 81,216, 82,207,  3,  3,382,  3,566],
    [  3,  3,  3,  0,  3,521,  6,528,  3,360,360,  6,  0,216,  0],
    [529,529,529, 81,  3,  3,526,527,  3,  3,216,  3,360,  6,518],
    [  3, 21,  6,360,528,368,525,  6, 48,566,  0, 21,  0, 81,518],
    [  3,216,  3,  3, 81,  3,  3,  3,  3,  3,  3,382,  3,  3,572],
    [526,526,526,  3,368,530,566,  6,518,518,529,529,  6, 21,572]
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
    [ 16,  3, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
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