main.floors.MT225=
{
    "floorId": "MT225",
    "title": "马雷特防线以南",
    "name": "马雷特防线以南",
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
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,13": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：德意联军，陆空协同作战，有地雷和防御工事，存在新强敌。\n推荐携带技能：空战王牌、扫雷、抵抗运动、破译、空中打击、补给线、C47空中列车\n推荐出战装备：M4A2谢尔曼、喷火9或P47、英俊战士或P38、B25或B17"
        ],
        "3,14": [
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
        "13,11": [
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
        "14,13": [
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
                                "value": "50"
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
                                "value": "100"
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
                                "value": "600"
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
                                "value": "700"
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
                                "value": "900"
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
                                "value": "1100"
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
                                                "value": "250"
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
                                                "value": "300"
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
                                                "value": "260"
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
                                                "value": "325"
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
                                                "value": "600"
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
                                                "value": "750"
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
                                                "value": "1000"
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
                                                                "value": "32"
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
                                                        "text": "退役 飓风MK1型",
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
                                                                "value": "175"
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
                                                                "value": "600"
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
        ],
        "8,12": [
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
                                "floorId": "MT226",
                                "loc": [
                                    7,
                                    14
                                ],
                                "direction": "up"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,7": [
            {
                "type": "playSound",
                "name": "cvstrike.mp3"
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "cvstrike.png",
                "loc": [
                    30,
                    100
                ],
                "opacity": 1,
                "time": 500
            },
            {
                "type": "sleep",
                "time": 1000
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 500
            },
            {
                "type": "sleep",
                "time": 3000
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "cvairgroup.png",
                "loc": [
                    0,
                    -1920
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "moveImage",
                "code": 1,
                "to": [
                    0,
                    1920
                ],
                "time": 18000,
                "async": true
            },
            {
                "type": "sleep",
                "time": 2000
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    2,
                    4
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    14,
                    9
                ]
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    3,
                    9
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    14,
                    1
                ]
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    1,
                    12
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    13,
                    3
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    4,
                    7
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    12,
                    0
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    5,
                    1
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    13,
                    14
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    5,
                    10
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    12,
                    2
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    6,
                    5
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    12,
                    10
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    7,
                    3
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    11,
                    7
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    8,
                    8
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    10,
                    4
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    9,
                    1
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    10,
                    9
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    9,
                    14
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    8,
                    7
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    10,
                    6
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    7,
                    3
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    11,
                    2
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    7,
                    11
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    11,
                    13
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    6
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    12,
                    10
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    5,
                    1
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    13,
                    7
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "explore",
                "loc": [
                    4,
                    14
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    14,
                    3
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    2,
                    5
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    14,
                    9
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "animate",
                "name": "xinxinwater",
                "loc": [
                    1,
                    7
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 0
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
    [  0,  0,  0,  0,150,150,150,  0,  0,150,150,150,  0,  0,  0],
    [150,150,150,  0,150,501,150,  0,  0,150,501,150,  0,  0,  0],
    [150,501,150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60035,  0],
    [  0,  0,  0,  0,60035,  0,  0,150,150,150,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,150,503,150,  0,60035,  0,  0,  0],
    [150,150,150,150,  0,  0,  0,  0,  0,  0,  0,  0,  0,150,150],
    [550,  0,503,150,150,  0,  0,  0,150,150,150,150,150,150,550],
    [150,150,150,550,150,150,  0,  0,150,  0,550,  0,503,550,150],
    [  0,  0,150,150,550,  0,  0,  0,  0,  0,150,150,150,150,150],
    [  0,60035,  0,150,150,  0,  0,  0,20114,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,20120,20121,20122,20123,20124,60035,  0,150,150],
    [150,150,150,150,  0,  0,20128,20129,20130,20131,20132,  0,  0,516,150],
    [  0,548,  0,150,  0,  0,20136,20137,517,20139,20140,  0,  0,150,150],
    [548,  0,548,150,60035,  0,  0,  0,  0,10147,  0,  0,  0,  0,599],
    [  0,548,  0,514,  0,  0,  0,  0,  0,  0,  0,  0,  0,150,150]
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,558,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,20138,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,559,  0,  0,  0,  0,558,  0],
    [  0,  0,  0,  0,557,  0,  0,  0,  0,559,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60027,  0],
    [  0,  0,  0,  0,60027,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60027,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,60027,  0,  0,  0,  0,  0,20105,20106,20107,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,20112,20113,  0,20115,20116,60027,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,60027,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "陆地"
}