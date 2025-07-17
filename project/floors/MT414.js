main.floors.MT414=
{
    "floorId": "MT414",
    "title": "柏林",
    "name": "柏林",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground6",
    "bgm": "bgm4.mp3",
    "firstArrive": [
        {
            "type": "text",
            "text": "\t[朱可夫]\f[zhukov.png,0,310]我们的红旗正在国会大厦上飘扬！我们胜利了！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[艾森豪威尔]\f[eisenhower.png,0,310]终究还是苏军快我们一步。事已至此，还是先收缴德国人的武器吧。",
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
        "\t[系统提示]历史上就是苏联最先完成对柏林的攻占，所以第三个任务就是无法完成的！不需要回去重打！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]所有德军已投降！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,7": [
            {
                "type": "function",
                "function": "function(){\nflags.mission[56][0]=true\n}"
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
                "type": "function",
                "function": "function(){\nflags.skillList=[0,0,0,0,0,0,0]\n}"
            },
            {
                "type": "update"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "hideStatusBar"
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
                "function": "function(){\nvar a = flags.mission[core.getFlag('stage')];\ncore.setFlag('@temp@A', a[0] + a[1] + a[2]);\n}"
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
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "sleep",
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
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "sleep",
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
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "sleep",
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
                "text": "   这世上再也没有什么能比“战争结束\n了”这句话更令人开心了！\n   赢了！我们赢了！我们击败了纳粹，\n解放了处于水深火热中的人们！从现在\n起，我们可以自由行走在大街上，不用\n担心被狙击手爆头，不用害怕天上飞过\n的飞机，不用趴在脏兮兮的战壕里，也\n不用再听到那令人作呕的防空警报！唯\n一的遗憾是苏联人更快占领了柏林，但\n那是政客们才要考虑的事了！现在我们\n得马上安排回国的机票和船票，我们的\n家人在等着我们回去！",
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
                "type": "setValue",
                "name": "flag:stage",
                "value": "57"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [],
                "no": [
                    "柏林会战，欧洲战场的最后一战，落下帷幕。",
                    "苏军以压倒性的陆军战力和不惧牺牲的精神，拿下了德军的最后一处据点。盟军政治军事首脑企图抢在苏联之前夺取柏林，以夺取更多话语权的努力也同样失败了。",
                    "希特勒的野心终究反噬到了自身。他凭借着煽动性的演讲和狂热的作风上台，事实证明，他的极端思想虽带来了一时的繁荣，但最终会将自己的国家推向深渊。他以暴力手段奴役世界其他民族的努力以失败告终。",
                    "随着战争的推进，他的本质暴露无遗，他对敌人有多凶残，对自己的国民也是同样凶残。他打着“与柏林共存亡”的旗号，下令所有人投入战斗，处决所有尝试反抗这一命令的官兵。这种毫无理性可言的“爱国”，事实上却是将国家推向毁灭。他不仅害了全世界，更害了自己的国民。",
                    "4月29日凌晨1点，他与自己的女友爱娃·布劳恩举行了婚礼，并立下遗嘱。次日下午三点半，他和妻子服下毒药，同时对自己的太阳穴扣下了扳机。这个恶魔终于带着他的罪行去地狱报道了。而他的意大利同伙墨索里尼，在4月27日逃亡途中被意大利游击队捕获，第二天就被枪毙，倒挂在米兰广场上示众。",
                    "也正是在30日晚上21点50分，国会大厦上飘起了苏联的旗帜。",
                    "5月2日，柏林城防司令官魏德林上将来到苏军前线指挥所，签下投降令，柏林会战结束了，整个欧洲迎来了久违的宁静。消息传出，人们欢呼雀跃，相拥而泣。",
                    "对于欧洲而言，战争，已经结束了。",
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[世界消息]\r[aqua]德国 战败！\r"
                ]
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "confirm",
                "text": "要观看结尾吗？",
                "yes": [
                    {
                        "type": "showImage",
                        "code": 1,
                        "image": "black.png",
                        "loc": [
                            0,
                            0
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 0
                    },
                    {
                        "type": "playBgm",
                        "name": "pearlharbor.mp3",
                        "keep": true
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 2,
                        "image": "title1.png",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            140,
                            100,
                            360,
                            90
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "title2.png",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            140,
                            190,
                            350,
                            120
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "hideImage",
                        "code": 3,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end1.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "aircraft7.png",
                        "loc": [
                            640,
                            115
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "作者：\n    喜食佩刀的米格\n策划：\n    喜食佩刀的米格\n剧情：\n    喜食佩刀的米格",
                        "loc": [
                            200,
                            150
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            -195,
                            115
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            -480,
                            0
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end2.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "aircraft1.png",
                        "loc": [
                            -195,
                            115
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "rotateImage",
                        "code": 4,
                        "angle": 180,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "脚本：\n    秋橙\n美工：\n    喜食佩刀的米格\n    永葆一颗童心\n测试：\n    待定",
                        "loc": [
                            200,
                            150
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            640,
                            115
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            640,
                            0
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "waitAsync"
                    },
                    {
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end3.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "aircraft7.png",
                        "loc": [
                            143,
                            480
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "rotateImage",
                        "code": 4,
                        "angle": 90,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "灵感来源：\n        真实历史\n制作工具：\n        HTML5魔塔样板v2.8\n文本参考：\n        百度百科",
                        "loc": [
                            200,
                            150
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            143,
                            -115
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            0,
                            -480
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end4.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "aircraft2.png",
                        "loc": [
                            143,
                            -251
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "rotateImage",
                        "code": 4,
                        "angle": -90,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "图片来源：\n        互联网\n        War in the Pacific（游戏）\n        如发现图片内容与文本不符，欢迎指正",
                        "loc": [
                            200,
                            150
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            143,
                            480
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            0,
                            480
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end5.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "aircraft1.png",
                        "loc": [
                            640,
                            115
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "音乐来源：\n        碧蓝航线\n        永远的七日之都\n        双星物语\n        将军的荣耀\n        钢铁雄心\n        坦克世界\n        三国志曹操传\n        冰封前线系列\n        欧洲空战英雄\n        战争雷霆\n        空中冲突太平洋航母\n        War on the Sea\n        艾丽卡（小孩版本）\n        farthestend\n        Harbinger\n        Exodus",
                        "loc": [
                            200,
                            50
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            -195,
                            115
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            -480,
                            0
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end6.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "aircraft3.png",
                        "loc": [
                            143,
                            480
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "音效来源：（H5自带及群文件中的不算在内）\n        War in the Pacific\n        Kards\n        新抢摊登陆\n        抢摊登陆2006\n        战争雷霆\n        偷袭珍珠港\n        猎杀潜航\n        太平洋风暴：盟军\n        还有从其他魔塔借的",
                        "loc": [
                            200,
                            100
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            143,
                            -251
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            0,
                            -480
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end7.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "aircraft1.png",
                        "loc": [
                            -195,
                            115
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "rotateImage",
                        "code": 4,
                        "angle": 180,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "声明：\n    本游戏目前仅在h5mota.com发布\n    完全免费，不用于商业用途\n    剧情改编自真实历史，如有雷同，纯属正常\n    不雷同那就怪了\n    若您在其他网站发现并游玩本游戏\n    建议前往上述网站支持原版\n    不会有人付费玩这游戏吧？不会吧？",
                        "loc": [
                            200,
                            100
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            640,
                            115
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            640,
                            0
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end8.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "cvairgroup.png",
                        "loc": [
                            0,
                            -1920
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "作者B站名：大傻米格\nuid：279738052\n欢迎关注！",
                        "loc": [
                            200,
                            150
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            0,
                            480
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            0,
                            480
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end9.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "carpetbomb.png",
                        "loc": [
                            0,
                            480
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "    如有意见或建议\n     可发评论区\n     或私信作者\n欢迎一切积极友善的讨论！",
                        "loc": [
                            200,
                            120
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            0,
                            -1920
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            0,
                            -480
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "showImage",
                        "code": 3,
                        "image": "end10.jpg",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            0,
                            0,
                            null
                        ],
                        "opacity": 1,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    {
                        "type": "showImage",
                        "code": 4,
                        "image": "aircraft6.png",
                        "loc": [
                            20,
                            480
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "showTextImage",
                        "code": 2,
                        "text": "谨以本作以及另外两部前作\n向所有在第二次世界大战中\n为反法西斯事业做出贡献的\n来自世界各地的英勇战士们\n   致以最崇高的敬意！",
                        "loc": [
                            200,
                            120
                        ],
                        "lineHeight": 1.4,
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 4,
                        "to": [
                            20,
                            -330
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "moveImage",
                        "code": 3,
                        "to": [
                            0,
                            -480
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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
                        "type": "sleep",
                        "time": 5000
                    },
                    {
                        "type": "hideImage",
                        "code": 2,
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "setCurtain",
                        "color": [
                            0,
                            0,
                            0,
                            1
                        ],
                        "time": 0,
                        "keep": true
                    },
                    {
                        "type": "hideImage",
                        "code": 1,
                        "time": 0
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "MT451",
                        "loc": [
                            7,
                            0
                        ],
                        "direction": "down",
                        "time": 1000
                    }
                ],
                "no": []
            },
            "Stage 11 已完成，欧洲战场落下帷幕，你已经可以退伍还乡与家人团聚了。但还有另一个选择：挑战附加章节。难度并不算大，而且剧情架空历史。你愿意吗？",
            {
                "type": "choices",
                "text": "\t[前往附加章节？]",
                "choices": [
                    {
                        "text": "来吧，就是干。",
                        "action": [
                            {
                                "type": "confirm",
                                "text": "跳过剧情吗？",
                                "yes": [
                                    {
                                        "type": "changeFloor",
                                        "floorId": "MT416",
                                        "loc": [
                                            7,
                                            7
                                        ],
                                        "direction": "down"
                                    }
                                ],
                                "no": [
                                    {
                                        "type": "changeFloor",
                                        "floorId": "MT415",
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
                    {
                        "text": "我累了，让我回去。",
                        "action": [
                            {
                                "type": "choices",
                                "text": "\t[那如果我说，对手是某个小日子过得不错，还往海里排核废水的国家呢？]",
                                "choices": [
                                    {
                                        "text": "不早说！血脉觉醒！杀！",
                                        "action": [
                                            {
                                                "type": "confirm",
                                                "text": "跳过剧情吗？",
                                                "yes": [
                                                    {
                                                        "type": "changeFloor",
                                                        "floorId": "MT416",
                                                        "loc": [
                                                            7,
                                                            7
                                                        ],
                                                        "direction": "down"
                                                    }
                                                ],
                                                "no": [
                                                    {
                                                        "type": "changeFloor",
                                                        "floorId": "MT415",
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
                                    {
                                        "text": "我真累了，下次吧",
                                        "action": [
                                            {
                                                "type": "win",
                                                "reason": "Stage 11 胜利之歌（True End）"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "MT413",
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
        "14,5": {
            "0": {
                "condition": "!core.hasEnemyLeft(undefined,['MT410','MT411','MT412','MT413','MT414'])",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[56][1]=true\n}"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [640,641,  2,644,644,  2,270, 81,412,109,109,109,109,109,109],
    [640,641,  2,518,518,  2,  0,  2,664,642,109,109,109,109,109],
    [228,  0,  2,228,  0,270,  0,  2,  0,642,109,109,109,109,109],
    [ 81,  2,  2, 81,  2,  2,  2,  2,391,642,279,109,109,109,109],
    [275,266,  0,376,  0,391,  0,  2,  2,  2,642,109,109,109,109],
    [  0,265,375,228,377,  2,265,  0,  0,  2,639,639,109,109,109],
    [  2,  2,  2, 81,  2,  2,  2,  2,279,  2,  2,  2,109,109,109],
    [ 92,  0,  0,412,580,580,580,  2,275, 81,665,665,666, 89,109],
    [  2,  2,  2, 81,  2,  2,  2,  2,279,  2,  2,  2,109,109,109],
    [  0,265,375,228,377,  2,265,  0,  0,  2,639,639,109,109,109],
    [275,266,  0,376,  0,391,  0,  2,  2,  2,642,109,109,109,109],
    [ 81,  2,  2, 81,  2,  2,  2,  2,391,642,279,109,109,109,109],
    [228,  0,  2,228,  0,270,  0,  2,  0,642,109,109,109,109,109],
    [640,641,  2,518,518,  2,  0,  2,664,642,109,109,109,109,109],
    [640,641,  2,644,644,  2,270, 81,412,109,109,109,109,109,109]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,574,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,574,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,574,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0,  0],
    [  0,574,  0,  0,  0,574,  0,  0,  0,  0,  0,574,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [574,  0,  0,  0,  0,  0,574,  0,  0,  0,  0,574,  0,  0,  0],
    [  0,  0,  0,  0,  0,574,  0,  0,  0,574,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,574,  0,  0,  0,574,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,574,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,574,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "陆地"
}