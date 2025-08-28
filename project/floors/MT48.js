main.floors.MT48=
{
    "floorId": "MT48",
    "title": "英国南部",
    "name": "英国南部",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass3",
    "bgm": "europe3.mp3",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:escort",
            "value": "true"
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "value": "164537"
        },
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 8 燃烧的天空",
        "\t[地面指挥部]红色长机，收到请回答！",
        "\t[盟军指挥官,hero]我听着呢！有事快点说，天上到处都是德国佬！",
        "\t[地面指挥部]赶快干掉这附近所有的轰炸机，不然等他们飞到机场，我们都得玩完！",
        "\t[盟军指挥官,hero]我知道！没其他事了就别分散我们注意力！",
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "hp",
            "value": "2500"
        },
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "atk",
            "value": "300"
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "hp",
            "value": "4000"
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "atk",
            "value": "400"
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "hp",
            "value": "5000"
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "atk",
            "value": "50"
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "bom",
            "value": "500"
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "special",
            "value": "[28]"
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "hp",
            "value": "4500"
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "atk",
            "value": "50"
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "bom",
            "value": "500"
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "special",
            "value": "[28]"
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "hp",
            "value": "4800"
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "atk",
            "value": "50"
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "bom",
            "value": "800"
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "special",
            "value": "[28]"
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
        "\t[任务目标]⭐通过当前区域\n⭐击落所有轰炸机\n⭐友军剩余血量大于20000",
        {
            "type": "callBook"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]击落本张地图所有轰炸机后方可前往下一张地图"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT49",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "7,3": [
            {
                "type": "if",
                "condition": "(flag:hard===1)",
                "true": [
                    "\t[系统提示]检测到当前为“神剧难度”，获得50瓶下午茶、1000指挥点数、500黄金、20黄5蓝",
                    {
                        "type": "setValue",
                        "name": "item:tea",
                        "operator": "+=",
                        "value": "20"
                    },
                    {
                        "type": "setValue",
                        "name": "status:mana",
                        "operator": "+=",
                        "value": "1000"
                    },
                    {
                        "type": "setValue",
                        "name": "status:money",
                        "operator": "+=",
                        "value": "500"
                    },
                    {
                        "type": "setValue",
                        "name": "item:yellowKey",
                        "operator": "+=",
                        "value": "20"
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
                    "\t[系统提示]检测到当前为“街机难度”，获得10瓶下午茶、100指挥点数",
                    {
                        "type": "setValue",
                        "name": "item:tea",
                        "operator": "+=",
                        "value": "20"
                    },
                    {
                        "type": "setValue",
                        "name": "status:mana",
                        "operator": "+=",
                        "value": "1000"
                    }
                ]
            }
        ]
    },
    "autoEvent": {
        "6,14": {
            "0": {
                "condition": "core.maps.searchBlockWithFilter(x=>['中型轰炸机'].includes(core.material.enemys[x?.event?.id]?.type),['MT48']).length===0",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 21,525,567,140,526,140,566,  0,566,140,526,140,567,527,528],
    [205,525,567,140,526,140,566,  0,566,140,526,140,567,527,528],
    [ 81,140,140,140,526,140,566,  0,566,140,526,140,  0,205,  0],
    [528,206,  0,140,382,140,140, 86,140,140,382,140,140, 81,140],
    [528,140,  0,  0,  0,206,  0,  0,  0,206,  0,  0,  0,528,528],
    [140,140,140,140,140,140,140,206,140,383,140,382,140,140,140],
    [518,518,518,140,566,205, 81, 21,140,  0,140,  0, 21, 21,  0],
    [ 81,140,140,525,525,  0,140, 21,140,384,140,140,140,140, 81],
    [  0,140,528,140,140,140,140,205,140,528,528,528,140,527,383],
    [382,140,528,140,525,526,140, 21,140,140,205,140,140,572, 21],
    [  0, 81,566,140,526,525, 81, 21,140,529,529,529,140,140,140],
    [206,140,  0,140,206,140,140,206,140,140,140,384,140, 21,572],
    [ 21,140,  0,528,  0,  0,528,  0,  0,528,140,  0, 81,382,527],
    [140,140,140,140,140, 81,140, 85,140,  0,140,566,140,140,206],
    [567, 81,567,529,529,205,140, 93,140,  0,383,  0,140,566,566]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}