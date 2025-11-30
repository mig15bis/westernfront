main.floors.MT15=
{
    "floorId": "MT15",
    "title": "阿拉斯",
    "name": "阿拉斯",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass3",
    "bgm": "allthis.mp3",
    "firstArrive": [
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]与本地图右下角机关门内的红色物品交互，可获得新的技能。但需要注意，由于机制问题，你无法在本区域使用新获得的技能，请把握好获取该技能的时机。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,13": [
            {
                "type": "playSound",
                "name": "technology.mp3"
            },
            {
                "type": "function",
                "function": "function(){\nflags.learned[3]=true\n}"
            },
            "\t[系统提示]习得新技能：防空弹幕",
            "\t[系统提示]\f[skill3.jpg,90,50]防空弹幕（50指挥点）：下一次与敌方空军的战斗中，攻击力提升20%（战术技能）",
            "\t[历史来源]\f[skill3.jpg,90,50]二战时期还没有导弹，地面和海上单位的对空攻击全凭防空炮。真实的战场上，瞄准天上的飞机可不像电子游戏一样容易，防空炮的命中率相当感人。因此，人们通常将许多门不同口径的防空炮凑在一起，向天上发射密集的弹幕——精度不够，数量来凑。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT14",
            "loc": [
                7,
                14
            ]
        },
        "7,14": {
            "floorId": "MT16",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "0,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT15_13_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT15_13_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,13": [
            {
                "type": "setValue",
                "name": "flag:door_MT15_13_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,13": [
            {
                "type": "setValue",
                "name": "flag:door_MT15_13_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,14": [
            {
                "type": "setValue",
                "name": "flag:door_MT15_13_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,14": [
            {
                "type": "setValue",
                "name": "flag:door_MT15_13_11",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "13,11": {
            "0": {
                "condition": "flag:door_MT15_13_11==6",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT15_13_11",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 28, 28,207, 82,520,520,141, 91,141,141,347,141,141,141,141],
    [ 28, 28, 28,141,  0,141,141,  0,217,141,217,518, 21,  0,402],
    [141,141,141,141,250,141, 22,141,  0, 81,141,141,141,141, 81],
    [ 27, 27, 27,141,  0,141, 22,141,141,217,141,518,141,  0,  0],
    [ 27, 27,207, 82,  0,141,254,205,141,518,141,520,141,203,141],
    [141,141,141,141,248,141,141, 81,141,244, 81,244,141,  0,  0],
    [345,345,250, 81,  0, 28,141, 81,141,202,141,202,141,141,403],
    [345,345,141,141,141,  0,203,  0,203,  0,141,  0,401,  0,  0],
    [141,141,141,  0,141,141,141,141,141,141,219,141, 81,141,141],
    [ 29, 29,141,141,141, 34,141,219,141, 34,  0,141, 29, 30, 29],
    [ 30, 30,266,  0,  0,  0,205,  0,205,  0, 27,265, 30, 29, 30],
    [141,141,141,243,141,141,141, 82,141,141,141,141,141, 85,141],
    [219,403,141,  0,141,204,265,266,254,244,401,141,345,518,345],
    [217,407, 82, 28,141,219,141, 82,141,141,402,141,518,551,518],
    [219,403,141,  0, 81,  0,141, 93,407,226,403,141,345,518,345]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}