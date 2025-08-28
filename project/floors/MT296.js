main.floors.MT296=
{
    "floorId": "MT296",
    "title": "德国",
    "name": "德国",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "sky.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "europe2.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        
        "\r[yellow]Mission 41 戈林？迈耶！",
        {
            "type": "setValue",
            "name": "flag:escort",
            "value": "true"
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "value": "2500000"
        },
        {
            "type": "playSound",
            "name": "fighter.mp3"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[盟军指挥官,hero]各单位注意，十二点方向，高空，敌战斗机接近。投掷副油箱，准备空战，注意不要离开轰炸机太远！",
        "\t[第八航空队轰炸机群,N622]机枪手就位，保持箱型队列不要分散！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "hp",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "atk",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "special",
            "value": "[6]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "hp",
            "value": "42000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "atk",
            "value": "3500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "special",
            "value": "[6]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "hp",
            "value": "60000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "atk",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "special",
            "value": "[30,64]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "hp",
            "value": "75000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "atk",
            "value": "9500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "special",
            "value": "[30,64]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "hp",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "atk",
            "value": "4000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "special",
            "value": "[6]"
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
        "\t[任务目标]⭐成功轰炸鲁尔\n⭐击败德军王牌飞行员（支线boss）\n⭐友军血量不少于20%",
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,0": {
            "floorId": "MT297",
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
    [140,140,140,544,140,518,140, 91,140,518,518,140,543,543,543],
    [ 21,  0,140,544,140,518,140,369,140,369,  0,140,277,140, 22],
    [ 21,371, 81,  0,140,  0,371,  0,371,  0,369, 81,  0,140,140],
    [ 21,  0,140,369,140, 81,140,140,140, 81,140,140,140, 21, 21],
    [140,140,140,  0,371,  0,606,140,  0,372,  0,544,140,  0,369],
    [ 22, 21,140, 81,140,140,544,140,  0,140,544,  0,140,140, 81],
    [ 21,  0,277,  0,  0,140,  0,277,140,140,140, 81,140,  0,606],
    [ 81,140,140,140,369,140,140, 81,606,140,  0,369,  0,378,  0],
    [374,541,140,606,277,  0,  0,369,  0,  0,140,140, 81,140,140],
    [542,542,140,140, 81,140,140,140,140,372,140,518,374,540,540],
    [542,542,140,544,544,  0,369,  0,369,  0,140,518,  0,540,540],
    [140, 82,140,140,140,140,140, 86,140,140,140,140, 82,140,140],
    [  0,  0,  0,607,607,607,  0,  0,  0,607,607,607,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}