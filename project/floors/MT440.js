main.floors.MT440=
{
    "floorId": "MT440",
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
            "type": "text",
            "text": "\t[麦克阿瑟]\f[macarthur.png,0,310]我们的军队当中出现了某种未知的新型传染病，已被证实是敌人使用的生物武器。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[麦克阿瑟]\f[macarthur.png,0,310]不过杜鲁门总统似乎对这种武器很感兴趣，如果我们有机会拿到他们的研究资料，也许可以展开进一步研究，为我们后续入侵亚洲所用。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[麦克阿瑟]\f[macarthur.png,0,310]封锁消息，对其他士兵宣称这是一次重感冒。待到战争结束，我希望能与日军的相关负责人进行一番交易。",
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
        "\t[系统提示]\r[red]你现在是否已经开始为选择了美军而感到后悔？\r"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "11,2": [
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
        "2,12": [
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
        "7,6": [
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
        "2,1": [
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
        "7,14": {
            "floorId": "MT439",
            "loc": [
                7,
                0
            ]
        },
        "7,0": {
            "floorId": "MT441",
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
    [645,647,702, 82,  0,152,748, 91,152, 22, 22,609,152,645,645],
    [645,647,494,152,  0,152,747,748,152,749,152,152,152, 21, 21],
    [152,152,152,152,684,152,692,747,152,690,152,494,152,524,691],
    [518,688,518,152,687,152, 82,152,152, 81,152,646,152,152, 81],
    [  0,152,  0,152,  0,688,690,687,518,518,684,646,152,  0,  0],
    [685,152,750, 81,  0,152,152,152,152,684,152,152,152,750,685],
    [686,152,152,152,152,152,152,494,152,524,648,690,152,688,152],
    [  0,687,  0,684,  0,685,152,750,152,648,690,  0, 81,  0,  0],
    [152, 81,152,152,700,  0, 81,686,152,152,152,152,152,152,684],
    [ 21,691, 21,152,688,152,152,687,152,  0,685,518,  0,152,  0],
    [648,519,648,152,518,518,152,686, 81,687,152,  0,687, 81,691],
    [152,152,152,152,152,683,152,518,152,  0,152, 81,152,152,152],
    [645,647,494,152,518,518,152,518,152,683,152,691, 21,647,647],
    [646,646,692, 82,683,152,152,  0,152,646,152,152,152,152, 81],
    [645,647,519,152, 21, 21,152, 93,152,646,152,648,648, 21,700]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}