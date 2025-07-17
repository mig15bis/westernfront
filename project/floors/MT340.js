main.floors.MT340=
{
    "floorId": "MT340",
    "title": "第戎",
    "name": "第戎",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground6",
    "bgm": "cao7.mp3",
    "firstArrive": [
        "\t[盟军指挥官,hero]我们与友军仅一城之隔！消灭第戎的守军，就可以与友军会师了。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,4": [
            {
                "type": "function",
                "function": "function(){\nflags.mission[46][0]=true\n}"
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
                "text": "   在法国南部的登陆取得了巨大成功\n。在当地抵抗组织的协助下，指挥官阁\n下将我们南北两方向的战线连接起来了\n，我们马上解放巴黎！\n   如此顺利的行动甚至让我们有些不\n适应，但事实就是如此，德军显然没有\n足够的兵力来应付我们的两面夹击，他\n们已经快完蛋了！",
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
                "value": "47"
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
                        "floorId": "MT331",
                        "loc": [
                            7,
                            3
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "playBgm",
                        "name": "gaijin3.mp3",
                        "keep": true
                    },
                    "龙骑兵行动，原代号“铁砧行动”。最开始并不被盟军高层，尤其是英军所重视，甚至一度被丘吉尔反对。但随着6月初，罗马被攻占，以及眼镜蛇行动的成功，这一行动才被批准。",
                    "1944年8月15日，由美国和法国组成的联军，共45万兵力，从法国南部登陆。此时德军的主力部队都在诺曼底方向苦战，南部阵线防御薄弱，盟军仅遭遇轻微抵抗。",
                    "盟军空降部队还在勒米等战略要地附近空降，切断德军交通线，成功制造混乱，再加上空中支援，使德军无法组织起有效反击。",
                    "与诺曼底、意大利和北非等地不同，“龙骑兵行动”出奇的顺利，与其他敌方的苦战形成鲜明对比。在法国抵抗组织的配合之下，盟军一路猛进，先后解放土伦、马赛等地，德军一路溃退，盟军紧追不舍。法军第一装甲师甚至日推进速度达到了60公里。",
                    "9月3日，里昂解放。11日，美军第36步兵师在第戎与巴顿第三集团军成功会师，南北战线成功连接。德国G集团军群的残兵败将一路逃到孚日山脉，损失过半，重型装备几乎全数被毁。",
                    "龙骑兵行动持续了一个月，盟军仅付出了1.7万人伤亡，歼灭德军9万，并解放了法国南部全境，恢复运营的土伦和马赛则持续为盟军输送物资。",
                    "尽管有争议认为，这次行动消耗的物资和兵力应当优先用于意大利战场，但就战果和影响而言，这无疑是一次成功的行动。并且，法军是这次行动的主力部队，戴高乐政府的威望获得了极大提升。这是一次“被遗忘的成功战役”。",
                    "两线夹击很快将法国境内的德军逼至崩溃。8月25日，最后一个坚守巴黎的德军投降，维希政府彻底倒台，法国终于迎来了解放。",
                    "同一天，戴高乐抵达巴黎市政府大厦发表演讲，宣布巴黎解放。26日和29日，第二装甲师和随后到达的美军第28步兵师在香榭丽舍大道举行了阅兵式，以庆祝巴黎的解放。",
                    "虽然一个月之内被德军打到投降显得有些丢人，但自由法国以及不愿屈服的抵抗组织仍向世界展示了他们抗争到底的决心。从突尼斯，到卡西诺山，再到自己家门口，虽然规模远不及英美，但其功劳不可磨灭。",
                    "整场战争期间，共有2.4至3万自由法国战士阵亡，2至3万抵抗组织成员被德军以及维希政府处决，4万人被捕后死在集中营内。",
                    "德军对平民的暴行同样令人发指。共有35至40万法国平民被杀，有些死于报复和迫害，有些死于强制劳动，还有些死于饥饿，还有些被盟军的空袭误杀。德军以“1名德军被杀就有50名人质处决”的比例，仅在巴黎就屠杀了1.1万人。诺曼底登陆后，党卫军“帝国”师在奥拉杜尔村屠杀了642名村民作为报复，其中247名是儿童。",
                    "好在，残酷的屠杀已经成为过去时。现在，盟军已在欧洲站稳脚跟，与另一边的苏军形成夹击之势，下一个目标，就是德国本土。",
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[世界消息]\r[aqua]维希法国 战败！\r",
                    "\t[世界消息]\r[aqua]法国 解放！"
                ]
            },
            {
                "type": "pauseBgm"
            },
            "Stage 9 已完成。是否提交分数？",
            {
                "type": "confirm",
                "text": "提交分数？",
                "yes": [
                    {
                        "type": "win",
                        "reason": "Stage 9 D-day"
                    }
                ],
                "no": [
                    {
                        "type": "confirm",
                        "text": "跳过剧情吗？",
                        "yes": [
                            {
                                "type": "changeFloor",
                                "floorId": "MT342",
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
                                "name": "wots1.mp3"
                            },
                            "不列颠空战早已过去，盟军已经登上欧洲土地，不仅英国本土，连德国的大半天空也已经是盟军战斗机的囊中之物。看样子，英国的民众们可以放松享受一下和平了。",
                            {
                                "type": "playSound",
                                "name": "jet.mp3"
                            },
                            "然而事与愿违。6月13日，也就是诺曼底登陆后不久，一群奇怪的飞行器呼啸着闯入伦敦上空。它们看起来像一架架小飞机，但凑近却发现，它们没有驾驶舱——这是一群无人飞行器。",
                            {
                                "type": "playSound",
                                "name": "v_jet_pass.mp3"
                            },
                            {
                                "type": "sleep",
                                "time": 1000
                            },
                            {
                                "type": "playSound",
                                "name": "bomb.mp3",
                                "stop": true
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "没有螺旋桨，只有一个尾部喷射着火焰的奇特发动机。不等人们反应过来，这些奇特飞行器就往下一沉，一头扎进伦敦市区，紧随其后便是剧烈的爆炸——这分明是一群会自己飞向目标的炸弹！",
                            "这一“超自然现象”很快引起人们的恐慌。结合先前侦察机带回的情报，军方很快带回了一个全新的概念——导弹。",
                            "这些是德国的V1巡航导弹。尽管盟军早已注意到德军的奇怪设施，并实施轰炸，但并没有起效。现在，导弹生产已经完成，它们比飞机飞的更快，更远，更难以拦截。2天后，又有73枚导弹飞进伦敦市区。精度很差，不一定飞到哪，但这也意味着任何人都有可能被击中，只不过是运气好坏的问题。",
                            "德军的新发明表明了一件事——战争远未结束，越深入德军腹地，盟军受到的反击也就越强烈。谁也不知道，德军还有多少“杀手锏”没有露面？",
                            {
                                "type": "showImage",
                                "code": 1,
                                "image": "chapter10.jpg",
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
                                "floorId": "MT341",
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
        "7,14": {
            "floorId": "MT338",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "3,0": {
            "0": {
                "condition": "core.maps.searchBlockWithFilter(x=>['步兵','反坦克炮','榴弹炮','高射炮','轻坦','中坦','重坦','坦歼'].includes(core.material.enemys[x?.event?.id]?.type),['MT332','MT333','MT334','MT335','MT336','MT337','MT338','MT339','MT340']).length===0",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[46][2]=true\n}"
                    }
                ]
            },
            "1": {
                "condition": "core.maps.searchBlockWithFilter(x=>['战斗机','重型战斗机','俯冲轰炸机','中型轰炸机','鱼雷轰炸机'].includes(core.material.enemys[x?.event?.id]?.type),['MT332','MT333','MT334','MT335','MT336','MT337','MT338','MT339','MT340']).length===0",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[46][1]=true\n}"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 17, 17,549, 17, 17, 17, 17,549, 17, 17, 17, 17,549, 17, 17],
    [ 17, 17, 17, 17,550,550,550, 17,550,550,550, 17, 17, 17, 17],
    [ 17,549, 17, 17,550,550,550, 17,550,550,550, 17, 17, 17,549],
    [109,109,109, 17,550,550,550, 17,550,550,550, 17,109,109,109],
    [635,635,109,109,109,109,109, 89,109,109,109,109,109,636,636],
    [635,635,228, 11,275,235,270, 82,270,235,275,10015,636,636,228],
    [10015,10015,10015,10015, 81,10015,10015,10015,10015,10015, 81,10015,10015,10015, 82],
    [637,637,10015,390,643,10015,227, 81,227,643, 11,275,608,275,643],
    [637,265, 11,643,275, 11,643,10015,643,10015,10015, 81,10015,10015,10015],
    [ 81,10015,10015,10015,10015,10015,10015,10015,10015,10015,608,390,10015,  0,390],
    [250,265,266,10015,637,10015,218,10015,218,10015,250,608, 81,266,  0],
    [10015,10015,227,10015,265, 11,643,235,643, 81,227,10015,10015, 82,10015],
    [643,638,643,10015,637,10015,10015, 82,10015,10015,  0,10015,  0,228,  0],
    [ 82,10015,10015,10015,10015,10015,608,235,608,10015,638,10015,519,519,519],
    [228,638,638,341,341,10015,608, 93,608,10015,638,10015,590,590,590]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}