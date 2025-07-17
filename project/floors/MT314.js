main.floors.MT314=
{
    "floorId": "MT314",
    "title": "诺曼底-朱诺海滩",
    "name": "诺曼底-朱诺海滩",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "farthestend.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,12": [
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
                "type": "scrollText",
                "text": "  诺曼底登陆日早上8:20，进攻刚刚开始15分钟，我的\n队员已牺牲过半。敌军抵抗异常激烈。我成功登上了\n海滩，可是很多战友却再也没能从水中站起来。海滩\n上无处藏身，到处是迫击炮轰炸、地雷爆炸和机枪扫\n射。我们被困在铁丝网后面，直到一辆坦克浮出海面。\n\n  那天天气很糟，风浪很大。只有不到半数坦克成功下\n水。我们本应赶在步兵团之前对海滩发起攻击，但汹\n涌的波涛拖延了我们的进度，我们的坦克甚至在漏水。\n我们全车的性命全靠那件帆布保着。我们这辆坦克是\n最先抵达海滩的，其他坦克不是沉了就是分散了。我\n们仅迟到了几分钟，但海滩上已经尸横遍野。\n                                                           ——盟军士兵的回忆",
                "time": 20000,
                "lineHeight": 1.4
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            "\t[盟军指挥官,hero]坦克来了！火力掩护！给我拆了那些碉堡！",
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
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "14,7": {
            "floorId": "MT313",
            "loc": [
                0,
                7
            ]
        },
        "14,0": {
            "floorId": "MT313",
            "loc": [
                0,
                0
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
    [518,243,543,543,265,544,388,605,265,521,406,521,518,233, 94],
    [518,236,270,243,541,390,544,541,605,390,521,265,518,266,40049],
    [40049,40049,250,  0,267,542,542,236,544,521,267,521,248,40050,40057],
    [40049,40049,244,40049,40049,40049,40049,40049,40049,40049,40049,40049,40050,40050,631],
    [40057,40057,203,40057,40057,40057,40057,40049,40049,40049,40049,40049,40050,40058,215],
    [215,631,  0,631,540,215,631,40056,40057,40057,40057,40057,40058,203,  0],
    [544,631,203,631,631, 11,631,541, 11,215,631,518,631, 11,631],
    [632,203,227, 11,250,275,631, 11,631,204,631,250, 11,203, 94],
    [631,631,265,631,542,631,542,632,204,631,631, 11,631,631,631],
    [250, 11,250, 11,631,631, 11,631,631,204,631,250,  0, 11,275],
    [606,631,631,204,244,544,244,631,265,542, 11,631,631,631, 11],
    [606,631,540,631, 11,631, 11,244, 11,631,632,  0,632,  0,606],
    [145,145,540,266,244,631,607,631,265,543,631, 11,631, 90,631],
    [145,145,145,145,145,145,145,145,145,543,631,250,542,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,631,631,145,145]
],
    "bgmap": [
    [40033,40033,40033,40033,40033,40033,40033,40033,40033,40033,40033,40033,40033,40033,40041],
    [40041,40041,40041,40033,40033,40033,40033,40033,40033,40033,40033,40033,40033,40042,40041],
    [  0,  0,40089,40040,40041,40041,40041,40041,40041,40041,40041,40041,40042,  0,  0],
    [  0,  0,40089,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,40089,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,559,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,556,  0],
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
    [498,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [631,  0,498,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,498],
    [  0,  0,  0,631,  0,498,  0,  0,  0,  0,498,  0,  0,  0,631]
],
    "area": "浅滩"
}