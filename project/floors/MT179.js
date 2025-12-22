main.floors.MT179=
{
    "floorId": "MT179",
    "title": "开罗-军营",
    "name": "开罗-军营",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "cao6.mp3",
    "firstArrive": [
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
            "type": "openShop",
            "id": "shop5"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]已开启5号商店",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]下一关是夜间行动，所以大部分空军无法正常出战。另外，如果不喜欢夜间灯光效果，请在设置中将其关闭。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,11": [
            "\t[维修人员,N514]长官，所有战车准备就绪！",
            {
                "type": "choices",
                "text": "\t[维修人员,N514]请选择出战坦克",
                "choices": [
                    {
                        "text": "装备 雷诺FT17",
                        "icon": "ft17",
                        "need": "core.hasItem('ft17')&&!core.hasEquip('ft17')",
                        "condition": "core.hasItem('ft17')&&!core.hasEquip('ft17')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "ft17"
                            }
                        ]
                    },
                    {
                        "text": "装备 哈奇开斯H35",
                        "icon": "h35",
                        "need": "core.hasItem('h35')&&!core.hasEquip('h35')",
                        "condition": "core.hasItem('h35')&&!core.hasEquip('h35')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "h35"
                            }
                        ]
                    },
                    {
                        "text": "装备 十字军巡洋坦克",
                        "icon": "crusades",
                        "need": "core.hasItem('crusades')&&!core.hasEquip('crusades')",
                        "condition": "core.hasItem('crusades')&&!core.hasEquip('crusades')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "crusades"
                            }
                        ]
                    },
                    {
                        "text": "装备 瓦伦丁步兵坦克",
                        "icon": "valentine",
                        "need": "core.hasItem('valentine')&&!core.hasEquip('valentine')",
                        "condition": "core.hasItem('valentine')&&!core.hasEquip('valentine')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "valentine"
                            }
                        ]
                    },
                    {
                        "text": "装备 玛蒂尔达步兵坦克",
                        "icon": "matilda",
                        "need": "core.hasItem('matilda')&&!core.hasEquip('matilda')",
                        "condition": "core.hasItem('matilda')&&!core.hasEquip('matilda')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "matilda"
                            }
                        ]
                    },
                    {
                        "text": "装备 M3格兰特中型坦克",
                        "icon": "m3grant",
                        "need": "core.hasItem('m3grant')&&!core.hasEquip('m3grant')",
                        "condition": "core.hasItem('m3grant')&&!core.hasEquip('m3grant')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "m3grant"
                            }
                        ]
                    },
                    {
                        "text": "装备 M4谢尔曼中型坦克",
                        "icon": "m4",
                        "need": "core.hasItem('m4')&&!core.hasEquip('m4')",
                        "condition": "core.hasItem('m4')&&!core.hasEquip('m4')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "m4"
                            }
                        ]
                    },
                    {
                        "text": "装备 丘吉尔MK3步兵坦克",
                        "icon": "churchillmk3",
                        "need": "core.hasItem('churchillmk3')&&!core.hasEquip('churchillmk3')",
                        "condition": "core.hasItem('churchillmk3')&&!core.hasEquip('churchillmk3')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "churchillmk3"
                            }
                        ]
                    },
                    {
                        "text": "卸下当前坦克",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 0
                            }
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    }
                ]
            }
        ],
        "7,11": [
            "\t[机场后勤,N516]长官，我方空军已就绪！",
            {
                "type": "choices",
                "text": "\t[机场后勤,N516]请选择出战空军",
                "choices": [
                    {
                        "text": "装备 英俊战士重型战斗机",
                        "icon": "beautifighter",
                        "need": "core.hasItem('beautifighter')&&!core.hasEquip('beautifighter')",
                        "condition": "core.hasItem('beautifighter')&&!core.hasEquip('beautifighter')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "beautifighter"
                            }
                        ]
                    },
                    {
                        "text": "装备 P38闪电重型战斗机",
                        "icon": "p38",
                        "need": "core.hasItem('p38')&&!core.hasEquip('p38')",
                        "condition": "core.hasItem('p38')&&!core.hasEquip('p38')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p38"
                            }
                        ]
                    },
                    {
                        "text": "装备 B25米切尔轰炸机",
                        "icon": "b25",
                        "need": "core.hasItem('b25')&&!core.hasEquip('b25')",
                        "condition": "core.hasItem('b25')&&!core.hasEquip('b25')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "b25"
                            }
                        ]
                    },
                    {
                        "text": "卸下当前战斗机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 4
                            }
                        ]
                    },
                    {
                        "text": "卸下当前攻击机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 5
                            }
                        ]
                    },
                    {
                        "text": "卸下当前轰炸机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 6
                            }
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    }
                ]
            }
        ],
        "12,11": [
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
                                "floorId": "MT180",
                                "loc": [
                                    7,
                                    14
                                ],
                                "direction": "down"
                            }
                        ]
                    }
                ]
            }
        ],
        "13,12": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：德意联军，协同攻击类技能较多。\n推荐携带技能：防空弹幕、空战王牌、预警、扫雷、抵抗运动、破译、空中打击。\n推荐出战装备：M4谢尔曼、英俊战士、B25米切尔",
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
        "0,13": [
            {
                "type": "if",
                "condition": "(flag:MT179retire!==true)",
                "true": [
                    {
                        "type": "animate",
                        "name": "irritable",
                        "loc": [
                            0,
                            13
                        ]
                    },
                    "\t[喜食佩刀的米格,N599]懒得做专门退役装备的商店了，就由我自己亲自来回收吧！我会在后面的每个准备阶段与NPC一起出现的哦！",
                    {
                        "type": "setValue",
                        "name": "flag:MT179retire",
                        "value": "true"
                    }
                ]
            },
            {
                "type": "choices",
                "text": "\t[退役装备,N599]破烂换钱~收破烂嘞~",
                "choices": [
                    {
                        "text": "退役 雷诺FT17（50）",
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
                                "value": "50"
                            }
                        ]
                    },
                    {
                        "text": "退役 哈奇开斯H35（100）",
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
                                "value": "100"
                            }
                        ]
                    },
                    {
                        "text": "退役 十字军巡洋坦克（600）",
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
                                "value": "600"
                            }
                        ]
                    },
                    {
                        "text": "退役 瓦伦丁步兵坦克（700）",
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
                                "value": "700"
                            }
                        ]
                    },
                    {
                        "text": "退役 玛蒂尔达步兵坦克（900）",
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
                                "value": "900"
                            }
                        ]
                    },
                    {
                        "text": "退役 M3格兰特中型坦克（1100）",
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
                                "value": "1100"
                            }
                        ]
                    },
                    {
                        "text": "下一页（舰船）",
                        "action": [
                            {
                                "type": "choices",
                                "text": "\t[退役装备,N599]破烂换钱~收破烂嘞~",
                                "choices": [
                                    {
                                        "text": "退役 E级驱逐舰（250）",
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
                                                "value": "250"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 V级驱逐舰（300）",
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
                                                "value": "300"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 马汉级驱逐舰（260）",
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
                                                "value": "260"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 本森级驱逐舰（325）",
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
                                                "value": "325"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 爱丁堡号轻巡洋舰（600）",
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
                                                "value": "600"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 诺福克号重巡洋舰（750）",
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
                                                "value": "750"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退役 鹰号航空母舰（1000）",
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
                                                "value": "1000"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "下一页（飞机）",
                                        "action": [
                                            {
                                                "type": "choices",
                                                "text": "\t[退役装备,N599]破烂换钱~收破烂嘞~",
                                                "choices": [
                                                    {
                                                        "text": "退役 斗士MK2（32）",
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
                                                                "value": "32"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 喷火MK1型（350）",
                                                        "icon": "spitfiremk1",
                                                        "need": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
                                                        "condition": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
                                                        "action": [
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
                                                                "value": "350"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 飓风MK1型（200）",
                                                        "icon": "hurricanemk1",
                                                        "need": "core.hasItem('hurricanemk1')&&!core.hasEquip('hurricanemk1')",
                                                        "condition": "core.hasItem('hurricanemk2')&&!core.hasEquip('hurricanemk2')",
                                                        "action": [
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
                                                                "value": "200"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 P40B战斧（175）",
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
                                                                "value": "175"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 飓风MK2型（600）",
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
                                                                "value": "600"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 F4F野猫战斗机（600）",
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
                                                                "value": "600"
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
                                                                "value": "150"
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
                                                                "value": "500"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退役 布伦海姆轰炸机",
                                                        "icon": "blenheim",
                                                        "need": "core.hasItem('blenheim')&&!core.hasEquip('blenheim')",
                                                        "condition": "core.hasItem('swordfish')&&!core.hasEquip('swordfish')",
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
                                                                "value": "350"
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
                                                                "value": "125"
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
                                                                "value": "400"
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
    [  0,  0,  0,60028,60026,  0,60034,  0,  0,  0,60027,  0,60034,  0,  0],
    [60026,  0,60034,60036,  0,  0,  0,  0,  0,  0,60035,  0,  0,  0,  0],
    [  0,  0,  0,  0,60027,  0,  0,  0,  0,60028,  0,60026,  0,  0,60034],
    [60034,  0,  0,  0,60035,  0,  0,  0,  0,60036,60026,  0,  0,  0,  0],
    [  0,60129,60130,  0,  0,  0,  0,60129,60130,  0,  0,  0,  0,60129,60130],
    [60133,60134,60134,60134,60134,60134,60134,60134,60134,60134,60134,60134,60134,60134,60134],
    [60141,60142,60142,60142,60142,20091,20091,20091,60142,60142,60142,60142,60142,60142,60142],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,20108,20108,  0,  0,  0,  0],
    [  0,  0,20114,  0,  0,  0,  0,20114,  0,  0,  0,  0,20114,  0,  0],
    [20120,20121,20122,20123,20124,20120,20121,20122,20123,20124,20120,20121,20122,20123,20124],
    [20128,20129,20130,20131,20132,20128,20129,20130,20131,20132,20128,20129,20130,20131,20132],
    [20136,20137,514,20139,20140,20136,20137,516,20139,20140,20136,20137,517,20139,20140],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10147,  0],
    [599,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
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
    [  0,  0,20138,  0,  0,  0,  0,20138,  0,  0,  0,  0,20138,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [60096,60097,60098,60099,  0,  0,60096,60097,60098,60099,  0,  0,60096,60097,60098],
    [60104,60105,60106,60107,  0,  0,60104,60105,60106,60107,  0,  0,60104,60105,60106],
    [60112,60113,60114,60115,  0,  0,60112,60113,60114,60115,  0,  0,60112,60113,60114],
    [60120,60121,60122,60123,  0,  0,60120,60121,60122,60123,  0,  0,60120,60121,60122],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,130042,  0,  0,  0,  0,130042,  0,  0,  0,  0],
    [  0,20105,20106,20107,  0,130063,20105,20106,20107,  0,130063,20105,20106,20107,  0],
    [20112,20113,  0,20115,20116,20112,20113,  0,20115,20116,20112,20113,  0,20115,20116],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "陆地"
}