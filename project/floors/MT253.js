main.floors.MT253=
{
    "floorId": "MT253",
    "title": "西西里岛",
    "name": "西西里岛",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "cao7.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(!['eagle', 'raider', 'illustrious','essex','enterprise'].includes(core.getEquip(3)))",
            "true": [],
            "false": [
                {
                    "type": "unloadEquip",
                    "pos": 3
                }
            ]
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]进入下一张地图后，将触发事件，所有意军投降。后面的地图中，共有32支意军部队，如果想完成任务，前面至少要留18支意军。敌人投降后与其战斗即为“俘获”。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,5": [
            "空降兵回归队伍，攻击力+10",
            {
                "type": "setValue",
                "name": "flag:mission36task2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "status:atk",
                "operator": "+=",
                "value": "10"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "12,1": [
            "空降兵回归队伍，指挥点+50",
            {
                "type": "setValue",
                "name": "flag:mission36task2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "status:mana",
                "operator": "+=",
                "value": "50"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "14,11": [
            "空降兵回归队伍，黄钥匙+1",
            {
                "type": "setValue",
                "name": "flag:mission36task2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:yellowKey",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "8,10": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]本地图以及之前几张地图中的所有地面部队、C202战斗机（\\i[c202]）和SM79轰炸机（\\i[sm79]）属于意大利部队，留怪的时候可以注意一下。"
        ]
    },
    "changeFloor": {
        "10,14": {
            "floorId": "MT252",
            "loc": [
                4,
                0
            ]
        },
        "2,0": {
            "floorId": "MT254",
            "loc": [
                2,
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
    [ 21,363, 91,152,537,537,537,152, 21, 21,152,535,535,535,149],
    [146,146,366,152,152,152,405,152,  0, 21,152,  0,550,  0,149],
    [ 21,146,  0, 81,571,571,571,152,383,152,152,152, 82,149,149],
    [365, 81,207,152,369,152,152,152,539,539,152,518,518,518,518],
    [ 21,146,  0,152,539,405,539,392,149,371,152,152,152,589,149],
    [146,146,550,152,152,152,571,147,369,537,537,152,518,518,518],
    [539,363,  0,152,537,537,147,147, 81,152,152,152,518,589,518],
    [146,363,152,152,  0,537,147,539,364,  0,  0,  0,149,207,149],
    [539,363, 81,369,405,  0,147,147,147,147,362,147,579, 81,369],
    [146,392,146, 81,147,147,147,522,147,538,538,147,  0,152,536],
    [538,146,146,  0,365,  0, 81,371,601,362,147,147,364,152, 22],
    [538,366, 81,538,150,365,149,539,383,363, 81,363,  0,152,550],
    [538,146,146,538,538,  0,149,571,539,149,362,149, 81,152,152],
    [146,146, 22,149,149,149,149,149, 82,149,  0,149,369,152, 22],
    [535,535,535,535,392,411, 81,579,207,149, 93,149,  0,362, 21]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}