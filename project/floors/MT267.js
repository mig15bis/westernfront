main.floors.MT267=
{
    "floorId": "MT267",
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
    "bgm": "europe6.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        "\r[yellow]Mission 38 黑色星期四",
        {
            "type": "setValue",
            "name": "flag:escort",
            "value": "true",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "value": "8000000"
        },
        "\t[护航战斗机中队队长,N573]呼叫第八航空队，我们是护航战斗机中队，在你们五点钟方向，收到请回答。",
        "\t[盟军指挥官,hero]收到，等你们很久了，过来会合。",
        "\t[护航战斗机中队队长,N573]明白。各单位，伴飞轰炸机群。",
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[盟军指挥官,hero]我们正在进入德军空域，各单位注意警戒。不要放松警惕，他们可能出现在任何方向。",
        "\t[轰炸机飞行员,N622]头儿，我总有种不好的预感。",
        "\t[盟军指挥官,hero]闭上你的乌鸦嘴。我们能活着回去。",
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[护航战斗机飞行员,N573]强盗（敌机的代号）！十一点和一点钟方向！高空！正在俯冲！",
        "\t[盟军指挥官,hero]机枪手就位！所有轰炸机保持箱型阵列不要分散！",
        "\t[护航战斗机中队队长,N573]抛弃副油箱，我们上！",
        {
            "type": "playSound",
            "name": "fighter.mp3"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "15000",
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
            "value": "140000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "atk",
            "value": "9000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "hp",
            "value": "160000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "atk",
            "value": "18000",
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
            "id": "ju88c6",
            "name": "hp",
            "value": "170000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "atk",
            "value": "18000",
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
            "id": "ju88c6",
            "name": "money",
            "value": "8",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "exp",
            "value": "8",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "hp",
            "value": "150000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "atk",
            "value": "12000",
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
            "id": "fw190a1",
            "name": "money",
            "value": "6",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "exp",
            "value": "6",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "hp",
            "value": "160000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "atk",
            "value": "12000",
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
            "value": "2",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "money",
            "value": "6",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a3",
            "name": "exp",
            "value": "6"
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
        "\t[任务目标]⭐抵达轰炸目标\n⭐友军剩余血量不少于50w\n⭐不走安全通道的情况下通关",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第37关通关",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "flag:mission38tsk3fail",
            "value": "false"
        },
        {
            "type": "setTask",
            "name": "第37关任务1",
            "n": 1,
            "text": "抵达轰炸目标",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第37关通关",
                    "operator": "=",
                    "text": "通过当前区域",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第37关任务2",
            "n": 1,
            "text": "友军剩余血量不少于50w",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "友军血量",
                    "operator": ">=",
                    "text": "友军血量剩余",
                    "count": "500000"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第37关任务3",
            "n": 1,
            "text": "不走安全通道的情况下通关",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "mission38tsk3fail",
                    "operator": "=",
                    "text": "别开铁门",
                    "count": "false"
                }
            ]
        },
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
            "value": "5040",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "operator": "-=",
            "value": "20160"
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
            "floorId": "MT268",
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
    [542,542,542,372,140, 21,140, 91,140,  0,544,544,544,544,  0],
    [140,140,140, 81,140,371,140,371,140,378,140,140,140,140, 82],
    [541,542,140,  0,277,  0,544,  0,544,  0,544,140,541,541,372],
    [140,  0,369,544,390,140,140,140,140,369,140,140,541,541,541],
    [541,542,140,544,140,140,605,140,  0,371,  0,140,140,140,140],
    [140,140,140,140,369,518,518,371,390,140,  0,140,518,518,518],
    [543,543,140,  0, 81,140,140,140,140,140,  0,140,369,140,518],
    [542,372, 82,  0,140,518,518,518,371,140,390, 21,390,140,140],
    [543,543,140,  0,140,140,140,140, 81,140,140, 81,140,140, 21],
    [140,140,140,369,140,544,369,  0,  0,140,  0,544,  0,369, 21],
    [542,140,  0,277,  0,544,140,  0,  0,369,  0,140,140,140,140],
    [542,371,390,140,371,140,140, 86,140,140, 81,140,523,523,523],
    [ 81,140,140,140,544,140,605,  0,605,140,  0,277,  0,140,277],
    [378,  0,580,140,540,140,606,  0,606,140,140,140,140,140, 82],
    [  0,580,581,140,540,140,605,  0,605,140,519,519,540,540,540]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}