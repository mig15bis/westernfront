main.floors.MT141=
{
    "floorId": "MT141",
    "title": "珍珠港",
    "name": "珍珠港",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "medaction1.mp3",
    "firstArrive": [
        {
            "type": "text",
            "text": "\t[南云忠一]\f[nanbu.jpg,0,310]为防止敌人的反扑，取消原定的第三波次攻击。攻击机群现在返航，我们即刻离开。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[山本五十六]\f[yamamoto.jpg,0,310]袭击成功了，但我更担心的是，我们的行动是不是在唤醒一个沉睡着的巨人？",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[尼米兹]\f[nimitz.png,0,310]日本人无耻地对我们不宣而战，太平洋舰队损失惨重。唯一的好消息是，我们所有的航空母舰都不在珍珠港内，未来我们要依靠她们去应对日军的入侵了。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[哈尔西]\f[halsey.jpg,0,310]企业号全速前进，回港补给，我们要准备出海复仇了！等到我们复仇完成，我只允许日本人在地狱里说日语！",
            "pos": [
                100,
                300,
                380
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,0": [
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
                "function": "function(){\nflags.mission[21][0]=true\n}"
            },
            {
                "type": "function",
                "function": "function(){\nflags.skillList=[0,0,0,0,0,0,0]\n}"
            },
            {
                "type": "setValue",
                "name": "item:p40c",
                "operator": "-=",
                "value": "1"
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
                "value": "22"
            },
            {
                "type": "setValue",
                "name": "status:hpmax",
                "value": "flags.hero_backup[0]",
                "norefresh": true
            },
            {
                "type": "setValue",
                "name": "status:hp",
                "value": "flags.hero_backup[1]",
                "norefresh": true
            },
            {
                "type": "setValue",
                "name": "status:atk",
                "value": "flags.hero_backup[2]",
                "norefresh": true
            },
            {
                "type": "setValue",
                "name": "status:top",
                "value": "flags.hero_backup[3]",
                "norefresh": true
            },
            {
                "type": "setValue",
                "name": "status:mdef",
                "value": "flags.hero_backup[4]",
                "norefresh": true
            },
            {
                "type": "setValue",
                "name": "status:mana",
                "value": "flags.hero_backup[5]",
                "norefresh": true
            },
            {
                "type": "setValue",
                "name": "status:money",
                "value": "flags.hero_backup[6]",
                "norefresh": true
            },
            {
                "type": "function",
                "function": "function(){\ncore.status.hero.items = {\n\t'constants': flags['永久道具备份'],\n\t'tools': flags['消耗道具备份'],\n\t'equips': flags['装备备份']\n};\n}"
            },
            {
                "type": "openShop",
                "id": "shop1"
            },
            {
                "type": "openShop",
                "id": "shop2"
            },
            {
                "type": "openShop",
                "id": "shop3"
            },
            "1941年12月7日，美国在夏威夷群岛的海军基地珍珠港，突然遭到了来自日本飞机的空袭。",
            "美军对此完全没有任何预料。一上午的时间内，整个军港变为人间炼狱。",
            "这是一次有组织有预谋的行动。攻击由日本海军6艘大型航空母舰发起，350余架飞机分两个波次，从多个方向对港口、机场和其他一些设施发起空袭。",
            "攻击造成了极大的损失。美国太平洋舰队的全部8艘战列舰都受到重创或被击沉，6艘巡洋舰和3艘驱逐舰受损伤，270余架飞机被摧毁，3400军民伤亡。日军仅损失55架飞机和几艘微型潜艇。",
            "而日方直到袭击开始一段时间以后，才向美国政府提交宣战书。",
            "珍珠港事件的发生引起了整个美国的轰动，几乎每一个美国人都愤怒地发声，他们迫切想加入战争，把炸弹扔回日本领土上。之前的几年中，国内的反战呼声还很高，但就这一个早上的工夫，反战的声音几乎没有了。",
            "罗斯福总统于次日发表演讲，并正式对日宣战。几天后，美国也对德国和意大利宣战。一直受制于规矩和民众呼声的美国政府终于得以正式加入这场世界大战。",
            "珍珠港的袭击虽然炸毁了大部分军舰和飞机，但事件发生时，美国所有的航空母舰全都不在港内，储油设施和维修设备也都完好无损。这成为了美国日后反击的资本。",
            "日本还没有意识到自己闯了多大的祸，还在不知好歹的庆功，丝毫不知道远在欧洲的希特勒已经狠狠的擦了一把汗。",
            "战争机器开始飞速运转，各种武器弹药成批运出兵工厂，发到前线和盟友的手中。只需要足够的时间，无数钢铁大军就将出现在各大战场上，为敌人送上惊吓。",
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[世界消息]\r[aqua]美国 加入 反法西斯同盟国阵营",
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "pauseBgm"
            },
            "副本间章 已完成，是否提交分数？",
            {
                "type": "confirm",
                "text": "提交分数？",
                "yes": [
                    {
                        "type": "win",
                        "reason": "间章 夏威夷之殇 新"
                    }
                ],
                "no": [
                    {
                        "type": "confirm",
                        "text": "跳过剧情吗？",
                        "yes": [
                            {
                                "type": "changeFloor",
                                "floorId": "MT143",
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
                                "name": "gaijin1.mp3"
                            },
                            {
                                "type": "sleep",
                                "time": 1000
                            },
                            "隆美尔从托布鲁克败退回到利比亚后，希特勒似乎是终于清楚的认识到，即便是最优秀的将军，在缺乏补给的情况下也会吃败仗。",
                            "即便在莫斯科战役中惨遭失败，希特勒还是从东线抽调了一批部队和物资送往北非，援助隆美尔的沙漠军团。尤其是空军。",
                            "1942年1月开始，随着德军第二航空队的加入，隆美尔逐渐掌握了一定的制空权，也获得了补给。现在，到了隆美尔的反击时间。",
                            "就像他刚到北非时的那样，英军在装甲战方面完全不是隆美尔的对手，没过多久就再次败下阵来，一路撤退到班加西后面的贾扎拉防线。",
                            "英军去年在这里的战败是由于大意轻敌，但这一次，没有人再敢疏忽。英军利用自己的地面数量优势把贾扎拉防线经营了起来。",
                            "贾扎拉防线主要由障碍物、地雷和步兵组成，可以拖住敌人，再由后方的装甲和火炮部队及时增援，消灭来犯之敌。并且，这条防线很长，在一望无际又缺乏资源的沙漠中几乎不可能被绕开。",
                            "这对隆美尔来说确实很棘手。但他还是迅速制定了计划，抓紧一切时间展开行动。",
                            "一场大战，就此展开。",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "showImage",
                                "code": 1,
                                "image": "chapter5.jpg",
                                "loc": [
                                    0,
                                    0
                                ],
                                "opacity": 1,
                                "time": 0
                            },
                            {
                                "type": "setCurtain",
                                "time": 500
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
                                "floorId": "MT142",
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
            "floorId": "MT140",
            "loc": [
                2,
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
    [ 21, 21,140, 27, 27, 27,140, 89,140, 33,140, 27, 27,140, 31],
    [ 34, 34,140,  0,593,  0,140,593,140, 33,140, 27, 27,  0,593],
    [593,140,140,140, 81,140,140, 82,140,593,140,140,140,140, 81],
    [  0,  0, 81,  0, 30,  0, 81,  0,  0,594,  0, 30,  0,594,  0],
    [140,595,140, 27,  0, 27,140,  0, 31,140, 31,  0,  0,140, 30],
    [ 27, 29,140,140,594,140,140,593,140,140,140,140, 31,140, 30],
    [140,140,140,  0,595, 27,140,  0,594,  0,140, 31,140,140,140],
    [ 27, 27,595,  0,140, 27,140,  0,140, 30, 30,  0,140, 21, 21],
    [140,140,140,  0,140,140,140,595,140,140,140,594,140,140,594],
    [ 29,  0,140,594,140, 30, 30,  0,595,  0,  0,  0, 81,593,  0],
    [ 29,593, 81,  0,140,  0,140, 30,140,140,140,595,140,  0, 27],
    [ 29,  0,140,  0, 81,  0,140,140,140,  0, 32,  0,140, 27, 27],
    [140,140,140,  0,140,  0,594,  0, 81,593,140,140,140,140,593],
    [ 31, 30,140,  0,140, 32,140,  0,140,  0, 31, 21,140,  0,  0],
    [ 31, 30,593,  0,140,  0,140, 93,140,  0, 21, 21,140, 30,  0]
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

],
    "area": "天空"
}