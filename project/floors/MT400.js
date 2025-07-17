main.floors.MT400=
{
    "floorId": "MT400",
    "title": "比利时",
    "name": "比利时",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "snow",
    "bgm": "europe4.mp3",
    "firstArrive": [
        "\t[盟军指挥官,hero]敌机正在撤退！追上去，别让他们跑了！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]更多战斗机加入战场，攻击力暂时+1000",
        {
            "type": "setValue",
            "name": "status:atk",
            "operator": "+=",
            "value": "1000"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,0": [
            {
                "type": "function",
                "function": "function(){\nflags.mission[54][0]=true\n}"
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
                "type": "setValue",
                "name": "status:atk",
                "operator": "-=",
                "value": "2200"
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
                "text": "   看样子，德国空军掏空家底的这次\n空袭就这样结束了，不过是给我们造成\n了一些尚可接受的损失，以及给指挥官\n阁下增添了几份战绩。\n   竟然在新年这天搞突袭！真叫人火\n大。大部分空军基地都没有反应过来，\n所以损失也挺多的。不过我们很快就能\n把损失的东西补充回来，而德军的话……\n他们的工厂已经被炸光了，除非他们凭\n空变出来，否则损失的飞机再也没法补\n充了。",
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
                "name": "flag:stage",
                "value": "55"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT395",
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
                        "name": "gaijin3.mp3"
                    },
                    "1945年1月1日，纳粹德国空军集结了最后的残存力量，共一千架战机，向盟军前线各个机场实施大规模空袭。这次行动代号为“底板行动”。",
                    "当天正是元旦，对于西方国家而言十分重要，因此盟军防备松懈，再加上德军全程保持无线电静默，低空飞行，这次空袭取得了奇袭效果。",
                    "然而，保密保的太严也未必是好事。德国空军这次出动的规模实在过于庞大，而且他们没有通知地面高炮部队。德军防空炮手一看到这么大的机群，误以为是盟军的飞机，于是他们开火了。空袭还没开始，许多德军战机就栽在了自己人的炮火上。",
                    "虽然空袭一开始确实取得了成功，盟军战斗机大部分都停放在跑道上，一串子弹能收割掉一大堆。但随着盟军逐渐反应过来，开始升空还击，战场天平逐渐向盟军倾斜。",
                    "此时的德军飞行员也不再是战争初期那些老手，大部分飞行员都是没什么经验的菜鸟，甚至德军还专门出动了一群ME262战机，不是去战斗的，而是去督战的，防止那些菜鸟临阵脱逃。",
                    "相反的，盟军飞行员只要达到一定条件，就会被拉下前线去后方当教官，培养更多有经验的飞行员，而不像德军一样把王牌们压榨到最后一口气。现在是盟军飞行员整体技术更好。",
                    "一个名为Y-29的美军机场当天刚好有一队P-47起飞去支援地面部队，碰巧撞上了德军机群，于是扔掉炸弹加入空战。另一队P-51战机也刚准备起飞，发现不远处的战斗以后立刻升空。袭击这个机场的德军失去了奇袭效果。最终，Y-29机场以一架P-47的代价，击落20余架敌机，史称“Y-29传奇”。",
                    "弹药耗尽的德军战机开始返航，但没被摧毁的盟军战机们此时也都飞上天空，凭借着速度优势开始追击，一顿穷追猛打，直到进入德军高炮范围才收手。",
                    "但德军的噩梦还没结束，因为他们的高炮部队仍然对这次行动一无所知。结果，他们又被自己人揍了一顿。鼻青脸肿从自家高炮阵地飞出来以后才总算脱险。",
                    "德军以271架战机的代价，成功摧毁了盟军约500架飞机。看似血赚，但以盟军的工业水平，完全能够承受这些损失。仅一个星期后，盟军损失的装备都补回来了，而德军却承受不住。",
                    "德军最后一次取得空中优势的尝试以失败告终，从此以后，直到战争结束，德国空军再无发起有效攻击的能力。",
                    "随着空中支援的丧失，德军地面部队重新回到盟军的轰炸之下。没过多久，1945年1月8日，阿登反击战以德军的败退告终。1月28日，盟军的追杀过后，德军又回到了战役开始前的位置。",
                    "整场阿登战役，德军损失12万人，600辆坦克，1600架飞机。盟军损失十万人，700辆坦克和反坦克炮，并且盟军同样可以弥补这些损失，而德军的是最后的家底，再也补不回来了。",
                    "德军蜷缩在他们最后的几个阵地里，弹药所剩无几，燃油早已见底，通往胜利的道路一马平川。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT401",
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
        "7,14": {
            "floorId": "MT399",
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
        "6,0": {
            "0": {
                "condition": "!core.hasEnemyLeft(['me262'],['MT396','MT397','MT398','MT399','MT400'])",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[54][1]=true\n}"
                    }
                ]
            },
            "1": {
                "condition": "!core.hasEnemyLeft(['v1missile'],['MT396','MT397','MT398','MT399','MT400'])",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[54][2]=true\n}"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [140,519,639,519,140,518,140, 89,140,518,140,519,639,519,140],
    [140,  0,376,  0,140,518,140,376,140,518,140,  0,376,  0,140],
    [140,140, 82,140,140,  0,140, 82,140,  0,140,140, 82,140,140],
    [ 21, 21,379,  0,140,372, 81,  0, 81,372,140,  0,379, 21, 21],
    [140,140,140,370, 81,644,140,371,140,644, 81,370,140,140,140],
    [341,  0,140,668,140,140,140,  0,140,140,140,668,140,  0,341],
    [639,374, 82,  0,140,644,140,371,140,644,140,  0, 82,374,639],
    [341,  0,140,668, 81,370,140,  0,140,370, 81,668,140,  0,341],
    [140,140,140,140,140,  0,140,371,140,  0,140,140,140,140,140],
    [ 21, 21,380,  0, 81,518,140,  0,140,518, 81,  0,380, 21, 21],
    [140,377,140,377,140,  0,140,371,140,  0,140,377,140,377,140],
    [140,373,140,373,140,372, 81,  0, 81,372,140,373,140,373,140],
    [140,640,140,640,140,370,140,  0,140,370,140,640,140,640,140],
    [140,642,140,642,140,641,140,  0,140,641,140,642,140,642,140],
    [140, 22,140, 22,140,641,140, 93,140,641,140, 22,140, 22,140]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,171,171,171,  0,  0],
    [  0,  0,  0,  0,  0,  0,172,172,  0,  0,171,171,171,  0,  0],
    [  0,  0,  0,172,  0,172,172,172,  0,  0,171,171,171,  0,  0],
    [  0,  0,172,172,172,172,172,  0,  0,  0,171,171,  0,  0,  0],
    [  0,  0,  0,  0,172,172,172,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,172,172,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,172,  0,  0,  0,  0],
    [  0,  0,  0,171,171,  0,  0,  0,  0,172,172,172,172,  0,  0],
    [  0,  0,171,171,171,171,  0,  0,  0,  0,172,172,172,  0,  0],
    [  0,  0,171,171,171,  0,  0,  0,  0,  0,  0,172,172,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,172,172,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,172,172,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "area": "陆地",
    "weather": [
        "snow",
        3
    ]
}