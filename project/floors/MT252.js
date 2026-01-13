main.floors.MT252=
{
    "floorId": "MT252",
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
            "type": "text",
            "text": "\t[蒙哥马利]\f[montgomary.png,0,310]我军在卡塔尼亚遭遇顽强阻击，短时间内难以突破防御。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[巴顿]\f[patton.png,0,310]英国人被拖住了，那我们就可以抢在他们之前拿下巴勒莫！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[巴顿]\f[patton.png,0,310]正好，我们已接近空降部队的任务地点，他们已经差不多完成了各自的任务，现在可以去与他们会合，扩充现有战斗力。",
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
        "\t[系统提示]与地图中没有显伤的友军空降兵进行互动，可以获得属性奖励。",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]进入下一张地图后，战列舰退出战斗",
        {
            "type": "unloadEquip",
            "pos": 2
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "3,11": [
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
        "2,3": [
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
        "11,3": [
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
        "14,7": [
            "空降兵回归队伍，血限+1000",
            {
                "type": "setValue",
                "name": "flag:mission36task2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "status:hpmax",
                "operator": "+=",
                "value": "1000"
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "12,14": {
            "floorId": "MT251",
            "loc": [
                2,
                0
            ]
        },
        "4,0": {
            "floorId": "MT253",
            "loc": [
                10,
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
    [540,152,518,142, 91,142, 21, 21,143,366,537,537,143,143, 22],
    [541,152,207, 81,579,142,405,143,143, 81,143,392,143, 21, 21],
    [207,152,  0,142,142,142,  0,  0,369,518,143,143,143,518,147],
    [ 82, 82,550,383, 21,142,589,152,152,152,539,550, 81,405,147],
    [207,152,  0,147, 21,369,  0,381,518,152,539,146,146,518,147],
    [541,152,381,147,147,147,147,147,  0,579,369,146,146, 21, 21],
    [540,152,518,518,392,147,147,538,538,152,  0,  0,371,147,147],
    [152,152,152,152, 81,371,539,152,152,152,152,152, 81, 21,550],
    [  0,518,371,539,  0,147,365,539,152,  0,365,  0,411,152,152],
    [ 81,149,149,539,392,147,147,383, 82,207,152,152,392, 21, 21],
    [207,539,149,149,149,538,538,538,149,518,518,152,152,152,152],
    [149,383,149,550,149,149,149,369,149,149,589,579,  0,579,589],
    [538,538,149,539,149,  0,  0,  0,149,364,  0,152,  0,152,536],
    [405,149,149,539,149,579,149,149,149, 21,364,152,  0,152,536],
    [537,537,149,381, 81,537,537,537,149, 22, 21,152, 93,152,536]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}