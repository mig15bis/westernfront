main.floors.MT374=
{
    "floorId": "MT374",
    "title": "北海",
    "name": "北海",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "europe6.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "function",
            "async": true,
            "function": "function(){\ncore.ui.mission.mis('MISSION 50', '孤独的女王', core.doAction);\n}"
        },
        "\t[盟军指挥官,hero]舰队集结完毕，“钨”作战正式开始。扫清拦路的敌人，向挪威进发！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "hp",
            "value": "170000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "top",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "special",
            "value": "[29,33,34,35,85]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "tpn",
            "value": "8",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936",
            "name": "hp",
            "value": "40000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936",
            "name": "atk",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936",
            "name": "top",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936",
            "name": "special",
            "value": "[6,29,35,47]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936a",
            "name": "hp",
            "value": "45000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936a",
            "name": "atk",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936a",
            "name": "top",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1936a",
            "name": "special",
            "value": "[6,29,35,47,88]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "konesburg",
            "name": "hp",
            "value": "200000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "konesburg",
            "name": "atk",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "konesburg",
            "name": "top",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "hipper",
            "name": "hp",
            "value": "400000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "hipper",
            "name": "atk",
            "value": "150000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "hipper",
            "name": "top",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "deutschland",
            "name": "hp",
            "value": "500000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "deutschland",
            "name": "atk",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "scharnhost",
            "name": "hp",
            "value": "600000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "scharnhost",
            "name": "atk",
            "value": "250000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "scharnhost",
            "name": "special",
            "value": "[31,35,36,37,86]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "scharnhost",
            "name": "money",
            "value": "60",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "scharnhost",
            "name": "exp",
            "value": "60",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "bismark",
            "name": "name",
            "value": "'提尔皮茨号战列舰'",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "bismark",
            "name": "hp",
            "value": "400000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "bismark",
            "name": "atk",
            "value": "300000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "bismark",
            "name": "special",
            "value": "[32,36,37,38,40,57,86]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "coast381",
            "name": "hp",
            "value": "5000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "coast381",
            "name": "atk",
            "value": "300000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "coast381",
            "name": "special",
            "value": "[32,37,72,84,86,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak120",
            "name": "hp",
            "value": "1000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak120",
            "name": "atk",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "wildwind",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "wildwind",
            "name": "special",
            "value": "[6,40]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "hp",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "atk",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "bom",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "special",
            "value": "[6,28]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "ammo",
            "value": "1",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "hp",
            "value": "1000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "atk",
            "value": "2500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "special",
            "value": "[50]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw200",
            "name": "hp",
            "value": "1400000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw200",
            "name": "atk",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw200",
            "name": "special",
            "value": "[28,47]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw200",
            "name": "bom",
            "value": "100000"
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
        "\t[任务目标]⭐击沉提尔皮茨号战列舰（主线boss）\n⭐击败沿途所有敌人\n⭐积攒物资：60000黄金",
        {
            "type": "callBook"
        },
        {
            "type": "setValue",
            "name": "flag:第50关通关",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第50关任务1",
            "n": 1,
            "text": "击沉提尔皮茨号战列舰（主线boss）",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第50关通关",
                    "operator": "=",
                    "text": "主线boss击破",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第50关任务2",
            "n": 1,
            "text": "击败沿途所有敌人",
            "info": [
                {
                    "type": "killAll",
                    "floorId": [
                        "MT374",
                        "MT375",
                        "MT376",
                        "MT377"
                    ],
                    "text": "敌人剩余"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第50关任务3",
            "n": 1,
            "text": "积攒物资：60000黄金",
            "info": [
                {
                    "type": "checkStatus",
                    "checkStatus": "money",
                    "operator": ">=",
                    "text": "持有的黄金",
                    "count": 60000
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,0": {
            "floorId": "MT375",
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
    [ 21,360,  0,  3,519,519,  3, 91,  3,637,637, 81,332,635,635],
    [ 21,  3,395,  3,524,524,  3,360,  3,  0,  0,  3,643,635,635],
    [ 22,  3,255,  3,  0,255, 81,255, 81,  0,  0,  3,  3,  3, 82],
    [  3,  3, 81,  3,  3, 81,  3,  0,  3,582,582,  3,  0,638,  0],
    [  0,  0,  0,360,  0,  0,  3,  3,  3,  0,  0, 81,255,  0,385],
    [360,  3,  3,  3,  0,  0,385,518,  3, 81,  3,  3,  3,  3,360],
    [643,  0,643,  3,  0,  0,  3,518,385,638,  0,638,  3,  0,  0],
    [  0,643,  0,398,  0,  0,  3,  3,  3,  0,638,  0, 81,398,  0],
    [  3,  3,  3,360,  3, 82, 21, 21, 21, 82,  3,373,  0,  3,  3],
    [255, 81,373,  0,  3,636,  0,  0,  0,636,  3,  0,  0,360,  0],
    [  0,  3,  0,  0, 81,395,  0,  0,  0,395, 81,  0,  0,  3,  0],
    [  0,  3,373,  3,  3,  3,  3, 86,  3,  3,  3,  3,  3,  3, 81],
    [637,  3, 21, 21,  3,609,518,  0,518,609,  3,395,  0,  0,255],
    [637,  3,  3, 81,  3,609,518,  0,518,609,  3,360,  3,  3,  3],
    [636,636,  0,255,  3,609,518,  0,518,609,  3, 21, 21, 21, 22]
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
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
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