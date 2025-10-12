main.floors.MT67=
{
    "floorId": "MT67",
    "title": "爱尔兰西部海域",
    "name": "爱尔兰西部海域",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "wots1.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "14,7": [
            {
                "type": "setValue",
                "name": "flag:第十关通关",
                "value": "1"
            },
            {
                "type": "unloadEquip",
                "pos": 0
            },
            {
                "type": "unloadEquip",
                "pos": 1
            },
            {
                "type": "unloadEquip",
                "pos": 2
            },
            {
                "type": "unloadEquip",
                "pos": 3
            },
            {
                "type": "unloadEquip",
                "pos": 4
            },
            {
                "type": "unloadEquip",
                "pos": 5
            },
            {
                "type": "unloadEquip",
                "pos": 6
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
                "text": "   虽然略有坎坷，但在指挥官阁下的\n保护下，这批重要的货物终于安全抵达\n英国本土。\n   和一战时期一样，德军U型潜艇仍\n然是我们在海上最大的麻烦。水兵们在\n大西洋上漂浮着的每一个夜晚都是不眠\n之夜。也许我们需要更多的反潜舰。",
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
                "type": "pauseBgm"
            },
            {
                "type": "submitTask"
            },
            {
                "type": "setValue",
                "name": "flag:escort",
                "value": "false"
            },
            {
                "type": "setValue",
                "name": "flag:stage",
                "value": "11"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT69",
                        "loc": [
                            7,
                            9
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "playBgm",
                        "name": "wots2.mp3"
                    },
                    "德军深入法国以后，意大利眼看时机成熟，便与英法正式宣战。",
                    "然而，意大利或许没意识到，德军能在法国如入无人之境，是因为德军领会了闪电战的真谛，在战术上领先了一个层次。而意大利显然没有这个条件。",
                    "不仅如此，意大利陆军的战斗力异常拉跨。先是被濒临溃败的法军一顿胖揍，又在入侵希腊时被希腊一顿胖揍。最后不得已让德军出场支援，才迫使英国出兵支援希腊和巴尔干半岛。",
                    "但意大利的海军实力不容小觑。当德国用潜艇在大西洋里打游击时，手握重兵的意大利海军则牢牢把控着地中海的制海权。",
                    "英国在地中海的运输船队经常遭到意大利海军的袭击，使得在埃及和巴尔干半岛作战的英军陷入补给困境。要想保证补给线安全，就必须拿下地中海的制海权。",
                    "意大利海军的主力常常驻扎在塔兰托港。这是亚平宁半岛（意大利本土）的一个重要军港，如果能对塔兰托港发起一次成功的袭击，必定会严重打击意大利的海军实力。",
                    "但这毕竟是敌人家门口。如果把战舰开进去炮轰，不仅要面对港内的大量战舰，还有来自岸防炮和敌方空军的威胁，搞不好就会伤敌一千，自损八万。",
                    "传统的方法肯定行不通。于是，英国海军坎宁安上将把目光放在了一种新型武器上——航空母舰。",
                    "在当时，几乎没人意识到航空母舰的潜力，“只是个移动的海上飞机场而已，还是只能放出小型飞机的那种”，大多数人都这样想。",
                    "但眼下，这却是最可行的方案。这将会是航空母舰第一次参与大型战役，一次大胆的尝试。在此前，人们甚至不知道这种新型军舰的正确用法。一切都是未知数。",
                    "没有人能意识到，一个几乎是死马当活马医的行动计划，将会开辟一个崭新的海战时代。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT68",
                        "loc": [
                            -1,
                            -1
                        ],
                        "direction": "down"
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "MT66",
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
    "autoEvent": {
        "14,6": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [528,211,  0,  3,  0,  3,572,  3,525,525,216,525,525,  3,526],
    [528,  3,  0,211,  0,385, 81,  0,  3,  3, 81,  3,  3,  3,526],
    [  3,  3, 81,  3,  3,527,  3,528,  0,  3,  0,  3,  0, 81,216],
    [ 21,  3,  0,210,  0,  3,  3,  3,216, 81,  0,211,  0,  3, 82],
    [ 22,216,  0,  3,518,518,  3,527,527,  3,385,  3,  3,525,525],
    [ 21,  3, 81,  3,  3,  0,210,  0,  3,  3,  0,234,  0,  3,525],
    [  3,  3,  0, 21,  3,234,  3,  3,528,528,528,  3,  0,  3,  3],
    [ 92,  0,216, 21, 81,  0,  0,  3,  3, 81,  3,  3,212, 82, 89],
    [  3,  3,  0, 21,  3,  3,385,211,  0,  0,211,  0,  0,  3,  3],
    [566,566, 81,  3,  3, 21, 21,  3,  3,  3,  3,385, 81,234,  0],
    [  3,  0,210,  0,  0, 81,  3,518,  3,  0,234,  0,  3,  0,567],
    [  3, 82,  0,  3,  0,  0,210,  0,385,  0,  0,  3,  3,  3, 81],
    [  3,  0,  3,  3,234,  3,216,  3,  3,211, 82,525,525,  3,  0],
    [572,572,572,  3,529,  3,526,526,  3, 21,  3,  3,  0,216,  0],
    [566,  3,216, 81,529,  3,526,  3, 21, 21,  3,525,525,  3,  0]
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