main.floors.MT81=
{
    "floorId": "MT81",
    "title": "北冰洋",
    "name": "北冰洋",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "wots5.mp3",
    "firstArrive": [
        "\t[盟军指挥官,hero]有情报表明，德军沙恩霍斯特号战列舰正向船队驶来。现阶段为避免不必要的损失，我们最好想办法绕过去。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "14,7": [
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
                "function": "function(){\nflags.mission[12][0]=true\n}"
            },
            {
                "type": "if",
                "condition": "(flag:友军血量>=20000)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[12][1]=true\n}"
                    }
                ]
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
                "text": "   指挥官阁下已经成功克服了北冰洋\n的恶劣海况并打退了敌军的数次侵扰，\n将货物安全送到了苏联摩尔曼斯克港。\n   只有亲身走过一遭才能切身体会北\n冰洋的恐怖，我想不会有人愿意再来第\n二次了。希望苏联人妥善利用这些物资\n，把德国佬通通揍扁，别让我们白跑这\n么多趟！",
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
                "type": "setValue",
                "name": "flag:escort",
                "value": "false"
            },
            {
                "type": "setValue",
                "name": "flag:stage",
                "value": "13"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT83",
                        "loc": [
                            7,
                            11
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "playBgm",
                        "name": "wots1.mp3"
                    },
                    "尽管与敌人相比明显处于劣势，德国海军却一直没有放弃在大型战舰方面的努力。",
                    "《凡尔赛条约》宣布废除后，德国开始筹备建造一些大型战列舰，以便与当时英法最先进的战列舰正面对抗。",
                    "受到条约限制的“德意志”级袖珍战列舰和“沙恩霍斯特”级战列巡洋舰均无法满足海战的需求。德国急需建造更多，更强的大型战舰。",
                    "“俾斯麦”级战列舰，由此诞生。",
                    "1940年8月24日，“俾斯麦”级战列舰的首舰，“俾斯麦”号，正式服役。这艘以著名的铁血宰相命名的大型战舰不负众望地成为了当时德国最强大的战列舰。",
                    "俾斯麦号几乎武装到牙齿。摆脱了条约的限制，俾斯麦号得以装备15英寸（381毫米）的巨大主炮，还有遍布全身的副炮、高射炮和近乎变态的装甲保护，是一座令人生畏的海上堡垒。",
                    "自打俾斯麦号建成服役之时，英国皇家海军就对其颇为忌惮。一旦这艘“巨兽”驶入大西洋，不幸与其相遇的盟军商船队必定会遭到毁灭性打击。就算是战列舰与其相遇都免不了一场恶战，何况战斗力较差的小型护航舰。",
                    "德军期待着俾斯麦号出海大显神威的一天，而英军同样在密切关注着她的动向，渴望着将其击沉的时机。",
                    "1941年5月，机会来了。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT82",
                        "loc": [
                            -1,
                            -1
                        ],
                        "direction": "down"
                    }
                ]
            }
        ],
        "0,8": [
            "\f[scharnhorst.jpg,170,50]沙恩霍斯特级战列舰是德国撕毁《凡尔赛条约》后建造的一型战列舰，共建造2艘，分别为“沙恩霍斯特”号和“格奈森瑙”号。与同时期其他国家的战列舰相比，沙恩霍斯特级的主炮口径很小（280mm），航速较高（31节），性能并不出众。战争爆发时，这两艘战舰是当时德国仅有的战列舰，常常在大西洋海上袭扰盟军船队，并一起击沉了英国“光荣”号航母。“沙恩霍斯特”号于1943年被英国“约克公爵”号战舰击沉，“格奈森瑙”号于1945年被德军自己凿沉，当作阻塞舰使用。"
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "MT80",
            "loc": [
                14,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "13,7": [
            "\t[盟军指挥官,hero]向总部报告，我们成功重创敌军沙恩霍斯特号战列舰。虽然未能将其击沉，但足够使其在接下来的几个月内无法出海。",
            "\t[系统提示]击破强敌，获得特殊奖励：100金经",
            {
                "type": "setValue",
                "name": "status:money",
                "operator": "+=",
                "value": "100"
            },
            {
                "type": "setValue",
                "name": "status:exp",
                "operator": "+=",
                "value": "100"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "14,8": {
            "0": {
                "condition": "flag:st12tsk3>=5",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[12][2]=true\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 21, 21,  3, 21,  3, 21, 21, 21, 21,  3,398, 21, 21, 21, 21],
    [368,  3,  3,368,  3,255,  3, 81,  3,  3, 81,  6,  3,  3,  6],
    [527,527,398,527,  3,  0,  6,526,526,  0,207,  0,393,518,  3],
    [  3,  6, 81,  3,  6,216,  3,526,526,  3,  3,  0,  6,518,518],
    [528,  3,  0,385,566,527,  3,  3, 81,  3,525,207,  3,  3, 82],
    [528,394,  0,  3,  6,527,  3,566,566, 81,525,528,528,  3, 82],
    [  3,  3,393,  3,529,  0,385,  0,  3,529,  3,  3,  3,  3, 82],
    [ 92,  0,567, 81,529,  3,  6,  3,  3,529,567,567, 81,332, 89],
    [  3,  3,393,  6,529,382,518,  6,529,255,  3,  3,  3,  3,  3],
    [528,528,  0,207,  0,  3,  3,526,  6,  0,385,529,529,  3,527],
    [  6, 82,  3,  0,518,  6,526,526,382,  0,  3,  3,216,  3,527],
    [528,394,  3,  3, 81,  3,  3,  3,  3,394,  3,566,  0, 81,527],
    [526,526,  3,525,395,  3,  0,216, 81,  0,525,525,  3,  3,216],
    [  3,566,  6,525,  3,518,518,  0,  6,  3,207,  6,521,521,521],
    [  3,216, 81,525,  3,518,518,  0,  3, 21, 21, 21,  3,530,  6]
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [10163,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "海洋"
}