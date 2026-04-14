main.floors.MT367=
{
    "floorId": "MT367",
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
    "defaultGround": "grass2",
    "bgm": "hitman.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 50 市场花园行动",
        {
            "type": "text",
            "text": "\t[蒙哥马利]\f[montgomary.png,0,310]我们的情报出了问题，前线传回来的求救信号表明，德军在空降区域有大规模装甲部队把守！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[蒙哥马利]\f[montgomary.png,0,310]正面主攻部队立即行动！原定战略目标已经不重要了，先头部队已经被包围，撑不了多久。如果不能及时从正面突破，我们所有的空降部队都会被消灭！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[莫德尔]\f[model.png,0,310]天上飘着的那些根本不是盟军士兵，而是一群活的铁十字勋章！绝不能放跑他们，我来加固外围防御，内侧部队收紧包围圈，守好关键要道，将这些空降部队全部吃干抹净！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "scoutinf",
            "name": "hp",
            "value": "2000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "scoutinf",
            "name": "atk",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "scoutinf",
            "name": "special",
            "value": "[45]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "8000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "90000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "special",
            "value": "[6,87,92]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "hp",
            "value": "7000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "special",
            "value": "[6,87,93]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "attankinf",
            "name": "hp",
            "value": "6500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "attankinf",
            "name": "atk",
            "value": "130000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "hp",
            "value": "2000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "atk",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "bom",
            "value": "300000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190f8",
            "name": "special",
            "value": "[6,28,70]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me262",
            "name": "hp",
            "value": "3500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me262",
            "name": "atk",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me262",
            "name": "special",
            "value": "[1,30,38,70,73]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer180",
            "name": "hp",
            "value": "3500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer180",
            "name": "atk",
            "value": "800000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer180",
            "name": "special",
            "value": "[43,72,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "hp",
            "value": "8000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "atk",
            "value": "400000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5d",
            "name": "special",
            "value": "[56,60,65,69]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5g",
            "name": "hp",
            "value": "9000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5g",
            "name": "atk",
            "value": "400000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer5g",
            "name": "special",
            "value": "[56,60,65,86,92]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "hp",
            "value": "10000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "atk",
            "value": "500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigere",
            "name": "special",
            "value": "[38,65,86,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigerking",
            "name": "hp",
            "value": "10000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigerking",
            "name": "atk",
            "value": "600000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "tigerking",
            "name": "special",
            "value": "[38,63,65,86,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "jagpanzer",
            "name": "hp",
            "value": "9000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "jagpanzer",
            "name": "atk",
            "value": "600000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak120",
            "name": "hp",
            "value": "3500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak120",
            "name": "atk",
            "value": "600000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak120",
            "name": "special",
            "value": "[40,56,59,87]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak120",
            "name": "zone",
            "value": "60000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "v1missile",
            "name": "hp",
            "value": "6000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "v1missile",
            "name": "top",
            "value": "5000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fritzx",
            "name": "hp",
            "value": "6000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fritzx",
            "name": "top",
            "value": "6500000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "wildwind",
            "name": "hp",
            "value": "12000000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "wildwind",
            "name": "atk",
            "value": "50000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "wildwind",
            "name": "special",
            "value": "[6,40,93]"
        },
        "\t[系统提示]敌人战力重置完成",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]即将进入存档界面",
        {
            "type": "callSave"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[任务目标]⭐击败莫德尔（主线boss）\n⭐击败米歇尔·魏特曼（精英敌人）\n⭐击败所有伏兵",
        {
            "type": "callBook"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]出现新敌人：V2弹道导弹。4.8倍音速，接近外太空的飞行高度，以二战的科技水平，没有任何拦截手段，只能被动挨炸。",
        "\t[系统提示]但好在它们准头太差，杀伤力不强，也不会追着你跑。不过还是会给你上一层debuff，是硬着头皮撞，还是小心绕路，取决于你！",
        {
            "type": "setValue",
            "name": "flag:第49关通关",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:mission49tsk3",
            "value": "0"
        },
        {
            "type": "setTask",
            "name": "第49关任务1",
            "n": 1,
            "text": "击败莫德尔（主线boss）",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "第49关通关",
                    "operator": "=",
                    "text": "主线boss击破",
                    "count": "1"
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第49关任务2",
            "n": 1,
            "text": "击败米歇尔·魏特曼（精英敌人）",
            "info": [
                {
                    "type": "killLocs",
                    "loc": [
                        [
                            14,
                            7
                        ]
                    ],
                    "floorId": "MT370",
                    "operator": ">=",
                    "text": "击败魏特曼",
                    "count": 1
                }
            ]
        },
        {
            "type": "setTask",
            "name": "第49关任务3",
            "n": 1,
            "text": "击败所有伏兵",
            "info": [
                {
                    "type": "checkFlag",
                    "checkFlag": "mission49tsk3",
                    "operator": ">=",
                    "text": "已击溃的伏兵",
                    "count": "5"
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,12": [
            "\f[v2.jpg,90,50]V2导弹是世界上最早投入使用的弹道导弹，旨在从欧洲大陆直接精确打击英国本土目标，标志着火箭技术迈入了一个崭新的发展阶段。最大航程320千米，弹头可以装载1000千克高能炸药，或是生物化学战剂，甚至是核弹头（虽然德国的核弹没研发出来）。导弹可以被发射到100千米的高度（即卡门线，外太空与地球大气层的分界线），最大飞行速度达到4.8马赫（即4.8倍音速），以二战时期的水平完全无法拦截，由此造成极大恐慌。幸运的是，V2导弹准头极差，虽然袭击伦敦造成大量平民伤亡，但没有起到挽回德国败局的作用。"
        ],
        "8,12": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]从这关起，绿史莱姆支楞起来了！看一下怪物手册吧！",
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]另外，建议你要往前冲锋的时候，保持血量健康。小心“会说德语的树”！"
        ],
        "7,10": [
            {
                "type": "animate",
                "name": "wonder",
                "loc": "hero",
                "async": true
            },
            {
                "type": "animate",
                "name": "vehicleexplore",
                "loc": "hero",
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "-=",
                "value": "500000"
            },
            {
                "type": "moveHero",
                "steps": [
                    "right:0"
                ]
            },
            "\t[盟军指挥官,hero]三点钟方向，树丛里面，是辆坦克！",
            "\t[盟军指挥官,hero]装填穿甲弹，开火！",
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    12,
                    10
                ]
            },
            "\t[虎式坦克车长,tigere]驾驶员，前进。装填手，穿甲弹准备！",
            {
                "type": "playSound",
                "name": "move3.mp3"
            },
            {
                "type": "setBlock",
                "number": "tigere",
                "loc": [
                    [
                        12,
                        10
                    ]
                ],
                "time": 500
            },
            {
                "type": "move",
                "loc": [
                    12,
                    10
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "left:2"
                ]
            },
            "\t[盟军指挥官,hero]该死，是虎式！全速前进，绕到他侧后方！",
            {
                "type": "moveHero",
                "time": 100,
                "steps": [
                    "right:1"
                ]
            },
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "-=",
                "value": "500000"
            },
            {
                "type": "animate",
                "name": "vehicleexplore",
                "loc": "hero"
            },
            {
                "type": "moveHero",
                "time": 100,
                "steps": [
                    "right:1"
                ]
            },
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "-=",
                "value": "500000"
            },
            {
                "type": "animate",
                "name": "vehicleexplore",
                "loc": "hero"
            },
            "\t[虎式坦克车长,tigere]挂倒挡！别让他们冲到后面！",
            {
                "type": "move",
                "loc": [
                    10,
                    10
                ],
                "time": 300,
                "keep": true,
                "async": true,
                "steps": [
                    "right:1"
                ]
            },
            {
                "type": "moveHero",
                "time": 100,
                "async": true,
                "steps": [
                    "right:3",
                    "left:0"
                ]
            },
            {
                "type": "waitAsync"
            },
            "\t[盟军指挥官,hero]干掉他！",
            {
                "type": "animate",
                "name": "vehicleexplore",
                "loc": [
                    11,
                    10
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        10
                    ]
                ],
                "remove": true,
                "time": 500
            },
            "\t[盟军指挥官,hero]结束了……清点损失，然后继续前进。",
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]本区域还有更多敌军伏兵。当主角行走至特定地点时，如果对应位置的伏兵没有被解决，则主角会遭受一次攻击。",
            "\t[系统提示]遭受伏击后，系统会自动提示你对应伏兵的大致方位和类型。注意调查可疑的树丛，使伏兵现身并将其击杀。",
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        10
                    ]
                ],
                "remove": true
            }
        ],
        "8,1": [
            {
                "type": "if",
                "condition": "((blockId:8,1!=='lightmg')&&(flag:fuji1!==true))",
                "true": [
                    {
                        "type": "animate",
                        "name": "hand",
                        "loc": [
                            8,
                            1
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "lightmg",
                        "loc": [
                            [
                                8,
                                1
                            ]
                        ],
                        "time": 0
                    }
                ]
            }
        ],
        "7,1": [
            {
                "type": "if",
                "condition": "(flag:fuji1!==true)",
                "true": [
                    {
                        "type": "animate",
                        "name": "shoot",
                        "loc": "hero",
                        "async": true
                    },
                    {
                        "type": "animate",
                        "name": "wonder",
                        "loc": "hero",
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "operator": "-=",
                        "value": "450000"
                    },
                    "你的部队遭遇\r[yellow]机枪扫射\r，数名士兵当场殒命。枪声似乎是从\r[yellow]你所处位置的右侧\r传来的。"
                ]
            }
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT368",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "8,1": [
            {
                "type": "setValue",
                "name": "flag:fuji1",
                "value": "true"
            },
            {
                "type": "setValue",
                "name": "flag:mission49tsk3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        1
                    ]
                ],
                "remove": true,
                "time": 0
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [636,636,635,635,266,  0,146, 91,146, 21,146, 22, 22, 22,373],
    [146,146,146,146,146, 82,146,  0,146,391,146,146,265,146,146],
    [636,636,146,608,  0,  0, 81,744,201,  0,146,  0,518,201,643],
    [636,636,146,146,228,146,146,412,146,  0, 81,227,  0,146,146],
    [ 82,146,146,637,  0,146,391,635,146,  0,146, 81,146,146,637],
    [  0,265, 81,  0,638,146,635,635,146,669,146, 21, 21,146,637],
    [146,146,146,275,146,146,146,146,146,  0,146,146,265,146,637],
    [638,638,146,  0, 81,  0,146,668,275,  0,146,  0,643,146,406],
    [275,638,146,373,146,  0, 81,389,146,  0, 81,275,  0, 81,  0],
    [ 81,146,146,146,146,228,146,146,146,406,146,146,146,146,201],
    [  0,  0,227,  0,  0,  0,  0,  0,  0,  0,  0,  0,146,643,643],
    [146,146,146,146,146,146,146, 86,146,146,146,146,146,146,146],
    [146,146,146,609, 21,  0,129,  0,601,  0, 21,609,146,146,146],
    [146,146,609, 21,  0,  0,  0,  0,  0,  0,  0, 21,609,146,146],
    [146,609, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21,609,146]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}