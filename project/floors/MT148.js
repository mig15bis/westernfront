main.floors.MT148=
{
    "floorId": "MT148",
    "title": "加查拉防线",
    "name": "加查拉防线",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "cao1.mp3",
    "firstArrive": [
        {
            "type": "text",
            "text": "\t[隆美尔]\f[rommel.png,0,310]成功了！我们突破了英军的防线并顺利会师！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[奥金莱克]\f[auchinleck.png,0,310]指挥官阁下，虽然你的表现不错，但隆美尔的主力已经迂回击破了别处的防线。为保存有生力量，现在必须撤退了！",
            "pos": [
                100,
                300,
                380
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "14,3": [
            {
                "type": "setValue",
                "name": "flag:第21关通关",
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
                "text": "   纵使加查拉防线被指挥官阁下防守\n的很好，但后方的失守迫使我们再一次\n撤退了。\n   我们不得不承认隆美尔的军事才能\n。一次两次就算了，每一次都能精准出\n现在我们最意想不到的地方，并以巨大\n的劣势屡次击退我们，这绝非巧合。为\n什么这样的天才没有出现在我们国家？",
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
                "type": "submitTask"
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
                "type": "setValue",
                "name": "flag:stage",
                "value": "23"
            },
            {
                "type": "setValue",
                "name": "flag:dry",
                "value": "false"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT150",
                        "loc": [
                            7,
                            3
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "playBgm",
                        "name": "gaijin4.mp3"
                    },
                    "面对加查拉防线，隆美尔兵分两路：战斗力较弱的意大利军队负责正面佯攻，引开英军注意力，隆美尔亲自率领主力部队趁夜色迂回穿插。",
                    "这一行动非常冒险，他的补给线和撤退路线也从英军防线当中横穿过去，稍有不慎便会全军覆没。",
                    "但英军又一次没把握住这个机会。他们没有把大量兵力投入到阻击行动中，前来阻击的装甲部队像葫芦娃救爷爷一样被隆美尔逐个击破。",
                    "截至1942年6月12日，隆美尔已经包围歼灭了不少英军，这时英军连数量优势也不复存在了，只好全线撤退。不是撤退至托布鲁克重新防守，而是直接退到了埃及边界。他们已经没有足够的力量保护托布鲁克了。",
                    "在去年，托布鲁克还是隆美尔的眼中钉，他就是在这里失去了一切。这一次，德军有了炮兵和空军的掩护，英军主力也无法协助防守，隆美尔不费吹灰之力就拿下了它。",
                    "随着托布鲁克守军投降，隆美尔获得了大量的补给物资以及一个合适的前线港口。希特勒也发来了一份特殊的祝贺：一根元帅权杖——他将隆美尔晋升为元帅。",
                    "隆美尔迎来了人生的高光时刻。现在，他的沙漠军团矛头直指埃及和苏伊士运河。盟军需要更多补给物资来应对这次危机。",
                    "美国的加入使得往返于大西洋航线的商船多了起来，盟军调拨了其中一批船队前往北非，送去武器和给养。但相应的，为了阻止这些物资的流入，德国海军上将邓尼茨也拿出了他的杀手锏——潜艇大军。",
                    "必须从这些饥饿的“狼群”中活下来，北非的盟军才有一线希望。水上与水下的对决，拉开序幕。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT149",
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
        "14,11": {
            "floorId": "MT146",
            "loc": [
                0,
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
    [150,150,150,150,150,150,150,150,150,150,150,150,150,150,150],
    [150,531,531,363, 11,  0,  0,363, 11,  0,  0,363, 11,522,569],
    [150,150, 81,150,150,207,150,150,150,150,150,384,150,150,150],
    [150,  0,405,  0,150,533,533,533,150,534,534,534,150,589, 89],
    [150,530,530,530,150,150,371,150,150,150, 81,150,150, 11,150],
    [150,150,150,150,150,  0,578,532,150,532,364,  0,150,363,534],
    [150,588,588,  0,150,  0,150,532, 11,532,150,  0,150,  0,534],
    [ 11,590, 21,368, 82,401,150,150,150,150,150,381, 82,363,150],
    [150,588,588,  0,150,  0,150,532, 11,532,150,  0,150,  0,534],
    [150,150,150,150,150,  0,578,532,150,532,364,  0,150,363,534],
    [150,530,530,530,150,150,371,150,150,150, 81,150,150, 11,150],
    [150,  0,405,  0,150,533,533,533,150,534,534,534,150,589, 94],
    [150,150, 81,150,150,207,150,150,150,150,150,384,150,150,150],
    [150,531,531,363, 11,  0,  0,363, 11,  0,  0,363, 11,522,569],
    [150,150,150,150,150,150,150,150,150,150,150,150,150,150,150]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}