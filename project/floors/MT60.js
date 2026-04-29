main.floors.MT60=
{
    "floorId": "MT60",
    "title": "伦敦",
    "name": "伦敦",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "7days2.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,0": [
            {
                "type": "setValue",
                "name": "flag:第九关通关",
                "value": "1"
            },
            {
                "type": "update"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "hideui"
            },
            {
                "type": "update"
            },
            {
                "type": "sleep",
                "time": 1000
            },
            {
                "type": "playSound",
                "name": "158-Skill02.mp3"
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "win.png",
                "sloc": [
                    0,
                    0,
                    null
                ],
                "loc": [
                    -60,
                    120,
                    600,
                    240
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "scaleImage",
                "code": 1,
                "center": [
                    80,
                    160
                ],
                "scale": 0.5,
                "time": 500
            },
            {
                "type": "function",
                "function": "function(){\nvar a = core.taskSystem.checkTask(0) ? 1 : 0,\n\tb = core.taskSystem.checkTask(1) ? 1 : 0,\n\tc = core.taskSystem.checkTask(2) ? 1 : 0;\ncore.setFlag('@temp@A', a + b + c);\n}"
            },
            {
                "type": "if",
                "condition": "(temp:A>=1)",
                "true": [
                    {
                        "type": "playSound",
                        "name": "xinxinbazhe.mp3"
                    },
                    {
                        "type": "showImage",
                        "code": 2,
                        "image": "star.png",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            15,
                            50,
                            90,
                            90
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "if",
                        "condition": "(temp:A>=2)",
                        "true": [
                            {
                                "type": "playSound",
                                "name": "xinxinbazhe.mp3"
                            },
                            {
                                "type": "showImage",
                                "code": 3,
                                "image": "star.png",
                                "sloc": [
                                    0,
                                    0,
                                    null
                                ],
                                "loc": [
                                    175,
                                    50,
                                    90,
                                    90
                                ],
                                "opacity": 1,
                                "time": 500
                            },
                            {
                                "type": "if",
                                "condition": "(temp:A>=3)",
                                "true": [
                                    {
                                        "type": "playSound",
                                        "name": "xinxinbazhe.mp3"
                                    },
                                    {
                                        "type": "showImage",
                                        "code": 4,
                                        "image": "star.png",
                                        "sloc": [
                                            0,
                                            0,
                                            null
                                        ],
                                        "loc": [
                                            325,
                                            50,
                                            90,
                                            90
                                        ],
                                        "opacity": 1,
                                        "time": 500
                                    }
                                ],
                                "false": []
                            }
                        ],
                        "false": []
                    }
                ],
                "false": []
            },
            {
                "type": "showImage",
                "code": 5,
                "image": "abstract.png",
                "loc": [
                    40,
                    480
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "moveImage",
                "code": 5,
                "to": [
                    40,
                    20
                ],
                "time": 500
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "drawTextContent",
                "text": "   今晚，指挥官阁下用他的战机机枪\n让德国空军吃尽了苦头。大量德军飞机\n坠毁在伦敦城内，这还没算返航途中坠\n毁以及降落后宣告报废的。\n   尽管伦敦已经变为燃烧的废墟，但\n轰炸无法击垮民众的意志。轰炸目标的\n转移给了我们绝佳的喘息之机，现在该\n是敌人付出代价的时候了！今晚只是个\n开头，我们还会一直抵抗，直到彻底消\n灭他们！",
                "left": 60,
                "top": 100,
                "align": "left",
                "fontSize": 20,
                "color": [
                    0,
                    0,
                    0,
                    1
                ]
            },
            {
                "type": "wait"
            },
            {
                "type": "clearMap"
            },
            {
                "type": "moveImage",
                "code": 5,
                "to": [
                    40,
                    480
                ],
                "time": 500
            },
            {
                "type": "hideImage",
                "code": 5,
                "time": 0
            },
            {
                "type": "sleep",
                "time": 2000
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 500,
                "keep": true
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 0
            },
            {
                "type": "hideImage",
                "code": 2,
                "time": 0
            },
            {
                "type": "hideImage",
                "code": 3,
                "time": 0
            },
            {
                "type": "hideImage",
                "code": 4,
                "time": 0
            },
            {
                "type": "setHeroOpacity",
                "opacity": 0
            },
            {
                "type": "submitTask"
            },
            {
                "type": "setValue",
                "name": "flag:stage",
                "value": "10"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [],
                "no": [
                    "德军仍然没有意识到自己的错误，仍然不断地派遣轰炸机袭击英国的各个城市，而放松了对机场、雷达站、指挥所等军事目标的袭击。结果就是，德军空袭越猛，英国皇家空军的实力恢复的越快。",
                    "在9月15日这天，德军发起了规模最大的一次空袭，但也是英国斩获战国最多的一天。后来，9月15日便被定为了“不列颠战役日”。",
                    "在那之后，英国空军再次找准机会，派遣战斗机空袭了德军用于登陆作战的船只，造成了非常大的破坏。没有了能够登岛作战用的登陆艇，“海狮计划”也正式宣告破产。",
                    "即便德军仍然持续对英国本土的空袭，但也只能造成有限的骚扰——英国的城市几乎变成废墟，再怎么炸都是一样的，而英国人对此早已麻木，真正有价值的目标却都安全着。",
                    "不列颠空战一直持续到了第二年，但实际上早在德军将炸弹投到伦敦时，他们的败局便已注定。",
                    "英国本土共计承受了6万吨炸弹的轰炸，915架飞机损毁，8万6千平民伤亡，而德军损失了1500架飞机，不列颠空战最终以英国的胜利落幕。",
                    "英国走出这最黑暗的时期，伦敦上空仿佛回响着丘吉尔振奋人心的演讲：",
                    "我们将战斗到底，我们将在法国战斗，将在海洋上战斗，我们将以不断增长的信心和不断增长的力量在空中战斗！无论代价多么大，我们都将保卫我们的岛屿。我们将在海滩上战斗，我们将在登陆地点战斗，我们将在农田和街道上战斗，我们将在山中战斗，我们决不投降！",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "pauseBgm"
                    }
                ]
            },
            "Stage2 已完成。是否提交分数并结束游戏？",
            {
                "type": "confirm",
                "text": "提交分数？",
                "yes": [
                    {
                        "type": "win",
                        "reason": "Stage2 不列颠之鹰 新"
                    }
                ],
                "no": [
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "confirm",
                        "text": "跳过剧情？",
                        "yes": [
                            {
                                "type": "changeFloor",
                                "floorId": "MT62",
                                "loc": [
                                    6,
                                    3
                                ],
                                "direction": "down"
                            }
                        ],
                        "no": [
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "playBgm",
                                "name": "wots4.mp3"
                            },
                            "当双方的战斗机在不列颠的云端之上激烈交火时，在大海上的战斗也在进行着。",
                            "英国海军有着绝对压倒性的优势兵力，但这不意味着他们可以高枕无忧。",
                            "德军知道，与英国海军正面对决，无异于自寻死路。但，英国是个岛国，绝大多数资源都要从世界各地，用商船运到本土。一旦这些运输线被切断，英国就会陷入资源短缺的境地。",
                            "因此，德军的主要任务并不是击沉英国强大的战舰，而是通过破坏海上交通线，致使英国陷入能源危机。这被称为“海上破交战”。",
                            "纵使英国有庞大的舰队，当他们分散到大西洋各处，以保护从世界各地开往英国的商船队时，这些数量优势也不复存在。",
                            "每个盟军船员都必须时刻绷紧神经，没人知道敌人会在什么时候出现在何处，是海上，天上，亦或是水下？",
                            "在浩瀚的大西洋上，围绕商船队展开的持久战，已经打响。",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "showImage",
                                "code": 1,
                                "image": "chapter3.jpg",
                                "loc": [
                                    0,
                                    0
                                ],
                                "opacity": 1,
                                "time": 0
                            },
                            {
                                "type": "setCurtain",
                                "time": 500
                            },
                            {
                                "type": "sleep",
                                "time": 2000
                            },
                            {
                                "type": "setCurtain",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    1
                                ],
                                "time": 500,
                                "keep": true
                            },
                            {
                                "type": "hideImage",
                                "code": 1,
                                "time": 0
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "MT61",
                                "loc": [
                                    -1,
                                    -1
                                ],
                                "direction": "down"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT59",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,0": {}
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 21, 21, 21,  2,518,518,  2, 89,  2,383,527,527,527,  2, 21],
    [  2,  2,382,  2,518,383,  2,384,  2, 82,  2,  2,383, 81,383],
    [ 21,  2,  0,  2,  2, 81,  2,384,  2,  0, 81,525,  0,  2,528],
    [382, 81,  0,  2,382,  0,  0,  0,382,  0,  2,  0,525,  2,528],
    [ 21,  2,  0,  0,  0,  2, 81,  2,529,529,  2, 81,  2,  2,  2],
    [ 82,  2,  2,382,  2,  2,525,  2,  2,  2,  2,  0,382,  0,518],
    [528,528,  2,  0,529,  2,525,383,  0,  0,  2,  0,  2,529,  2],
    [  2,384, 81,  0,  2,  2,  2, 81,  2,383,  2,  0,  2,529,525],
    [528,528,  2,383,  2,528,  0, 81,  0,  0, 81,382,  2,525,  2],
    [  2,  2,  2,527,527,  2,383,  2,  0,383,  2,  2,518,  2,527],
    [  0,  0,  2,383,  2,  0,  0,  2,  2,  0,384,  2,  0,382,527],
    [384,382, 81,  0,  2,382,  2,  2, 21,  2,  0,  0,  0,  2,  2],
    [382,  2, 21,  0,  0,  0,382,382,382,  0,  2,382,  2,526,526],
    [ 21,  2,  2,  2,384,  2,  2,  0,  2,  0,  2,  0, 81,383,  2],
    [ 21,  2,527,527,528,528,  2, 93,  2,  0,383,  0,  2,526,526]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,574,  0,574,  0,  0,574,  0,574,  0,  0,574,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574,  0],
    [  0,  0,  0,574,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574,  0,  0,574,  0],
    [  0,574,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,574,  0,  0,  0,  0,574,  0,  0,  0,574],
    [  0,  0,  0,  0,574,  0,  0,  0,574,  0,  0,  0,574,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [574,  0,  0,  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,574,  0,  0,  0,  0,  0,  0,  0,  0,574,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0],
    [  0,  0,574,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574],
    [  0,574,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,574,  0,  0]
],
    "area": "天空"
}