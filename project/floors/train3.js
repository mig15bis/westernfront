main.floors.train3=
{
    "floorId": "train3",
    "title": "训练场",
    "name": "训练场",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "status:hp",
            "value": "6300",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:hpmax",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:atk",
            "value": "10",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:top",
            "value": "100",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:money",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:exp",
            "value": "0"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "text",
            "text": "\t[蒙巴顿]\f[montbarton.png,0,310]欢迎来到最后的海军教学，指挥官阁下。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[蒙巴顿]\f[montbarton.png,0,310]我们直入正题。也许你已经在陆战教学中认识了“穿甲”和“装甲”两项属性，那么，状态栏中剩余的两个属性：\r[yellow]“雷击”和“鱼雷管”\r就是我们在海战中会用到的属性。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[蒙巴顿]\f[montbarton.png,0,310]在海上的战斗中，我们经常用到一种特殊的武器：鱼雷。这是一种对军舰杀伤力极大的武器，而本游戏的海战环节，鱼雷攻击就是依靠双方的“雷击”和“鱼雷管”判定的。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[蒙巴顿]\f[montbarton.png,0,310]在海战中，双方除了每回合用攻击力进行常规的“舰炮对射”以外，在一定的回合数过后，可以发起各自的鱼雷攻击。通常情况下，\r[yellow]我方是每隔10个回合\r，敌方的发射轮次可以查看怪物手册的技能说明。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[蒙巴顿]\f[montbarton.png,0,310]每次发射鱼雷时，“鱼雷管”的数值就是你单次发射鱼雷的总量。这个数值\r[yellow]不是靠捡拾宝石获取，而是依靠装备\r。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[蒙巴顿]\f[montbarton.png,0,310]不过，双方也会互相尝试躲避对方的鱼雷攻击，所以实际命中的鱼雷数，等于\r[yellow]“攻方鱼雷管-守方闪避数”\r。至于具体躲开几枚鱼雷，由我方的装备和敌方的技能决定。",
            "pos": [
                100,
                300,
                380
            ]
        },
        "注意：当闪避数量为负时，按0处理。",
        {
            "type": "text",
            "text": "\t[蒙巴顿]\f[montbarton.png,0,310]而鱼雷命中敌人时，单发鱼雷的伤害就是“雷击”值了。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[蒙巴顿]\f[montbarton.png,0,310]因此，一轮鱼雷攻击的总伤害就等于\r[yellow]“雷击×命中鱼雷数量”\r。由于雷击通常数值比较大，所以鱼雷攻击一旦命中，造成的伤害往往很可观。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[蒙巴顿]\f[montbarton.png,0,310]好了，理论部分到此为止，接下来是实战。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "setValue",
            "name": "item:edinburgh",
            "operator": "+=",
            "value": "1"
        },
        {
            "type": "loadEquip",
            "id": "edinburgh"
        },
        {
            "type": "text",
            "text": "\t[蒙巴顿]\f[montbarton.png,0,310]现在这艘巡洋舰的指挥权交给你。前面那艘经过改造的武装商船就是本次的演习对手，去跟他们打一场吧。",
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
        "14,7": [
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
                "type": "pauseBgm"
            },
            {
                "type": "update"
            },
            {
                "type": "hideui"
            },
            {
                "type": "setHeroOpacity",
                "opacity": 0
            },
            {
                "type": "setValue",
                "name": "status:hp",
                "value": "1000"
            },
            {
                "type": "setValue",
                "name": "status:hpmax",
                "value": "2000"
            },
            {
                "type": "setValue",
                "name": "status:mana",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "status:atk",
                "value": "10"
            },
            {
                "type": "setValue",
                "name": "status:arm",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "status:top",
                "value": "100"
            },
            {
                "type": "setValue",
                "name": "status:tpn",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "status:dod",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "status:mdef",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "status:money",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "status:exp",
                "value": "0"
            },
            {
                "type": "function",
                "function": "function(){\nflags.skillList=[0,0,0,0,0,0,0]\n}"
            },
            {
                "type": "confirm",
                "text": "跳过初始剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "prepare1",
                        "loc": [
                            7,
                            7
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT0",
                        "loc": [
                            -1,
                            -1
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "3,7": [
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]非常好。\r[yellow]巡洋舰\r是海战中的中型舰艇，各项性能较为均衡，辅助作用较为明显。在对付敌方小型舰艇时更有优势。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]我们的下一个对手是一艘\r[yellow]潜艇\r。这是一群很麻烦的家伙，因为它们潜伏在水下，\r[yellow]普通攻击很难对它们造成有效杀伤\r。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]潜艇本身攻击力为0，不会进行普通攻击，但它们的鱼雷攻击是致命性的，而且还会先手攻击。更可恶的是，未来最有可能与我们发生冲突的德国，其海军主力正是潜艇。所以反潜攻击是你必须要重点学习的内容。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]能够有效打击潜艇的舰种，在本游戏中，有且只有\r[yellow]驱逐舰\r。它们是一些小型作战舰艇，火力贫弱，在海战中不占优势，但它们也有自己的特长——较高的闪避率，以及装载更多的鱼雷。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]此外，所有的驱逐舰都搭载了\r[yellow]深水炸弹\r，可以在一定的回合数内对潜艇造成有效杀伤。深水炸弹的伤害与攻击力相关。而驱逐舰自身较高的闪避率可以在潜艇发起鱼雷攻击时，闪避掉其中的一大部分。如果你要与敌军潜艇大队发生正面冲突，那么驱逐舰是不可或缺的。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "setValue",
                "name": "item:classe",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]现在你已经获得了一队驱逐舰的指挥权，现在试着去完成反潜训练。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "loadEquip",
                "id": "classe"
            }
        ],
        "6,7": [
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]不错，就是这样。一定记牢这些知识，上一次世界大战期间，我们可没少吃这些家伙的苦头。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]我们已经认识了两种军舰，接下来我带你认识下，我们夺取制海权最重要的大型舰艇，也就是装备槽上的“主力舰”位置。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]这个位置可以装备两种不同类型的战舰，其中之一，就是\r[yellow]战列舰\r。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]战列舰装备了许多大中型口径的舰炮，威力十分强悍。它们可以极大强化你的普通攻击，并且每隔一段时间就可以用自身的大型舰炮发起一轮致命打击。此外，其遍布全身的厚重装甲也可以抵御相当一部分伤害。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]不过，战列舰虽然威猛，也有自身的弱项，那就是体型庞大，比较笨重，非常容易被鱼雷击中。如果遭遇了敌军的潜艇，那绝对会被克制，因此必须有驱逐舰为其护航。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "setValue",
                "name": "item:warspite",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]战列舰造价很高，非常金贵，要好好保护它们。现在给你个机会去试试吧。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "loadEquip",
                "id": "warspite"
            }
        ],
        "9,7": [
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]我们之前说过，“主力舰”的格子可以装备两种军舰。除了战列舰以外，另一个类型就是\r[yellow]航空母舰\r。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]到目前为止，航空母舰作为新兴舰种，还没有经历过实战的检验。我们尚且不知道它们未来会有多大潜力。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]航母既没有强大的舰炮，也没有厚重的装甲，自身体型也十分庞大而笨重。但它们会使用自己的特色武器：\r[yellow]舰载机\r。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]之前你已经接受过空军教学，知道有三种类型的空军装备，而航母就是一艘可以搭载这三种飞机的海上机场。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]每一艘航母都\r[yellow]固定搭载着三种不同的舰载机，不能更换\r，换言之，你装备一艘航母，就相当于同时装了三种飞机。而且，如果你在装备航母的同时，额外装备了相同的空军类装备，那么它们是\r[yellow]可以共存的，且属性和效果会叠加\r",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]航母舰载机有三种类型：\r[yellow]战斗机\r可以帮你在海上夺取制空权；\r[yellow]俯冲轰炸机\r属于“攻击机”，使用炸弹对目标进行精准打击。伤害一般，但胜在稳定；\r[yellow]鱼雷轰炸机\r属于“轰炸机”，其进行的空中鱼雷攻击是独立于常规鱼雷攻击之外的，伤害较高，但容易被闪避，适合攻击大型敌舰。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]不过，能够在航母上起降的飞机需要进行特殊设计，会牺牲很多性能。所以\r[yellow]不是所有的飞机都能在航母上起降\r，且\r[yellow]航母舰载机相比同时期的陆基飞机会偏弱一些\r。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "setValue",
                "name": "item:hurricanemk1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:skua",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:swordfish",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:eagle",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]一艘航母及其对应的战机已经交给你，尝试使用航空母舰攻击目标靶舰吧。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            "\t[系统提示]注意：航母只占一个装备格子，其飞机不再单独占用装备格。这里给你的额外飞机是用来给你看下它们的属性和特效的。",
            {
                "type": "loadEquip",
                "id": "eagle"
            },
            {
                "type": "loadEquip",
                "id": "hurricanemk1"
            },
            {
                "type": "loadEquip",
                "id": "skua"
            },
            {
                "type": "loadEquip",
                "id": "swordfish"
            }
        ],
        "12,7": [
            {
                "type": "text",
                "text": "\t[蒙巴顿]\f[montbarton.png,0,310]做的不错。现在，所有的科目都已合格，那么，恭喜你，指挥官阁下，你毕业了！明天来军营报道！",
                "pos": [
                    100,
                    300,
                    380
                ]
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
                "name": "item:classe",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "item:edinburgh",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "item:warspite",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "item:eagle",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "item:hurricanemk1",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "item:skua",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "item:swordfish",
                "value": "0"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  3,  3,  3,  3,  3,  3,  3,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,345,  3,  0,567,  3,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  3,  0,  0,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  0,  0,  0,209,  0,567,216,  0,  0,209,  0,  0,209,  0, 89],
    [  0,  0,  0,  3,  0,  0,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  0,  0,345,  3,  0,567,  3,  0,  0,  0,  0,  0,  0,  0,  0],
    [  3,  3,  3,  3,  3,  3,  3,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
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
    "bgm": "ConquestofParadise.mp3",
    "area": "海洋"
}