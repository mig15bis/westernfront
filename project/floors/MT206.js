main.floors.MT206=
{
    "floorId": "MT206",
    "title": "阿尔及利亚",
    "name": "阿尔及利亚",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "bgm7.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,14": [
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
                "type": "function",
                "function": "function(){\nflags.mission[30][0]=true\n}"
            },
            {
                "type": "if",
                "condition": "(item:tea>=30)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[30][2]=true\n}"
                    }
                ]
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
                "text": "   指挥官阁下顺利完成了在阿尔及利\n亚地区的登陆，并巩固了滩头阵地，和\n另外几处登陆场一样。\n   我们采取了一些政治手段，让维希\n法国对我们做出了一些让步，避免了更\n多无谓的伤亡。此次登陆行动也为我们\n提供了一些实战经验，以供日后反攻欧\n洲大陆时使用。",
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
                "value": "31"
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
                        "floorId": "MT208",
                        "loc": [
                            7,
                            7
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "playBgm",
                        "name": "desert1.mp3"
                    },
                    "1942年夏季，苏联和德国在东线战场打的不可开交。德军绝大多数军事实力和精锐力量都压在那边，给苏联造成了不小的压力。",
                    "相比之下，西线却显得平静很多，海上和空中发生的都是小规模战斗，即便是打的最火热的北非，其规模相比苏德战场而言，简直不够看。",
                    "斯大林向西方国家施加压力，要求他们尽快在欧洲开辟第二战场，夹击德国的同时也能减轻苏联的压力。",
                    "但英国方面却对此感到犹豫。他们不想贸然行动导致更多伤亡，也可能是希望苏德两国在战争中两败俱伤，自己去坐收渔利。",
                    "最后，在美国方面的游说下，丘吉尔最终决定以登陆北非代替登陆欧洲，夺取北非和地中海控制权的同时，也能为后续行动积累登陆战经验。",
                    "这次行动被称为“火炬行动”。美国艾森豪威尔中将担任行动总指挥，英国坎宁安上将作为海军司令负责制海权。登陆地点选在阿尔及利亚和摩洛哥，那里是法属殖民地，而维希法军在此前的一系列冲突中与英国烙下了不小的仇恨，因此以美军的名义实施登陆可以减少当地反抗。",
                    "1942年11月8日，盟军兵分三路，10万陆军在16艘航空母舰、7艘战列舰等650余艘军舰，和上千架飞机的掩护下，展开登陆行动，同时还有大量空降部队深入敌后配合行动。",
                    "两天后，两地的法军宣布停止抵抗。除比塞大和突尼斯被轴心国占领外，其余部分均被盟军收于囊中，至此，盟军已对北非的德意联军形成两面夹击。",
                    "火炬行动是战争史上第一次使用登陆艇进行的大规模登陆作战。虽然整场战役强度并不高，但也为盟军积累了宝贵的经验。用不了多久，这些经验就能再次派上用场。",
                    "北非的轴心国部队陷入危机，但现在不止是北非。远在欧洲大陆的德军并没有意识到，一批庞然大物早已悄悄运抵英国本土。",
                    "很快，这些“大家伙”的名字便会被牢牢刻在西线盟军的战史中——",
                    "B17“空中堡垒”重型轰炸机",
                    {
                        "type": "changeFloor",
                        "floorId": "MT207",
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
        "14,7": {
            "floorId": "MT205",
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
    "autoEvent": {
        "6,14": {
            "0": {
                "condition": "!core.hasEnemyLeft(undefined,['MT202','MT203','MT204'])",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[30][1]=true\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 21,150, 21, 21, 21,150,538,150, 21, 21, 21,150,  0,538,  0],
    [ 21,150,  0,365,  0,150,538,150,  0,365,  0,150,589,150,392],
    [363,150,150, 81,150,150,579,150,150, 81,150,150, 11,150,150],
    [579, 11,363,538,  0, 11,411,  0,411,  0,392,150,  0,363,  0],
    [150,150,150,  0,365,150,150, 81,150,150,150,150,150,150, 81],
    [535,  0,150,405,150,539,150,  0,537,537,392,150,405,  0,589],
    [535,589, 82,  0,150,539,363,150, 11,150,150,150, 11,150,150],
    [535,  0,150,405,536,150, 11,150,539,579, 81,  0,405,  0, 94],
    [150,150,150,536,536,150,539,365,538,539,150,150, 11,150,150],
    [538,538,150, 11,150,150,589,150,150, 11,150,539,405,  0,  0],
    [538,589, 81,363,571,150,  0,365,150,363,539,150,150,150, 11],
    [150,150,  0,150,150,  0,366,571,366,539,150,539,539,579,  0],
    [ 22, 22,150,538,538,  0,150, 82,150,150,150, 81,150,150,150],
    [539,539,150,150,150, 81,150,411,150,392,150,589,150,537,537],
    [539,539,363,579,366,392,150, 89,150,392,362,  0,363,537,537]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}