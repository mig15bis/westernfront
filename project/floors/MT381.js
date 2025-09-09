main.floors.MT381=
{
    "floorId": "MT381",
    "title": "阿登",
    "name": "阿登",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "snow",
    "bgm": "cao2.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 52 反击的序曲",
        "\t[盟军指挥官,hero]巴斯托涅的守军数量很少，尽快解决吧。",
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
        "\t[任务目标]⭐通过当前区域\n⭐消灭巴斯托涅所有守军（不包括最后一张图）\n⭐击毁2辆虎王坦克",
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "14,7": {
            "floorId": "MT382",
            "loc": [
                0,
                7
            ]
        },
        "0,7": {
            "floorId": "MT385",
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
    [636,160,  0,518,160,637,637,265,635,160,635,635,635,160, 22],
    [643, 81,632,  0,160,160,160, 81,160,160,  0,279,  0,160, 22],
    [636,160,  0,  0,275,  0,518,  0,160,160,160, 82,160,160,638],
    [160,160,160,160,160,  0,518,  0,275,  0,160,  0, 81,265,638],
    [610,610,610,610,160, 81,160,160,160,  0,160,643,160,160,160],
    [ 21, 21, 21, 22,160,  0,  0,  0,160,  0,250,  0,  0,250,518],
    [109,109,  0,  0,160,643,518,  0,275,  0,250,  0,  0,160,160],
    [ 92, 83,  0,  0, 86,  0,160, 81,160,160,160,160, 81,275, 94],
    [109,109,  0,  0,160,643,160,643,265,643,160,  0,  0,160,160],
    [ 21, 21, 21, 22,160,  0,160,160,160, 81,160,  0,266, 21, 21],
    [610,610,610,610,160,250, 81,250,  0,250,160,  0,266, 21, 21],
    [160,160,160,160,160,  0,160,  0,110018,  0,160,  0,160,160,160],
    [518,  0,275,  0,  0,518,160,250,  0,250, 81,  0,160,636,636],
    [160,160, 82,160,160,160,160,160,  0,  0,160,160,160,637,637],
    [  0,  0,227,519,519,341,341,160,518,  0, 81,279,  0,638,638]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [110019,  0,110019,  0,  0,171,171,171,171,  0,  0,172,  0,  0,  0],
    [  0,110019,  0,  0,  0,171,171,171,171,  0,  0,172,  0,  0,  0],
    [  0,  0,  0,  0,  0,171,171,171,171,  0,  0,172,172,  0,  0],
    [172,172,  0,  0,  0,  0,  0,  0,  0,  0,  0,172,172,  0,  0],
    [172,172,171,  0,  0,172,172,172,  0,  0,  0,172,  0,  0,  0],
    [  0,  0,171,171,  0,172,172,172,171,171,171,  0,  0,  0,  0],
    [  0,  0,171,171,  0,  0,  0,  0,171,171,171,171,172,172,172],
    [  0,  0,171,171,  0,  0,  0,  0,171,171,171,171,  0,  0,  0],
    [  0,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,171,171,  0,  0,110019,  0,  0,  0,  0,  0,  0,  0,110019,  0],
    [  0,  0,  0,  0,  0,  0,171,171,171,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,171,171,171,171,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,171,171,171,171,  0,  0,  0,  0,  0,  0],
    [  0,  0,110019,  0,  0,171,  0,  0,  0,110019,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "area": "陆地"
}