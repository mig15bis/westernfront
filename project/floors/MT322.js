main.floors.MT322=
{
    "floorId": "MT322",
    "title": "诺曼底—奥马哈海滩",
    "name": "诺曼底—奥马哈海滩",
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
        "14,9": [
            {
                "type": "function",
                "function": "function(){\nflags.mission[44][0]=true\n}"
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
                "text": "   经过一番激战，我军已成功夺取所\n有的登陆地点，这其中指挥官阁下的表\n现最为亮眼！\n   尽管登陆过程充满了意外和混乱，\n但我们依旧完成了这项壮举。我们踩着\n战友们的尸体登上海滩，借着我们的坦\n克残骸充当掩体，一步一步靠近，并将\n手雷扔进敌人的堡垒。这短短的几个小\n时，却漫长的好像过了几年。我们终将\n取胜，一切牺牲都不会白费。",
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
                "value": "45"
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
                        "floorId": "MT324",
                        "loc": [
                            7,
                            7
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    "盟军在登陆前做的一系列欺瞒行动非常有效，直到登陆开始时，德军高层内仍然有不少人认为盟军真正的目标是加莱，诺曼底方向只是一次“大规模佯攻”。",
                    "然而当海滩防御连连告破时，德军才不得不接受“我们被耍了”这一事实。他们急忙向诺曼底增兵，但为时已晚。",
                    "海上密密麻麻的都是盟军的登陆艇和战舰，天空被盟军战斗机牢牢把控，地面部队根本无法在短时间内及时赶到增援。",
                    "隆美尔元帅此时正在家中给妻子过生日。当手下把诺曼底受攻击的消息传过来时，他立刻坐车赶往前线。然而为时已晚，他已经无法阻止盟军的登陆。",
                    "盟军虽然做好了欺瞒工作，避开了德军主力防御力量，但6月6日登陆当天，整个抢滩登陆过程也并非一帆风顺。",
                    "犹他海滩，此处德军防御最为薄弱，美军迅速突破防线，在当天日落时成功建立纵深9公里的登陆场，并控制了关键通路。",
                    "黄金海滩，德军的少量岸防炮和机枪阵地被盟军舰炮和飞机压制，英军迅速占领海滩，并向内陆挺进约10公里。",
                    "朱诺海滩，加拿大第3师遭到恶劣海况，延迟登陆时间，给了德军时间组织反击。他们付出了较高的伤亡，但仍然突破防线，占领沿岸城镇，并与黄金海滩的英军会合。",
                    "宝剑海滩，英军遭遇德军一个装甲师的反击，但在空中力量的支援下，辅以反坦克武器压制，德军的攻势被遏制。英军占领了海滩，建立稳固登陆场，但未能完成占领卡昂的计划。",
                    "奥马哈海滩是战斗最残酷的一处登陆场。此处地势险要，德军步兵师和防御建筑可以更好实施打击，美军的舰炮和飞机的轰炸效果也并不好。当天结束时，美军虽勉强建立了滩头阵地，但付出了2000人的伤亡代价。",
                    "登陆首日，盟军在5个滩头均建立桥头堡，15万士兵成功登陆。虽然有些预期目标未能达成，但至少成功站在了法国大陆上。",
                    "登陆首日，盟军在5个滩头均建立桥头堡，15万士兵成功登陆。虽然有些预期目标未能达成，但至少成功站在了法国大陆上。在接下来的两个月内，盟军的主要工作就是扩大战果，逐步解放法国。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT323",
                        "loc": [
                            -1,
                            -1
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "3,0": {
            "floorId": "MT321",
            "loc": [
                11,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "14,10": {
            "0": {
                "condition": "core.maps.searchBlockWithFilter(x=>['建筑'].includes(core.material.enemys[x?.event?.id]?.type),['MT318','MT319','MT320','MT321','MT322']).length===0",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[44][1]=true\n}"
                    }
                ]
            },
            "1": {
                "condition": "core.maps.searchBlockWithFilter(x=>['轻坦','中坦','重坦','坦歼'].includes(core.material.enemys[x?.event?.id]?.type),['MT318','MT319','MT320','MT321','MT322']).length===0",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[44][2]=true\n}"
                    }
                ]
            }
        }
    },
    "cannotMove": {
        "10,0": [
            "right"
        ],
        "10,1": [
            "right"
        ],
        "11,0": [
            "left"
        ],
        "11,1": [
            "left"
        ]
    },
    "cannotMoveIn": {
        "10,0": [
            "right"
        ],
        "10,1": [
            "right"
        ],
        "11,0": [
            "left"
        ],
        "11,1": [
            "left"
        ]
    },
    "map": [
    [265,590,10295, 91,10295,637, 81,606,10295,638,638,519,667,  0,  0],
    [ 81,10295,10295, 11,10295,406,10295,266,10295,10295,406,519,388,236,  0],
    [250,663, 81, 11,228,637,10295,606, 81,265,606,40048,40049,40049,40050],
    [40049,40049,40049, 82,40049,40049,40049,40049,40049,40049,40050,40056,40057,40057,40058],
    [40049,40049,40049, 11,40049,40049,40049,40049,40049,40049,40050,635,631,635,390],
    [40057,40057,40057,606,40057,40057,40057,40057,40057,40057,40058,637,631,631, 11],
    [581,635,631,227,631,643,580,631,636,631,390,272, 81,632,580],
    [635,227,631, 11,227,265,643,631,636,631,631, 11,631,218,580],
    [631, 81,631, 81,631,631,631,631,632,631,518,518,109,109,109],
    [643,390, 11,228, 11,228,275,406, 11,631,631,632,270, 11, 89],
    [631,631,631, 81,631, 81,631,631,518,272, 81, 11,109,109,109],
    [390,631,643,250,631,663,632,518,631,631,631, 81,631,218,638],
    [270, 11,275,145,145,631,631, 11,631,635,250, 11,250,631,275],
    [ 82,145,145,145,145,145,341,250,145,145,145,145,632, 81,638],
    [145,145,145,145,145,145,145,145,145,145,145,145,145,145,145]
],
    "bgmap": [
    [40033,40033,40033,40033,40033,40033,40033,40033,40033,40033,40034,40032,40033,40033,40034],
    [40033,40033,40033,40033,40033,40033,40033,40033,40033,40033,40034,40040,40041,40041,40042],
    [40041,40041,40041,40089,40041,40041,40041,40041,40041,40041,40042,  0,  0,  0,  0],
    [  0,  0,  0,40089,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,40089,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,40089,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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
    "area": "浅滩"
}