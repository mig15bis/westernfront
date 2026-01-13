main.floors.MT264=
{
    "floorId": "MT264",
    "title": "萨勒诺",
    "name": "萨勒诺",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "bgm5.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "steps": [
                "right:2"
            ]
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                1,
                0
            ]
        },
        {
            "type": "text",
            "text": "\t[艾森豪威尔]\f[clark.png,0,310]海军增援已抵达！立即对敌军进行火力压制！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[亚历山大]\f[alexanda.png,0,310]美第5军现在向南突围，与英军会合，可以避免一场溃败。后续的进攻再行商议。",
            "pos": [
                100,
                300,
                380
            ]
        },
        "\t[系统提示]接下来可以选择一艘战舰加入战斗，请谨慎选择！",
        {
            "type": "insert",
            "name": "选择战舰"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "14,9": [
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
                "type": "setValue",
                "name": "flag:第36关通关",
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
                "text": "   “雪崩”计划遭遇了一些小小的麻烦\n，不过尚在可控范围内。得益于克拉克\n将军的优秀指挥，我们已在萨勒诺站稳\n脚跟。\n   据说德军派出了在东线身经百战的\n精锐部队和新型坦克，但那又如何？根\n本不足为惧。意大利的战事很快就会结\n束，让记者们做好出发准备，伟大的克\n拉克将军会在罗马接受采访！\n（这份简报似乎是在克拉克的要求下写\n的）",
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
                "value": "38"
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT266",
                        "loc": [
                            7,
                            11
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    "为尽快占领罗马，艾森豪威尔制定了让美国第五集团军在萨勒诺登陆的“雪崩”计划，地面部队司令是美国陆军中将克拉克（就是后来在朝鲜签停战协议的那位）。",
                    "克拉克一直希望通过奇袭来进攻对手，为此他甚至没有命令进行炮火准备，但事实上，德军早就猜出盟军在萨勒诺的登陆意图，并命令附近各部做好战斗及支援准备。",
                    "克拉克很有政治头脑和冒险精神，但他并未参加过实战，没有实战经验（也不知道他这个中将怎么当上的）。他固执己见，坚持不听海军总指挥的建议，即便在登陆前就遭到德军空袭，仍然赌德军不知道他的奇袭计划。",
                    "当意大利投降的消息传到盟军士兵耳朵里时，所有人都兴高采烈的以为他们上岸以后，迎接他们的是意大利人民的热情拥抱。",
                    "当德军的炮弹落在登陆艇旁边的那一刻，他们才如梦初醒。幸好英国军舰早有准备，开火还击，避免了损失扩大。",
                    "美军冲上海滩的一瞬间便遭到了密集火力打击，死伤惨重，在战前针对性训练和优势空军力量的加持下，勉强逼退了德军。南部的英军虽然在登陆时出现了混乱，但他们提前进行了炮火准备，所以总体而言也比较顺利。",
                    "9月11日，德军集结了4个师，开始大规模反击，英美军队在巨大压力下被迫放弃了刚夺取的阵地。德国空军也大举出动，攻击盟军舰队，击沉数艘军舰，盟军航母上的寥寥几架喷火战斗机完全招架不住。",
                    "9月13日，德军发起更猛烈的反攻，英美防线被一分为二，克拉克第5集团军司令部都在德军的火力直接威胁之下。克拉克的信心开始动摇，命令他的参谋人员着手制定撤退计划。但他把撤退想的过于容易，对技术一无所知的他并不知道，登陆艇是无法接送地面部队返回的，更何况还要顶着德军的炮火。",
                    "情急之下，盟军2艘战列舰被紧急调往萨勒诺，空军也停止对德军纵深的轰炸，转而向萨勒诺的德军投弹，空降部队紧急更改空降地点，滩头卸载工作停止，就连厨子也拿起武器加入战斗，所有的力量都在向萨勒诺倾斜。",
                    "最终在猛烈的炮火攻势下，德军终于撤退，但盟军也损失2艘驱逐舰，1艘战列舰和2艘巡洋舰遭重创。而凯赛林本来就没想在这里战胜盟军，只要拖延盟军一段时间即可。现在的战果早已超过预期，撤退是完全被允许的。",
                    "德军开始有秩序撤离萨勒诺地区，沿途对桥梁、公路都进行了破坏，埋设大量地雷和爆炸物，还以坚强的后卫部队不时借助有利地形，实施阻滞作战。因此盟军的推进速度极其缓慢，导致“雪崩”行动变成了“蜗牛”行动。",
                    "萨勒诺的险胜表明，意大利的战事，短期内绝无可能结束，在法国登陆的计划应该尽快做好准备。而这些，离不开空中力量对德军纵深的战略轰炸。",
                    "但在这一时期，盟军的轰炸机群正面临着一个致命的问题。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT265",
                        "loc": [
                            -1,
                            -1
                        ]
                    }
                ]
            }
        ],
        "0,0": [
            "你居然会开穿墙？但很可惜，这里禁止通行！",
            {
                "type": "animate",
                "name": "hand",
                "loc": "hero",
                "async": true
            },
            {
                "type": "jump",
                "to": [
                    2,
                    0
                ],
                "time": 500,
                "keep": true,
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "irritable",
                "loc": "hero"
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 92,  0,  0, 82,266,150,518,227,518,518,518,150,410, 21, 21],
    [109,109,227,150, 22,150,150, 82,150,150,218,150, 81,631,631],
    [  0,218,  0,150,388,150,  0,632,  0,60032,60032,  0,266,542,542],
    [60032, 81,150,150,60032,265,  0,150,  0,235,  0,605,150,150,150],
    [ 21,410,  0,60032,544,235,150,150, 81,150,410,20031,150,519, 22],
    [ 21,150,543,410,544,150,631,388,250,150,541,542,150, 22,227],
    [ 21,150,  0,150,150,150,544,60032,543,150,20031,250,150,631, 81],
    [631,150,20031,544,20031,544,  0,60032,543,150,250,605,250,  0,540],
    [540,150,541,632, 81,265,  0,410,265, 81,632,150,150,150,150],
    [540,150,541,150,150,631,631, 82,631,631,  0,  0,150,518, 89],
    [372, 82,250, 81,227,631, 21,270, 22,631,631,372, 82,632,518],
    [145,145,  0,150, 21,631,523,625,523,631,248,518,145,145,145],
    [154,145,145,150, 21,631,605,145,145,145,145,145,145,154,154],
    [154,154,145,145,145,145,145,145,154,154,154,154,154,154,155],
    [155,154,154,154,154,154,154,154,154,155,155,155,155,155,155]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "浅滩"
}