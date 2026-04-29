main.floors.MT304=
{
    "floorId": "MT304",
    "title": "英国",
    "name": "英国",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "cao6.mp3",
    "firstArrive": [
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
            "pos": 5
        },
        {
            "type": "unloadEquip",
            "pos": 6
        },
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "update"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "showui"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        {
            "type": "openShop",
            "id": "shop8"
        },
        {
            "type": "openShop",
            "id": "shop9"
        },
        "\t[系统提示]已开启1944年商店"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,11": [
            "\t[参谋,N517]长官，请下达指示！",
            "\t[系统提示]即将进入存档界面",
            {
                "type": "callSave"
            },
            {
                "type": "insert",
                "name": "选择技能"
            },
            {
                "type": "choices",
                "text": "是否立即前往战场？",
                "choices": [
                    {
                        "text": "还没准备好",
                        "action": []
                    },
                    {
                        "text": "现在出发",
                        "action": [
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
                                "type": "changeFloor",
                                "floorId": "MT305",
                                "loc": [
                                    7,
                                    0
                                ],
                                "direction": "down"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,11": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：大量德国空军、地面高射炮、中小型军舰。\n推荐携带技能：防空弹幕、空战王牌、预警、破译、补给线、从海底出击、红色尾翼\n推荐出战装备：P51D野马、蚊式战斗机、B25米切尔。",
            "可以在此清空技能槽，以便于玩家重新选择技能",
            {
                "type": "confirm",
                "text": "清空技能槽？",
                "yes": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.skillList=[0,0,0,0,0,0,0]\n}"
                    }
                ],
                "no": []
            }
        ],
        "7,13": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]新商店的东西太多了，而且个个都是好货，不会买了？跟着那边的牌子买就好了。钱不够？那就卖些无关紧要的旧装备吧！"
        ],
        "6,11": [
            "\t[机场后勤,N516]长官，我方空军已就绪！",
            {
                "type": "insert",
                "name": "选择飞机"
            }
        ],
        "9,11": [
            {
                "type": "choices",
                "text": "\t[退役装备,N599]破烂换钱~收破烂嘞~",
                "choices": [
                    {
                        "text": "退役 雷诺FT17",
                        "icon": "ft17",
                        "need": "core.hasItem('ft17')&&!core.hasEquip('ft17')",
                        "condition": "core.hasItem('ft17')&&!core.hasEquip('ft17')",
                        "action": [
                            {
                                "type": "playSound",
                                "name": "shop.mp3"
                            },
                            {
                                "type": "setValue",
                                "name": "item:ft17",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "status:money",
                                "operator": "+=",
                                "value": "60"
                            }
                        ]
                    },
                    {
                        "text": "退役 哈奇开斯H35",
                        "icon": "h35",
                        "need": "core.hasItem('h35')&&!core.hasEquip('h35')",
                        "condition": "core.hasItem('h35')&&!core.hasEquip('h35')",
                        "action": [
                            {
                                "type": "playSound",
                                "name": "shop.mp3"
                            },
                            {
                                "type": "setValue",
                                "name": "item:h35",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "status:money",
                                "operator": "+=",
                                "value": "120"
                            }
                        ]
                    },
                    {
                        "text": "退役 十字军巡洋坦克",
                        "icon": "crusades",
                        "need": "core.hasItem('crusades')&&!core.hasEquip('crusades')",
                        "condition": "core.hasItem('crusades')&&!core.hasEquip('crusades')",
                        "action": [
                            {
                                "type": "playSound",
                                "name": "shop.mp3"
                            },
                            {
                                "type": "setValue",
                                "name": "item:crusades",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "status:money",
                                "operator": "+=",
                                "value": "720"
                            }
                        ]
                    },
                    {
                        "text": "退役 瓦伦丁步兵坦克",
                        "icon": "valentine",
                        "need": "core.hasItem('valentine')&&!core.hasEquip('valentine')",
                        "condition": "core.hasItem('valentine')&&!core.hasEquip('valentine')",
                        "action": [
                            {
                                "type": "playSound",
                                "name": "shop.mp3"
                            },
                            {
                                "type": "setValue",
                                "name": "item:valentine",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "status:money",
                                "operator": "+=",
                                "value": "840"
                            }
                        ]
                    },
                    {
                        "text": "退役 玛蒂尔达步兵坦克",
                        "icon": "matilda",
                        "need": "core.hasItem('matilda')&&!core.hasEquip('matilda')",
                        "condition": "core.hasItem('matilda')&&!core.hasEquip('matilda')",
                        "action": [
                            {
                                "type": "playSound",
                                "name": "shop.mp3"
                            },
                            {
                                "type": "setValue",
                                "name": "item:matilda",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "status:money",
                                "operator": "+=",
                                "value": "1080"
                            }
                        ]
                    },
                    {
                        "text": "退役 M3格兰特中型坦克",
                        "icon": "m3grant",
                        "need": "core.hasItem('m3grant')&&!core.hasEquip('m3grant')",
                        "condition": "core.hasItem('m3grant')&&!core.hasEquip('m3grant')",
                        "action": [
                            {
                                "type": "playSound",
                                "name": "shop.mp3"
                            },
                            {
                                "type": "setValue",
                                "name": "item:m3grant",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "status:money",
                                "operator": "+=",
                                "value": "1320"
                            }
                        ]
                    },
                    {
                        "text": "退役 M4谢尔曼",
                        "icon": "m4",
                        "need": "core.hasItem('m4')&&!core.hasEquip('m4')",
                        "condition": "core.hasItem('m4')&&!core.hasEquip('m4')",
                        "action": [
                            {
                                "type": "confirm",
                                "text": "该装备可改造，确定直接出售？",
                                "yes": [
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:m4",
                                        "operator": "-=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "+=",
                                        "value": "1000"
                                    }
                                ],
                                "no": []
                            }
                        ]
                    },
                    {
                        "text": "退役 M4A2谢尔曼",
                        "icon": "m4a2",
                        "need": "core.hasItem('m4a2')&&!core.hasEquip('m4a2')",
                        "condition": "core.hasItem('m4a2')&&!core.hasEquip('m4a2')",
                        "action": [
                            {
                                "type": "confirm",
                                "text": "该装备可改造，确定直接出售？",
                                "yes": [
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:m4a2",
                                        "operator": "-=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "+=",
                                        "value": "1400"
                                    }
                                ],
                                "no": []
                            }
                        ]
                    },
                    {
                        "text": "退役 M4A1(76W)",
                        "icon": "m4a3",
                        "need": "core.hasItem('m4a3')&&!core.hasEquip('m4a3')",
                        "condition": "core.hasItem('m4a3')&&!core.hasEquip('m4a3')",
                        "action": [
                            {
                                "type": "confirm",
                                "text": "该装备可改造，确定直接出售？",
                                "yes": [
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:m4a3",
                                        "operator": "-=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "+=",
                                        "value": "2200"
                                    }
                                ],
                                "no": []
                            }
                        ]
                    },
                    {
                        "text": "退役 丘吉尔MK3",
                        "icon": "churchillmk3",
                        "need": "core.hasItem('churchillmk3')&&!core.hasEquip('churchillmk3')",
                        "condition": "core.hasItem('churchillmk3')&&!core.hasEquip('churchillmk3')",
                        "action": [
                            {
                                "type": "confirm",
                                "text": "该装备可改造，确定直接出售？",
                                "yes": [
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:churchillmk3",
                                        "operator": "-=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "+=",
                                        "value": "1200"
                                    }
                                ],
                                "no": []
                            }
                        ]
                    },
                    {
                        "text": "退役 M4A3E2巨无霸",
                        "icon": "m4a3e2",
                        "need": "core.hasItem('m4a3e2')&&!core.hasEquip('m4a3e2')",
                        "condition": "core.hasItem('m4a3e2')&&!core.hasEquip('m4a3e2')",
                        "action": [
                            {
                                "type": "confirm",
                                "text": "该装备可改造，确定直接出售？",
                                "yes": [
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:m4a3e2",
                                        "operator": "-=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "+=",
                                        "value": "6000"
                                    }
                                ],
                                "no": []
                            }
                        ]
                    },
                    {
                        "text": "退役 谢尔曼“萤火虫”",
                        "icon": "firefly",
                        "need": "core.hasItem('firefly')&&!core.hasEquip('firefly')",
                        "condition": "core.hasItem('firefly')&&!core.hasEquip('firefly')",
                        "action": [
                            {
                                "type": "confirm",
                                "text": "该装备可改造，确定直接出售？",
                                "yes": [
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:firefly",
                                        "operator": "-=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "+=",
                                        "value": "9000"
                                    }
                                ],
                                "no": []
                            }
                        ]
                    },
                    {
                        "text": "下一页",
                        "action": [
                            {
                                "type": "choices",
                                "text": "\t[退役装备,N599]破烂换钱~收破烂嘞~",
                                "choices": [
                                    {
                                        "text": "退役 E级驱逐舰",
                                        "icon": "classe",
                                        "need": "core.hasItem('classe')&&!core.hasEquip('classe')",
                                        "condition": "core.hasItem('classe')&&!core.hasEquip('classe')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:classe",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "300"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 V级驱逐舰",
                                        "icon": "classv",
                                        "need": "core.hasItem('classv')&&!core.hasEquip('classv')",
                                        "condition": "core.hasItem('classv')&&!core.hasEquip('classv')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:classv",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "360"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 马汉级驱逐舰",
                                        "icon": "mahan",
                                        "need": "core.hasItem('mahan')&&!core.hasEquip('mahan')",
                                        "condition": "core.hasItem('mahan')&&!core.hasEquip('mahan')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:mahan",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "312"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 本森级驱逐舰",
                                        "icon": "benson",
                                        "need": "core.hasItem('benson')&&!core.hasEquip('benson')",
                                        "condition": "core.hasItem('benson')&&!core.hasEquip('benson')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:benson",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "450"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 J级驱逐舰",
                                        "icon": "classj",
                                        "need": "core.hasItem('classj')&&!core.hasEquip('classj')",
                                        "condition": "core.hasItem('classj')&&!core.hasEquip('classj')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:classj",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "2100"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 弗莱彻级驱逐舰",
                                        "icon": "flecher",
                                        "need": "core.hasItem('flecher')&&!core.hasEquip('flecher')",
                                        "condition": "core.hasItem('flecher')&&!core.hasEquip('flecher')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:flecher",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "9000"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 爱丁堡号轻巡洋舰",
                                        "icon": "edinburgh",
                                        "need": "core.hasItem('edinburgh')&&!core.hasEquip('edinburgh')",
                                        "condition": "core.hasItem('edinburgh')&&!core.hasEquip('edinburgh')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:edinburgh",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "720"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 诺福克号重巡洋舰",
                                        "icon": "norfolk",
                                        "need": "core.hasItem('norfolk')&&!core.hasEquip('norfolk')",
                                        "condition": "core.hasItem('norfolk')&&!core.hasEquip('norfolk')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:norfolk",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "900"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 谢菲尔德号轻巡洋舰",
                                        "icon": "sheffield",
                                        "need": "core.hasItem('sheffield')&&!core.hasEquip('sheffield')",
                                        "condition": "core.hasItem('sheffield')&&!core.hasEquip('sheffield')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:sheffield",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "1500"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 克利夫兰号轻巡洋舰",
                                        "icon": "cleveland",
                                        "need": "core.hasItem('cleveland')&&!core.hasEquip('cleveland')",
                                        "condition": "core.hasItem('cleveland')&&!core.hasEquip('cleveland')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:cleveland",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "2400"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 巴尔的摩号轻巡洋舰",
                                        "icon": "baltimore",
                                        "need": "core.hasItem('baltimore')&&!core.hasEquip('baltimore')",
                                        "condition": "core.hasItem('baltimore')&&!core.hasEquip('baltimore')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:baltimore",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "12000"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 厌战号战列舰",
                                        "icon": "warspite",
                                        "need": "core.hasItem('warspite')&&!core.hasEquip('warspite')",
                                        "condition": "core.hasItem('warspite')&&!core.hasEquip('warspite')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:warspite",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "1500"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 乔治五世级战列舰",
                                        "icon": "kinggeorge5",
                                        "need": "core.hasItem('kinggeorge5')&&!core.hasEquip('kinggeorge5')",
                                        "condition": "core.hasItem('kinggeorge5')&&!core.hasEquip('kinggeorge5')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:kinggeorge5",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "4200"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 北卡罗莱纳号战列舰",
                                        "icon": "northcarolina",
                                        "need": "core.hasItem('northcarolina')&&!core.hasEquip('northcarolina')",
                                        "condition": "core.hasItem('northcarolina')&&!core.hasEquip('northcarolina')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:northcarolina",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "6000"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 衣阿华级战列舰",
                                        "icon": "iowa",
                                        "need": "core.hasItem('iowa')&&!core.hasEquip('iowa')",
                                        "condition": "core.hasItem('iowa')&&!core.hasEquip('iowa')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:iowa",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "18000"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 鹰号航空母舰",
                                        "icon": "eagle",
                                        "need": "core.hasItem('eagle')&&!core.hasEquip('eagle')",
                                        "condition": "core.hasItem('eagle')&&!core.hasEquip('eagle')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:eagle",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "1200"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 突击者号航空母舰",
                                        "icon": "raider",
                                        "need": "core.hasItem('raider')&&!core.hasEquip('raider')",
                                        "condition": "core.hasItem('raider')&&!core.hasEquip('raider')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:raider",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "2400"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 光辉号航空母舰",
                                        "icon": "illustrious",
                                        "need": "core.hasItem('illustrious')&&!core.hasEquip('illustrious')",
                                        "condition": "core.hasItem('illustrious')&&!core.hasEquip('illustrious')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:illustrious",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "4800"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 埃塞克斯级航空母舰",
                                        "icon": "essex",
                                        "need": "core.hasItem('essex')&&!core.hasEquip('essex')",
                                        "condition": "core.hasItem('essex')&&!core.hasEquip('essex')",
                                        "action": [
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:essex",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "21000"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "下一页",
                                        "action": [
                                            {
                                                "type": "choices",
                                                "text": "\t[退役装备,N599]破烂换钱~收破烂嘞~",
                                                "choices": [
                                                    {
                                                        "text": "退役 斗士MK2",
                                                        "icon": "wrestler",
                                                        "need": "core.hasItem('wrestler')&&!core.hasEquip('wrestler')",
                                                        "condition": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:wrestler",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "45"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 喷火MK1型",
                                                        "icon": "spitfiremk1",
                                                        "need": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
                                                        "condition": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
                                                        "action": [
                                                            {
                                                                "type": "confirm",
                                                                "text": "该装备可改造，确定直接出售？",
                                                                "yes": [
                                                                    {
                                                                        "type": "playSound",
                                                                        "name": "shop.mp3"
                                                                    },
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "item:spitfiremk1",
                                                                        "operator": "-=",
                                                                        "value": "1"
                                                                    },
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "status:money",
                                                                        "operator": "+=",
                                                                        "value": "280"
                                                                    }
                                                                ],
                                                                "no": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 飓风MK1型",
                                                        "icon": "hurricanemk1",
                                                        "need": "core.hasItem('hurricanemk1')&&!core.hasEquip('hurricanemk1')",
                                                        "condition": "core.hasItem('hurricanemk2')&&!core.hasEquip('hurricanemk2')",
                                                        "action": [
                                                            {
                                                                "type": "confirm",
                                                                "text": "该装备可改造，确定直接出售？",
                                                                "yes": [
                                                                    {
                                                                        "type": "playSound",
                                                                        "name": "shop.mp3"
                                                                    },
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "item:hurricanemk1",
                                                                        "operator": "-=",
                                                                        "value": "1"
                                                                    },
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "status:money",
                                                                        "operator": "+=",
                                                                        "value": "160"
                                                                    }
                                                                ],
                                                                "no": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 P40B战斧",
                                                        "icon": "p40c",
                                                        "need": "core.hasItem('p40c')&&!core.hasEquip('p40c')",
                                                        "condition": "core.hasItem('hurricanemk2')&&!core.hasEquip('hurricanemk2')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:p40c",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "210"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 飓风MK2型",
                                                        "icon": "hurricanemk2",
                                                        "need": "core.hasItem('hurricanemk2')&&!core.hasEquip('hurricanemk2')",
                                                        "condition": "core.hasItem('hurricanemk2')&&!core.hasEquip('hurricanemk2')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:hurricanemk2",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "720"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 F4F野猫战斗机",
                                                        "icon": "f4f3",
                                                        "need": "core.hasItem('f4f3')&&!core.hasEquip('f4f3')",
                                                        "condition": "core.hasItem('f4f3')&&!core.hasEquip('f4f3')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:f4f3",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "720"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 喷火MK5",
                                                        "icon": "spitfiremk5",
                                                        "need": "core.hasItem('spitfiremk5')&&!core.hasEquip('spitfiremk5')",
                                                        "condition": "core.hasItem('spitfiremk5')&&!core.hasEquip('spitfiremk5')",
                                                        "action": [
                                                            {
                                                                "type": "confirm",
                                                                "text": "该装备可改造，确定直接出售？",
                                                                "yes": [
                                                                    {
                                                                        "type": "playSound",
                                                                        "name": "shop.mp3"
                                                                    },
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "item:spitfiremk5",
                                                                        "operator": "-=",
                                                                        "value": "1"
                                                                    },
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "status:money",
                                                                        "operator": "+=",
                                                                        "value": "1000"
                                                                    }
                                                                ],
                                                                "no": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 P47B雷电",
                                                        "icon": "p47b",
                                                        "need": "core.hasItem('p47b')&&!core.hasEquip('p47b')",
                                                        "condition": "core.hasItem('p47b')&&!core.hasEquip('p47b')",
                                                        "action": [
                                                            {
                                                                "type": "confirm",
                                                                "text": "该装备可改造，确定直接出售？",
                                                                "yes": [
                                                                    {
                                                                        "type": "playSound",
                                                                        "name": "shop.mp3"
                                                                    },
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "item:p47b",
                                                                        "operator": "-=",
                                                                        "value": "1"
                                                                    },
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "status:money",
                                                                        "operator": "+=",
                                                                        "value": "1000"
                                                                    }
                                                                ],
                                                                "no": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 喷火MK9",
                                                        "icon": "spitfiremk9",
                                                        "need": "core.hasItem('spitfiremk9')&&!core.hasEquip('spitfiremk9')",
                                                        "condition": "core.hasItem('spitfiremk9')&&!core.hasEquip('spitfiremk9')",
                                                        "action": [
                                                            {
                                                                "type": "confirm",
                                                                "text": "该装备可改造，确定直接出售？",
                                                                "yes": [
                                                                    {
                                                                        "type": "playSound",
                                                                        "name": "shop.mp3"
                                                                    },
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "item:spitfiremk9",
                                                                        "operator": "-=",
                                                                        "value": "1"
                                                                    },
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "status:money",
                                                                        "operator": "+=",
                                                                        "value": "1400"
                                                                    }
                                                                ],
                                                                "no": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 F6F地狱猫",
                                                        "icon": "f6f5",
                                                        "need": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
                                                        "condition": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:f6f5",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "3500"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 喷火MK16",
                                                        "icon": "spitfiremk16",
                                                        "need": "core.hasItem('spitfiremk16')&&!core.hasEquip('spitfiremk16')",
                                                        "condition": "core.hasItem('spitfiremk16')&&!core.hasEquip('spitfiremk16')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:spitfiremk16",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "6000"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 F4U海盗",
                                                        "icon": "f4u",
                                                        "need": "core.hasItem('f4u')&&!core.hasEquip('f4u')",
                                                        "condition": "core.hasItem('f4u')&&!core.hasEquip('f4u')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:f4u",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "7200"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 P51D野马",
                                                        "icon": "p51d",
                                                        "need": "core.hasItem('p51d')&&!core.hasEquip('p51d')",
                                                        "condition": "core.hasItem('p51d')&&!core.hasEquip('p51d')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:p51d",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "9000"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 贼鸥式轰炸机",
                                                        "icon": "skua",
                                                        "need": "core.hasItem('skua')&&!core.hasEquip('skua')",
                                                        "condition": "core.hasItem('skua')&&!core.hasEquip('skua')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:skua",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "180"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 SBD无畏式轰炸机",
                                                        "icon": "sbd3",
                                                        "need": "core.hasItem('sbd3')&&!core.hasEquip('sbd3')",
                                                        "condition": "core.hasItem('sbd3')&&!core.hasEquip('sbd3')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:sbd3",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "600"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 英俊战士重型战斗机",
                                                        "icon": "beautifighter",
                                                        "need": "core.hasItem('beautifighter')&&!core.hasEquip('beautifighter')",
                                                        "condition": "core.hasItem('beautifighter')&&!core.hasEquip('beautifighter')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:beautifighter",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "1800"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 P38闪电战斗机",
                                                        "icon": "p38",
                                                        "need": "core.hasItem('p38')&&!core.hasEquip('p38')",
                                                        "condition": "core.hasItem('p38')&&!core.hasEquip('p38')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:p38",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "1920"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 台风战斗机",
                                                        "icon": "typhoon",
                                                        "need": "core.hasItem('typhoon')&&!core.hasEquip('typhoon')",
                                                        "condition": "core.hasItem('typhoon')&&!core.hasEquip('typhoon')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:typhoon",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "1500"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 蚊式战斗机",
                                                        "icon": "mosquito",
                                                        "need": "core.hasItem('mosquito')&&!core.hasEquip('mosquito')",
                                                        "condition": "core.hasItem('mosquito')&&!core.hasEquip('mosquito')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:mosquito",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "3000"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 P47D雷电",
                                                        "icon": "p47d",
                                                        "need": "core.hasItem('p47d')&&!core.hasEquip('p47d')",
                                                        "condition": "core.hasItem('p47d')&&!core.hasEquip('p47d')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:p47d",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "7200"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 SB2C地狱俯冲者",
                                                        "icon": "sb2c",
                                                        "need": "core.hasItem('sb2c')&&!core.hasEquip('sb2c')",
                                                        "condition": "core.hasItem('sb2c')&&!core.hasEquip('sb2c')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:sb2c",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "7200"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 P61黑寡妇",
                                                        "icon": "p61",
                                                        "need": "core.hasItem('p61')&&!core.hasEquip('p61')",
                                                        "condition": "core.hasItem('p61')&&!core.hasEquip('p61')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:p61",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "10800"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 布伦海姆轰炸机",
                                                        "icon": "blenheim",
                                                        "need": "core.hasItem('blenheim')&&!core.hasEquip('blenheim')",
                                                        "condition": "core.hasItem('blenheim')&&!core.hasEquip('blenheim')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blenheim",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "280"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 剑鱼式鱼雷机",
                                                        "icon": "swordfish",
                                                        "need": "core.hasItem('swordfish')&&!core.hasEquip('swordfish')",
                                                        "condition": "core.hasItem('swordfish')&&!core.hasEquip('swordfish')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:swordfish",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "150"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 TBD蹂躏者鱼雷机",
                                                        "icon": "tbd",
                                                        "need": "core.hasItem('tbd')&&!core.hasEquip('tbd')",
                                                        "condition": "core.hasItem('tbd')&&!core.hasEquip('tbd')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:tbd",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "480"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 梭鱼式鱼雷机",
                                                        "icon": "barracuda",
                                                        "need": "core.hasItem('barracuda')&&!core.hasEquip('barracuda')",
                                                        "condition": "core.hasItem('barracuda')&&!core.hasEquip('barracuda')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:barracuda",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "1800"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 TBF复仇者鱼雷机",
                                                        "icon": "tbf",
                                                        "need": "core.hasItem('tbf')&&!core.hasEquip('tbf')",
                                                        "condition": "core.hasItem('tbf')&&!core.hasEquip('tbf')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:tbf",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "3600"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 B25米切尔轰炸机",
                                                        "icon": "b25",
                                                        "need": "core.hasItem('b25')&&!core.hasEquip('b25')",
                                                        "condition": "core.hasItem('b25')&&!core.hasEquip('b25')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:b25",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "1500"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 B17空中堡垒轰炸机",
                                                        "icon": "b17",
                                                        "need": "core.hasItem('b17')&&!core.hasEquip('b17')",
                                                        "condition": "core.hasItem('b17')&&!core.hasEquip('b17')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:b17",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "3900"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 兰开斯特轰炸机",
                                                        "icon": "lancaster",
                                                        "need": "core.hasItem('lancaster')&&!core.hasEquip('lancaster')",
                                                        "condition": "core.hasItem('lancaster')&&!core.hasEquip('lancaster')",
                                                        "action": [
                                                            {
                                                                "type": "playSound",
                                                                "name": "shop.mp3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:lancaster",
                                                                "operator": "-=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:money",
                                                                "operator": "+=",
                                                                "value": "5100"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "返回",
                                                        "action": []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "返回",
                                        "action": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    }
                ]
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
    [120096,120097,120098,120099,120100,120101,120096,120097,120098,120099,120100,120101,150175,150176,150177],
    [120140,120141,120142,120143,120144,120145,120140,120141,120142,120143,120144,120145,150200,150201,150202],
    [120184,120185,120186,120187,120188,120189,120184,120185,120186,120187,120188,120189,150225,150226,150227],
    [120228,120229,120230,120231,120232,120233,120228,120229,120230,120231,120232,120233,150250,150251,150252],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [150161,150162,150163,150164,  0,  0,120059,120060,120061,120062,120063,120064,  0,150161,150162],
    [150186,150187,150188,150189,  0,  0,120103,120104,120105,120106,120107,120108,  0,150186,150187],
    [150211,150212,150213,150214,  0,  0,120147,120148,120149,120150,120151,120152,  0,150211,150212],
    [150236,150237,150238,150239,  0,  0,120191,120192,120193,120194,120195,120196,  0,150236,150237],
    [150261,150262,150263,150264,  0,  0,120235,120236,120237,120238,120239,120240,  0,150261,150262],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [150155,150156,150157,150158,150159,  0,516,  0,  0,599,517,129,  0,  0,  0],
    [150180,150181,150182,150183,150184,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [150205,150206,150207,150208,150209,  0,  0,601,  0,120726,120727,120728,120729,120730,120731],
    [150230,150231,150232,150233,150234,  0,  0,  0,  0,120770,120771,120772,120773,120774,120775]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [120760,120760,120760,120760,120760,120760,120760,120760,120760,120760,120760,120760,120760,120760,120760],
    [120804,120804,120804,120804,120804,120804,120804,120804,120804,120804,120804,120804,120804,120804,120804],
    [120838,120838,120892,120838,120838,120892,120838,120838,120892,120838,120838,120892,120838,120838,120892],
    [120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892],
    [120892,120838,120838,120838,120892,120838,120838,120838,120892,120838,120838,120838,120892,120838,120838],
    [120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892],
    [120838,120838,120892,120838,120838,120892,120838,120838,120892,120838,120838,120892,120838,120838,120892],
    [120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892,120892],
    [120936,120936,120936,120936,120936,120936,120936,120936,120936,120936,120936,120936,120936,120936,120936],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,120682,120683,120684,120685,120686,120687],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "陆地"
}