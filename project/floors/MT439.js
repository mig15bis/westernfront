main.floors.MT439=
{
    "floorId": "MT439",
    "title": "本州岛",
    "name": "本州岛",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "hiaction2.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 60 凋零的樱花",
        {
            "type": "text",
            "text": "\t[麦克阿瑟]\f[macarthur.png,0,310]日本需要一个新的领导者来接管，而那个人将会是我。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[山下奉文]\f[yamashita.jpg,0,310]帝国已经到了最危险的时候，现在将绝密武器投入战场。所有叛逃者必须被就地处决，我们将以死表达对天皇的忠心！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[麦克阿瑟]\f[macarthur.png,0,310]一些日本共产党人正趁势发起叛乱，推翻天皇统治。我们不会容忍共产党出现在我们的管辖范围内。为了战后的稳定，见到一个，就除掉一个。",
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
        "\t[系统提示]敌人战力重置中",
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
        "\t[任务目标]⭐占领东京\n⭐除掉所有日共党员\n⭐尽可能保留敌方生化部队",
        {
            "type": "callBook"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]地图中存在的没有显伤的NPC就是你的第二个目标，必须亲自触碰他们才会完成击杀。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,4": [
            {
                "type": "animate",
                "name": "shoot2"
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            },
            {
                "type": "setValue",
                "name": "flag:clearcommunist",
                "operator": "+=",
                "value": "1"
            }
        ],
        "14,0": [
            {
                "type": "animate",
                "name": "shoot2"
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            },
            {
                "type": "setValue",
                "name": "flag:clearcommunist",
                "operator": "+=",
                "value": "1"
            }
        ],
        "12,12": [
            {
                "type": "animate",
                "name": "shoot2"
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            },
            {
                "type": "setValue",
                "name": "flag:clearcommunist",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT440",
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
    [ 21, 21,152,646, 22,646,152, 91,152,645,647,695,700,518,494],
    [ 21, 21,152,518,702,518,152,688,152,645,647,152, 82,152,152],
    [686,152,152,152, 81,152,152, 81,152,152,152,152,518,518,518],
    [  0,690, 81,685,684,  0,683,686,  0, 81,685,152,152,152,686],
    [647,494,152,152,152,152,152,152,683,152,684, 81,687,690,  0],
    [152,152,152,  0,685,647,152, 21, 21,152,687,152,152,152,152],
    [647,  0,152,647,152, 22,152,152,152,152,  0, 81,687,695,646],
    [  0,700, 81,  0,152,152,152,152, 21,152,684,152,152,646,648],
    [687,152,152,152,152, 21, 21,152, 21,685,  0,685,152,648, 22],
    [  0,683,648,  0,152,683,152,152,152,152, 81,152,152,152,152],
    [152,152,  0,684, 81,  0,684,  0,683,  0,  0,683,  0,684,648],
    [645,152,687,152,152,152,152, 86,152,152,152,152,152, 82,152],
    [645,152,  0,152,614,590,519,  0,519,590,614,152,494,691,  0],
    [524,152,683,152,614,590,519,  0,519,590,614,152,648,646,648],
    [691, 82,  0,152,614,590,519,  0,519,590,614,152,645,646,645]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}