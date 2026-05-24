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
        {
            "type": "function",
            "async": true,
            "function": "function(){\ncore.ui.mission.mis('MISSION 40', '戈林？迈耶！', core.doAction);\n}"
        },
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
            "id": "flak88",
            "name": "hp",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "special",
            "value": "[15,40,64]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "hp",
            "value": "180000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "atk",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "atk",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "special",
            "value": "[30,64,90]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "ammo",
            "value": "2",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me410",
            "name": "hp",
            "value": "220000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me410",
            "name": "atk",
            "value": "24000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me410",
            "name": "special",
            "value": "[30,64]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "hp",
            "value": "220000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "atk",
            "value": "22000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "special",
            "value": "[30,64,90]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "hp",
            "value": "180000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "special",
            "value": "[6,30]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "special",
            "value": "[6,30,90]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "ammo",
            "value": "2"
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
        "\t[任务目标]⭐成功轰炸鲁尔\n⭐击败德军王牌飞行员（支线boss）\n⭐友军血量不少于150w",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第40关通关",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "flag:MT301boss",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第40关任务1",
            "n": 1,
            "text": "成功轰炸鲁尔",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第40关通关",
                    "operator": "=",
                    "text": "通过当前区域",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第40关任务2",
            "n": 1,
            "text": "击败德军王牌飞行员（支线boss）",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "MT301boss",
                    "operator": "=",
                    "text": "支线boss击破",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第40关任务3",
            "n": 1,
            "text": "友军血量不少于150w",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "友军血量",
                    "operator": ">=",
                    "text": "友军血量剩余",
                    "count": "1500000"
                }
            ]
        },
        "\t[系统提示]本关支线boss不会攻击友军，可以放心进去打",
        {
            "type": "animate",
            "name": "wonder",
            "loc": "hero",
            "async": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "explore3",
            "loc": "hero",
            "async": true
        },
        {
            "type": "setValue",
            "name": "status:hp",
            "operator": "-=",
            "value": "6600",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "operator": "-=",
            "value": "26400"
        },
        {
            "type": "waitAsync"
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
    [ 21,541,140,544,140,518,140,369,140,369,  0,140,277,140, 22],
    [ 21,371, 81,  0,140,  0,371,390,371,  0,369, 81,  0,140,140],
    [ 21,541,140,369,140, 81,140,140,140, 81,140,140,140, 21, 21],
    [140,140,140,  0,371,  0,524,140,  0,372,541,544,140,541,369],
    [ 22, 21,140, 81,140,140,544,140,  0,140,544,541,140,140, 81],
    [ 21,541,277,  0,  0,140,390,277,140,140,140, 81,140,541,606],
    [ 81,140,140,140,369,140,140, 81,524,140,390,369,  0,378,541],
    [374,541,140,606,277,  0,  0,369,  0,  0,140,140, 81,140,140],
    [542,542,140,140, 81,140,140,140,140,372,140,518,374,540,540],
    [542,542,140,544,544,541,369,  0,369,  0,140,518,  0,540,540],
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