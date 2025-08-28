main.floors.MT402=
{
    "floorId": "MT402",
    "title": "鲁尔",
    "name": "鲁尔",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
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
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,6": [
            "\t[机场后勤,N516]长官，我方空军已就绪！",
            {
                "type": "choices",
                "text": "\t[机场后勤,N516]请选择出战空军",
                "choices": [
                    {
                        "text": "装备 P40C战斧",
                        "icon": "p40c",
                        "need": "core.hasItem('p40c')&&!core.hasEquip('p40c')",
                        "condition": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p40c"
                            }
                        ]
                    },
                    {
                        "text": "装备 喷火MK1型",
                        "icon": "spitfiremk1",
                        "need": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
                        "condition": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "spitfiremk1"
                            }
                        ]
                    },
                    {
                        "text": "装备 飓风MK2型",
                        "icon": "hurricanemk2",
                        "need": "core.hasItem('hurricanemk2')&&!core.hasEquip('hurricanemk2')",
                        "condition": "core.hasItem('hurricanemk2')&&!core.hasEquip('hurricanemk2')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "hurricanemk2"
                            }
                        ]
                    },
                    {
                        "text": "装备 F4F野猫战斗机",
                        "icon": "f4f3",
                        "need": "core.hasItem('f4f3')&&!core.hasEquip('f4f3')",
                        "condition": "core.hasItem('f4f3')&&!core.hasEquip('f4f3')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "f4f3"
                            }
                        ]
                    },
                    {
                        "text": "装备 喷火MK5战斗机",
                        "icon": "spitfiremk5",
                        "need": "core.hasItem('spitfiremk5')&&!core.hasEquip('spitfiremk5')",
                        "condition": "core.hasItem('spitfiremk5')&&!core.hasEquip('spitfiremk5')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "spitfiremk5"
                            }
                        ]
                    },
                    {
                        "text": "装备 喷火MK9战斗机",
                        "icon": "spitfiremk9",
                        "need": "core.hasItem('spitfiremk9')&&!core.hasEquip('spitfiremk9')",
                        "condition": "core.hasItem('spitfiremk9')&&!core.hasEquip('spitfiremk9')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "spitfiremk9"
                            }
                        ]
                    },
                    {
                        "text": "装备 F6F地狱猫战斗机",
                        "icon": "f6f5",
                        "need": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
                        "condition": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "f6f5"
                            }
                        ]
                    },
                    {
                        "text": "装备 P47B雷电战斗机",
                        "icon": "p47b",
                        "need": "core.hasItem('p47b')&&!core.hasEquip('p47b')",
                        "condition": "core.hasItem('p47b')&&!core.hasEquip('p47b')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p47b"
                            }
                        ]
                    },
                    {
                        "text": "装备 F6F地狱猫战斗机",
                        "icon": "f6f5",
                        "need": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
                        "condition": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "f6f5"
                            }
                        ]
                    },
                    {
                        "text": "装备 喷火MK16战斗机",
                        "icon": "spitfiremk16",
                        "need": "core.hasItem('spitfiremk16')&&!core.hasEquip('spitfiremk16')",
                        "condition": "core.hasItem('spitfiremk16')&&!core.hasEquip('spitfiremk16')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "spitfiremk16"
                            }
                        ]
                    },
                    {
                        "text": "装备 F4U海盗战斗机",
                        "icon": "f4u",
                        "need": "core.hasItem('f4u')&&!core.hasEquip('f4u')",
                        "condition": "core.hasItem('f4u')&&!core.hasEquip('f4u')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "f4u"
                            }
                        ]
                    },
                    {
                        "text": "装备 P51野马战斗机",
                        "icon": "p51d",
                        "need": "core.hasItem('p51d')&&!core.hasEquip('p51d')",
                        "condition": "core.hasItem('p51d')&&!core.hasEquip('p51d')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p51d"
                            }
                        ]
                    },
                    {
                        "text": "装备 SBD无畏式轰炸机",
                        "icon": "sbd3",
                        "need": "core.hasItem('sbd3')&&!core.hasEquip('sbd3')",
                        "condition": "core.hasItem('sbd3')&&!core.hasEquip('sbd3')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "sbd3"
                            }
                        ]
                    },
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
                        "text": "装备 台风攻击机",
                        "icon": "typhoon",
                        "need": "core.hasItem('typhoon')&&!core.hasEquip('typhoon')",
                        "condition": "core.hasItem('typhoon')&&!core.hasEquip('typhoon')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "typhoon"
                            }
                        ]
                    },
                    {
                        "text": "装备 蚊式战斗机",
                        "icon": "mosquito",
                        "need": "core.hasItem('mosquito')&&!core.hasEquip('mosquito')",
                        "condition": "core.hasItem('mosquito')&&!core.hasEquip('mosquito')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "mosquito"
                            }
                        ]
                    },
                    {
                        "text": "装备 P47D雷电攻击机",
                        "icon": "p47d",
                        "need": "core.hasItem('p47d')&&!core.hasEquip('p47d')",
                        "condition": "core.hasItem('p47d')&&!core.hasEquip('p47d')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p47d"
                            }
                        ]
                    },
                    {
                        "text": "装备 SB2C地狱俯冲者",
                        "icon": "sb2c",
                        "need": "core.hasItem('sb2c')&&!core.hasEquip('sb2c')",
                        "condition": "core.hasItem('sb2c')&&!core.hasEquip('sb2c')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "sb2c"
                            }
                        ]
                    },
                    {
                        "text": "装备 P61黑寡妇",
                        "icon": "p61",
                        "need": "core.hasItem('p61')&&!core.hasEquip('p61')",
                        "condition": "core.hasItem('p61')&&!core.hasEquip('p61')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p61"
                            }
                        ]
                    },
                    {
                        "text": "装备 剑鱼式鱼雷机",
                        "icon": "swordfish",
                        "need": "core.hasItem('swordfish')&&!core.hasEquip('swordfish')",
                        "condition": "core.hasItem('swordfish')&&!core.hasEquip('swordfish')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "swordfish"
                            }
                        ]
                    },
                    {
                        "text": "装备 TBD蹂躏者鱼雷机",
                        "icon": "tbd",
                        "need": "core.hasItem('tbd')&&!core.hasEquip('tbd')",
                        "condition": "core.hasItem('tbd')&&!core.hasEquip('tbd')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "tbd"
                            }
                        ]
                    },
                    {
                        "text": "装备 梭鱼式鱼雷机",
                        "icon": "barracuda",
                        "need": "core.hasItem('barracuda')&&!core.hasEquip('barracuda')",
                        "condition": "core.hasItem('barracuda')&&!core.hasEquip('barracuda')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "barracuda"
                            }
                        ]
                    },
                    {
                        "text": "装备 布伦海姆轰炸机",
                        "icon": "blenheim",
                        "need": "core.hasItem('blenheim')&&!core.hasEquip('blenheim')",
                        "condition": "core.hasItem('blenheim')&&!core.hasEquip('blenheim')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "blenheim"
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
                        "text": "装备 TBF复仇者",
                        "icon": "tbf",
                        "need": "core.hasItem('tbf')&&!core.hasEquip('tbf')",
                        "condition": "core.hasItem('tbf')&&!core.hasEquip('tbf')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "tbf"
                            }
                        ]
                    },
                    {
                        "text": "装备 B17空中堡垒",
                        "icon": "b17",
                        "need": "core.hasItem('b17')&&!core.hasEquip('b17')",
                        "condition": "core.hasItem('b17')&&!core.hasEquip('b17')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "b17"
                            }
                        ]
                    },
                    {
                        "text": "装备 兰开斯特轰炸机",
                        "icon": "lancaster",
                        "need": "core.hasItem('lancaster')&&!core.hasEquip('lancaster')",
                        "condition": "core.hasItem('lancaster')&&!core.hasEquip('lancaster')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "lancaster"
                            }
                        ]
                    },
                    {
                        "text": "装备 B29超级堡垒",
                        "icon": "b29",
                        "need": "core.hasItem('b29')&&!core.hasEquip('b29')",
                        "condition": "core.hasItem('b29')&&!core.hasEquip('b29')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "b29"
                            }
                        ]
                    },
                    {
                        "text": "装备 巴尔的摩级重巡洋舰",
                        "icon": "baltimore",
                        "need": "core.hasItem('baltimore')&&!core.hasEquip('baltimore')",
                        "condition": "core.hasItem('baltimore')&&!core.hasEquip('baltimore')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "baltimore"
                            }
                        ]
                    },
                    {
                        "text": "装备 埃塞克斯级航空母舰",
                        "icon": "essex",
                        "need": "core.hasItem('essex')&&!core.hasEquip('essex')",
                        "condition": "core.hasItem('essex')&&!core.hasEquip('essex')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "essex"
                            }
                        ]
                    },
                    {
                        "text": "装备 企业号航空母舰",
                        "icon": "enterprise",
                        "need": "core.hasItem('enterprise')&&!core.hasEquip('enterprise')",
                        "condition": "core.hasItem('enterprise')&&!core.hasEquip('enterprise')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "enterprise"
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
        "7,1": [
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
                                "floorId": "MT403",
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
        "8,1": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：地面部队配少量空军。\n推荐携带技能：空战王牌、破译、补给线、T34风琴、地毯式轰炸、铝箔条、高脚柜\n推荐出战装备：谢尔曼萤火虫、巴尔的摩号重巡、埃塞克斯级航母、P51野马、P47D雷电、兰开斯特"
        ],
        "1,6": [
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
                        "text": "装备 M4A2谢尔曼",
                        "icon": "m4a2",
                        "need": "core.hasItem('m4a2')&&!core.hasEquip('m4a2')",
                        "condition": "core.hasItem('m4a2')&&!core.hasEquip('m4a2')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "m4a2"
                            }
                        ]
                    },
                    {
                        "text": "装备 M4A1（76W）谢尔曼",
                        "icon": "m4a3",
                        "need": "core.hasItem('m4a3')&&!core.hasEquip('m4a3')",
                        "condition": "core.hasItem('m4a3')&&!core.hasEquip('m4a3')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "m4a3"
                            }
                        ]
                    },
                    {
                        "text": "装备 M4A3E2巨无霸",
                        "icon": "m4a3e2",
                        "need": "core.hasItem('m4a3e2')&&!core.hasEquip('m4a3e2')",
                        "condition": "core.hasItem('m4a3e2')&&!core.hasEquip('m4a3e2')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "m4a3e2"
                            }
                        ]
                    },
                    {
                        "text": "装备 谢尔曼“萤火虫”",
                        "icon": "firefly",
                        "need": "core.hasItem('firefly')&&!core.hasEquip('firefly')",
                        "condition": "core.hasItem('firefly')&&!core.hasEquip('firefly')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "firefly"
                            }
                        ]
                    },
                    {
                        "text": "装备 M26潘兴",
                        "icon": "m26pershing",
                        "need": "core.hasItem('m26pershing')&&!core.hasEquip('m26pershing')",
                        "condition": "core.hasItem('m26pershing')&&!core.hasEquip('m26pershing')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "m26pershing"
                            }
                        ]
                    },
                    {
                        "text": "装备 丘吉尔MK7",
                        "icon": "churchillmk7",
                        "need": "core.hasItem('churchillmk7')&&!core.hasEquip('churchillmk7')",
                        "condition": "core.hasItem('churchillmk7')&&!core.hasEquip('churchillmk7')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "churchillmk7"
                            }
                        ]
                    },
                    {
                        "text": "装备 巴尔的摩级重巡洋舰",
                        "icon": "baltimore",
                        "need": "core.hasItem('baltimore')&&!core.hasEquip('baltimore')",
                        "condition": "core.hasItem('baltimore')&&!core.hasEquip('baltimore')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "baltimore"
                            }
                        ]
                    },
                    {
                        "text": "装备 埃塞克斯级航空母舰",
                        "icon": "essex",
                        "need": "core.hasItem('essex')&&!core.hasEquip('essex')",
                        "condition": "core.hasItem('essex')&&!core.hasEquip('essex')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "essex"
                            }
                        ]
                    },
                    {
                        "text": "装备 企业号航空母舰",
                        "icon": "enterprise",
                        "need": "core.hasItem('enterprise')&&!core.hasEquip('enterprise')",
                        "condition": "core.hasItem('enterprise')&&!core.hasEquip('enterprise')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "enterprise"
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
        "8,6": [
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
                                                        "text": "退役 P40C战斧",
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
    [10015,10015,10015,10015,10015,10015,10015,10015,10015,10015,10015,10015,10015,10015,10015],
    [10015,  0,  0,  0,  0,10015,  0,517,129,10015,  0,  0,  0,  0,10015],
    [10015,  0,  0,  0,  0,10015,  0,  0,  0,10015,  0,  0,  0,  0,10015],
    [10015,  0,  0,  0,  0,10015,10015,  0,10015,10015,  0,  0,  0,  0,10015],
    [10015,10015,10015,10015,  0,  0,  0,  0,  0,  0,  0,10015,10015,10015,10015],
    [10015,  0,  0,10015,  0,10015,10015,10015,10015,10015,  0,10015,  0,  0,10015],
    [10015,514,  0,  0,  0,10015,  0,  0,599,10015,  0,  0,  0,516,10015],
    [10015,  0,  0,10015,  0,10015,  0,  0,  0,10015,  0,10015,  0,  0,10015],
    [10015,10015,10015,10015,  0,10015,  0,  0,  0,10015,  0,10015,10015,10015,10015],
    [10015,10015,10015,10015,  0,10015,10015,  0,10015,10015,  0,10015,10015,10015,10015],
    [10015,10015,10015,10015,  0,  0,  0,  0,  0,  0,  0,10015,10015,10015,10015],
    [10015,10015,10015,10015,  0,  0,  0,  0,  0,  0,  0,10015,10015,10015,10015],
    [10015,10015,10015,10015,  0,  0,  0,  0,  0,  0,  0,10015,10015,10015,10015],
    [10015,10015,10015,10015,10015,10015,10015,  0,10015,10015,10015,10015,10015,10015,10015],
    [10015,10015,10015,10015,10015,10015,10015,  0,10015,10015,10015,10015,10015,10015,10015]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,559,559,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,557,  0,  0,  0,  0,  0,  0,  0,  0,  0,558,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,559,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "area": "陆地"
}