main.floors.MT31=
{
    "floorId": "MT31",
    "title": "英吉利海峡",
    "name": "英吉利海峡",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "europe1.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,14": [
            {
                "type": "setValue",
                "name": "flag:第五关通关",
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
                "text": "   希特勒的飞机和潜艇企图把我们淹\n死在英吉利海峡，但指挥官阁下带着他\n的战机和驱逐舰及时赶到，我们的船队\n安全了。\n   最后一艘载满士兵的船只已安全靠\n岸，可以看到那些士兵们难以掩饰的喜\n悦之情。我们安全了，暂时的。",
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
                "value": "6"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "playBgm",
                        "name": "wots3.mp3"
                    }
                ],
                "no": [
                    {
                        "type": "playBgm",
                        "name": "wots3.mp3"
                    },
                    "在丘吉尔首相的鼓动下，不少民用船只加入了撤退行动。尚存战意的法国军队，在戴高乐将军的带领下，奋力阻击德军的地面部队，为英军的撤退争取了不少时间，但他们也付出了巨大的牺牲。",
                    "德国空军几乎是不惜一切代价的对撤退行动进行干扰。为了对抗德军飞机，英国军舰防空火力全开，空军也派出大量“飓风”和“喷火”式战斗机为他们护航。",
                    "直至6月4日，最后一艘满载着自由法国军队的驱逐舰离开敦刻尔克。“发电机计划”，也就是敦刻尔克大撤退这次行动，彻底落下帷幕。",
                    "从5月26日至6月4日这9天时间里，861艘来自各个国家的各式船只，把共计34万大军从危险的敦刻尔克海滩撤了出来，创下了二战中的又一大奇迹。",
                    "英国、戴高乐率领的自由法国，以及来自荷兰、比利时、波兰等国的，不愿意屈服于纳粹统治的英勇战士们，向德国宣告了他们继续战斗的决心。而撤退，是为了日后更猛烈的反击。",
                    "盟军大部队撤回英国后，德军则继续向巴黎进军。6月18日，法国政府正式宣布投降，仅仅抵抗了40天……虽然这个时间相对来讲还算久的，投降最快的只撑了4个小时。",
                    "在6月21日的停战谈判上，希特勒兴冲冲的拿出了福熙元帅专列火车厢——也就是一战德国签停战条约的那一节车厢。这个做法可以说羞辱度拉满。",
                    "至此，维希法国建立，法国政府沦为了德国的傀儡。但法国民众，和一部分不愿屈服的将士们可不像维希政府一样窝囊。",
                    "在接下来的几年内，法国民众行走于暗处，偷偷搜集情报，或是暗中搞破坏，军人则投入自由法国的怀抱，与德军正面较量。",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[世界消息]\r[red]法国  投降！",
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[世界消息]\r[red]维希法国 加入轴心国阵营！",
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[世界消息]\r[red]意大利 参战！",
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[世界消息]\r[aqua]自由法国 加入反法西斯同盟国阵营！"
                ]
            },
            "Stage1 已完成。是否提交分数并结束游戏？",
            {
                "type": "confirm",
                "text": "提交分数？",
                "yes": [
                    {
                        "type": "win",
                        "reason": "Stage1 法国战役 新"
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
                                "floorId": "MT33",
                                "loc": [
                                    7,
                                    7
                                ],
                                "direction": "down"
                            }
                        ],
                        "no": [
                            "希特勒战胜了法国，如愿以偿的报了一战之耻。德军从上到下都在为这一巨大成就而举杯欢庆。",
                            "但这也只能算是一次阶段性的胜利。尽管整个欧洲都已落入希特勒之手，但英国却依旧退回本土，坚持顽抗。",
                            "希特勒抛出了橄榄枝，因为他需要为入侵苏联做准备。他承诺，如果英国放弃与德国为敌，并归还一战时期抢走的殖民地，就可以签署和平条约了。",
                            "然而丘吉尔早已看穿了希特勒的野心。尽管英国与苏联关系并不好，丘吉尔却毅然决然的拒绝了和平提议，坚持抗争到底。德国不得不把入侵英国的计划提上日程。",
                            "英国与欧洲大陆之间隔着一道英吉利海峡，这是一道比斥巨资修建的马奇诺防线要管用数倍的天然防线。坦克开不过海，德军引以为傲的闪电战就毫无用武之地。",
                            "英国又是老牌海军强国，手握数艘航母和战列舰，巡洋舰、驱逐舰和其他支援舰更是不计其数。相比之下，德国海军的水面舰艇加起来可能都赶不上对面一个零头。",
                            "但论空军，德军就有了发言权。尽管早早的加大了战斗机产量，英国皇家空军也只有700架战斗机可用，而德国则有约2700架飞机可用，其中战斗机和轰炸机各占一半。",
                            "作战计划毫无争议。德国空军将发起“空中闪电战”，以压倒性优势，对英国本土实施残酷的轰炸，确立制空权，以确保陆军能够顺利乘船登陆。",
                            "计划名为，“海狮计划”",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "showImage",
                                "code": 1,
                                "image": "chapter2.jpg",
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
                                "floorId": "MT32",
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
        "7,0": {
            "floorId": "MT30",
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
    "autoEvent": {
        "6,14": {
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 30, 30, 30,  3,  0,383, 32, 91, 32,383,  0,  3, 21,  3, 30],
    [382,  3,  3,  3,  0,  3,  3, 81,  3,  3,  0,  3, 21,  3, 30],
    [ 81,  3,  0,205,  0, 29,  3,384,  3,207,  0,205,  0,  3,382],
    [ 28, 28, 28,  3,  3,  0,  3, 27,  3, 29,  3, 29,  0, 81,  0],
    [ 34,  3,  3,  3,206,  0,  3, 27,  3, 32,  3, 32,  3,  3,382],
    [  3,  3, 28,  3,  0, 81,  3, 27,  3,  0,207,  0,  3, 22, 33],
    [ 21, 28, 28,  3, 29,  3,  3,  3,  3,  3, 81,  3,  3,  3, 29],
    [  3,  3, 28,  3, 29,  3, 21,  3,  0,  0,  0,  0, 29,  3, 29],
    [ 27,  3, 81,  3, 29,  3, 21,  3,207,  3,  3,207,  3,  3,  3],
    [ 27,  3,  0,207,  0,  3,205,  3,  0,  3, 30,  0,383,  0, 27],
    [ 27,206,  0,  3,  0,206,  0,  0,  0,207,  0, 30,  3,  0, 27],
    [  3, 81,  3,  3, 82,  3,  3,216,  3,  3, 82,  3,  3, 81,  3],
    [  3,207,  3,521,521,521,  3, 22,  3,521,521,521,  3,207,  3],
    [  3,518,  3,521,521,521,  3, 22,  3,521,521,521,  3,518,  3],
    [  3,518,  3,  3, 22,  3,  3, 89,  3,  3, 22,  3,  3,518,  3]
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